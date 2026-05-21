import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import type { Product } from '@/hooks/useProducts'

function CompatibilityBadge({ status }: { status?: string }) {
  if (!status || status === 'unknown') return null
  return status === 'compatible' ? (
    <Badge className="bg-green-100 text-green-700 border-0 text-xs">
      ✓ Fits your vehicle
    </Badge>
  ) : (
    <Badge className="bg-amber-100 text-amber-700 border-0 text-xs">
      ⚠ Check compatibility
    </Badge>
  )
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer h-full">
        <div className="aspect-square bg-gray-50 flex items-center justify-center text-4xl">
          🔧
        </div>
        <div className="p-4 space-y-2">
          <p className="text-xs text-muted-foreground">{product.category.name}</p>
          <h3 className="text-sm font-semibold leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center justify-between pt-1">
            <p className="text-base font-bold text-gray-900">
              ₹{product.basePrice.toLocaleString('en-IN')}
            </p>
            {product.stock < 10 && product.stock > 0 && (
              <span className="text-xs text-amber-600">Only {product.stock} left</span>
            )}
            {product.stock === 0 && (
              <span className="text-xs text-red-500">Out of stock</span>
            )}
          </div>
          <CompatibilityBadge status={product.compatibilityStatus} />
        </div>
      </Card>
    </Link>
  )
}