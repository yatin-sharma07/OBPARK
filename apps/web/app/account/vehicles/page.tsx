'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface VehicleData {
  owner: string
  make: string
  model: string
  fuel: string
  insurance: string
  pucc: string
  rc: string
  score: number
}

function ScoreRing({ score }: { score: number }) {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  const color = score >= 75 ? '#22c55e' : score >= 50 ? '#f59e0b' : '#ef4444'

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="12" />
        <circle
          cx="70" cy="70" r={radius} fill="none"
          stroke={color} strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 70 70)"
        />
        <text x="70" y="70" textAnchor="middle" dominantBaseline="middle" fontSize="28" fontWeight="bold" fill={color}>
          {score}
        </text>
        <text x="70" y="92" textAnchor="middle" fontSize="11" fill="#6b7280">
          out of 100
        </text>
      </svg>
      <p className="text-sm font-medium text-muted-foreground">Vehicle Health Score</p>
    </div>
  )
}

function SkeletonCard() {
  return (
    <Card className="p-6 animate-pulse">
      <div className="flex gap-6">
        <div className="w-36 h-36 bg-gray-200 rounded-full" />
        <div className="flex-1 space-y-3 pt-4">
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    </Card>
  )
}

export default function VehiclesPage() {
  const [vrn, setVrn] = useState('')
  const [loading, setLoading] = useState(false)
  const [vehicle, setVehicle] = useState<VehicleData | null>(null)

  const handleLookup = async () => {
    if (!vrn) return
    setLoading(true)
    setVehicle(null)

    // Mock data — replace with real API later
    setTimeout(() => {
      setVehicle({
        owner: 'J. Pavan Kumar Reddy',
        make: 'Hyundai',
        model: 'Creta',
        fuel: 'Petrol',
        insurance: 'Valid till Dec 2025',
        pucc: 'Valid',
        rc: 'Active',
        score: 82,
      })
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-2">My Vehicles</h1>
      <p className="text-muted-foreground mb-8">Enter your number plate to fetch vehicle details</p>

      <div className="flex gap-3 mb-8">
        <Input
          placeholder="e.g. TS09EF1234"
          value={vrn}
          onChange={(e) => setVrn(e.target.value.toUpperCase())}
        />
        <Button onClick={handleLookup} disabled={loading}>
          {loading ? 'Fetching...' : 'Look Up'}
        </Button>
      </div>

      {loading && <SkeletonCard />}

      {vehicle && (
        <Card className="p-6">
          <div className="flex gap-6">
            <ScoreRing score={vehicle.score} />
            <div className="flex-1 space-y-3 pt-2">
              <div>
                <p className="text-xs text-muted-foreground">Owner</p>
                <p className="font-semibold">{vehicle.owner}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Vehicle</p>
                <p className="font-semibold">{vehicle.make} {vehicle.model} — {vehicle.fuel}</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Insurance: {vehicle.insurance}</Badge>
                <Badge variant="outline">PUCC: {vehicle.pucc}</Badge>
                <Badge variant="outline">RC: {vehicle.rc}</Badge>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}