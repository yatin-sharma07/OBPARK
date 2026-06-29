'use client';

import { motion } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';

export default function NoteFromScientist() {
  return (
    <section className="w-full bg-white px-4 py-4 sm:px-6 sm:py-6 md:py-8 lg:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          grid
          w-full
          grid-cols-1
          gap-4
          sm:gap-5
          md:grid-cols-2
          md:gap-7
          lg:h-[857px]
          lg:grid-cols-[0.78fr_1.4fr]
        "
      >
        {/* Left Image */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[10px]
            min-h-[360px]
            sm:min-h-[460px]
            md:min-h-[600px]
            lg:min-h-0
            lg:h-[857px]
          "
        >
          <img
            src="/Images/about/about-vision.png"
            alt="The Vision Behind OBPARK"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Right Content Card */}
        <div
          className="
            flex
            flex-col
            justify-center
            rounded-[10px]
            bg-[#F0F9F5]
            px-5
            py-6
            sm:px-7
            sm:py-8
            md:px-10
            md:py-10
            lg:h-[857px]
            lg:px-12
            lg:py-10
          "
        >
          <h2
            className={`
              ${microgrammaBold.className}
              text-[#06483F]
              text-xl
              font-bold
              leading-tight
              sm:text-2xl
              md:text-[28px]
              lg:text-[40px]
            `}
          >
            The Vision Behind OBPARK
          </h2>

          <div
            className="
              mt-6
              max-w-[850px]
              space-y-5
              text-sm
              leading-[1.45]
              text-[#3E7071]
              sm:text-base
              md:text-[17px]
              lg:text-[24px]
            "
          >
            <p>
              OBPARK was created to solve a problem that affects millions of
              people every day: the broken experience of finding and parking a
              vehicle.
            </p>

            <p>
              But more importantly, OBPARK was created to unlock value that
              facility operators didn&apos;t know existed. A 1,000-space
              facility typically operates at 65-70% occupancy. That&apos;s
              $400K-500K in missed revenue every year. Customers leave malls
              and airports without visiting due to parking frustration. Staff
              spend hours on manual enforcement and ticketing. Data that could
              drive smarter decisions simply doesn&apos;t exist.
            </p>

            <p>
              OBPARK changes this. By combining spatial computing, augmented
              reality navigation, real-time occupancy intelligence, and
              AI-powered analytics, OBPARK transforms traditional parking
              infrastructure into:
            </p>

            <p>Intelligent Spaces.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}