'use client';

import { microgrammaBold } from '@/lib/fonts';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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

          min-h-[360px]
          sm:min-h-[460px]
          md:min-h-[560px]

          h-[50vh]
          md:h-[60vh]
          lg:h-[65vh]

          max-h-[480px]
          md:max-h-[660px]
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


      </motion.div>

      {/* Text Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 text-[#074139]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 flex flex-col items-center text-center gap-8"
        >
          {/* Main Title */}
          <h1
            className={`
              ${microgrammaBold.className}
              text-xl
              sm:text-2xl
              md:text-[32px]
              lg:text-[34px]
              font-bold
              leading-snug
              max-w-3xl
              text-[#1A817F]
            `}
          >
            <ScrollReveal as="span" text="Building the Future of Smart Parking with AI & Spatial Computing" />
          </h1>

          {/* Description Paragraphs */}
          <div 
            className={`${microgrammaBold.className} text-[14px] sm:text-[15px] md:text-[17px] leading-[1.8] tracking-wide text-left flex flex-col gap-6 text-[#0D4B4D]`}
          >
            <ScrollReveal text="OBPARK is an AI-powered Smart Parking and Indoor Navigation platform developed by Obrive Industries, designed to revolutionize how people discover, access, and manage parking spaces. Leveraging Spatial Computing, Artificial Intelligence, Machine Learning, Augmented Reality (AR), and Digital Twin Technology, OBPARK transforms conventional parking facilities into intelligent, connected ecosystems." />
            
            <ScrollReveal text="Unlike conventional parking solutions that rely on expensive sensors and complex infrastructure, OBPARK uses advanced spatial mapping and intelligent software to create digital representations of parking environments, delivering real-time occupancy insights, indoor navigation, analytics, and seamless user experiences." />
            
            <ScrollReveal text="We believe parking is more than just a space - it is the beginning of every journey." className="text-center" />
          </div>

          {/* Why OBPARK Exists Section */}
          <div className="w-full flex flex-col items-center gap-6 mt-6">
            <h2
              className={`
                ${microgrammaBold.className}
                text-lg
                sm:text-xl
                md:text-[26px]
                font-bold
                text-[#1A817F]
              `}
            >
              <ScrollReveal as="span" text="Why OBPARK Exists" />
            </h2>

            <ul 
              className={`${microgrammaBold.className} text-[14px] sm:text-[15px] md:text-[17px] leading-[1.8] tracking-wide text-left flex flex-col gap-4 list-none pl-0 max-w-3xl text-[#0D4B4D]`}
            >
              <li className="flex items-start gap-3">
                <span className="text-[#0D4B4D] font-bold text-lg leading-none select-none mt-1">•</span>
                <ScrollReveal as="span" text="Millions of drivers spend valuable time searching for parking every day." />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0D4B4D] font-bold text-lg leading-none select-none mt-1">•</span>
                <ScrollReveal as="span" text="Leading To Congestion." />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0D4B4D] font-bold text-lg leading-none select-none mt-1">•</span>
                <ScrollReveal as="span" text="Wasted Fuel." />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0D4B4D] font-bold text-lg leading-none select-none mt-1">•</span>
                <ScrollReveal as="span" text="Increased Emissions, and frustration." />
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0D4B4D] font-bold text-lg leading-none select-none mt-1">•</span>
                <ScrollReveal as="span" text="Traditional parking systems are often expensive, hardware-dependent, and difficult to scale." />
              </li>
            </ul>

            <ScrollReveal 
              as="p"
              text="OBPARK solves these challenges through intelligent software, digital twin technology, and real-time spatial intelligence. Enabling organizations to modernize parking operations without the complexity of traditional infrastructure"
              className={`${microgrammaBold.className} text-[14px] sm:text-[15px] md:text-[17px] leading-[1.8] tracking-wide text-left mt-6 max-w-3xl text-[#0D4B4D]`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}