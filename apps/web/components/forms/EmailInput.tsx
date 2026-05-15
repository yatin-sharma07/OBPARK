'use client'
import { Input } from '@/components/ui/input'

interface EmailInputProps {
  register: any
  error?: string
}

export function EmailInput({ register, error }: EmailInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Email</label>
      <Input
        type="email"
        placeholder="you@example.com"
        {...register('email')}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  )
}