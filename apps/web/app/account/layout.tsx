'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useAuthStore } from '@/store/auth.store'
import { Car, Zap, ShoppingBag, Settings } from 'lucide-react'

const NAV_ITEMS = [
  { href: '/account/vehicles', label: 'My Vehicles', icon: Car },
  { href: '/account/fastag', label: 'FASTag', icon: Zap },
  { href: '/account/orders', label: 'Orders', icon: ShoppingBag },
  { href: '/account/settings', label: 'Settings', icon: Settings },
]

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { user } = useAuthStore()

  return (
    <ProtectedRoute>
      <div className="max-w-6xl mx-auto px-6 py-10 flex gap-8">
        <aside className="w-56 shrink-0">
          <div className="mb-6 px-3">
            <p className="font-semibold text-sm truncate">{user?.name}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          </div>
          <nav className="space-y-1">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </Link>
              )
            })}
          </nav>
        </aside>
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </ProtectedRoute>
  )
}