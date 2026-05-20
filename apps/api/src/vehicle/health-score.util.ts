import { RcApiResponse } from './surepass.client'

export interface HealthScoreResult {
  total: number
  factors: {
    insurance: { earned: number; max: number; status: 'good' | 'warn' | 'bad'; detail: string }
    pucc:      { earned: number; max: number; status: 'good' | 'warn' | 'bad'; detail: string }
    fitness:   { earned: number; max: number; status: 'good' | 'warn' | 'bad'; detail: string }
    challans:  { earned: number; max: number; status: 'good' | 'warn' | 'bad'; detail: string }
    fastag:    { earned: number; max: number; status: 'good' | 'warn' | 'bad'; detail: string }
  }
}

export function computeHealthScore(rc: RcApiResponse): HealthScoreResult {
  const now = new Date()

  const insurance = (() => {
    const max = 30
    if (!rc.insuranceExpiry) return { earned: 0, max, status: 'bad' as const, detail: 'No insurance data found' }
    const expiry = new Date(rc.insuranceExpiry)
    const daysLeft = Math.floor((expiry.getTime() - now.getTime()) / 86_400_000)
    if (daysLeft < 0) return { earned: 0, max, status: 'bad' as const, detail: `Insurance expired ${Math.abs(daysLeft)} days ago` }
    if (daysLeft < 30) return { earned: 15, max, status: 'warn' as const, detail: `Insurance expires in ${daysLeft} days — renew soon` }
    return { earned: 30, max, status: 'good' as const, detail: `Valid till ${expiry.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}` }
  })()

  const pucc = (() => {
    const max = 20
    if (!rc.puccExpiry) return { earned: 0, max, status: 'bad' as const, detail: 'No PUCC data found' }
    const expiry = new Date(rc.puccExpiry)
    const daysLeft = Math.floor((expiry.getTime() - now.getTime()) / 86_400_000)
    if (daysLeft < 0) return { earned: 0, max, status: 'bad' as const, detail: `PUCC expired ${Math.abs(daysLeft)} days ago` }
    if (daysLeft < 30) return { earned: 10, max, status: 'warn' as const, detail: `PUCC expires in ${daysLeft} days` }
    return { earned: 20, max, status: 'good' as const, detail: `Valid till ${expiry.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}` }
  })()

  const fitness = (() => {
    const max = 20
    if (!rc.fitnessExpiry) return { earned: 10, max, status: 'warn' as const, detail: 'Fitness certificate data unavailable' }
    const expiry = new Date(rc.fitnessExpiry)
    const daysLeft = Math.floor((expiry.getTime() - now.getTime()) / 86_400_000)
    if (daysLeft < 0) return { earned: 0, max, status: 'bad' as const, detail: `Fitness certificate expired ${Math.abs(daysLeft)} days ago` }
    if (daysLeft < 45) return { earned: 12, max, status: 'warn' as const, detail: `Expires in ${daysLeft} days — renewal recommended` }
    return { earned: 20, max, status: 'good' as const, detail: `Valid till ${expiry.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}` }
  })()

  const challans = (() => {
    const max = 15
    const count = rc.challanCount ?? 0
    if (count === 0) return { earned: 15, max, status: 'good' as const, detail: 'No pending challans' }
    if (count <= 2) return { earned: 5, max, status: 'warn' as const, detail: `${count} pending challan${count > 1 ? 's' : ''} found` }
    return { earned: 0, max, status: 'bad' as const, detail: `${count} pending challans — clear immediately` }
  })()

  const fastag = (() => {
    const max = 15
    if (rc.fastagActive) return { earned: 15, max, status: 'good' as const, detail: 'Active FASTag linked to vehicle' }
    return { earned: 0, max, status: 'bad' as const, detail: 'No active FASTag found' }
  })()

  const total = insurance.earned + pucc.earned + fitness.earned + challans.earned + fastag.earned
  return { total, factors: { insurance, pucc, fitness, challans, fastag } }
}