import Link from 'next/link'

export function HeroSection() {
  return (
    <section
      className="min-h-[88vh] flex flex-col items-center justify-center px-6 text-center relative"
      style={{ backgroundColor: '#A2F1DF' }}
    >
      <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: '#074139' }}>
        Everything your vehicle needs
      </p>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl" style={{ color: '#074139' }}>
        Your vehicle,<br />fully taken care of.
      </h1>
      <p className="mt-6 text-lg max-w-md leading-relaxed" style={{ color: '#074139', opacity: 0.7 }}>
        RC lookup, health scores, FASTag recharge, and genuine parts — all in one place.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link href="/products" className="px-8 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-80" style={{ backgroundColor: '#074139', color: '#A2F1DF' }}>
          Browse Parts
        </Link>
        <Link href="/account/vehicles" className="px-8 py-3 rounded-lg font-semibold text-sm border transition-colors hover:opacity-80" style={{ borderColor: '#074139', color: '#074139', backgroundColor: 'transparent' }}>
          Check Vehicle Health
        </Link>
      </div>
    </section>
  )
}