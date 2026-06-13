'use client'
import { useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'
export function CtaBanner() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' })
  

  return (
    <section className="py-6" style={{ padding: '0 50px' }}>
      <div className="relative overflow-hidden flex items-center justify-between" style={{ width: '100%', height: '550px', borderRadius: '20px', background: '#000000' }}>
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }} />

        <div className="relative z-10 flex flex-row items-center justify-between w-full px-10 gap-8">
          <div className="flex flex-col gap-45 max-w-xl">
            <h2 className={microgrammaBold.className} style={{ fontWeight: 700, fontSize: ' 40px', lineHeight: '100%', color: '#ffffff',letterSpacing: '10%' }}>
              It's time to take control.<br />Ready to break free?
            </h2>
            <p style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400, fontSize: '24px', lineHeight: '50px', letterSpacing: '0', color: '#FFFFFF' }}>
              Unhealthy eating made less tempting, with science. Claim your 15% discount today.
            </p>
          </div>

          <div style={{ width: '460px', height: '450px', borderRadius: '30px', backgroundColor: '#F0F9F5', padding: '46px 29px', flexShrink: 0 }}>
            <div className="flex flex-col" style={{ width: '402px', gap: '40px' }}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label style={{ fontFamily: 'var(--font-michroma)', fontWeight: 500, fontSize: '20px', lineHeight: '100%', color: '#074139' }}>First Name</label>
                  <input placeholder="First Name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full mt-1 px-4 py-3 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-[#074139]" />
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-michroma)', fontWeight: 500, fontSize: '20px', lineHeight: '100%', color: '#074139' }}>Last Name</label>
                  <input placeholder="Last Name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full mt-1 px-4 py-3 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-[#074139]" />
                </div>
              </div>
              <div>
                <label style={{ fontFamily: 'var(--font-michroma)', fontWeight: 500, fontSize: '20px', lineHeight: '100%', color: '#074139' }}>Email Id</label>
                <input placeholder="First Name" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full mt-1 px-4 py-3 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-[#074139]" />
              </div>
              <div>
                <label style={{ fontFamily: 'var(--font-michroma)', fontWeight: 500, fontSize: '20px', lineHeight: '100%', color: '#074139' }}>Phone Number</label>
                <input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full mt-1 px-4 py-3 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-[#074139]" />
              </div>
              <button className={microgrammaBold.className} style={{ backgroundColor: '#074139', borderRadius: '50px', fontWeight: 400, fontSize: '24px', letterSpacing: '0',color:' #FFFFFF' }}>
               Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 md:mt-30 mb-26 text-center px-4">
          <p className="text-gray-500 text-base md:text-lg font-400"
          style={{
            
    fontFamily: 'var(--font-michroma)',
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#4B545A',
            
          }}
          >
            Your journey to better health starts here.
          </p>
          <h2
  className={`${microgrammaBold.className} mt-3 whitespace-nowrap`}
  style={{
    
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#074139',
  }}
>
  Small Change, Big Impact
</h2>
        </div>
    </section>
  )
}