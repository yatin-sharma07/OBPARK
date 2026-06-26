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
<<<<<<< HEAD
    <div className="w-full overflow-hidden py-5" style={{ backgroundColor: '#f0fdf9' }}>
=======
    <div className="w-full overflow-hidden py-4 md:py-5" style={{ backgroundColor: '#F0FAF5' }}>
>>>>>>> 3944446130e51b4e0c3eef275cdb436c87727b5a
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
      `}</style>
<<<<<<< HEAD
      <div className="marquee-track flex gap-4 w-max">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap shrink-0"
            style={{
              backgroundColor: i % 3 === 0 ? '#074139' : i % 3 === 1 ? '#A2F1DF' : 'white',
              color: i % 3 === 0 ? '#A2F1DF' : '#074139',
              border: '1px solid #A2F1DF',
=======
      <div className="marquee-track flex gap-3 md:gap-4 w-max">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
              className={`${microgrammaBold.className} flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap text-sm md:text-base`}
            style={{
              background: 'linear-gradient(to right, #9EEFDA 0%, #B8F4E7 35%, #D2F9F0 70%, #EAFDF8 100%)',
              color: '#124E45',
              border: '1px solid #8EDCCB',
>>>>>>> 3944446130e51b4e0c3eef275cdb436c87727b5a
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