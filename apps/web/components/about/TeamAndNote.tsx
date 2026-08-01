'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const teamMembers = [
  {
    name: 'Johannes Davidsson',
    role: 'Director of Spatial Computing',
    image: '/Images/about/Johannes Davidsson.jpg',
  },
  {
    name: 'Cherlin Chow',
    role: 'Senior Computer Vision Engineer',
    image: '/Images/about/Cherlin Chow.jpg',
  },
  {
    name: 'Matthieu Sam',
    role: 'Principal Unity Engineer',
    image: '/Images/about/Matthieu Sam.jpg',
  },
  {
    name: 'Nikhil Pathak',
    role: 'Creative Director',
    image: '/Images/about/Nikhil Pathak.jpg',
  },
  {
    name: 'Shivansh Pataku',
    role: 'Senior Backend developer',
    image: '/Images/about/Shivansh Pataku.jpg',
  },
  {
    name: 'Vivek Sharma',
    role: 'Senior Full stack Developer',
    image: '/Images/about/Vivek Sharma.jpg',
  },
]

export default function TeamAndNote() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(teamMembers.length / 3)
  const visibleMembers = teamMembers.slice(page * 3, page * 3 + 3)

  return (
    <section className="w-full py-12 flex flex-col gap-16 md:gap-24">
      {/* TECHNICAL TEAM SECTION */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-left">
            <h2
              className={`
                ${microgrammaBold.className}
                text-[22px]
                sm:text-[28px]
                md:text-[34px]
                text-[#074139]
                tracking-wide
              `}
            >
              Technical Team & Advisory Board
            </h2>
          </div>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {visibleMembers.map((member, idx) => (
              <motion.div
                key={member.name + idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-[#F0F9F5] rounded-[24px] overflow-hidden border border-[#E1EBE8] flex flex-col group transition-transform duration-300 hover:scale-[1.01]"
              >
                {/* MEMBER PHOTO */}
                <div className="relative aspect-square w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src =
                        'https://placehold.co/400x400/EAE6F0/2A8B87?text=Team+Member'
                    }}
                  />

                  {/* PREV BUTTON ON FIRST CARD */}
                  {idx === 0 && (
                    <button
                      onClick={() => setPage(p => p > 0 ? p - 1 : totalPages - 1)}
                      className="hidden md:flex absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 shadow-md backdrop-blur-sm rounded-full items-center justify-center text-[#074139] hover:bg-[#074139] hover:text-white transition-colors z-10"
                      aria-label="Previous members"
                    >
                      <ChevronLeft className="w-5 h-5 -ml-0.5" />
                    </button>
                  )}

                  {/* NEXT BUTTON ON THIRD CARD */}
                  {idx === 2 && (
                    <button
                      onClick={() => setPage(p => p < totalPages - 1 ? p + 1 : 0)}
                      className="hidden md:flex absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 shadow-md backdrop-blur-sm rounded-full items-center justify-center text-[#074139] hover:bg-[#074139] hover:text-white transition-colors z-10"
                      aria-label="Next members"
                    >
                      <ChevronRight className="w-5 h-5 ml-0.5" />
                    </button>
                  )}
                </div>

                {/* DETAILS CARD FOOTER */}
                <div className="p-5 flex items-center justify-start gap-4 bg-[#F0F9F5]">
                  <div className="flex flex-col gap-1 w-full text-left">
                    <h3
                      className={`${microgrammaBold.className} text-[#074139] text-[13px] sm:text-[15px] font-bold`}
                    >
                      {member.name.replace(' (Copy)', '')}
                    </h3>
                    <p
                      className="text-[#3E7071] text-[10px] sm:text-[11px] font-medium"
                      style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Dots & Mobile Navigation */}
        <div className="flex flex-col items-center gap-4 mt-2">
          {/* Dots (visible on all screens) */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  page === i ? 'w-6 bg-[#074139]' : 'w-2 bg-[#074139]/20 hover:bg-[#074139]/40'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          {/* Mobile Arrows (hidden on desktop) */}
          <div className="flex md:hidden justify-center gap-4">
            <button
              onClick={() => setPage(p => p > 0 ? p - 1 : totalPages - 1)}
              className="w-12 h-12 rounded-full border border-[#074139] flex items-center justify-center text-[#074139] hover:bg-[#074139] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 -ml-0.5" />
            </button>
            <button
              onClick={() => setPage(p => p < totalPages - 1 ? p + 1 : 0)}
              className="w-12 h-12 rounded-full border border-[#074139] flex items-center justify-center text-[#074139] hover:bg-[#074139] hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 ml-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* DR. MALAKH JIBRIL NOTE SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_2fr] gap-8 md:gap-10 xl:gap-12 items-stretch">
        
        {/* LEFT COLUMN: DR PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F0F9F5] rounded-[28px] overflow-hidden border border-[#E1EBE8] flex flex-col group"
        >
          <div className="relative w-full aspect-[4/5] md:h-[450px] lg:h-[500px] overflow-hidden">
            <img
              src="/Images/about/Dr. Malakh Jibril.jpg"
              alt="Dr. Malakh Jibril"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                  'https://placehold.co/400x500/EAE6F0/2A8B87?text=Dr.+Malakh+Jibril'
              }}
            />
          </div>
          <div className="p-6 bg-[#F0F9F5] text-center flex flex-col gap-1 items-center justify-center">
            <span
              className="text-[#3E7071] text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              Lead Obpark Technical Advisor
            </span>
            <h3
              className={`${microgrammaBold.className} text-[#074139] text-[16px] sm:text-[19px] font-bold mt-1`}
            >
              Dr. Malakh Jibril
            </h3>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: NOTE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F0F9F5] rounded-[28px] p-6 sm:p-8 md:p-10 flex flex-col justify-center gap-6 border border-[#E1EBE8]"
        >
          <h3
            className={`
              ${microgrammaBold.className}
              text-[#074139]
              text-[20px]
              sm:text-[24px]
              md:text-[28px]
              font-bold
              leading-tight
            `}
          >
            A Note from Dr. Malakh Jibril
          </h3>

          <div
            className="text-[#3E7071] text-[11px] sm:text-[13px] md:text-[14px] leading-[1.8] tracking-[0.02em] space-y-4 font-normal"
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            <p>
              At OBPARK, we believe that innovation begins by solving real-world problems.
            </p>
            <p>
              Like millions of people, I experienced the frustration of searching for my car in a large indoor parking facility. That simple moment sparked an idea - what if parking could be as intelligent and effortless as the technology we use every day? That question became the foundation of OBPARK.
            </p>
            <p>
              Like Our mission is not just to help people find parking spaces or locate their vehicles. We are building an intelligent mobility platform that transforms how people move through buildings, cities, and connected spaces. By combining Artificial Intelligence, Spatial Computing, Augmented Reality, Digital Twins, and Machine Learning, we are creating solutions that make parking safer, smarter, and more sustainable. Every challenge presents an opportunity to innovate. At OBPARK, our team is driven by curiosity, collaboration, and a commitment to delivering technology that creates meaningful value for businesses, governments, and communities around the world.
            </p>
            <p>
              As we continue to grow, our vision remains clear—to redefine indoor mobility and become the global standard for intelligent parking and navigation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
