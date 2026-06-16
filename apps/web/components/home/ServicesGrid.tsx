import Link from 'next/link'
import { microgrammaBold } from '@/lib/fonts'
import Image from 'next/image'

const SERVICES = [
  { image:'/images/services/pic1.jpeg', label: 'AR NAVIGATION', href: '/products' },
  { image:'/images/services/pic2.jpeg', label: 'E-CHALLAN', href: '/account/vehicles' },
  { image:'/images/services/pic3.jpeg', label: 'PUC', href: '/account/vehicles' },
  { image:'/images/services/pic4.jpeg', label: 'VEHICLE OWNER DETAILS', href: '/account/vehicles' },
  { image:'/images/services/pic5.jpeg', label: 'PERSONAL LOAN', href: '/products' },
  { image:'/images/services/pic6.jpeg', label: 'QUICK SERVICES', href: '/products' },
  { image:'/images/services/pic7.jpeg', label: 'EV STATIONS', href: '/products?category=accessories' },
  { image:'/images/services/pic8.jpeg', label: 'CAR INSURANCE', href: '/products' },
  { image:'/images/services/pic9.jpeg', label: 'CAR LOAN', href: '/products' },
]

export function ServicesGrid() {
  return (
    <section className="px-6 py-14 md:py-20 mx-auto max-w-[1700px]">
      <div className="flex flex-col lg:flex-row gap-12  justify-between">

        
        <div className="flex flex-col w-full lg:w-[736px] h-[583px] justify-center gap-6 mt-12">
          <h2
            className={`${microgrammaBold.className} font-bold text-4xl md:text-5xl xl:text-[56px] leading-tight text-[#074139]`}
          >
            Obpark is your complete vehicle companion
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl leading-[1.8] text-[#999C9C] " style={{ fontFamily: 'var(--font-michroma)' }}>
            Everything you need for your vehicle in one place — from documents to accessories, services to finance, designed to simplify every aspect of your vehicle ownership journey.
          </p>
        </div>

        
        <div className="w-full lg:max-w-[814px] min-h-[800px] rounded-[30px] md:rounded-[60px] bg-white border border-[#07413980] shadow-[0_4px_25px_0_rgba(7,65,57,0.10)] p-4 md:p-6 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {SERVICES.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="w-full max-w-[200px] h-[211px] p-4 flex flex-col items-center justify-center gap-4 rounded-[8px] border border-[rgba(7,65,57,0.8)] transition-all hover:bg-[#f0fdf9] hover:scale-105"
              >
                <div className="flex items-center justify-center  ">
                <div className="w-[120px] h-[120px] rounded-full bg-[#F8FAFA] border-[6px] border-[#59D0B5] flex items-center justify-center overflow-hidden">
  <Image
    src={s.image}
    alt={s.label}
    width={60}
    height={60}
    className="object-contain"
  />
</div>
                </div>
                <span
                  className={`${microgrammaBold.className} font-bold text-[9px] md:text-[12px] xl:text-[16px] leading-tight text-[#074139] text-center uppercase`}
                >
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}