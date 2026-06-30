'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

const FEATURES = [
  {
    title: 'Premium Malls',
    description:
      'Premium Mall, Delhi 2500 spaces | Premium Shopping Destination | 6-Month Implementation.',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    title: 'The Challenges',
    description:
      'Customers complained about 20+ minute parking waits. 40% of visitors didn’t enter due to parking friction. Manual ticketing created bottlenecks. No data on peak hours.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'The Solutions',
    description:
      'Real-time occupancy management, AR navigation, dynamic pricing, vehicle services integration, automated gates, analytics dashboard.',
    image:
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
  },
]

export function FeaturesAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      className="
        w-full
        max-w-[100vw]
        overflow-hidden
        bg-[#EAF6F2]

        px-4
        sm:px-5
        md:px-8

        py-4
        sm:py-4
        md:py-3
        lg:py-4
        xl:py-5
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="
          mx-auto
          flex
          w-full
          max-w-[1180px]
          flex-col
          lg:flex-row
          items-start
          justify-between

          gap-7
          md:gap-8
          lg:gap-10

          min-h-auto
          lg:min-h-[520px]
        "
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          viewport={{ once: true }}
          className="
            relative
            flex
            w-full
            flex-col
            justify-start
            items-start
            gap-4
            md:gap-5

            lg:sticky
            lg:top-3
            lg:max-w-[480px]

            pt-0
          "
        >
          <div className="flex items-center gap-3">
            <p
              className="
                text-xs
                sm:text-sm
                md:text-base
                leading-none
                text-[#4B545A]
              "
              style={{
                fontFamily: 'var(--font-michroma)',
                fontWeight: 400,
              }}
            >
              Customer Success
            </p>
          </div>

          <h2
            className={`
              ${microgrammaBold.className}
              text-[24px]
              sm:text-[30px]
              md:text-[36px]
              lg:text-[38px]
              xl:text-[44px]
              leading-[1.12]
              text-[#074139]
            `}
            style={{ fontWeight: 700 }}
          >
            Simple Solutions,<br />Real Results.
          </h2>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.16,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          viewport={{ once: true }}
          className="
            flex
            w-full
            flex-1
            flex-col

            gap-3
            sm:gap-3.5
            md:gap-4

            lg:max-w-[560px]
            xl:max-w-[610px]
          "
        >
          {FEATURES.map((feature, index) => {
            const isOpen = open === index

            return (
              <motion.div
                key={feature.title}
                layout
                onClick={() => setOpen(isOpen ? null : index)}
                className="
                  group
                  relative
                  w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-[12px]
                  sm:rounded-[14px]
                  bg-white
                "
                animate={{
                  height: isOpen ? 250 : 125,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  style={{
                    backgroundImage: `url("${feature.image}")`,
                  }}
                />

                <div className="absolute inset-0 bg-black/5" />

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    w-full
                    flex-col
                    justify-center

                    px-3
                    sm:px-3.5
                    md:px-4

                    py-3
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3

                      rounded-[10px]
                      sm:rounded-[12px]

                      px-3
                      py-2.5

                      sm:px-3.5
                      sm:py-3

                      md:px-4
                      md:py-6

                      backdrop-blur-[2px]
                    "
                    style={{
                      backgroundColor: 'rgba(235, 243, 246, 0.72)',
                    }}
                  >
                    <p
                      className="
                        min-w-0
                        flex-1
                        truncate

                        text-[11px]
                        sm:text-xs
                        md:text-sm
                        lg:text-base
                        xl:text-[18px]

                        leading-none
                        text-black
                      "
                      style={{
                        fontFamily: 'var(--font-michroma)',
                        fontWeight: 500,
                      }}
                    >
                      {feature.title}
                    </p>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                      }}
                      className="
                        flex
                        h-5
                        w-5
                        sm:h-6
                        sm:w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full

                        text-sm
                      "
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        color: '#074139',
                        fontWeight: 400,
                      }}
                    >
                      {isOpen ? '−' : '+'}
                    </motion.span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -8 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -8 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 px-1">
                          <p
                            className="
                              rounded-md
                              p-2

                              text-[9px]
                              sm:text-[10px]
                              md:text-[14px]

                              leading-relaxed
                              text-black
                            "
                            style={{
                              fontFamily: 'var(--font-michroma)',
                              backgroundColor: 'rgba(255,255,255,0.72)',
                            }}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}