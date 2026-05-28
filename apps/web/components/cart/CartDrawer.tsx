'use client'

import Link from 'next/link'

import {
  X,
  Minus,
  Plus,
  Trash2,
  ShoppingCart,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

import { useCartStore } from '@/store/cart.store'

import {
  useCart,
  useRemoveCartItem,
  useUpdateCartItem,
} from '@/hooks/useCart'

export function CartDrawer() {
  const { isOpen, closeCart } = useCartStore()

  const { data: cart, isLoading } = useCart()

  const removeItem = useRemoveCartItem()

  const updateItem = useUpdateCartItem()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={closeCart}
      />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-xl">

        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2
            className="font-bold text-lg"
            style={{ color: '#074139' }}
          >
            Cart{' '}
            {cart?.itemCount
              ? `(${cart.itemCount})`
              : ''}
          </h2>

          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {isLoading ? (
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-20 bg-gray-100 rounded-xl animate-pulse"
                />
              ))}
            </div>
          ) : !cart?.items?.length ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20 space-y-3">
              <ShoppingCart className="h-10 w-10 text-muted-foreground" />

              <p className="font-medium text-gray-700">
                Your cart is empty
              </p>

              <p className="text-sm text-muted-foreground">
                Add parts from the catalogue
              </p>

              <Button
                variant="outline"
                size="sm"
                onClick={closeCart}
                asChild
              >
                <Link href="/products">
                  Browse Parts
                </Link>
              </Button>
            </div>
          ) : (
            cart.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 py-3 border-b last:border-0"
              >
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center text-2xl shrink-0">
                  🔧
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">
                    {item.product.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {item.product.category.name}
                  </p>

                  {item.vehicle && (
                    <span
                      className={`inline-block text-xs px-2 py-0.5 rounded-full mt-1 ${
                        item.compatibilityStatus ===
                        'compatible'
                          ? 'bg-green-100 text-green-700'
                          : item.compatibilityStatus ===
                            'incompatible'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {item.vehicle.vrn}
                    </span>
                  )}

                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm font-bold">
                      ₹
                      {(
                        item.product.basePrice *
                        item.quantity
                      ).toLocaleString('en-IN')}
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-gray-50"
                        onClick={() =>
                          updateItem.mutate({
                            itemId: item.id,
                            quantity:
                              item.quantity - 1,
                          })
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </button>

                      <span className="text-sm w-4 text-center">
                        {item.quantity}
                      </span>

                      <button
                        className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-gray-50"
                        onClick={() =>
                          updateItem.mutate({
                            itemId: item.id,
                            quantity:
                              item.quantity + 1,
                          })
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </button>

                      <button
                        className="w-6 h-6 rounded-full flex items-center justify-center text-red-400 hover:bg-red-50 ml-1"
                        onClick={() =>
                          removeItem.mutate(item.id)
                        }
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart?.items?.length ? (
          <div className="px-6 py-4 border-t space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Subtotal
              </span>

              <span className="font-bold">
                ₹
                {cart.subtotal.toLocaleString(
                  'en-IN'
                )}
              </span>
            </div>

            <Button
              className="w-full"
              style={{
                backgroundColor: '#074139',
                color: '#A2F1DF',
              }}
              onClick={closeCart}
              asChild
            >
              <Link href="/checkout">
                Proceed to Checkout
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    </>
  )
}