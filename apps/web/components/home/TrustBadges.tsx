import { microgrammaBold } from '@/lib/fonts'

const BADGES = [
  'Genuine Parts Guaranteed',
  'RC Verified Vehicles',
  'FASTag Certified',
  'Secure Payments',
  'Pan India Delivery',
  'Expert Support',
]

const badgeStyles = [
  {
    color: '#B0E5CC',
    rotate: '-0.2deg',
    width: '92%',
    marginLeft: '0%',
    zIndex: 5,
  },
  {
    color: '#95D9C0',
    rotate: '-2.5deg',
    width: '93%',
    marginLeft: '0.5%',
    zIndex: 6,
  },
  {
    color: '#7ACCB4',
    rotate: '3deg',
    width: '94%',
    marginLeft: '1%',
    zIndex: 7,
  },
  {
    color: '#5DBEA7',
    rotate: '-3.7deg',
    width: '96%',
    marginLeft: '5%',
    zIndex: 8,
  },
  {
    color: '#3DA09A',
    rotate: '2deg',
    width: '93%',
    marginLeft: '0%',
    zIndex: 9,
  },
  {
    color: '#167D7F',
    rotate: '0deg',
    width: '94%',
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
        py-14
        sm:py-16
        md:py-24
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[760px]
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
                key={badge}
                className="
                  relative
                  flex
                  items-center
                  gap-3
                  sm:gap-4

                  h-[50px]
                  sm:h-[65px]
                  md:h-[90px]

                  rounded-[6px]
                  sm:rounded-[7px]
                  md:rounded-[8px]

                  px-3
                  sm:px-4
                  md:px-5

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
    h-[40px]
    w-[40px]
    sm:h-[48px]
    sm:w-[48px]
    md:h-[56px]
    md:w-[56px]
    shrink-0
    items-center
    justify-center
    rounded-full
    bg-[#D8F4EC]
  "
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px]"
                  >
                    <path
                      d="M12 2.7L20 7.3V16.7L12 21.3L4 16.7V7.3L12 2.7Z"
                      stroke="#074139"
                      strokeWidth="1.1"
                    />
                    <path d="M12 2.7V21.3" stroke="#074139" strokeWidth="1.1" />
                    <path d="M4 7.3L20 16.7" stroke="#074139" strokeWidth="1.1" />
                    <path d="M20 7.3L4 16.7" stroke="#074139" strokeWidth="1.1" />

                  </svg>
                </div>

                <span
                  className="
                    block
                    min-w-0
                    truncate
                    text-[12px]
                    sm:text-[17px]
                    md:text-[24px]
                    lg:text-[26px]
                    leading-none
                    tracking-[0.01em]
                    text-[#074139]
                  "
                  style={{
                    fontFamily: 'var(--font-michroma)',
                    fontWeight: 400,
                  }}
                >
                  {badge}
                </span>
              </div>
            )
          })}
        </div>

        <div className="mt-16 md:mt-28 text-center px-3">
          <p
            className="
              whitespace-nowrap
              text-[clamp(12px,2vw,32px)]
              leading-none
            "
            style={{
              fontFamily: 'var(--font-michroma)',
              fontWeight: 400,
              color: '#4B545A',
            }}
          >
            Trusted by Indian Vehicle Owners
          </p>

          <h2
            className={`
              ${microgrammaBold.className}
              mt-3
              whitespace-nowrap
              text-[clamp(16px,2.8vw,40px)]
              leading-none
            `}
            style={{
              fontWeight: 700,
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