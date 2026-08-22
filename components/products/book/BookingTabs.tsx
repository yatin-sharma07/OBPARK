'use client'

import { useState } from 'react'
import { michroma, microgrammaBold } from '@/lib/fonts'
import { OneWayForm } from './OneWayForm'
import { RoundTripForm } from './RoundTripForm'
import { OutstationForm } from './OutstationForm'

const TABS = ['One Way', 'Round Trip', 'Outstation'] as const
type Tab = (typeof TABS)[number]

export function BookingTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('One Way')

  return (
    <div>
      <div className="flex justify-center gap-8 border-b border-gray-200 mb-5">
  {TABS.map((tab) => {
    const isActive = activeTab === tab
    return (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`${isActive ? microgrammaBold.className : michroma.className} px-4 pb-3 text-[14px] tracking-[0.02em] transition-colors relative ${
          isActive ? 'font-bold text-[#0D4B4D]' : 'font-normal text-[#0D4B4D-400]'
        }`}
      >
        {tab}
        {isActive && (
          <span className="absolute left-0 -bottom-[1px] w-full h-[2px]  bg-[#0D4B4D]" />
        )}
      </button>
    )
  })}
</div>

      {activeTab === 'One Way' && <OneWayForm />}
      {activeTab === 'Round Trip' && <RoundTripForm />}
      {activeTab === 'Outstation' && <OutstationForm />}
    </div>
  )
}