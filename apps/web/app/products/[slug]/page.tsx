'use client'
import { useParams } from 'next/navigation'
import { useProduct } from '@/hooks/useProducts'
import { useVehicles } from '@/hooks/useVehicles'
import { useAuthStore } from '@/store/auth.store'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { isAuthenticated } = useAuthStore()
  const { data: vehicles } = useVehicles()
  const [selectedVrn, setSelectedVrn] = useState<string | undefined>()
  const { data: product, isLoading } = useProduct(slug, selectedVrn)

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-1/4" />
        <div className="h-64 bg-gray-100 rounded-xl" />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-4xl mb-4">🔧</p>
        <p className="font-medium">Product not found</p>
      </div>
    )
  }

  const compatibilityColor =
    product.compatibilityStatus === 'compatible' ? 'bg-green-100 text-green-700'
    : product.compatibilityStatus === 'incompatible' ? 'bg-red-100 text-red-700'
    : 'bg-gray-100 text-gray-600'

  const compatibilityText =
    product.compatibilityStatus === 'compatible' ? '✓ Fits your selected vehicle'
    : product.compatibilityStatus === 'incompatible' ? '✕ Does not fit your selected vehicle'
    : 'Select a vehicle to check compatibility'

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center text-8xl">🔧</div>
        <div className="space-y-5">
          <div>
            <p className="text-xs text-muted-foreground mb-1">{product.category.name}</p>
            <h1 className="text-2xl font-bold" style={{ color: '#074139' }}>{product.name}</h1>
          </div>
          <p className="text-3xl font-bold text-gray-900">₹{product.basePrice.toLocaleString('en-IN')}</p>
          {product.description && <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>}
          <div className="space-y-2">
            {isAuthenticated && vehicles?.length ? (
              <>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Check compatibility</p>
                <div className="flex flex-wrap gap-2">
                  {vehicles.map((v) => (
                    <button key={v.id} onClick={() => setSelectedVrn(selectedVrn === v.vrn ? undefined : v.vrn)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${selectedVrn === v.vrn ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 hover:border-gray-300'}`}>
                      {v.vrn} · {v.make} {v.model}
                    </button>
                  ))}
                </div>
              </>
            ) : null}
            <div className={`text-sm px-4 py-2.5 rounded-lg font-medium ${compatibilityColor}`}>{compatibilityText}</div>
          </div>
          {product.compatibility?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Compatible with</p>
              <div className="flex flex-wrap gap-2">
                {product.compatibility.map((r, i) => (
                  <Badge key={i} variant="outline" className="text-xs">{r.make} {r.model} ({r.yearFrom}–{r.yearTo})</Badge>
                ))}
              </div>
            </div>
          )}
          <p className="text-xs text-muted-foreground">{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
          <Button className="w-full" style={{ backgroundColor: '#074139', color: '#A2F1DF' }} disabled={product.stock === 0}>
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  )
}