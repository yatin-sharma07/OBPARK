'use client'

import { useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'

const MOCK_CHALLANS = {
  pending: [],
  paid: [
    {
      id: 'GA74766230505160416',
      amount: 1,
      type: 'TEST',
      date: '05 May, 2023',
      medium: 'Online',
      source: 'Parivahan',
      updated: '3 minutes ago',
    },
    {
      id: 'GA74766230505160416',
      amount: 1,
      type: 'TEST',
      date: '05 May, 2023',
      medium: 'Online',
      source: 'Parivahan',
      updated: '3 minutes ago',
    },
    {
      id: 'GA74766230505160416',
      amount: 1,
      type: 'TEST',
      date: '05 May, 2023',
      medium: 'Online',
      source: 'Parivahan',
      updated: '3 minutes ago',
    },
  ],
}

export function CheckChallanPaid() {
  const [tab, setTab] = useState<'pending' | 'paid'>('paid')
  const challans = MOCK_CHALLANS[tab]

  return (
    <div className="min-h-screen bg-[#F0FAF5] p-4 sm:p-6">
      <div className="mx-auto mt-8 sm:mt-15 w-full max-w-[1344px] rounded-3xl">
        
        {/* Vehicle Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full h-auto sm:h-[118px] px-4 sm:px-8 py-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-16 h-16 rounded-lg bg-[#D9D9D9] shrink-0" />

            <div>
              <p
                className={`${microgrammaBold.className} text-lg sm:text-[24px] leading-none tracking-wide text-[#074139]`}
              >
                Vehicle Name
              </p>

              <p
                className={`${microgrammaBold.className} text-lg sm:text-[24px] leading-none tracking-wide text-[#7F7F7F]`}
              >
                Vehicle Number
              </p>
            </div>
          </div>

          <button
            className={`mr-165 w-[208px] h-[70px] rounded-[20px] bg-[#074139] text-white text-sm ${microgrammaBold.className}`}
          >
            Change
          </button>
        </div>

        {/* Tabs */}
        <div className="border-t border-[#074139]/15 px-4 sm:px-8">
          <div className="flex gap-8 pt-6">
            <button
              onClick={() => setTab('pending')}
              className={`${microgrammaBold.className} text-lg sm:text-[24px] text-[#074139] pb-2 ${
                tab === 'pending'
                  ? 'border-b-2 border-[#000000]'
                  : ''
              }`}
            >
              Pending
            </button>

            <button
              onClick={() => setTab('paid')}
              className={`${microgrammaBold.className} text-lg sm:text-[24px] text-[#074139] pb-2 ${
                tab === 'paid'
                  ? 'border-b-2 border-[#000000]'
                  : ''
              }`}
            >
              Paid
            </button>
          </div>

          {/* Challans */}
          <div className="flex flex-col gap-6 my-6">
            {challans.length === 0 ? (
              <p className="text-center py-12 font-michroma text-sm text-[#999C9C]">
                No {tab} challans found.
              </p>
            ) : (
              challans.map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex flex-col gap-2 pb-3">
                    <p className="font-michroma text-sm tracking-wide text-[#074139]">
                      #{c.id}
                    </p>

                    <p
                      className={`${microgrammaBold.className} text-base text-[#009E60]`}
                    >
                      ₹{c.amount}
                    </p>

                    <p
                      className={`${microgrammaBold.className} text-[14px] text-[#074139]`}
                    >
                      {c.type}
                    </p>

                    <p className="font-michroma text-sm text-[#333333]">
                      Issued on {c.date}
                    </p>

                    <p className="font-michroma text-xs text-[#666666]">
                      Medium: {c.medium} &nbsp;&nbsp; Source: {c.source}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-[#000000]/30 pt-2.5">
                    <p className="font-michroma text-xs text-[#999999]">
                      Last updated {c.updated}
                    </p>

                    <button className="font-michroma text-xs font-bold text-[#074139] mr-220">
                      View details &gt;
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}