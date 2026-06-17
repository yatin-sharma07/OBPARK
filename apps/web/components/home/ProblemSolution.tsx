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
        py-12
        sm:py-14
        md:py-16
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
          max-w-[1500px]
          flex-col
          md:flex-row
          justify-center
          gap-5
          sm:gap-6
        "
      >
        {/* PROBLEM CARD */}
        <motion.div
          initial={false}
          animate={{
            background: activeLeft
              ? 'linear-gradient(to right, #59D0B5, #CAEDE5)'
              : 'linear-gradient(to right, #ffffff, #ffffff)',
            borderColor: activeLeft ? 'rgba(7,65,57,0.25)' : '#e5e7eb',
            scale: activeLeft ? 1 : 0.985,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            md:w-1/2
            lg:w-[782px]
            min-h-[430px]
            sm:min-h-[480px]
            md:h-[620px]
            lg:h-[757px]
            flex-col

            rounded-[20px]
            border

            p-5
            sm:p-8
            md:p-10
          "
        >
          <div className="flex flex-col gap-6 sm:gap-8">
            <button
              type="button"
              aria-label="Toggle problem card"
              onClick={() => setActiveLeft((prev) => !prev)}
              className="
                relative
                h-6
                w-10
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
                backgroundColor: activeLeft ? '#074139' : '#d1d5db',
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
                  left-1
                  top-1
                  h-4
                  w-4
                  rounded-full
                  bg-white
                "
              />
            </button>

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
                text-[30px]
                sm:text-4xl
                md:text-[40px]
                leading-none
                text-[#074139]
              `}
              style={{ fontWeight: 700 }}
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
              pt-8
              text-[14px]
              sm:text-base
              md:text-xl
              lg:text-2xl
              leading-[2]
              md:leading-[40px]
              tracking-[0.06em]
              sm:tracking-[0.08em]
              md:tracking-[0.1em]
              text-[#484848]
            "
            style={{
              fontWeight: 400,
              fontFamily: 'var(--font-michroma)',
            }}
          >
            Vehicle owners in India struggle with scattered services — RC
            verification, insurance renewals, FASTag recharges, finding genuine
            parts — all on different platforms with no single source of truth
            for your vehicle&apos;s health.
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
            scale: activeRight ? 1 : 0.985,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            md:w-1/2
            lg:w-[782px]
            min-h-[430px]
            sm:min-h-[480px]
            md:h-[620px]
            lg:h-[757px]
            flex-col

            rounded-[20px]
            border

            p-5
            sm:p-8
            md:p-10
          "
        >
          <div className="flex flex-col gap-6 sm:gap-8">
            <button
              type="button"
              aria-label="Toggle solution card"
              onClick={() => setActiveRight((prev) => !prev)}
              className="
                relative
                h-6
                w-10
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
                backgroundColor: activeRight ? '#074139' : '#d1d5db',
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
                  left-1
                  top-1
                  h-4
                  w-4
                  rounded-full
                  bg-white
                "
              />
            </button>

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
                text-[30px]
                sm:text-4xl
                md:text-[40px]
                leading-none
                text-[#074139]
              `}
              style={{ fontWeight: 700 }}
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
              pt-8
              text-[14px]
              sm:text-base
              md:text-[20px]
              lg:text-[24px]
              leading-[2]
              md:leading-[40px]
              tracking-[0.06em]
              sm:tracking-[0.08em]
              md:tracking-[0.1em]
              text-[#484848]
            "
            style={{
              fontWeight: 400,
              fontFamily: 'var(--font-michroma)',
            }}
          >
            Obpark unifies vehicle services in one platform — FASTag recharge,
            genuine parts, health scores, compatibility checks, order tracking,
            and expert support — giving owners a single trusted place to manage
            their vehicles.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}