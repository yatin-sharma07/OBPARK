'use client'
import { useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'

export function ProblemSolution() {
  const [activeLeft, setActiveLeft] = useState(true)
  const [activeRight, setActiveRight] = useState(false)

  return (
    <section className="px-4 md:px-6 py-12 md:py-16 max-w-[1500px] mx-auto">
      <div className="flex flex-col md:flex-row justify-center gap-6">

        <div
          className="flex flex-col w-full md:w-[782px] min-h-[400px] md:h-[757px] p-6 sm:p-8 md:p-10"
          style={{ borderRadius: '20px', background: activeLeft ? 'linear-gradient(to right, #59D0B5, #CAEDE5)' : 'white', border: '1px solid #e5e7eb' }}
        >
          <div className="flex flex-col gap-6 sm:gap-8">
            <button
              onClick={() => setActiveLeft(!activeLeft)}
              className="w-10 h-6 rounded-full relative transition-colors shrink-0"
              style={{ backgroundColor: activeLeft ? '#074139' : '#d1d5db' }}
            >
              <span className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all" style={{ left: activeLeft ? '20px' : '4px' }} />
            </button>
            <h3
              className={`${microgrammaBold.className} text-[40px] sm:text-3xl md:text-[40px] leading-none`}
              style={{ color: '#074139', fontWeight: 700 }}
            >
              The Problem
            </h3>
          </div>
          <p
            className="mt-auto text-[24px] sm:text-base md:text-2xl leading-relaxed md:leading-[40px] pt-6"
            style={{ color: '#484848', fontWeight: 400, letterSpacing: '0.1em', fontFamily: 'var(--font-michroma)' }}
          >
            Vehicle owners in India struggle with scattered services — RC verification, insurance renewals, FASTag recharges, finding genuine parts — all on different platforms with no single source of truth for your vehicle's health.
          </p>
        </div>

        <div
          className="flex flex-col w-full md:w-[782px] min-h-[400px] md:h-[757px] p-6 sm:p-8 md:p-10"
          style={{ borderRadius: '20px', background: activeRight ? 'linear-gradient(to right, #59D0B5, #CAEDE5)' : 'white', border: '1px solid #e5e7eb' }}
        >
          <div className="flex flex-col gap-6 sm:gap-8">
            <button
              onClick={() => setActiveRight(!activeRight)}
              className="w-10 h-6 rounded-full relative transition-colors shrink-0"
              style={{ backgroundColor: activeRight ? '#074139' : '#d1d5db' }}
            >
              <span className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all" style={{ left: activeRight ? '20px' : '4px' }} />
            </button>
            <h3
              className={`${microgrammaBold.className} text-[40px] sm:text-3xl md:text-[40px] leading-none`}
              style={{ color: '#074139', fontWeight: 700 }}
            >
              The Solution
            </h3>
          </div>
          <p
            className="mt-auto text-[24px] sm:text-base md:text-2xl leading-relaxed md:leading-[40px] pt-6"
            style={{ color: '#484848', fontWeight: 400, letterSpacing: '0.1em', fontFamily: 'var(--font-michroma)' }}
          >
            Obpark unifies vehicle services in one platform — FASTag recharge, genuine parts, health scores, compatibility checks, order tracking, and expert support — giving owners a single trusted place to manage their vehicles.
          </p>
        </div>

      </div>
    </section>
  )
}