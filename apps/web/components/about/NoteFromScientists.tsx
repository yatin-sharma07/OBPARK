'use client';

import { motion } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';

export default function NoteFromScientist() {
  return (
    <section className="w-full bg-white px-4 py-3 sm:px-5 sm:py-5 md:py-6 lg:mb-14">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          grid
          w-full
          grid-cols-1
          gap-3
          sm:gap-4
          md:grid-cols-2
          md:gap-5
          lg:h-[720px]
          lg:grid-cols-[0.78fr_1.4fr]
        "
      >
        {/* Left Image */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[9px]
            min-h-[300px]
            sm:min-h-[380px]
            md:min-h-[500px]
            lg:min-h-0
            lg:h-[720px]
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
            rounded-[9px]
            bg-[#F0F9F5]
            px-4
            py-5
            sm:px-6
            sm:py-6
            md:px-8
            md:py-8
            lg:h-[720px]
            lg:px-10
            lg:py-8
          "
        >
          <h2
            className={`
              ${microgrammaBold.className}
              text-[#06483F]
              text-lg
              font-bold
              leading-tight
              sm:text-xl
              md:text-[24px]
              lg:text-[34px]
            `}
          >
            The Vision Behind OBPARK
          </h2>

          <div
            className="
              mt-5
              max-w-[760px]
              space-y-4
              text-xs
              leading-[1.45]
              text-[#3E7071]
              sm:text-sm
              md:text-[15px]
              lg:text-[18px]
              leading-[1.80]
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
              infrastructure into : Intelligent Spaces.
            </p>

          </div>
        </div>
      </motion.div>
    </section>
  );
}