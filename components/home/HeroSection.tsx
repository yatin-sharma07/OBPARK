'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'


export function HeroSection() {
  return (
    <>


      <section
        className="
          relative font-michroma
          m-3 sm:m-4 md:m-6
          rounded-[24px] sm:rounded-[28px] md:rounded-[30px]
          overflow-hidden
          flex-1
          min-h-[400px]
        "
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/HeroSection/obrive-intro.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Optional dark/green overlay so content stays visible */}
        <div className="absolute inset-0 bg-[#074139]/20" />

        {/* Navbar space because navbar is fixed */}
        <div className="relative z-10 h-[72px] sm:h-[78px] md:h-[100px] lg:h-[110px] xl:h-[130px]" />




        {/* Bottom Button Removed */}
      </section>
    </>
  )
}