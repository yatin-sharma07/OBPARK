'use client'
import { usePathname } from 'next/navigation'

export function ConditionalHeader() {
  const pathname = usePathname()
  if (pathname === '/' || pathname === '/about' || pathname === '/e-challan') return null
  return null
}