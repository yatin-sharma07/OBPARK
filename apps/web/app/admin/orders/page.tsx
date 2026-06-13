'use client'
import { useState } from 'react'
import { useAdminOrders, useUpdateOrderStatus } from '@/hooks/useAdmin'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const STATUS_COLORS: Record<string, string> = {
  PENDING:    'bg-yellow-100 text-yellow-700',
  CONFIRMED:  'bg-blue-100 text-blue-700',
  PROCESSING: 'bg-purple-100 text-purple-700',
  SHIPPED:    'bg-indigo-100 text-indigo-700',
  DELIVERED:  'bg-green-100 text-green-700',
  CANCELLED:  'bg-red-100 text-red-700',
  REFUNDED:   'bg-gray-100 text-gray-600',
}

const NEXT_STATUS: Record<string, string[]> = {
  PENDING:    ['CONFIRMED', 'CANCELLED'],
  CONFIRMED:  ['PROCESSING', 'CANCELLED'],
  PROCESSING: ['SHIPPED'],
  SHIPPED:    ['DELIVERED'],
  DELIVERED:  [],
  CANCELLED:  ['REFUNDED'],
  REFUNDED:   [],
}

export default function AdminOrdersPage() {
  const [statusFilter, setStatusFilter] = useState('')
  const { data, isLoading } = useAdminOrders(statusFilter ? { status: statusFilter } : {})
  const updateStatus = useUpdateOrderStatus()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: '#074139' }}>Orders</h1>
        <p className="text-sm text-muted-foreground mt-1">{data?.total ?? 0} orders total</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {['', 'PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'].map((s) => (
          <button key={s} onClick={() => setStatusFilter(s)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${statusFilter === s ? 'text-white border-transparent' : 'border-gray-200 text-gray-600'}`}
            style={statusFilter === s ? { backgroundColor: '#074139' } : {}}>
            {s || 'All'}
          </button>
        ))}
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                {['Order', 'Customer', 'Items', 'Total', 'Status', 'Actions'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {isLoading ? [...Array(5)].map((_, i) => (
                <tr key={i}>{[...Array(6)].map((_, j) => <td key={j} className="px-4 py-3"><div className="h-4 bg-gray-100 rounded animate-pulse" /></td>)}</tr>
              )) : data?.orders?.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-mono text-xs">#{order.id.slice(-8).toUpperCase()}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium">{order.user?.name}</p>
                    <p className="text-xs text-muted-foreground">{order.user?.email}</p>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{order.items?.length} item{order.items?.length > 1 ? 's' : ''}</td>
                  <td className="px-4 py-3 font-bold">₹{Number(order.total).toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3">
                    <Badge className={`border-0 text-xs ${STATUS_COLORS[order.status] ?? ''}`}>{order.status}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1 flex-wrap">
                      {NEXT_STATUS[order.status]?.map((next) => (
                        <button key={next} onClick={() => updateStatus.mutate({ orderId: order.id, status: next })} disabled={updateStatus.isPending}
                          className="text-xs px-2 py-1 rounded border border-gray-200 hover:bg-gray-50 transition-colors">
                          → {next}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}