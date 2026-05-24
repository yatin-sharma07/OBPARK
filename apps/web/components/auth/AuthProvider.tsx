'use client'

import { useEffect } from 'react'
import { refreshSession } from '@/lib/auth.api'
import { useAuthStore } from '@/store/auth.store'

const LEGACY_STORAGE_KEY = 'obrive-auth'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const setAuth = useAuthStore((s) => s.setAuth)
  const clearAuth = useAuthStore((s) => s.clearAuth)
  const setHydrated = useAuthStore((s) => s.setHydrated)

  useEffect(() => {
    localStorage.removeItem(LEGACY_STORAGE_KEY)

    refreshSession()
      .then((res) => setAuth(res.user, res.accessToken))
      .catch(() => clearAuth())
      .finally(() => setHydrated(true))
  }, [setAuth, clearAuth, setHydrated])

  return <>{children}</>
}
