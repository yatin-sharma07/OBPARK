'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/layout/Footer'

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export function ConditionalLayout({
  children,
}: ConditionalLayoutProps) {
  const pathname = usePathname()

  const isAdmin = pathname.startsWith('/admin')

  return (
    <>
      {!isAdmin && <Navbar />}

      <main className="min-h-screen w-full max-w-[100vw]">
        {children}
      </main>

      {!isAdmin && <Footer />}
    </>
  )
}