'use client'

import { useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'

export function CtaBanner() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  return (
    <section className="py-4 px-4 sm:px-6 md:px-8">
      <div className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between w-full min-h-[460px] rounded-[16px] bg-black mx-auto">
        <div
          className="absolute inset-0 opacity-50 bg-cover bg-center"
          style={{ backgroundImage: 'url("/Images/banner/bannerpic.png")' }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full px-4 md:px-7 py-7 lg:py-0 gap-7 lg:gap-6 h-full">
          <div className="flex flex-col gap-4 max-w-3xl text-center lg:text-left lg:h-[360px] justify-between">
            <h2
              className={`
                ${microgrammaBold.className}
                text-white
                font-bold
                text-lg
                sm:text-2xl
                md:text-[30px]
                leading-tight
                tracking-[0.16em]
              `}
            >
              It&apos;s time to move smarter.
              <br />
              Ready for the future?
            </h2>

            <p
              className="
                text-white
                font-normal
                text-sm
                sm:text-[15px]
                md:text-[18px]
                leading-relaxed
                tracking-[0.11em]
              "
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              Experience seamless mobility powered by intelligent solutions.
              Transform your journey with smarter spaces today.
            </p>
          </div>

          <div className="w-full max-w-[370px] bg-[#F0F9F5] rounded-[22px] p-4 md:p-7 shrink-0">
            <div className="flex flex-col gap-5 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    className="block text-[#074139] text-[13px] sm:text-[15px] font-medium"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    First Name
                  </label>
                  <input
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    className="w-full mt-1 px-2 py-2 border-b border-gray-300 bg-transparent text-[13px] focus:outline-none focus:border-[#074139]"
                  />
                </div>

                <div>
                  <label
                    className="block text-[#074139] text-[13px] sm:text-[15px] font-medium"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    Last Name
                  </label>
                  <input
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    className="w-full mt-1 px-2 py-2 border-b border-gray-300 bg-transparent text-[13px] focus:outline-none focus:border-[#074139]"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-[#074139] text-[13px] sm:text-[15px] font-medium"
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
                  className="w-full mt-1 px-2 py-2 border-b border-gray-300 bg-transparent text-[13px] focus:outline-none focus:border-[#074139]"
                />
              </div>

              <div>
                <label
                  className="block text-[#074139] text-[13px] sm:text-[15px] font-medium"
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
                  className="w-full mt-1 px-2 py-2 border-b border-gray-300 bg-transparent text-[13px] focus:outline-none focus:border-[#074139]"
                />
              </div>

              <button
                className={`
                  ${microgrammaBold.className}
                  w-full
                  py-2
                  bg-[#074139]
                  text-white
                  rounded-full
                  text-[12px]
                `}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 md:mt-20 text-center px-4">
        <p
          className="text-sm sm:text-lg md:text-[18px] leading-none text-[#4B545A]"
          style={{ fontFamily: 'var(--font-michroma)' }}
        >
          The Future of Intelligent Mobility.
        </p>

        <h2
          className={`
            ${microgrammaBold.className}
            mt-5
            md:mt-8
            text-lg
            sm:text-2xl
            md:text-[36px]
            leading-none
            text-[#074139]
            font-bold
          `}
        >
          Tomorrow Moves Smarter
        </h2>
      </div>
    </section>
  )
}