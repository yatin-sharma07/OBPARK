import { microgrammaBold } from '@/lib/fonts'


const BADGES = [
  'Genuine Parts Guaranteed',
  'RC Verified Vehicles',
  'FASTag Certified',
  'Secure Payments',
  'Pan India Delivery',
  'Expert Support',
]

const rotations = [-2, 2, -2, 2, -2, 2]

export function TrustBadges() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-xl mx-auto flex flex-col items-center">

        {BADGES.map((badge, i) => (
         <div
  key={badge}
  className="flex items-center"
  style={{
    width: '672px',
    height: '80px',
    borderRadius: '8px',
    padding: '10px 16px',
    gap: '10px',
    transform: `rotate(${rotations[i]}deg)`,
    marginTop: i === 0 ? 0 : '8px',
    zIndex: BADGES.length - i,
    background: ['#B0E5CC','#95D9C0','#7ACCB4','#5DBEA7','#3DA09A','#167D7F'][i],
  }}
>
            <div
              className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/70 flex items-center justify-center shrink-0"
              style={{ background: 'rgba(255,255,255,0.18)' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 4v16M4 12h16M7 7l10 10M17 7L7 17" />
              </svg>
            </div>
           <span
  style={{
    color: '#133b3b',
    fontFamily: 'var(--font-michroma)',
    fontSize: '22px',
    fontWeight: 400,
    lineHeight: '100%',
    letterSpacing: '0%',
  }}
>
  {badge}
</span>
          </div>
        ))}

        <div className="mt-16 md:mt-28 text-center px-4">
          <p className="text-gray-500 text-base md:text-lg font-400"
          style={{
            
    fontFamily: 'var(--font-michroma)',
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#4B545A',
            
          }}
          >
            Trusted by Indian Vehicle Owners
          </p>
          <h2
  className={`${microgrammaBold.className} mt-3 whitespace-nowrap`}
  style={{
    
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#074139',
  }}
>
  One platform for everything your vehicle needs
</h2>
        </div>
      </div>
    </section>
  )
}