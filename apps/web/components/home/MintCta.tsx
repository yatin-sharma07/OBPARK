'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

export function MintCta() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="
        relative
        w-full
        max-w-none
        overflow-hidden

        flex
        items-end
        justify-start

        min-h-[360px]
        sm:min-h-[420px]
        md:min-h-[500px]
        lg:min-h-[540px]
        xl:min-h-[580px]

        rounded-none
        mx-0
        mt-8
        sm:mt-10
        md:mt-12

        px-4
        sm:px-8
        md:px-12
        lg:px-16
        xl:px-24

        py-10
        sm:py-12
        md:py-16
        lg:py-0
        lg:items-center
      "
      style={{
        background:
          'linear-gradient(135deg, #62E5CE 0%, #AFFFEF 35%, #A6FDEB 70%, #5DE3CA 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          flex
          w-full
          max-w-[625px]
          flex-col

          gap-8
          sm:gap-10
          md:gap-12
          xl:gap-14

          text-left
        "
      >
        <div
          className="
            flex
            flex-col
            gap-3
            md:gap-4
          "
        >
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className={`
              ${microgrammaBold.className}
              text-[#074139]
              font-bold
              leading-tight

              text-[24px]
              xs:text-[26px]
              sm:text-[32px]
              md:text-[38px]
              lg:text-[42px]
              xl:text-[48px]

              
            `}
          >
            Balance is within your reach
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.26,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="
              text-white
              font-medium
              leading-tight

              text-[18px]
              sm:text-2xl
              md:text-3xl
              lg:text-[36px]
              xl:text-[40px]
            "
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            It&apos;s time to unlock it
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.34,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            w-full
            sm:w-auto
          "
        >
          <Link
            href="/products"
            className="
              inline-flex
              items-center
              justify-center

              w-full
              sm:w-auto
              sm:min-w-[360px]
              md:min-w-[430px]
              xl:min-w-[489px]

              h-[52px]
              sm:h-[58px]
              md:h-[66px]
              xl:h-[76px]

              rounded-[16px]
              sm:rounded-[18px]
              md:rounded-[20px]

              bg-white
              border
              border-[#074139]/50

              px-5
              sm:px-8

              text-[#074139]
              font-normal
              text-center
              whitespace-nowrap

              text-[12px]
              sm:text-sm
              md:text-lg
              xl:text-2xl

              transition-all
              duration-300
              hover:shadow-md
              hover:scale-[1.02]
              active:scale-[0.98]
            "
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            Explore more about obpark
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}