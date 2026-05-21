'use client'
import Link from 'next/link'
import { useCategories } from '@/hooks/useProducts'

const CATEGORY_ICONS: Record<string, string> = {
  'engine-parts': '⚙️',
  'brakes': '🛞',
  'electrical': '⚡',
  'tyres-wheels': '🔵',
  'accessories': '🪄',
}

export function FeaturedCategories() {
  const { data: categories, isLoading } = useCategories()

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#074139' }}>Shop by Category</h2>
      <p className="text-muted-foreground mb-10 text-sm">Genuine parts and accessories for every need</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {isLoading
          ? [...Array(5)].map((_, i) => <div key={i} className="h-28 bg-gray-100 rounded-xl animate-pulse" />)
          : categories?.map((cat) => (
              <Link key={cat.id} href={`/products?category=${cat.slug}`}
                className="group flex flex-col items-center justify-center gap-3 p-5 rounded-xl border bg-white hover:shadow-md transition-all duration-150 text-center">
                <span className="text-3xl">{CATEGORY_ICONS[cat.slug] ?? '📦'}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors">{cat.name}</span>
              </Link>
            ))}
      </div>
    </section>
  )
}