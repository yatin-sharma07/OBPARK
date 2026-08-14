'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/layout/Footer'

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export function ConditionalLayout({
  children,
}: ConditionalLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full max-w-[100vw]">
        {children}
      </main>

      <Footer />
    </>
  )
}