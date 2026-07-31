'use client'

import { motion } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

const resources = [
  {
    image: '/Images/resources/resources1.jpg',
    tag: 'BLOG',
    date: '30.07.25',
    title: 'Augmented Reality vs. Virtual Reality vs. Mixed Reality: Key Differences.'
  },
  {
    image: '/Images/resources/resources2.jpg',
    tag: 'BLOG',
    date: '30.07.25',
    title: 'How Spatial Computing is Redefining Business Operation.'
  },
  {
    image: '/Images/resources/resources3.jpg',
    tag: 'BLOG',
    date: '30.07.25',
    title: 'How AR-Powered Car Parking Systems are Solving Urban Mobility.'
  }
]

export function ResourceLibrary() {
  return (
    <section className="w-full overflow-hidden py-16 md:py-24 bg-[#F0F9F5]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col px-4 sm:px-6 lg:px-8 gap-12 lg:gap-16">
        
        <div className="text-center flex flex-col gap-2">
          <span 
            className="text-[#6B7280] text-[15px] sm:text-[17px] uppercase tracking-wide"
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            The Resources
          </span>
          <h2
            className={`
              ${microgrammaBold.className}
              text-[22px]
              sm:text-[28px]
              md:text-[34px]
              text-[#074139]
            `}
          >
            Immersive Tech Resource Library
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {resources.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-gray-100 shadow-md">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/600x450/EAE6F0/2A8B87?text=Blog+Image+${i+1}`
                  }}
                />
              </div>
              
              <div className="flex flex-col gap-2 px-1">
                <div 
                  className="flex items-center justify-between text-[#8E8E8E] text-[10px] sm:text-[11px] uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-michroma)' }}
                >
                  <span>{item.tag}</span>
                  <span>{item.date}</span>
                </div>
                
                <h3 className={`${microgrammaBold.className} text-[#074139] text-[13px] sm:text-[14px] leading-snug mt-1`}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
