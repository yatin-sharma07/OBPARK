'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from "gsap"

const slides = [
  {
    image: '/Images/login/login1.png',
    title: 'Get your car loans approved',
  },
  {
    image: '/Images/login/login2.png',
    title: 'See the locations of EV charging stations',
  },
  {
    image: '/Images/login/login3.png',
    title: 'Shop Your Car parts at OBPARK',
  },
]

export default function LoginPage() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const imageRevealRef = useRef<HTMLDivElement | null>(null)
  const rightPanelRef = useRef<HTMLDivElement | null>(null)
  const formWrapRef = useRef<HTMLDivElement | null>(null)
  const formItemsRef = useRef<HTMLDivElement[]>([])

  const [activeImage, setActiveImage] = useState(0)
  const [startSlider, setStartSlider] = useState(false)
  const [isRegister, setIsRegister] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imageRevealRef.current, {
        opacity: 1,
        clipPath: 'ellipse(0% 0% at 50% 50%)',
        WebkitClipPath: 'ellipse(0% 0% at 50% 50%)',
      })

      gsap.set('.login-left-image', {
        scale: 1.16,
        filter: 'blur(10px)',
        transformOrigin: 'center center',
      })

      gsap.set(rightPanelRef.current, {
        scaleX: 0,
        rotateY: -16,
        opacity: 0,
        transformOrigin: 'left center',
      })

      gsap.set(formItemsRef.current, {
        opacity: 0,
        y: 22,
      })

      const tl = gsap.timeline({
        defaults: {
          ease: 'power4.inOut',
        },
        onComplete: () => {
          setStartSlider(true)
        },
      })

      tl.to(imageRevealRef.current, {
        clipPath: 'ellipse(120% 120% at 50% 50%)',
        WebkitClipPath: 'ellipse(120% 120% at 50% 50%)',
        duration: 3.2,
      })

      tl.to(
        '.login-left-image',
        {
          scale: 1,
          filter: 'blur(0px)',
          duration: 3.2,
          ease: 'power3.out',
        },
        '<'
      )

      tl.to(
        rightPanelRef.current,
        {
          scaleX: 1,
          rotateY: 0,
          opacity: 1,
          duration: 1.6,
          ease: 'expo.out',
        },
        '-=1.5'
      )

      tl.to(
        formItemsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: 'power3.out',
        },
        '-=0.75'
      )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!startSlider) return

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % slides.length)
    }, 3800)

    return () => clearInterval(interval)
  }, [startSlider])

  useEffect(() => {
    if (!formWrapRef.current) return

    gsap.fromTo(
      formWrapRef.current,
      {
        opacity: 0,
        y: 18,
        scale: 0.985,
        filter: 'blur(8px)',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.55,
        ease: 'power3.out',
      }
    )
  }, [isRegister])

  const addFormItemRef = (el: HTMLDivElement | null) => {
    if (el && !formItemsRef.current.includes(el)) {
      formItemsRef.current.push(el)
    }
  }

  return (
    <main
      ref={rootRef}
      className="h-screen w-full overflow-hidden bg-[#59D0B559] flex items-center justify-center p-3 sm:p-4"
    >
      <div className="w-full lg:w-[90vw] lg:max-w-none h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] rounded-[18px] overflow-hidden bg-[#59D0B559] shadow-2xl perspective-[1200px]">

        {/* Left Image Section - Hidden on Mobile */}
        <div className="relative hidden h-full overflow-hidden bg-transparent lg:block">
          <div
            ref={imageRevealRef}
            className="absolute inset-0 overflow-hidden"
          >
            {slides.map((slide, index) => (
              <img
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                className={`
                  login-left-image
                  absolute inset-0 h-full w-full object-cover
                  transition-[opacity,transform] duration-[1400ms] ease-out
                  ${activeImage === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
                `}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60">
                Welcome Back
              </p>

              <h1 className="mt-3 max-w-[620px] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                {slides[activeImage].title}
              </h1>
            </div>
          </div>
        </div>

        {/* Right Auth Section */}
        <div
          ref={rightPanelRef}
          className="relative h-full flex items-center justify-center bg-white px-6 py-8 sm:px-10 lg:px-12 rounded-[18px] lg:rounded-none"
        >
          <div ref={formWrapRef} className="w-full max-w-[460px]">
            {!isRegister ? (
              <>
                {/* Login Form */}
                <div ref={addFormItemRef}>
                  <h2 className="text-3xl font-semibold text-black">
                    Login
                  </h2>

                  <p className="mt-2 text-sm text-black/50">
                    Enter your details to access your account.
                  </p>
                </div>

                <div ref={addFormItemRef} className="mt-8">
                  <label className="text-sm font-medium text-black/70">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div ref={addFormItemRef} className="mt-5">
                  <label className="text-sm font-medium text-black/70">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div
                  ref={addFormItemRef}
                  className="mt-4 flex items-center justify-between text-sm"
                >
                  <label className="flex items-center gap-2 text-black/60">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <button className="text-black font-medium">
                    Forgot password?
                  </button>
                </div>

                <div ref={addFormItemRef} className="mt-7">
                  <button className="w-full rounded-lg bg-black py-3 text-white font-medium transition hover:bg-black/85">
                    Login
                  </button>
                </div>

                <div ref={addFormItemRef} className="mt-4">
                  <button className="w-full rounded-lg border border-black/10 py-3 text-black font-medium transition hover:bg-black/5">
                    Continue with Google
                  </button>
                </div>

                <div
                  ref={addFormItemRef}
                  className="mt-8 text-center text-sm text-black/50"
                >
                  Don&apos;t have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsRegister(true)}
                    className="font-medium text-black"
                  >
                    Sign up
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Register Form */}
                <div>
                  <h2 className="text-3xl font-semibold text-black">
                    Create Account
                  </h2>

                  <p className="mt-2 text-sm text-black/50">
                    Register to start using OBPARK services.
                  </p>
                </div>

                <div className="mt-8">
                  <label className="text-sm font-medium text-black/70">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div className="mt-5">
                  <label className="text-sm font-medium text-black/70">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div className="mt-5">
                  <label className="text-sm font-medium text-black/70">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div className="mt-5">
                  <label className="text-sm font-medium text-black/70">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Create password"
                    className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div className="mt-7">
                  <button className="w-full rounded-lg bg-black py-3 text-white font-medium transition hover:bg-black/85">
                    Create Account
                  </button>
                </div>

                <div className="mt-4">
                  <button className="w-full rounded-lg border border-black/10 py-3 text-black font-medium transition hover:bg-black/5">
                    Continue with Google
                  </button>
                </div>

                <div className="mt-8 text-center text-sm text-black/50">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsRegister(false)}
                    className="font-medium text-black"
                  >
                    Login
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </main>
  )
}