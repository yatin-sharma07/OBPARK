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
    <div className="w-full overflow-hidden py-5" style={{ backgroundColor: '#f0fdf9' }}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
      `}</style>
      <div className="marquee-track flex gap-4 w-max">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap shrink-0"
            style={{
              backgroundColor: i % 3 === 0 ? '#074139' : i % 3 === 1 ? '#A2F1DF' : 'white',
              color: i % 3 === 0 ? '#A2F1DF' : '#074139',
              border: '1px solid #A2F1DF',
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