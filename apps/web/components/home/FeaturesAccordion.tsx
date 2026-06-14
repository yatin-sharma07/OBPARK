'use client'
import { useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'

const FEATURES = [
  {
    title: 'RC Verified & Health Score',
    description: 'Every vehicle on Obpark is verified through the government Vahan database. Get a real-time health score out of 100 based on insurance, PUCC, RC fitness, challans and FASTag status.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    title: 'Genuine Parts with Compatibility Check',
    description: 'Browse thousands of car accessories and parts. Every product is checked against your vehicle make, model and year before you add to cart — no wrong fitment ever.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'FASTag Recharge & Smart Alerts',
    description: 'Recharge your FASTag in seconds. Set low balance alerts and never get stopped at a toll again. Supports all major banks — HDFC, ICICI, SBI, Axis and more.',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
  },
]

export function FeaturesAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="px-4 sm:px-8 md:px-[50px] py-12 md:py-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">

        <div className="flex flex-col lg:sticky lg:top-24 w-full lg:max-w-[634px] gap-6 md:gap-10">
          <p
            className="text-base sm:text-lg md:text-2xl leading-none"
            style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, color: '#4B545A' }}
          >
            What's our promise
          </p>
          <h2
            className={`${microgrammaBold.className} text-2xl sm:text-3xl md:text-4xl lg:text-[56px] leading-tight`}
            style={{ fontWeight: 700, color: '#074139' }}
          >
            Our platform is no-nonsense
          </h2>
        </div>

        <div className="flex flex-col flex-1 w-full gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="relative overflow-hidden cursor-pointer transition-all duration-500 rounded-[20px] bg-white"
              style={{ height: open === i ? '260px' : '140px' }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${f.image}")` }}
              />

              <div className="relative z-10 w-full h-full flex flex-col justify-center px-4 sm:px-6 md:px-10 py-4 md:py-[43px]">
                <div
                  className="flex items-center justify-between rounded-[20px] p-3 sm:p-4 md:p-6 gap-2"
                  style={{ backgroundColor: '#EBF3F6', opacity: 0.7 }}
                >
                  <p
                    className="text-sm sm:text-base md:text-2xl lg:text-[32px] leading-none truncate"
                    style={{ fontFamily: 'var(--font-microgamma)', fontWeight: 500, color: '#000000' }}
                  >
                    {f.title}
                  </p>
                  <span
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center shrink-0 text-lg md:text-xl"
                    style={{ backgroundColor: 'rgba(255,255,255,0.6)', color: '#074139', fontWeight: 400 }}
                  >
                    {open === i ? '−' : '+'}
                  </span>
                </div>

                {open === i && (
                  <div className="mt-4 px-2">
                    <p
                      className="text-sm md:text-base leading-relaxed rounded-lg p-2"
                      style={{ fontFamily: 'var(--font-michroma)', color: '#000000', backgroundColor: 'rgba(255,255,255,0.6)' }}
                    >
                      {f.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}