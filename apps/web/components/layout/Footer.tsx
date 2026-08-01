'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

const aboutLinks = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'My Account', href: '/account' },
  { label: 'Shop Now', href: '/shop' },
  { label: 'Obrive', href: '/obrive' },
  { label: 'Our Partners', href: '/partners' },
]

const supportLinks = [
  { label: 'Faqs', href: '/faq' },
  { label: 'Platform Policy', href: '/platform-policy' },
  { label: 'Business & Partner Policy', href: '/business-policy' },
  { label: 'Payment Gateway & Compliance', href: '/payment-compliance' },
  { label: 'Enterprise & Regulatory', href: '/enterprise-regulatory' },
]

const resourcesLinks = [
  { label: 'OB Help Center', href: 'https://obrive.com/support/help-center' },
  { label: 'OB Products FAQ', href: 'https://obrive.com/faq/ob-product-faq' },
  { label: 'OB Services FAQ', href: 'https://obrive.com/faq/ob-services-faq' },
  { label: 'OBPark FAQ', href: 'https://obrive.com/faq/obpark-faq' },
  { label: 'Change Log', href: 'https://obrive.com/support/change-log' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/obrive-industries',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.27 19.5h-2.73v-9h2.73v9zm-1.37-10.27a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zm12.64 10.27h-2.73v-4.72c0-1.13-.02-2.58-1.57-2.58-1.57 0-1.81 1.23-1.81 2.5v4.8h-2.73v-9h2.62v1.23h.04c.36-.69 1.25-1.42 2.59-1.42 2.77 0 3.28 1.82 3.28 4.19v5z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/obrive.inc',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 13.5h2.5l1-3.5H14V7.8c0-.9.3-1.5 1.5-1.5H17V3.2c-.3-.04-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V10H8.5v3.5H11V22h3v-8.5z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/obriveinc',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@obrive.inc',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z" />
      </svg>
    ),
  },
]

export function Footer() {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full relative z-10 bg-transparent px-3 pb-3 pt-6 sm:px-5 sm:pb-5 sm:pt-10"
    >
      <div 
        className="w-full rounded-[24px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #ACE3CA 0%, #1C8182 100%)',
        }}
      >
        <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-8 md:px-16 pt-10 pb-10">
        {/* TOP ROW: LOGO & SOCIALS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/Images/footer_app_icon.svg"
                alt="OBPARK"
                className="h-[48px] sm:h-[64px] md:h-[76px] lg:h-[84px] object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center gap-1.5">
             {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.4)',
                  color: '#FFFFFF',
                }}
                aria-label={`Visit our ${s.label} page`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS & NEWSLETTER */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mt-10 mb-12">
          
          {/* LINKS GRID */}
          <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between gap-8 lg:w-[65%]">
            <FooterLinks title="About" links={aboutLinks} />
            <FooterLinks title="Support" links={supportLinks} />
            <FooterLinks title="Resources" links={resourcesLinks} />
          </div>

          {/* NEWSLETTER */}
          <div className="lg:w-[40%] flex flex-col gap-6">
            <h3 
              className={`${microgrammaBold.className} text-white text-[17px] leading-[1.3] max-w-full`}
            >
              Subscribe to our newsletter and claim<br />your 15% discount today
            </h3>

            <div
              className="w-full rounded-[32px] p-6 sm:p-8 flex flex-col gap-5 border-none shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #86C4B9 0%, #379490 100%)'
              }}
            >
              <div className="grid grid-cols-2 gap-4">
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
                className={`${microgrammaBold.className} w-full py-3.5 mt-2 rounded-full transition-opacity hover:opacity-90`}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#074139',
                  fontSize: '15px',
                }}
              >
                Submit
              </motion.button>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <Link
              href="/privacy-policy"
              className="text-[13px] text-white/80 hover:text-white transition-colors w-max"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal-compliance"
              className="text-[13px] text-white/80 hover:text-white transition-colors w-max"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              Legal & Compliance
            </Link>
            <Link
              href="/cookie-policy"
              className="text-[13px] text-white/80 hover:text-white transition-colors w-max mb-3"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              Cookie Policy
            </Link>

            <p
              className="text-[14px] text-white mt-1"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              © OBRIVE ™ All rights reserved.
            </p>
            
            {/* Payment Icons */}
            <div className="mt-4">
              <img
                src="/Images/Payment-icons-complete.svg"
                alt="Accepted payment methods"
                className="h-7 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/* DISCLAIMER TEXT */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 pt-6 pb-2">
        <p 
          className="text-[10px] md:text-[11px] leading-[1.6] text-[#484848]"
          style={{ fontFamily: 'var(--font-michroma)' }}
        >
          Payments made through OBPARK are processed securely using trusted payment gateways. Parking fees, reservations, subscriptions, and other services must be paid before confirmation. Prices may vary depending on the facility, parking duration, and applicable taxes. All payments are subject to successful authorization and confirmation.
        </p>
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
    <div className="flex flex-col gap-5">
      <h4
        className={`${microgrammaBold.className} text-[18px]`}
        style={{ color: '#FFFFFF' }}
      >
        {title}
      </h4>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-[9.5px] min-[380px]:text-[10px] sm:text-[11px] md:text-[13px] whitespace-nowrap transition-opacity hover:opacity-100 opacity-85"
            style={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-michroma)',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
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
  onChange: (val: string) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-[12px] text-white ml-5 opacity-90"
        style={{ fontFamily: 'var(--font-michroma)' }}
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/20 text-white placeholder:text-white/70 rounded-full px-6 py-3.5 text-[13px] outline-none border border-white/10 focus:border-white/30 transition-colors"
        style={{ fontFamily: 'var(--font-michroma)' }}
      />
    </div>
  )
}