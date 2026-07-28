'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'
import {
  Sparkles,
  Shield,
  Car,
  Wrench,
  Key,
  Droplets,
  Disc,
  ArrowUpCircle,
  Armchair,
} from 'lucide-react'

const marketSlides = [
  // SLIDE 1
  [
    {
      badge: 'Car Essentials',
      image: '/Images/obpark-market/Car Essentials.jpg',
      icon: Droplets,
      text: 'Must have car care essentials',
    },
    {
      badge: 'Car Interiors',
      image: '/Images/obpark-market/Car Interior.jpg',
      icon: Armchair,
      text: 'Comfort, Style & Protection',
    },
    {
      badge: 'Car Exterior',
      image: '/Images/obpark-market/Car Exterior.jpg',
      icon: Car,
      text: 'Shine, Protect & Impress',
    },
  ],
  // SLIDE 2
  [
    {
      badge: 'Car Cleaning',
      image: '/Images/obpark-market/CAr Cleaning.jpg',
      icon: Sparkles,
      text: 'Keep Your car spotless',
    },
    {
      badge: 'Car Wash',
      image: '/Images/obpark-market/Car Wash.jpg',
      icon: Droplets,
      text: 'Professional car wash services',
    },
    {
      badge: 'Car Repairs',
      image: '/Images/obpark-market/Car repair.jpg',
      icon: Wrench,
      text: 'Expert care for every issue',
    },
  ],
  // SLIDE 3
  [
    {
      badge: 'Car Purchase',
      image: '/Images/obpark-market/Car Purchase.jpg',
      icon: Key,
      text: 'Buy your perfect car',
    },
    {
      badge: 'Car Polishing',
      image: '/Images/obpark-market/Car polishing.jpg',
      icon: Disc,
      text: 'Restore shine, like new',
    },
    {
      badge: 'Car Lifting',
      image: '/Images/obpark-market/Car Lifting.jpg',
      icon: ArrowUpCircle,
      text: 'Safe lifting for better service',
    },
  ],
]

export function ObparkMarket() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto slide every 6 seconds unless hovered
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % marketSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section className="w-full overflow-hidden py-16 md:py-24 bg-[#F0F9F5]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col px-4 sm:px-6 lg:px-8 gap-10 sm:gap-12">
        
        {/* HEADER */}
        <div className="text-center flex flex-col gap-2 items-center">
          <span 
            className="text-[14px] sm:text-[16px] text-[#074139] tracking-wider uppercase font-medium"
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            Obpark Market
          </span>
          <h2
            className={`
              ${microgrammaBold.className}
              text-[26px]
              sm:text-[34px]
              md:text-[42px]
              text-[#074139]
              tracking-wide
            `}
          >
            Everything Your Car Needs.
          </h2>
        </div>

        {/* CARDS GRID SLIDER */}
        <div 
          className="relative w-full min-h-[520px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full"
            >
              {marketSlides[currentSlide].map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={idx}
                    className="relative group w-full h-[460px] sm:h-[500px] md:h-[540px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
                  >
                    {/* BACKGROUND IMAGE */}
                    <img
                      src={item.image}
                      alt={item.badge}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src =
                          'https://placehold.co/600x800/2A8B87/FFFFFF?text=' +
                          encodeURIComponent(item.badge)
                      }}
                    />

                    {/* DARK GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

                    {/* TOP BADGE */}
                    <div className="absolute top-6 right-6 flex justify-end z-10">
                      <div className="bg-white/25 backdrop-blur-md border border-white/40 shadow-md rounded-[20px] px-5 py-1.5 sm:px-6 sm:py-2">
                        <span
                          className={`${microgrammaBold.className} text-white text-[12px] sm:text-[14px] tracking-wide`}
                        >
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* BOTTOM CONTENT */}
                    <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center gap-3.5">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center shrink-0 shadow-sm">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <p
                        className="text-white text-[12px] sm:text-[14px] leading-snug font-medium drop-shadow-sm"
                        style={{ fontFamily: 'var(--font-michroma)' }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex items-center justify-center gap-2 mt-2">
          {marketSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'w-7 bg-[#074139]'
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
