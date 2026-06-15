'use client'
import { microgrammaBold } from '@/lib/fonts'
import { useState } from 'react'
import Link from 'next/link'

export function Footer() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' })

  return (
    <footer className="px-4 sm:px-8 md:px-[50px] pb-6">
      <div className="rounded-[30px] p-6 sm:p-8 md:p-10" style={{ background: 'linear-gradient(180deg, #CAEDE5 0%, #59D0B5 100%)' }}>

        <div className="flex items-center justify-between pb-8 mb-8 border-b border-[#074139]/30">
          <span
            className={`${microgrammaBold.className} text-3xl sm:text-4xl md:text-[56px] leading-none`}
            style={{ color: '#074139' }}
          >
            OBPARK<sup style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.45em', verticalAlign: 'super', marginLeft: '2px' }}>©</sup>
          </span>

          <div className="flex items-center gap-2 sm:gap-3">
            {[
              { label: 'Instagram', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg> },
              { label: 'Facebook', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
              { label: 'WhatsApp', icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor"><path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.737 5.49 2.027 7.8L0 32l8.43-2.01A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.486-.29-5.007 1.194 1.151-4.872-.317-.5A13.226 13.226 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.35-1.159-2.714-1.292-.363-.132-.627-.198-.891.199-.264.397-1.023 1.292-1.254 1.556-.23.265-.462.298-.86.1-.397-.2-1.677-.618-3.193-1.97-1.18-1.053-1.977-2.352-2.208-2.75-.23-.397-.024-.612.173-.81.178-.177.397-.464.596-.695.198-.232.264-.398.397-.663.132-.265.066-.497-.033-.696-.1-.199-.892-2.149-1.222-2.944-.322-.773-.648-.668-.891-.68-.23-.012-.497-.015-.762-.015-.265 0-.695.1-1.059.497-.364.397-1.39 1.358-1.39 3.313 0 1.955 1.423 3.843 1.621 4.108.199.265 2.8 4.274 6.785 5.995.948.409 1.688.653 2.264.835.951.302 1.816.26 2.5.158.762-.114 2.35-.96 2.682-1.888.33-.928.33-1.723.23-1.888-.099-.165-.363-.265-.761-.464z"/></svg> },
            ].map((s) => (
              <button key={s.label} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: 'rgba(7,65,57,0.12)', color: '#074139' }}>
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[180px_180px_1fr] gap-8 md:gap-6">
          <div>
            <p className={`${microgrammaBold.className} mb-4 md:mb-6 text-lg md:text-2xl leading-none`} style={{ color: '#074139' }}>About</p>
            <div className="space-y-3">
              {['Home', 'About', 'Shop'].map((item) => (
                <Link key={item} href="/" className="block hover:opacity-70 transition-opacity text-sm" style={{ color: '#074139', fontFamily: 'var(--font-michroma)' }}>{item}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className={`${microgrammaBold.className} mb-4 md:mb-6 text-lg md:text-2xl leading-none`} style={{ color: '#074139' }}>Support</p>
            <div className="space-y-3">
              {['FAQs', 'Shipping Policy', 'Refund Policy', 'My Account', 'Contact'].map((item) => (
                <Link key={item} href="/" className="block hover:opacity-70 transition-opacity text-sm" style={{ color: '#074139', fontFamily: 'var(--font-michroma)' }}>{item}</Link>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-1 md:justify-self-end">
            <p className={`${microgrammaBold.className} mb-4 md:mb-6 text-lg md:text-2xl leading-none`} style={{ color: '#074139' }}>Subscribe to our newsletter</p>
            <div className="w-full md:w-[460px] rounded-xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1" style={{ color: '#074139', fontFamily: 'var(--font-michroma)' }}>First Name</label>
                  <input placeholder="First Name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full px-3 py-2 rounded-lg text-xs   border-0 focus:outline-none focus:ring-1 focus:ring-[#074139]" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }} />
                </div>
                <div>
                  <label className="block text-xs mb-1" style={{ color: '#074139', fontFamily: 'var(--font-michroma)' }}>Last Name</label>
                  <input placeholder="Last Name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full px-3 py-2 rounded-lg text-xs border-0 focus:outline-none focus:ring-1 focus:ring-[#074139]" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }} />
                </div>
              </div>
              <div>
                <label className="block text-xs mb-1" style={{ color: '#074139', fontFamily: 'var(--font-michroma)' }}>Email Id</label>
                <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2 rounded-lg text-xs border-0 focus:outline-none focus:ring-1 focus:ring-[#074139]" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }} />
              </div>
              <button
                className={`${microgrammaBold.className} w-full py-3 rounded-full text-sm transition-opacity hover:opacity-90`}
                style={{ backgroundColor: '#074139', color: '#FFFFFF', fontSize: '14px' }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-1">
          <Link href="/" className="block text-xs hover:opacity-70" style={{ color: '#074139', fontFamily: 'var(--font-michroma)' }}>Privacy Policy</Link>
          <Link href="/" className="block text-xs hover:opacity-70" style={{ color: '#074139', fontFamily: 'var(--font-michroma)' }}>Terms & Condition</Link>
          <p className="text-xs mt-2 text-base" style={{ color: '#CAEDE5', fontFamily: 'var(--font-michroma)', fontSize: '16px' }}>© OBPARK All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}