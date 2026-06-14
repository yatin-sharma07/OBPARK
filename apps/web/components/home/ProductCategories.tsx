import Link from 'next/link'

const CATEGORIES = [
  {
    title: 'EV (Electric Vehicle) Accessories',
    slug: 'ev-accessories',
    items: [
      { name: '7.5 kW Portable EV Charger', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=200&q=80' },
      { name: 'Charging Cable holders', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80' },
      { name: 'Portable EV Charging kit', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=200&q=80' },
      { name: 'EV Screen Protector', img: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=200&q=80' },
      { name: 'Tesla-style Accessories', img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&q=80' },
      { name: 'Battery Monitoring tools', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200&q=80' },
    ],
  },
  {
    title: 'Exterior Accessories',
    slug: 'accessories',
    items: [
      { name: 'Alloy Wheel Covers', img: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=200&q=80' },
      { name: 'Chrome garnish kits', img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=200&q=80' },
      { name: 'Car wraps', img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=200&q=80' },
      { name: 'Spoilers', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&q=80' },
      { name: 'Window visors', img: 'https://images.unsplash.com/photo-1471479917193-f00955256257?w=200&q=80' },
      { name: 'Roof rails', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=200&q=80' },
    ],
  },
  {
    title: 'Electronics & Smart Gadgets',
    slug: 'electrical',
    items: [
      { name: 'Jump Starters', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200&q=80' },
      { name: 'Tyre inflators', img: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=200&q=80' },
      { name: 'Towing Ropes', img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=200&q=80' },
      { name: 'Emergency tool kits', img: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=200&q=80' },
      { name: 'First aid kits', img: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=200&q=80' },
      { name: 'Portable battery charger', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=200&q=80' },
    ],
  },
  {
    title: 'Emergency & Utility Products',
    slug: 'accessories',
    items: [
      { name: 'Dash cams', img: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=200&q=80' },
      { name: 'Android infotainment system', img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&q=80' },
      { name: 'Reverse Parking Camera', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=200&q=80' },
      { name: 'Tyre pressure monitoring system', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80' },
      { name: 'Car GPS tracker', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&q=80' },
      { name: 'Portable Vacuum Cleaner', img: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=200&q=80' },
    ],
  },
]

export function ProductCategories() {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-[52px] py-12 md:py-16 mx-auto max-w-[1700px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {CATEGORIES.map((cat) => (
          <div key={cat.title} className="bg-white rounded-3xl p-4 sm:p-6 border border-gray-100 shadow-sm flex flex-col gap-8 md:gap-12">
            <h3
              className="text-base sm:text-lg md:text-2xl leading-none"
              style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, color: '#074139' }}
            >
              {cat.title}
            </h3>
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {cat.items.slice(0, 3).map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-2">
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <span
                      className="text-[10px] sm:text-xs md:text-sm leading-none text-center"
                      style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, color: '#074139' }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {cat.items.slice(3, 6).map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-2">
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <span
                      className="text-[10px] sm:text-xs md:text-sm leading-none text-center"
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
              className="text-sm sm:text-base md:text-xl leading-none"
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