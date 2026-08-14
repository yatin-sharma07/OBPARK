'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { microgrammaBold } from '@/lib/fonts'
import { ChevronDown } from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    postalCode: ''
  })

  const [paymentMethod, setPaymentMethod] = useState('credit_card')
  const [showCouponInput, setShowCouponInput] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const [mockItems, setMockItems] = useState([
    {
      id: 'mock-item-1',
      name: '5 PCS Microfiber Car Duster Kit - Interior & Exterior Car Cleaning Detailing Tool Scratch',
      description: 'Premium Car Care Product',
      price: '₹ 1437',
      priceVal: 1437,
      quantity: 1,
      image: '/products/electronics/diamond-system-main.png',
      vehicle: null
    }
  ])

  useEffect(() => {
    const stored = sessionStorage.getItem('mockup_cart_item')
    if (stored) {
      setMockItems([JSON.parse(stored)])
    }
  }, [])

  const subtotal = mockItems.reduce((acc, item) => acc + (item.priceVal * item.quantity), 0)

  const handlePaymentClick = (e: React.FormEvent) => {
    e.preventDefault()
    sessionStorage.setItem('mockup_address', JSON.stringify(formData))
    router.push('/payment')
  }

  return (
    <div className="w-full bg-[#eefaf6] text-[#074c43] min-h-screen pt-[33px] md:pt-[47px] lg:pt-[52px] xl:pt-[56px] pb-16 px-3 sm:px-5">
      <div className="mx-auto w-full space-y-12">
        {/* Main Checkout Banner */}
        <div
          className="w-full rounded-[32px] md:rounded-[40px] px-6 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-32 md:px-12 md:pb-12 md:pt-40 shadow-[0_12px_30px_rgba(7,76,67,0.08)] flex flex-col lg:min-h-[780px] overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #177E80 0%, #AFE5CC 100%)'
          }}
        >
          <div className="max-w-[1300px] mx-auto w-full flex-1 flex flex-col min-h-0">
            <h1 className={`${microgrammaBold.className} text-white text-3xl sm:text-4xl md:text-[56px] leading-none mb-8 shrink-0`}>
              Checkout
            </h1>

            {/* Translucent Container */}
            <div className="border border-white/30 rounded-[32px] p-4 sm:p-8 flex-1 flex flex-col justify-center">
              <form onSubmit={handlePaymentClick} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch items-start w-full">
                
                {/* Left Column: Billing Details Form */}
                <div className="lg:col-span-7 bg-white rounded-[16px] p-6 sm:p-8 shadow-sm flex flex-col gap-6 h-full">
                  <h3 className="text-base sm:text-lg font-bold text-[#074139] tracking-wide"
                      style={{ fontFamily: 'var(--font-michroma)' }}>
                    Billing Details
                  </h3>

                  <div className="space-y-4 flex-1 flex flex-col justify-between">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#074139] block" style={{ fontFamily: 'var(--font-michroma)' }}>
                          First Name<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#074139] block" style={{ fontFamily: 'var(--font-michroma)' }}>
                          Last Name<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        />
                      </div>
                    </div>

                    {/* Country/Region */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#074139] block" style={{ fontFamily: 'var(--font-michroma)' }}>
                        Country/Region<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-xs font-bold text-[#074139] appearance-none focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          <option value="">Select Country</option>
                          <option value="in">India</option>
                          <option value="us">United States</option>
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Street Address */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#074139] block" style={{ fontFamily: 'var(--font-michroma)' }}>
                        Street address<span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-3">
                        <input
                          type="text"
                          required
                          placeholder="House number and street name"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        />
                        <input
                          type="text"
                          placeholder="Apartment, suite (Optional)"
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        />
                      </div>
                    </div>

                    {/* Postal/ZIP */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#074139] block" style={{ fontFamily: 'var(--font-michroma)' }}>
                        Postal/ZIP<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Postal Code"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                        style={{ fontFamily: 'var(--font-michroma)' }}
                      />
                    </div>

                    {/* Town/City */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#074139] block" style={{ fontFamily: 'var(--font-michroma)' }}>
                        Town/City<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                        style={{ fontFamily: 'var(--font-michroma)' }}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#074139] block" style={{ fontFamily: 'var(--font-michroma)' }}>
                        Phone Number<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                        style={{ fontFamily: 'var(--font-michroma)' }}
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#074139] block" style={{ fontFamily: 'var(--font-michroma)' }}>
                        Email Address<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#074139] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1D8582] bg-white transition-all"
                        style={{ fontFamily: 'var(--font-michroma)' }}
                      />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="checkbox"
                        id="newsletter-billing"
                        className="rounded border-slate-200 text-[#1D8582] focus:ring-[#1D8582] w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="newsletter-billing" className="text-[10px] text-slate-500 cursor-pointer" style={{ fontFamily: 'var(--font-michroma)' }}>
                        Sign up to receive email updates and news (optional)
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Column: Checkout Summary, Coupon & Payment */}
                <div className="lg:col-span-5 flex flex-col gap-6 shrink-0 w-full">
                  
                  {/* Your Order Card */}
                  <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm flex flex-col gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-[#074139] tracking-wide"
                        style={{ fontFamily: 'var(--font-michroma)' }}>
                      Your Order
                    </h3>
                    
                    <div className="space-y-4" style={{ fontFamily: 'var(--font-michroma)' }}>
                      <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                        <span>Product</span>
                        <span className="font-bold">₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                        <span>Subtotal</span>
                        <span className="font-bold">₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                        <span>Shipping</span>
                        <span className="font-bold">₹100</span>
                      </div>
                      <div className="flex items-center justify-between text-sm sm:text-base font-bold text-[#074139] pt-2">
                        <span>Total</span>
                        <span className="font-bold">₹{(subtotal + 100).toLocaleString('en-IN', { minimumFractionDigits: 0 })}</span>
                      </div>
                    </div>
                  </div>

                  {/* Coupon Card */}
                  <div className="bg-white rounded-[16px] p-5 shadow-sm text-left">
                    {!showCouponInput ? (
                      <button 
                        type="button"
                        onClick={() => setShowCouponInput(true)} 
                        className="text-xs font-semibold text-[#1D8582] hover:underline cursor-pointer bg-transparent border-none p-0" 
                        style={{ fontFamily: 'var(--font-michroma)' }}
                      >
                        Have a coupon? Click here
                      </button>
                    ) : (
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          placeholder="Enter coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1D8582]"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            // Just a mock interaction for now
                            setShowCouponInput(false)
                            setCouponCode('')
                          }}
                          className="px-4 py-2 bg-[#1D8582] text-white text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Payment Options Card */}
                  <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm flex flex-col gap-6">
                    <div className="space-y-3">
                      {[
                        { id: 'credit_card', label: 'Credit Card', icon: '💳' },
                        { id: 'debit_card', label: 'Debit Card', icon: '💳' },
                        { id: 'upi', label: 'UPI', icon: '📱' },
                        { id: 'gpay', label: 'Gpay', icon: '🌐' },
                        { id: 'paypal', label: 'Paypal', icon: '🅿️' },
                      ].map((option) => (
                        <label
                          key={option.id}
                          className={`flex items-center justify-between px-4 py-3 border rounded-xl cursor-pointer transition-all ${
                            paymentMethod === option.id
                              ? 'border-[#1D8582] bg-[#f0faf8]/30'
                              : 'border-slate-100 hover:bg-slate-50/50'
                          }`}
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="payment_method"
                              value={option.id}
                              checked={paymentMethod === option.id}
                              onChange={() => setPaymentMethod(option.id)}
                              className="text-[#1D8582] focus:ring-[#1D8582] w-4 h-4 cursor-pointer"
                            />
                            <span className="text-xs font-semibold text-[#074139]">{option.label}</span>
                          </div>
                          <span className="text-base">{option.icon}</span>
                        </label>
                      ))}
                    </div>

                    <p className="text-[10px] text-slate-500 leading-relaxed" style={{ fontFamily: 'var(--font-michroma)' }}>
                      Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                    </p>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="newsletter-payment"
                        className="rounded border-slate-200 text-[#1D8582] focus:ring-[#1D8582] w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="newsletter-payment" className="text-[10px] text-slate-500 cursor-pointer" style={{ fontFamily: 'var(--font-michroma)' }}>
                        Sign up to receive email updates and news (optional)
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#1A817F] to-[#59D0B5] hover:opacity-90 text-white font-medium text-sm rounded-full transition-all shadow-sm text-center"
                      style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                      Place order
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