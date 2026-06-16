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
const colors = ['#B0E5CC', '#95D9C0', '#7ACCB4', '#5DBEA7', '#3DA09A', '#167D7F']

export function TrustBadges() {
  return (
    <section className=" py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {BADGES.map((badge, i) => (
          <div
            key={badge}
            className="flex items-center w-full max-w-[672px] h-16 sm:h-20 rounded-lg px-3 sm:px-4 gap-2 sm:gap-3"
            style={{
              background: colors[i],
              transform: `rotate(${rotations[i]}deg)`,
              marginTop: i === 0 ? 0 : '8px',
              zIndex: BADGES.length - i,
            }}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/70 flex items-center justify-center shrink-0 bg-white/20">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 4v16M4 12h16M7 7l10 10M17 7L7 17" />
              </svg>
            </div>
            <span
              className="text-xs sm:text-sm md:text-lg lg:text-[22px] leading-none"
              style={{ color: '#133b3b', fontFamily: 'var(--font-michroma)', fontWeight: 400 }}
            >
              {badge}
            </span>
          </div>
        ))}

        <div className="mt-16 md:mt-28 text-center px-3">
          <p
  className="whitespace-nowrap text-[clamp(12px,2vw,32px)] leading-none"
  style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, color: '#4B545A' }}
>
  Trusted by Indian Vehicle Owners
</p>
          <h2
  className={`${microgrammaBold.className} mt-3 whitespace-nowrap text-[clamp(16px,2.8vw,40px)] leading-none`}
  style={{ fontWeight: 700, color: '#074139' }}
>
  One platform for everything your vehicle needs
</h2>
        </div>
      </div>
    </section>
  )
}