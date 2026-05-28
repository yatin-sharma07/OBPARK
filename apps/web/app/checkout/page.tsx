'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { useCart } from '@/hooks/useCart'

import {
  useSavedAddresses,
  useCreateOrder,
  useConfirmPayment,
  useSaveAddress,
} from '@/hooks/useOrders'

import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'

import { CheckCircle } from 'lucide-react'

type AddressMode = 'saved' | 'new'
type CheckoutState = 'idle' | 'processing' | 'success' | 'failed'

interface AddressForm {
  line1: string
  line2?: string
  city: string
  state: string
  pincode: string
  save: boolean
  label?: string
}

export default function CheckoutPage() {
  const router = useRouter()

  const { data: cart } = useCart()
  const { data: addresses } = useSavedAddresses()

  const createOrder = useCreateOrder()
  const confirmPayment = useConfirmPayment()
  const saveAddress = useSaveAddress()

  const [addressMode, setAddressMode] =
    useState<AddressMode>('saved')

  const [selectedAddressId, setSelectedAddressId] =
    useState<string | null>(null)

  const [checkoutState, setCheckoutState] =
    useState<CheckoutState>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressForm>()

  const handleCheckout = async (
    formData?: AddressForm,
  ) => {
    try {
      setCheckoutState('processing')

      const payload: any = {}

      if (
        addressMode === 'saved' &&
        selectedAddressId
      ) {
        payload.savedAddressId = selectedAddressId
      }

      if (
        addressMode === 'new' &&
        formData
      ) {
        payload.oneTimeAddress = {
          line1: formData.line1,
          line2: formData.line2,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
        }

        if (formData.save) {
          await saveAddress.mutateAsync({
            label: formData.label || 'Home',
            line1: formData.line1,
            line2: formData.line2,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
          })
        }
      }

      const order =
        await createOrder.mutateAsync(payload)

      if (order.mockPaymentId) {
        await confirmPayment.mutateAsync({
          razorpayOrderId:
            order.razorpayOrderId,
          razorpayPaymentId:
            order.mockPaymentId,
        })

        setCheckoutState('success')
        return
      }

      const Razorpay = (window as any).Razorpay

      const rzp = new Razorpay({
        key: process.env
          .NEXT_PUBLIC_RAZORPAY_KEY_ID,

        order_id: order.razorpayOrderId,

        amount: order.amount,

        currency: order.currency,

        name: 'Obrive',

        description: 'Auto parts order',

        handler: async (
          response: any,
        ) => {
          await confirmPayment.mutateAsync({
            razorpayOrderId:
              order.razorpayOrderId,

            razorpayPaymentId:
              response.razorpay_payment_id,
          })

          setCheckoutState('success')
        },

        modal: {
          ondismiss: () =>
            setCheckoutState('idle'),
        },
      })

      rzp.open()
    } catch {
      setCheckoutState('failed')
    }
  }

  if (checkoutState === 'success') {
    return (
      <ProtectedRoute>
        <div className="max-w-md mx-auto px-6 py-20 text-center space-y-4">
          <CheckCircle className="h-14 w-14 text-green-500 mx-auto" />

          <h2
            className="text-2xl font-bold"
            style={{ color: '#074139' }}
          >
            Order Placed!
          </h2>

          <p className="text-sm text-muted-foreground">
            Your order has been confirmed
            and will be shipped soon.
          </p>

          <div className="flex flex-col gap-3 mt-6">
            <Button
              style={{
                backgroundColor: '#074139',
                color: '#A2F1DF',
              }}
              onClick={() =>
                router.push('/account/orders')
              }
            >
              View Orders
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                router.push('/products')
              }
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1
          className="text-2xl font-bold mb-8"
          style={{ color: '#074139' }}
        >
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 space-y-5">
              <h2 className="font-semibold text-gray-800">
                Delivery Address
              </h2>

              {addresses?.length ? (
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setAddressMode('saved')
                    }
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                      addressMode === 'saved'
                        ? 'text-white border-transparent'
                        : 'border-gray-200 text-gray-600'
                    }`}
                    style={
                      addressMode === 'saved'
                        ? {
                            backgroundColor:
                              '#074139',
                          }
                        : {}
                    }
                  >
                    Saved Addresses
                  </button>

                  <button
                    onClick={() =>
                      setAddressMode('new')
                    }
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                      addressMode === 'new'
                        ? 'text-white border-transparent'
                        : 'border-gray-200 text-gray-600'
                    }`}
                    style={
                      addressMode === 'new'
                        ? {
                            backgroundColor:
                              '#074139',
                          }
                        : {}
                    }
                  >
                    New Address
                  </button>
                </div>
              ) : null}

              {addressMode === 'saved' &&
              addresses?.length ? (
                <div className="space-y-2">
                  {addresses.map((addr) => (
                    <button
                      key={addr.id}
                      onClick={() =>
                        setSelectedAddressId(
                          addr.id,
                        )
                      }
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                        selectedAddressId ===
                        addr.id
                          ? 'border-[#074139] bg-[#f0faf8]'
                          : 'border-gray-200'
                      }`}
                    >
                      <p className="text-sm font-semibold">
                        {addr.label}
                      </p>

                      <p className="text-xs text-muted-foreground mt-1">
                        {addr.line1}
                        {addr.line2
                          ? `, ${addr.line2}`
                          : ''}
                        , {addr.city},{' '}
                        {addr.state} —{' '}
                        {addr.pincode}
                      </p>
                    </button>
                  ))}
                </div>
              ) : null}

              {addressMode === 'new' && (
                <form
                  id="checkout-form"
                  onSubmit={handleSubmit(
                    handleCheckout,
                  )}
                  className="space-y-4"
                >
                  <div>
                    <Label>
                      Address Line 1
                    </Label>

                    <Input
                      placeholder="House no, Street"
                      {...register('line1', {
                        required: 'Required',
                      })}
                    />

                    {errors.line1 && (
                      <p className="text-xs text-red-500 mt-1">
                        {
                          errors.line1
                            .message
                        }
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>
                      Address Line 2
                    </Label>

                    <Input
                      placeholder="Area, Landmark"
                      {...register('line2')}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>City</Label>

                      <Input
                        placeholder="Hyderabad"
                        {...register('city', {
                          required: 'Required',
                        })}
                      />

                      {errors.city && (
                        <p className="text-xs text-red-500 mt-1">
                          {
                            errors.city
                              .message
                          }
                        </p>
                      )}
                    </div>

                    <div>
                      <Label>State</Label>

                      <Input
                        placeholder="Telangana"
                        {...register('state', {
                          required: 'Required',
                        })}
                      />

                      {errors.state && (
                        <p className="text-xs text-red-500 mt-1">
                          {
                            errors.state
                              .message
                          }
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label>Pincode</Label>

                    <Input
                      placeholder="500001"
                      {...register(
                        'pincode',
                        {
                          required:
                            'Required',

                          pattern: {
                            value:
                              /^[1-9][0-9]{5}$/,

                            message:
                              'Invalid pincode',
                          },
                        },
                      )}
                    />

                    {errors.pincode && (
                      <p className="text-xs text-red-500 mt-1">
                        {
                          errors.pincode
                            .message
                        }
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="save"
                      {...register('save')}
                    />

                    <Label htmlFor="save">
                      Save this address
                    </Label>
                  </div>

                  <div>
                    <Label>
                      Address Label
                    </Label>

                    <Input
                      placeholder="Home"
                      {...register('label')}
                    />
                  </div>
                </form>
              )}
            </Card>

            {checkoutState === 'failed' && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg">
                Payment failed. Please
                try again.
              </div>
            )}
          </div>

          <div className="space-y-4">
            <Card className="p-5 space-y-4">
              <h2 className="font-semibold text-gray-800">
                Order Summary
              </h2>

              <div className="space-y-3">
                {cart?.items?.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-gray-700">
                      {
                        item.product.name
                      }{' '}
                      × {item.quantity}
                    </span>

                    <span className="font-medium">
                      ₹
                      {(
                        item.product
                          .basePrice *
                        item.quantity
                      ).toLocaleString(
                        'en-IN',
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Subtotal
                  </span>

                  <span>
                    ₹
                    {cart?.subtotal.toLocaleString(
                      'en-IN',
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Shipping
                  </span>

                  <span className="text-green-600">
                    Free
                  </span>
                </div>

                <div className="flex justify-between font-bold pt-1 border-t">
                  <span>Total</span>

                  <span>
                    ₹
                    {cart?.subtotal.toLocaleString(
                      'en-IN',
                    )}
                  </span>
                </div>
              </div>

              {addressMode === 'saved' ? (
                <Button
                  className="w-full"
                  style={{
                    backgroundColor:
                      '#074139',
                    color: '#A2F1DF',
                  }}
                  disabled={
                    !selectedAddressId ||
                    checkoutState ===
                      'processing' ||
                    !cart?.items?.length
                  }
                  onClick={() =>
                    handleCheckout()
                  }
                >
                  {checkoutState ===
                  'processing'
                    ? 'Processing...'
                    : `Pay ₹${cart?.subtotal.toLocaleString(
                        'en-IN',
                      )}`}
                </Button>
              ) : (
                <Button
                  form="checkout-form"
                  type="submit"
                  className="w-full"
                  style={{
                    backgroundColor:
                      '#074139',
                    color: '#A2F1DF',
                  }}
                  disabled={
                    checkoutState ===
                      'processing' ||
                    !cart?.items?.length
                  }
                >
                  {checkoutState ===
                  'processing'
                    ? 'Processing...'
                    : `Pay ₹${cart?.subtotal.toLocaleString(
                        'en-IN',
                      )}`}
                </Button>
              )}

              <p className="text-xs text-center text-muted-foreground">
                Secured by Razorpay
              </p>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}