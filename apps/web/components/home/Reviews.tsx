import { microgrammaBold } from '@/lib/fonts'
const REVIEWS = [
  { name: 'Rahul Sharma', duration: '3 Months', text: 'Obpark has completely changed how I manage my car. FASTag recharge and genuine parts all in one place — saved me so much time!' },
  { name: 'Priya Nair', duration: '3 Months', text: 'The vehicle health score feature is amazing. I knew exactly when my insurance was expiring before it even happened. Highly recommend.' },
  { name: 'Amit Patel', duration: '3 Months', text: 'Ordered brake pads for my Creta and they were delivered in 2 days. The compatibility check made sure I got exactly the right part.' },
]

export function Reviews() {
  return (
    <section style={{ padding: '0 123px', paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="flex flex-col" style={{ gap: '80px' }}>

        <div className="flex flex-col items-center" style={{ gap: '8px' }}>
          <p style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, fontSize: '24px', lineHeight: '40px', letterSpacing: '0%', color: '#4B545A', textAlign: 'center' }}>Stories worth sharing</p>
          <h2 className={microgrammaBold.className} style={{ fontWeight: 700, fontSize: '60px', lineHeight: '40px', letterSpacing: '0%', color: '#074139', textAlign: 'center' }}>Why Obpark makes a difference</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '32px' }}>
          {REVIEWS.map((review) => (
            <div key={review.name} style={{ width: '100%', minHeight: '675px', borderRadius: '20px', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
  <div style={{ width: '100%', height: '300px', borderRadius: '20px 20px 0 0', backgroundColor: '#CAEDE5' }} />
  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: '#FACC15', fontSize: '20px' }}>★</span>
        ))}
      </div>
      <span style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, fontSize: '16px', color: '#4B545A' }}>{review.duration}</span>
    </div>
    <p style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, fontSize: '16px', lineHeight: '28px', color: '#4B545A' }}>"{review.text}"</p>
    <p className={microgrammaBold.className} style={{ fontWeight: 700, fontSize: '18px', color: '#074139' }}>{review.name}</p>
  </div>
</div>
          ))}
        </div>

      </div>
    </section>
  )
}