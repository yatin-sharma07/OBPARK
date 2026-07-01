'use client';

import { microgrammaBold } from '@/lib/fonts';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-full bg-white">
      {/* Hero Video Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative font-michroma
          mx-3 mt-3 mb-10
          sm:mx-4 sm:mt-4
          md:m-6

          rounded-[24px]
          sm:rounded-[28px]
          md:rounded-[30px]

          overflow-hidden

          h-[520px]
          sm:h-[600px]
          md:h-[680px]
          lg:h-[720px]

          max-h-[720px]
        "
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/HeroSection/obrive-intro.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Optional dark/green overlay */}
        <div className="absolute inset-0 bg-[#074139]/20" />

        {/* Diagonal Light Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              absolute
              w-[160%] sm:w-[150%] lg:w-[140%]
              h-[60px] sm:h-[80px] md:h-[100px]
              -left-[30%] sm:-left-[25%] lg:-left-[20%]
              top-[43%] md:top-[44%]
              -rotate-[22deg] sm:-rotate-[20deg] md:-rotate-[18deg]
              origin-left
            "
            style={{
              background:
                'linear-gradient(180deg, rgba(180,180,180,0.1) 0%, rgba(220,220,220,0.22) 40%, rgba(180,180,180,0.1) 100%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="
              absolute
              w-[160%] sm:w-[150%] lg:w-[140%]
              h-[2px]
              -left-[30%] sm:-left-[25%] lg:-left-[20%]
              top-[51%] md:top-[52%]
              -rotate-[22deg] sm:-rotate-[20deg] md:-rotate-[18deg]
              origin-left
            "
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
            }}
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <h1
            className={`
              ${microgrammaBold.className}
              text-2xl
              sm:text-2xl
              md:text-[34px]
              lg:text-[36px]
              font-bold
              text-[#59D0B5]
              leading-tight
              lg:mb-10
            `}
          >
            Building the Operating System for Intelligent Mobility Spaces
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-[18px] text-[#3E7071] max-w-[1100px] mx-auto text-left flex flex-col gap-5">
            At Obrive Industries, we&apos;re reimagining how people move through
            and interact with physical spaces.
            <br />
            <span>
              Through spatial computing, artificial intelligence, and immersive
              technologies, we&apos;re creating the infrastructure that
              transforms parking from a problem into an opportunity.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}