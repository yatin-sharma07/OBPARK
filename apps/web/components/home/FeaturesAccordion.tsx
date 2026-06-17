'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

const FEATURES = [
  {
    title: 'RC Verified & Health Score',
    description:
      'Every vehicle on Obpark is verified through the government Vahan database. Get a real-time health score out of 100 based on insurance, PUCC, RC fitness, challans and FASTag status.',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    title: 'Genuine Parts with Compatibility Check',
    description:
      'Browse thousands of car accessories and parts. Every product is checked against your vehicle make, model and year before you add to cart — no wrong fitment ever.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'FASTag Recharge & Smart Alerts',
    description:
      'Recharge your FASTag in seconds. Set low balance alerts and never get stopped at a toll again. Supports all major banks — HDFC, ICICI, SBI, Axis and more.',
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
        sm:px-6
        md:px-[50px]

        py-16
        sm:py-20
        md:py-28
        lg:py-32
        xl:py-36
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
          max-w-[1500px]
          flex-col
          lg:flex-row
          items-start
          justify-between

          gap-10
          md:gap-12
          lg:gap-16

          min-h-auto
          lg:min-h-[760px]
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
            gap-6
            md:gap-8

            lg:sticky
            lg:top-28
            lg:max-w-[634px]

            pt-0
            
          "
        >
          <div className="flex items-center gap-3">


            <p
              className="
                text-base
                sm:text-lg
                md:text-xl
                leading-none
                text-[#4B545A]
              "
              style={{
                fontFamily: 'var(--font-michroma)',
                fontWeight: 400,
              }}
            >
              What&apos;s our promise
            </p>
          </div>

          <h2
            className={`
              ${microgrammaBold.className}
              text-[30px]
              sm:text-4xl
              md:text-5xl
              lg:text-[48px]
              xl:text-[56px]
              leading-[1.12]
              text-[#074139]
            `}
            style={{ fontWeight: 700 }}
          >
            Our platform is no-nonsense
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

            gap-5
            sm:gap-6
            md:gap-7

            lg:max-w-[760px]
            xl:max-w-[820px]
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
                  rounded-[18px]
                  sm:rounded-[20px]
                  bg-white
                "
                animate={{
                  height: isOpen ? 330 : 214,
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

                    px-4
                    sm:px-6
                    md:px-8

                    py-5
                    sm:py-6
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3

                      rounded-[16px]
                      sm:rounded-[18px]

                      px-4
                      py-4

                      sm:px-6
                      sm:py-5

                      md:px-7
                      md:py-13


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

                        text-sm
                        sm:text-base
                        md:text-xl
                        lg:text-[22px]
                        xl:text-[24px]

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
                        h-8
                        w-8
                        sm:h-9
                        sm:w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full

                        text-xl
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
                        <div className="mt-4 px-1 sm:px-2">
                          <p
                            className="
                              rounded-lg
                              p-3
                              sm:p-4

                              text-xs
                              sm:text-sm
                              md:text-base

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