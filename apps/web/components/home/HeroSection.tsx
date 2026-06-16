'use client'
import Link from 'next/link'
import { microgrammaBold } from '@/lib/fonts'
import { useEffect, useState } from 'react'

export function HeroSection() {
   const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <section
      className="relative font-michroma m-3 md:m-6 rounded-[28px] md:rounded-[58px]"
      style={{
        minHeight: 'clamp(500px, 70vw, 1117px)',
        background:
          'linear-gradient(135deg, #c8f5eb 0%, #a8eddc 30%, #6dd4bc 60%, #2a9d8a 100%)',
      }}
    >
      <div className="relative z-30 p-0">
       <nav
  className="sticky top-0 z-50 flex items-center justify-between w-full px-4 sm:px-6 md:px-8 h-[80px] md:h-[120px] xl:h-[160px] rounded-[30px] md:rounded-[60px] border border-white/25"
  style={{
    background:
      'linear-gradient(to bottom, #59D0B5 0%, #CAEDE5 100%)',
  }}
        >
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/about"
              className="text-[#074139] text-base xl:text-lg font-normal"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              About
            </Link>

            <Link
              href="/products"
              className="text-[#074139] text-base xl:text-lg font-normal"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              Shop
            </Link>

            <Link
              href="#app"
              className="text-[#074139] text-base xl:text-lg font-normal"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              App Download
            </Link>
          </div>

          <span
            className={`${microgrammaBold.className} absolute left-1/2 -translate-x-1/2 text-[#074139] tracking-[0.12em] whitespace-nowrap text-[clamp(16px,4vw,40px)]`}
          >
            OBPARK
            <sup
              className="text-[0.45em] align-super ml-0.5"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              ©
            </sup>
          </span>

          <Link
            href="/register"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap text-sm font-normal text-[#A2F1DF] bg-[#074139]"
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            SCHEDULE CALL ↗
          </Link>

          <Link
            href="/register"
            className="md:hidden flex items-center gap-1 px-4 py-2 rounded-full text-[11px] text-[#A2F1DF] bg-[#074139]"
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            START ↗
          </Link>
        </nav>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[140%] h-[100px] -left-[20%] top-[44%] -rotate-[18deg] origin-left"
          style={{
            background:
              'linear-gradient(180deg, rgba(180,180,180,0.1) 0%, rgba(220,220,220,0.22) 40%, rgba(180,180,180,0.1) 100%)',
          }}
        />

        <div
          className="absolute w-[140%] h-[2px] -left-[20%] top-[52%] -rotate-[18deg] origin-left"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
          }}
        />
      </div>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 'clamp(60px, 8vw, 90px)',
          height: 'clamp(60px, 8vw, 90px)',
          background:
            'radial-gradient(circle at 35% 30%, #5ecfba, #074139 70%)',
          boxShadow:
            '0 12px 40px rgba(7,65,57,0.5), inset 0 -4px 8px rgba(0,0,0,0.3)',
        }}
      />

      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2">
        <Link
          href="/products"
          className="flex items-center gap-2 px-4 md:px-7 py-2 md:py-2.5 text-[11px] md:text-sm text-[#074139] bg-[#CAEDE5] border border-[rgba(7,65,57,0.35)] backdrop-blur-sm whitespace-nowrap"
          style={{ fontFamily: 'var(--font-michroma)' }}
        >
          DOWNLOAD APP <span className="text-lg font-bold">↗</span>
        </Link>
      </div>
    </section>
  )
}