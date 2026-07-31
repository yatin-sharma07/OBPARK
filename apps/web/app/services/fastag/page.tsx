'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useVehicles } from '@/hooks/useVehicles'
import { useFastagBalance } from '@/hooks/useFastag'
import { useAuthStore } from '@/store/auth.store'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap } from 'lucide-react'

// Import new components
import { FastagHero } from '@/components/fastag/FastagHero'
import { 
  FastagMandatorySection, 
  FastagBenefitsSection, 
  FastagDocumentsSection, 
  FastagBannerSection 
} from '@/components/fastag/FastagInfoSections'
import { FastagFaqs } from '@/components/fastag/FastagFaqs'

const PRESETS = [200, 500, 1000]

function FastagPageContent() {
  const { user } = useAuthStore()
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Only fetch vehicles if user is logged in, to avoid 401 errors
  const { data: vehicles, isLoading: vehiclesLoading } = useVehicles(!!user)
  
  const [manualVrn, setManualVrn] = useState('')
  const [selectedVrn, setSelectedVrn] = useState<string | null>(null)
  const [amount, setAmount] = useState<number | ''>('')
  const [success, setSuccess] = useState(false)

  // Sync state from query parameters on success redirect
  useEffect(() => {
    const successParam = searchParams.get('success') === 'true'
    const vrnParam = searchParams.get('vrn')
    if (successParam && vrnParam) {
      setSuccess(true)
      setSelectedVrn(vrnParam)
      setManualVrn(vrnParam)
      // Clear URL params so refresh doesn't trigger success indefinitely
      router.replace('/services/fastag')
    }
  }, [searchParams, router])

  const { data: balance, isLoading: balanceLoading } = useFastagBalance(selectedVrn)

  const handleCheckFastag = () => {
    if (manualVrn.trim()) {
      router.push(`/payment?type=fastag&amount=500&vrn=${manualVrn.trim()}`)
    }
  }

  const handleRecharge = () => {
    if (!selectedVrn || !amount) return
    router.push(`/payment?type=fastag&amount=${amount}&vrn=${selectedVrn}`)
  }

  return (
    <div className="w-full min-h-screen bg-[#f4fcf9] text-[#074c43]">
      <FastagHero 
        manualVrn={manualVrn} 
        setManualVrn={setManualVrn} 
        onCheckFastag={handleCheckFastag} 
      />

      {/* Recharge Flow container - Only visible if a VRN is searched or vehicles exist */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30 pb-20">
        
        {/* Quick select saved vehicles if logged in */}
        {user && vehiclesLoading && (
          <p className="text-sm text-center text-muted-foreground mt-8">Loading saved vehicles...</p>
        )}
        
        {user && vehicles && vehicles.length > 0 && (
          <div className="mt-8">
            <p className="text-sm text-[#0A3D31] font-semibold mb-3">Or select from your saved vehicles:</p>
            <div className="flex gap-3 flex-wrap">
              {vehicles.map(v => (
                <button
                  key={v.vrn}
                  onClick={() => { 
                    setSelectedVrn(v.vrn)
                    setManualVrn(v.vrn)
                    setSuccess(false) 
                  }}
                  className={`px-5 py-2.5 rounded-lg border text-sm font-medium transition-colors shadow-sm ${
                    selectedVrn === v.vrn
                      ? 'bg-[#0A3D31] text-white border-[#0A3D31]'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  {v.vrn}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Balance card */}
        {balanceLoading && (
          <Card className="p-6 mt-8 animate-pulse space-y-3 shadow-xl">
            <div className="h-4 bg-gray-200 rounded w-1/3" />
            <div className="h-6 bg-gray-200 rounded w-1/2" />
          </Card>
        )}

        {balance && (
          <div className="space-y-4 mt-8">
            <Card className="p-6 shadow-xl border-gray-200 bg-white">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Vehicle Reg Number</p>
                  <p className="font-bold text-2xl text-gray-900">{balance.vrn}</p>
                  <p className="text-sm text-gray-500">{balance.bank}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm text-gray-500 font-medium mb-1">Status & Balance</p>
                  <div className="flex items-center sm:justify-end gap-3 mb-1">
                    <Badge variant={balance.status === 'ACTIVE' ? 'default' : 'destructive'} className="font-bold">
                      {balance.status}
                    </Badge>
                    <p className={`text-2xl font-bold ${balance.balance < 200 ? 'text-red-600' : 'text-[#0A3D31]'}`}>
                      ₹{balance.balance}
                    </p>
                  </div>
                  {balance.balance < 200 && (
                    <p className="text-xs text-red-500 font-medium">⚠ Low balance — recharge now</p>
                  )}
                </div>
              </div>

              {success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-6">
                  <p className="text-green-700 font-semibold text-center">
                    ✅ Recharge successful!
                  </p>
                </div>
              )}

              <div className="pt-6 border-t border-gray-100">
                <h2 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <Zap className="h-5 w-5 text-[#0A3D31]" /> Quick Recharge
                </h2>
                <div className="flex flex-wrap sm:flex-nowrap gap-3 mb-4">
                  {PRESETS.map(p => (
                    <Button
                      key={p}
                      variant={amount === p ? 'default' : 'outline'}
                      onClick={() => setAmount(p)}
                      className={`flex-1 font-semibold ${
                        amount === p 
                        ? 'bg-[#0A3D31] hover:bg-[#0A3D31]/90 text-white' 
                        : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      ₹{p}
                    </Button>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="number"
                    placeholder="Enter custom amount (Min ₹100)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : '')}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium"
                  />
                  <Button
                    onClick={handleRecharge}
                    disabled={!amount || Number(amount) < 100}
                    className="bg-[#0A3D31] hover:bg-[#0A3D31]/90 text-white font-semibold py-6 px-8 sm:w-auto w-full rounded-lg"
                  >
                    {`Pay ₹${amount || 0}`}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
        <FastagMandatorySection />
        <FastagBenefitsSection />
        <FastagDocumentsSection />
      </div>
      <FastagBannerSection />
      <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
        <FastagFaqs />
      </div>

    </div>
  )
}

export default function FastagPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-[#f4fcf9] flex items-center justify-center">Loading FASTag details...</div>}>
      <FastagPageContent />
    </Suspense>
  )
}