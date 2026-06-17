'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { microgrammaBold } from '@/lib/fonts'

const SERVICES = [
  {
    image: '/images/services/pic1.jpeg',
    label: 'AR NAVIGATION',
    href: '/products',
    alt: 'AR navigation service for smart vehicle assistance',
  },
  {
    image: '/images/services/pic2.jpeg',
    label: 'E-CHALLAN',
    href: '/account/vehicles',
    alt: 'E-Challan checking service for vehicle owners',
  },
  {
    image: '/images/services/pic3.jpeg',
    label: 'PUC',
    href: '/account/vehicles',
    alt: 'PUC certificate service for vehicles',
  },
  {
    image: '/images/services/pic4.jpeg',
    label: 'VEHICLE OWNER DETAILS',
    href: '/account/vehicles',
    alt: 'Vehicle owner details verification service',
  },
  {
    image: '/images/services/pic5.jpeg',
    label: 'PERSONAL LOAN',
    href: '/products',
    alt: 'Personal loan service for vehicle users',
  },
  {
    image: '/images/services/pic6.jpeg',
    label: 'QUICK SERVICES',
    href: '/products',
    alt: 'Quick vehicle services on OBPark',
  },
  {
    image: '/images/services/pic7.jpeg',
    label: 'EV STATIONS',
    href: '/products?category=accessories',
    alt: 'EV charging station finder for electric vehicles',
  },
  {
    image: '/images/services/pic8.jpeg',
    label: 'CAR INSURANCE',
    href: '/products',
    alt: 'Car insurance service for vehicle owners',
  },
  {
    image: '/images/services/pic9.jpeg',
    label: 'CAR LOAN',
    href: '/products',
    alt: 'Car loan service for vehicle buyers',
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
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
        md:px-6
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
          md:gap-12
          justify-between
          items-center
          lg:items-start
        "
      >
        {/* LEFT TEXT */}
        <motion.div
          variants={textVariants}
          className="
            flex
            flex-col
            w-full
            max-w-[736px]
            lg:w-[736px]
            min-h-auto
            lg:h-[583px]
            justify-center
            gap-5
            md:gap-6
            mt-0
            lg:mt-12
            text-center
            lg:text-left
          "
        >
          <h2
            className={`
              ${microgrammaBold.className}
              font-bold
              text-[28px]
              sm:text-4xl
              md:text-5xl
              xl:text-[56px]
              leading-tight
              text-[#074139]
            `}
          >
            Obpark is your complete vehicle companion
          </h2>

          <p
            className="
              text-sm
              sm:text-base
              md:text-xl
              xl:text-2xl
              leading-[1.8]
              text-[#999C9C]
              max-w-[680px]
              mx-auto
              lg:mx-0
            "
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            Everything you need for your vehicle in one place — from documents
            to accessories, services to finance, designed to simplify every
            aspect of your vehicle ownership journey.
          </p>
        </motion.div>

        {/* RIGHT GRID BOX */}
        <motion.div
          variants={cardContainerVariants}
          className="
            w-full
            max-w-[814px]
            lg:max-w-[814px]
            min-h-auto
            lg:min-h-[800px]
            rounded-[30px]
            md:rounded-[60px]
            bg-white
            border
            border-[#07413980]
            shadow-[0_4px_25px_0_rgba(7,65,57,0.10)]
            p-4
            sm:p-5
            md:p-6
            lg:p-10
          "
        >
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
              sm:gap-5
              md:gap-8
              justify-items-center
            "
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.label}
                variants={cardVariants}
                className="w-full flex justify-center"
              >
                <Link
                  href={service.href}
                  aria-label={`Open ${service.label.toLowerCase()} service`}
                  className="
                    w-full
                    max-w-[200px]
                    min-w-[130px]
                    h-[170px]
                    sm:h-[190px]
                    md:h-[211px]
                    p-3
                    sm:p-4
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    sm:gap-4
                    rounded-[8px]
                    border
                    border-[rgba(7,65,57,0.8)]
                    transition-all
                    duration-300
                    hover:bg-[#f0fdf9]
                    hover:scale-105
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#59D0B5]
                    focus:ring-offset-2
                  "
                >
                  <div className="flex items-center justify-center">
                    <div
                      className="
                        relative
                        w-[88px]
                        h-[88px]
                        sm:w-[104px]
                        sm:h-[104px]
                        md:w-[120px]
                        md:h-[120px]
                        rounded-full
                        bg-[#F8FAFA]
                        border-[5px]
                        md:border-[6px]
                        border-[#59D0B5]
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                      "
                    >
                      <Image
                        src={service.image}
                        alt={service.alt}
                        title={service.label}
                        width={70}
                        height={70}
                        sizes="(max-width: 640px) 50px, (max-width: 768px) 60px, 70px"
                        loading="lazy"
                        className="
                          h-[48px]
                          w-[48px]
                          sm:h-[56px]
                          sm:w-[56px]
                          md:h-[60px]
                          md:w-[60px]
                          object-contain
                        "
                      />
                    </div>
                  </div>

                  <span
                    className={`
                      ${microgrammaBold.className}
                      font-bold
                      text-[8px]
                      sm:text-[9px]
                      md:text-[12px]
                      xl:text-[16px]
                      leading-tight
                      text-[#074139]
                      text-center
                      uppercase
                    `}
                  >
                    {service.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}