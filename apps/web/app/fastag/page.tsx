'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface FastagData {
  vrn: string
  bank: string
  status: string
  balance: number
}

const PRESETS = [200, 500, 1000]

function SkeletonCard() {
  return (
    <Card className="p-6 animate-pulse space-y-4">
      <div className="h-4 bg-gray-200 rounded w-1/3" />
      <div className="h-6 bg-gray-200 rounded w-1/2" />
      <div className="h-4 bg-gray-200 rounded w-1/4" />
    </Card>
  )
}

export default function FastagPage() {
  const [vrn, setVrn] = useState('')
  const [loading, setLoading] = useState(false)
  const [fastag, setFastag] = useState<FastagData | null>(null)
  const [amount, setAmount] = useState<number | ''>('')
  const [paying, setPaying] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleLookup = async () => {
    if (!vrn) return
    setLoading(true)
    setFastag(null)
    setSuccess(false)

    // Mock data — replace with real API later
    setTimeout(() => {
      setFastag({
        vrn: vrn.toUpperCase(),
        bank: 'ICICI Bank',
        status: 'Active',
        balance: 145,
      })
      setLoading(false)
    }, 2000)
  }

  const handleRecharge = async () => {
    if (!amount || Number(amount) < 100) return
    setPaying(true)
    setTimeout(() => {
      setPaying(false)
      setSuccess(true)
      setFastag(prev => prev ? { ...prev, balance: prev.balance + Number(amount) } : null)
      setAmount('')
    }, 2000)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-2">FASTag Recharge</h1>
      <p className="text-muted-foreground mb-8">
        Enter your vehicle number to check balance and recharge
      </p>

      <div className="flex gap-3 mb-8">
        <Input
          placeholder="e.g. TS09EF1234"
          value={vrn}
          onChange={(e) => setVrn(e.target.value.toUpperCase())}
        />
        <Button onClick={handleLookup} disabled={loading || !vrn}>
          {loading ? 'Fetching...' : 'Check'}
        </Button>
      </div>

      {loading && <SkeletonCard />}

      {fastag && (
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Vehicle</p>
                <p className="font-bold text-lg">{fastag.vrn}</p>
              </div>
              <Badge variant={fastag.status === 'Active' ? 'default' : 'destructive'}>
                {fastag.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Bank</p>
                <p className="font-semibold">{fastag.bank}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Current Balance</p>
                <p className={`text-2xl font-bold ${fastag.balance < 200 ? 'text-red-500' : 'text-green-600'}`}>
                  ₹{fastag.balance}
                </p>
                {fastag.balance < 200 && (
                  <p className="text-xs text-red-500 mt-1">⚠ Low balance — recharge now</p>
                )}
              </div>
            </div>
          </Card>

          {success && (
            <Card className="p-4 bg-green-50 border-green-200">
              <p className="text-green-700 font-semibold text-center">
                ✅ Recharge successful! New balance: ₹{fastag.balance}
              </p>
            </Card>
          )}

          <Card className="p-6 space-y-4">
            <h2 className="font-semibold">Select Amount</h2>
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
            <Input
              type="number"
              placeholder="Or enter custom amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : '')}
            />
            <Button
              className="w-full"
              onClick={handleRecharge}
              disabled={paying || !amount || Number(amount) < 100}
            >
              {paying ? 'Processing...' : `Recharge ₹${amount || 0}`}
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