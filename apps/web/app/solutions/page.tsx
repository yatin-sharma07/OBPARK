'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'
import { 
  ShieldAlert, 
  Wind, 
  FileText, 
  CreditCard, 
  Plus, 
  Minus, 
  ChevronRight, 
  Sparkles,
  CheckCircle2,
  Building,
  Plane,
  Hospital,
  Briefcase,
  Home as HomeIcon,
  Globe,
  Wrench,
  Car,
  ShieldCheck,
  Zap
} from 'lucide-react'

// Industry Data for Section 7
const industriesData = [
  {
    id: 'shopping',
    name: 'Shopping Centres & Retail Malls',
    icon: Building,
    title: 'Enhance Every Shopping Experience',
    description:
      'Parking is often the first interaction customers have with a shopping destination. Long search times and traffic congestion can negatively impact customer satisfaction before they even enter the mall.\n\nOBPARK enables visitors to reserve parking, navigate directly to available spaces, and quickly locate their vehicles after shopping.\n\nMall operators benefit from improved traffic flow, higher parking utilisation, and valuable customer behaviour insights.\n\nRetail Benefits : Frictionless entry, High-volume traffic management, Customer parking insights, Integrated loyalty programs.',
  },
  {
    id: 'airports',
    name: 'Airports',
    icon: Plane,
    title: 'Deliver Seamless Airport Parking',
    description:
      'Travellers value speed, convenience, and reliability.\n\nOBPARK simplifies airport parking through pre-booking, real-time availability, and GPS-free indoor navigation that guides drivers directly to their assigned parking space.\n\nAirport operators benefit from improved vehicle movement, reduced congestion, and efficient utilisation of premium and long-term parking zones.\n\nAirport Benefits : Premium parking reservations, Long-term parking management, Faster passenger flow, Reduced terminal congestion, Improved traveller experience.',
  },
  {
    id: 'hospitals',
    name: 'Hospitals & Healthcare Facilities',
    icon: Hospital,
    title: 'Faster Parking During Critical Moments',
    description:
      'Patients and visitors often arrive under stressful circumstances. Searching for parking should never add to that stress.\n\nOBPARK helps visitors quickly locate available parking spaces nearest to hospital entrances, emergency departments, or designated visitor zones.\n\nHealthcare administrators benefit from improved parking efficiency while ensuring emergency access remains unobstructed.\n\nHealthcare Solutions : Emergency parking guidance, Visitor parking management, Staff parking allocation, Accessible parking navigation, Reduced congestion.',
  },
  {
    id: 'corporate',
    name: 'Corporate Campuses',
    icon: Briefcase,
    title: 'Smart Workplace Mobility',
    description:
      'Large office campuses require intelligent parking management for employees, visitors, executives, and service providers.\n\nOBPARK automates parking allocation, visitor reservations, access control integration, and occupancy analytics, creating a seamless parking experience that improves workplace efficiency.\n\nEnterprise Features : Employee parking allocation, Visitor reservations, Executive reserved parking, Contractor access management, Real-time occupancy dashboard.',
  },
  {
    id: 'residential',
    name: 'Residential Communities',
    icon: HomeIcon,
    title: 'Modern Parking for Smarter Living',
    description:
      'Residential communities require secure and organised parking solutions for residents, visitors, and service providers.\n\nOBPARK digitises residential parking by enabling visitor bookings, resident allocations, digital permits, and intelligent navigation throughout multi-level parking structures.\n\nResidents enjoy greater convenience while property managers gain complete visibility into parking operations.\n\nResidential Benefits : Resident parking management, Visitor parking reservations, Digital permits, Community access integration, Smart occupancy monitoring.',
  },
  {
    id: 'smartcities',
    name: 'Smart Cities',
    icon: Globe,
    title: 'Building the future of Urban Mobility',
    description:
      'Cities around the world are embracing digital infrastructure to improve mobility, sustainability, and public services.\n\nOBPARK provides governments and municipal authorities with a scalable parking intelligence platform capable of managing public parking infrastructure across multiple locations.\n\nBy combining AI, Spatial Computing, Digital Twin technology, and real-time analytics, OBPARK helps cities reduce congestion, improve traffic flow, and deliver a smarter urban experience.',
  },
]

// FAQ Data
const faqData = [
  {
    id: 'faq-1',
    question: 'API & Third - Party Integration',
    answer:
      'OBPARK provides RESTful APIs and WebSocket feeds that integrate natively with existing barrier gates, CCTV cameras, ERP systems, mobile payment gateways, and municipal traffic management dashboards.',
  },
  {
    id: 'faq-2',
    question: 'Business Benefits',
    answer:
      'Property operators experience up to 35% higher parking space utilization, a 50% reduction in manual staffing costs, 99% occupancy visibility, and new revenue streams through integrated marketplace services.',
  },
  {
    id: 'faq-3',
    question: 'Our Technology Stack',
    answer:
      'Our spatial engine leverages Spatial Computing, WebAR, Edge AI Computer Vision, IoT geomagnetic sensors, high-speed ANPR cameras, and cloud-native microservices hosted on enterprise-grade secure infrastructure.',
  },
  {
    id: 'faq-4',
    question: 'Ready to transform your parking Experience?',
    answer:
      'Contact our team today for a tailored walkthrough demo. We offer turnkey deployment, legacy hardware retrofitting, and customized enterprise SLA support.',
  },
]

// Integration Accordion Data
const integrationsData = [
  {
    id: 'ev',
    title: 'EV Charging Integration',
    image: '/Images/solutions/EV-Charging-Integration.jpg',
    description:
      'Support electric mobility with integrated charging infrastructure.\n\nFeatures : EV station navigation, Charger availability, Booking, Charging payments, Charging analytics.',
  },
  {
    id: 'visitor',
    title: 'Visitor Parking Management',
    image: '/Images/solutions/Visitor-Parking-Management.jpg',
    description:
      'Create a seamless visitor experience.\n\nFeatures : Visitor pre-registration, QR invitations, Temporary parking access, Security approval workflow, Digital visitor pass.',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Parking Management',
    image: '/Images/solutions/Enterprise-Parking-Management.jpg',
    description:
      'Designed for large organizations.\n\nSuitable : Corporate Offices, IT Parks, Business Parks, Manufacturing Plants, Government Buildings, Universities',
  },
]

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(industriesData[0].id)
  const [openFaq, setOpenFaq] = useState<string | null>(faqData[0].id)
  const [openIntegration, setOpenIntegration] = useState<string | null>(null)
  const [reservationOpen, setReservationOpen] = useState(false)

  const currentIndustry = industriesData.find((item) => item.id === activeTab) || industriesData[0]

  return (
    <>
      <main className="min-h-screen bg-[#F0F9F5] text-[#074139] py-8 sm:py-12 px-4 sm:px-6 lg:px-12 font-sans space-y-16 sm:space-y-24 max-w-[1340px] mx-auto">

      {/* ==========================================
          SECTION 1: HERO & QUICK ACTION BAR
      ========================================== */}
      <section className="min-h-[calc(100vh-120px)] flex flex-col justify-center space-y-12 sm:space-y-16 pt-24 sm:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center max-w-5xl mx-auto w-full">
          
          {/* Hero Left: Image */}
          <div className="lg:col-span-6 w-full h-full flex justify-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] rounded-[24px] overflow-hidden shadow-md">
              <Image
                src="/Images/solutions/Smart-Parking-Solutions.jpg"
                alt="Smart Parking Solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Hero Right: Content */}
          <div className="lg:col-span-6 space-y-5 lg:pl-6 flex flex-col justify-center">
            <span 
              className="text-[#1C8182] text-sm sm:text-base tracking-widest uppercase font-semibold block"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              Obpark
            </span>
            <h1 
              className={`${microgrammaBold.className} text-2xl sm:text-3xl lg:text-4xl text-[#074139] leading-tight`}
            >
              Smart Parking Solutions for Every Industry
            </h1>
            <div className="space-y-4 text-xs sm:text-sm text-[#074139] leading-relaxed opacity-90" style={{ fontFamily: 'var(--font-michroma)' }}>
              <p>
                Transform the way people find, access, and manage parking with OBPARK, an AI-powered Spatial Computing and Smart Parking platform built for modern cities, enterprises, and commercial spaces. Whether you&apos;re operating a shopping mall, airport, hospital, IT park, residential community, or smart city, OBPARK delivers a seamless parking experience through Augmented Reality (AR), Artificial Intelligence (AI), IoT Sensors, Computer Vision, QR Navigation, and Real-Time Analytics.
              </p>
              <p>
                Our modular platform integrates effortlessly with existing parking infrastructure while providing a future-ready ecosystem for intelligent parking management. Smart parking platforms increasingly combine sensors, AI, mobile apps, and centralized dashboards to improve occupancy, reduce congestion, and automate operations.
              </p>
            </div>
          </div>
        </div>

        {/* Infinite Scrolling Quick Action Bar */}
        <div className="w-full overflow-hidden relative pt-2">
          <style>{`
            @keyframes marquee-scroll {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-scroll {
              animation: marquee-scroll 35s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-marquee-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="animate-marquee-scroll gap-4 pb-4">
            {[...Array(2)].map((_, arrayIndex) => (
              <React.Fragment key={arrayIndex}>
                {/* E-Challan */}
                <div 
                  className="bg-[#167D7F] text-white rounded-xl py-4 px-5 flex items-center justify-center gap-3 shadow-md min-w-[180px] sm:min-w-[240px] group cursor-pointer"
                >
                  <ShieldAlert className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
                    E - Challan
                  </span>
                </div>

                {/* PUC */}
                <div 
                  className="bg-[#3C9792] text-white rounded-xl py-4 px-5 flex items-center justify-center gap-3 shadow-md min-w-[180px] sm:min-w-[240px] group cursor-pointer"
                >
                  <Wind className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
                    PUC
                  </span>
                </div>

                {/* Vehicle Details */}
                <div 
                  className="bg-[#63B1A5] text-white rounded-xl py-4 px-5 flex items-center justify-center gap-3 shadow-md min-w-[180px] sm:min-w-[240px] group cursor-pointer"
                >
                  <FileText className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-xs sm:text-sm font-bold tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
                    Vehicle Details
                  </span>
                </div>

                {/* Fastag */}
                <div 
                  className="bg-[#89CBB9] text-white rounded-xl py-4 px-5 flex items-center justify-center gap-3 shadow-md min-w-[180px] sm:min-w-[240px] group cursor-pointer"
                >
                  <CreditCard className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-xs sm:text-sm font-bold tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
                    Fastag
                  </span>
                </div>

                {/* Car Services */}
                <div 
                  className="bg-[#167D7F] text-white rounded-xl py-4 px-5 flex items-center justify-center gap-3 shadow-md min-w-[180px] sm:min-w-[240px] group cursor-pointer"
                >
                  <Wrench className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
                    Car Services
                  </span>
                </div>

                {/* EV - Stations */}
                <div 
                  className="bg-[#3C9792] text-white rounded-xl py-4 px-5 flex items-center justify-center gap-3 shadow-md min-w-[180px] sm:min-w-[240px] group cursor-pointer"
                >
                  <Zap className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
                    EV - Stations
                  </span>
                </div>

                {/* Car Insurance */}
                <div 
                  className="bg-[#63B1A5] text-white rounded-xl py-4 px-5 flex items-center justify-center gap-3 shadow-md min-w-[180px] sm:min-w-[240px] group cursor-pointer"
                >
                  <ShieldCheck className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-xs sm:text-sm font-bold tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
                    Car Insurance
                  </span>
                </div>

                {/* Car Loan */}
                <div 
                  className="bg-[#89CBB9] text-white rounded-xl py-4 px-5 flex items-center justify-center gap-3 shadow-md min-w-[180px] sm:min-w-[240px] group cursor-pointer"
                >
                  <Car className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-xs sm:text-sm font-bold tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
                    Car Loan
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 2: INDOOR AR NAVIGATION & BEST FOR
      ========================================== */}
      <section className="space-y-8 text-center">
        <div className="space-y-2">
          <p className="text-[#1C8182] text-xs sm:text-sm uppercase tracking-wider font-semibold" style={{ fontFamily: 'var(--font-michroma)' }}>
            Obpark - Indoor AR Navigation System
          </p>
          <h2 className={`${microgrammaBold.className} text-2xl sm:text-3xl text-[#074139]`}>
            Complete Smart Parking Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left max-w-5xl mx-auto w-full">
          {/* Card 1: Indoor AR Parking Navigation */}
          <div className="bg-gradient-to-br from-[#1C8182] to-[#AAE1C9] rounded-[28px] p-8 text-white shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <div className="w-9 h-5 bg-white rounded-full p-0.5 flex items-center justify-end">
                  <div className="w-4 h-4 bg-[#1C8182] rounded-full shadow-sm" />
                </div>
                <span className="text-xs font-medium text-white" style={{ fontFamily: 'var(--font-michroma)' }}>Enterprise</span>
              </div>

              <h3 className={`${microgrammaBold.className} text-[14px] sm:text-[18px] lg:text-[22px] xl:text-[24px] tracking-wide text-center whitespace-nowrap`}>
                Indoor AR Parking Navigation
              </h3>

              <div className="pt-12 space-y-4">
                <p className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'var(--font-michroma)' }}>
                  Help drivers navigate directly to available parking spaces using Augmented Reality.
                </p>

                <div className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'var(--font-michroma)' }}>
                  <p>Features : Real-time AR navigation, Turn-by-turn indoor guidance, QR Code parking entry, Floor-by-floor navigation, Visual parking indicators, Live parking occupancy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Best For */}
          <div className="bg-white rounded-[28px] p-8 text-[#074139] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className={`${microgrammaBold.className} text-xl sm:text-2xl lg:text-3xl text-[#70C1B3]`}>
                Best For
              </h3>

              <div className={`${microgrammaBold.className} text-lg sm:text-xl lg:text-2xl text-[#167D7F] leading-snug space-y-3`}>
                <p>Shopping Malls,</p>
                <p>Airports,</p>
                <p>Hospitals,</p>
                <p>Commercial Buildings,</p>
                <p>Convention Centers</p>
              </div>
            </div>

            <div className="pt-4">
              <Link 
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#33908D] to-[#ABE2CA] text-white text-xs sm:text-sm px-8 py-3.5 rounded-full font-semibold shadow-md hover:opacity-90 transition-opacity"
                style={{ fontFamily: 'var(--font-michroma)' }}
              >
                BOOK DEMO
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 3: SMART PARKING MANAGEMENT & AI OCCUPANCY
      ========================================== */}
      <section className="space-y-8 text-center">
        <div className="space-y-2">
          <p className="text-[#1C8182] text-xs sm:text-sm uppercase tracking-wider font-semibold" style={{ fontFamily: 'var(--font-michroma)' }}>
            Smart Parking Management System
          </p>
          <h2 className={`${microgrammaBold.className} text-2xl sm:text-3xl text-[#074139]`}>
            A centralized dashboard for complete parking operations.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 text-left max-w-5xl mx-auto w-full">
          {/* Card 1: Dashboard Image */}
          <div className="lg:col-span-5 relative w-full h-full min-h-[300px] rounded-[28px] overflow-hidden shadow-md">
            <Image
              src="/Images/solutions/AI-Parking-Occupancy.jpg"
              alt="AI Parking Occupancy Detection Dashboard"
              fill
              className="object-cover"
            />
          </div>

          {/* Card 2: AI Parking Occupancy Detection */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#1C8182] to-[#AAE1C9] rounded-[28px] p-8 text-white shadow-md flex flex-col justify-between space-y-6 min-h-[500px] lg:min-h-[540px]">
            <div className="space-y-6">
              <h3 className={`${microgrammaBold.className} text-2xl sm:text-3xl tracking-wide`}>
                AI Parking Occupancy Detection
              </h3>

              <p className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'var(--font-michroma)' }}>
                Automatically detect available parking spaces using AI-powered vision systems and sensors.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'var(--font-michroma)' }}>
                <p><span className="font-semibold text-white">Technologies :</span> Computer Vision, CCTV AI Detection, Ultrasonic Sensors, Radar Sensors, Geomagnetic Sensors, Edge AI Processing.</p>
                <p><span className="font-semibold text-white">Benefits :</span> 99% occupancy visibility, Reduced manual monitoring, Faster parking decisions, Lower operational costs</p>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#33908D] to-[#ABE2CA] text-white text-xs sm:text-sm px-8 py-3.5 rounded-full font-semibold shadow-md hover:opacity-90 transition-opacity"
                style={{ fontFamily: 'var(--font-michroma)' }}
              >
                BOOK DEMO
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 4: ANPR & LICENSE PLATE RECOGNITION
      ========================================== */}
      <section className="space-y-8 text-center">
        <div className="space-y-2">
          <p className="text-[#1C8182] text-xs sm:text-sm uppercase tracking-wider font-semibold" style={{ fontFamily: 'var(--font-michroma)' }}>
            Spatial Technology with AI & ML
          </p>
          <h2 className={`${microgrammaBold.className} text-2xl sm:text-3xl text-[#074139]`}>
            ANPR & License Plate Recognition
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 text-left max-w-5xl mx-auto w-full">
          {/* Card 1: ANPR Details */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#1C8182] to-[#AAE1C9] rounded-[28px] p-8 text-white shadow-md flex flex-col justify-between space-y-6 min-h-[500px] lg:min-h-[540px]">
            <div className="space-y-6">
              <h3 className={`${microgrammaBold.className} text-xl sm:text-2xl`}>
                Automate vehicle entry and exit using Number Plate Recognition.
              </h3>

              <div className="text-xs sm:text-sm text-white space-y-1.5 leading-relaxed" style={{ fontFamily: 'var(--font-michroma)' }}>
                <p><span className="font-semibold text-white">Features:</span> Automatic vehicle recognition, Blacklist & whitelist vehicles, Visitor management, VIP vehicle access, Parking history, Automatic billing</p>
              </div>

              <div className="space-y-3 pt-4">
                <h4 className={`${microgrammaBold.className} text-base sm:text-lg text-white`}>
                  QR Code Parking Navigation
                </h4>
                <p className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'var(--font-michroma)' }}>
                  Drivers simply scan a QR code and receive instant AR navigation.
                </p>
                <div className="text-xs sm:text-sm text-white leading-relaxed pt-1" style={{ fontFamily: 'var(--font-michroma)' }}>
                  <p><span className="font-semibold text-white">Benefits:</span> No app installation required (WebAR option), Instant navigation, Faster onboarding, Contactless experience, Easy deployment</p>
                </div>
              </div>
            </div>

            {/* Accordion / Expandable Pill at bottom */}
            <div className="mt-4 rounded-2xl overflow-hidden transition-all duration-300 bg-white/20 backdrop-blur-md hover:bg-white/30">
              <button
                onClick={() => setReservationOpen(!reservationOpen)}
                className="w-full px-5 py-4 flex items-center justify-between text-xs sm:text-sm text-white transition-all"
                style={{ fontFamily: 'var(--font-michroma)' }}
              >
                <span>Parking Reservation & Booking</span>
                {reservationOpen ? <Minus className="w-4 h-4 shrink-0" /> : <Plus className="w-4 h-4 shrink-0" />}
              </button>

              <AnimatePresence>
                {reservationOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-[13px] text-white leading-relaxed flex flex-col gap-3" style={{ fontFamily: 'var(--font-michroma)' }}>
                      <p>Allow customers to reserve parking spaces before arrival.</p>
                      <p>Features : Advance booking, Time-based reservations, Premium parking, EV slot reservation, VIP parking, Digital passes</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Card 2: ANPR Image */}
          <div className="lg:col-span-5 relative w-full h-full min-h-[300px] rounded-[28px] overflow-hidden shadow-md">
            <Image
              src="/Images/solutions/Automate-vehicle-entry.jpg"
              alt="ANPR Camera & License Plate Recognition"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 5: SMART PARKING MARKETPLACE
      ========================================== */}
      <section className="space-y-8 text-center">
        <div className="space-y-4">
          <h3 className="text-[#1C8182] text-lg sm:text-xl font-medium" style={{ fontFamily: 'var(--font-michroma)' }}>
            Smart Parking Marketplace
          </h3>
          <h2 className={`${microgrammaBold.className} text-2xl sm:text-4xl text-[#074139] max-w-3xl mx-auto leading-snug`}>
            Turn your parking platform into a revenue-generating marketplace.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center max-w-5xl mx-auto w-full items-stretch">
          {/* Card 1: Services */}
          <div className="bg-gradient-to-b from-[#3C9792] to-[#59D0B5] rounded-2xl p-6 sm:p-8 text-white shadow-sm flex flex-col justify-center space-y-3 text-xs sm:text-sm font-medium" style={{ fontFamily: 'var(--font-michroma)' }}>
            <p>Car Accessories</p>
            <p>Car Cleaning Services</p>
            <p>Car Insurance</p>
            <p>FASTag Recharge</p>
            <p>PUC Services</p>
            <p>Car Detailing</p>
            <p>EV Charging</p>
            <p>Roadside Assistance</p>
            <p>Car Servicing</p>
            <p>Vehicle Accessories</p>
          </div>

          {/* Card 2: Payments */}
          <div className="bg-gradient-to-b from-[#3C9792] to-[#59D0B5] rounded-2xl p-6 sm:p-8 text-white shadow-sm flex flex-col justify-center space-y-3 text-xs sm:text-sm font-medium" style={{ fontFamily: 'var(--font-michroma)' }}>
            <p>UPI</p>
            <p>Credit Cards</p>
            <p>Debit Cards</p>
            <p>Net Banking</p>
            <p>Digital Wallets</p>
            <p>FASTag</p>
            <p>Corporate Accounts</p>
          </div>

          {/* Card 3: Valet & Operations */}
          <div className="bg-gradient-to-b from-[#3C9792] to-[#59D0B5] rounded-2xl p-6 sm:p-8 text-white shadow-sm flex flex-col justify-center space-y-3 text-xs sm:text-sm font-medium" style={{ fontFamily: 'var(--font-michroma)' }}>
            <p>Digital valet tickets</p>
            <p>Vehicle tracking</p>
            <p>Driver assignment</p>
            <p>Vehicle location</p>
            <p>Digital key management</p>
            <p>Customer notifications</p>
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 6: INTEGRATION ACCORDIONS
      ========================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start max-w-5xl mx-auto w-full">
        <div className="space-y-2 text-center pt-2 sm:pt-4">
          <p className="text-[#1C8182] text-xs sm:text-sm uppercase tracking-wider font-semibold" style={{ fontFamily: 'var(--font-michroma)' }}>
            Our quality & testing
          </p>
          <h2 className={`${microgrammaBold.className} text-2xl sm:text-3xl text-[#074139]`}>
            Precision in Every Capsule
          </h2>
        </div>

        <div className="space-y-4 text-left">
          {integrationsData.map((item) => {
            const isOpen = openIntegration === item.id
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setOpenIntegration(isOpen ? null : item.id)}
                layout
                className={`
                  group
                  relative
                  w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-[16px]
                  text-left
                  shadow-md
                  flex
                  flex-col
                  ${isOpen ? 'justify-start p-4 sm:p-5 gap-4 min-h-[140px]' : 'justify-center p-4 sm:p-5'}
                  transition-all
                  duration-300
                `}
              >
                {/* Background Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25 z-0" />

                {/* Header Bar */}
                <motion.div 
                  layout="position"
                  className="relative z-10 flex items-center justify-between w-full bg-white/20 backdrop-blur-md px-6 py-4 rounded-[12px]"
                >
                  <span className="text-[13px] sm:text-[15px] text-white tracking-wide font-light" style={{ fontFamily: 'var(--font-michroma)' }}>
                    {item.title}
                  </span>
                  <span className="text-2xl font-light leading-none text-white">
                    {isOpen ? '−' : '+'}
                  </span>
                </motion.div>

                {/* Expanded Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, height: 'auto', filter: 'blur(0px)' }}
                      exit={{ opacity: 0, height: 0, filter: 'blur(4px)' }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="relative z-10 w-full bg-white/20 backdrop-blur-md p-5 rounded-[12px] shadow-sm overflow-hidden"
                    >
                      <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[1.6] text-white/90 font-light whitespace-pre-line" style={{ fontFamily: 'var(--font-michroma)' }}>
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )
          })}
        </div>
      </section>


      {/* ==========================================
          SECTION 7: INDUSTRIES WE SERVE (TABS)
      ========================================== */}
      <section className="space-y-8 text-center">
        <div className="space-y-2">
          <p className="text-[#1C8182] text-xs sm:text-sm uppercase tracking-wider font-semibold" style={{ fontFamily: 'var(--font-michroma)' }}>
            Our Benefits
          </p>
          <h2 className={`${microgrammaBold.className} text-2xl sm:text-3xl text-[#074139]`}>
            Industries We Serve
          </h2>
        </div>

        <div className="bg-gradient-to-r from-[#187E80] to-[#ADE3CB] rounded-[32px] p-6 sm:p-10 shadow-lg text-left max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Side: Vertical Tabs */}
            <div className="lg:col-span-5 space-y-3 flex flex-col justify-center">
              {industriesData.map((item) => {
                const isActive = activeTab === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`group w-full px-5 py-3.5 rounded-2xl flex items-center justify-between text-xs sm:text-sm font-semibold transition-all text-left ${
                      isActive
                        ? 'bg-white text-[#074139] shadow-md scale-[1.02]'
                        : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md'
                    }`}
                    style={{ fontFamily: 'var(--font-michroma)' }}
                  >
                    <span>{item.name}</span>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isActive 
                        ? 'bg-[#A2F1DF] text-[#074139]' 
                        : 'bg-white/20 text-white group-hover:bg-white/30'
                    }`}>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right Side: Dynamic Content Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndustry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-[24px] p-6 sm:p-8 h-full flex flex-col justify-between shadow-md space-y-6 text-[#074139]"
                >
                  <div className="space-y-4">
                    <h3 className={`${microgrammaBold.className} text-lg sm:text-xl text-[#074139]`}>
                      {currentIndustry.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line" style={{ fontFamily: 'var(--font-michroma)' }}>
                      {currentIndustry.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 8: AI-POWERED PLATFORM FEATURES
      ========================================== */}
      <section className="space-y-8 text-center max-w-6xl mx-auto w-full">
        <div className="space-y-2">
          <p className="text-[#1C8182] text-xs sm:text-sm uppercase tracking-wider font-semibold" style={{ fontFamily: 'var(--font-michroma)' }}>
            Why Choose OBPARK?
          </p>
          <h2 className={`${microgrammaBold.className} text-2xl sm:text-3xl text-[#074139]`}>
            AI - Powered Platform
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch text-left">
          
          {/* Left Side: Teal Card with 4 Glassy Pills */}
          <div className="lg:col-span-7 bg-gradient-to-r from-[#187E80] to-[#ADE3CB] rounded-[32px] p-6 sm:p-10 shadow-lg flex flex-col gap-4 h-full">
            {['Spatial Computing Ready', 'Modular Architecture', 'Cloud - Based Dashboard', 'Enterprise Security'].map((title, i) => (
              <div 
                key={i}
                className="bg-white/20 backdrop-blur-md text-white rounded-[20px] px-6 py-5 sm:py-6 text-sm sm:text-base font-semibold text-center shadow-sm flex-1 flex items-center justify-center transition-transform hover:scale-[1.02]"
                style={{ fontFamily: 'var(--font-michroma)' }}
              >
                {title}
              </div>
            ))}
          </div>

          {/* Right Side: White Card with Feature Highlights */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-md h-full flex flex-col justify-center space-y-6 text-[12px] sm:text-[14px] leading-relaxed font-semibold" style={{ fontFamily: 'var(--font-michroma)' }}>
              <p className="bg-gradient-to-r from-[#1A817F] to-[#59D0B5] bg-clip-text text-transparent">Leverage Artificial Intelligence for predictive parking, occupancy detection, analytics, and automation.</p>
              <p className="bg-gradient-to-r from-[#1A817F] to-[#59D0B5] bg-clip-text text-transparent">Deliver immersive indoor navigation through AR, Mixed Reality, and 3D mapping.</p>
              <p className="bg-gradient-to-r from-[#1A817F] to-[#59D0B5] bg-clip-text text-transparent">Start with one solution and expand as your business grows.</p>
              <p className="bg-gradient-to-r from-[#1A817F] to-[#59D0B5] bg-clip-text text-transparent">Manage multiple parking locations from a single centralized platform.</p>
              <p className="bg-gradient-to-r from-[#1A817F] to-[#59D0B5] bg-clip-text text-transparent">Built with enterprise-grade authentication, encrypted communication, role-based access, and secure cloud infrastructure.</p>
            </div>
          </div>

        </div>
      </section>


      </main>

      {/* ==========================================
          SECTION 9: FAQ SECTION
      ========================================== */}
      <section className="w-full px-3 sm:px-5 pt-8 sm:pt-12 pb-12 sm:pb-20 bg-[#F0F9F5]">
        <div className="w-full bg-gradient-to-r from-[#187E80] to-[#ADE3CB] py-14 sm:py-20 px-6 sm:px-10 rounded-[24px] shadow-lg">
          <div className="max-w-5xl mx-auto w-full">
            <div className="mb-10 text-left">
              <p className="mb-3 text-[13px] sm:text-[14px] text-white tracking-wider uppercase font-semibold" style={{ fontFamily: 'var(--font-michroma)' }}>
                Questions
              </p>
              <h2 className={`${microgrammaBold.className} text-2xl sm:text-3xl md:text-[36px] text-white font-bold`}>
                We&apos;ve got answers
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-5 sm:gap-6 w-full items-start">
              {/* COLUMN 1 */}
              <div className="flex flex-col gap-5 sm:gap-6 w-full md:w-1/2">
                {faqData.map((item, index) => {
                  if (index % 2 !== 0) return null
                  const isOpen = openFaq === item.id
                  return (
                    <div 
                      key={item.id} 
                      className="flex flex-col rounded-[20px] transition-all duration-300 overflow-hidden bg-white shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : item.id)}
                        className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between transition-colors text-[#1C8182]"
                      >
                        <span
                          className="text-[13px] sm:text-[14px] font-semibold tracking-wide"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          {item.question}
                        </span>
                        {isOpen ? (
                          <Minus className="w-5 h-5 shrink-0 text-[#1C8182]" />
                        ) : (
                          <Plus className="w-5 h-5 shrink-0 text-[#1C8182]" />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="px-6 sm:px-8 pb-5 sm:pb-6"
                          >
                            <p
                              className="text-[#074139] text-[12px] sm:text-[13px] leading-[1.7] whitespace-pre-line font-medium"
                              style={{ fontFamily: 'var(--font-michroma)' }}
                            >
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>

              {/* COLUMN 2 */}
              <div className="flex flex-col gap-5 sm:gap-6 w-full md:w-1/2">
                {faqData.map((item, index) => {
                  if (index % 2 === 0) return null
                  const isOpen = openFaq === item.id
                  return (
                    <div 
                      key={item.id} 
                      className="flex flex-col rounded-[20px] transition-all duration-300 overflow-hidden bg-white shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : item.id)}
                        className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between transition-colors text-[#1C8182]"
                      >
                        <span
                          className="text-[13px] sm:text-[14px] font-semibold tracking-wide"
                          style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                          {item.question}
                        </span>
                        {isOpen ? (
                          <Minus className="w-5 h-5 shrink-0 text-[#1C8182]" />
                        ) : (
                          <Plus className="w-5 h-5 shrink-0 text-[#1C8182]" />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="px-6 sm:px-8 pb-5 sm:pb-6"
                          >
                            <p
                              className="text-[#074139] text-[12px] sm:text-[13px] leading-[1.7] whitespace-pre-line font-medium"
                              style={{ fontFamily: 'var(--font-michroma)' }}
                            >
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
