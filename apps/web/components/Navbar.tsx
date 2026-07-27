'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'
import {
    ScanLine,
    Wind,
    Box,
    Zap,
    Wrench,
    PlugZap,
    Shield,
    Banknote
} from 'lucide-react'
const mobileLinks = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Solutions',
        href: '/solutions',
    },
    {
        label: 'Resources',
        href: '/resources',
    },
    {
        label: 'Get App',
        href: '#app',
    },
]

export function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            setIsScrolled(currentScrollY > 40)

            if (currentScrollY <= 100) {
                setShowNavbar(true)
            } else if (currentScrollY > lastScrollY.current) {
                setShowNavbar(false)
                setMobileMenuOpen(false)
            } else {
                setShowNavbar(true)
            }

            lastScrollY.current = currentScrollY
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <motion.nav
                initial={{ opacity: 1, y: 0 }}
                animate={{
                    opacity: showNavbar ? 1 : 0,
                    y: showNavbar ? 0 : -32,
                }}
                transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={`
          fixed
          z-50

          flex items-center justify-between


          sm:h-[56px]
          md:h-[70px]
          lg:h-[80px]
          xl:h-[88px]

          min-h-[50px]
          max-h-[88px]

          px-4
          sm:px-5
          md:px-7
          lg:px-8

          border-none

          

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${showNavbar ? 'pointer-events-auto' : 'pointer-events-none'}

          top-2
          left-4
          right-4

          sm:top-2
          sm:left-8
          sm:right-8

          md:top-3
          md:left-12
          md:right-12

          xl:left-0
          xl:right-0
          xl:mx-auto
          xl:w-full
          xl:max-w-[1300px]

          rounded-full
        `}
                style={{
                    background: 'rgba(89, 208, 181, 0.10)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                }}
            >
                {/* LOGO - LEFT */}
                <div className="flex items-center flex-1 min-w-0">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                        <img src="/Images/Navbar/app_icon.svg" alt="OBPARK" className="h-[28px] sm:h-[36px] md:h-[44px] lg:h-[48px] object-contain" />
                    </Link>
                </div>

                {/* CENTER LINKS - DESKTOP */}
                <div className="hidden md:flex items-center justify-center gap-4 lg:gap-5 xl:gap-7 shrink-0">
                    <Link
                        href="/"
                        className="
              text-[#074139]
              text-[10px]
              lg:text-xs
              xl:text-sm
              font-normal
              whitespace-nowrap
              transition-opacity
              hover:opacity-70
            "
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="
              text-[#074139]
              text-[10px]
              lg:text-xs
              xl:text-sm
              font-normal
              whitespace-nowrap
              transition-opacity
              hover:opacity-70
            "
                    >
                        About
                    </Link>

                    {/* SOLUTIONS DROPDOWN */}
                    <div className="relative group py-4 -my-4">
                        <Link
                            href="/solutions"
                            className="
                              text-[#074139]
                              text-[10px]
                              lg:text-xs
                              xl:text-sm
                              font-normal
                              whitespace-nowrap
                              transition-opacity
                              hover:opacity-70
                            "
                        >
                            Solutions
                        </Link>

                        {/* Dropdown Card */}
                        <div className="absolute top-full left-0 min-w-[280px] bg-[#0b3830] rounded-[20px] p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl border border-white/10 mt-2 pointer-events-auto">
                            <h3 className={`${microgrammaBold.className} text-white text-lg tracking-wider mb-2`}>SOLUTIONS</h3>
                            <p className={`${microgrammaBold.className} text-white/80 text-[9px] mb-3 uppercase leading-relaxed tracking-wider`}>SERVICES TAILORED FOR INDUSTRIES.<br/>ENGINEERED FOR IMMERSION.</p>
                            
                            <div className="flex flex-col border-t border-white/20 pt-2">
                                <Link href="/e-challan" className="flex items-center gap-3 text-white hover:text-[#59D0B5] transition-colors py-3 border-b border-white/10">
                                    <ScanLine className="w-4 h-4 opacity-80" />
                                    <span className={`${microgrammaBold.className} text-xs tracking-wider font-light`}>E - Challan</span>
                                </Link>
                                <Link href="/services/puc" className="flex items-center gap-3 text-white hover:text-[#59D0B5] transition-colors py-3 border-b border-white/10">
                                    <Wind className="w-4 h-4 opacity-80" />
                                    <span className={`${microgrammaBold.className} text-xs tracking-wider font-light`}>Pollution Under Control (PUC)</span>
                                </Link>
                                <Link href="/services/vehicle-owner" className="flex items-center gap-3 text-white hover:text-[#59D0B5] transition-colors py-3 border-b border-white/10">
                                    <Box className="w-4 h-4 opacity-80" />
                                    <span className={`${microgrammaBold.className} text-xs tracking-wider font-light`}>Vehicles Details</span>
                                </Link>
                                <Link href="/services/fastag" className="flex items-center gap-3 text-white hover:text-[#59D0B5] transition-colors py-3 border-b border-white/10">
                                    <Zap className="w-4 h-4 opacity-80" />
                                    <span className={`${microgrammaBold.className} text-xs tracking-wider font-light`}>Fastag</span>
                                </Link>
                                <Link href="/services/car-services" className="flex items-center gap-3 text-white hover:text-[#59D0B5] transition-colors py-3 border-b border-white/10">
                                    <Wrench className="w-4 h-4 opacity-80" />
                                    <span className={`${microgrammaBold.className} text-xs tracking-wider font-light`}>Car Services</span>
                                </Link>
                                <Link href="/services/ev-charging" className="flex items-center gap-3 text-white hover:text-[#59D0B5] transition-colors py-3 border-b border-white/10">
                                    <PlugZap className="w-4 h-4 opacity-80" />
                                    <span className={`${microgrammaBold.className} text-xs tracking-wider font-light`}>EV Stations</span>
                                </Link>
                                <Link href="/services/car-insurance" className="flex items-center gap-3 text-white hover:text-[#59D0B5] transition-colors py-3 border-b border-white/10">
                                    <Shield className="w-4 h-4 opacity-80" />
                                    <span className={`${microgrammaBold.className} text-xs tracking-wider font-light`}>Car Insurance</span>
                                </Link>
                                <Link href="/products" className="flex items-center gap-3 text-white hover:text-[#59D0B5] transition-colors py-3 border-b border-white/10">
                                    <Banknote className="w-4 h-4 opacity-80" />
                                    <span className={`${microgrammaBold.className} text-xs tracking-wider font-light`}>Car Loan</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* RESOURCES DROPDOWN */}
                    <div className="relative group py-4 -my-4">
                        <Link
                            href="/resources"
                            className="
                              text-[#074139]
                              text-[10px]
                              lg:text-xs
                              xl:text-sm
                              font-normal
                              whitespace-nowrap
                              transition-opacity
                              hover:opacity-70
                            "
                        >
                            Resources
                        </Link>

                        {/* Dropdown Card */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 min-w-[640px] bg-[#0b3830] rounded-[20px] p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl border border-white/10 mt-2 pointer-events-auto flex">
                            
                            {/* Left Column: Resource Library & E-Book */}
                            <div className="flex-1 pr-8 border-r border-white/20 flex flex-col">
                                <h3 className={`${microgrammaBold.className} text-white text-xl tracking-wider mb-4`}>OBRIVE RESOURCE LIBRARY</h3>
                                <p className={`${microgrammaBold.className} text-white/90 text-[11px] uppercase leading-[1.6] tracking-wider mb-6`}>A COLLECTION OF BLOGS, INDUSTRY INSIGHTS, AND RESOURCES SHAPING THE FUTURE OF IMMERSIVE TECHNOLOGY.</p>
                                
                                <Link href="/resources" className={`${microgrammaBold.className} text-white text-[13px] tracking-widest uppercase hover:text-[#59D0B5] transition-colors pb-6 block border-b border-white/20 mb-6`}>READ MORE</Link>
                                
                                <div className="flex gap-5 mt-auto">
                                    {/* E-Book Mockup */}
                                    <div className="w-[130px] shrink-0 bg-[#c2f2e5] rounded-lg p-3 flex flex-col overflow-hidden relative min-h-[160px]">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-2 h-4 bg-[#0b3830] rounded-full shadow-inner"></div>
                                            <span className="text-[7px] font-semibold text-[#0b3830]">E-Book</span>
                                        </div>
                                        <div className="text-[#0b3830] text-[8px] leading-tight font-medium relative z-10 border-b border-[#0b3830]/10 pb-1 mb-1">Discover how AR,</div>
                                        <div className="text-[#0b3830] text-[8px] leading-tight font-medium relative z-10 border-b border-[#0b3830]/10 pb-1 mb-1">VR, MR, and spatial</div>
                                        <div className="text-[#0b3830] text-[8px] leading-tight font-medium relative z-10 border-b border-[#0b3830]/10 pb-1 mb-1">redefining industries</div>
                                        <div className="text-[#0b3830] text-[8px] leading-tight font-medium relative z-10">worldwide.</div>
                                        
                                        {/* Spiral decoration placeholder */}
                                        <div className="absolute -bottom-8 -right-4 w-32 h-32 opacity-40">
                                            <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#0b3830]" fill="none" strokeWidth="0.5">
                                                {Array.from({length: 15}).map((_, i) => (
                                                    <ellipse key={i} cx="50" cy="50" rx={40 - i*2} ry={20} transform={`rotate(${i * 12} 50 50)`} />
                                                ))}
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <h4 className={`${microgrammaBold.className} text-white text-xl tracking-wider mb-3`}>E-Book</h4>
                                        <p className={`${microgrammaBold.className} text-white/90 text-[9px] uppercase leading-[1.6] tracking-wider mb-5`}>DOWNLOAD YOUR FREE E-BOOK AND DISCOVER HOW IMMERSIVE TECHNOLOGIES CAN TRANSFORM YOUR BUSINESS OPERATIONS.</p>
                                        <Link href="/resources/ebook" className={`${microgrammaBold.className} text-white text-xs tracking-widest uppercase hover:text-[#59D0B5] transition-colors`}>DOWNLOAD</Link>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Column: Support */}
                            <div className="flex-1 pl-8">
                                <h3 className={`${microgrammaBold.className} text-white text-xl tracking-wider mb-4`}>SUPPORT</h3>
                                <p className={`${microgrammaBold.className} text-white/90 text-[11px] uppercase leading-[1.6] tracking-wider mb-8`}>EXPERT INSIGHTS, GUIDES, AND TOOLS TO POWER IMMERSIVE INNOVATION</p>
                                
                                <div className="flex flex-col">
                                    <Link href="/help" className={`${microgrammaBold.className} font-light text-white hover:text-[#59D0B5] transition-colors py-4 border-t border-white/20 tracking-wider text-[13px]`}>OB Help Center</Link>
                                    <Link href="/help/products-faq" className={`${microgrammaBold.className} font-light text-white hover:text-[#59D0B5] transition-colors py-4 border-t border-white/20 tracking-wider text-[13px]`}>OB Products FAQ</Link>
                                    <Link href="/help/services-faq" className={`${microgrammaBold.className} font-light text-white hover:text-[#59D0B5] transition-colors py-4 border-t border-white/20 tracking-wider text-[13px]`}>OB Services FAQ</Link>
                                    <Link href="/community" className={`${microgrammaBold.className} font-light text-white hover:text-[#59D0B5] transition-colors py-4 border-t border-white/20 tracking-wider text-[13px]`}>Community Forum</Link>
                                    <Link href="/changelog" className={`${microgrammaBold.className} font-light text-white hover:text-[#59D0B5] transition-colors py-4 border-t border-white/20 tracking-wider text-[13px]`}>Change Log</Link>
                                    <Link href="/legal" className={`${microgrammaBold.className} font-light text-white hover:text-[#59D0B5] transition-colors py-4 border-y border-white/20 tracking-wider text-[13px]`}>Legal</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* RIGHT BUTTON - DESKTOP */}
                <div
                    className="
            hidden md:flex
            justify-end
            flex-1
            min-w-0
          "
                >
                    {/* GET APP PILL */}
                    <Link
                        href="#app"
                        className="
                          flex items-center justify-center gap-2
                          px-5 py-2.5
                          rounded-full
                          whitespace-nowrap
                          text-[11px] lg:text-xs xl:text-sm
                          font-medium
                          text-white
                        "
                        style={{
                          background: 'linear-gradient(90deg, #1A817F 0%, #59D0B5 100%)',
                          fontFamily: 'var(--font-michroma)'
                        }}
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0" />
                        <span>GET APP</span>
                    </Link>

                    {/* PHONE CIRCLE */}
                    <Link
                        href="tel:+918884774300"
                        className="
                          w-10 h-10 lg:w-11 lg:h-11
                          flex-shrink-0 transition-transform duration-300 hover:scale-110 rounded-full
                        "
                        aria-label="Call support"
                    >
                        <img
                            src="/Images/Navbar/phone.svg"
                            alt="Call support"
                            className="w-full h-full object-contain"
                        />
                    </Link>

                    {/* SHOP/BASKET CIRCLE */}
                    <Link
                        href="/products"
                        className="
                          w-10 h-10 lg:w-11 lg:h-11
                          flex-shrink-0 transition-all duration-300 
                          hover:scale-110 hover:-translate-y-0.5 
                          hover:shadow-[0_4px_12px_rgba(26,129,127,0.2)] 
                          rounded-full
                        "
                        aria-label="View shop basket"
                    >
                        <img
                            src="/Images/Navbar/shop.svg"
                            alt="View shop"
                            className="w-full h-full object-contain"
                        />
                    </Link>
                </div>

                {/* HAMBURGER - MOBILE */}
                <div
                    className="
            md:hidden
            ml-auto
            flex items-center justify-end
          "
                >
                    <button
                        type="button"
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        className="
              relative
              flex
              h-[36px]
              w-[42px]
              items-center
              justify-center
              rounded-full
              bg-[#074139]
              overflow-hidden
            "
                    >
                        <motion.span
                            animate={{
                                rotate: mobileMenuOpen ? 45 : 0,
                                y: mobileMenuOpen ? 0 : -6,
                            }}
                            transition={{
                                duration: 0.28,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                absolute
                h-[1.5px]
                w-[18px]
                rounded-full
                bg-[#A2F1DF]
              "
                        />

                        <motion.span
                            animate={{
                                opacity: mobileMenuOpen ? 0 : 1,
                                scaleX: mobileMenuOpen ? 0 : 1,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                absolute
                h-[1.5px]
                w-[18px]
                rounded-full
                bg-[#A2F1DF]
              "
                        />

                        <motion.span
                            animate={{
                                rotate: mobileMenuOpen ? -45 : 0,
                                y: mobileMenuOpen ? 0 : 6,
                            }}
                            transition={{
                                duration: 0.28,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                absolute
                h-[1.5px]
                w-[18px]
                rounded-full
                bg-[#A2F1DF]
              "
                        />
                    </button>
                </div>
            </motion.nav>

            {/* MOBILE DROPDOWN */}
            <AnimatePresence>
                {mobileMenuOpen && showNavbar && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -16,
                            scale: 0.96,
                            filter: 'blur(8px)',
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: 'blur(0px)',
                        }}
                        exit={{
                            opacity: 0,
                            y: -16,
                            scale: 0.96,
                            filter: 'blur(8px)',
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`
              fixed

              z-40

              md:hidden

              rounded-[22px]
              border border-[#59D0B5]/70
              overflow-hidden
              shadow-[0_10px_30px_rgba(7,65,57,0.16)]

              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

                    top-[64px]
                    left-3
                    right-3

                    sm:top-[72px]
                    sm:left-4
                    sm:right-4
                  `}
                        style={{
                            background: 'linear-gradient(to bottom, #CAEDE5 0%, #EAF8F4 100%)',
                        }}
                    >
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: {
                                    transition: {
                                        staggerChildren: 0.055,
                                        delayChildren: 0.06,
                                    },
                                },
                                closed: {
                                    transition: {
                                        staggerChildren: 0.035,
                                        staggerDirection: -1,
                                    },
                                },
                            }}
                            className="
                flex
                flex-col
                p-2
              "
                        >
                            {mobileLinks.map((item) => (
                                <motion.div
                                    key={item.label}
                                    variants={{
                                        open: {
                                            opacity: 1,
                                            y: 0,
                                        },
                                        closed: {
                                            opacity: 0,
                                            y: -8,
                                        },
                                    }}
                                    transition={{
                                        duration: 0.22,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="
                      flex
                      items-center
                      justify-between
                      rounded-[16px]

                      px-4
                      py-3.5

                      text-[11px]
                      sm:text-xs
                      tracking-[0.04em]
                      text-[#074139]

                      transition-colors
                      hover:bg-[#59D0B5]/25
                    "
                                    >
                                        <span>{item.label}</span>
                                        <span>↗</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}