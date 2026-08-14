'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trash2 } from 'lucide-react'
import { useVehicles, useAddVehicle, useDeleteVehicle } from '@/hooks/useVehicles'
import type { Vehicle, ScoreFactor } from '@/hooks/useVehicles'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'

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

function FactorBar({ factor, label }: { factor: ScoreFactor; label: string }) {
  const pct = (factor.earned / factor.max) * 100
  const barColor = factor.status === 'good' ? '#22c55e' : factor.status === 'warn' ? '#f59e0b' : '#ef4444'
  const bgColor = factor.status === 'good' ? 'bg-green-50 border-green-100' : factor.status === 'warn' ? 'bg-amber-50 border-amber-100' : 'bg-red-50 border-red-100'
  const badgeColor = factor.status === 'good' ? 'bg-green-100 text-green-700' : factor.status === 'warn' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
  const icon = factor.status === 'good' ? '✓' : factor.status === 'warn' ? '!' : '✕'

  return (
    <div className={`rounded-lg border p-3 space-y-2 ${bgColor}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${badgeColor}`}>
            {icon}
          </span>
          <span className="text-sm font-semibold text-gray-800">{label}</span>
        </div>
        <span className="text-sm font-bold" style={{ color: barColor }}>
          {factor.earned}<span className="text-xs font-normal text-gray-400">/{factor.max}</span>
        </span>
      </div>
      <div className="h-1.5 bg-white rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: barColor }} />
      </div>
      <p className="text-xs text-gray-500">{factor.detail}</p>
    </div>
  )
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const deleteVehicle = useDeleteVehicle()
  const factors = [
    { key: 'insurance', label: 'Insurance' },
    { key: 'pucc',      label: 'PUCC' },
    { key: 'fitness',   label: 'Fitness Certificate' },
    { key: 'challans',  label: 'Challans' },
    { key: 'fastag',    label: 'FASTag' },
  ] as const

  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold tracking-wide">{vehicle.vrn}</h2>
          <p className="text-sm text-muted-foreground">
            {vehicle.year} {vehicle.make} {vehicle.model} · {vehicle.fuelType}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-red-400 hover:text-red-600 hover:bg-red-50"
          onClick={() => deleteVehicle.mutate(vehicle.id)}
          disabled={deleteVehicle.isPending}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-6">
        <ScoreRing score={vehicle.healthScore} />
        <div className="flex-1 space-y-3 pt-2">
          <div>
            <p className="text-xs text-muted-foreground">Owner</p>
            <p className="font-semibold">{vehicle.owner}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline">
              Insurance: {vehicle.rcData.insuranceExpiry
                ? new Date(vehicle.rcData.insuranceExpiry).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })
                : 'N/A'}
            </Badge>
            <Badge variant="outline">Challans: {vehicle.rcData.challanCount}</Badge>
            <Badge variant="outline">FASTag: {vehicle.rcData.fastagActive ? 'Active' : 'Inactive'}</Badge>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-gray-700">Score Breakdown</p>
          <p className="text-xs text-muted-foreground">
            {factors.reduce((a, f) => a + vehicle.scoreFactors[f.key].earned, 0)} / 100 points
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {factors.map((f) => (
            <FactorBar key={f.key} factor={vehicle.scoreFactors[f.key]} label={f.label} />
          ))}
        </div>
        {factors.some((f) => vehicle.scoreFactors[f.key].status !== 'good') && (
          <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-blue-700">
            💡 Resolve the flagged items above to improve your health score.
          </div>
        )}
      </div>
    </Card>
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
  const { data: vehicles, isLoading } = useVehicles()
  const addVehicle = useAddVehicle()

  const handleAdd = () => {
    if (!vrn.trim()) return
    addVehicle.mutate(vrn.trim().toUpperCase(), {
      onSuccess: () => setVrn(''),
    })
  }

  return (
    <ProtectedRoute>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-1" style={{ color: '#074139' }}>My Vehicles</h1>
          <p className="text-sm text-muted-foreground">
            Add your number plate to fetch RC details and health score
          </p>
        </div>

        <div className="flex gap-3">
          <Input
            placeholder="e.g. TS09EF1234"
            value={vrn}
            onChange={(e) => setVrn(e.target.value.toUpperCase())}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <Button
            onClick={handleAdd}
            disabled={addVehicle.isPending || !vrn.trim()}
            style={{ backgroundColor: '#074139', color: '#A2F1DF' }}
          >
            {addVehicle.isPending ? 'Adding...' : 'Add Vehicle'}
          </Button>
        </div>

        {addVehicle.isError && (
          <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg">
            {(addVehicle.error as Error)?.message ?? 'Failed to add vehicle'}
          </div>
        )}

        {isLoading && <SkeletonCard />}

        <div className="space-y-6">
          {vehicles?.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
        </div>

        {!isLoading && vehicles?.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-4xl mb-4">🚗</p>
            <p className="font-medium">No vehicles added yet</p>
            <p className="text-sm mt-1">Enter your number plate above to get started</p>
          </div>
        )}
      </div>
    </ProtectedRoute>
  )
}