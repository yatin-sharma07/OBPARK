'use client'
import { useState } from 'react'
import { useVehicles } from '@/hooks/useVehicles'
import { useFastagBalance, useInitiateRecharge, useConfirmRecharge } from '@/hooks/useFastag'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap } from 'lucide-react'

const PRESETS = [200, 500, 1000]

export default function FastagPage() {
  const { data: vehicles, isLoading: vehiclesLoading } = useVehicles()
  const [selectedVrn, setSelectedVrn] = useState<string | null>(null)
  const [amount, setAmount] = useState<number | ''>('')
  const [success, setSuccess] = useState(false)

  const { data: balance, isLoading: balanceLoading } = useFastagBalance(selectedVrn)
  const initiateRecharge = useInitiateRecharge()
  const confirmRecharge = useConfirmRecharge()

  const handleRecharge = async () => {
    if (!selectedVrn || !amount) return
    try {
      const order = await initiateRecharge.mutateAsync({
        vrn: selectedVrn,
        amount: Number(amount),
      })
      if (order.mockPaymentId) {
        await confirmRecharge.mutateAsync({
          razorpayOrderId: order.orderId,
          razorpayPaymentId: order.mockPaymentId,
        })
        setSuccess(true)
        setAmount('')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">FASTag Recharge</h1>
        <p className="text-muted-foreground text-sm">Select a vehicle to check balance and recharge</p>
      </div>

      {vehiclesLoading && <p className="text-sm text-muted-foreground">Loading vehicles...</p>}

      {vehicles?.length === 0 && (
        <Card className="p-6 text-center text-muted-foreground">
          <p className="text-3xl mb-2">🚗</p>
          <p className="font-medium">No vehicles added yet</p>
          <p className="text-sm mt-1">Add a vehicle first from My Vehicles page</p>
        </Card>
      )}

      {/* Vehicle selector */}
      {vehicles && vehicles.length > 0 && (
        <div className="flex gap-3 flex-wrap">
          {vehicles.map(v => (
            <button
              key={v.vrn}
              onClick={() => { setSelectedVrn(v.vrn); setSuccess(false) }}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                selectedVrn === v.vrn
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {v.vrn}
            </button>
          ))}
        </div>
      )}

      {/* Balance card */}
      {balanceLoading && (
        <Card className="p-6 animate-pulse space-y-3">
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-6 bg-gray-200 rounded w-1/2" />
        </Card>
      )}

      {balance && (
        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Vehicle</p>
                <p className="font-bold text-lg">{balance.vrn}</p>
                <p className="text-sm text-muted-foreground">{balance.bank}</p>
              </div>
              <Badge variant={balance.status === 'ACTIVE' ? 'default' : 'destructive'}>
                {balance.status}
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Current Balance</p>
              <p className={`text-3xl font-bold ${balance.balance < 200 ? 'text-red-500' : 'text-green-600'}`}>
                ₹{balance.balance}
              </p>
              {balance.balance < 200 && (
                <p className="text-xs text-red-500 mt-1">⚠ Low balance — recharge now</p>
              )}
            </div>
          </Card>

          {success && (
            <Card className="p-4 bg-green-50 border-green-200">
              <p className="text-green-700 font-semibold text-center">
                ✅ Recharge successful!
              </p>
            </Card>
          )}

          <Card className="p-6 space-y-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Zap className="h-4 w-4" /> Select Amount
            </h2>
            <div className="flex gap-3">
              {PRESETS.map(p => (
                <Button
                  key={p}
                  variant={amount === p ? 'default' : 'outline'}
                  onClick={() => setAmount(p)}
                  className="flex-1"
                >
                  ₹{p}
                </Button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Or enter custom amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : '')}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
            <Button
              className="w-full"
              onClick={handleRecharge}
              disabled={initiateRecharge.isPending || confirmRecharge.isPending || !amount}
            >
              {initiateRecharge.isPending || confirmRecharge.isPending
                ? 'Processing...'
                : `Recharge ₹${amount || 0}`}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Minimum recharge amount is ₹100
            </p>
          </Card>
        </div>
      )}
    </div>
  )
}