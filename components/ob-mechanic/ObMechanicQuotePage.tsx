'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { michroma, microgrammaBold } from '@/lib/fonts'
import { BrandSelectModal } from './BrandSelectModal'

function ImagePlaceholderIcon({ className, stroke = '#1E1E1E' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 454.5 463.5" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="1.75" y="1.75" width="451" height="460" rx="32" stroke={stroke} strokeWidth="3.5" />
      <circle cx="113" cy="145" r="32" stroke={stroke} strokeWidth="3.5" />
      <path d="M75 340 L227 175 L380 340" stroke={stroke} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function ObMechanicQuotePage() {
  const [city, setCity] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [mobile, setMobile] = useState('')
  const [brandModalOpen, setBrandModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to quote/lead API
    console.log({ city, brand, model, mobile })
  }

  return (
    <div className="w-full min-h-screen bg-[#eefaf6]">
      <div className="max-w-[1278px] mx-auto w-full px-4 sm:px-8 pt-32 sm:pt-36 md:pt-40 pb-10 sm:pb-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[510px] bg-[#EAF5F0] rounded-[20px] sm:rounded-[24px] p-6 sm:p-10"
        >
          <h1
            className={`${microgrammaBold.className} text-[#278888] font-bold text-[24px] sm:text-[30px] leading-[120%] tracking-[2px]`}
          >
            Experience the best car service in Banglore
          </h1>

          <div className="relative w-full aspect-[510/203] mt-5 sm:mt-6 overflow-hidden bg-transparent flex items-center justify-center">
            <img
              src="/Images/ob-driver-mechanic.png"
              alt="Car Service"
              width={510}
              height={203}
              className="w-full h-full object-cover"
            />

          </div>

          <p
            className={`${michroma.className} text-[#000000] text-[13px] sm:text-[14px] leading-[100%] tracking-[0.05em] mt-4`}
          >
            Get instant quote for your car service
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <div>
              <label className={`${michroma.className} text-sm text-[#074139] font-medium block mb-2`}>
                Enter your city
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={`${michroma.className} w-full border border-gray-300 rounded-lg px-4 py-3 text-[10px] tracking-[0.05em] text-[#6E9394] bg-white`}
              />
            </div>

            <div>
              <label className={`${michroma.className} text-sm text-[#074139] font-medium block mb-2`}>
                Enter your car brand
              </label>
              <input
                type="text"
                readOnly
                value={brand}
                onClick={() => setBrandModalOpen(true)}
                placeholder="Select your car brand"
                className={`${michroma.className} w-full border border-gray-300 rounded-lg px-4 py-3 text-[10px] tracking-[0.05em] text-[#6E9394] bg-white cursor-pointer`}
              />
            </div>

            <div>
              <label className={`${michroma.className} text-sm text-[#074139] font-medium block mb-2`}>
                Enter your car model
              </label>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className={`${michroma.className} w-full border border-gray-300 rounded-lg px-4 py-3 text-[10px] tracking-[0.05em] text-[#6E9394] bg-white`}
              />
            </div>

            <div>
              <label className={`${michroma.className} text-sm text-[#074139] font-medium block mb-2`}>
                Enter mobile number
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className={`${michroma.className} w-full border border-gray-300 rounded-lg px-4 py-3 text-[10px] tracking-[0.05em] text-[#6E9394] bg-white`}
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Button
              type="submit"
              className={`${michroma.className} mt-5 w-[252px] h-10 bg-[#B5E2D1] hover:bg-[#b8e3d8] text-[#000000] font-normal text-[16px] leading-[100%] tracking-[0.05em]`}
            >
              Check price for free
            </Button>

            <div className="flex items-center justify-center gap-8 sm:gap-10 mt-4">
              <div className="text-center">
                <p
                  className={`${microgrammaBold.className} text-[#0A3D31] font-bold text-[16px] leading-[120%]`}
                >
                  ★ 4/<span className="text-[11px]">5</span>
                </p>
                <p className={`${michroma.className} text-[#6E9394] text-[12px] leading-[140%] mt-0.5`}>
                  Based on
                  <br />
                  15000 reviews
                </p>
              </div>
              <div className="text-center">
                <p className={`${microgrammaBold.className} text-[#0A3D31] font-bold text-[16px] leading-[120%]`}>
                  2 million
                </p>
                <p className={`${michroma.className} text-[#6E9394] text-[12px] leading-[140%] mt-0.5`}>
                  Happy customer
                </p>
              </div>
            </div>
          </div>
        </form>
        <BrandSelectModal
          open={brandModalOpen}
          onClose={() => setBrandModalOpen(false)}
          onSelect={(selected) => setBrand(selected)}
        />
      </div>
    </div>
  )
}