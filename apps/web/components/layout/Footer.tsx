'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { microgrammaBold } from '@/lib/fonts'

const aboutLinks = ['Home', 'About', 'Shop']

const supportLinks = [
  'FAQs',
  'Shipping Policy',
  'Refund Policy',
  'My Account',
  'Contact',
]

const socials = [
  {
    label: 'Instagram',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.737 5.49 2.027 7.8L0 32l8.43-2.01A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.486-.29-5.007 1.194 1.151-4.872-.317-.5A13.226 13.226 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.35-1.159-2.714-1.292-.363-.132-.627-.198-.891.199-.264.397-1.023 1.292-1.254 1.556-.23.265-.462.298-.86.1-.397-.2-1.677-.618-3.193-1.97-1.18-1.053-1.977-2.352-2.208-2.75-.23-.397-.024-.612.173-.81.178-.177.397-.464.596-.695.198-.232.264-.398.397-.663.132-.265.066-.497-.033-.696-.1-.199-.892-2.149-1.222-2.944-.322-.773-.648-.668-.891-.68-.23-.012-.497-.015-.762-.015-.265 0-.695.1-1.059.497-.364.397-1.39 1.358-1.39 3.313 0 1.955 1.423 3.843 1.621 4.108.199.265 2.8 4.274 6.785 5.995.948.409 1.688.653 2.264.835.951.302 1.816.26 2.5.158.762-.114 2.35-.96 2.682-1.888.33-.928.33-1.723.23-1.888-.099-.165-.363-.265-.761-.464z" />
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full px-4 sm:px-6 pb-6"
    >
      <div
        className="mx-auto max-w-full rounded-[30px] p-6 sm:p-8 md:p-10 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #CAEDE5 0%, #59D0B5 100%)',
        }}
      >
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
            {[
              { label: 'Instagram', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg> },
              { label: 'Facebook', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
              { label: 'WhatsApp', icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor"><path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.737 5.49 2.027 7.8L0 32l8.43-2.01A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.486-.29-5.007 1.194 1.151-4.872-.317-.5A13.226 13.226 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.35-1.159-2.714-1.292-.363-.132-.627-.198-.891.199-.264.397-1.023 1.292-1.254 1.556-.23.265-.462.298-.86.1-.397-.2-1.677-.618-3.193-1.97-1.18-1.053-1.977-2.352-2.208-2.75-.23-.397-.024-.612.173-.81.178-.177.397-.464.596-.695.198-.232.264-.398.397-.663.132-.265.066-.497-.033-.696-.1-.199-.892-2.149-1.222-2.944-.322-.773-.648-.668-.891-.68-.23-.012-.497-.015-.762-.015-.265 0-.695.1-1.059.497-.364.397-1.39 1.358-1.39 3.313 0 1.955 1.423 3.843 1.621 4.108.199.265 2.8 4.274 6.785 5.995.948.409 1.688.653 2.264.835.951.302 1.816.26 2.5.158.762-.114 2.35-.96 2.682-1.888.33-.928.33-1.723.23-1.888-.099-.165-.363-.265-.761-.464z" /></svg> },
            ].map((s) => (
              <button key={s.label} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: 'rgba(7,65,57,0.12)', color: '#074139' }}>
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[180px_180px_1fr] gap-8 lg:gap-6">
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

        <div className="mt-8 space-y-1">
          <div className='flex gap-3'>
            <Link href="/privacy-policy" className="block text-xs hover:opacity-70" style={{ color: '#074139', fontFamily: 'var(--font-michroma)' }}>Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="block text-xs hover:opacity-70" style={{ color: '#074139', fontFamily: 'var(--font-michroma)' }}>Terms & Conditions</Link>
          </div>
          <p className="text-xs mt-2 text-base" style={{ color: '#CAEDE5', fontFamily: 'var(--font-michroma)', fontSize: '16px' }}>© OBRIVE All rights reserved.</p>
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
  links: string[]
}) {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>

      <div className="space-y-3">
        {links.map((link) => (
          <FooterLink key={link} href="/">
            {link}
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
      className="block hover:opacity-70 transition-opacity text-sm"
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