'use client'
import { useState } from 'react'
import { ChallanDetails } from '@/components/e-challan/ChallanDetails'

export default function Page() {
  const [open, setOpen] = useState(true)

  return (
    <div className="min-h-screen p-6" style={{ background: '#F0FAF5' }}>
      {open && <ChallanDetails onClose={() => setOpen(false)} />}
    </div>
  )
}