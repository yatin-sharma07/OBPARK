import { microgrammaBold } from '@/lib/fonts'
export function MarqueeStrip() {
  const items = [
    'RC Verified Vehicles',
    'FASTag Recharge',
    'Genuine Parts',
    'Vehicle Health Score',
    'Pan India Delivery',
    'Secure Payments',
    'E-Challan Check',
    'Car Insurance',
    'EV Stations',
    'Expert Support',
  ]

  return (
    <div className="w-full overflow-hidden py-4 md:py-5" style={{ backgroundColor: '#F0FAF5' }}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
      `}</style>
      <div className="marquee-track flex gap-3 md:gap-4 w-max">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
              className={`${microgrammaBold.className} flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap text-sm md:text-base`}
            style={{
              background: 'linear-gradient(to right, #9EEFDA 0%, #B8F4E7 35%, #D2F9F0 70%, #EAFDF8 100%)',
              color: '#124E45',
              border: '1px solid #8EDCCB',
            }}
          >
            <span className="text-xs">✦</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}