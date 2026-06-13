import Link from 'next/link'
import { microgrammaBold } from '@/lib/fonts'
export function MintCta() {
  return (
    <section className="relative overflow-hidden flex items-center justify-between" style={{ width: '1350px', height: '580px', background: 'linear-gradient(135deg, #62E5CE 0%, #AFFFEF 35%, #A6FDEB 70%, #5DE3CA 100%)', display: 'flex', alignItems: 'center',borderRadius: '30px', margin: '0 auto', marginTop: '50px' }}>
      <div className="flex flex-col" style={{ width: '625px', gap: '58px', marginTop: '205px', marginLeft: '64px' }}>
        <div className="flex flex-col" style={{ gap: '16px' }}>
          <h2 className={microgrammaBold.className} style={{ fontWeight: 700, fontSize: '48px', lineHeight: '100%', letterSpacing: '10%', color: '#074139' }}>
            Balance is within your reach
          </h2>
          <p style={{ fontFamily: 'var(--font-michroma)', fontWeight: 500, fontSize: '40px', lineHeight: '100%', letterSpacing: '0%', color: '#FFFFFF' }}>
  It's time to unlock it
</p>
        </div>
       <Link href="/products" className="inline-flex items-center justify-center hover:shadow-md transition-shadow" style={{ width: '489px', height: '76px', borderRadius: '20px', backgroundColor: '#FFFFFF', border: '0.5px solid #074139', padding: '10px', gap: '10px', fontFamily: 'var(--font-michroma)', fontWeight: 400, fontSize: '24px', lineHeight: '100%', color: '#074139' }}>
           Explore more about obpark
       </Link>
      </div>
    </section>
  )
}