'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

const FEATURES = [
  {
    title: 'Our Mission',
    description:
      "Our mission at Nosu is deeply personal. We believe in the power of nature and science to support long-term well-being and healthy aging. That's why we created Nosu, to offer natural, evidence-based solutions that empower people to take control of their health, build sustainable habits, and feel better for the long run.",
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    title: 'Our Vision',
    description:
      'We envision a world where metabolic health is accessible, understandable, and achievable for everyone. By combining behavioral science with natural solutions, we aim to reshape how people relate to food, energy, and long-term wellness.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'Our Trusted Partners',
    description:
      'We work with trusted scientific, wellness, and product partners who share our commitment to quality, transparency, and measurable impact. Every collaboration is chosen to help people make confident decisions about their long-term health.',
    image:
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
  },
]

export default function Story() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        sm:px-6
        pt-0
        pb-4
        sm:pb-6
        md:pb-8
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          lg:grid-cols-12
          items-start
          gap-10
          md:gap-12
          lg:gap-16
        "
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            relative
            flex
            w-full
            flex-col
            lg:sticky
            lg:top-28
            lg:col-span-6
          "
        >
          <p className="text-xs uppercase tracking-wide text-[#000000] sm:text-sm">
            About Obpark
          </p>

          <h2
            className={`
              ${microgrammaBold.className}
              mt-2
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[48px]
              xl:text-[56px]
              leading-[1.12]
              text-[#074139]
            `}
          >
            Our Story
          </h2>

          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#4B545A] sm:mt-6">
            We founded Nosu with a clear vision: to improve metabolic health
            through behavior change, not just symptom control. Unlike typical
            glucose products, Nosu&apos;s Sweet Shield works by temporarily
            dulling the sweet taste receptors, helping reduce the appeal of
            sugary foods. This subtle shift supports more balanced energy,
            fewer cravings, and more consistent glucose levels, without relying
            on willpower alone.
          </p>

          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#4B545A]">
            When we developed Sweet Shield, we looked to nature&apos;s most
            trusted traditions, drawing from Chinese and Ayurvedic practices,
            and paired them with modern scientific research. This resulted in
            an all-natural line-up of functional ingredients curated by their
            ability to reduce sugar intake, support metabolic health, and
            promote longevity. It&apos;s a simple, forward-thinking solution
            for anyone looking to take control of their well-being, today and
            for the long term.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            flex
            w-full
            flex-col
            gap-5
            sm:gap-6
            md:gap-7
            lg:col-span-6
            lg:pt-[106px]
            xl:pt-[115px]
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
                  rounded-[20px]
                  bg-white
                "
                animate={{
                  height: isOpen ? 350 : 140,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
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
                    backgroundImage: `url(${feature.image})`,
                  }}
                />

                <div className="absolute inset-0 bg-black/10" />

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
                    py-4
                    sm:py-5
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                      rounded-[14px]
                      px-4
                      py-3
                      sm:px-5
                      sm:py-3.5
                      backdrop-blur-sm
                    "
                    style={{
                      backgroundColor: 'rgba(235,243,246,0.72)',
                    }}
                  >
                    <p
                      className="
                        flex-1
                        text-xs
                        sm:text-sm
                        md:text-base
                        lg:text-[18px]
                        xl:text-[20px]
                        text-black
                      "
                      style={{
                        fontFamily: 'var(--font-michroma)',
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
                      }}
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        text-sm
                        shrink-0
                      "
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        color: '#074139',
                      }}
                    >
                      {isOpen ? '−' : '+'}
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                          y: -8,
                        }}
                        animate={{
                          opacity: 1,
                          height: 'auto',
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          y: -8,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3">
                          <p
                            className="
                              rounded-[12px]
                              p-3
                              text-xs
                              sm:text-sm
                              leading-relaxed
                              text-black
                            "
                            style={{
                              fontFamily: 'var(--font-michroma)',
                              backgroundColor:
                                'rgba(255,255,255,0.72)',
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