'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'

const mobileLinks = [
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Shop',
        href: '/products',
    },
    {
        label: 'App Download',
        href: '#app',
    },
    {
        label: 'Schedule Call',
        href: '/register',
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


          sm:h-[64px]
          md:h-[80px]
          lg:h-[90px]
          xl:h-[100px]

          min-h-[58px]
          max-h-[100px]

          px-4
          sm:px-5
          md:px-7
          lg:px-8

          border border-[#59D0B5]/70
          overflow-hidden

          

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${showNavbar ? 'pointer-events-auto' : 'pointer-events-none'}

          ${isScrolled
                        ? `
                top-3
                left-4
                right-4

                sm:top-4
                sm:left-8
                sm:right-8

                md:top-5
                md:left-12
                md:right-12

                xl:left-0
                xl:right-0
                xl:mx-auto
                xl:w-full
                xl:max-w-[1300px]

                rounded-full
              `
                        : `
                top-0
                left-0
                right-0

                rounded-none
              `
                    }
        `}
                style={{
                    background: 'rgba(89, 208, 181, 0.25)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                }}
            >
                {/* LEFT LINKS - DESKTOP */}
                <div
                    className="
            hidden md:flex
            items-center
            gap-4
            lg:gap-5
            xl:gap-7
            flex-1
            min-w-0
          "
                >
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

                    <Link
                        href="/products"
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
                        Shop
                    </Link>

                    <Link
                        href="#app"
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
                        App Download
                    </Link>
                </div>

                {/* LOGO */}
                <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="
            absolute
            left-4

            sm:left-1/2
            sm:-translate-x-1/2

            md:left-1/2
            md:-translate-x-1/2

            max-w-[55%]
            sm:max-w-none
            min-w-0
          "
                >
                    <span
                        className={`
              ${microgrammaBold.className}
              block
              text-[#074139]
              tracking-[0.10em]
              sm:tracking-[0.12em]
              whitespace-nowrap
              leading-none

              text-[22px]
              xs:text-[24px]
              sm:text-[28px]
              md:text-[30px]
              lg:text-[34px]
              xl:text-[38px]
            `}
                    >
                        OBPARK
                        <sup
                            className="text-[0.38em] align-super ml-0.5"
                            style={{ fontFamily: 'Arial, sans-serif' }}
                        >
                            ©
                        </sup>
                    </span>
                </Link>

                {/* RIGHT BUTTON - DESKTOP */}
                <div
                    className="
            hidden md:flex
            justify-end
            flex-1
            min-w-0
          "
                >
                    <Link
                        href="https://calendly.com/obrive-inc/talk-to-ob-experts?month=2026-06"
                        className="
              flex items-center justify-center gap-2

              min-w-[132px]
              lg:min-w-[150px]
              xl:min-w-[166px]

              px-4
              lg:px-5
              xl:px-6

              py-2.5
              lg:py-3

              rounded-full
              whitespace-nowrap

              text-[10px]
              lg:text-xs

              font-normal

              text-[#A2F1DF]
              bg-[#074139]

              transition-transform
              hover:scale-[1.03]
            "
                    >
                        SCHEDULE CALL   <img src="/Images/Navbar/Vector.png" alt="" className='ml-2' />
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

              ${isScrolled
                                ? `
                    top-[76px]
                    left-3
                    right-3

                    sm:top-[88px]
                    sm:left-4
                    sm:right-4
                  `
                                : `
                    top-[64px]
                    left-0
                    right-0

                    sm:top-[70px]
                  `
                            }
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