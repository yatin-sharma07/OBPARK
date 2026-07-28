'use client'

import { microgrammaBold } from '@/lib/fonts'
import { ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'

const initialProducts = [
  {
    id: 1,
    title: 'Microfiber Cloth',
    image: '/Images/Feature-Product/Microfiber-Cloth.jpg',
    description:
      'SOFTSPUN Microfiber Cloth Silk Banded Edges 800 GSM 30X40 cms 3pcs Yellow+Grey! Silk Banded Edge Towel Set Extra Thick Microfiber Cleaning Cloths Perfect for Bike Auto Cars Both Interior and Exterior.',
  },
  {
    id: 2,
    title: 'Cleaning Combo',
    image: '/Images/Feature-Product/Cleaning-Combo.jpg',
    description:
      '5 PCS Microfiber Car Duster Kit - Interior & Exterior Car Cleaning Detailing Tool Scratch',
  },
  {
    id: 3,
    title: 'Interior & Exterior Combo',
    image: '/Images/Feature-Product/Interior-Exterior-Combo.jpg',
    description:
      'RED Dummy Tow Hook for Car Universal Triangle Bumper Exterior Accessory for Car, Truck & SUV',
  },
]

export function FeatureProduct() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  // Duplicate the array to create a seamless infinite loop
  const scrollingProducts = [...initialProducts, ...initialProducts]

  return (
    <section className="w-full overflow-hidden py-16 md:py-24 bg-[#F0F9F5]">
      <style>{`
        @keyframes scrollCards {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Scroll exactly half the width (which is one full original set) including the gap */
            transform: translateX(calc(-50% - 1rem));
          }
        }
        .scrolling-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: scrollCards 30s linear infinite;
        }
        .scrolling-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full flex flex-col gap-10">
        {/* SECTION HEADING */}
        <div className="text-center px-4">
          <h2
            className={`
              ${microgrammaBold.className}
              text-[22px]
              sm:text-[28px]
              md:text-[34px]
              text-[#074139]
            `}
          >
            Feature Product
          </h2>
        </div>

        {/* SCROLLING MARQUEE */}
        <div className="w-full relative overflow-hidden py-4 px-4 sm:px-8">
          <div className="scrolling-track">
            {scrollingProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                style={{
                  background: 'linear-gradient(135deg, #A6DEC7 0%, #1C8182 100%)',
                }}
                className="w-[85vw] sm:w-[600px] md:w-[750px] shrink-0 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 shadow-[0_8px_30px_0_rgba(7,65,57,0.12)] border border-white/20 transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* IMAGE SIDE */}
                <div className="w-full md:w-[40%] flex justify-center">
                  <div className="rounded-[20px] w-full max-w-[280px] sm:max-w-[300px] aspect-square flex items-center justify-center overflow-hidden shadow-lg bg-white/10">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src =
                          'https://placehold.co/400x400/EAE6F0/2A8B87?text=Product+Image'
                      }}
                    />
                  </div>
                </div>

                {/* CONTENT SIDE */}
                <div className="w-full md:w-[60%] flex flex-col gap-4 sm:gap-6 items-start">
                  <h3
                    className={`${microgrammaBold.className} text-white text-[22px] sm:text-[26px] md:text-[30px]`}
                  >
                    {product.title}
                  </h3>
                  <p
                    className="text-white/90 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed max-w-[500px]"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    {product.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      alert(`Added ${product.title} to cart!`)
                    }}
                    className="mt-1 bg-white rounded-full px-6 py-2.5 flex items-center gap-2 hover:bg-white/90 transition-colors shadow-md active:scale-95"
                  >
                    <ShoppingCart className="w-4 h-4 text-[#1C8182]" />
                    <span
                      className={`${microgrammaBold.className} text-[#1C8182] text-[13px] pt-0.5`}
                    >
                      Add
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
