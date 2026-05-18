export type OrderStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'PROCESSING'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'REFUNDED'

export interface Order {
  id: string
  userId: string
  status: OrderStatus
  subtotal: number
  discount: number
  total: number
  createdAt: Date
}