'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { microgrammaBold } from '@/lib/fonts'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function CheckoutPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    state: '',
    postalCode: ''
  })

  const handlePaymentClick = (e: React.FormEvent) => {
    e.preventDefault()
    sessionStorage.setItem('mockup_address', JSON.stringify(formData))
    router.push('/payment')
  }

  const [mockItems, setMockItems] = useState([
    {
      id: 'mock-1',
      name: 'Diamond 2K Car Android System',
      description: 'Touch Screen 4GB+64GB',
      price: '$ 99',
      priceVal: 99,
      quantity: 1,
      image: '/products/electronics/diamond-system-main.png'
    },
    {
      id: 'mock-2',
      name: 'Diamond 2K Car Android System',
      description: 'Touch Screen 4GB+64GB',
      price: '$ 99',
      priceVal: 99,
      quantity: 1,
      image: '/products/electronics/diamond-system-main.png'
    }
  ])

  useEffect(() => {
    const stored = sessionStorage.getItem('mockup_cart_item')
    if (stored) {
      setMockItems([JSON.parse(stored)])
    }
  }, [])

  const subtotal = mockItems.reduce((acc, item) => acc + (item.priceVal * item.quantity), 0)


  return (
    <div className="w-full bg-[#eefaf6] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8 font-sans">
      <div className="max-w-[1200px] mx-auto">
        <h1 className={`${microgrammaBold.className} text-3xl sm:text-4xl text-black mb-10 tracking-wide uppercase`}>
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Forms */}
          <div className="lg:col-span-6 xl:col-span-7 bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            
            {/* Tabs */}
            <div className="flex items-center gap-10 mb-10 text-xs sm:text-sm font-black uppercase tracking-widest">
              <button className="text-teal-600 border-b-2 border-teal-600 pb-1">
                Information
              </button>
              <button className="text-slate-300 pb-1 hover:text-slate-500 transition-colors">
                Payment
              </button>
            </div>

            <form className="space-y-10" onSubmit={handlePaymentClick}>
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="font-black text-slate-900 text-sm tracking-wide">Contact info</h3>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-transparent"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-transparent"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-4">
                <h3 className="font-black text-slate-900 text-sm tracking-wide">Shipping address</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-transparent"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-transparent"
                    />
                  </div>
                  
                  <input 
                    type="text" 
                    placeholder="Address" 
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-transparent"
                  />
                  
                  <input 
                    type="text" 
                    placeholder="City" 
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-transparent"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <select 
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-400 appearance-none focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-white"
                      >
                        <option value="">Country</option>
                        <option value="us">United States</option>
                        <option value="in">India</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="State / Region" 
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-transparent"
                    />
                  </div>
                  
                  <div className="w-full sm:w-1/2 sm:pr-1.5">
                    <input 
                      type="text" 
                      placeholder="Postal Code" 
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-shadow bg-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 sm:mt-12 flex justify-center sm:justify-start">
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-teal-700 to-[#7dc9b6] hover:from-teal-800 hover:to-[#68bbab] transition-all duration-300 text-white font-medium text-sm px-10 py-3 rounded-lg shadow-sm flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  Payment 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-6 xl:col-span-5 bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <h3 className="text-teal-600 font-black text-[10px] sm:text-xs uppercase tracking-widest mb-8">
              Your Order
            </h3>

            <div className="space-y-6">
              {mockItems.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-slate-100 last:border-0 relative">
                  <div className="w-20 h-20 bg-slate-50 rounded-xl p-2 shrink-0 border border-slate-100/50 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-xs font-black text-slate-800 leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-slate-400 mt-1 font-semibold">
                          {item.description}
                        </p>
                      </div>
                      <button className="text-[10px] font-bold text-slate-400 hover:text-teal-700 underline shrink-0">
                        Change
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-black text-teal-600 uppercase">QTY</span>
                        <div className="relative">
                          <select
                            value={item.quantity}
                            onChange={(e) => {
                              const newQty = Number(e.target.value)
                              setMockItems(prev => prev.map(m => m.id === item.id ? { ...m, quantity: newQty } : m))
                              // Update sessionStorage as well so payment page gets correct total
                              sessionStorage.setItem('mockup_cart_item', JSON.stringify({ ...item, quantity: newQty }))
                            }}
                            className="appearance-none bg-transparent border border-slate-200 rounded-lg pl-3 pr-6 py-0.5 text-xs font-black text-slate-600 outline-none focus:border-teal-500"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                          </select>
                          <ChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                      
                      <span className="text-xs sm:text-sm font-black text-teal-600">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-600">
                <span>Subtotal</span>
                <span className="text-slate-900 font-bold">${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold text-slate-600">
                <span>Shipping</span>
                <span className="text-slate-400 text-[10px]">Calculated at next step</span>
              </div>
              <div className="flex justify-between items-center text-sm font-semibold pt-4 mt-2 border-t border-slate-100">
                <span className="text-slate-600">Total</span>
                <span className="text-slate-900 font-black">${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}