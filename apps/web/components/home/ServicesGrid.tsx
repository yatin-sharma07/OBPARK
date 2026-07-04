'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { microgrammaBold } from '@/lib/fonts'

const SERVICES = [
  {
    image: '/Images/services/pic1.jpeg',
    label: 'AR NAVIGATION',
    href: '/products',
    alt: 'AR navigation service for smart vehicle assistance',
  },
  {
    image: '/Images/services/pic2.jpeg',
    label: 'E-CHALLAN',
    href: '/account/vehicles',
    alt: 'E-Challan checking service for vehicle owners',
  },
  {
    image: '/Images/services/pic3.jpeg',
    label: 'PUC',
    href: '/account/vehicles',
    alt: 'PUC certificate service for vehicles',
  },
  {
    image: '/Images/services/pic4.jpeg',
    label: 'VEHICLE OWNER DETAILS',
    href: '/account/vehicles',
    alt: 'Vehicle owner details verification service',
  },
  {
    image: '/Images/services/pic5.jpeg',
    label: 'PERSONAL LOAN',
    href: '/products',
    alt: 'Personal loan service for vehicle users',
  },
  {
    image: '/Images/services/pic6.jpeg',
    label: 'CAR SERVICES',
    href: '/products',
    alt: 'Quick vehicle services on OBPark',
  },
  {
    image: '/Images/services/pic7.jpeg',
    label: 'EV STATIONS',
    href: '/ev-charging',
    alt: 'EV charging station finder for electric vehicles',
  },
  {
    image: '/Images/services/pic8.jpeg',
    label: 'CAR INSURANCE',
    href: '/products',
    alt: 'Car insurance service for vehicle owners',
  },
  {
    image: '/Images/services/pic9.jpeg',
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
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
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
              text-[20px]
              sm:text-2xl
              md:text-3xl
              xl:text-[38px]
              leading-tight
              text-[#074139]
            `}
          >
            The Future of
            Parking Starts Here
          </h2>

          <p
            className="
              text-[11px]
              sm:text-[13px]
              md:text-[15px]
              xl:text-base
              leading-[1.8]
              text-[#999C9C]
              max-w-[680px]
              mx-auto
              lg:mx-0
            "
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            Every day, millions of drivers waste time
            searching for parking. <br />
            <br />

            The Operating System for Intelligent Mobility
            Spaces Real-time occupancy intelligence, AR-
            powered navigation, and AI-driven insights built
            for malls, airports, cities, and mobility operators
            who expect more from parking. OBPARK isn't a
            parking app. It's a complete mobility ecosystem.
            Every module multiplies the value of the others.
          </p>
        </motion.div>

        {/* RIGHT GRID BOX */}
        <motion.div
          variants={cardContainerVariants}
          className="
            w-full
            max-w-[700px]
            lg:max-w-[700px]
            min-h-auto
            lg:min-h-[680px]
            rounded-[30px]
            md:rounded-[40px]
            bg-white
            border
            border-[#07413980]
            shadow-[0_4px_25px_0_rgba(7,65,57,0.10)]
            p-4
            sm:p-5
            md:p-6
            lg:p-8
          "
        >
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-2
              lg:grid-cols-3
              gap-3
              sm:gap-4
              md:gap-6
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
                    max-w-[160px]
                    min-w-[110px]
                    h-[140px]
                    sm:h-[160px]
                    md:h-[175px]
                    p-2
                    sm:p-3
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    sm:gap-3
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
                        w-[72px]
                        h-[72px]
                        sm:w-[84px]
                        sm:h-[84px]
                        md:w-[96px]
                        md:h-[96px]
                        rounded-full
                        bg-[#F8FAFA]
                        border-[4px]
                        md:border-[5px]
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
                          h-[36px]
                          w-[36px]
                          sm:h-[44px]
                          sm:w-[44px]
                          md:h-[48px]
                          md:w-[48px]
                          object-contain
                        "
                      />
                    </div>
                  </div>

                  <span
                    className={`
                      ${microgrammaBold.className}
                      font-bold
                      text-[6px]
                      sm:text-[7.5px]
                      md:text-[9px]
                      xl:text-[11px]
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