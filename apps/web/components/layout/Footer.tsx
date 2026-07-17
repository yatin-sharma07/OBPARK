'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'
import { usePathname } from 'next/navigation'

const aboutLinks = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'My Account', href: '/account' },
  { label: 'Shop Now', href: '/shop' },
  { label: 'Obrive', href: '/obrive' },
  { label: 'Contact Us', href: '/contact' },
]

const supportLinks = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Platform Policy', href: '/platform-policy' },
  { label: 'Business & Partner Policy', href: '/business-policy' },
  { label: 'Payment Gateway & Compliance', href: '/payment-compliance' },
  { label: 'Enterprise & Regulatory', href: '/enterprise-regulatory' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/obrive-industries',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.27 19.5h-2.73v-9h2.73v9zm-1.37-10.27a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zm12.64 10.27h-2.73v-4.72c0-1.13-.02-2.58-1.57-2.58-1.57 0-1.81 1.23-1.81 2.5v4.8h-2.73v-9h2.62v1.23h.04c.36-.69 1.25-1.42 2.59-1.42 2.77 0 3.28 1.82 3.28 4.19v5z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/obrive.inc',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/obriveindustries/',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 13.5h2.5l1-3.5H14V7.8c0-.9.3-1.5 1.5-1.5H17V3.2c-.3-.04-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V10H8.5v3.5H11V22h3v-8.5z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/obriveinc',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@obrive.inc',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z" />
      </svg>
    ),
  },
]

export function Footer() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const updateForm = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className={`w-full px-4 pb-4 sm:px-5 sm:pb-5 ${isHome ? 'bg-white' : ''}`}
    >
      <div
        className="w-full rounded-[18px] py-6 sm:py-8 md:py-12 px-0 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #CAEDE5 0%, #59D0B5 100%)',
        }}
      >
        <div className="max-w-[1300px] mx-auto w-full px-6 sm:px-8 md:px-12 xl:px-0">
        <div className="flex items-center justify-between gap-4 pb-8 mb-8 border-b border-black">
          <span
            className={`${microgrammaBold.className} text-3xl sm:text-4xl md:text-[56px] leading-none`}
            style={{ color: '#074139' }}
          >
            OBPARK
            <sup className="ml-[2px] align-super font-sans text-[0.45em]">
              ©
            </sup>
          </span>

          <div className="flex items-center gap-2 sm:gap-3">
             {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  backgroundColor: 'rgba(7,65,57,0.12)',
                  color: '#074139',
                }}
                aria-label={`Visit our ${s.label} page`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[150px_min-content_1fr] gap-8 lg:gap-12">
          <FooterLinks title="About" links={aboutLinks} />

          <FooterLinks title="Support" links={supportLinks} />

          <div className="sm:col-span-2 lg:col-span-1 lg:justify-self-end">
            <FooterTitle>Subscribe to our newsletter</FooterTitle>

            <div
              className="w-full lg:w-[460px] rounded-xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <InputField
                  label="First Name"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={(value) => updateForm('firstName', value)}
                />

                <InputField
                  label="Last Name"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={(value) => updateForm('lastName', value)}
                />
              </div>

              <InputField
                label="Email Id"
                placeholder="Email"
                value={form.email}
                onChange={(value) => updateForm('email', value)}
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${microgrammaBold.className} w-full py-3 rounded-full text-sm transition-opacity hover:opacity-90`}
                style={{
                  backgroundColor: '#074139',
                  color: '#FFFFFF',
                  fontSize: '14px',
                }}
              >
                Submit
              </motion.button>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-1 flex justify-between">
          <div className="flex gap-3">
            <Link
              href="/privacy-policy"
              className="block text-xs hover:opacity-70"
              style={{
                color: '#074139',
                fontFamily: 'var(--font-michroma)',
              }}
            >
              Privacy Policy
            </Link>

            <Link
              href="/legal-compliance"
              className="block text-xs hover:opacity-70"
              style={{
                color: '#074139',
                fontFamily: 'var(--font-michroma)',
              }}
            >
              Legal & Compliance
            </Link>

            <Link
              href="/cookie-policy"
              className="block text-xs hover:opacity-70"
              style={{
                color: '#074139',
                fontFamily: 'var(--font-michroma)',
              }}
            >
              Cookie Policy
            </Link>
          </div>

          <p
            className="text-xs mt-2"
            style={{
              color: '#074139',
              fontFamily: 'var(--font-michroma)',
              fontSize: '16px',
            }}
          >
            © OBRIVE All rights reserved.
          </p>
        </div>

        {/* Payment Icons */}
        <div className="mt-6">
          <img
            src="/Images/Payment-icons-complete.svg"
            alt="Accepted payment methods"
            className="h-8 w-auto"
          />
        </div>
        </div>
      </div>
    </motion.footer>
  )
}

function FooterLinks({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>

      <div className="space-y-3">
        {links.map((link) => (
          <FooterLink key={link.label} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </div>
    </div>
  )
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={`${microgrammaBold.className} mb-4 md:mb-6 text-lg md:text-2xl leading-none`}
      style={{ color: '#074139' }}
    >
      {children}
    </p>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="block hover:opacity-70 transition-opacity text-sm whitespace-nowrap"
      style={{
        color: '#074139',
        fontFamily: 'var(--font-michroma)',
      }}
    >
      {children}
    </Link>
  )
}

function InputField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="min-w-0">
      <label
        className="block text-xs mb-1"
        style={{
          color: '#074139',
          fontFamily: 'var(--font-michroma)',
        }}
      >
        {label}
      </label>

      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-w-0 px-3 py-2 rounded-lg text-xs border-0 focus:outline-none focus:ring-1 focus:ring-[#074139]"
        style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
      />
    </div>
  )
}