'use client'

import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

import { useOrders } from '@/hooks/useOrders'
import { Badge } from '@/components/ui/badge'

const STATUS_COLORS: Record<string, string> = {
  PENDING: 'bg-yellow-100 text-yellow-700',
  CONFIRMED: 'bg-blue-100 text-blue-700',
  PROCESSING: 'bg-purple-100 text-purple-700',
  SHIPPED: 'bg-indigo-100 text-indigo-700',
  DELIVERED: 'bg-green-100 text-green-700',
  CANCELLED: 'bg-red-100 text-red-700',
  REFUNDED: 'bg-gray-100 text-gray-700',
}

export default function OrdersPage() {
  const { data: orders, isLoading } = useOrders()

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-24 bg-gray-100 rounded-xl animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (!orders?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
        <ShoppingBag className="h-10 w-10 text-muted-foreground" />

        <h2 className="text-lg font-semibold">
          No orders yet
        </h2>

        <p className="text-sm text-muted-foreground">
          Your orders will appear here once you make a purchase.
        </p>

        <Link
          href="/products"
          className="text-sm font-medium hover:underline mt-2"
          style={{ color: '#074139' }}
        >
          Browse Parts →
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-2xl font-bold mb-1"
          style={{ color: '#074139' }}
        >
          Orders
        </h1>

        <p className="text-sm text-muted-foreground">
          {orders.length} order
          {orders.length > 1 ? 's' : ''}
        </p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-xl p-5 space-y-3 bg-white"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground">
                  {new Date(order.createdAt).toLocaleDateString(
                    'en-IN',
                    {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    },
                  )}
                </p>

                <p className="text-xs font-mono text-muted-foreground mt-0.5">
                  #{order.id.slice(-8).toUpperCase()}
                </p>
              </div>

              <Badge
                className={`border-0 text-xs ${
                  STATUS_COLORS[order.status] ??
                  'bg-gray-100'
                }`}
              >
                {order.status}
              </Badge>
            </div>

            <div className="space-y-1">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm"
                >
                  <span className="text-gray-700">
                    {item.productName} × {item.quantity}
                  </span>

                  <span className="font-medium">
                    ₹
                    {Number(item.total).toLocaleString(
                      'en-IN',
                    )}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t">
              <span className="text-sm text-muted-foreground">
                {order.address.city}, {order.address.state}
              </span>

              <span className="font-bold text-sm">
                ₹
                {Number(order.total).toLocaleString(
                  'en-IN',
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}