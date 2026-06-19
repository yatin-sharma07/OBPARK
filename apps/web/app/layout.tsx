import type { Metadata } from 'next'
import { Michroma } from 'next/font/google'
import './globals.css'
// import { ConditionalHeader } from '@/components/layout/ConditionalHeader'
import { Footer } from '@/components/layout/Footer'
import { Providers } from '@/components/Providers'
import Header from '@/components/home/Header'
import Script from 'next/script'

export const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: 'Obpark — Vehicle Commerce',
  description: 'Everything for your vehicle',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${michroma.className} bg-[#CAEDE5]`}>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <Providers>
          {/* <ConditionalHeader /> */}
          <Header categoryName="Default" />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}