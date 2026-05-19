'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ScoreFactor {
  label: string
  description: string
  earned: number
  max: number
  status: 'good' | 'warn' | 'bad'
  detail: string
}

interface VehicleData {
  owner: string
  make: string
  model: string
  fuel: string
  insurance: string
  pucc: string
  rc: string
  score: number
  factors: ScoreFactor[]
}

function ScoreRing({ score }: { score: number }) {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const color = score >= 75 ? '#22c55e' : score >= 50 ? '#f59e0b' : '#ef4444'
  const label = score >= 75 ? 'Good' : score >= 50 ? 'Fair' : 'Poor'

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
        <text x="70" y="64" textAnchor="middle" dominantBaseline="middle" fontSize="28" fontWeight="bold" fill={color}>
          {score}
        </text>
        <text x="70" y="84" textAnchor="middle" fontSize="11" fill="#6b7280">
          out of 100
        </text>
      </svg>
      <div className="text-center">
        <p className="text-sm font-semibold" style={{ color }}>{label}</p>
        <p className="text-xs text-muted-foreground">Vehicle Health Score</p>
      </div>
    </div>
  )
}

function FactorBar({ factor, index }: { factor: ScoreFactor; index: number }) {
  const pct = (factor.earned / factor.max) * 100
  const barColor =
    factor.status === 'good' ? '#22c55e'
    : factor.status === 'warn' ? '#f59e0b'
    : '#ef4444'

  const bgColor =
    factor.status === 'good' ? 'bg-green-50 border-green-100'
    : factor.status === 'warn' ? 'bg-amber-50 border-amber-100'
    : 'bg-red-50 border-red-100'

  const badgeColor =
    factor.status === 'good' ? 'bg-green-100 text-green-700'
    : factor.status === 'warn' ? 'bg-amber-100 text-amber-700'
    : 'bg-red-100 text-red-700'

  const icon =
    factor.status === 'good' ? '✓'
    : factor.status === 'warn' ? '!'
    : '✕'

  return (
    <div
      className={`rounded-lg border p-3 space-y-2 ${bgColor}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${badgeColor}`}
          >
            {icon}
          </span>
          <span className="text-sm font-semibold text-gray-800">{factor.label}</span>
        </div>
        <span className="text-sm font-bold" style={{ color: barColor }}>
          {factor.earned}
          <span className="text-xs font-normal text-gray-400">/{factor.max}</span>
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-white rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: barColor }}
        />
      </div>

      <p className="text-xs text-gray-500">{factor.detail}</p>
    </div>
  )
}

function SkeletonCard() {
  return (
    <Card className="p-6 animate-pulse space-y-4">
      <div className="flex gap-6">
        <div className="w-36 h-36 bg-gray-200 rounded-full shrink-0" />
        <div className="flex-1 space-y-3 pt-4">
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      </div>
      <div className="h-3 bg-gray-200 rounded w-1/3" />
      <div className="grid grid-cols-2 gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-20 bg-gray-100 rounded-lg" />
        ))}
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

    // Mock data — replace with real Vahan/Surepass API later
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
        factors: [
          {
            label: 'Insurance',
            description: 'Third-party or comprehensive cover',
            earned: 30,
            max: 30,
            status: 'good',
            detail: 'Comprehensive policy valid till Dec 2025',
          },
          {
            label: 'PUCC',
            description: 'Pollution Under Control Certificate',
            earned: 20,
            max: 20,
            status: 'good',
            detail: 'Certificate valid, expires Mar 2025',
          },
          {
            label: 'Fitness Certificate',
            description: 'Vehicle roadworthiness',
            earned: 12,
            max: 20,
            status: 'warn',
            detail: 'Expires in 45 days — renewal recommended soon',
          },
          {
            label: 'Challans',
            description: 'Pending traffic violations',
            earned: 5,
            max: 15,
            status: 'bad',
            detail: '2 unpaid challans found — ₹1,200 pending',
          },
          {
            label: 'FASTag',
            description: 'National Electronic Toll Collection',
            earned: 15,
            max: 15,
            status: 'good',
            detail: 'Active FASTag linked, balance ₹450',
          },
        ],
      })
      setLoading(false)
    }, 2000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleLookup()
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-2">My Vehicles</h1>
      <p className="text-muted-foreground mb-8">
        Enter your number plate to fetch vehicle details
      </p>

      <div className="flex gap-3 mb-8">
        <Input
          placeholder="e.g. TS09EF1234"
          value={vrn}
          onChange={(e) => setVrn(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleLookup} disabled={loading || !vrn}>
          {loading ? 'Fetching...' : 'Look Up'}
        </Button>
      </div>

      {loading && <SkeletonCard />}

      {vehicle && (
        <Card className="p-6 space-y-6">
          {/* Top section — score ring + vehicle info */}
          <div className="flex gap-6">
            <ScoreRing score={vehicle.score} />
            <div className="flex-1 space-y-3 pt-2">
              <div>
                <p className="text-xs text-muted-foreground">Owner</p>
                <p className="font-semibold">{vehicle.owner}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Vehicle</p>
                <p className="font-semibold">
                  {vehicle.make} {vehicle.model} — {vehicle.fuel}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Insurance: {vehicle.insurance}</Badge>
                <Badge variant="outline">PUCC: {vehicle.pucc}</Badge>
                <Badge variant="outline">RC: {vehicle.rc}</Badge>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-gray-700">Score Breakdown</p>
              <p className="text-xs text-muted-foreground">
                {vehicle.factors.reduce((a, f) => a + f.earned, 0)} /{' '}
                {vehicle.factors.reduce((a, f) => a + f.max, 0)} points
              </p>
            </div>

            {/* Factor grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {vehicle.factors.map((factor, i) => (
                <FactorBar key={factor.label} factor={factor} index={i} />
              ))}
            </div>

            {/* Action hint if any bad/warn factors */}
            {vehicle.factors.some((f) => f.status !== 'good') && (
              <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-blue-700">
                Resolve the flagged items above to improve your health score.
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  )
}