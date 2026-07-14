'use client'

import { useState, useEffect } from 'react'
import Link from 'next/navigation'
import { useRouter } from 'next/navigation'
import {
  Heart,
  Star,
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
  const { isAuthenticated } = useAuthStore()

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const stored = sessionStorage.getItem('mockup_cart_item')
    if (stored) {
      setCartItems([JSON.parse(stored)])
    } else {
      setCartItems([
        {
          id: 'mock-item-1',
          name: 'Diamond 2K Car Android System',
          description: 'Touch Screen 4GB+64GB',
          price: '$ 99',
          priceVal: 99,
          quantity: 1,
          image: '/products/electronics/diamond-system-main.png',
          vehicle: null
        },
        {
          id: 'mock-item-2',
          name: 'Diamond 2K Car Android System',
          description: 'Touch Screen 4GB+64GB',
          price: '$ 99',
          priceVal: 99,
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

  // Pre-populated similar products matching the mockup exactly
  const similarProducts = [
    {
      id: 'sim-1',
      title: '7.5 kW Portable EV Charger',
      price: '$1437',
      rating: 4.5,
      image: '/products/ev/type2-charger-main.png'
    },
    {
      id: 'sim-2',
      title: '7.5 kW Portable EV Charger',
      price: '$1437',
      rating: 4.5,
      image: '/products/ev/type2-charger-main.png'
    },
    {
      id: 'sim-3',
      title: '7.5 kW Portable EV Charger',
      price: '$1437',
      rating: 4.5,
      image: '/products/ev/type2-charger-main.png'
    },
    {
      id: 'sim-4',
      title: '7.5 kW Portable EV Charger',
      price: '$1437',
      rating: 4.5,
      image: '/products/ev/type2-charger-main.png'
    },
    {
      id: 'sim-5',
      title: '7.5 kW Portable EV Charger',
      price: '$1437',
      rating: 4.5,
      image: '/products/ev/type2-charger-main.png'
    }
  ]

  const handleQtyChange = (itemId: string, qty: number) => {
    setCartItems((prev) => {
      const updated = prev.map((item) => (item.id === itemId ? { ...item, quantity: qty } : item));
      // Save back to session storage to sync with checkout/payment pages
      if (updated.length > 0) {
        sessionStorage.setItem('mockup_cart_item', JSON.stringify(updated[0]));
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

  const handleBuyNowSimilar = (productId: string) => {
    // Add the EV charger to the cart list
    const newProduct = {
      id: `ev-charger-${Date.now()}`,
      name: '7.5 kW Portable EV Charger',
      description: 'Fast charging accessories',
      price: '$1437',
      priceVal: 1437,
      quantity: 1,
      image: '/products/ev/type2-charger-main.png',
      vehicle: null
    }
    setCartItems((prev) => [...prev, newProduct])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full bg-[#eefaf6] text-[#074c43] min-h-screen pt-24 pb-16 px-3 sm:px-4 md:px-6">
      <div className="mx-auto max-w-screen space-y-12">
        {/* Main Cart Banner - Screen Size on Desktop */}
        <div
          className="w-full rounded-[28px] p-6 sm:p-8 md:p-12 shadow-[0_12px_30px_rgba(7,76,67,0.08)] flex flex-col lg:h-[calc(100vh-140px)] lg:min-h-[660px] lg:max-h-[850px] overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #177E80 0%, #AFE5CC 100%)'
          }}
        >
          <h1 className={`${microgrammaBold.className} text-white text-3xl sm:text-4xl md:text-[56px] leading-none mb-8 shrink-0`}>
            Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-1 min-h-0">
            {/* Left Column: Cart Items (Scrollable on desktop) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-slate-100/50 flex flex-col h-full min-h-0">
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
                        className="flex flex-col sm:flex-row gap-4 py-4 border-b last:border-b-0 border-slate-100 relative"
                      >
                        {/* Product Image */}
                        <div className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3 shrink-0 mx-auto sm:mx-0">
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
                                <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                                  {item.name}
                                </h3>
                                <p className="text-xs text-slate-400 mt-1 font-medium">
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
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-black text-[#074c43]/60 uppercase">QTY</span>
                              <div className="relative">
                                <select
                                  value={item.quantity}
                                  onChange={(e) => handleQtyChange(item.id, Number(e.target.value))}
                                  className="appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-1.5 pr-8 text-xs font-black text-slate-800 outline-none focus:ring-1 focus:ring-[#074c43]"
                                >
                                  {[...Array(10)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                      {i + 1}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500 pointer-events-none" />
                              </div>
                            </div>

                            <div className="flex items-center gap-4">
                              <span className="text-base sm:text-lg font-black text-teal-800">
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Update Cart Button strip (fixed at bottom of card) */}
                  <div className="pt-4 border-t border-slate-100 flex justify-start shrink-0">
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
                      className="px-6 py-3 bg-[#d7f5eb] text-[#074c43] hover:bg-[#c4efe1] transition-all rounded-full font-black text-xs uppercase tracking-widest"
                    >
                      Update cart
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Checkout Summary (Stretches to match left column on desktop) */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full gap-6 shrink-0">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100/50 flex flex-col justify-between flex-1 min-h-0">
                <h3 className={`${microgrammaBold.className} text-base sm:text-lg font-black text-[#074c43] tracking-wide border-b border-slate-100 pb-4 shrink-0`}>
                  Cart Total
                </h3>

                <div className="space-y-4 my-auto py-6">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-slate-400">Subtotal</span>
                    <span className="text-slate-900 font-bold">${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-slate-400">Shipping</span>
                    <span className="text-slate-905 font-bold text-slate-800">Calculate shipping</span>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-sm sm:text-base font-black">
                    <span className="text-[#074c43]">Total</span>
                    <span className="text-slate-950 font-black">${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>

                <a
                  href="/checkout"
                  className="w-full inline-flex items-center justify-center py-4 bg-teal-800 hover:bg-teal-900 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-sm text-center shrink-0"
                >
                  Proceed to Checkout
                </a>
              </div>

              {/* Payment Methods Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 px-2 opacity-80 shrink-0">
                <div className="bg-white px-2 py-1 rounded border border-slate-200 text-[10px] font-black text-slate-800">Apple Pay</div>
                <div className="bg-blue-800 text-white px-2 py-1 rounded text-[10px] font-black">AMEX</div>
                <div className="bg-white px-2 py-1 rounded border border-slate-200 text-[10px] font-black text-red-500">Mastercard</div>
                <div className="bg-white px-2 py-1 rounded border border-slate-200 text-[10px] font-black text-blue-500">Maestro</div>
                <div className="bg-slate-100 text-blue-900 px-2 py-1 rounded text-[10px] font-black">PayPal</div>
                <div className="bg-[#1A1F71] text-white px-2.5 py-1 rounded text-[10px] font-black">VISA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="space-y-6 pt-4">
          <h2 className={`${microgrammaBold.className} text-xl sm:text-2xl font-black text-[#074c43]`}>
            Similar Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {similarProducts.map((product, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100/50 rounded-3xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(11,64,47,0.02)] flex flex-col justify-between group hover:shadow-md transition-all relative"
              >
                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-red-500 transition-colors z-10">
                  <Heart className="h-4 w-4" />
                </button>

                {/* Product Image */}
                <div className="aspect-square bg-slate-50/50 rounded-2xl overflow-hidden flex items-center justify-center p-4 relative mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Rating + Brand */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-slate-800">
                      {product.rating}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-black text-slate-900 line-clamp-2 min-h-[32px] sm:min-h-[40px] leading-snug">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm sm:text-base font-black text-slate-950">
                      {product.price}
                    </span>

                    <button
                      onClick={() => handleBuyNowSimilar(product.id)}
                      className="bg-teal-800 hover:bg-teal-900 text-white font-black text-[10px] sm:text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
