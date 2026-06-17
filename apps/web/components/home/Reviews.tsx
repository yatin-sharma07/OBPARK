'use client'

import { motion } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

const REVIEWS = [
  {
    name: 'Pavan Reddy',
    duration: '3 Months',
    text: 'Obpark has completely changed how I manage my car. FASTag recharge and genuine parts all in one place — saved me so much time!',
  },
  {
    name: 'Yatin Sharma',
    duration: '3 Months',
    text: 'The vehicle health score feature is amazing. I knew exactly when my insurance was expiring before it even happened. Highly recommend.',
  },
  {
    name: 'Shivanshu',
    duration: '3 Months',
    text: 'Ordered brake pads for my Creta and they were delivered in 2 days. The compatibility check made sure I got exactly the right part.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export function Reviews() {
  return (
    <section
      className="
        w-full
        max-w-[100vw]
        overflow-hidden
        px-4
        sm:px-6
        md:px-10
        lg:px-12
        xl:px-16
        2xl:px-20
        py-12
        sm:py-14
        md:py-20
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1700px]
          flex-col
          gap-10
          sm:gap-12
          md:gap-16
          lg:gap-20
        "
      >
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="
            flex
            flex-col
            items-center
            gap-2
            sm:gap-3
            text-center
          "
        >
          <p
            className="
              text-sm
              sm:text-base
              md:text-2xl
              leading-none
              text-center
              text-[#4B545A]
            "
            style={{
              fontFamily: 'var(--font-michroma)',
              fontWeight: 400,
            }}
          >
            Stories worth sharing
          </p>

          <h2
            className={`
              ${microgrammaBold.className}
              text-2xl
              sm:text-4xl
              md:text-5xl
              lg:text-[60px]
              text-center
              text-[#074139]
            `}
            style={{
              fontWeight: 700,
              lineHeight: '1.2',
            }}
          >
            Why Obpark makes a difference
          </h2>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            md:gap-6
            lg:gap-8
            xl:gap-10
            w-full
          "
        >
          {REVIEWS.map((review) => (
            <motion.article
              key={review.name}
              variants={cardVariants}
              className="
                group
                mx-auto
                flex
                w-full

                max-w-[440px]
                md:max-w-none

                min-h-[420px]
                sm:min-h-[460px]
                md:min-h-[540px]
                lg:min-h-[575px]
                xl:min-h-[620px]

                flex-col
                overflow-hidden
                rounded-[20px]
                bg-white

                border
                border-[#074139]/10

                shadow-[0_4px_25px_rgba(7,65,57,0.08)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_12px_35px_rgba(7,65,57,0.14)]
              "
            >
              <div
                className="
                  w-full
                  h-44
                  sm:h-56
                  md:h-[260px]
                  lg:h-[300px]
                  xl:h-[330px]
                  rounded-t-[20px]
                  transition-transform
                  duration-500
                  group-hover:scale-[1.02]
                "
                style={{ backgroundColor: '#CAEDE5' }}
              />

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  gap-4
                  sm:gap-5
                  p-4
                  sm:p-6
                  md:p-5
                  lg:p-6
                  xl:p-8
                "
              >
                <div className="flex w-full items-center justify-between gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="
                          text-lg
                          sm:text-xl
                          md:text-lg
                          lg:text-xl
                        "
                        style={{ color: '#FACC15' }}
                        aria-hidden="true"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <span
                    className="
                      shrink-0
                      text-xs
                      sm:text-sm
                      md:text-sm
                      lg:text-base
                      text-[#4B545A]
                    "
                    style={{
                      fontFamily: 'var(--font-michroma)',
                      fontWeight: 400,
                    }}
                  >
                    {review.duration}
                  </span>
                </div>

                <p
                  className="
                    text-sm
                    sm:text-base
                    md:text-sm
                    lg:text-base
                    xl:text-lg
                    leading-relaxed
                    text-[#4B545A]
                  "
                  style={{
                    fontFamily: 'var(--font-michroma)',
                    fontWeight: 400,
                  }}
                >
                  &quot;{review.text}&quot;
                </p>

                <p
                  className={`
                    ${microgrammaBold.className}
                    mt-auto
                    text-base
                    sm:text-lg
                    md:text-base
                    lg:text-lg
                    xl:text-xl
                    text-[#074139]
                  `}
                  style={{
                    fontWeight: 700,
                  }}
                >
                  {review.name}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}