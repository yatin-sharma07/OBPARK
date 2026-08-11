'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'
import { Plus, Minus } from 'lucide-react'

const serviceCategories = [
  {
    title: 'B2B (Industries)',
    content:
      'Helping enterprises modernise parking infrastructure while improving operational efficiency and customer satisfaction.\n\nIndustries : Shopping Malls, Airports, Hospitals, Hotels, Corporate Offices, IT Parks, Commercial Buildings, Residential Communities, Universities, Stadiums, Industrial Parks, Mixed-Use Developments',
  },
  {
    title: 'Enterprise Benefits',
    content:
      'Reduce infrastructure and maintenance costs, Increase parking occupancy and revenue, Real-time occupancy monitoring, AI-powered parking allocation, GPS-free indoor navigation, Centralised multi-location management, Digital Twin visualisation, Enterprise analytics and reporting, Cloud-based SaaS platform, Seamless integration with existing systems, Scalable across single or multiple facilities, Improved customer satisfaction and retention',
  },
  {
    title: 'B2C (Business to Consumer)',
    content:
      'Creating a smarter, faster, and more convenient parking experience for everyday drivers.\n\nConsumer Benefits: Find available parking spaces instantly, Reserve parking before arrival, Navigate indoors using Augmented Reality, Locate parked vehicles with ease, Contactless parking entry and exit, Secure digital payments, Save time and fuel, Reduce driving stress, Access EV charging stations, Book car wash and detailing services, Purchase vehicle accessories, Receive exclusive offers and loyalty rewards, Manage all vehicle services from one platform',
  },
  {
    title: 'G2C (Government to Citizen)',
    content:
      'Supporting governments and municipalities in building smarter, safer, and more sustainable urban mobility infrastructure.\n\nGovernment Benefits : Smart City-ready parking management, Reduce urban traffic congestion, Improve public parking accessibility, Optimize municipal parking utilization, Support sustainable transportation initiatives, Real-time city-wide parking analytics, Digital parking permits, Event and public parking management, Improved citizen services, Lower operational costs, Data-driven urban planning, Better traffic flow and mobility insights',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const renderCard = (item: typeof serviceCategories[0], index: number) => {
    const isOpen = openIndex === index

    return (
      <div 
        key={index} 
        className={`flex flex-col rounded-[20px] transition-all duration-300 overflow-hidden ${
          isOpen ? 'bg-white shadow-md' : 'shadow-sm'
        }`}
        style={isOpen ? {} : { background: 'linear-gradient(135deg, #59D0B5 0%, #1C8182 100%)' }}
      >
        <button
          type="button"
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className={`w-full text-left px-6 py-6 sm:px-8 sm:py-8 flex items-center justify-between transition-colors ${
            isOpen ? 'text-[#0C403A]' : 'text-white'
          }`}
        >
          <span
            className="text-[14px] sm:text-[15px] font-semibold tracking-wide"
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            {item.title}
          </span>
          {isOpen ? (
            <Minus className="w-5 h-5 shrink-0 text-[#0C403A]" />
          ) : (
            <Plus className="w-5 h-5 shrink-0 text-white" />
          )}
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="px-6 sm:px-8 pb-6 sm:pb-8"
            >
              <p
                className="text-[#0C403A] text-[13px] sm:text-[14px] leading-[1.7] whitespace-pre-line font-medium"
                style={{ fontFamily: 'var(--font-michroma)' }}
              >
                {item.content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <section className="w-full bg-white">
      <div className="w-full rounded-[28px] bg-[#F0F9F5] pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-28 px-6 sm:px-10 md:px-12 border border-[#E1EBE8]">
        <div className="mx-auto w-full max-w-[1300px]">
        {/* SUBTITLE & TITLE */}
        <p
          className="mb-3 text-[13px] sm:text-[14px] text-[#074139] tracking-wider uppercase font-semibold"
          style={{ fontFamily: 'var(--font-michroma)' }}
        >
          Frequently Asked Questions (FAQ)
        </p>

        <h2
          className={`
            ${microgrammaBold.className}
            mb-10
            text-2xl
            sm:text-3xl
            md:text-[36px]
            text-[#074139]
            font-bold
          `}
        >
          Who we Serve
        </h2>

        {/* 2X2 ACCORDION EXPLICIT COLUMNS */}
        <div className="flex flex-col md:flex-row gap-5 sm:gap-6 w-full items-start">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-5 sm:gap-6 w-full md:w-1/2">
            {serviceCategories.map((item, index) => {
              if (index % 2 !== 0) return null
              return renderCard(item, index)
            })}
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-5 sm:gap-6 w-full md:w-1/2">
            {serviceCategories.map((item, index) => {
              if (index % 2 === 0) return null
              return renderCard(item, index)
            })}
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}