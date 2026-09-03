'use client'

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { microgrammaBold } from '@/lib/fonts'
import { ChevronDown, CheckCircle2, ShieldCheck, Tag, Loader2 } from 'lucide-react'
import { useAuthStore } from '@/store/auth.store'
import { useCart } from '@/hooks/useCart'
import { calculateClientPricing, CartItemInput, PricingSummary } from '@/lib/pricingEngine'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

function _prepend(imgPath: string): string {
  if (!imgPath) return ""
  if (imgPath.startsWith("http") || imgPath.startsWith("data:")) return imgPath
  return `${BASE_URL}${imgPath}`
}

export default function CheckoutPage() {
  const router = useRouter()
  const { isAuthenticated, isHydrated } = useAuthStore()
  const { data: apiCart } = useCart()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    country: 'in',
    postalCode: '',
  })

  const [paymentMethod, setPaymentMethod] = useState('online')
  const [showCouponInput, setShowCouponInput] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState('')
  const [couponError, setCouponError] = useState<string | null>(null)
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)

  const [buyNowItem, setBuyNowItem] = useState<any>(null)
  const [backendPricing, setBackendPricing] = useState<PricingSummary | null>(null)
  const [isLoadingPricing, setIsLoadingPricing] = useState(false)

  // Auth and cart check
  useEffect(() => {
    if (isHydrated) {
      if (!isAuthenticated) {
        router.replace('/login?redirect=/checkout')
        return
      }
      const isBuyNow = sessionStorage.getItem('is_buy_now') === 'true'
      if (isBuyNow) {
        const stored = sessionStorage.getItem('buy_now_item')
        if (stored) {
          try {
            setBuyNowItem(JSON.parse(stored))
          } catch {
            router.replace('/cart')
          }
        } else {
          router.replace('/cart')
        }
      } else {
        if (apiCart && (!apiCart.items || apiCart.items.length === 0)) {
          router.replace('/cart')
        }
      }
    }
  }, [isHydrated, isAuthenticated, apiCart, router])

  const isBuyNow = typeof window !== 'undefined' ? sessionStorage.getItem('is_buy_now') === 'true' : false

  // Normalize checkout items
  const checkoutItems = useMemo(() => {
    if (isBuyNow) {
      if (!buyNowItem) return []
      return [{
        id: buyNowItem.id,
        productId: buyNowItem.productId || buyNowItem.id,
        title: buyNowItem.name || buyNowItem.title || 'Product',
        priceVal: Number(buyNowItem.priceVal ?? buyNowItem.price ?? 0),
        quantity: buyNowItem.quantity || 1,
        image: _prepend(buyNowItem.image || ''),
        gstRate: Number(buyNowItem.gstRate ?? 18),
      }]
    }

    if (apiCart?.items) {
      return apiCart.items.map((item: any) => {
        const p = item.product || {}
        const price = Number(p.price ?? p.productCost ?? p.basePrice ?? 0)
        return {
          id: item.id,
          productId: item.productId,
          title: p.name || p.title || 'Product',
          priceVal: price,
          quantity: item.quantity,
          image: _prepend(p.imagePath || (p.images && p.images[0]) || ''),
          gstRate: Number(p.gstRate ?? 18),
        }
      })
    }
    return []
  }, [isBuyNow, buyNowItem, apiCart])

  // Client-side fallback pricing
  const clientPricing = useMemo(() => {
    const inputs: CartItemInput[] = checkoutItems.map((it: any) => ({
      product: {
        id: it.id,
        productId: it.productId,
        productName: it.title,
        price: it.priceVal,
        productCost: it.priceVal,
        gstRate: it.gstRate,
      },
      quantity: it.quantity,
    }))
    return calculateClientPricing(inputs, { couponCode: appliedCoupon })
  }, [checkoutItems, appliedCoupon])

  // Fetch confirmed pricing from backend
  const fetchConfirmedPricing = useCallback(async (codeToApply?: string) => {
    const activeCoupon = codeToApply !== undefined ? codeToApply : appliedCoupon
    setIsLoadingPricing(true)

    try {
      const token = localStorage.getItem('token')
      const payload: any = {
        couponCode: activeCoupon || undefined,
      }

      if (isBuyNow && checkoutItems.length > 0) {
        payload.productId = checkoutItems[0].productId
        payload.quantity = checkoutItems[0].quantity
      } else if (checkoutItems.length > 0) {
        payload.items = checkoutItems.map((it: any) => ({
          productId: it.productId,
          quantity: it.quantity,
        }))
      }

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      }
      if (token) {
        headers['Authorization'] = `Bearer ${token}`
      }

      const res = await fetch(`${BASE_URL}/payment/calculate-pricing`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        const data = await res.json()
        setBackendPricing(data)
        if (activeCoupon && data.discount > 0) {
          setAppliedCoupon(activeCoupon)
          setCouponError(null)
        } else if (activeCoupon && data.discount === 0) {
          setCouponError('Coupon code is not valid for this order')
        }
      }
    } catch (err) {
      console.error('Failed to fetch confirmed pricing from backend:', err)
    } finally {
      setIsLoadingPricing(false)
    }
  }, [isBuyNow, checkoutItems, appliedCoupon])

  useEffect(() => {
    if (checkoutItems.length > 0) {
      fetchConfirmedPricing()
    }
  }, [fetchConfirmedPricing, checkoutItems.length])

  // Active pricing to display: prioritize backend confirmed data
  const invoice = backendPricing || clientPricing

  // Handle coupon apply
  const handleApplyCoupon = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    const formatted = couponCode.trim().toUpperCase()
    if (!formatted) {
      setCouponError('Please enter a coupon code')
      return
    }

    setIsApplyingCoupon(true)
    setCouponError(null)
    try {
      await fetchConfirmedPricing(formatted)
    } finally {
      setIsApplyingCoupon(false)
    }
  }

  // Handle coupon remove
  const handleRemoveCoupon = async () => {
    setAppliedCoupon('')
    setCouponCode('')
    setCouponError(null)
    await fetchConfirmedPricing('')
  }

  // Handle Place Order form submission
  const handlePaymentClick = (e: React.FormEvent) => {
    e.preventDefault()

    // 1. Save billing address for payment page
    sessionStorage.setItem('mockup_address', JSON.stringify(formData))

    // 2. Save confirmed pricing & coupon for payment page
    sessionStorage.setItem('confirmed_pricing', JSON.stringify(invoice))
    if (appliedCoupon) {
      sessionStorage.setItem('applied_coupon', appliedCoupon)
    } else {
      sessionStorage.removeItem('applied_coupon')
    }

    // 3. Navigate to Payment page
    router.push('/payment')
  }

  if (!isHydrated) {
    return (
      <div className="w-full bg-[#eefaf6] text-[#074c43] min-h-screen pt-32 pb-16 flex items-center justify-center font-sans">
        <div className="text-center font-bold">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) return null

  return (
    <div className="w-full bg-[#eefaf6] text-[#074c43] min-h-screen pt-[33px] md:pt-[47px] lg:pt-[52px] xl:pt-[56px] pb-16 px-3 sm:px-5 font-sans">
      <div className="mx-auto w-full space-y-12">
        {/* Main Checkout Banner */}
        <div
          className="w-full rounded-[32px] md:rounded-[40px] px-6 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-32 md:px-12 md:pb-12 md:pt-40 shadow-[0_12px_30px_rgba(7,76,67,0.08)] flex flex-col lg:min-h-[780px] overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #177E80 0%, #AFE5CC 100%)',
          }}
        >
          <div className="max-w-[1300px] mx-auto w-full flex-1 flex flex-col min-h-0">
            <h1
              className={`${microgrammaBold.className} text-white text-3xl sm:text-4xl md:text-[56px] leading-none mb-8 shrink-0`}
            >
              Checkout
            </h1>

            {/* Translucent Container */}
            <div className="border border-white/30 rounded-[32px] p-4 sm:p-8 flex-1 flex flex-col justify-center">
              <form
                onSubmit={handlePaymentClick}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch items-start w-full"
              >
                {/* Left Column: Billing Details Form (Restored & Preserved) */}
                <div className="lg:col-span-7 bg-white rounded-[16px] p-6 sm:p-8 shadow-sm flex flex-col gap-6 h-full">
                  <h3
                    className="text-base sm:text-lg font-bold text-[#074139] tracking-wide"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    Billing Details
                  </h3>

                  <div className="space-y-4 flex-1 flex flex-col justify-between">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          className="text-xs font-bold text-[#074139] block"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          First Name<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-xs font-bold text-[#074139] block"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          Last Name<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        />
                      </div>
                    </div>

                    {/* Country/Region */}
                    <div className="space-y-2">
                      <label
                        className="text-xs font-bold text-[#074139] block"
                        style={{ fontFamily: 'var(--font-michroma)' }}
                      >
                        Country/Region<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={formData.country}
                          onChange={(e) =>
                            setFormData({ ...formData, country: e.target.value })
                          }
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-xs font-bold text-[#074139] appearance-none focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          <option value="in">India</option>
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Street Address */}
                    <div className="space-y-2">
                      <label
                        className="text-xs font-bold text-[#074139] block"
                        style={{ fontFamily: 'var(--font-michroma)' }}
                      >
                        Street address<span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-3">
                        <input
                          type="text"
                          required
                          placeholder="House number and street name"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({ ...formData, address: e.target.value })
                          }
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        />
                        <input
                          type="text"
                          placeholder="Apartment, suite, unit, etc. (optional)"
                          value={formData.apartment}
                          onChange={(e) =>
                            setFormData({ ...formData, apartment: e.target.value })
                          }
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        />
                      </div>
                    </div>

                    {/* Postal/ZIP & City */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          className="text-xs font-bold text-[#074139] block"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          Postal/ZIP<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="PIN Code"
                          value={formData.postalCode}
                          onChange={(e) =>
                            setFormData({ ...formData, postalCode: e.target.value })
                          }
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          className="text-xs font-bold text-[#074139] block"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          Town/City<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        />
                      </div>
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          className="text-xs font-bold text-[#074139] block"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          Phone Number<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit Mobile Number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          className="text-xs font-bold text-[#074139] block"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          Email Address<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        />
                      </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="checkbox"
                        id="newsletter-billing"
                        className="rounded border-slate-200 text-[#1D8582] focus:ring-[#1D8582] w-4 h-4 cursor-pointer"
                      />
                      <label
                        htmlFor="newsletter-billing"
                        className="text-[10px] text-slate-500 cursor-pointer"
                        style={{ fontFamily: 'var(--font-michroma)' }}
                      >
                        Sign up to receive order updates and news (optional)
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Column: Complete Confirmed Invoice, Coupon & Payment */}
                <div className="lg:col-span-5 flex flex-col gap-6 shrink-0 w-full">
                  {/* Confirmed Invoice Card */}
                  <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-base sm:text-lg font-bold text-[#074139] tracking-wide"
                        style={{ fontFamily: 'var(--font-michroma)' }}
                      >
                        Your Order Invoice
                      </h3>
                      {backendPricing && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                          <CheckCircle2 className="w-3 h-3 text-teal-600" />
                          Backend Confirmed
                        </span>
                      )}
                    </div>

                    {/* Line Items List */}
                    <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                      {checkoutItems.map((item: any, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/70 border border-slate-100 text-xs"
                        >
                          <img
                            src={item.image || '/placeholder.jpg'}
                            alt={item.title}
                            className="w-12 h-12 object-contain rounded-lg bg-white p-1 border border-slate-100 shrink-0"
                            onError={(e) => {
                              const target = e.currentTarget
                              if (
                                item.image &&
                                item.image.startsWith('/') &&
                                target.src.startsWith(BASE_URL)
                              ) {
                                target.src = encodeURI(item.image)
                              }
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <p
                              className="font-bold text-[#074139] line-clamp-1"
                              style={{ fontFamily: 'var(--font-michroma)' }}
                            >
                              {item.title}
                            </p>
                            <p className="text-[10px] text-slate-400 mt-0.5 font-medium">
                              Qty: {item.quantity} × ₹{item.priceVal.toLocaleString('en-IN')}
                            </p>
                          </div>
                          <span
                            className="font-bold text-[#074139] shrink-0"
                            style={{ fontFamily: 'var(--font-michroma)' }}
                          >
                            ₹{(item.priceVal * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Detailed Invoice Breakdown */}
                    <div
                      className="space-y-3 pt-3 border-t border-slate-100"
                      style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                      {/* 1. Product(s) Price / Subtotal */}
                      <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                        <span>Product Price (Subtotal)</span>
                        <span className="font-bold">
                          ₹{invoice.subtotal.toLocaleString('en-IN', { minimumFractionDigits: 0 })}
                        </span>
                      </div>

                      {/* 2. Platform Charges */}
                      <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                        <span>Platform Charges</span>
                        {invoice.platformFee === 0 ? (
                          <span className="font-bold text-teal-600 text-xs uppercase">
                            WAIVED
                          </span>
                        ) : (
                          <span className="font-bold">
                            + ₹{invoice.platformFee}
                          </span>
                        )}
                      </div>

                      {/* 3. GST (Tax) */}
                      <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                        <span>Estimated GST</span>
                        <span className="font-bold">
                          + ₹{invoice.tax.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </span>
                      </div>

                      {/* 4. Shipping Charge */}
                      <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                        <span>Shipping Charges</span>
                        {invoice.shippingCharge === 0 ? (
                          <span className="font-bold text-teal-600 text-xs uppercase">
                            FREE
                          </span>
                        ) : (
                          <span className="font-bold">
                            + ₹{invoice.shippingCharge}
                          </span>
                        )}
                      </div>

                      {/* 5. Coupon Discount (if applied) */}
                      {invoice.discount > 0 && (
                        <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-emerald-600">
                          <span className="flex items-center gap-1">
                            <Tag className="w-3.5 h-3.5" />
                            Coupon Discount ({appliedCoupon})
                          </span>
                          <span>- ₹{invoice.discount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                        </div>
                      )}

                      {/* Total Net Payable */}
                      <div className="flex items-center justify-between text-sm sm:text-base font-bold text-[#074139] pt-3 border-t border-slate-100">
                        <span>Total Net Payable</span>
                        <span className="font-black text-lg text-teal-900 flex items-center gap-2">
                          {isLoadingPricing && (
                            <Loader2 className="w-4 h-4 animate-spin text-teal-600" />
                          )}
                          ₹{invoice.totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Coupon Card */}
                  <div className="bg-white rounded-[16px] p-5 shadow-sm text-left space-y-3">
                    {appliedCoupon ? (
                      <div className="flex items-center justify-between p-3 bg-teal-50 border border-teal-200 rounded-xl">
                        <div className="flex items-center gap-2 text-xs font-bold text-teal-800">
                          <Tag className="w-4 h-4 text-teal-600" />
                          <span>{appliedCoupon} APPLIED</span>
                          <span className="text-[10px] font-normal text-teal-600">
                            (Saved ₹{invoice.discount})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveCoupon}
                          className="text-xs font-bold text-red-500 hover:text-red-700 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    ) : !showCouponInput ? (
                      <button
                        type="button"
                        onClick={() => setShowCouponInput(true)}
                        className="text-xs font-semibold text-[#1D8582] hover:underline cursor-pointer bg-transparent border-none p-0 flex items-center gap-1.5"
                        style={{ fontFamily: 'var(--font-michroma)' }}
                      >
                        <Tag className="w-3.5 h-3.5" />
                        <span>Have a coupon? Click here</span>
                      </button>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            placeholder="e.g. SAVE100 or OBPARK10"
                            value={couponCode}
                            onChange={(e) => {
                              setCouponCode(e.target.value)
                              setCouponError(null)
                            }}
                            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-[#074139] focus:outline-none focus:ring-2 focus:ring-[#1D8582] uppercase"
                          />
                          <button
                            type="button"
                            onClick={handleApplyCoupon}
                            disabled={isApplyingCoupon}
                            className="px-5 py-2 bg-[#1D8582] text-white text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-1.5"
                            style={{ fontFamily: 'var(--font-michroma)' }}
                          >
                            {isApplyingCoupon ? (
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            ) : (
                              'Apply'
                            )}
                          </button>
                        </div>
                        {couponError && (
                          <p className="text-[11px] text-red-500 font-medium">
                            {couponError}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Payment Options Card */}
                  <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm flex flex-col gap-6">
                    <div className="space-y-3">
                      {[
                        { id: 'online', label: 'Online Payment (Cards, UPI, NetBanking)', icon: '🔒' },
                        { id: 'credit_card', label: 'Credit Card', icon: '💳' },
                        { id: 'upi', label: 'UPI / GPay / PhonePe', icon: '📱' },
                      ].map((option) => (
                        <label
                          key={option.id}
                          className={`flex items-center justify-between px-4 py-3 border rounded-xl transition-all cursor-pointer ${
                            paymentMethod === option.id
                              ? 'border-[#1D8582] bg-[#f0faf8]/50'
                              : 'border-slate-100'
                          }`}
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="payment_method"
                              value={option.id}
                              checked={paymentMethod === option.id}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                              className="text-[#1D8582] focus:ring-[#1D8582] w-4 h-4 cursor-pointer"
                            />
                            <span className="text-xs font-semibold text-[#074139]">
                              {option.label}
                            </span>
                          </div>
                          <span className="text-base">{option.icon}</span>
                        </label>
                      ))}
                    </div>

                    <p
                      className="text-[10px] text-slate-500 leading-relaxed"
                      style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                      Your personal data will be used to process your order, support
                      your experience throughout this website, and for other
                      purposes described in our privacy policy.
                    </p>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#1A817F] to-[#59D0B5] hover:opacity-90 text-white font-medium text-sm rounded-full transition-all shadow-sm text-center cursor-pointer flex items-center justify-center gap-2"
                      style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>Proceed to Payment (₹{invoice.totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 0 })})</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
