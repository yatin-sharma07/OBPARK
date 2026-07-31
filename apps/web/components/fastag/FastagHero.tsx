'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { microgrammaBold } from '@/lib/fonts'
import { motion } from 'framer-motion'

interface FastagHeroProps {
  manualVrn: string
  setManualVrn: (v: string) => void
  onCheckFastag: () => void
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export function FastagHero({ manualVrn, setManualVrn, onCheckFastag }: FastagHeroProps) {
  return (
    <div className="px-3 sm:px-4 md:px-6 pt-4">
      <section className="relative w-full overflow-hidden bg-white rounded-[28px] shadow-[0_12px_30px_rgba(7,76,67,0.08)] min-h-[calc(100vh-32px)] lg:h-[calc(100vh-32px)] flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-20 sm:pt-24 lg:pt-32 pb-10 sm:pb-14 lg:pb-24 mx-auto">
        <div className="relative z-10 w-full max-w-none mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-center lg:h-full">
          
          {/* Left Column - Text and Form */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full space-y-6 sm:space-y-8 z-20"
          >
            <div className="space-y-4">
              <motion.h1 
                variants={fadeInUp}
                className={`${microgrammaBold.className} text-[#0B402F] font-bold leading-tight text-[34px] sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] max-w-none`}
              >
                Buy & Recharge <br /> FASTag Online
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-[#3E7071] text-base sm:text-lg md:text-[18px] leading-relaxed w-full max-w-2xl font-medium"
              >
                Buy FASTag online, perform a quick NETC FASTag balance check, and complete your online FASTag recharge in seconds to avoid 2x toll charges. Enjoy seamless travel with OBPark.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="max-w-xl pt-2">
              {/* Tabs */}
              <div className="flex relative z-10">
                <button className="bg-[#0B402F] text-white px-8 py-3 rounded-t-lg font-bold text-xs tracking-wide">
                  Recharge
                </button>
                <button className="bg-white text-[#0B402F] border border-b-0 border-gray-200 px-8 py-3 rounded-t-lg font-bold text-xs tracking-wide hover:bg-gray-50 transition-colors">
                  Buy FASTag
                </button>
              </div>

              {/* Form Card */}
              <div 
                className="bg-white p-2 sm:p-2.5 rounded-b-2xl rounded-tr-2xl border border-gray-200/80 shadow-[0_4px_25px_rgba(7,65,57,0.05)] flex items-center justify-between gap-3 relative z-20"
              >
                <div className="flex items-center flex-1 gap-2 sm:gap-3 min-w-0">
                  {/* IND Plate */}
                  <div className="bg-[#1c2024] text-white w-12 h-10 sm:w-14 sm:h-12 rounded-xl flex flex-col items-center justify-center font-bold shrink-0 select-none">
                    <span className="text-base sm:text-lg leading-none">🇮🇳</span>
                    <span className="text-[8px] sm:text-[10px] tracking-widest mt-0.5 leading-none font-sans font-extrabold text-[#D1D5DB]">IND</span>
                  </div>
                  {/* Input */}
                  <input
                    type="text"
                    placeholder="VEHICLE NUMBER"
                    value={manualVrn}
                    onChange={(e) => setManualVrn(e.target.value.toUpperCase())}
                    className="w-full bg-transparent outline-none border-0 text-[#074c43] placeholder:text-[#a0aaa7] font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  />
                </div>
                {/* Button */}
                <button
                  onClick={onCheckFastag}
                  disabled={!manualVrn.trim()}
                  className="bg-[#074139] hover:bg-[#052e28] text-white shrink-0 font-bold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl text-[10px] sm:text-xs md:text-sm h-auto flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-[1.02] shadow-[0_4px_12px_rgba(7,65,57,0.15)] disabled:opacity-50 disabled:pointer-events-none"
                  style={{ fontFamily: 'var(--font-michroma)' }}
                >
                  <span>Check Details</span>
                  <span className="text-xs sm:text-sm md:text-base">→</span>
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div 
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-full lg:max-h-[600px] xl:max-h-[660px] mt-4 lg:mt-0 flex items-center justify-center lg:justify-end"
          >
            {/* Background image behind car */}
            <div className="absolute top-0 right-0 w-[120%] h-full max-w-[800px] z-0 lg:translate-x-12 translate-y-4">
               <Image 
                 src="/Images/fastag/banner_bg.png" 
                 alt="FASTag Background" 
                 fill 
                 className="object-contain lg:object-cover object-right"
                 priority
               />
            </div>
            
            {/* Car image */}
            <div className="absolute right-0 bottom-0 w-[110%] sm:w-full max-w-[700px] aspect-[16/10] z-10 lg:translate-x-6 lg:translate-y-8">
               <Image 
                 src="/Images/fastag/banner_car.png" 
                 alt="Vehicles with FASTag" 
                 fill 
                 className="object-contain object-bottom"
                 priority
               />
            </div>
          </motion.div>
          
        </div>
      </section>
    </div>
  )
}
