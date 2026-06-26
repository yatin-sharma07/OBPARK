'use client'
import { useDashboardStats } from '@/hooks/useAdmin'
import { ShoppingBag, Users, TrendingUp, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const STATUS_COLORS: Record<string, string> = {
  PENDING:    'bg-yellow-100 text-yellow-700',
  CONFIRMED:  'bg-blue-100 text-blue-700',
  PROCESSING: 'bg-purple-100 text-purple-700',
  SHIPPED:    'bg-indigo-100 text-indigo-700',
  DELIVERED:  'bg-green-100 text-green-700',
  CANCELLED:  'bg-red-100 text-red-700',
}

export default function AdminDashboardPage() {
  const { data: stats, isLoading } = useDashboardStats()

  const kpis = [
    { label: 'Total Revenue', value: `₹${(stats?.totalRevenue ?? 0).toLocaleString('en-IN')}`, icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Total Orders', value: stats?.totalOrders ?? 0, icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Pending Orders', value: stats?.pendingOrders ?? 0, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Total Users', value: stats?.totalUsers ?? 0, icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: '#074139' }}>Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Overview of your store</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="p-5 space-y-3">
            <div className={`w-9 h-9 rounded-lg ${kpi.bg} flex items-center justify-center`}>
              <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold">{isLoading ? '—' : kpi.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{kpi.label}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="font-semibold mb-4" style={{ color: '#074139' }}>Recent Orders</h2>
        {isLoading ? (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="divide-y">
            {stats?.recentOrders?.map((order: any) => (
              <div key={order.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium">{order.user?.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {order.items?.length} item{order.items?.length > 1 ? 's' : ''} ·{' '}
                    {new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={`border-0 text-xs ${STATUS_COLORS[order.status] ?? ''}`}>
                    {order.status}
                  </Badge>
                  <span className="text-sm font-bold">₹{Number(order.total).toLocaleString('en-IN')}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}