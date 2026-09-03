'use client'

import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ChevronDown
} from 'lucide-react'

import { useAuthStore } from '@/store/auth.store'
import { VehicleSelectDialog } from '@/components/cart/VehicleSelectDialog'
import { microgrammaBold } from '@/lib/fonts'
import { useCart, useRemoveCartItem, useUpdateCartItem } from '@/hooks/useCart'
import { calculateClientPricing, CartItemInput } from '@/lib/pricingEngine'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
function _prepend(imgPath: string): string {
  if (!imgPath) return "";
  if (imgPath.startsWith("http") || imgPath.startsWith("data:")) return imgPath;
  return `${BASE_URL}${imgPath}`;
}

interface CartItem {
  id: string
  productId?: string
  name: string
  description: string
  price: string
  priceVal: number
  quantity: number
  image: string
  vehicle: string | null
  gstRate?: number
}

export default function CartPage() {
  const router = useRouter()
  const { isAuthenticated, isHydrated } = useAuthStore()

  const { data: apiCart } = useCart()
  const removeItem = useRemoveCartItem()
  const updateItem = useUpdateCartItem()

  const [buyNowItem, setBuyNowItem] = useState<CartItem | null>(null)
  const [buyNowQtyTrigger, setBuyNowQtyTrigger] = useState(0)

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.replace('/login')
    }
  }, [isHydrated, isAuthenticated, router])

  useEffect(() => {
    const isBuyNow = sessionStorage.getItem('is_buy_now') === 'true'
    if (isBuyNow) {
      const stored = sessionStorage.getItem('buy_now_item')
      if (stored) {
        setBuyNowItem(JSON.parse(stored))
      }
    }
  }, [buyNowQtyTrigger])

  const isBuyNow = typeof window !== 'undefined' ? sessionStorage.getItem('is_buy_now') === 'true' : false;

  const cartItems = useMemo(() => {
    if (isBuyNow) {
      if (!buyNowItem) return [];
      return [{
        ...buyNowItem,
        gstRate: Number(buyNowItem.gstRate ?? 18),
      }];
    }
    if (apiCart?.items) {
      return apiCart.items.map((item: any) => {
        const isLinked = sessionStorage.getItem(`vehicle_link_${item.id}`) === 'Linked';
        const priceVal = Number(item.product?.price ?? item.product?.productCost ?? 0);
        return {
          id: item.id,
          productId: item.productId,
          name: item.product?.name || item.product?.title || 'Premium Product',
          description: item.product?.brand || 'OBPARK Premium Product',
          price: `₹ ${priceVal}`,
          priceVal,
          quantity: item.quantity,
          gstRate: Number(item.product?.gstRate ?? 18),
          image: _prepend(item.product?.imagePath || (item.product?.images && item.product?.images[0]) || ''),
          vehicle: item.vehicleId ? 'Linked' : (isLinked ? 'Linked' : null),
        };
      });
    }
    return [];
  }, [isBuyNow, buyNowItem, apiCart]);

  const pricingInput: CartItemInput[] = useMemo(() => {
    return cartItems.map((it: any) => ({
      product: {
        id: it.id,
        productId: it.productId,
        productName: it.name,
        price: it.priceVal,
        productCost: it.priceVal,
        gstRate: it.gstRate,
      },
      quantity: it.quantity,
    }));
  }, [cartItems]);

  const pricing = useMemo(() => {
    return calculateClientPricing(pricingInput);
  }, [pricingInput]);

  const subtotal = pricing.subtotal;

  const [dialogItem, setDialogItem] = useState<{
    id: string
    productName: string
  } | null>(null)

  const handleQtyChange = async (itemId: string, qty: number) => {
    if (isBuyNow) {
      const stored = sessionStorage.getItem('buy_now_item')
      if (stored) {
        const parsed = JSON.parse(stored)
        parsed.quantity = qty
        sessionStorage.setItem('buy_now_item', JSON.stringify(parsed))
        sessionStorage.setItem('mockup_cart_item', JSON.stringify(parsed))
        setBuyNowQtyTrigger(prev => prev + 1)
      }
    } else {
      await updateItem.mutateAsync({ itemId, quantity: qty })
    }
  }

  const handleRemoveItem = async (itemId: string) => {
    if (isBuyNow) {
      sessionStorage.removeItem('buy_now_item')
      sessionStorage.removeItem('mockup_cart_item')
      setBuyNowItem(null)
    } else {
      await removeItem.mutateAsync(itemId)
    }
  }

  const handleVehicleChange = (itemId: string, productName: string) => {
    setDialogItem({ id: itemId, productName })
  }

  const handleConfirmVehicle = (vehicleId: string | null) => {
    if (dialogItem) {
      if (isBuyNow) {
        if (buyNowItem && buyNowItem.id === dialogItem.id) {
          const updated = { ...buyNowItem, vehicle: vehicleId ? 'Linked' : null }
          sessionStorage.setItem('buy_now_item', JSON.stringify(updated))
          sessionStorage.setItem('mockup_cart_item', JSON.stringify(updated))
          setBuyNowItem(updated)
        }
      } else {
        const key = `vehicle_link_${dialogItem.id}`;
        if (vehicleId) {
          sessionStorage.setItem(key, 'Linked');
        } else {
          sessionStorage.removeItem(key);
        }
        setBuyNowQtyTrigger(prev => prev + 1)
      }
      setDialogItem(null)
    }
  }

  if (!isHydrated) {
    return (
      <div className="w-full bg-[#eefaf6] text-[#074c43] min-h-screen pt-32 pb-16 flex items-center justify-center">
        <div className="text-center font-bold">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) return null

  return (
    <div className="w-full bg-[#eefaf6] text-[#074c43] min-h-screen pt-[33px] md:pt-[47px] lg:pt-[52px] xl:pt-[56px] pb-16 px-3 sm:px-5">
      <div className="mx-auto w-full space-y-12">
        {/* Main Cart Banner - Screen Size on Desktop */}
        <div
          className="w-full rounded-[32px] md:rounded-[40px] px-6 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-32 md:px-12 md:pb-12 md:pt-40 shadow-[0_12px_30px_rgba(7,76,67,0.08)] flex flex-col lg:h-[calc(100vh-80px)] lg:min-h-[780px] overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #177E80 0%, #AFE5CC 100%)'
          }}
        >
          <div className="max-w-[1300px] mx-auto w-full flex-1 flex flex-col min-h-0">
            <h1 className={`${microgrammaBold.className} text-white text-3xl sm:text-4xl md:text-[56px] leading-none mb-8 shrink-0`}>
              Cart
            </h1>

          <div className="border border-white/30 rounded-[32px] p-4 sm:p-8 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Cart Items (Scrollable on desktop) */}
              <div className="lg:col-span-8 bg-white rounded-[16px] p-5 sm:p-8 shadow-sm flex flex-col">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 flex-1">
                  <h3 className="text-lg font-bold">Your cart is empty</h3>
                </div>
              ) : (
                <div className="flex flex-col h-full min-h-0">
                  {/* Scrollable list area */}
                  <div className="flex-1 overflow-y-auto pr-2 space-y-6 scrollbar-thin">
                    {cartItems.map((item: any) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row gap-6 py-4 relative"
                      >
                        {/* Product Image */}
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4 shrink-0 mx-auto sm:mx-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="text-sm sm:text-base font-normal text-[#074139] leading-tight"
                                    style={{ fontFamily: 'var(--font-michroma)' }}>
                                  {item.name}
                                </h3>
                                <p className="text-xs text-slate-500 mt-2 leading-relaxed max-w-sm"
                                   style={{ fontFamily: 'var(--font-michroma)' }}>
                                  {item.description}
                                </p>
                              </div>
                              <div className="flex flex-col items-end gap-2 shrink-0">
                                <button
                                  onClick={() => handleVehicleChange(item.id, item.name)}
                                  className="text-xs font-bold text-[#1D8582] hover:underline"
                                >
                                  Change
                                </button>
                                <button
                                  onClick={() => handleRemoveItem(item.id)}
                                  className="text-xs font-bold text-red-500 hover:underline"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>

                            {item.vehicle && (
                              <span className="inline-block text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full mt-2 font-bold bg-[#f0faf8] text-teal-800 border border-teal-100/50">
                                🚗 Connected Vehicle
                              </span>
                            )}
                          </div>

                          {/* Dropdown QTY + Price */}
                          <div className="flex items-end justify-between mt-4">
                            <div className="flex flex-col gap-2">
                              <span className="text-[10px] font-bold text-[#1D8582] uppercase tracking-wider"
                                    style={{ fontFamily: 'var(--font-michroma)' }}>
                                QTY
                              </span>
                              <div className="relative border border-[#1D8582] rounded-full px-5 py-1.5 flex items-center justify-center gap-4 text-xs font-bold text-[#1D8582] w-[96px] h-8 bg-transparent"
                                   style={{ fontFamily: 'var(--font-michroma)' }}>
                                <span>{item.quantity}</span>
                                <ChevronDown className="h-3.5 w-3.5 text-[#1D8582] shrink-0" />
                                <select
                                  value={item.quantity}
                                  onChange={(e) => handleQtyChange(item.id, Number(e.target.value))}
                                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                                >
                                  {[...Array(10)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                      {i + 1}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 pb-0.5">
                              <span className="text-base sm:text-lg font-bold text-[#074c43]"
                                    style={{ fontFamily: 'var(--font-michroma)' }}>
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Update Cart Button strip (fixed at bottom of card) */}
                  <div className="pt-4 flex justify-start shrink-0">
                    <button
                      onClick={() => {
                        if (cartItems.length > 0) {
                          const pId = cartItems[0].productId || cartItems[0].id;
                          sessionStorage.setItem('mockup_cart_item', JSON.stringify(cartItems[0]));
                          // Avoid 404s by redirecting to /products if it's a fallback mock item
                          if (pId.startsWith('mock-')) {
                            router.push('/products');
                          } else {
                            router.push(`/shop/all/${pId}`);
                          }
                        } else {
                          router.push('/products');
                        }
                      }}
                      className="px-8 py-3.5 bg-gradient-to-r from-[#1D8582] to-[#4FC4AD] hover:opacity-95 text-white transition-all rounded-full font-medium text-sm"
                      style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                      Update cart
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Checkout Summary (Stretches to match left column on desktop) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6 shrink-0 h-full">
              <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm flex flex-col justify-between flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[#074139] tracking-wide pb-4 shrink-0"
                    style={{ fontFamily: 'var(--font-michroma)' }}>
                  Cart Total
                </h3>

                <div className="space-y-3.5 my-auto py-5" style={{ fontFamily: 'var(--font-michroma)' }}>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                    <span>Subtotal</span>
                    <span className="font-bold">₹{pricing.subtotal.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                    <span>Platform Charges</span>
                    {pricing.platformFee === 0 ? (
                      <span className="font-bold text-teal-600 uppercase text-xs">WAIVED</span>
                    ) : (
                      <span className="font-bold">₹{pricing.platformFee}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                    <span>Estimated GST (Tax)</span>
                    <span className="font-bold">₹{pricing.tax.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                    <span>Shipping</span>
                    {pricing.isFreeShipping ? (
                      <span className="font-bold text-teal-600 uppercase text-xs">FREE</span>
                    ) : (
                      <span className="font-bold">₹{pricing.shippingCharge}</span>
                    )}
                  </div>

                  {!pricing.isFreeShipping && pricing.amountNeededForFreeShipping > 0 && (
                    <div className="p-2.5 bg-teal-50/80 rounded-xl border border-teal-100 text-[10px] text-teal-800 leading-tight">
                      Add <strong>₹{pricing.amountNeededForFreeShipping}</strong> more for <strong>FREE Delivery!</strong>
                    </div>
                  )}

                  <div className="pt-3.5 flex items-center justify-between text-sm sm:text-base font-bold text-[#074139] border-t border-slate-100">
                    <span>Total</span>
                    <span className="font-bold">₹{pricing.totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  onClick={() => {
                    sessionStorage.setItem('is_buy_now', isBuyNow ? 'true' : 'false');
                  }}
                  className="w-full inline-flex items-center justify-center py-3.5 bg-gradient-to-r from-[#1A817F] to-[#59D0B5] hover:opacity-90 text-white font-medium text-sm rounded-full transition-all shadow-sm text-center shrink-0"
                  style={{ fontFamily: 'var(--font-michroma)' }}
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>

      {/* Vehicle Selector Dialog */}
      {dialogItem && (
        <VehicleSelectDialog
          productName={dialogItem.productName}
          onConfirm={handleConfirmVehicle}
          onCancel={() => setDialogItem(null)}
        />
      )}
    </div>
  )
}
