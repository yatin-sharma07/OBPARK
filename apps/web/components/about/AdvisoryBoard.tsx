'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';

const accordions = [
  {
    title: 'Our Mission',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    content:
      'To transform how people move through physical spaces by creating intelligent, connected environments that delight customers, optimize operations, and unlock new value for facility operators and cities.',
  },
  {
    title: 'Our Vision',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    content:
      'A world where every facility understands its spaces in real-time, every visitor enjoys frictionless navigation, and every operator makes decisions based on intelligence, not intuition.',
  },
  {
    title: 'Our Trusted Partners',
    image:
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80',
    content:
      'We see a future where autonomous vehicles coordinate seamlessly with smart facilities. Where cities use parking data to optimize traffic and reduce emissions. Where parking becomes a platform for commerce, service, and engagement.',
  },
];

export default function AdvisoryBoard() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-4 sm:px-6 sm:py-6 md:py-8">
      <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <p className="mb-4 text-base text-[#42D8BC] sm:text-lg">
            About Obpark
          </p>

          <h2
            className={`${microgrammaBold.className} text-3xl font-bold text-[#06483F] sm:text-4xl md:text-5xl`}
          >
            Our Story
          </h2>

          <div className="mt-8 max-w-[760px] space-y-6 text-base leading-[1.55] text-[#4A4A4A] sm:text-lg md:text-[19px]">
            <p>
              In a world that moves faster every day, parking infrastructure
              hasn&apos;t evolved in decades. Drivers waste 15 minutes
              searching for spaces. Facility operators lose millions in
              unrealized revenue. Cities struggle with congestion and
              emissions driven by parking search. This frustration was
              everywhere we looked.
            </p>

            <p>
              Obrive Industries was founded on a simple conviction: the problem
              isn&apos;t parking itself. The problem is that parking
              infrastructure isn&apos;t intelligent. It&apos;s disconnected from
              the digital world. It doesn&apos;t understand demand. It
              doesn&apos;t guide customers. It doesn&apos;t generate data that
              drives better decisions.
            </p>

            <p>
              We asked ourselves: What if parking wasn&apos;t a friction point,
              but a platform? What if every parking facility had a digital
              nervous system that understood occupancy in real-time, guided
              customers with precision, and created new revenue opportunities?
              What if facilities could transform the parking experience from
              frustrating to delightful?
            </p>
          </div>
        </motion.div>

        {/* Right Expanding Boxes */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col gap-5"
        >
          {accordions.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(isActive ? null : index)}
                layout
                animate={{
                  height: isActive ? 200 : 155,
                }}
                transition={{
                  height: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  layout: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="
                  group relative w-full cursor-pointer overflow-hidden rounded-[14px]
                  text-left will-change-transform
                "
              >
                {/* Background Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute inset-0 h-full w-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Centered Frosted Header */}
                <motion.div
                  layout="position"
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    absolute left-1/2 top-1/2 z-20
                    flex min-h-[72px] w-[calc(100%-40px)]
                    -translate-x-1/2 -translate-y-1/2
                    items-center justify-between
                    rounded-[14px] bg-white/65
                    px-5 backdrop-blur-md
                    sm:px-6
                    ${isActive ? 'hidden' : 'block'}
                  `}
                >
                  <span className="text-base text-[#0C403A] sm:text-lg">
                    {item.title}
                  </span>

                  <span className="text-2xl leading-none text-[#0C403A] sm:text-3xl">
                    {isActive ? '−' : '+'}
                  </span>
                </motion.div>

                {/* Expanded Content Inside Same Box */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                      transition={{
                        duration: 0.35,
                        delay: 0.16,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        absolute bottom-5 left-5 right-5 z-20
                        rounded-[14px] bg-white/70
                        px-5 py-5 backdrop-blur-md
                        sm:px-6 sm:py-6
                      "
                    >
                      <p className="text-sm leading-[1.35] text-black sm:text-base md:text-lg">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}