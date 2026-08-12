'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { michroma, microgrammaBold } from '@/lib/fonts'
import {
  ClipboardCheck,
  MousePointerClick,
  BatteryCharging,
  CircleDot,
  Sparkles,
  Droplets,
  Lightbulb,
  Cog,
  ShieldCheck,
  Settings2,
  PaintBucket,
} from 'lucide-react'

const features = [
  { icon: ClipboardCheck, title: 'Car Services' },
  { icon: MousePointerClick, title: 'AC Service & Repair' },
  { icon: BatteryCharging, title: 'Batteries' },
  { icon: CircleDot, title: 'Tyres & Wheel Care' },
  { icon: Sparkles, title: 'Detailing Services' },
  { icon: Droplets, title: 'Car Spa & Cleaning' },
  { icon: ClipboardCheck, title: 'Car Inspections' },
  { icon: Lightbulb, title: 'Windshields & Lights' },
  { icon: Cog, title: 'Clutch & Body Parts' },
  { icon: ShieldCheck, title: 'Insurance Claims' },
  { icon: Settings2, title: 'Suspension & Fitments' },
  { icon: PaintBucket, title: 'Denting & Painting' },
]

const serviceRows = [
  {
    eyebrow: 'Garage Services',
    heading:
      'For the fixes that require major overhauls or heavy equipments, our partners offer in-garage services from top qualified experts, all this with industry-best offers.',
    points: ['Exciting offers and competitive pricing', 'Qualified service experts', 'Highly rated garages'],
    image: '/Images/ob-mechanic/Garage.png',
    reverse: true,
  },
  {
    eyebrow: 'Genuine Spare Parts',
    heading:
      'Our partners offer genuine spare parts at very attractive prices. Your car gets the care it truly deserves. Equip your cars with only trusted spare parts.',
    points: ['Improve your car performance', 'Genuine & certified spares', 'Serviced by qualified experts'],
    image: '/Images/ob-mechanic/Genuine.png',
    reverse: false,
  },
]

const reviews = [
  {
    name: 'Rahul Sharma',
    role: 'Car Servicing',
    quote:
      'Excellent experience from start to finish. The team was professional, responsive, and kept me updated throughout the service. The pricing was transparent and the work was completed neatly.',
    avatar: '/Images/ob-mechanic/Rahul.png',
  },
  {
    name: 'Amit Verma',
    role: 'Car Servicing',
    quote:
      'Really impressed with the service quality. My car had a few issues that were diagnosed quickly and fixed properly. The staff was helpful, the pricing was reasonable, and the overall experience was smooth.',
    avatar: '/Images/ob-mechanic/Amit.png',
  },
  {
    name: 'Priya Mehta',
    role: 'Car Servicing',
    quote:
      'A very convenient and hassle-free car servicing experience. The team handled my car with care and delivered it back in excellent condition. Good service, fair pricing, and a professional approach.',
    avatar: '/Images/ob-mechanic/Priya.png',
  },
]

const faqs = [
  {
    q: 'What Is OBMechanic?',
    a: 'OBMechanic is a technology-enabled multi-brand car service platform designed to make vehicle maintenance simple, reliable, and convenient. We connect customers with skilled technicians and trusted service solutions, ensuring quality workmanship and dependable car care for a wide range of vehicles.',
  },
  {
    q: 'Why Should I Choose OBMechanic?',
    a: 'OBMechanic makes car servicing simple, convenient, and reliable. Get access to a wide range of multi-brand car services at competitive prices, delivered by skilled technicians using quality parts and professional service standards.',
  },
  {
    q: 'How Can OBMechanic Offer Savings on Car Services?',
    a: 'OBMechanic keeps service costs competitive through an efficient, technology-driven business model. By optimizing operations, sourcing quality parts efficiently, and reducing unnecessary overheads, we can pass the savings on to customers.',
  },
  {
    q: 'How Is OBMechanic Different from Other Car Services?',
    a: 'OBMechanic focuses on delivering a complete, transparent car-service experience rather than simply generating service leads. We streamline the journey from service coordination and parts sourcing to quality checks and customer updates.',
  },
  {
    q: 'Where Can I Book a Car Service with OBMechanic?',
    a: 'You can conveniently book your car service through the OBMechanic platform. Simply choose the service you need, select a convenient date and time, and submit your booking request.',
  },
  {
    q: 'How Do I Book a Car Service with OBMechanic?',
    a: "Select your car — choose make, model, and fuel type. Choose your service — select the package that best suits your car's needs. Pick a time slot. Confirm your booking.",
  },
  {
    q: "What If I'm Not Available to Drop Off My Car?",
    a: 'No problem! OBMechanic can make car servicing more convenient with pickup and drop-off assistance, subject to availability in your location.',
  },
  {
    q: 'Do I Have to Pay Before the Service?',
    a: "No, you don't have to pay upfront. At OBMechanic, your car is serviced and inspected by professionals before the final bill is generated.",
  },
]

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth
      if (w >= 1024) setItemsPerView(4)      // desktop — 4 at a time
      else if (w >= 640) setItemsPerView(2)  // tablet
      else setItemsPerView(1)                // mobile
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  return itemsPerView
}

function ImagePlaceholderIcon({ className, stroke = '#1E1E1E' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 454.5 463.5" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="1.75" y="1.75" width="451" height="460" rx="32" stroke={stroke} strokeWidth="3.5" />
      <circle cx="113" cy="145" r="32" stroke={stroke} strokeWidth="3.5" />
      <path d="M75 340 L227 175 L380 340" stroke={stroke} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function ObMechanicPage() {
  const router = useRouter()
  const itemsPerView = useItemsPerView()
  const pageCount = Math.ceil(features.length / itemsPerView)
  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage(0)
  }, [itemsPerView])

  useEffect(() => {
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount)
    }, 2000)
    return () => clearInterval(id)
  }, [pageCount])

  const handleFindCarServices = () => {
    router.push('/services/ob-mechanic/quote')
  }

  return (
    <div className="w-full min-h-screen bg-white text-[#0A3D31]">
      {/* Hero */}
      <div className="w-[96%] mx-auto bg-[#D9D9D9] pt-16 sm:pt-20 md:pt-24 mt-6 sm:mt-8 md:mt-10 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-12 rounded-[24px] sm:rounded-[36px] md:rounded-[48px]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div className="relative w-full aspect-[454.5/463.5] max-w-[300px] sm:max-w-[380px] lg:max-w-[454px] mx-auto lg:mx-0 overflow-hidden">
            <ImagePlaceholderIcon className="w-full h-full" stroke="#1E1E1E" />
          </div>

          <div className="text-center lg:text-left">
            <p className={`${michroma.className} text-black text-[13px] sm:text-[15px] leading-[24px] sm:leading-[28px] tracking-[0%] mb-2`}>
              Car Servicing
            </p>
            <h1 className={`${microgrammaBold.className} text-[#1A817F] font-bold text-[28px] sm:text-[38px] md:text-[50px] leading-[120%] tracking-[0%]`}>
              Amazing deals for doorstep car servicing now at your fingertips
            </h1>
            <p className={`${michroma.className} text-black text-[13px] sm:text-[15px] leading-[24px] sm:leading-[28px] tracking-[0%] mt-4 max-w-[585px] mx-auto lg:mx-0`}>
              We get the garage right to your door.
            </p>
            <button
              onClick={handleFindCarServices}
              className={`${microgrammaBold.className} mt-6 bg-[#CAEDE5] hover:bg-[#b8e3d8] text-[#0D4B4D] font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[120%] rounded-full px-8 sm:px-12 md:px-16 py-3 sm:py-4`}
            >
              Book Mechanic
            </button>
          </div>
        </div>
      </div>

      {/* From Boot to Bumper */}
      <section className="w-full max-w-[1278px] mx-auto px-4 sm:px-8 py-10 sm:py-12 md:py-16 mt-10 sm:mt-14 md:mt-16">
        <div className="max-w-[634px] mx-auto text-center mb-10 sm:mb-12 space-y-3 sm:space-y-4">
          <h2 className={`${microgrammaBold.className} text-[#2A8B87] text-[22px] sm:text-[28px] md:text-[32px] leading-[1.3] font-bold`}>
            From Boot to Bumper
          </h2>
          <p className={`${michroma.className} text-black text-[14px] sm:text-[16px] leading-[160%] tracking-[0.05em] text-center`}>
            Experience the ease of doorstep car servicing with best partners in the industry, discover
            all your car servicing needs on the DriveU app.
          </p>
        </div>

       <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: pageCount }).map((_, pageIdx) => (
              <div
                key={pageIdx}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-[26px] w-full shrink-0"
              >
                {features
                  .slice(pageIdx * itemsPerView, pageIdx * itemsPerView + itemsPerView)
                  .map((f, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-[10px] p-4 sm:p-5 md:p-6 rounded-[16px] sm:rounded-[20px] bg-[#FAFAFA] w-full"
                      style={{ border: '0.5px solid rgba(221,221,221,0.87)' }}
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#CAEDE5] flex items-center justify-center">
                        <f.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A3D31]" />
                      </div>
                      <h3 className={`${microgrammaBold.className} text-[#1A817F] text-[15px] sm:text-[16px] md:text-[18px] leading-[120%] font-bold`}>
                        {f.title}
                      </h3>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                page === i ? 'w-6 bg-[#1A817F]' : 'w-2 bg-[#CAEDE5]'
              }`}
            />
          ))}
        </div>

        <div className="max-w-[634px] mx-auto text-center mt-10 sm:mt-14 md:mt-16 space-y-3 sm:space-y-4">
          <h2 className={`${microgrammaBold.className} text-[#2A8B87] text-[22px] sm:text-[28px] md:text-[32px] leading-[1.3] font-bold`}>
            Services at Your Convenience
          </h2>
          <p className={`${michroma.className} text-black text-[15px] sm:text-[18px] md:text-[20px] leading-[160%] tracking-[0.05em] text-center`}>
            Car care and maintenance can be a hefty affair with working weekdays and busy weekends.
            We have partnered with India&apos;s best car servicing partners to fix your car.
          </p>
        </div>
      </section>

      {/* Service rows */}
      <section className="w-full overflow-hidden py-10 sm:py-12 md:py-16">
        <div className="flex flex-col gap-10 sm:gap-14 md:gap-16 max-w-[1278px] mx-auto px-4 sm:px-8">
          {serviceRows.map((r, i) => (
            <div
              key={i}
              className={`flex flex-col ${r.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 sm:gap-10 lg:gap-16 xl:gap-24`}
            >
              <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[616px] aspect-square rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden shrink-0">
                <Image src={r.image} alt={r.eyebrow} fill className="object-cover" />
              </div>

              <div className="flex flex-col justify-center w-full max-w-[532px] shrink-0 text-center lg:text-left">
                <h3 className={`${microgrammaBold.className} text-[#1A817F] text-xl sm:text-2xl md:text-[28px] leading-[120%] font-bold`}>
  {r.eyebrow}
</h3>
<p className={`${michroma.className} text-[#000000] text-[13px] sm:text-sm md:text-[16px] leading-[160%] mt-4`}>
  {r.heading}
</p>
<ul className="mt-4 space-y-2 text-left inline-block mx-auto lg:mx-0">
  {r.points.map((pt, j) => (
    <li key={j} className={`${michroma.className} flex items-center gap-2 text-[13px] sm:text-sm text-[#000000]`}>
      <span className="text-[#1A817F]">✓</span>
      {pt}
    </li>
  ))}
</ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="w-full max-w-[1278px] mx-auto px-4 sm:px-8 py-10 sm:py-12 md:py-16">
        <h2 className={`${microgrammaBold.className} text-[#2A8B87] text-[22px] sm:text-[28px] md:text-[32px] leading-[1.3] font-bold text-center mb-8 sm:mb-10`}>
          Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-[26px]">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-5 sm:p-6 rounded-[16px] sm:rounded-[20px] bg-[#FAFAFA] w-full"
              style={{ border: '0.5px solid rgba(221,221,221,0.87)' }}
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-200">
                <Image src={rev.avatar} alt={rev.name} fill className="object-cover" />
              </div>
              <p className={`${michroma.className} text-[#3E3E3E] text-[13px] sm:text-[14px] leading-[24px] sm:leading-[28px]`}>
                {rev.quote}
              </p>
              <p className={`${microgrammaBold.className} text-[#1A817F] text-[13px] sm:text-sm font-bold`}>
                {rev.name} <span className="font-normal text-[#1A817F]">/ {rev.role}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="bg-[#EAF5F0] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-5 sm:p-8 md:p-10">
          <h2 className={`${michroma.className} text-[#074139] text-[18px] sm:text-[20px] md:text-[24px] leading-[1.4] font-normal mb-5 sm:mb-6 md:mb-8`}>
            Frequently Asked Questions (FAQ)
          </h2>
          <Accordion type="single" collapsible className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4 md:gap-y-6">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="w-full min-h-[56px] sm:min-h-[64px] md:min-h-[80px] h-fit rounded-[16px] sm:rounded-[20px] border-0 outline-none shadow-none ring-0 data-[state=open]:rounded-[20px] sm:data-[state=open]:rounded-[24px] md:data-[state=open]:rounded-[32px] transition-all overflow-hidden"
                style={{ background: 'linear-gradient(to right, #A6DEC7, #308E8C)', padding: '0 16px' }}
              >
                <AccordionTrigger className="text-white text-[13px] sm:text-[14px] md:text-[16px] leading-[1.3] font-normal min-h-[56px] sm:min-h-[64px] md:min-h-[80px] py-3 sm:py-0 hover:no-underline [&>svg]:hidden flex items-center justify-between w-full border-0 outline-none ring-0 focus:ring-0 focus-visible:ring-0 focus:outline-none bg-transparent group">
  <span className="text-left flex-1 pr-4">{f.q}</span>
  <span className="relative text-white text-lg sm:text-xl md:text-2xl font-light shrink-0 leading-none flex items-center justify-center w-5 h-5">
    <span className="absolute inset-0 flex items-center justify-center transition-opacity group-data-[state=open]:opacity-0">
      +
    </span>
    <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-data-[state=open]:opacity-100">
      −
    </span>
  </span>
</AccordionTrigger>
                <AccordionContent className="text-white/90 text-[13px] sm:text-sm pb-4 sm:pb-6 border-0 outline-none">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}