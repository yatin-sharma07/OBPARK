'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'


export function HeroSection() {
  return (
    <>


      <section
        className="
    relative font-michroma
    mx-3 mt-3 mb-10
    sm:mx-4 sm:mt-4
    md:m-6
    

    rounded-[24px]
    sm:rounded-[28px]
    md:rounded-[30px]

    overflow-hidden

    min-h-[680px]
    sm:min-h-[780px]
    md:min-h-[calc(100vh-48px)]

    h-auto
    md:h-[calc(100vh-48px)]


    max-h-none
    md:max-h-[980px]
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

        {/* Diagonal Light Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              absolute
              w-[160%] sm:w-[150%] lg:w-[140%]
              h-[60px] sm:h-[80px] md:h-[100px]
              -left-[30%] sm:-left-[25%] lg:-left-[20%]
              top-[43%] md:top-[44%]
              -rotate-[22deg] sm:-rotate-[20deg] md:-rotate-[18deg]
              origin-left
            "
            style={{
              background:
                'linear-gradient(180deg, rgba(180,180,180,0.1) 0%, rgba(220,220,220,0.22) 40%, rgba(180,180,180,0.1) 100%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="
              absolute
              w-[160%] sm:w-[150%] lg:w-[140%]
              h-[2px]
              -left-[30%] sm:-left-[25%] lg:-left-[20%]
              top-[51%] md:top-[52%]
              -rotate-[22deg] sm:-rotate-[20deg] md:-rotate-[18deg]
              origin-left
            "
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
            }}
          />
        </div>


        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="
            absolute z-20
            bottom-5 sm:bottom-6 md:bottom-10
            left-1/2 -translate-x-1/2
          "
        >
          <Link
            href="/products"
            className="
              flex items-center gap-2
              px-4 sm:px-5 md:px-7
              py-2 md:py-2.5
              text-[10px] sm:text-[11px] md:text-sm
              text-[#074139]
              bg-[#CAEDE5]
              border border-[rgba(7,65,57,0.35)]
              backdrop-blur-sm whitespace-nowrap
            "
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            DOWNLOAD APP <span className="text-base md:text-lg font-bold">↗</span>
          </Link>
        </motion.div>
      </section>
    </>
  )
}