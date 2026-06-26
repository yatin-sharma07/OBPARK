'use client'
import { useState } from 'react'
import { useCoupons, useCreateCoupon, useToggleCoupon } from '@/hooks/useAdmin'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Plus, X } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function AdminCouponsPage() {
  const [showForm, setShowForm] = useState(false)
  const { data: coupons, isLoading } = useCoupons()
  const createCoupon = useCreateCoupon()
  const toggleCoupon = useToggleCoupon()
  const { register, handleSubmit, reset, watch } = useForm<any>({ defaultValues: { discountType: 'FLAT' } })
  const discountType = watch('discountType')

  const onSubmit = async (data: any) => {
    await createCoupon.mutateAsync({
      ...data,
      discountValue: parseFloat(data.discountValue),
      minOrderValue: data.minOrderValue ? parseFloat(data.minOrderValue) : undefined,
      maxUses: data.maxUses ? parseInt(data.maxUses) : undefined,
      expiresAt: data.expiresAt || undefined,
    })
    reset()
    setShowForm(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#074139' }}>Coupons</h1>
          <p className="text-sm text-muted-foreground mt-1">{coupons?.length ?? 0} coupon codes</p>
        </div>
        <Button onClick={() => setShowForm(true)} style={{ backgroundColor: '#074139', color: '#A2F1DF' }}>
          <Plus className="h-4 w-4 mr-2" /> Create Coupon
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                {['Code', 'Discount', 'Min Order', 'Uses', 'Expires', 'Status', 'Action'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {isLoading ? [...Array(3)].map((_, i) => (
                <tr key={i}>{[...Array(7)].map((_, j) => <td key={j} className="px-4 py-3"><div className="h-4 bg-gray-100 rounded animate-pulse" /></td>)}</tr>
              )) : coupons?.map((coupon) => (
                <tr key={coupon.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono font-bold">{coupon.code}</td>
                  <td className="px-4 py-3">{coupon.discountType === 'FLAT' ? `₹${Number(coupon.discountValue).toLocaleString('en-IN')} off` : `${coupon.discountValue}% off`}</td>
                  <td className="px-4 py-3 text-muted-foreground">{coupon.minOrderValue ? `₹${Number(coupon.minOrderValue).toLocaleString('en-IN')}` : '—'}</td>
                  <td className="px-4 py-3">{coupon.usedCount}{coupon.maxUses ? `/${coupon.maxUses}` : ''}</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">{coupon.expiresAt ? new Date(coupon.expiresAt).toLocaleDateString('en-IN') : 'Never'}</td>
                  <td className="px-4 py-3">
                    <Badge className={`border-0 text-xs ${coupon.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {coupon.isActive ? 'Active' : 'Disabled'}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => toggleCoupon.mutate(coupon.id)}
                      className={`text-xs px-3 py-1 rounded border transition-colors ${coupon.isActive ? 'border-red-200 text-red-500 hover:bg-red-50' : 'border-green-200 text-green-600 hover:bg-green-50'}`}>
                      {coupon.isActive ? 'Disable' : 'Enable'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowForm(false)} />
          <Card className="relative w-full max-w-md mx-4 p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg" style={{ color: '#074139' }}>Create Coupon</h2>
              <button onClick={() => setShowForm(false)}><X className="h-5 w-5 text-gray-400" /></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit as any)} className="space-y-4">
              <div><Label>Coupon Code</Label><Input {...register('code', { required: true })} placeholder="OBRIVE100" className="uppercase" /></div>
              <div><Label>Description</Label><Input {...register('description')} placeholder="₹100 off on orders above ₹500" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Discount Type</Label>
                  <select {...register('discountType')} className="w-full border rounded-md px-3 py-2 text-sm">
                    <option value="FLAT">Flat (₹)</option>
                    <option value="PERCENTAGE">Percentage (%)</option>
                  </select>
                </div>
                <div>
                  <Label>{discountType === 'FLAT' ? 'Amount (₹)' : 'Percentage (%)'}</Label>
                  <Input type="number" {...register('discountValue', { required: true })} placeholder={discountType === 'FLAT' ? '100' : '10'} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>Min Order Value (₹)</Label><Input type="number" {...register('minOrderValue')} placeholder="500" /></div>
                <div><Label>Max Uses</Label><Input type="number" {...register('maxUses')} placeholder="Unlimited" /></div>
              </div>
              <div><Label>Expiry Date</Label><Input type="date" {...register('expiresAt')} /></div>
              <div className="flex gap-3 pt-2">
                <Button type="submit" className="flex-1" style={{ backgroundColor: '#074139', color: '#A2F1DF' }} disabled={createCoupon.isPending}>
                  Create Coupon
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  )
}