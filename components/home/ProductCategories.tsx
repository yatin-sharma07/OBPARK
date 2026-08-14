'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

const CATEGORIES = [
  {
    title: 'EV (Electric Vehicle) Accessories',
    slug: 'ev-accessories',
    items: [
      { name: '7.5 kW Portable EV Charger', img: '/Images/box1/box1pic1.png' },
      { name: 'Charging Cable holders', img: '/Images/box1/box1pic2.png' },
      { name: 'Portable EV Charging kit', img: '/Images/box1/box1pic3.png' },
      { name: 'EV Screen Protector', img: '/Images/box1/box1pic4.png' },
      { name: 'Tesla-style Accessories', img: '/Images/box1/box1pic5.png' },
      { name: 'Battery Monitoring tools', img: '/Images/box1/box1pic6.png' },
    ],
  },
  {
    title: 'Exterior Accessories',
    slug: 'exterior-accessories',
    items: [
      { name: 'Alloy Wheel Covers', img: '/Images/box2/pic1.png' },
      { name: 'Chrome garnish kits', img: '/Images/box2/pic2.png' },
      { name: 'Car wraps', img: '/Images/box2/pic3.png' },
      { name: 'Spoilers', img: '/Images/box2/pic4.png' },
      { name: 'Window visors', img: '/Images/box2/pic5.png' },
      { name: 'Roof rails', img: '/Images/box2/pic6.png' },
    ],
  },
  {
    title: 'Electronics & Smart Gadgets',
    slug: 'electronics-smart-gadgets',
    items: [
      { name: 'Jump Starters', img: '/Images/box3/pic1.png' },
      { name: 'Tyre inflators', img: '/Images/box3/pic2.png' },
      { name: 'Towing Ropes', img: '/Images/box3/pic3.png' },
      { name: 'Emergency tool kits', img: '/Images/box3/pic4.png' },
      { name: 'First aid kits', img: '/Images/box3/pic5.png' },
      { name: 'Portable battery charger', img: '/Images/box3/pic6.png' },
    ],
  },
  {
    title: 'Emergency & Utility Products',
    slug: 'emergency-utility-products',
    items: [
      { name: 'Dash cams', img: '/Images/box4/pic1.png' },
      { name: 'Android infotainment system', img: '/Images/box4/pic2.png' },
      { name: 'Reverse Parking Camera', img: '/Images/box4/pic3.png' },
      { name: 'Tyre pressure monitoring system', img: '/Images/box4/pic4.png' },
      { name: 'Car GPS tracker', img: '/Images/box4/pic5.png' },
      { name: 'Portable Vacuum Cleaner', img: '/Images/box4/pic6.png' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export function ProductCategories() {
  return (
    <section className="py-16 md:py-24 mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-xs uppercase tracking-[3px] font-bold text-[#308F8A] mb-3">
          Discover Our Collections
        </p>
        <h2
          className={`${microgrammaBold.className} text-3xl sm:text-4xl md:text-[42px] leading-tight text-[#074139] font-bold`}
        >
          Shop by Category
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {CATEGORIES.map((cat) => (
          <motion.div
            key={cat.title}
            variants={cardVariants}
            className="
              bg-white w-full rounded-[8px] sm:rounded-[25px]
              p-5 sm:p-8 md:p-10 border border-[#E9F3F0]
              shadow-[0_12px_24px_rgba(7,65,57,0.02)]
              hover:shadow-[0_20px_40px_rgba(7,65,57,0.06)]
              transition-all duration-500
              flex flex-col justify-between gap-8 group/card
            "
          >
            {/* Header info */}
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#308F8A]">
                  Collection
                </span>
                <h3
                  className="text-xl sm:text-2xl font-bold tracking-tight text-[#074139]"
                  style={{
                    fontFamily: 'var(--font-michroma)',
                  }}
                >
                  {cat.title}
                </h3>
              </div>
            </div>

            {/* Items Grid (all 6 items) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="
                    group/item
                    flex flex-col items-center
                    bg-[#F8FBF9] hover:bg-[#EBF7F4]
                    border border-[#E2EFEB] hover:border-[#308F8A]/30
                    rounded-2xl p-3

                  "
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white mb-2 flex items-center justify-center p-2 shadow-[inset_0_1px_4px_rgba(0,0,0,0.01)]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Item Name */}
                  <span
                    className="
                      w-full text-center text-[10px] sm:text-xs
                      font-medium leading-normal tracking-tight text-[#074139]/90 group-hover/item:text-[#074139]
                      line-clamp-2 min-h-[32px] flex items-center justify-center
                    "
                    style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400 }}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer with animated arrow */}
            <div className="pt-4 border-t border-[#E9F3F0]">
              <Link
                href={`/category/${cat.slug}`}
                className="
                  inline-flex items-center gap-2
                  text-[11px] sm:text-xs font-semibold tracking-wider uppercase
                  text-[#308F8A] hover:text-[#074139]
                  transition-colors duration-300
                "
                style={{
                  fontFamily: 'var(--font-michroma)',
                }}
              >
                Explore Collection
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}