'use client'
import { Input } from '@/components/ui/input'

interface PasswordInputProps {
  register: any
  error?: string
}

export function PasswordInput({ register, error }: PasswordInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Password</label>
      <Input
        type="password"
        placeholder="••••••••"
        {...register('password')}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  )
}