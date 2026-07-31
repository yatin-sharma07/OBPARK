import Image from 'next/image'
import { microgrammaBold } from '@/lib/fonts'

export const metadata = {
  title: 'Invest in OBPARK | Smart Parking Technology Platform',
  description:
    'OBPARK is an intelligent parking technology platform developed by Obrive Industries to modernize parking operations through AI, AR, Spatial Computing, and IoT.',
}

export default function InvestPage() {
  return (
    <main className="min-h-screen bg-[#F0F9F5] text-[#074139] font-sans pt-24 sm:pt-32 pb-12 overflow-x-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16 mb-16">
      {/* ==========================================
          HEADER SECTION
      ========================================== */}
      <section className="space-y-6 max-w-5xl">
        <span
          className="text-[#074139] text-base sm:text-lg font-medium block"
          style={{ fontFamily: 'var(--font-michroma)' }}
        >
          Invest in OBPARK
        </span>

        <h1
          className="text-3xl sm:text-4xl lg:text-5xl text-[#074139] leading-[1.3] tracking-tight"
          style={{ fontFamily: 'var(--font-michroma)' }}
        >
          Transforming<br className="hidden sm:block" />
          Parking with AI, AR &amp;<br className="hidden sm:block" />
          Spatial Computing
        </h1>

        <div
          className="space-y-4 text-sm sm:text-base text-[#074139] leading-relaxed opacity-90"
          style={{ fontFamily: 'var(--font-michroma)' }}
        >
          <p>
            OBPARK is an intelligent parking technology platform developed by Obrive Industries to modernize parking operations through Artificial Intelligence (AI), Augmented Reality (AR), Spatial Computing, Computer Vision, and IoT. Our mission is to eliminate the frustration of finding parking while helping property owners unlock new operational efficiencies and revenue opportunities.
          </p>
          <p>
            As urban mobility evolves and smart infrastructure becomes a global priority, OBPARK is positioned to become the operating system for intelligent parking ecosystems.
          </p>
        </div>
      </section>

      {/* ==========================================
          4 CARDS GRID (2x2)
      ========================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-8 gap-4 sm:gap-6">
        
        {/* CARD 1: Why invest in OBPARK */}
        <div className="lg:col-span-5 bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col border border-slate-100">
          <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[260px] overflow-hidden">
            <Image
              src="/Images/inverstor/why_invest_inObpark.jpg"
              alt="Why invest in OBPARK"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6 sm:p-8 flex flex-col space-y-4 flex-1">
            <h2
              className={`${microgrammaBold.className} text-xl sm:text-2xl text-[#074139]`}
            >
              Why invest in OBPARK
            </h2>
            <div
              className="space-y-4 text-xs sm:text-sm text-[#484848] leading-relaxed"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              <p>
                Parking is no longer just about managing spaces—it&apos;s about creating connected, data-driven, and user-friendly experiences. OBPARK transforms traditional parking facilities into intelligent digital assets, enabling seamless navigation, automation, analytics, and integrated services.
              </p>
              <p>
                With increasing demand for smart cities, digital infrastructure, and AI-powered mobility solutions, OBPARK addresses a rapidly growing market with a scalable Software-as-a-Service (SaaS) platform.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2: The Problem */}
        <div className="lg:col-span-3 bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col border border-slate-100">
          <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[260px] overflow-hidden">
            <Image
              src="/Images/inverstor/the_problem.jpg"
              alt="The Problem"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6 sm:p-8 flex flex-col space-y-4 flex-1">
            <h2
              className={`${microgrammaBold.className} text-xl sm:text-2xl text-[#074139]`}
            >
              The Problem
            </h2>
            <div
              className="space-y-4 text-xs sm:text-sm text-[#484848] leading-relaxed"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              <p>
                Millions of drivers waste valuable time searching for parking every day, leading to: Traffic congestion, Fuel wastage, Increased carbon emissions, Poor customer experiences, Underutilized parking assets, Operational inefficiencies for parking operators.
              </p>
              <p>
                Traditional parking systems often lack real-time visibility, indoor navigation, intelligent analytics, and digital customer engagement.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3: The Solution */}
        <div className="lg:col-span-3 bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col border border-slate-100">
          <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[260px] overflow-hidden">
            <Image
              src="/Images/inverstor/the_solution.jpg"
              alt="The Solution"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 sm:p-8 flex flex-col space-y-4 flex-1">
            <h2
              className={`${microgrammaBold.className} text-xl sm:text-2xl text-[#074139]`}
            >
              The Solution
            </h2>
            <div
              className="space-y-4 text-xs sm:text-sm text-[#484848] leading-relaxed"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              <p>
                OBPARK combines cutting-edge technologies into a single intelligent platform that enables: AR Indoor Parking Navigation, Real-Time Parking Availability, AI-Based Occupancy Detection, QR Code Parking Access, Smart Parking Reservations, ANPR (Automatic Number Plate Recognition), Digital Payments, Visitor &amp; Valet Management, EV Charging Integration, Analytics &amp; Reporting, Multi-Site Parking Management.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 4: Market Opportunity */}
        <div className="lg:col-span-5 bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col border border-slate-100">
          <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[260px] overflow-hidden">
            <Image
              src="/Images/inverstor/market_opportunity.jpg"
              alt="Market Opportunity"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 sm:p-8 flex flex-col space-y-4 flex-1">
            <h2
              className={`${microgrammaBold.className} text-xl sm:text-2xl text-[#074139]`}
            >
              Market Opportunity
            </h2>
            <div
              className="space-y-4 text-xs sm:text-sm text-[#484848] leading-relaxed"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              <p>
                The global shift toward smart mobility, connected infrastructure, and digital transformation is driving strong demand for intelligent parking solutions.
              </p>
              <p>
                With OBPARK is designed to serve: Shopping Malls, Airports, Hospitals, IT Parks, Commercial Buildings, Residential Communities, Hotels, Universities, Smart Cities, Government Infrastructure, Mixed-Use Developments.
              </p>
            </div>
          </div>
        </div>

      </section>
      </div>

      {/* ==========================================
          BUSINESS MODEL SECTION
      ========================================== */}
      <section className="bg-white w-full py-16">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        <div className="space-y-3">
          <span
            className="text-[#484848] text-base sm:text-lg block"
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            Business Model
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl text-[#074139] leading-tight max-w-4xl"
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            OBPARK generates recurring<br className="hidden sm:block" />
            revenue through multiple channels:
          </h2>
        </div>

        {/* 4 COLUMNS / CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: SaaS Subscriptions */}
          <div className="bg-[#DDDDDD] rounded-[24px] p-6 sm:p-7 shadow-sm border border-[#DDDDDD] flex flex-col space-y-4">
            <h3
              className={`${microgrammaBold.className} text-lg sm:text-xl text-[#074139]`}
            >
              SaaS Subscriptions
            </h3>
            <ul
              className="space-y-2.5 text-xs sm:text-sm text-[#484848] leading-relaxed list-disc list-inside opacity-90"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              <li>Monthly and annual platform licenses</li>
              <li>Enterprise subscriptions</li>
              <li>Multi-location deployments</li>
            </ul>
          </div>

          {/* Card 2: Enterprise Licensing */}
          <div className="bg-[#DDDDDD] rounded-[24px] p-6 sm:p-7 shadow-sm border border-[#DDDDDD] flex flex-col space-y-4">
            <h3
              className={`${microgrammaBold.className} text-lg sm:text-xl text-[#074139]`}
            >
              Enterprise Licensing
            </h3>
            <ul
              className="space-y-2.5 text-xs sm:text-sm text-[#484848] leading-relaxed list-disc list-inside opacity-90"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              <li>Airports</li>
              <li>Smart Cities</li>
              <li>Commercial Real Estate</li>
              <li>Government Projects</li>
              <li>Corporate Campuses</li>
            </ul>
          </div>

          {/* Card 3: Marketplace Revenue */}
          <div className="bg-[#DDDDDD] rounded-[24px] p-6 sm:p-7 shadow-sm border border-[#DDDDDD] flex flex-col space-y-4">
            <h3
              className={`${microgrammaBold.className} text-lg sm:text-xl text-[#074139]`}
            >
              Marketplace Revenue
            </h3>
            <ul
              className="space-y-2.5 text-xs sm:text-sm text-[#484848] leading-relaxed list-disc list-inside opacity-90"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              <li>Car Care Services</li>
              <li>Vehicle Accessories</li>
              <li>Insurance</li>
              <li>FASTag Services</li>
              <li>EV Charging</li>
              <li>Automotive Partners</li>
            </ul>
          </div>

          {/* Card 4: Professional Services */}
          <div className="bg-[#DDDDDD] rounded-[24px] p-6 sm:p-7 shadow-sm border border-[#DDDDDD] flex flex-col space-y-4">
            <h3
              className={`${microgrammaBold.className} text-lg sm:text-xl text-[#074139]`}
            >
              Professional Services
            </h3>
            <ul
              className="space-y-2.5 text-xs sm:text-sm text-[#484848] leading-relaxed list-disc list-inside opacity-90"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              <li>Platform Deployment</li>
              <li>System Integration</li>
              <li>Custom Development</li>
              <li>Technical Support</li>
              <li>Training &amp; Consulting</li>
            </ul>
          </div>
        </div>
        </div>
      </section>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12 mt-16">
      {/* ==========================================
          CTA BANNER SECTION
      ========================================== */}
      <section className="py-12 sm:py-16 text-center flex flex-col items-center justify-center space-y-6">
        <h2
          className={`${microgrammaBold.className} text-2xl sm:text-3xl lg:text-4xl text-[#074139] leading-tight w-full max-w-[90vw] whitespace-nowrap overflow-hidden text-ellipsis`}
        >
          Let&apos;s Build the Future of Smart Parking Together
        </h2>

        <p
          className="text-sm sm:text-base text-[#484848] w-full max-w-[90vw] whitespace-nowrap overflow-hidden text-ellipsis"
          style={{ fontFamily: 'var(--font-michroma)' }}
        >
          Ready to invest in the next generation of intelligent parking technology?
        </p>

        <a
          href="mailto:invest@obpark.com"
          className="inline-block bg-gradient-to-r from-[#1A817F] to-[#59D0B5] hover:opacity-90 text-white text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-md transition-opacity"
          style={{ fontFamily: 'var(--font-michroma)' }}
        >
          Request Investor Deck
        </a>
      </section>
      </div>
    </main>
  )
}
