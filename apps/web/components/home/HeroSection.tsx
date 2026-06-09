import Link from 'next/link'

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl mx-4 mt-4"
      style={{ minHeight: '92vh', background: 'linear-gradient(135deg, #c8f5eb 0%, #a8eddc 30%, #6dd4bc 60%, #2a9d8a 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute"
          style={{
            width: '140%',
            height: '100px',
            background: 'linear-gradient(180deg, rgba(180,180,180,0.1) 0%, rgba(220,220,220,0.22) 40%, rgba(180,180,180,0.1) 100%)',
            top: '44%',
            left: '-20%',
            transform: 'rotate(-18deg)',
            transformOrigin: 'left center',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '140%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
            top: '52%',
            left: '-20%',
            transform: 'rotate(-18deg)',
            transformOrigin: 'left center',
          }}
        />
      </div>

      <div
        className="absolute"
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          top: '50%',
          left: '53%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at 35% 30%, #5ecfba, #074139 70%)',
          boxShadow: '0 12px 40px rgba(7,65,57,0.5), inset 0 -4px 8px rgba(0,0,0,0.3)',
        }}
      />

      <div className="relative z-10 px-8 pt-6 flex justify-center">
        <nav
          className="flex items-center justify-between w-full max-w-3xl px-6 py-3"
          style={{
            backgroundColor: 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(12px)',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.4)',
          }}
        >
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#074139' }}>
              About
            </Link>
            <Link href="/products" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#074139' }}>
              Shop
            </Link>
            <Link href="#app" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#074139' }}>
              App Download
            </Link>
          </div>

          <span className="absolute left-1/2 -translate-x-1/2 text-lg font-black tracking-widest" style={{ color: '#074139' }}>
            OBPARK®
          </span>

          <Link
            href="/register"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all hover:opacity-90"
            style={{ backgroundColor: '#074139', color: '#A2F1DF' }}
          >
            SCHEDULE CALL ↗
          </Link>
        </nav>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link
          href="/products"
          className="flex items-center gap-2 px-7 py-2.5 rounded-full text-sm font-semibold tracking-widest transition-all hover:bg-white/30"
          style={{
            border: '1px solid rgba(7,65,57,0.35)',
            color: '#074139',
            backgroundColor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
          }}
        >
          DOWNLOAD APP ↗
        </Link>
      </div>
    </section>
  )
}