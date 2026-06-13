'use client'
import { useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'

export function ProblemSolution() {
  const [activeLeft, setActiveLeft] = useState(true)
  const [activeRight, setActiveRight] = useState(false)

  return (
    <section className="px-4 md:px-6 py-12 md:py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        <div className="flex flex-col  p-8" style={{ borderRadius: '20px', maxWidth: '100%', height: '657px', background: activeLeft ? 'linear-gradient(to right, #59D0B5, #CAEDE5)' : 'white', border: '1px solid #e5e7eb' }}>
          <div className="flex flex-col gap-8">
            <button onClick={() => setActiveLeft(!activeLeft)} className="w-10 h-6 rounded-full relative transition-colors shrink-0" style={{ backgroundColor: activeLeft ? '#074139' : '#d1d5db' }}>
              <span className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all" style={{ left: activeLeft ? '20px' : '4px' }} />
            </button>
            <h3 className={microgrammaBold.className} style={{ color: '#074139', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: '100%' }}>The Problem</h3>
          </div>
          <p className="mt-auto" style={{ color: '#484848', fontWeight: 400, fontSize: '24px', lineHeight: '40px', letterSpacing: '0.1em', fontFamily: 'var(--font-michroma)' }}>Vehicle owners in India struggle with scattered services — RC verification, insurance renewals, FASTag recharges, finding genuine parts — all on different platforms with no single source of truth for your vehicle's health.</p>
        </div>

        <div className="flex flex-col justify-between p-8" style={{ borderRadius: '20px', maxWidth: '100%', height: '657px', background: activeRight ? 'linear-gradient(to right, #59D0B5, #CAEDE5)' : 'white', border: '1px solid #e5e7eb' }}>
          <div className="flex flex-col gap-8">
            <button onClick={() => setActiveRight(!activeRight)} className="w-10 h-6 rounded-full relative transition-colors shrink-0" style={{ backgroundColor: activeRight ? '#074139' : '#d1d5db' }}>
              <span className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all" style={{ left: activeRight ? '20px' : '4px' }} />
            </button>
            <h3 className={microgrammaBold.className} style={{ color: '#074139', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: '100%' }}>The Solution</h3>
          </div>
          <p className="mt-auto" style={{ color: '#484848', fontWeight: 400, fontSize: '24px', lineHeight: '40px', letterSpacing: '0.1em', fontFamily: 'var(--font-michroma)' }}>Obpark brings everything together — VRN-linked cart, vehicle health scores, FASTag recharge, genuine parts with compatibility checks, real-time order tracking, and expert support, all in one platform built specifically for Indian vehicle owners across the country.</p>
        </div>

      </div>
    </section>
  )
}