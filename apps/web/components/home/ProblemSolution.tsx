'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

export function ProblemSolution() {
  const [activeLeft, setActiveLeft] = useState(true)
  const [activeRight, setActiveRight] = useState(false)

  return (
    <section
      className="
        w-full
        max-w-[100vw]
        overflow-hidden
        px-4
        sm:px-5
        md:px-6
        py-8
        sm:py-10
        md:py-12
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
          flex
          max-w-[1240px]
          flex-col
          md:flex-row
          justify-center
          items-stretch
          gap-4
          sm:gap-5
        "
      >
        {/* PROBLEM CARD */}
        <motion.div
          initial={false}
          animate={{
            background: activeLeft
              ? 'linear-gradient(135deg, #1C8182 0%, #AAE1C9 100%)'
              : 'linear-gradient(to right, #ffffff, #ffffff)',
            scale: 1,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            md:w-1/2
            lg:w-[620px]
            min-h-[340px]
            sm:min-h-[380px]
            md:h-[480px]
            lg:h-[590px]
            flex-col

            rounded-[16px]
            border-none

            p-4
            sm:p-5
            md:p-7
          "
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Toggle problem card"
                onClick={() => setActiveLeft((prev) => !prev)}
                className="
                  relative
                  h-5
                  w-8
                  sm:h-6
                  sm:w-10
                  shrink-0
                  rounded-full
                  transition-colors
                  duration-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#59D0B5]
                  focus:ring-offset-2
                "
                style={{
                  backgroundColor: activeLeft ? '#ffffff' : '#074139',
                }}
              >
                <motion.span
                  initial={false}
                  animate={{
                    x: activeLeft ? 16 : 0,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 420,
                    damping: 28,
                  }}
                  className="
                    absolute
                    left-0.5
                    top-0.5
                    h-4
                    w-4
                    sm:h-5
                    sm:w-5
                    rounded-full
                  "
                  style={{
                    backgroundColor: activeLeft ? '#2A9D8F' : '#ffffff',
                  }}
                />
              </button>
              <span 
                className="text-xs sm:text-sm font-medium tracking-wide transition-colors"
                style={{ 
                  fontFamily: 'var(--font-michroma)',
                  color: activeLeft ? '#ffffff' : '#074139'
                }}
              >
                Enterprise
              </span>
            </div>

            <motion.h3
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className={`
                ${microgrammaBold.className}
                text-[28px]
                sm:text-[34px]
                md:text-[40px]
                leading-none
                transition-colors
              `}
              style={{ 
                fontWeight: 700,
                color: activeLeft ? '#ffffff' : '#074139'
              }}
            >
              The Problem
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="
              mt-auto
              pt-5
              text-[11px]
              sm:text-[13px]
              md:text-[14px]
              lg:text-[15px]
              leading-[1.8]
              md:leading-[28px]
              tracking-[0.02em]
              sm:tracking-[0.03em]
              transition-colors
            "
            style={{
              fontWeight: 400,
              fontFamily: 'var(--font-michroma)',
              color: activeLeft ? '#f0fcf8' : '#484848'
            }}
          >
            Traditional parking systems are expensive and inefficient, Parking operators often struggle with: Drivers wasting time searching for spaces, Traffic congestion inside parking structures, High installation costs, Sensor maintenance, Poor customer experience, Revenue leakage, Limited occupancy visibility, Lack of real-time analytics
          </motion.p>
        </motion.div>

        {/* SOLUTION CARD */}
        <motion.div
          initial={false}
          animate={{
            background: activeRight
              ? 'linear-gradient(to right, #59D0B5, #CAEDE5)'
              : 'linear-gradient(to right, #ffffff, #ffffff)',
            borderColor: activeRight ? 'rgba(7,65,57,0.25)' : '#e5e7eb',
            scale: 1,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            md:w-1/2
            lg:w-[620px]
            min-h-[340px]
            sm:min-h-[380px]
            md:h-[480px]
            lg:h-[590px]
            flex-col

            rounded-[16px]
            border

            p-4
            sm:p-5
            md:p-7
          "
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Toggle solution card"
                onClick={() => setActiveRight((prev) => !prev)}
                className="
                  relative
                  h-5
                  w-8
                  sm:h-6
                  sm:w-10
                  shrink-0
                  rounded-full
                  transition-colors
                  duration-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#59D0B5]
                  focus:ring-offset-2
                "
                style={{
                  backgroundColor: activeRight ? '#ffffff' : '#278C89',
                }}
              >
                <motion.span
                  initial={false}
                  animate={{
                    x: activeRight ? 16 : 0,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 420,
                    damping: 28,
                  }}
                  className="
                    absolute
                    left-0.5
                    top-0.5
                    h-4
                    w-4
                    sm:h-5
                    sm:w-5
                    rounded-full
                  "
                  style={{
                    backgroundColor: activeRight ? '#278C89' : '#ffffff',
                  }}
                />
              </button>
              <span 
                className="text-xs sm:text-sm font-medium tracking-wide transition-colors"
                style={{ 
                  fontFamily: 'var(--font-michroma)',
                  color: activeRight ? '#ffffff' : '#278C89'
                }}
              >
                Enterprise
              </span>
            </div>

            <motion.h3
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className={`
                ${microgrammaBold.className}
                text-[28px]
                sm:text-[34px]
                md:text-[40px]
                leading-none
                transition-colors
              `}
              style={{ 
                fontWeight: 700,
                color: activeRight ? '#ffffff' : '#278C89'
              }}
            >
              The Solution
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="
              mt-auto
              pt-5
              text-[11px]
              sm:text-[13px]
              md:text-[14px]
              lg:text-[15px]
              leading-[1.8]
              md:leading-[28px]
              tracking-[0.02em]
              sm:tracking-[0.03em]
              transition-colors
              flex flex-col gap-4
            "
            style={{
              fontWeight: 400,
              fontFamily: 'var(--font-michroma)',
              color: activeRight ? '#f0fcf8' : '#484848'
            }}
          >
            <span>Instead of deploying thousands of physical parking sensors, OBPARK digitizes your parking facility using a one-time Spatial Mapping process. Once mapped, the platform continuously manages occupancy, navigation, booking, and analytics through AI and user interaction.</span>
            <span>Benefits: No GPS Required, Low Installation Cost, Fast Deployment, Cloud Managed, Highly Scalable</span>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}