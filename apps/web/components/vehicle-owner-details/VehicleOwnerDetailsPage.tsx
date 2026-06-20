'use client'

import Link from 'next/link'
import { microgrammaBold } from '@/lib/fonts'
import Image from 'next/image'

const NAV_ITEMS = [
  { label: 'Fastag', href: '/fastag', icon: '/images/vehicledetails/navicons/fastag.png' },
  { label: 'New Cars', href: '/new-cars', icon: '/images/vehicledetails/navicons/newcar.png' },
  { label: 'Check Challan', href: '/check-challan', icon: '/images/vehicledetails/navicons/challan.png' },
  { label: 'PUC Certificate', href: '/puc-certificate', icon: '/images/vehicledetails/navicons/puc.png' },
  { label: 'Vehicle Owner Details', href: '/vehicle-owner-details', icon: '/images/vehicledetails/navicons/owner.png' },
  { label: 'Car Insurance', href: '/car-insurance', icon: '/images/vehicledetails/navicons/insurance.png' },
]

const WHY_CARDS = [
  {
    icon: 'images/vehicledetails/cards/cardpic1.png',
    text: 'Get instant, verified vehicle owner details online',
  },
  {
    icon: 'images/vehicledetails/cards/cardpic2.png',
    text: 'Check complete vehicle info in seconds',
  },
  {
    icon: 'images/vehicledetails/cards/cardpic3.png',
    text: 'Quick 2-step lookup for fast and reliable results',
  },
]

const FAQ_QUESTIONS = [
  'Can I check vehicle owner details using just the number plate?',
  'Can I check vehicle owner details using just the number plate?',
  'Can I check vehicle owner details using just the number plate?',
  'Can I check vehicle owner details using just the number plate?',
]

export function VehicleOwnerDetailsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden font-michroma mx-3 mt-3 mb-10 sm:mx-4 sm:mt-4 md:m-6 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-[720px] sm:min-h-[900px] h-auto md:h-[calc(100vh-48px)] max-h-none md:max-h-[1100px] bg-[#FFFFFF]"
        style={{ boxShadow: '0 4px 20px 0 rgba(22,125,127,0.10)' }}
      >
        <div className="relative z-10 h-[72px] sm:h-[78px] md:h-[100px]" />

        <div className="relative z-20 flex flex-col items-center px-4">

          <h1
            className={`${microgrammaBold.className} text-[#074139] text-center font-bold text-[28px] sm:text-[42px] md:text-[64px] leading-[100%] tracking-[0] max-w-[928px] mx-auto mt-8 md:mt-12`}
          >
            Vehicle Owner Details by Number Plate in India
          </h1>

          <form className="mt-8 md:mt-10 flex w-full max-w-[684px] h-auto md:h-[70px]">
            <div className="flex flex-1 items-center border border-[#074139]/20 rounded-l-[10px] bg-white overflow-hidden gap-3 h-[56px] md:h-[70px]">
              <div className="flex items-center justify-center w-12 h-full rounded-l-[10px] bg-[#1a1a2e] shrink-0">
                <Image
                  src="/images/vehicledetails/ind.png"
                  alt="India"
                  width={84}
                  height={70}
                />
              </div>
              <input
                type="text"
                placeholder="Enter Vehicle Number"
                className="flex-1 outline-none text-sm md:text-base text-[#074139] placeholder:text-gray-400 bg-transparent"
              />
            </div>
            <button
              type="submit"
              className={`${microgrammaBold.className} bg-[#074139] rounded-r-[10px] text-white font-bold text-sm md:text-[18px] px-3 md:px-8 h-[56px] md:h-[70px] whitespace-nowrap`}
            >
              Check Details
            </button>
          </form>

          <div className="relative mt-4 md:mt-6 w-full max-w-[722px] h-[180px] sm:h-[220px] md:h-[267px] mx-auto">
            <Image
  src="/images/vehicledetails/heropic.png"
  alt="Vehicles"
  fill
  sizes="(max-width: 768px) 100vw, 722px"
  className="object-contain"
/>
          </div>

          <p className={`${microgrammaBold.className} mt-4 md:mt-6 font-bold text-center text-[16px] md:text-[26px] leading-[100%] text-[#074139]`}>
            Explore Everything About Your Vehicle
          </p>

          
<div className="mt-10 md:mt-16 w-full">
  <div className="flex items-center flex-wrap justify-center gap-4 mx-auto px-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-[8px] border border-[#074139]/20 bg-white px-4 py-1 text-xs md:text-sm font-medium text-[#074139] hover:bg-[#f0fdf9]"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={40}
                    height={40}
                  />
                  <span>{item.label}</span>
                  <span className="text-[#074139]/60 text-2xl">›</span>
                </Link>
              ))}
            </div>
          </div>  


        </div>
      </section>

      {/* ── Why check vehicle owner details online ── */}
      <section className="px-4 md:px-8 py-12 md:py-16 max-w-[1500px] mx-auto">

        <h2
          className={`${microgrammaBold.className} text-center font-bold text-[22px] md:text-[36px] leading-[43px] tracking-[0] text-[#074139] mb-10 md:mb-14`}
        >
          Why check vehicle owner details online
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
          {WHY_CARDS.map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-start gap-6 p-6 md:p-8 bg-white rounded-[20px] border border-[#CECECE] text-center"
            >
              <div
                className="w-[80px] h-[80px] rounded-[10px] flex items-center justify-center shrink-0 bg-gradient-to-br from-[#CAEDE5] to-[#59D0B5] transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-1"
              >
                <img src={card.icon} alt={card.text} className="w-full h-full object-contain" />
              </div>

              <p className="font-medium text-[16px] md:text-[26px] leading-[43px] tracking-[0] text-[#074139] text-center">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ── How to find your vehicle owner details online ── */}
      <section className="px-4 md:px-8 py-8 md:py-12 max-w-[1500px] mx-auto">
        <h2
          className={`${microgrammaBold.className} text-center font-bold text-[22px] md:text-[36px] leading-[43px] tracking-[0] text-[#074139]`}
        >
          How to find your vehicle owner details online
        </h2>
      </section>

      {/* ── How to find — OBPARK vs Parivahaan ── */}
      <section className="px-4 md:px-8 py-8 md:py-12 max-w-[1628px] mx-auto mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">

          <div className="flex flex-col gap-6 p-6 md:p-10 rounded-[20px] min-h-[200px] bg-gradient-to-br from-[#CAEDE5] to-[#59D0B5]">
            <h3 className={`${microgrammaBold.className} text-center text-[28px] md:text-[40px] font-bold text-[#074139] leading-[100%] mb-2`}>
              OBPARK
            </h3>

            <div className="bg-white rounded-[20px] p-6 md:p-8 flex flex-col">
  {[
    "Enter 'Car Number'/'Vehicle Registration Number' in the above box.",
    "Click on 'Check Details' and get the information within seconds.",
  ].map((step, i, arr) => (
    <div key={i} className="flex items-stretch gap-4">
      <div className="flex flex-col items-center">
        <div className="w-7 h-7 rounded-full border-[0.5px] border-[#3C9792]/30 flex items-center justify-center shrink-0">
          <span className="font-microgamma text-[11px] font-medium text-[#3C9792]">
            {i + 1}
          </span>
        </div>
        {i !== arr.length - 1 && (
          <div className="w-px min-h-[40px] flex-1 border-l-2 border-dotted border-[#3C9792]/50 my-1" />
        )}
      </div>
      <p className="font-microgamma text-[14px] md:text-[18px] leading-[28px] md:leading-[32px] font-medium text-[#074139] pb-6">
        {step}
      </p>
    </div>
  ))}
</div>
          </div>

          <div className="flex flex-col gap-6 p-6 md:p-10 rounded-[20px] bg-transparent min-h-[400px]">
            <h3 className={`${microgrammaBold.className} text-center text-[28px] md:text-[40px] font-bold text-[#074139] leading-[100%] mb-2`}>
              Parivahaan
            </h3>

            <div
  className="bg-white rounded-[20px] p-6 md:p-8 flex flex-col min-h-[100px]"
  style={{ border: '0.5px solid #CECECE' }}
>
  {[
    'Go to the Pariavahan website.',
    "Select 'Know Your Vehicle Details' from the 'Informational Services' dropdown.",
    'Provide your mobile phone number and fill in the displayed verification code.',
    'Complete the sign-in process or create an account.',
    "Enter the vehicle registration number and click on 'Search Vehicle' or 'Vahan Search' to get the details.",
  ].map((step, i, arr) => (
    <div key={i} className="flex items-stretch gap-4">
      <div className="flex flex-col items-center">
        <div className="w-7 h-7 rounded-full border-[0.5px] border-[#3C9792] flex items-center justify-center shrink-0">
          <span className="font-microgamma font-medium text-[11px] text-[#3C9792]">
            {i + 1}
          </span>
        </div>
        {i !== arr.length - 1 && (
          <div className="w-px min-h-[40px] flex-1 border-l-2 border-dotted border-[#3C9792] my-1" />
        )}
      </div>
      <p className="font-microgamma text-[14px] md:text-[18px] leading-[28px] md:leading-[32px] font-medium text-[#074139] pb-6">
        {step}
      </p>
    </div>
  ))}
</div>
          </div>

        </div>
      </section>

      {/* ── Vehicle Owner Details — banner ── */}
      <section className="w-full py-6 md:py-8 mb-8">
        <div
          className="relative overflow-hidden rounded-3xl w-full h-[500px] sm:h-[550px] md:h-[600px]"
          style={{ backgroundColor: '#EAF6F4' }}
        >
          <Image
  src="/images/vehicledetails/backgroundimage.png"
  alt="Vehicle Owner Details Background"
  fill
  sizes="100vw"
  className="object-cover object-right md:object-center"
  priority
/>

          <div className="relative z-10 flex flex-col gap-4 md:gap-8 px-6 sm:px-10 md:px-16 mt-10 py-10 md:py-16 max-w-full md:max-w-[900px]">
            <div className="flex flex-col gap-2 md:gap-2">
              <h2 className={`${microgrammaBold.className} text-2xl sm:text-3xl md:text-[48px] font-bold tracking-[0.05em] text-[#074139]`}>
                Check and verify
              </h2>
              <h2 className={`${microgrammaBold.className} text-3xl sm:text-4xl md:text-[50px] font-bold tracking-[0.05em] text-[#308F8A]`}>
                Vehicle Owner Details
              </h2>
            </div>

            <p className="font-michroma font-medium text-[#000000] text-[20px] sm:text-base md:text-xl leading-relaxed max-w-md">
              Get accurate and updated owner information instantly and securely.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#074139] bg-[##f0fdf9] flex items-center justify-center shrink-0 text-[#074139]">
                   <Image src="/images/vehicledetails/vector1.png" alt="Instant" width={20} height={20} />
                </span>
                <span className="font-michroma font-medium text-[#000000] text-xs sm:text-[16px] leading-tight">
                  Verified &amp;<br />Authentic Records
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#074139] flex items-center justify-center shrink-0 text-[#074139]">
                  <Image src="/images/vehicledetails/group.png" alt="Instant" width={20} height={20} />
                </span>
                <span className="font-michroma font-medium text-[#000000] text-xs sm:text-[16px] leading-tight">
                  A Secure &amp;<br />Private
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#074139] flex items-center justify-center shrink-0 text-[#074139]">
                  <Image src="/images/vehicledetails/vector.png" alt="Instant" width={18} height={18} />
                </span>
                <span className="font-michroma font-medium text-[#000000] text-xs sm:text-[16px] leading-tight">
                  Instant<br />Results
                </span>
              </div>
            </div>

            <Link
              href="/account/vehicles"
              className="font-michroma font-normal text-[#FFFFFF] bg-[#074139] inline-flex items-center gap-2 px-6 py-3 rounded-[5px] w-fit text-sm sm:text-base"
            >
              Check Details
              <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-xs">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="w-full py-8 md:py-12 max-w-[1568px] mx-auto px-4 md:px-8 mb-10">
        <h2
          className={`${microgrammaBold.className} text-[20px] md:text-[28px] font-bold leading-[100%] tracking-[0] text-[#074139] mb-10 md:mb-14`}
        >
          FAQs on Checking Vehicle Owner Details by Number Plate Online
        </h2>

        <div className="flex flex-col gap-4 md:gap-5">
          {FAQ_QUESTIONS.map((question, i) => (
            <div
              key={i}
              className="flex items-center justify-between w-full h-auto md:h-[80px] rounded-[20px] bg-white px-4 md:px-[16px] py-5 md:py-[24px]"
              style={{ border: '0.5px solid #CECECE' }}
            >
              <p
                className="text-[14px] md:text-[18px] leading-[100%] tracking-[0] text-[#000000]"
                style={{ fontFamily: 'var(--font-michroma)', fontWeight: 400 }}
              >
                {question}
              </p>
              <span className="text-[#000000] text-3xl rotate-90 shrink-0 ml-4">›</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}