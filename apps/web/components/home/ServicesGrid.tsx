import Link from 'next/link'
import { microgrammaBold } from '@/lib/fonts'

const SERVICES = [
  { icon: '🗺️', label: 'AR NAVIGATION', href: '/products' },
  { icon: '📋', label: 'E-CHALLAN', href: '/account/vehicles' },
  { icon: '💨', label: 'PUC', href: '/account/vehicles' },
  { icon: '👤', label: 'VEHICLE OWNER DETAILS', href: '/account/vehicles' },
  { icon: '💰', label: 'PERSONAL LOAN', href: '/products' },
  { icon: '⚡', label: 'QUICK SERVICES', href: '/products' },
  { icon: '🔋', label: 'EV STATIONS', href: '/products?category=accessories' },
  { icon: '🛡️', label: 'CAR INSURANCE', href: '/products' },
  { icon: '🏦', label: 'CAR LOAN', href: '/products' },
]

export function ServicesGrid() {
  return (
    <section className="px-6 py-14 md:py-20 mx-auto max-w-[1700px]">
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">

        {/* Left */}
        <div className="flex flex-col w-full lg:w-[45%] justify-center h-full gap-6">
          <h2
            className={`${microgrammaBold.className} font-bold text-4xl md:text-5xl xl:text-[56px] leading-tight text-[#074139]`}
          >
            Obpark is your complete vehicle companion
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl leading-[1.8] text-[#999C9C] font-[var(--font-michroma)]">
            Everything you need for your vehicle in one place — from documents to accessories, services to finance.
          </p>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[50%] rounded-[30px] md:rounded-[60px] bg-white border border-[#E5E5E5] shadow-[0_4px_25px_0_rgba(7,65,57,0.10)] p-4 md:p-6">
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="flex flex-col items-center justify-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border border-[rgba(7,65,57,0.5)] transition-all hover:bg-[#f0fdf9] hover:scale-105"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 flex items-center justify-center text-xl md:text-2xl rounded-full bg-[#CAEDE5] border-2 border-[#59D0B5]">
                  {s.icon}
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