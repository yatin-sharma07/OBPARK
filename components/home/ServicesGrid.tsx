'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: 0.2
    },
  },
}

export function ServicesGrid() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="
        w-full
        max-w-[100vw]
        overflow-hidden
        px-4
        sm:px-5
        md:px-20
        py-12
        sm:py-14
        md:py-20
        mx-auto
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1700px]
          flex-col
          lg:flex-row
          gap-10
          md:gap-16
          lg:gap-20
          justify-between
          items-center
        "
      >
        {/* LEFT TEXT */}
        <motion.div
          variants={textVariants}
          className="
            flex
            flex-col
            w-full
            max-w-[440px]
            lg:w-[440px]
            min-h-auto
            justify-center
            gap-5
            text-center
            lg:text-left
          "
        >
          <h2
            className={`
              ${microgrammaBold.className}
              font-bold
              text-[22px]
              md:text-[28px]
              leading-[1.2]
              md:leading-[34px]
              text-[#0D4B4D]
              max-w-[440px]
              mx-auto
              lg:mx-0
            `}
          >
            The Future of Parking is<br className="hidden md:block" />
            GPS-Free. Powered by AI<br className="hidden md:block" />
            & Spatial Computing.
          </h2>

          <p
            className="
              text-[12px]
              md:text-[13px]
              leading-[1.6]
              md:leading-[24px]
              text-[#074139]
              font-medium
              max-w-[440px]
              mx-auto
              lg:mx-0
            "
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            Intelligent Indoor Parking Navigation, Smart
            Occupancy Management & Digital Twin Technology.<br/>
            OBPARK transforms conventional parking facilities
            into intelligent digital ecosystems using Spatial
            Computing, Artificial Intelligence, Machine Learning,
            and Augmented Reality. Instead of installing
            thousands of expensive sensors, OBPARK creates a
            digital twin of your parking facility through a one-time
            mapping process, enabling real-time parking guidance,
            occupancy intelligence, booking, navigation, and
            analytics.
          </p>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          variants={cardVariants}
          className="
            w-full
            max-w-[600px]
            lg:max-w-[600px]
            min-h-auto
            lg:min-h-[500px]
            rounded-[30px]
            md:rounded-[40px]
            bg-white
            border
            border-gray-100
            shadow-[0_8px_30px_0_rgba(7,65,57,0.08)]
            p-8
            sm:p-10
            md:p-12
            flex
            flex-col
            justify-between
          "
        >
          <div className="flex flex-col gap-8">
            <h3
              className={`
                ${microgrammaBold.className}
                text-[20px]
                sm:text-[24px]
                md:text-[28px]
                leading-tight
                text-[#167D7F]
              `}
            >
              Trusted by the Future of<br/>
              Smart Infrastructure<br/>
              Designed for
            </h3>

            <div 
              className={`
                flex flex-col
                text-[16px]
                sm:text-[20px]
                md:text-[24px]
                leading-[1.4]
                md:leading-[36px]
                font-light
                bg-gradient-to-r from-[#2A8B87] to-[#B5E2D1] bg-clip-text text-transparent
              `}
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              <span>Shopping Malls, Airports</span>
              <span>Hospitals, Commercial Buildings,</span>
              <span>Residential Communities, Smart</span>
              <span>Cities, Universities, Hotels, IT</span>
              <span>Campuses, Stadiums</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="https://calendly.com/obrive-inc/talk-to-ob-experts"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${microgrammaBold.className}
                px-5 py-2.5
                bg-gradient-to-r from-[#1A817F] to-[#59D0B5] hover:opacity-90
                text-white
                rounded-full
                text-[10px] sm:text-xs
                transition-opacity
                shadow-lg shadow-[#1A817F]/30
              `}
            >
              BOOK NOW
            </a>
            <Link
              href="/invest"
              className={`
                ${microgrammaBold.className}
                px-5 py-2.5
                bg-gradient-to-r from-[#1A817F] to-[#59D0B5] hover:opacity-90
                text-white
                rounded-full
                text-[10px] sm:text-xs
                transition-opacity
                shadow-lg shadow-[#1A817F]/30
              `}
            >
              INVEST NOW
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}