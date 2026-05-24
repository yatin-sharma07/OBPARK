import { ShoppingBag } from 'lucide-react'

export default function OrdersPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
      <ShoppingBag className="h-10 w-10 text-muted-foreground" />
      <h2 className="text-lg font-semibold">No orders yet</h2>
      <p className="text-sm text-muted-foreground">
        Your orders will appear here once you make a purchase.
      </p>
    </div>
  )
}