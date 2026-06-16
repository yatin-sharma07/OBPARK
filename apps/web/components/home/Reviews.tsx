import { microgrammaBold } from '@/lib/fonts'

const REVIEWS = [
  { name: 'Pavan Reddy', duration: '3 Months', text: 'Obpark has completely changed how I manage my car. FASTag recharge and genuine parts all in one place — saved me so much time!' },
  { name: 'Yatin Sharma', duration: '3 Months', text: 'The vehicle health score feature is amazing. I knew exactly when my insurance was expiring before it even happened. Highly recommend.' },
  { name: 'Shivanshu', duration: '3 Months', text: 'Ordered brake pads for my Creta and they were delivered in 2 days. The compatibility check made sure I got exactly the right part.' },
  
]

export function Reviews() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-[123px] py-12 md:py-20">
      <div className="flex flex-col gap-12 md:gap-20">

        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <p
            className="text-base sm:text-lg md:text-2xl leading-none text-center"
            style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, color: '#4B545A' }}
          >
            Stories worth sharing
          </p>
          <h2
            className={`${microgrammaBold.className} text-2xl sm:text-4xl md:text-5xl lg:text-[60px] text-center`}
            style={{ fontWeight: 700, color: '#074139', lineHeight: '1.2' }}
          >
            Why Obpark makes a difference
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((review) => (
            <div key={review.name} className="w-full max-w-[380px] mx-auto rounded-[20px] bg-white overflow-hidden min-h-[400px] md:min-h-[575px]">
              <div className="w-full h-40 sm:h-52 md:h-[300px] rounded-t-[20px]" style={{ backgroundColor: '#CAEDE5' }} />
              <div className="p-4 sm:p-6 flex flex-col gap-4 md:gap-5">
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg md:text-xl" style={{ color: '#FACC15' }}>★</span>
                    ))}
                  </div>
                  <span
                    className="text-sm md:text-base"
                    style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, color: '#4B545A' }}
                  >
                    {review.duration}
                  </span>
                </div>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, color: '#4B545A' }}
                >
                  "{review.text}"
                </p>
                <p
                  className={`${microgrammaBold.className} text-base md:text-lg`}
                  style={{ fontWeight: 700, color: '#074139' }}
                >
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
} 