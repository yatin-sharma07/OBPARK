'use client'

import { motion } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

const comparisonRows = [
  {
    capability: 'Occupancy Visibility',
    traditional: 'Manual inspection.',
    obpark: 'Real-time (every 2s)',
  },
  {
    capability: 'Customer Wayfinding',
    traditional: 'Static signage',
    obpark: 'AR navigation',
  },
  {
    capability: 'Revenue Optimization',
    traditional: 'Fixed rates',
    obpark: 'Dynamic pricing',
  },
  {
    capability: 'Data Intelligence',
    traditional: 'None',
    obpark: 'AI analytics',
  },
  {
    capability: 'Additional Revenue',
    traditional: 'None',
    obpark: '$300K-500K annually',
  },
  {
    capability: 'Customer Experience',
    traditional: 'Frustration',
    obpark: '88% faster parking',
  },
  {
    capability: 'Labor Costs',
    traditional: 'High (manual)',
    obpark: '30-40% reduction',
  },
  {
    capability: 'Mobile Integration',
    traditional: 'None or basic',
    obpark: 'Full platform',
  },
]

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
        overflow-hidden

        px-4
        sm:px-6
        md:px-8
        lg:px-12

        py-16
        sm:py-20
        md:py-24
        lg:py-28
      "
      style={{
        background:
          'linear-gradient(135deg, #5ED9C6 0%, #93E8D9 45%, #DDF7F1 100%)',
      }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-12"
        >
          <h2
            className={`
              ${microgrammaBold.className}
              text-[#074139]
              font-bold
              leading-none

              text-[24px]
              sm:text-[32px]
              md:text-[42px]
              lg:text-[48px]
            `}
          >
            OBPARK vs Traditional Parking
          </h2>

          <p
            className="
              mt-4
              text-[#074139]
              font-semibold
              leading-tight

              text-[10px]
              sm:text-[13px]
              md:text-[16px]
              lg:text-[18px]
            "
            style={{
              fontFamily: 'var(--font-michroma)',
              fontWeight: '1000',
            }}
          >
            Why OBPARK is fundamentally different from legacy systems
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            w-full
            max-w-[1100px]
            overflow-x-auto
            rounded-none
            bg-white

            px-3
            py-6
            sm:px-8
            sm:py-10
            md:px-12
            md:py-12
            lg:px-14
          "
        >
          <table
            className="
              w-full
              min-w-[560px]
              sm:min-w-[720px]
              border-collapse
            "
          >
            <thead>
              <tr>
                <th
                  className={`
                    ${microgrammaBold.className}
                    pb-6
                    sm:pb-8
                    text-left
                    text-[11px]
                    sm:text-[13px]
                    font-bold
                    text-[#074139]
                    md:text-[15px]
                    xl:text-[25px]
                  `}
                >
                  Capability
                </th>

                <th
                  className={`
                    ${microgrammaBold.className}
                    pb-6
                    sm:pb-8
                    text-left
                    text-[11px]
                    sm:text-[13px]
                    font-bold
                    text-[#074139]
                    md:text-[15px]
                    xl:text-[25px]
                  `}
                >
                  Traditional
                </th>

                <th
                  className={`
                    ${microgrammaBold.className}
                    pb-6
                    sm:pb-8
                    text-left
                    text-[11px]
                    sm:text-[13px]
                    font-bold
                    text-[#074139]
                    md:text-[15px]
                    xl:text-[25px]
                  `}
                >
                  OBPARK
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.capability}>
                  <td
                    className="
                      py-4
                      sm:py-6
                      pr-4
                      sm:pr-8
                      text-[10px]
                      sm:text-[13px]
                      leading-tight
                      sm:leading-none
                      text-black
                      md:text-[15px]
                    "
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    {row.capability}
                  </td>

                  <td
                    className="
                      py-4
                      pr-4
                      sm:pr-8
                      text-[10px]
                      sm:text-[13px]
                      leading-tight
                      sm:leading-none
                      text-black
                      md:text-[15px]
                    "
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    {row.traditional}
                  </td>

                  <td
                    className="
                      py-4
                      text-[10px]
                      sm:text-[13px]
                      leading-tight
                      sm:leading-none
                      text-black
                      md:text-[15px]
                    "
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    <span className="mr-2 sm:mr-3 text-[13px] sm:text-[16px]">
                      ✓
                    </span>
                    {row.obpark}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.section>
  )
}