'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { michroma, microgrammaBold } from '@/lib/fonts'

export function OutstationForm() {
  return (
    <form className="space-y-5">
      <div className="relative w-full h-[140px] bg-gray-200 rounded-lg overflow-hidden">
        <Image src="/images/ob-driver-img.png" alt="" fill className='object-cover' />
      </div>

      <div>
        <label className={`${michroma.className} text-sm text-[#0A3D31] font-medium block mb-2`}>
          Choose Location
        </label>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Enter 4 letters to Search PickUp Location"
            className={`${michroma.className} w-full border border-gray-300 rounded-lg px-4 py-3 text-[10px] tracking-[0.05em] placeholder:text-[#6E9394]`}
          />
          <input
            type="text"
            placeholder="Enter 4 letters to Search Drop Location"
            className={`${michroma.className} w-full border border-gray-300 rounded-lg px-4 py-3 text-[10px] tracking-[0.05em] placeholder:text-[#6E9394]`}
          />
        </div>
      </div>

      <div>
        <label className={`${michroma.className} text-sm text-[#0A3D31] font-medium block mb-2`}>
          Select Trip Type and Estimated Usage
        </label>
        <div className="grid grid-cols-2 gap-3">
          <select className={`${michroma.className} border border-gray-300 rounded-lg px-4 py-3 text-[10px] tracking-[0.05em] bg-white text-[#6E9394]`}>
            <option>One Way Trip</option>
            <option>Round Trip</option>
          </select>
          <select className={`${michroma.className} border border-gray-300 rounded-lg px-4 py-3 text-[10px] tracking-[0.05em] bg-white text-[#6E9394]`}>
            <option>12Hrs</option>
            <option>16Hrs</option>
            <option>18Hrs</option>
            <option>24 Hrs</option>
          </select>
        </div>
      </div>

      <div>
        <label className={`${michroma.className} text-sm text-[#0A3D31] font-medium block mb-2`}>
          Date &amp; Time
        </label>
        <div className="grid grid-cols-4 gap-2">
          <input placeholder="DD" className={`${michroma.className} border border-gray-300 rounded-lg px-2 py-3 text-[10px] tracking-[0.05em] text-center placeholder:text-[#6E9394]`} />
          <input placeholder="MM" className={`${michroma.className} border border-gray-300 rounded-lg px-2 py-3 text-[10px] tracking-[0.05em] text-center placeholder:text-[#6E9394]`} />
          <input placeholder="YYYY" className={`${michroma.className} border border-gray-300 rounded-lg px-2 py-3 text-[10px] tracking-[0.05em] text-center placeholder:text-[#6E9394]`} />
          <input placeholder="00:00" className={`${michroma.className} border border-gray-300 rounded-lg px-2 py-3 text-[10px] tracking-[0.05em] text-center placeholder:text-[#6E9394]`} />
        </div>
      </div>

      {[0, 1].map((i) => (
        <div key={i}>
          <label className={`${michroma.className} text-sm text-[#0A3D31] font-medium block mb-2`}>
            Car Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            <select className={`${michroma.className} border border-gray-300 rounded-lg px-4 py-3 text-[10px] tracking-[0.05em] bg-white text-[#6E9394]`}>
              <option>Manual</option>
              <option>Automatic</option>
            </select>
            <select className={`${michroma.className} border border-gray-300 rounded-lg px-4 py-3 text-[10px] tracking-[0.05em] bg-white text-[#6E9394]`}>
              <option>Hatchback</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Luxury</option>
            </select>
          </div>
        </div>
      ))}

      <div className="pt-2 border-t border-gray-100">
        <p className={`${microgrammaBold.className} text-[11px] tracking-[0.05em] font-bold text-[#074139] mb-2`}>
          SECURE YOUR BOOKING
        </p>
        <label className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
          <input type="checkbox" className="mt-1" />
          Get vehicle damage protection plan for your car for ₹18 +GST. T&amp;C apply*
        </label>
      </div>

      <Button type="submit" className="w-full bg-[#0A3D31] hover:bg-[#0A3D31]/90 text-white font-semibold py-6 rounded-lg">
        Request Driver
      </Button>
    </form>
  )
}