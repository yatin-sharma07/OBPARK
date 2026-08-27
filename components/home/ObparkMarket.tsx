'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'
import Link from 'next/link'
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

type MarketSlideItem = {
  badge: string
  image: string
  icon: typeof Sparkles
  text: string
  link?: string
}



const marketSlides: MarketSlideItem[][] = [
  // 1. Car Accessories - car-accessories											
  // 2. Car Care detailing - car-care-detailing												
  // 3. Electronics smart gagets - electronics-and-smart-gadgets												
  // 4. Emergency & Safety - emergency-and-safety													
  // 5. Travel & Road Safety - travel-and-road-safety												
  // 6. Family & Pet Care Products - family-and-pet-care-products
  // 7. EV PRODUCTS - ev-products
  // 8. Bike Shop - bike-shop													
  // 9. Guest Gifting - guest-gifting
  [
    {
      badge: 'Car Accessories',
      image: '/Images/obpark-market/car-accessories.png',
      icon: Droplets,
      text: 'Must-have car accessories & add-ons',
      link: '/shop/car-accessories',
    },
    {
      badge: 'Car Care Detailing',
      image: '/Images/obpark-market/car-care-detailing.png',
      icon: Armchair,
      text: 'Professional detailing & care products',
      link: '/shop/car-care-detailing',
    },
    {
      badge: 'Electronics & Smart Gadgets',
      image: '/Images/obpark-market/electronics-and-smart-gadgets.png',
      icon: Car,
      text: 'Smart gadgets for smarter driving',
      link: '/shop/electronics-and-smart-gadgets',
    },
  ],
  // SLIDE 2
  [
    {
      badge: 'Emergency & Safety',
      image: '/Images/obpark-market/emergency-and-safety.png',
      icon: Sparkles,
      text: 'Stay prepared for any emergency',
      link: '/shop/emergency-and-safety',
    },
    {
      badge: 'Travel & Road Safety',
      image: '/Images/obpark-market/travel-and-road-safety.png',
      icon: Droplets,
      text: 'Travel safe, drive confident',
      link: '/shop/travel-and-road-safety',
    },
    {
      badge: 'Family & Pet Care Products',
      image: '/Images/obpark-market/family-and-pet-care-products.png',
      icon: Wrench,
      text: 'Comfort essentials for family & pets',
      link: '/shop/family-and-pet-care-products',
    },
  ],
  // SLIDE 3
  [
    {
      badge: 'EV Products',
      image: '/Images/obpark-market/ev-products.png',
      icon: Key,
      text: 'Accessories for electric vehicles',
      link: '/shop/ev-products',
    },
    {
      badge: 'Bike Shop',
      image: '/Images/obpark-market/bike-shop.png',
      icon: Disc,
      text: 'Gear up for every ride',
      link: '/shop/bike-shop',
    },
    {
      badge: 'Guest Gifting',
      image: '/Images/obpark-market/guest-gifting.png',
      icon: ArrowUpCircle,
      text: 'Thoughtful gifts for every occasion',
      link: '/shop/guest-gifting',
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

                const cardContent = (
                  <div className="relative group w-full h-[460px] sm:h-[500px] md:h-[540px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
                    {/* BACKGROUND IMAGE */}
                    <img
                      src={item.image}
                      alt={item.badge}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        ; (e.target as HTMLImageElement).src =
                          "https://placehold.co/600x800/2A8B87/FFFFFF?text=" +
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
                        style={{ fontFamily: "var(--font-michroma)" }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                )

                return item.link ? (
                  <Link key={idx} href={item.link}>
                    {cardContent}
                  </Link>
                ) : (
                  <div key={idx}>
                    {cardContent}
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
              className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
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
