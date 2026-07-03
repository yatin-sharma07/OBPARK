'use client'

import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { MoreVertical, FileText, Trash2 } from 'lucide-react'
import { div } from 'framer-motion/m'

// TODO: replace with GET /admin/customers once that endpoint exists
// Needs: per-user order count + total spend aggregation, joined from `orders` + `users`
const CUSTOMERS = [
  { id: '#CUST001', name: 'Ravi Kumar', phone: '+91 98765 43210', orders: 25, spend: 3450, status: 'Active' },
  { id: '#CUST002', name: 'Priya Sharma', phone: '+91 98765 43211', orders: 5, spend: 250, status: 'Inactive' },
  { id: '#CUST003', name: 'Arjun Reddy', phone: '+91 98765 43212', orders: 30, spend: 4600, status: 'VIP' },
  { id: '#CUST004', name: 'Sneha Iyer', phone: '+91 98765 43213', orders: 25, spend: 3450, status: 'Active' },
  { id: '#CUST005', name: 'Vikram Singh', phone: '+91 98765 43214', orders: 5, spend: 250, status: 'Inactive' },
  { id: '#CUST006', name: 'Anjali Nair', phone: '+91 98765 43215', orders: 30, spend: 4600, status: 'VIP' },
]

const OVERVIEW_CHART = [
  { day: 'Sun', value: 16000 }, { day: 'Mon', value: 27000 }, { day: 'Tue', value: 27000 },
  { day: 'Wed', value: 25409 }, { day: 'Thu', value: 22000 }, { day: 'Fri', value: 30000 }, { day: 'Sat', value: 30000 },
]

const STATUS_STYLE: Record<string, string> = {
  Active: 'text-green-600', Inactive: 'text-red-500', VIP: 'text-amber-600',
}

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-800">Customers</h1>
        <div className="w-9 h-9 rounded-full bg-gray-300" />
      </div>

      <div className="p-6 space-y-6">
        {/* Top row: 3 KPI cards + Customer Overview chart */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1 space-y-4">
            {[
              { label: 'Total Customers', value: '—', trend: 'needs backend' },
              { label: 'New Customers', value: '—', trend: 'needs backend' },
              { label: 'Visitor', value: '—', trend: 'needs backend' },
            ].map((k) => (
              <div key={k.label} className="bg-white border rounded-xl p-5">
                <div className="flex items-start justify-between">
                  <p className="text-sm font-semibold text-gray-700">{k.label}</p>
                  <MoreVertical className="h-4 w-4 text-gray-300" />
                </div>
                <p className="text-2xl font-bold text-gray-800 mt-1">{k.value}</p>
                <p className="text-xs text-gray-400 mt-1">{k.trend}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 bg-white border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">Customer Overview</h2>
              <div className="flex gap-1 text-xs">
                <button className="px-3 py-1.5 rounded-full bg-green-50 text-green-600 border border-green-200">This week</button>
                <button className="px-3 py-1.5 rounded-full text-gray-500 border">Last week</button>
              </div>
            </div>
            <div className="flex gap-8 mb-4 border-b pb-4">
              {/* TODO: replace with real aggregate counts once /admin/customers exists */}
              {[
                { value: '—', label: 'Active Customers' },
                { value: '—', label: 'Repeat Customers' },
                { value: '—', label: 'Shop Visitor' },
                { value: '—', label: 'Conversion Rate' },
              ].map((s, i) => (
                <div key={i} className={i === 0 ? 'border-b-2 border-green-500 pb-1' : ''}>
                  <p className="text-lg font-bold text-gray-800">{s.value}</p>
                  <p className="text-xs text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={OVERVIEW_CHART}>
                <defs>
                  <linearGradient id="cust" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A2F1DF" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#A2F1DF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" axisLine={false} tickLine={false} fontSize={11} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#22c55e" fill="url(#cust)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Customer table */}
        <div className="bg-white border rounded-xl p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b">
                <th className="pb-3 font-medium">Customer Id</th>
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Phone</th>
                <th className="pb-3 font-medium">Order Count</th>
                <th className="pb-3 font-medium">Total Spend</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {CUSTOMERS.map((c, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-3 text-gray-700">{c.id}</td>
                  <td className="py-3 text-gray-700 font-medium">{c.name}</td>
                  <td className="py-3 text-gray-500">{c.phone}</td>
                  <td className="py-3 text-gray-700">{c.orders}</td>
                  <td className="py-3 text-gray-700">₹{c.spend.toLocaleString('en-IN')}</td>
                  <td className="py-3">
                    <span className="flex items-center gap-1.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${c.status === 'Active' ? 'bg-green-500' : c.status === 'VIP' ? 'bg-amber-500' : 'bg-red-500'}`} />
                      <span className={STATUS_STYLE[c.status]}>{c.status}</span>
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-gray-600"><FileText className="h-4 w-4" /></button>
                      <button className="text-gray-400 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>

          <div className="flex items-center justify-between mt-4">
            <button className="text-sm text-gray-500">← Previous</button>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`w-8 h-8 rounded-lg text-sm ${n === 1 ? 'text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                  style={n === 1 ? { backgroundColor: '#074139' } : {}}
                >
                  {n}
                </button>
              ))}
            </div>
            <button className="text-sm text-gray-500">Next →</button>
          </div>
        </div>
      </div>
    </div>
  )
}