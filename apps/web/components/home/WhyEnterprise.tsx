'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'
import Image from 'next/image'
import { Plus, Minus } from 'lucide-react'

const ACCORDION_DATA = [
  {
    title: 'Lower Infrastructure Costs',
    content: (
      <div className="flex flex-col gap-3 text-[#484848] text-[12px] md:text-[13px] leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
        <p>Eliminate Expensive Hardware Investments.</p>
        <p>Unlike traditional parking management systems that depend on thousands of IoT sensors, cameras, loops, or beacon installations, OBPARK uses AI-powered Spatial Computing to create a digital twin of your parking facility with a one-time mapping process.</p>
        <p>Benefits : No parking sensor installation, No GPS infrastructure required, Minimal maintenance costs, Lower Total Cost of Ownership (TCO), Faster ROI, Software-first architecture</p>
      </div>
    )
  },
  {
    title: 'Faster Deployment',
    content: (
      <div className="flex flex-col gap-3 text-[#484848] text-[12px] md:text-[13px] leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
        <p>Deploy our solution rapidly across multiple facilities without the need for complex hardware installation or disruptive construction work.</p>
      </div>
    )
  },
  {
    title: 'Better Customer Experience',
    content: (
      <div className="flex flex-col gap-3 text-[#484848] text-[12px] md:text-[13px] leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
        <p>Provide a seamless, frustration-free parking experience that guides drivers directly to available spots and streamlines the payment process.</p>
      </div>
    )
  },
  {
    title: 'Higher Parking Revenue',
    content: (
      <div className="flex flex-col gap-3 text-[#484848] text-[12px] md:text-[13px] leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
        <p>Maximize occupancy, eliminate revenue leakage, and optimize pricing dynamically based on real-time demand and facility utilization.</p>
      </div>
    )
  },
  {
    title: 'Scalable Cloud Platform',
    content: (
      <div className="flex flex-col gap-4 text-[#484848] text-sm md:text-[15px] leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
        <p>Manage one or one thousand facilities from a single centralized dashboard, with a cloud-native architecture that scales with your enterprise.</p>
      </div>
    )
  }
]

export function WhyEnterprise() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="w-full max-w-[100vw] overflow-hidden py-16 md:py-24 bg-white">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col lg:flex-row px-4 sm:px-6 lg:px-8 gap-12 lg:gap-16">
        
        {/* LEFT COLUMN */}
        <div className="flex w-full lg:w-1/2 flex-col gap-8 lg:gap-10">
          <div className="flex flex-col gap-2">
            <span 
              className={`text-[#2A7569] text-sm md:text-base tracking-widest uppercase ${microgrammaBold.className}`}
            >
              OBPARK
            </span>
            <h2
              className={`
                ${microgrammaBold.className}
                text-[20px]
                sm:text-[24px]
                md:text-[30px]
                lg:text-[32px]
                leading-[1.2]
                text-[#074139]
              `}
              style={{ fontWeight: 700 }}
            >
              Why Enterprise Customers<br/>Choose OBPARK
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {ACCORDION_DATA.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div 
                  key={index} 
                  className={`flex flex-col rounded-[16px] transition-all duration-300 ${isOpen ? 'bg-transparent py-2' : 'bg-white px-6 py-5 cursor-pointer shadow-sm hover:shadow-md'}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 
                      className={`text-[#074139] text-[14px] md:text-[16px] transition-all ${microgrammaBold.className}`}
                    >
                      {item.title}
                    </h3>
                    {!isOpen && (
                      <Plus className="h-4 w-4 md:h-5 md:w-5 text-[#2A7569] shrink-0" />
                    )}
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex w-full lg:w-1/2 items-center justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative w-full max-w-[460px] lg:max-w-[500px] rounded-[24px] overflow-hidden shadow-2xl"
          >
            <img
              src="/Images/whyObpark.jpg"
              alt="Why Enterprise Customers Choose OBPARK"
              className="w-full h-auto block"
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
