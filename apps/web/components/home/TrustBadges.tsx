import { microgrammaBold } from '@/lib/fonts'

const BADGES = [
  'Smart Parking, Real-time occupancy',
  'AR Navigation Intuitive wayfinding',
  'Vehicle Services',
  'Vehicle products and accessories.',
  'Customer journey analysis',
  'Unified facility control.',
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
                key={badge}
                className="
                  relative
                  flex
                  items-center
                  gap-2.5
                  sm:gap-3
                  md:gap-4

                  h-[46px]
                  sm:h-[58px]
                  md:h-[78px]

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
                    h-[34px]
                    w-[34px]
                    sm:h-[42px]
                    sm:w-[42px]
                    md:h-[50px]
                    md:w-[50px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D8F4EC]
                  "
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="
                      h-[21px]
                      w-[21px]
                      sm:h-[25px]
                      sm:w-[25px]
                      md:h-[29px]
                      md:w-[29px]
                    "
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
                    text-[11px]
                    sm:text-[15px]
                    md:text-[21px]
                    lg:text-[22px]
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
            The Parking Problem Nobody Talks About
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
            Transforms parking from a friction <br />
            point into a seamless experience.
          </h2>
        </div>
      </div>
    </section>
  )
}