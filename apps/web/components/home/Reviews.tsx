'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

const INDUSTRIES = [
  {
    title: 'Airports',
    image: '/Images/reviews/review-3.png',
    painPoint:
      "International travelers don't know facility availability. Queue delays.",
    solution:
      'Wayfinding, queue visibility, terminal navigation, valet coordination.',
    outcome: 'Gate reduction | $180K+ valet revenue',
  },
  {
    title: 'Transit Stations',
    image: '/Images/reviews/review-2.png',
    painPoint: 'Park-n-ride lots mismanaged. Peak hour gridlock.',
    solution:
      'Occupancy prediction, staff optimization, auto-payment, congestion control.',
    outcome: '+25% ridership | 30% smoother operations',
  },
  {
    title: 'Hospitals',
    image: '/Images/reviews/review-5.png',
    painPoint: 'Patient stress about parking. Emergency capacity critical.',
    solution:
      'Priority spaces, wayfinding, integration with registration, real-time visibility.',
    outcome: 'Better patient experience | Emergency readiness',
  },
  {
    title: 'Hotels',
    image: '/Images/reviews/review-4.png',
    painPoint: 'Valet coordination manual. Guest experience fragmented.',
    solution:
      'Integrated valet, guest app, in-app services, premium experience.',
    outcome: 'Better reviews | Valet efficiency + guest satisfaction',
  },
]

const duplicatedIndustries = [...INDUSTRIES, ...INDUSTRIES]

export function Reviews() {
  return (
    <section
      className={`
        w-full
        max-w-[100vw]
        overflow-hidden
        bg-[#EEF9F5]
        py-14
        sm:py-16
        md:py-20
        lg:py-24
      `}
    >
      <div
        className={`
          mx-auto
          flex
          w-full
          flex-col
          items-center
          gap-10
          sm:gap-12
          md:gap-14
        `}
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
          className={`
            px-4
            text-center
          `}
        >
          <p
            className={`
              text-[13px]
              sm:text-[15px]
              md:text-[18px]
              lg:text-[20px]
              leading-none
              text-[#4B545A]
            `}
            style={{
              fontFamily: 'var(--font-michroma)',
              fontWeight: 400,
            }}
          >
            Industries We Transform
          </p>

          <h2
            className={`
              ${microgrammaBold.className}
              mt-5
              text-[#074139]
              text-[24px]
              sm:text-[32px]
              md:text-[42px]
              lg:text-[48px]
              leading-[1.15]
              font-bold
            `}
          >
            Every industry parks differently.
            <br />
            OBPARK makes it smarter.
          </h2>
        </motion.div>

        {/* AUTO ROTATING CARDS */}
        <div
          className={`
            group
            relative
            w-full
            overflow-hidden
          `}
        >
          <div
            className={`
              reviews-track
              flex
              w-max
              gap-4
              sm:gap-5
              md:gap-6
              lg:gap-7
              group-hover:[animation-play-state:paused]
            `}
          >
            {duplicatedIndustries.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`
                  flex
                  shrink-0
                  flex-col
                  overflow-hidden
                  rounded-[12px]
                  bg-white
                  w-[280px]
                  sm:w-[330px]
                  md:w-[380px]
                  lg:w-[420px]
                  min-h-[460px]
                  sm:min-h-[500px]
                  md:min-h-[560px]
                  shadow-[0_8px_30px_rgba(7,65,57,0.06)]
                `}
              >
                <div
                  className={`
                    relative
                    h-[170px]
                    sm:h-[200px]
                    md:h-[250px]
                    w-full
                    overflow-hidden
                  `}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-fill"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 330px, (max-width: 1024px) 380px, 420px"
                  />
                </div>

                <div
                  className={`
                    flex
                    flex-1
                    flex-col
                    p-5
                    sm:p-6
                  `}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`
                            text-[16px]
                            sm:text-[18px]
                            leading-none
                          `}
                          style={{ color: '#FACC15' }}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <h3
                      className={`
                        text-right
                        text-[13px]
                        sm:text-[15px]
                        text-[#111111]
                        leading-none
                      `}
                      style={{
                        fontFamily: 'var(--font-michroma)',
                        fontWeight: 400,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex flex-col gap-5">
                    <div>
                      <h4
                        className={`
                          ${microgrammaBold.className}
                          text-[12px]
                          sm:text-[13px]
                          text-[#074139]
                          leading-none
                          font-bold
                        `}
                      >
                        PAIN POINT
                      </h4>

                      <p
                        className={`
                          mt-3
                          text-[12px]
                          sm:text-[13px]
                          md:text-[14px]
                          leading-[1.7]
                          text-[#4B545A]
                        `}
                        style={{
                          fontFamily: 'var(--font-michroma)',
                          fontWeight: 400,
                        }}
                      >
                        {item.painPoint}
                      </p>
                    </div>

                    <div>
                      <h4
                        className={`
                          ${microgrammaBold.className}
                          text-[12px]
                          sm:text-[13px]
                          text-[#074139]
                          leading-none
                          font-bold
                        `}
                      >
                        OBPARK SOLUTION
                      </h4>

                      <p
                        className={`
                          mt-3
                          text-[12px]
                          sm:text-[13px]
                          md:text-[14px]
                          leading-[1.7]
                          text-[#4B545A]
                        `}
                        style={{
                          fontFamily: 'var(--font-michroma)',
                          fontWeight: 400,
                        }}
                      >
                        {item.solution}
                      </p>
                    </div>

                    <div>
                      <h4
                        className={`
                          ${microgrammaBold.className}
                          text-[12px]
                          sm:text-[13px]
                          text-[#4B545A]
                          leading-none
                          font-bold
                        `}
                      >
                        OUTCOME
                      </h4>

                      <p
                        className={`
                          mt-3
                          text-[12px]
                          sm:text-[13px]
                          md:text-[14px]
                          leading-[1.7]
                          text-[#4B545A]
                        `}
                        style={{
                          fontFamily: 'var(--font-michroma)',
                          fontWeight: 400,
                        }}
                      >
                        {item.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes industries-scroll {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0%);
          }
        }

        .reviews-track {
          animation: industries-scroll 32s linear infinite;
        }

        .reviews-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .reviews-track {
            animation-duration: 24s;
          }
        }
      `}</style>
    </section>
  )
}