'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, X } from 'lucide-react'
import { michroma, microgrammaBold } from '@/lib/fonts'

// Drop your logo files in /public/Images/brands/ named exactly like the `logo` path below.
// Note: one logo in your screenshot (between Daewoo and Aston Martin) wasn't clearly readable —
// confirm that brand name before adding it.
export const carBrands = [
  { name: 'Maruti Suzuki', logo: '/Images/brands/maruti-suzuki.png' },
  { name: 'Hyundai', logo: '/Images/brands/Hyundai.png' },
  { name: 'Honda', logo: '/Images/brands/honda.png' },
  { name: 'Tata', logo: '/Images/brands/tata.png' },
  { name: 'Ford', logo: '/Images/brands/ford.png' },
  { name: 'Volkswagen', logo: '/Images/brands/volkswagen.png' },
  { name: 'Mahindra', logo: '/Images/brands/mahindra.png' },
  { name: 'Renault', logo: '/Images/brands/renault.png' },
  { name: 'Chevrolet', logo: '/Images/brands/chevrolet.png' },
  { name: 'Toyota', logo: '/Images/brands/toyota.png' },
  { name: 'Skoda', logo: '/Images/brands/skoda.png' },
  { name: 'Nissan', logo: '/Images/brands/nissan.png' },
  { name: 'Fiat', logo: '/Images/brands/Fiat.png' },
  { name: 'Datsun', logo: '/Images/brands/datsun.png' },
  { name: 'BMW', logo: '/Images/brands/bmw.png' },
  { name: 'Kia', logo: '/Images/brands/kia.png' },
  { name: 'Audi', logo: '/Images/brands/audi.png' },
  { name: 'Mercedes', logo: '/Images/brands/mercedes.png' },
  { name: 'Jeep', logo: '/Images/brands/jeep.png' },
  { name: 'Mitsubishi', logo: '/Images/brands/mitsubishi.png' },
  { name: 'MG', logo: '/Images/brands/mg.png' },
  { name: 'Land Rover', logo: '/Images/brands/land-rover.png' },
  { name: 'Volvo', logo: '/Images/brands/volvo.png' },
  { name: 'Jaguar', logo: '/Images/brands/jaguar.png' },
  { name: 'Ssangyong', logo: '/Images/brands/ssangyong.png' },
  { name: 'Isuzu', logo: '/Images/brands/isuzu.png' },
  { name: 'Mini', logo: '/Images/brands/mini.png' },
  { name: 'Force', logo: '/Images/brands/Force.png' },
  { name: 'Opel', logo: '/Images/brands/opel.png' },
  { name: 'Porsche', logo: '/Images/brands/porsche.png' },
  { name: 'Daewoo', logo: '/Images/brands/daewoo.png' },
  { name: 'Aston Martin', logo: '/Images/brands/aston-martin.png' },
  { name: 'Citroen', logo: '/Images/brands/citroen.png' },
  { name: 'Lexus', logo: '/Images/brands/lexus.png' },
  { name: 'Bentley', logo: '/Images/brands/bentley.png' },
  { name: 'DC', logo: '/Images/brands/dc.png' },
  { name: 'Ferrari', logo: '/Images/brands/ferrari.png' },
  { name: 'Maserati', logo: '/Images/brands/maserati.png' },
  { name: 'Lamborghini', logo: '/Images/brands/lamborghini.png' },
  { name: 'Rolls Royce', logo: '/Images/brands/rolls-royce.png' },
  { name: 'Foton', logo: '/Images/brands/foton.png' },
  { name: 'Jayem', logo: '/Images/brands/jayem.png' },
  { name: 'Premier', logo: '/Images/brands/premier.png' },
  { name: 'Hummer', logo: '/Images/brands/hummer.png' },
  { name: 'BYD', logo: '/Images/brands/byd.png' },
]

interface BrandSelectModalProps {
  open: boolean
  onClose: () => void
  onSelect: (brand: string) => void
}

export function BrandSelectModal({ open, onClose, onSelect }: BrandSelectModalProps) {
  const [query, setQuery] = useState('')

  if (!open) return null

  const filtered = carBrands.filter((b) =>
    b.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-start sm:items-center justify-center px-4 py-10 sm:py-0"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[590px] max-h-[80vh] bg-white rounded-[16px] shadow-xl flex flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between px-5 sm:px-6 pt-5 sm:pt-6">
          <h2 className={`${microgrammaBold.className} text-[18px] sm:text-[20px] font-bold text-black`}>
            Select Manufacturer
          </h2>
          <button onClick={onClose} aria-label="Close">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="px-5 sm:px-6 mt-4">
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2.5">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Brands"
              className={`${michroma.className} w-full text-[13px] outline-none text-black placeholder:text-gray-400`}
            />
          </div>
        </div>

        <div className="px-5 sm:px-6 py-5 overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
            {filtered.map((brand) => (
              <button
                key={brand.name}
                type="button"
                onClick={() => {
                  onSelect(brand.name)
                  onClose()
                }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="relative w-16 h-10 sm:w-20 sm:h-12">
                  <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
                </div>
                <span className={`${michroma.className} text-[12px] sm:text-[13px] text-black group-hover:text-[#1A817F]`}>
                  {brand.name}
                </span>
              </button>
            ))}
            {filtered.length === 0 && (
              <p className={`${michroma.className} col-span-2 sm:col-span-3 text-center text-gray-400 text-[13px] py-6`}>
                No brands found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}