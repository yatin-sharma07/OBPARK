'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const mockProducts = [
  { id: 1, slug: 'car-phone-mount', name: 'Car Phone Mount', category: 'Accessories', price: 499, compatibility: 'All vehicles', image: '📱' },
  { id: 2, slug: 'dash-camera-4k', name: 'Dash Camera 4K', category: 'Electronics', price: 3999, compatibility: 'All vehicles', image: '📷' },
  { id: 3, slug: 'tyre-inflator', name: 'Tyre Inflator', category: 'Tools', price: 1299, compatibility: 'All vehicles', image: '🔧' },
  { id: 4, slug: 'seat-cover-set', name: 'Seat Cover Set', category: 'Interior', price: 2499, compatibility: 'Hyundai Creta', image: '🪑' },
  { id: 5, slug: 'led-headlights', name: 'LED Headlights', category: 'Electronics', price: 1899, compatibility: 'All vehicles', image: '💡' },
  { id: 6, slug: 'car-vacuum-cleaner', name: 'Car Vacuum Cleaner', category: 'Tools', price: 999, compatibility: 'All vehicles', image: '🧹' },
]

const categories = ['All', 'Accessories', 'Electronics', 'Tools', 'Interior']

export default function ProductsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const router = useRouter()

  const filtered = mockProducts.filter(p => {
    const matchCategory = category === 'All' || p.category === category
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-2">Products</h1>
      <p className="text-muted-foreground mb-8">Everything your vehicle needs</p>

      <div className="flex gap-3 mb-6">
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map(cat => (
          <Button
            key={cat}
            variant={category === cat ? 'default' : 'outline'}
            size="sm"
            onClick={() => setCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(product => (
          <Card key={product.id} className="p-5 hover:shadow-md transition-shadow cursor-pointer" onClick={() => router.push(`/products/${product.slug}`)}>
            <div className="text-5xl mb-4 text-center">{product.image}</div>
            <h3 className="font-semibold mb-1">{product.name}</h3>
            <p className="text-muted-foreground text-sm mb-3">{product.category}</p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">₹{product.price.toLocaleString()}</span>
              <Badge variant="outline" className="text-xs">{product.compatibility}</Badge>
            </div>
            <Button className="w-full mt-4" size="sm">Add to Cart</Button>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          No products found for "{search}"
        </div>
      )}
    </div>
  )
}