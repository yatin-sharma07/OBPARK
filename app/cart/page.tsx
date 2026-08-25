'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  ChevronDown
} from 'lucide-react'

import { useAuthStore } from '@/store/auth.store'
import { VehicleSelectDialog } from '@/components/cart/VehicleSelectDialog'
import { microgrammaBold } from '@/lib/fonts'

interface CartItem {
  id: string
  name: string
  description: string
  price: string
  priceVal: number
  quantity: number
  image: string
  vehicle: string | null
}

export default function CartPage() {
  const router = useRouter()
  const { isAuthenticated, isHydrated } = useAuthStore()

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.replace('/login')
    }
  }, [isHydrated, isAuthenticated, router])

  useEffect(() => {
    const isBuyNow = sessionStorage.getItem('is_buy_now') === 'true'
    const key = isBuyNow ? 'buy_now_item' : 'mockup_cart_item'
    const stored = sessionStorage.getItem(key)
    if (stored) {
      setCartItems([JSON.parse(stored)])
    } else {
      setCartItems([
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
    }
  }, [])

  const subtotal = cartItems.reduce((acc, item) => acc + (item.priceVal * item.quantity), 0)


  const [dialogItem, setDialogItem] = useState<{
    id: string
    productName: string
  } | null>(null)

  const handleQtyChange = (itemId: string, qty: number) => {
    setCartItems((prev) => {
      const updated = prev.map((item) => (item.id === itemId ? { ...item, quantity: qty } : item));
      const isBuyNow = sessionStorage.getItem('is_buy_now') === 'true'
      const key = isBuyNow ? 'buy_now_item' : 'mockup_cart_item'
      if (updated.length > 0) {
        sessionStorage.setItem(key, JSON.stringify(updated[0]));
        if (isBuyNow) {
          sessionStorage.setItem('mockup_cart_item', JSON.stringify(updated[0]));
        }
      }
      return updated;
    })
  }

  const handleVehicleChange = (itemId: string, productName: string) => {
    setDialogItem({ id: itemId, productName })
  }

  const handleConfirmVehicle = (vehicleId: string | null) => {
    if (dialogItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === dialogItem.id
            ? { ...item, vehicle: vehicleId ? 'Linked' : null }
            : item
        )
      )
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
                    {cartItems.map((item) => (
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
                              <button
                                onClick={() => handleVehicleChange(item.id, item.name)}
                                className="text-xs font-bold text-slate-400 hover:text-teal-900 shrink-0 underline"
                              >
                                Change
                              </button>
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
                          const pId = cartItems[0].id;
                          sessionStorage.setItem('mockup_cart_item', JSON.stringify(cartItems[0]));
                          // Avoid 404s by redirecting to /products if it's a fallback mock item
                          if (pId.startsWith('mock-')) {
                            router.push('/products');
                          } else {
                            router.push(`/product/${pId}`);
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

                <div className="space-y-4 my-auto py-6" style={{ fontFamily: 'var(--font-michroma)' }}>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                    <span>Subtotal</span>
                    <span className="font-bold">₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm font-normal text-[#074139]">
                    <span>Shipping</span>
                    <span className="font-normal text-slate-500">Calculate shipping</span>
                  </div>

                  <div className="pt-4 flex items-center justify-between text-sm sm:text-base font-bold text-[#074139]">
                    <span>Total</span>
                    <span className="font-bold">₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</span>
                  </div>
                </div>

                <a
                  href="/checkout"
                  className="w-full inline-flex items-center justify-center py-3.5 bg-gradient-to-r from-[#1A817F] to-[#59D0B5] hover:opacity-90 text-white font-medium text-sm rounded-full transition-all shadow-sm text-center shrink-0"
                  style={{ fontFamily: 'var(--font-michroma)' }}
                >
                  Proceed to Checkout
                </a>
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
