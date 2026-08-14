'use client'
import Link from 'next/link'
import { useFeaturedProducts } from '@/hooks/useProducts'
import { ProductCard } from '@/components/product/ProductCard'

export function FeaturedProducts() {
  const { data: products, isLoading } = useFeaturedProducts()

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-2xl font-bold mb-1" style={{ color: '#074139' }}>Popular Parts</h2>
          <p className="text-sm text-muted-foreground">Top picks across all categories</p>
        </div>
        <Link href="/products" className="text-sm font-medium hover:underline" style={{ color: '#074139' }}>View all →</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading
          ? [...Array(8)].map((_, i) => <div key={i} className="aspect-[3/4] bg-gray-100 rounded-xl animate-pulse" />)
          : products?.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}