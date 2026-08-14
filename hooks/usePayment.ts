import { useMutation } from '@tanstack/react-query'
import { api } from '@/lib/api'

export interface CreatePaymentResponse {
  orderId: string
  orderNumber: string
  amount: number
  currency: string
  razorpayOrderId: string
  keyId: string
}

export interface VerifyPaymentPayload {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
}

export function useCreatePayment() {
  return useMutation({
    mutationFn: (data: {
      productId: string
      quantity: number
      gateway: 'RAZORPAY' | 'PAYU'
      couponCode?: string
    }) =>
      api.post<CreatePaymentResponse>('/payment/create', data),
  })
}

export function useVerifyPayment() {
  return useMutation({
    mutationFn: (data: VerifyPaymentPayload) =>
      api.post<{ success: boolean; message: string; orderId: string }>('/payment/verify', data),
  })
}
