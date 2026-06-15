import type { Metadata } from 'next'
import { Inter, Michroma } from 'next/font/google'
import './globals.css'
import { ConditionalHeader } from '@/components/layout/ConditionalHeader'
import { Providers } from '@/components/Providers'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
const michroma = Michroma({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-michroma'
})

export const metadata: Metadata = {
  title: 'Obpark — Vehicle Commerce',
  description: 'Everything for your vehicle',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={michroma.variable}>
      <body className={inter.className}>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <Providers>
          <ConditionalHeader />
          <main className="min-h-screen">{children}</main>
          
        </Providers>
      </body>
    </html>
  )
}