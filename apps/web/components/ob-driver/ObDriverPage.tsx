'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
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
  HeartHandshake,
  ShieldAlert,
  UserCheck,
  Briefcase,
  MapPin,
  BadgeCheck,
} from 'lucide-react'
import { section } from 'framer-motion/m'

const whyRideRows = [
  {
    eyebrow: 'Comfort of your car, without driving',
    heading: 'Enjoy the comfort of the backseat in your own car, no driving required',
    cta: 'Hire a Driver',
    image: '/Images/ob-driver/ob-driver-1.png',
    reverse: true,
  },
  {
    eyebrow: 'Transparent pricing',
    heading: 'We ensure our customers get drivers at the most affordable prices.',
    cta: 'Transparent Fares, No Surprises!',
    image: '/Images/ob-driver/ob-driver-2.png',
    reverse: false,
  },
  {
    eyebrow: 'Background-verified drivers',
    heading: 'Our easy-to-use driver app connects you with top-rated drivers',
    cta: 'Safe & Verified Drivers with OBDrive, Always!',
    image: '/Images/ob-driver/ob-driver-3.png',
    reverse: true,
  },
]

const offerings = [
  {
    icon: ClipboardCheck,
    title: 'Book a driver now or in advance',
    body: 'Get a driver now or schedule a driver in advance for airport transfers, important meetings, doctor visits, shopping sprees, after-party drops, or any occasion.',
  },
  {
    icon: MousePointerClick,
    title: 'Book a driver now or in advance',
    body: 'Get a driver now or schedule a driver in advance for airport transfers, important meetings, doctor visits, shopping sprees, after-party drops, or any occasion.',
  },
  {
    icon: HeartHandshake,
    title: 'Book a driver now or in advance',
    body: 'Get a driver now or schedule a driver in advance for airport transfers, important meetings, doctor visits, shopping sprees, after-party drops, or any occasion.',
  },
  {
    icon: MapPin,
    title: 'Best-in-class drivers',
    body: 'Plus drivers for premium rides as well as classic drivers for budget-friendly trips.',
  },
]

const safetyPoints = [
  {
    icon: ShieldAlert,
    title: 'Book a driver now or in advance',
    body: 'Get a driver now or schedule a driver in advance for airport transfers, important meetings, doctor visits, shopping sprees, after-party drops, or any occasion.',
  },
  {
    icon: UserCheck,
    title: 'Book a driver now or in advance',
    body: 'Get a driver now or schedule a driver in advance for airport transfers, important meetings, doctor visits, shopping sprees, after-party drops, or any occasion.',
  },
  {
    icon: Briefcase,
    title: 'Book a driver now or in advance',
    body: 'Get a driver now or schedule a driver in advance for airport transfers, important meetings, doctor visits, shopping sprees, after-party drops, or any occasion.',
  },
  {
    icon: BadgeCheck,
    title: 'Safety Starts with Verification',
    body: 'All OBDrive drivers undergo ID verification and third-party background checks before they can serve customers.',
  },
]

const cardBody =
  'Get a driver now or schedule a driver in advance for airport transfers, important meetings, doctor visits, shopping sprees, after-party drops, or any occasion.'

const faqs = [
  {
    q: 'How Does OBDrive Work?',
    a: "Request a driver through the OBDrive app, and we'll assign a verified driver to your booking. Your driver will head to your selected pickup location, while you can track their journey in real time through the app.",
  },
  {
    q: 'Can We Trust OBDrive Drivers?',
    a: 'Your safety is our top priority, and we never compromise on it. Every OBDrive driver undergoes a thorough background verification and screening process before joining our platform. Drivers also receive proper training to ensure they meet our safety and service standards.',
  },
  {
    q: 'How Do I Contact My Driver?',
    a: 'Once a driver is assigned to your booking, you can contact them directly through the Obpark app. Call or message your driver conveniently from the app without needing to share your personal number.',
  },
  {
    q: "What's the Difference Between a Round Trip and a One-Way Trip?",
    a: 'Round Trip: Your driver picks you up and brings you back to the same location where your trip started. One-Way Trip: Your driver picks you up at your selected location and drops you off at a different destination.',
  },
  {
    q: 'How Much in Advance Should I Book a Driver?',
    a: 'If a driver is available nearby, you can book an OBDrive driver instantly through the app. If no driver is currently available, or you\'d like to schedule a ride in advance, we recommend booking at least 1 hour ahead. This gives us enough time to arrange a verified driver for you.',
  },
  {
    q: 'Can I Extend My Booking Duration?',
    a: "Yes. You can extend your booking if you need your driver for longer. Simply inform your driver, and they'll accommodate the additional time whenever possible. Additional charges may apply based on the extra duration or distance, as per OBDrive's pricing policy.",
  },
  {
    q: 'How Can I Pay for My Driver?',
    a: 'You can pay your OBDrive driver directly at the end of your trip using Cash or UPI. You can also choose your preferred payment method while placing your booking through the Obpark app.',
  },
  {
    q: 'What Is OBDrive Secure?',
    a: 'OBDrive Secure is designed to provide added peace of mind during your journey. It covers eligible damages that may occur to your car due to the fault of an OBDrive driver while driving your vehicle, subject to the applicable terms and conditions.',
  },
  {
    q: 'Do You Provide Invoices?',
    a: 'Yes. Once your payment is completed, you can access or request your invoice directly from the OBDrive app. Go to My Account → Orders → Past Orders & Bookings to view your completed booking and invoice details.',
  },
]

export function ObDriverPage() {
  const router = useRouter()

  const handleFindDriver = () => {
    router.push('/services/ob-driver/book')
  }

  function ImagePlaceholderIcon({ className, stroke = '#1E1E1E' }: { className?: string; stroke?: string }) {
  return (
    <svg
      viewBox="0 0 454.5 463.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer rounded frame - exact Figma dimensions */}
      <rect
        x="1.75"
        y="1.75"
        width="451"
        height="460"
        rx="32"
        stroke={stroke}
        strokeWidth="3.5"
      />
      {/* Sun / circle - upper left */}
      <circle
        cx="113"
        cy="145"
        r="32"
        stroke={stroke}
        strokeWidth="3.5"
      />
      {/* Single mountain peak */}
      <path
        d="M75 340 L227 175 L380 340"
        stroke={stroke}
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

  return (
    <div className="w-full min-h-screen bg-white text-[#0A3D31]">
      {/* Hero */}
<div className="w-[96%] mx-auto bg-[#D9D9D9] pt-24 mt-10 pb-16 px-4 sm:px-8 md:px-12 rounded-[48px]">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <div className="relative w-full aspect-[454.5/463.5] max-w-[454px] mx-auto lg:mx-0 overflow-hidden">
  <ImagePlaceholderIcon className="w-full h-full" stroke="#1E1E1E" />
</div>

    <div className="text-center lg:text-left">
      <h1 className={`${microgrammaBold.className} text-[#1A817F] font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.2]`}>
        Get a Driver in 30 minutes
      </h1>
      <p className={`${michroma.className} text-black text-sm sm:text-[15px] leading-[1.8] mt-4 max-w-[585px] mx-auto lg:mx-0`}>
        Looking to hire a driver for your car? OBDrive is your go-to
        on-demand or scheduled chauffeur service to hire
        background-verified drivers
      </p>
      <Button
        onClick={handleFindDriver}
        className={`${microgrammaBold.className} mt-6 bg-[#CAEDE5] hover:bg-[#b8e3d8] text-[#0D4B4D] font-bold text-base rounded-full px-12 py-6`}
      >
        Find Driver
      </Button>
    </div>
  </div>
</div>

      {/* Why ride with OBDrive */}
<section className="w-full overflow-hidden py-12 sm:py-16">
  <div className="max-w-[634px] mx-auto text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6 px-4">
    <p className={`${michroma.className} text-black text-xl sm:text-2xl`}>
      Why ride with OBDrive?
    </p>
    <h2 className={`${microgrammaBold.className} text-[#1A817F] text-2xl sm:text-[28px] md:text-[32px] leading-[120%]`}>
      Sit back, relax. We'll drive you
      <br className="hidden sm:block" />
      wherever you need to go.
    </h2>
  </div>

  <div className="flex flex-col gap-10 sm:gap-16 max-w-[1278px] mt-16 mx-auto px-4 sm:px-8">
    {whyRideRows.map((r, i) => (
      <div
        key={i}
        className={`flex flex-col ${r.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 xl:gap-24`}
      >
        <div className="relative w-full max-w-[616px] aspect-square rounded-[24px] overflow-hidden shrink-0">
          <Image src={r.image} alt={r.eyebrow} fill className="object-cover" />
        </div>

        <div className="flex flex-col justify-center w-full max-w-[532px] shrink-0 text-center lg:text-left">
          <p className={`${michroma.className} text-black text-lg sm:text-xl md:text-[24px] leading-[100%]`}>
            {r.eyebrow}
          </p>
          <h3 className={`${microgrammaBold.className} text-[#1A817F] text-2xl sm:text-[28px] md:text-[32px] leading-[120%] font-bold mt-4 sm:mt-6`}>
            {r.heading}
          </h3>
          <button
            className={`${michroma.className} mt-6 sm:mt-8 h-[43px] px-5 rounded-[30px] text-white text-sm sm:text-[16px] leading-[100%] whitespace-nowrap w-fit mx-auto lg:mx-0 bg-gradient-to-r from-[#1A817F] to-[#59D0B5]`}
          >
            {r.cta}
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Offerings */}
<section className="w-full max-w-[1278px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
  <div className="text-center mb-10 sm:mb-18">
    <h2 className={`${microgrammaBold.className} text-[#2A8B87] text-2xl sm:text-[32px] leading-[1.3] sm:leading-[28px] font-bold`}>
      Our offerings
    </h2>
    <p className={`${michroma.className} text-[#4D4D4D] text-sm sm:text-[16px] leading-[160%] text-center mt-4 max-w-[607px] mx-auto`}>
      Our easy-to-use driver app connects you with top-rated drivers, making it easy to get where you need to go.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-[26px]">
    {offerings.map((o, i) => (
      <div
        key={i}
        className="flex flex-col gap-[10px] p-6 rounded-[20px] bg-[#FAFAFA] w-full"
        style={{ border: '0.5px solid rgba(221,221,221,0.87)' }}
      >
        <div className="w-10 h-10 rounded-lg bg-[#CAEDE5] flex items-center justify-center">
          <o.icon className="w-5 h-5 text-[#0A3D31]" />
        </div>
        <h3 className={`${microgrammaBold.className} text-[#1A817F] text-[18px] leading-[120%] font-bold`}>
          {o.title}
        </h3>
        <p className={`${michroma.className} text-[#3E3E3E] text-[14px] leading-[28px]`}>
  {o.body}
</p>
      </div>
    ))}
  </div>
</section>

{/* Safety Points */}
<section className="w-full max-w-[1278px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
  <div className="text-center mb-10 sm:mb-18">
    <h2 className={`${microgrammaBold.className} text-[#2A8B87] text-2xl sm:text-[32px] leading-[1.3] sm:leading-[28px] font-bold`}>
      Your safety is our top priority
    </h2>
    <p className={`${michroma.className} text-[#4D4D4D] text-sm sm:text-[16px] leading-[160%] text-center mt-4 max-w-[700px] mx-auto`}>
      When you hire a driver through DriveU, you&apos;re never on your own. Behind the scenes, all DriveU employees are working to ensure every driver booking is secure from start to finish.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-[26px]">
    {safetyPoints.map((s, i) => (
      <div
        key={i}
        className="flex flex-col gap-[10px] p-6 rounded-[20px] bg-[#FAFAFA] w-full"
        style={{ border: '0.5px solid rgba(221,221,221,0.87)' }}
      >
        <div className="w-10 h-10 rounded-lg bg-[#CAEDE5] flex items-center justify-center">
          <s.icon className="w-5 h-5 text-[#0A3D31]" />
        </div>
        <h3 className={`${microgrammaBold.className} text-[#1A817F] text-[18px] leading-[120%] font-bold`}>
          {s.title}
        </h3>
        <p className={`${michroma.className} text-[#3E3E3E] text-[14px] leading-[28px]`}>
  {s.body}
</p>
      </div>
    ))}
  </div>
</section>

{/* FAQ */}
<section className="w-full max-w-[1278px] mx-auto px-4 sm:px-8 pb-16 sm:pb-20">
  <div className="bg-[#EAF5F0] rounded-[24px] p-6 sm:p-10">
    <h2 className={`${michroma.className} text-[#074139] text-xl sm:text-[24px] leading-[1.4] sm:leading-[45px] font-normal mb-6 sm:mb-8`}>
      Frequently Asked Questions (FAQ)
    </h2>
    <Accordion type="single" collapsible className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-6">
      {faqs.map((f, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="w-full min-h-[64px] sm:min-h-[80px] h-fit rounded-[20px] border-0 outline-none shadow-none ring-0 data-[state=open]:rounded-[24px] sm:data-[state=open]:rounded-[32px] transition-all overflow-hidden"
          style={{ background: 'linear-gradient(to right, #A6DEC7, #308E8C)', padding: '0 20px' }}
        >
          <AccordionTrigger className="text-white text-sm sm:text-[16px] leading-[1.3] font-normal min-h-[64px] sm:min-h-[80px] py-3 sm:py-0 hover:no-underline [&>svg]:hidden flex items-center justify-between w-full border-0 outline-none ring-0 focus:ring-0 focus-visible:ring-0 focus:outline-none bg-transparent">
            <span className="text-left flex-1 pr-4">{f.q}</span>
            <span className="text-white text-xl sm:text-2xl font-light shrink-0 leading-none flex items-center">+</span>
          </AccordionTrigger>
          <AccordionContent className="text-white/90 text-sm pb-4 sm:pb-6 border-0 outline-none">
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