'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';

const accordions = [
  {
    title: 'Our Mission',
    image: '/Images/about/ourmision.jpg',
    content:
      'At OBPARK, our mission is to transform the way people experience parking by making every journey smarter, faster, and more connected. Through the power of Artificial Intelligence, Spatial Computing, Augmented Reality, Digital Twin Technology, and Machine Learning, we simplify indoor navigation, optimize parking operations, and help businesses create seamless mobility experiences. We are committed to building intelligent parking ecosystems that reduce congestion, save time, improve operational efficiency, and contribute to smarter, more sustainable cities.',
  },
  {
    title: 'Our Vision',
    image: '/Images/about/ourvision.jpg',
    content:
      "Our vision is to become the world's leading AI-powered Smart Parking and Indoor Navigation Platform, redefining urban mobility through innovation. We envision a future where every parking facility is digitally connected, every driver is guided effortlessly, and every city benefits from intelligent infrastructure that enhances convenience, sustainability, and operational excellence. By continuously innovating in Spatial Computing and AI, we aim to shape the future of connected mobility for enterprises, governments, and communities worldwide.",
  },
  {
    title: 'Our Trusted Partner',
    image: '/Images/about/trustedprtner.jpg',
    content:
      "Building the Future Together\n\nInnovation thrives through collaboration. At OBPARK, we partner with visionary organisations, technology providers, enterprises, developers, and public institutions to create intelligent parking and mobility solutions that make a real impact. Our ecosystem is built on trusted partnerships that enable seamless integration, scalable deployment, and continuous innovation across industries.",
  },
];

export default function AdvisoryBoard() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full overflow-hidden bg-white py-3 sm:py-5 md:py-6 lg:mb-20">
      <div className="grid w-full grid-cols-1 items-center gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 xl:gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <p className="mb-3 text-sm text-[#59D0B5] sm:text-base" style={{ fontFamily: 'var(--font-michroma)' }}>
            About Obpark
          </p>

          <h2
            className={`${microgrammaBold.className} text-2xl font-bold text-[#06483F] sm:text-3xl md:text-[40px]`}
          >
            Our Story
          </h2>

          <div 
            className="mt-6 max-w-[660px] space-y-4 text-[18px] leading-[28px] font-normal tracking-normal align-middle text-black"
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            <p>
              Every great innovation begins with a simple problem.
            </p>
            <p>
              One day, after spending hours at a busy shopping mall, our founder returned to the parking garage only to realise they couldn't remember where the car was parked. With GPS unavailable indoors and every parking level looking identical, a short walk became a frustrating search.
            </p>
            <p>
              That moment sparked a simple question:
            </p>
            <p>
              Why is finding a parked car still so difficult in the age of smart technology?
            </p>
            <p>
              Driven by this challenge, we set out to rethink parking from the ground up. By combining Artificial Intelligence, Spatial Computing, Augmented Reality, Digital Twin Technology, and Machine Learning, we created OBPARK - an intelligent platform that helps people find parking, navigate indoors, and rediscover their vehicles with ease. Today, OBPARK is transforming parking facilities into smart, connected ecosystems for businesses, cities, and drivers alike.
            </p>
            <p>
              From one forgotten parking space came a smarter way to move.
            </p>
          </div>
        </motion.div>

        {/* Right Expanding Boxes */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col gap-5 sm:gap-6"
        >
          {accordions.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(isActive ? null : index)}
                layout
                className={`
                  group
                  relative
                  w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-[16px]
                  text-left
                  shadow-md
                  flex
                  flex-col
                  ${isActive ? 'justify-start p-4 sm:p-5 gap-4 min-h-[140px]' : 'justify-center p-4 sm:p-5'}
                  transition-all
                  duration-300
                `}
              >
                {/* Background Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25 z-0" />

                {/* Header Bar */}
                <motion.div 
                  layout="position"
                  className="relative z-10 flex items-center justify-between w-full bg-white/20 backdrop-blur-md px-6 py-4 rounded-[12px]"
                >
                  <span className="text-[13px] sm:text-[15px] text-white tracking-wide font-light" style={{ fontFamily: 'var(--font-michroma)' }}>
                    {item.title}
                  </span>
                  <span className="text-2xl font-light leading-none text-white">
                    {isActive ? '−' : '+'}
                  </span>
                </motion.div>

                {/* Expanded Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, height: 'auto', filter: 'blur(0px)' }}
                      exit={{ opacity: 0, height: 0, filter: 'blur(4px)' }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="relative z-10 w-full bg-white/20 backdrop-blur-md p-5 rounded-[12px] shadow-sm overflow-hidden"
                    >
                      <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[1.6] text-white/90 font-light whitespace-pre-line" style={{ fontFamily: 'var(--font-michroma)' }}>
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