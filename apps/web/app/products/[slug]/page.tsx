'use client'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const mockProducts = [
  { id: 1, slug: 'car-phone-mount', name: 'Car Phone Mount', category: 'Accessories', price: 499, compatibility: 'All vehicles', image: '📱', description: 'Universal car phone mount with 360 degree rotation. Fits all smartphones. Easy one-touch mounting system.' },
  { id: 2, slug: 'dash-camera-4k', name: 'Dash Camera 4K', category: 'Electronics', price: 3999, compatibility: 'All vehicles', image: '📷', description: 'Ultra HD 4K dash camera with night vision, wide angle lens, and loop recording. Built-in GPS tracking.' },
  { id: 3, slug: 'tyre-inflator', name: 'Tyre Inflator', category: 'Tools', price: 1299, compatibility: 'All vehicles', image: '🔧', description: 'Portable digital tyre inflator with auto shut-off. Works with cars, bikes, and SUVs. LED display.' },
  { id: 4, slug: 'seat-cover-set', name: 'Seat Cover Set', category: 'Interior', price: 2499, compatibility: 'Hyundai Creta', image: '🪑', description: 'Premium leatherette seat covers designed specifically for Hyundai Creta. Water resistant and easy to clean.' },
  { id: 5, slug: 'led-headlights', name: 'LED Headlights', category: 'Electronics', price: 1899, compatibility: 'All vehicles', image: '💡', description: 'High brightness LED headlight bulbs. 6000K white light. Easy plug and play installation.' },
  { id: 6, slug: 'car-vacuum-cleaner', name: 'Car Vacuum Cleaner', category: 'Tools', price: 999, compatibility: 'All vehicles', image: '🧹', description: 'Powerful 120W car vacuum cleaner with HEPA filter. Includes multiple attachments for thorough cleaning.' },
]

export default function ProductDetailPage() {
  const { slug } = useParams()
  const router = useRouter()

  const product = mockProducts.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-4xl mb-4">🔍</p>
        <h1 className="text-2xl font-bold mb-2">Product not found</h1>
        <Button onClick={() => router.push('/products')}>Back to Products</Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={() => router.back()}
        className="text-sm text-muted-foreground hover:text-foreground mb-6 flex items-center gap-1"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="flex items-center justify-center p-12">
          <span className="text-8xl">{product.image}</span>
        </Card>

        <div className="space-y-4">
          <div>
            <Badge variant="outline" className="mb-2">{product.category}</Badge>
            <h1 className="text-3xl font-bold">{product.name}</h1>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Compatible with:</span>
            <Badge>{product.compatibility}</Badge>
          </div>

          <div className="text-3xl font-bold">₹{product.price.toLocaleString()}</div>

          <div className="flex gap-3 pt-2">
            <Button className="flex-1">Add to Cart</Button>
            <Button variant="outline" className="flex-1">Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}