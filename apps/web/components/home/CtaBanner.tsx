'use client'
import { useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'

export function CtaBanner() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  return (
    <section className="py-6 px-4 md:px-[50px]">

      <div
        className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between w-full min-h-[550px] rounded-[20px] bg-black"
      >
        
        <div
          className="absolute inset-0 opacity-50 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200&q=80")'
          }}
        />

        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full px-4 md:px-10 gap-10 lg:gap-8">

          
          <div className="flex flex-col gap-58 max-w-xl text-center lg:text-left">

            <h2
              className={`${microgrammaBold.className} text-white font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight`}
            >
              It's time to take control.<br />Ready to break free?
            </h2>

            <p
              className="text-white font-normal text-base sm:text-lg md:text-[24px] leading-relaxed"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              Unhealthy eating made less tempting, with science. Claim your 15% discount today.
            </p>

          </div>

          
          <div
            className="w-full max-w-[460px] h-auto lg:h-[450px] bg-[#F0F9F5] rounded-[30px] p-6 md:p-[46px]"
          >

            <div className="flex flex-col gap-8 w-full">

              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                <div>
                  <label className="block text-[#074139] text-base sm:text-lg font-medium"
                    style={{ fontFamily: 'var(--font-michroma) ' }}>
                    First Name
                  </label>

                  <input
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    className="w-full mt-1 px-3 py-3 border-b border-gray-300 bg-transparent text- focus:outline-none focus:border-[#074139]"
                  />
                </div>

                <div>
                  <label className="block text-[#074139] text-base sm:text-lg font-medium"
                    style={{ fontFamily: 'var(--font-michroma)' }}>
                    Last Name
                  </label>

                  <input
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    className="w-full mt-1 px-3 py-3 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-[#074139]"
                  />
                </div>

              </div>

              
              <div>
                <label
                  className="block text-[#074139] text-base sm:text-lg font-medium"
                  style={{ fontFamily: 'var(--font-michroma)' }}
                >
                  Email Id
                </label>

                <input
                  placeholder="Email Id"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full mt-1 px-3 py-3 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-[#074139]"
                />
              </div>

              
              <div>
                <label
                  className="block text-[#074139] text-base sm:text-lg font-medium"
                  style={{ fontFamily: 'var(--font-michroma)' }}
                >
                  Phone Number
                </label>

                <input
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full mt-1 px-3 py-3 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-[#074139]"
                />
              </div>

              
              <button
                   className={`${microgrammaBold.className} w-full py-3 bg-[#074139] text-white rounded-full text-[14px]`}>
              Submit
              </button>

            </div>
          </div>

        </div>
      </div>

      
      <div className="mt-20 md:mt-30 mb-26 text-center px-4">

        <p
          className="text-[32px] leading-none text-[#4B545A]"
    style={{ fontFamily: 'var(--font-michroma)' }}
        >
          Your journey to better health starts here.
        </p>

        <h2
          className={`${microgrammaBold.className} mt-12 whitespace-nowrap text-[40px] leading-none text-[#074139] font-bold`}
        >
          Small Change, Big Impact
        </h2>

      </div>

    </section>
  )
}