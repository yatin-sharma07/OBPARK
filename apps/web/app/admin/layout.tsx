'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AdminRoute } from '@/components/auth/AdminRoute'
import { LayoutDashboard, Package, ShoppingBag, Tag, LogOut } from 'lucide-react'
import { useLogout } from '@/hooks/useAuth'

const NAV_ITEMS = [
  { href: '/admin',          label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/products', label: 'Products',  icon: Package },
  { href: '/admin/orders',   label: 'Orders',    icon: ShoppingBag },
  { href: '/admin/coupons',  label: 'Coupons',   icon: Tag },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const logout = useLogout()

  return (
    <AdminRoute>
      <div className="flex min-h-screen bg-gray-50">
        <aside className="w-56 bg-white border-r flex flex-col shrink-0">
          <div className="px-6 py-5 border-b">
            <Link href="/" className="font-bold text-lg" style={{ color: '#074139' }}>
              Obrive
            </Link>
            <p className="text-xs text-muted-foreground mt-0.5">Admin Panel</p>
          </div>

          <nav className="flex-1 px-3 py-4 space-y-1">
            {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => {
              const active = exact ? pathname === href : pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active ? 'text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={active ? { backgroundColor: '#074139' } : {}}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="px-3 py-4 border-t">
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-4 w-4 shrink-0" />
              Logout
            </button>
          </div>
        </aside>

        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </AdminRoute>
  )
}