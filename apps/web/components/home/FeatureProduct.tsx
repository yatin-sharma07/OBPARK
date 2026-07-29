'use client'

import { microgrammaBold } from '@/lib/fonts'
import { ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const initialProducts = [
  {
    id: 'prod-1',
    title: 'Microfiber Cloth',
    image: '/Images/Feature-Product/Microfiber-Cloth.jpg',
    description:
      'SOFTSPUN Microfiber Cloth Silk Banded Edges 800 GSM 30X40 cms 3pcs Yellow+Grey! Silk Banded Edge Towel Set Extra Thick Microfiber Cleaning Cloths Perfect for Bike Auto Cars Both Interior and Exterior.',
  },
  {
    id: 'ext-prod-1',
    title: 'Cleaning Combo',
    image: '/Images/Feature-Product/Cleaning-Combo.jpg',
    description:
      '5 PCS Microfiber Car Duster Kit - Interior & Exterior Car Cleaning Detailing Tool Scratch',
  },
  {
    id: 'prod-3',
    title: 'Interior & Exterior Combo',
    image: '/Images/Feature-Product/Interior-Exterior-Combo.jpg',
    description:
      'RED Dummy Tow Hook for Car Universal Triangle Bumper Exterior Accessory for Car, Truck & SUV',
  },
]

const displayProducts = [...initialProducts, initialProducts[0]]

export function FeatureProduct() {
  const [isMounted, setIsMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    setIsMounted(true)
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + 1)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const handleTransitionEnd = () => {
    if (currentIndex === initialProducts.length) {
      setIsTransitioning(false)
      setCurrentIndex(0)
    }
  }

  if (!isMounted) return null

  const activeDot = currentIndex % initialProducts.length

  return (
    <section className="w-full overflow-hidden py-16 md:py-24 bg-[#F0F9F5]">
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

        {/* TIMED SLIDER */}
        <div className="w-full relative overflow-hidden py-4 px-4 sm:px-8 max-w-[1200px] mx-auto">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {displayProducts.map((product, index) => (
              <div key={`${product.id}-${index}`} className="w-full shrink-0 px-2 sm:px-4">
                <Link
                  href={`/product/${product.id}`}
                  style={{
                    background: 'linear-gradient(135deg, #A6DEC7 0%, #1C8182 100%)',
                  }}
                  className="w-full max-w-[1013px] mx-auto md:h-[318px] min-h-[318px] rounded-[20px] p-6 md:p-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 shadow-[0_8px_30px_0_rgba(7,65,57,0.12)] border border-white/20 overflow-hidden cursor-pointer block transition-transform duration-300 hover:scale-[1.01]"
                >
                  {/* IMAGE SIDE */}
                  <div className="w-full md:w-[40%] flex justify-center items-center">
                    <div className="rounded-[20px] w-[200px] sm:w-[220px] md:w-[230px] aspect-square flex items-center justify-center overflow-hidden shadow-lg bg-white/10 shrink-0">
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
                  <div className="w-full md:w-[60%] flex flex-col justify-center gap-3 sm:gap-4 items-start py-2">
                    <h3
                      className={`${microgrammaBold.className} text-white text-[22px] sm:text-[26px] md:text-[30px] leading-tight`}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="text-white/90 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed line-clamp-3"
                      style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                      {product.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        alert(`Added ${product.title} to cart!`)
                      }}
                      className="mt-1 bg-white rounded-full px-7 py-2.5 flex items-center gap-2.5 hover:bg-white/90 transition-colors shadow-md active:scale-95 shrink-0"
                    >
                      <ShoppingCart className="w-4 h-4 text-[#1C8182]" />
                      <span
                        className={`${microgrammaBold.className} text-[#1C8182] text-[13px] pt-0.5`}
                      >
                        Add
                      </span>
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Optional Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {initialProducts.map((_, i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full transition-all duration-500 ${i === activeDot ? 'w-8 bg-[#1C8182]' : 'w-2 bg-[#1C8182]/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
