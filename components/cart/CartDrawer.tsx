'use client'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/store/cart.store'
import { useCart, useRemoveCartItem, useUpdateCartItem } from '@/hooks/useCart'
import { microgrammaBold } from '@/lib/fonts'
import { calculateClientPricing, CartItemInput } from '@/lib/pricingEngine'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

function resolveImageUrl(imgPath?: string): string {
  if (!imgPath) return ''
  const trimmed = imgPath.trim()
  if (
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('data:')
  ) {
    return encodeURI(trimmed)
  }
  const cleanBase = BASE_URL.replace(/\/+$/, '')
  const cleanPath = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return encodeURI(`${cleanBase}${cleanPath}`)
}

interface LocalCartItem {
  id: string
  name: string
  description?: string
  priceVal: number
  quantity: number
  image?: string
}

export function CartDrawer() {
  const router = useRouter()
  const { isOpen, closeCart } = useCartStore()
  const { data: apiCart, isLoading } = useCart()
  const removeItem = useRemoveCartItem()
  const updateItem = useUpdateCartItem()

  const [localCart, setLocalCart] = useState<LocalCartItem[]>([])
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (isOpen) {
      const stored = sessionStorage.getItem('mockup_cart_item')
      if (stored) {
        try {
          const parsed = JSON.parse(stored)
          setLocalCart([parsed])
        } catch {
          setLocalCart([])
        }
      }
    }
  }, [isOpen])

  const hasApiItems = (apiCart?.items?.length ?? 0) > 0
  const hasLocalItems = localCart.length > 0
  const isEmpty = !isLoading && !hasApiItems && !hasLocalItems

  const drawerPricingItems: CartItemInput[] = useMemo(() => {
    if (hasApiItems && apiCart?.items) {
      return apiCart.items.map((item: any) => {
        const p = item.product || {};
        const cost = Number(p.price ?? p.productCost ?? p.basePrice ?? 0);
        return {
          product: {
            id: item.id,
            productId: item.productId,
            productName: p.name || p.title || 'Product',
            price: cost,
            productCost: cost,
            gstRate: Number(p.gstRate ?? 18),
          },
          quantity: item.quantity,
        };
      });
    }
    return localCart.map((item: LocalCartItem) => ({
      product: {
        id: item.id,
        productName: item.name,
        price: item.priceVal,
        productCost: item.priceVal,
        gstRate: 18,
      },
      quantity: item.quantity,
    }));
  }, [hasApiItems, apiCart, localCart]);

  const pricing = useMemo(() => {
    return calculateClientPricing(drawerPricingItems);
  }, [drawerPricingItems]);

  const handleLocalQtyChange = (id: string, newQty: number) => {
    if (newQty <= 0) {
      sessionStorage.removeItem('mockup_cart_item')
      setLocalCart([])
      return
    }
    const updated = localCart.map(item => item.id === id ? { ...item, quantity: newQty } : item)
    setLocalCart(updated)
    if (updated[0]) {
      sessionStorage.setItem('mockup_cart_item', JSON.stringify(updated[0]))
    }
  }

  const handleLocalRemove = () => {
    sessionStorage.removeItem('mockup_cart_item')
    setLocalCart([])
  }

  const handleContinueShopping = () => {
    closeCart()
    // router.push('/products')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
          />

          {/* Side Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 h-full w-full max-w-[420px] sm:max-w-[460px] text-white z-[999] flex flex-col shadow-[-12px_0_40px_rgba(0,0,0,0.3)] overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(7, 65, 57, 0.94) 0%, rgba(24, 115, 110, 0.97) 100%)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {/* Top Close Button */}
            <button
              onClick={closeCart}
              className="absolute top-6 right-6 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors z-20"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Empty Cart View (Matching Reference Photo) */}
            {isEmpty ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-wide"
                  style={{ fontFamily: 'var(--font-michroma)' }}
                >
                  Your cart is empty
                </h2>

                <button
                  onClick={handleContinueShopping}
                  className="bg-white text-[#074139] hover:bg-white/90 font-semibold px-8 py-3 rounded-full text-sm sm:text-base transition-all transform hover:scale-105 shadow-xl"
                  style={{ fontFamily: 'var(--font-michroma)' }}
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              /* Non-Empty Cart View */
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="px-6 pt-7 pb-4">
                  <h2
                    className={`${microgrammaBold.className} text-xl sm:text-2xl text-white font-bold tracking-wider`}
                  >
                    YOUR CART
                  </h2>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
                  {hasApiItems
                    ? apiCart?.items.map((item: any) => {
                      const product = item.product || {}
                      const rawImg =
                        product.imagePath ||
                        (Array.isArray(product.images) && product.images[0]) ||
                        product.image ||
                        ''
                      const resolvedImg = resolveImageUrl(rawImg)
                      const isBroken = !resolvedImg || failedImages[item.id]
                      const title =
                        product.name ||
                        product.title ||
                        product.productName ||
                        'Premium Product'
                      const price = Number(
                        product.price ??
                          product.productCost ??
                          product.basePrice ??
                          0
                      )

                      return (
                        <div
                          key={item.id}
                          className="flex gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md"
                        >
                          <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center shrink-0 overflow-hidden relative">
                            {!isBroken ? (
                              <img
                                src={resolvedImg}
                                alt={title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.currentTarget
                                  // If backend URL fails, try local relative asset
                                  if (
                                    rawImg.startsWith('/') &&
                                    target.src.startsWith(BASE_URL)
                                  ) {
                                    target.src = encodeURI(rawImg)
                                  } else {
                                    setFailedImages((prev) => ({
                                      ...prev,
                                      [item.id]: true,
                                    }))
                                  }
                                }}
                              />
                            ) : (
                              <ShoppingBag className="w-7 h-7 text-white/80" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-white truncate">
                              {title}
                            </p>
                            <p className="text-xs text-white/70 mt-0.5">
                              ₹{price.toLocaleString('en-IN')}
                            </p>

                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center gap-2 bg-white/10 rounded-full px-2 py-1">
                                <button
                                  onClick={() =>
                                    updateItem.mutate({
                                      itemId: item.id,
                                      quantity: item.quantity - 1,
                                    })
                                  }
                                  className="w-5 h-5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-xs font-bold text-white w-4 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateItem.mutate({
                                      itemId: item.id,
                                      quantity: item.quantity + 1,
                                    })
                                  }
                                  className="w-5 h-5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>

                              <button
                                onClick={() => removeItem.mutate(item.id)}
                                className="p-1.5 rounded-full text-white/60 hover:text-red-400 hover:bg-white/10 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                    : localCart.map((item) => {
                      const rawImg = item.image || ''
                      const resolvedImg = resolveImageUrl(rawImg)
                      const isBroken = !resolvedImg || failedImages[item.id]

                      return (
                        <div
                          key={item.id}
                          className="flex gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md"
                        >
                          <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center shrink-0 overflow-hidden relative">
                            {!isBroken ? (
                              <img
                                src={resolvedImg}
                                alt={item.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.currentTarget
                                  if (
                                    rawImg.startsWith('/') &&
                                    target.src.startsWith(BASE_URL)
                                  ) {
                                    target.src = encodeURI(rawImg)
                                  } else {
                                    setFailedImages((prev) => ({
                                      ...prev,
                                      [item.id]: true,
                                    }))
                                  }
                                }}
                              />
                            ) : (
                              <ShoppingBag className="w-7 h-7 text-white/80" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-white line-clamp-2">
                              {item.name}
                            </p>
                            <p className="text-xs text-[#59D0B5] font-semibold mt-1">
                              ₹{Number(item.priceVal ?? 0).toLocaleString('en-IN')}
                            </p>

                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-2 bg-white/10 rounded-full px-2 py-1">
                              <button
                                onClick={() =>
                                  handleLocalQtyChange(item.id, item.quantity - 1)
                                }
                                className="w-5 h-5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold text-white w-4 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleLocalQtyChange(item.id, item.quantity + 1)
                                }
                                className="w-5 h-5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={handleLocalRemove}
                              className="p-1.5 rounded-full text-white/60 hover:text-red-400 hover:bg-white/10 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        </div>
                      )
                    })}
                </div>

                {/* Footer Subtotal & Checkout */}
                <div className="p-5 bg-black/20 backdrop-blur-md space-y-3 border-t border-white/10">
                  <div className="space-y-1.5 text-xs text-white/80">
                    <div className="flex items-center justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-white">₹{pricing.subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Platform Charges</span>
                      {pricing.platformFee === 0 ? (
                        <span className="font-bold text-[#59D0B5] text-[10px]">WAIVED</span>
                      ) : (
                        <span className="font-semibold text-white">₹{pricing.platformFee}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Estimated GST (Tax)</span>
                      <span className="font-semibold text-white">₹{pricing.tax.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Shipping Fee</span>
                      {pricing.isFreeShipping ? (
                        <span className="font-bold text-[#59D0B5] text-[10px]">FREE</span>
                      ) : (
                        <span className="font-semibold text-white">₹{pricing.shippingCharge}</span>
                      )}
                    </div>
                  </div>

                  {!pricing.isFreeShipping && pricing.amountNeededForFreeShipping > 0 && (
                    <div className="p-2 bg-white/10 rounded-xl text-[10px] text-white/90 text-center">
                      Add <strong>₹{pricing.amountNeededForFreeShipping}</strong> more for <strong>FREE Delivery!</strong>
                    </div>
                  )}

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Total Amount</span>
                    <span className="text-lg font-bold text-[#59D0B5]">
                      ₹{pricing.totalAmount.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <Link
                    href="/checkout"
                    onClick={() => {
                      sessionStorage.setItem('is_buy_now', 'false');
                      closeCart();
                    }}
                    className="w-full bg-[#59D0B5] hover:bg-[#48c0a5] text-[#074139] font-bold py-3.5 rounded-full flex items-center justify-center transition-colors shadow-lg"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    Proceed to Checkout
                  </Link>

                  <button
                    onClick={handleContinueShopping}
                    className="w-full text-center text-xs text-white/70 hover:text-white py-1 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}