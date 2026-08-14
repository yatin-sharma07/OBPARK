import { microgrammaBold } from '@/lib/fonts'
import { MapPin, Settings, ShoppingBag, TrendingUp, LayoutGrid } from 'lucide-react'

const ParkingIcon = ({ className, strokeWidth }: { className?: string, strokeWidth?: number | string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || "2"} strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
  </svg>
)

const BADGES = [
  { text: 'GPS - Free Indoor Navigation', Icon: ParkingIcon },
  { text: 'AI Parking Intelligence', Icon: MapPin },
  { text: 'Vehicle Locator', Icon: Settings },
  { text: 'Digital Twin Mapping', Icon: ShoppingBag },
  { text: 'Smart Parking Navigation', Icon: TrendingUp },
  { text: 'Real-Time Occupancy', Icon: LayoutGrid },
]

const badgeStyles = [
  {
    color: '#B0E5CC',
    rotate: '-0.2deg',
    width: '90%',
    marginLeft: '0%',
    zIndex: 5,
  },
  {
    color: '#95D9C0',
    rotate: '-2.5deg',
    width: '91%',
    marginLeft: '0.5%',
    zIndex: 6,
  },
  {
    color: '#7ACCB4',
    rotate: '3deg',
    width: '92%',
    marginLeft: '1%',
    zIndex: 7,
  },
  {
    color: '#5DBEA7',
    rotate: '-3.7deg',
    width: '94%',
    marginLeft: '4%',
    zIndex: 8,
  },
  {
    color: '#3DA09A',
    rotate: '2deg',
    width: '91%',
    marginLeft: '0%',
    zIndex: 9,
  },
  {
    color: '#167D7F',
    rotate: '0deg',
    width: '92%',
    marginLeft: '0%',
    zIndex: 10,
  },
]

export function TrustBadges() {
  return (
    <section
      className="
        w-full
        max-w-[100vw]
        overflow-hidden

        px-4
        sm:px-6
        md:px-8
        py-12
        sm:py-14
        md:py-5
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[720px]
          flex-col
          items-center
        "
      >
        <div
          className="
            relative
            flex
            w-full
            flex-col
            items-center
            px-1
            sm:px-3
            md:px-0
          "
        >
          {BADGES.map((badge, i) => {
            const style = badgeStyles[i]

            return (
              <div
                key={badge.text}
                className="
                  relative
                  flex
                  items-center
                  gap-3
                  sm:gap-4
                  md:gap-5

                  h-[52px]
                  sm:h-[64px]
                  md:h-[84px]

                  rounded-[16px]
                  sm:rounded-[20px]
                  md:rounded-[24px]

                  px-4
                  sm:px-5
                  md:px-7

                  shadow-none
                "
                style={{
                  backgroundColor: style.color,
                  transform: `rotate(${style.rotate})`,
                  width: style.width,
                  marginLeft: style.marginLeft,
                  marginTop: i === 0 ? '0px' : '-2px',
                  zIndex: style.zIndex,
                  transformOrigin: 'center',
                }}
              >
                <div
                  className="
                    flex
                    h-[38px]
                    w-[38px]
                    sm:h-[46px]
                    sm:w-[46px]
                    md:h-[56px]
                    md:w-[56px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D8F4EC]
                  "
                >
                  <badge.Icon
                    className="
                      h-[20px]
                      w-[20px]
                      sm:h-[24px]
                      sm:w-[24px]
                      md:h-[28px]
                      md:w-[28px]
                      text-[#074139]
                    "
                    strokeWidth={1.5}
                  />
                </div>

                <span
                  className={`
                    ${microgrammaBold.className}
                    block
                    min-w-0
                    truncate
                    text-[13px]
                    sm:text-[17px]
                    md:text-[23px]
                    lg:text-[25px]
                    leading-none
                    tracking-wide
                    text-white
                  `}
                >
                  {badge.text}
                </span>
              </div>
            )
          })}
        </div>

        <div className="mt-12 md:mt-35 text-center px-3">
          <p
            className="
              whitespace-nowrap
              text-[clamp(11px,1.8vw,21px)]
              leading-none
              mb-8
            "
            style={{
              fontFamily: 'var(--font-michroma)',
              fontWeight: 400,
              color: '#4B545A',
            }}
          >
            A Product By Obrive
          </p>

          <h2
            className={`
              ${microgrammaBold.className}
              mt-3
              whitespace-nowrap
              text-[clamp(15px,2.5vw,33px)]
              leading-none
            `}
            style={{
              fontWeight: 700,
              color: '#074139',
            }}
          >
            Why Enterprise Customers Choose OBPARK
            
          </h2>
        </div>
      </div>
    </section>
  )
}