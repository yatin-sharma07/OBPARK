'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'
import Image from 'next/image'
import { Plus, Minus } from 'lucide-react'

const ACCORDION_DATA = [

  {
    title: 'Faster Deployment',
    content: (
      <div className="flex flex-col gap-3 text-[#484848] text-[12px] md:text-[13px] leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
        <p>Go Live in Days, Not Months</p>
        <p>Traditional parking systems often require complex civil work, sensor installations, network cabling, and lengthy commissioning processes. OBPARK simplifies deployment through intelligent spatial mapping, allowing facilities to be onboarded quickly with minimal disruption to daily operations. Our experienced mapping team digitizes your parking environment and creates a live digital twin that is immediately ready for navigation, occupancy management, and analytics.</p>
        <p>Advantages : Rapid implementation, Minimal operational downtime, Easy expansion across multiple sites, Cloud-based updates, No major infrastructure modifications.</p>
      </div>
    )
  },
  {
    title: 'Better Customer Experience',
    content: (
      <div className="flex flex-col gap-3 text-[#484848] text-[12px] md:text-[13px] leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
        <p>Make Parking Stress-Free</p>
        <p>Parking should be the easiest part of a visitor's journey—not the most frustrating. OBPARK provides drivers with real-time parking availability, smart space allocation, AR-powered indoor navigation, and instant vehicle location, helping them reach their destination quickly and effortlessly. A seamless parking experience increases customer satisfaction, encourages repeat visits, and strengthens brand loyalty.</p>
        <p>Customer Benefits : Find available parking faster, Reduce unnecessary driving inside parking lots, Navigate with Augmented Reality, Easily locate parked vehicles, Contactless booking and payment, Reduced waiting times.</p>
      </div>
    )
  },
  {
    title: 'Higher Parking Revenue',
    content: (
      <div className="flex flex-col gap-3 text-[#484848] text-[12px] md:text-[13px] leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
        <p>Maximise Every Parking Space</p>
        <p>Every unused parking space represents lost revenue. OBPARK intelligently manages parking inventory by continuously monitoring occupancy, optimising space allocation, and reducing idle parking capacity. Operators gain complete visibility into parking utilisation, enabling dynamic pricing, premium parking allocation, reservation management, and improved operational efficiency.</p>
        <p>Revenue Opportunities : Increase occupancy rates, Enable premium parking services, Digital reservations, Reduce unauthorised parking, Improve turnover efficiency, Generate data-driven pricing strategies.</p>
      </div>
    )
  },
  {
    title: 'Scalable Cloud Platform',
    content: (
      <div className="flex flex-col gap-3 text-[#484848] text-[12px] md:text-[13px] leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
        <p>Built for Single Locations to Smart Cities</p>
        <p>Whether you operate one commercial building or manage thousands of parking facilities across multiple cities, OBPARK grows with your business. Our cloud-native SaaS platform centralises operations, analytics, occupancy monitoring, user management, and reporting through one unified dashboard. Every facility operates independently while remaining connected within a single enterprise ecosystem.</p>
        <p>Enterprise Capabilities : Multi-location management, Centralised administration, Real-time monitoring, Enterprise reporting, API integrations, Automatic software updates, Highly scalable cloud infrastructure.</p>
      </div>
    )
  }
]

export function WhyEnterprise() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full max-w-[100vw] overflow-hidden py-16 md:py-24 bg-[#F0F9F5]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col lg:flex-row items-start px-4 sm:px-6 lg:px-8 gap-12 lg:gap-16">
        
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
            
            <div className="mt-4">
              <h3 className={`text-[#074139] text-[16px] md:text-[18px] mb-3 ${microgrammaBold.className}`}>
                Lower Infrastructure Costs
              </h3>
              <div className="flex flex-col gap-3 text-[#484848] text-[12px] md:text-[13px] leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
                <p>Eliminate Expensive Hardware Investments.</p>
                <p>Unlike traditional parking management systems that depend on thousands of IoT sensors, cameras, loops, or beacon installations, OBPARK uses AI-powered Spatial Computing to create a digital twin of your parking facility with a one-time mapping process.</p>
                <p>Benefits : No parking sensor installation, No GPS infrastructure required, Minimal maintenance costs, Lower Total Cost of Ownership (TCO), Faster ROI, Software-first architecture</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {ACCORDION_DATA.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div 
                  key={index} 
                  className={`flex flex-col rounded-[16px] bg-white py-5 shadow-sm hover:shadow-md transition-all duration-300 px-6 cursor-pointer`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 
                      className={`text-[#074139] text-[14px] md:text-[16px] transition-all ${microgrammaBold.className}`}
                    >
                      {item.title}
                    </h3>
                    {isOpen ? (
                      <Minus className="h-4 w-4 md:h-5 md:w-5 text-[#2A7569] shrink-0" />
                    ) : (
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
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end self-start">
          <div className="relative w-full max-w-[460px] lg:max-w-[500px] rounded-[24px] overflow-hidden shadow-2xl">
            <img
              src="/Images/whyObpark.jpg"
              alt="Why Enterprise Customers Choose OBPARK"
              className="w-full h-auto block"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
