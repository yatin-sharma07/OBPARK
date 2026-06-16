'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'

export function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Always show navbar near the top
            if (currentScrollY <= 100) {
                setShowNavbar(true)
            }
            // Scrolling down after 100px = hide navbar
            else if (currentScrollY > lastScrollY.current) {
                setShowNavbar(false)
            }
            // Scrolling up anywhere = show navbar
            else {
                setShowNavbar(true)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <motion.nav
            initial={{ opacity: 1, y: 0 }}
            animate={{
                opacity: showNavbar ? 1 : 0,
                y: showNavbar ? 0 : -40,
                pointerEvents: showNavbar ? 'auto' : 'none',
            }}
            transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
    fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50
    flex items-center justify-between
    w-[calc(100%_-_24px)] md:w-[calc(100%_-_48px)]
    h-[clamp(70px,15svh,130px)]
    px-3 sm:px-4 md:px-8
    rounded-[30px] md:rounded-[40px]
    border border-white/35
    overflow-hidden
    backdrop-blur-xl
    shadow-[0_8px_32px_rgba(7,65,57,0.18)]
  "
            style={{
                background:
                    'linear-gradient(to bottom, rgba(89, 208, 181, 0.38) 0%, rgba(202, 237, 229, 0.22) 100%)',
            }}
        >
            <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 min-w-0">
                <Link
                    href="/about"
                    className="text-[#074139] text-xs lg:text-base xl:text-lg font-normal whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                >
                    About
                </Link>

                <Link
                    href="/products"
                    className="text-[#074139] text-xs lg:text-base xl:text-lg font-normal whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                >
                    Shop
                </Link>

                <Link
                    href="#app"
                    className="text-[#074139] text-xs lg:text-base xl:text-lg font-normal whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-michroma)' }}
                >
                    App Download
                </Link>
            </div>

            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                <span
                    className={`
            ${microgrammaBold.className}
            text-[#074139] tracking-[0.12em]
            whitespace-nowrap text-[clamp(18px,5vw,40px)]
          `}
                >
                    OBPARK
                    <sup
                        className="text-[0.45em] align-super ml-0.5"
                        style={{ fontFamily: 'Arial, sans-serif' }}
                    >
                        ©
                    </sup>
                </span>
            </Link>

            <div className="hidden md:flex justify-end flex-1 min-w-0">
                <Link
                    href="/register"
                    className="
            flex items-center gap-2
            px-4 lg:px-6 py-2.5 lg:py-3
            rounded-full whitespace-nowrap
            text-xs lg:text-sm font-normal
            text-[#A2F1DF] bg-[#074139]
          "
                    style={{ fontFamily: 'var(--font-michroma)' }}
                >
                    SCHEDULE CALL ↗
                </Link>
            </div>

            <div className="md:hidden ml-auto">
                <Link
                    href="/register"
                    className="
            flex items-center gap-1
            px-3 sm:px-4 py-2
            rounded-full
            text-[10px] sm:ztext-[11px]
            text-[#A2F1DF] bg-[#074139]
            whitespace-nowrap
          "
                    style={{ fontFamily: 'var(--font-michroma)' }}
                >
                    START ↗
                </Link>
            </div>
        </motion.nav>
    )
}