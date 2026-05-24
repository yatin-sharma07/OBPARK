'use client'
import { useState } from 'react'
import { useProducts, useCategories } from '@/hooks/useProducts'
import { ProductCard } from '@/components/product/ProductCard'
import { useAuthStore } from '@/store/auth.store'
import { useVehicles } from '@/hooks/useVehicles'

export default function ProductsPage() {
  const [filters, setFilters] = useState<Record<string, string>>({})
  const { data, isLoading } = useProducts(filters)
  const { data: categories } = useCategories()
  const { isAuthenticated } = useAuthStore()
  const { data: vehicles } = useVehicles()

  const setFilter = (key: string, value: string) =>
    setFilters((f) => ({ ...f, [key]: value }))
  const clearFilter = (key: string) =>
    setFilters((f) => { const n = { ...f }; delete n[key]; return n })

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-1" style={{ color: '#074139' }}>All Parts</h1>
      <p className="text-sm text-muted-foreground mb-8">
        {data?.total ?? 0} products
      </p>

      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-56 shrink-0 space-y-8">

          {/* Vehicle filter */}
          {isAuthenticated && vehicles?.length ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                My Vehicles
              </p>
              <div className="space-y-1">
                <button
                  onClick={() => clearFilter('vrn')}
                  className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                    !filters.vrn ? 'bg-[#f0faf8] text-[#074139] font-medium' : 'hover:bg-gray-50'
                  }`}
                >
                  All vehicles
                </button>
                {vehicles.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setFilter('vrn', v.vrn)}
                    className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                      filters.vrn === v.vrn
                        ? 'bg-[#f0faf8] text-[#074139] font-medium'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {v.vrn}
                    <span className="block text-xs text-muted-foreground font-normal">
                      {v.make} {v.model}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {/* Category filter */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Category
            </p>
            <div className="space-y-1">
              <button
                onClick={() => clearFilter('category')}
                className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                  !filters.category ? 'bg-[#f0faf8] text-[#074139] font-medium' : 'hover:bg-gray-50'
                }`}
              >
                All categories
              </button>
              {categories?.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter('category', cat.slug)}
                  className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                    filters.category === cat.slug
                      ? 'bg-[#f0faf8] text-[#074139] font-medium'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price filter */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Price Range
            </p>
            <div className="space-y-1">
              {[
                { label: 'Under ₹500',        min: '0',    max: '500'   },
                { label: '₹500 – ₹1,500',     min: '500',  max: '1500'  },
                { label: '₹1,500 – ₹5,000',   min: '1500', max: '5000'  },
                { label: 'Above ₹5,000',       min: '5000', max: '99999' },
              ].map((range) => (
                <button
                  key={range.label}
                  onClick={() => {
                    setFilter('priceMin', range.min)
                    setFilter('priceMax', range.max)
                  }}
                  className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                    filters.priceMin === range.min && filters.priceMax === range.max
                      ? 'bg-[#f0faf8] text-[#074139] font-medium'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {range.label}
                </button>
              ))}
              {(filters.priceMin || filters.priceMax) && (
                <button
                  onClick={() => { clearFilter('priceMin'); clearFilter('priceMax') }}
                  className="w-full text-left text-xs px-3 py-1 text-red-500 hover:underline"
                >
                  Clear price filter
                </button>
              )}
            </div>
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          {isLoading ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-[3/4] bg-gray-100 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : data?.products.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-4xl mb-4">🔍</p>
              <p className="font-medium">No products found</p>
              <p className="text-sm mt-1">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {data?.products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}