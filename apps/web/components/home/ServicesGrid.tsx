import Link from 'next/link'

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
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight mb-5" style={{ color: '#074139' }}>
            Obpark is your complete vehicle companion
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-sm">
            Everything you need for your vehicle in one place — from documents to accessories, services to finance.
          </p>
        </div>

        <div className="rounded-3xl p-6 shadow-sm" style={{ backgroundColor: 'white', border: '1px solid #e5e7eb' }}>
          <div className="grid grid-cols-3 gap-3">
            {SERVICES.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="flex flex-col items-center gap-2.5 p-4 rounded-2xl transition-all hover:bg-[#f0fdf9] hover:shadow-sm hover:scale-105"
                style={{ border: '1px solid #f0f0f0' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                  style={{ background: 'linear-gradient(135deg, #e0faf5, #A2F1DF)' }}
                >
                  {s.icon}
                </div>
                <span className="text-[9px] font-bold text-center uppercase tracking-wide leading-tight" style={{ color: '#074139' }}>
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