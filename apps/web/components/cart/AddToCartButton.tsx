'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { useAuthStore } from '@/store/auth.store'
import { useAddToCart } from '@/hooks/useCart'
import { useCartStore } from '@/store/cart.store'

import { VehicleSelectDialog } from './VehicleSelectDialog'

interface Props {
  productId: string
  productName: string
  disabled?: boolean
}

export function AddToCartButton({
  productId,
  productName,
  disabled,
}: Props) {
  const router = useRouter()

  const { isAuthenticated } = useAuthStore()

  const addToCart = useAddToCart()

  const openCart = useCartStore(
    (state) => state.openCart
  )

  const [showDialog, setShowDialog] =
    useState(false)

  const handleClick = () => {
    if (!isAuthenticated) {
      router.push('/login')
      return
    }

    setShowDialog(true)
  }

  const handleConfirm = async (
    vehicleId: string | null
  ) => {
    try {
      await addToCart.mutateAsync({
        productId,
        vehicleId: vehicleId ?? undefined,
      })
    } catch (e) {
      console.error(e)
    }

    const cartItem = {
      id: productId,
      name: productName,
      description: 'Premium Product',
      price: '₹ 1437',
      priceVal: 1437,
      quantity: 1,
      image: '/products/electronics/diamond-system-main.png',
      vehicle: vehicleId ? 'Linked' : null
    }
    sessionStorage.setItem('mockup_cart_item', JSON.stringify(cartItem))

    setShowDialog(false)
    router.push('/cart')
  }

  return (
    <>
      <Button
        className="w-full flex items-center gap-2"
        style={{
          backgroundColor: '#074139',
          color: '#A2F1DF',
        }}
        disabled={disabled || addToCart.isPending}
        onClick={handleClick}
      >
        <ShoppingCart className="h-4 w-4" />

        {disabled
          ? 'Out of Stock'
          : addToCart.isPending
          ? 'Adding...'
          : 'Add to Cart'}
      </Button>

      {showDialog && (
        <VehicleSelectDialog
          productName={productName}
          onConfirm={handleConfirm}
          onCancel={() => setShowDialog(false)}
          isLoading={addToCart.isPending}
        />
      )}
    </>
  )
}