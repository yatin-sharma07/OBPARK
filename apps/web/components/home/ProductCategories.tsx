import Link from 'next/link'

const CATEGORIES = [
  {
    title: 'EV (Electric Vehicle) Accessories',
    slug: 'ev-accessories',
    items: [
      { name: '7.5 kW Portable EV Charger', img: '/images/box1/box1pic1.png' },
      { name: 'Charging Cable holders', img: '/images/box1/box1pic2.png' },
      { name: 'Portable EV Charging kit', img: '/images/box1/box1pic3.png' },
      { name: 'EV Screen Protector', img: '/images/box1/box1pic4.png' },
      { name: 'Tesla-style Accessories', img: '/images/box1/box1pic5.png' },
      { name: 'Battery Monitoring tools', img: '/images/box1/box1pic6.png' },
    ],
  },
  {
    title: 'Exterior Accessories',
    slug: 'accessories',
    items: [
      { name: 'Alloy Wheel Covers', img: '/images/box2/pic1.png' },
      { name: 'Chrome garnish kits', img: '/images/box2/pic2.png' },
      { name: 'Car wraps', img: '/images/box2/pic3.png' },
      { name: 'Spoilers', img: '/images/box2/pic4.png' },
      { name: 'Window visors', img: '/images/box2/pic5.png' },
      { name: 'Roof rails', img: '/images/box2/pic6.png' },
    ],
  },
  {
    title: 'Electronics & Smart Gadgets',
    slug: 'electrical',
    items: [
      { name: 'Jump Starters', img: '/images/box3/pic1.png' },
      { name: 'Tyre inflators', img: '/images/box3/pic2.png' },
      { name: 'Towing Ropes', img: '/images/box3/pic3.png' },
      { name: 'Emergency tool kits', img: '/images/box3/pic4.png' },
      { name: 'First aid kits', img: '/images/box3/pic5.png' },
      { name: 'Portable battery charger', img: '/images/box3/pic6.png' },
    ],
  },
  {
    title: 'Emergency & Utility Products',
    slug: 'accessories',
    items: [
      { name: 'Dash cams', img: '/images/box4/pic1.png' },
      { name: 'Android infotainment system', img: '/images/box4/pic2.png' },
      { name: 'Reverse Parking Camera', img: '/images/box4/pic3.png' },
      { name: 'Tyre pressure monitoring system', img: '/images/box4/pic4.png' },
      { name: 'Car GPS tracker', img: '/images/box4/pic5.png' },
      { name: 'Portable Vacuum Cleaner', img: '/images/box4/pic6.png' },
    ],
  },
]

export function ProductCategories() {
  return (
    <section className="py-12 md:py-16 mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CATEGORIES.map((cat) => (
          <div key={cat.title} className="bg-white w-full h-auto md:h-[700px] rounded-[30px] p-6 sm:p-8 pt-8 sm:pt-12 pb-6 sm:pb-8 border border-gray-100 shadow-sm flex flex-col gap-8 md:gap-14">
            <h3
              className="text-base sm:text-lg md:text-2xl leading-none"
              style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, color: '#074139' }}
            >
              {cat.title}
            </h3>
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-14">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-7">
                {cat.items.slice(0, 3).map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-center gap-2 w-full h-auto aspect-square sm:w-[180px] sm:h-[180px] border border-[#ECECEC]"
                  >
                    <div className="w-[80%] sm:w-[126px] h-[60%] sm:h-[125px] rounded-none overflow-hidden bg-gray-50">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span
                      className="h-auto sm:h-[40px] flex items-center justify-center text-center text-[10px] sm:text-[13px] md:text-[16px] leading-tight sm:leading-none px-1"
                      style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, color: '#074139' }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8">
                {cat.items.slice(3, 6).map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-center gap-2 w-full h-auto aspect-square sm:w-[180px] sm:h-[180px] border border-[#ECECEC]"
                  >
                    <div className="w-[80%] sm:w-[126px] h-[60%] sm:h-[125px] rounded-none overflow-hidden bg-gray-50">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span
                      className="h-auto sm:h-[40px] flex items-center justify-center text-center text-[10px] sm:text-[13px] md:text-[16px] leading-tight sm:leading-none px-1"
                      style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, color: '#074139' }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href={`/products?category=${cat.slug}`}
              className="text-base sm:text-lg md:text-[20px] leading-none"
              style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, color: '#308F8A' }}
            >
              Explore all
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}