'use client'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth.store'
import { useLogout } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'

export function Header() {
  const { isAuthenticated, isHydrated, user } = useAuthStore()
  const logout = useLogout()

  return (
    <header className="border-b px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold" style={{ color: '#074139' }}>
        Obrive
      </Link>

      <nav className="flex items-center gap-6 text-sm">
        <Link href="/products" className="hover:opacity-70 transition-opacity" style={{ color: '#074139' }}>
          Products
        </Link>
        <Link href="/account/fastag" className="hover:opacity-70 transition-opacity" style={{ color: '#074139' }}>
          FASTag
        </Link>

        {/* Don't render auth UI until hydration is complete */}
        {!isHydrated ? (
          <div className="w-20 h-8 bg-gray-100 rounded animate-pulse" />
        ) : isAuthenticated ? (
          <>
            <Link href="/account" className="hover:opacity-70 transition-opacity font-medium" style={{ color: '#074139' }}>
              {user?.name}
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              style={{ borderColor: '#074139', color: '#074139' }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:opacity-70 transition-opacity" style={{ color: '#074139' }}>
              Login
            </Link>
            <Button size="sm" style={{ backgroundColor: '#074139', color: '#A2F1DF' }} asChild>
              <Link href="/register">Sign up</Link>
            </Button>
          </>
        )}
      </nav>
    </header>
  )
}