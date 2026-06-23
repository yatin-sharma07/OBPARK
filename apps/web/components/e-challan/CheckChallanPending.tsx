'use client'
import { useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'

const MOCK_CHALLANS = {
  pending: [
    { id: 'GA74766230505160416', amount: 1, type: 'TEST', date: '05 May, 2023', medium: 'Online', source: 'Parivahan', updated: '3 minutes ago' },
    { id: 'GA74766230505160416', amount: 1, type: 'TEST', date: '05 May, 2023', medium: 'Online', source: 'Parivahan', updated: '3 minutes ago' },
    { id: 'GA74766230505160416', amount: 1, type: 'TEST', date: '05 May, 2023', medium: 'Online', source: 'Parivahan', updated: '3 minutes ago' },
  ],
  paid: [],
}

export function CheckChallanPending() {
  const [tab, setTab] = useState<'pending' | 'paid'>('pending')
  const challans = MOCK_CHALLANS[tab]

  return (
    <div className="min-h-screen p-4 sm:p-6" style={{ background: '#F0FAF5' }}>
      <div className="mx-auto mt-8 sm:mt-15 w-full max-w-[1344px] rounded-3xl">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full h-auto sm:h-[118px] px-4 sm:px-8 py-4 sm:py-0">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-16 h-16 rounded-lg bg-[#D9D9D9] shrink-0" />
            <div>
              <p className={`${microgrammaBold.className} text-lg sm:text-[24px] leading-none tracking-wide text-[#074139]`}>Vehicle Name</p>
              <p className={`${microgrammaBold.className} text-lg sm:text-[24px] leading-none tracking-wide text-[#7F7F7F]`}>Vehicle Number</p>
            </div>
          </div>
          <button className={`mr-165 w-[208px] h-[70px] rounded-[20px] bg-[#074139] text-[#FFFFFF] ${microgrammaBold.className} text-sm`}>
  Change
</button>
        </div>

        <div className="border-t border-[#074139]/15 px-4 sm:px-8">
          <div className="flex gap-6 sm:gap-8 pt-6 overflow-x-auto">
            <button
              onClick={() => setTab('pending')}
              className={`${
  microgrammaBold.className
} text-lg sm:text-[24px] text-[#074139] pb-2 whitespace-nowrap ${tab === 'pending' ? 'border-b-2 border-[#074139]' : ''}`}
            >
              Pending
            </button>
            <button
              onClick={() => setTab('paid')}
              className={`${
  microgrammaBold.className
} text-lg sm:text-[24px] text-[#074139] pb-2 whitespace-nowrap ${tab === 'paid' ? 'border-b-2 border-[#074139]' : ''}`}
            >
              Paid
            </button>
          </div>

          <div className="flex flex-col gap-6 my-6">
            {challans.length === 0 && (
              <p className="text-center py-12 font-michroma text-sm text-[#999C9C]">
                No {tab} challans found.
              </p>
            )}

            {challans.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 sm:p-5">
                <div className="flex flex-col gap-2 pb-3">
                  <p className="font-michroma text-sm tracking-wide text-[#074139]">#{c.id}</p>
                  <p className={`${microgrammaBold.className} text-base text-[#E53E3E]`}>₹{c.amount}</p>
                  <p className={`${microgrammaBold.className} text-[14px] text-[#074139]`}>{c.type}</p>
                  <p className="font-michroma text-sm text-[#333333]">Issued on {c.date}</p>
                  <p className="font-michroma text-xs text-[#666666]">Medium: {c.medium} &nbsp;&nbsp; Source: {c.source}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-[#000000]/30 pt-2.5">
                  <p className="font-michroma text-xs text-[#999999]">Last updated {c.updated}</p>
                  <button className="mr-220 font-michroma text-xs font-bold text-[#074139]">View details &gt;</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}