'use client'
import { microgrammaBold } from '@/lib/fonts'
import { useState } from 'react'

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
    <section style={{ padding: '80px 50px' }}>
      <div className="flex flex-col lg:flex-row items-start justify-between" style={{ gap: '32px' }}>

        <div className="flex flex-col lg:sticky lg:top-24" style={{ maxWidth: '634px', gap: '40px' }}>
          <p style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, fontSize: '16px', color: '#074139' }}>
            What's our promise
          </p>
          <h2 className={microgrammaBold.className} style={{ fontWeight: 700, fontSize: '56px', lineHeight: '1.2', color: '#074139' }}>
            Our platform is no-nonsense
          </h2>
        </div>

        <div className="flex flex-col flex-1" style={{ gap: '16px' }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="relative overflow-hidden cursor-pointer transition-all duration-500"
              style={{
                height: open === i ? '340px' : '215px',
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',
              }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${f.image}")`,
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  
                  
                }}
              />

              <div className="relative z-10 w-full h-full flex flex-col justify-center" style={{ padding: '43px 40px' }}>
                <div
                  className="flex items-center justify-between"
                  style={{
                    backgroundColor: '#EBF3F6',
                    opacity: 0.7,
                    borderRadius: '20px',
                    padding: '24px',
                    gap: '10px',
                    backdropFilter: 'blur(0.9px)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-michroma)',
                      fontWeight: 500,
                      fontSize: '32px',
                      lineHeight: '63px',
                      letterSpacing: '0%',
                      color: '#000000',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {f.title}
                  </p>
                  <span
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.6)',
                      color: '#074139',
                      fontSize: '20px',
                      fontWeight: 400,
                    }}
                  >
                    {open === i ? '−' : '+'}
                  </span>
                </div>

                {open === i && (
                  <div className="mt-4 px-2">
                    <p
                      style={{
                        fontFamily: 'var(--font-michroma)',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: '#074139',
                      }}
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