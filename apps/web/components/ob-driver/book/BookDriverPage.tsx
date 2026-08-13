'use client'

import Image from 'next/image'
import { BookingTabs } from './BookingTabs'

export function BookDriverPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#e5e3e0] overflow-hidden">
      {/* Map background */}
      <div className="absolute inset-0">
        <Image
          src="/Images/ob-driver/map-bg.png"
          alt="Map"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navbar spacing (navbar is fixed/rendered globally) */}
      <div className="relative z-10 h-[90px] sm:h-[100px] md:h-[110px]" />

      {/* Floating booking card */}
      <div className="relative z-10 pl-8 sm:pl-16 md:pl-24 pr-4 sm:pr-8 pb-16">
        <div className="w-full max-w-[510px] bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <BookingTabs />
        </div>
      </div>
    </div>
  )
}