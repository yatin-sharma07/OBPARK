'use client'
import { useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'

interface ChallanDetailsModalProps {
  challanId?: string
  receivedOn?: string
  dueDate?: string
  offence?: string
  location?: string
  fineAmount?: number
  status?: string
  fullName?: string
  onClose?: () => void
}

export function ChallanDetails({
  challanId = '#GA74766230505160416',
  receivedOn = '05-05-2023',
  dueDate = '05-05-2023',
  offence = 'Test',
  location = 'Por, Goa',
  fineAmount = 1,
  status = 'Pending',
  fullName = 'your full name',
  onClose,
}: ChallanDetailsModalProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(challanId)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="flex w-[497px] max-w-full max-h-[90vh] flex-col gap-5 overflow-y-auto rounded-3xl bg-white p-8">

        <div className="flex items-center justify-between border border-[#000000] px-4 py-3 rounded-[20px]">
  <p className={`${microgrammaBold.className} text-[24px] leading-tight tracking-[0.05em] text-[#074139]`}>
    Challan Information
  </p>

  <button
    onClick={onClose}
    aria-label="Close"
    className="flex h-7 w-7 items-center justify-center rounded-full border border-[#074139]/70 bg-white"
  >
    <CloseIcon />
  </button>
</div>

        <div className="flex flex-col gap-2.5 rounded-2xl bg-[#ADE3CA] px-5 py-4">
          <p className={`${microgrammaBold.className} text-[14px] tracking-[0.05em] text-[#074139]`}>
            My challans
          </p>
          <div className="flex items-center ">
            <p className={`${microgrammaBold.className} text-[14px] tracking-[0.05em] text-[#074139]`}>
              {challanId}
            </p>
            <button onClick={handleCopy} aria-label="Copy challan ID" className="flex items-center">
              {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-0'>
            <div className="flex items-center justify-between rounded-2xl border border-[#000000]/80 px-5 py-4">
          <div>
            <p className={`${microgrammaBold.className} text-[14px] tracking-[0.05em] text-[#939494]`}>
              Fine
            </p>
            <p className={`mt-1 ${microgrammaBold.className} text-[14px] tracking-[0.05em] text-[#E53E3E]`}>
              ₹{fineAmount}
            </p>
          </div>
          <p className=" px-3.5 py-1.5 font-michroma text-[14px] text-[#9B7400]">
            {status}
          </p>
        </div>

        <div className="flex flex-col rounded-2xl bg-white px-6 pb-5 pt-0 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.50)]">
          <div className="flex gap-[18px]">
            <div className="w-fit">
              <p className={`${microgrammaBold.className} text-[14px] tracking-[0.05em] text-[#939494] mt-4`}>
                Received on
              </p>
              <p className={`mt-1 ${microgrammaBold.className} text-[14px] tracking-[0.05em] text-[#074139]`}>
                {receivedOn}
              </p>
            </div>
            <div className="w-fit">
              <p className={`${microgrammaBold.className} text-[14px] tracking-[0.05em] text-[#939494] mt-4`}>
                Due date
              </p>
              <p className={`mt-1 ${microgrammaBold.className} text-[14px] tracking-[0.05em] text-[#074139]`}>
                {dueDate}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className={`${microgrammaBold.className} text-[14px] tracking-[0.05em] text-[#939494]`}>
              Offence
            </p>
            <p className={`mt-1 ${microgrammaBold.className} text-[14px] uppercase tracking-[0.05em] text-[#074139]`}>
              {offence}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <PinIcon />
            <p className={`${microgrammaBold.className} text-[14px] uppercase tracking-[0.05em] text-[#074139]`}>
              {location}
            </p>
          </div>
        </div>

        </div>

        <div className="max-w-[346px] flex items-start gap-2.5 rounded-2xl bg-[#FCDF4E]/[0.31] p-4">
          <InfoIcon />
          <p className="max-w-[300px] font-michroma text-[10px] leading-[1.4] tracking-[0.05em] ">
            We will generate an automated signature using {fullName}. This will enable
            the legal partner to process your challan settlement.
          </p>
        </div>
      </div>
    </div>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 6L18 18M18 6L6 18" stroke="#074139" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="9" width="12" height="12" rx="2" stroke="#074139" strokeWidth="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="#074139" strokeWidth="2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 12L9 17L20 6" stroke="#074139" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7-7.16 7-12a7 7 0 1 0-14 0c0 4.84 7 12 7 12Z"
        stroke="#074139"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="#074139" strokeWidth="2" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0 bg-[#D7B300] rounded-full">
      <circle cx="12" cy="12" r="9" stroke="#074139" strokeWidth="2" />
      <path d="M12 8v.01M12 11v5" stroke="#074139" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}