'use client'
import { Button } from '@/components/ui/button'

interface SubmitButtonProps {
  label: string
  isLoading?: boolean
}

export function SubmitButton({ label, isLoading }: SubmitButtonProps) {
  return (
    <Button type="submit" className="w-full" disabled={isLoading}>
      {isLoading ? 'Loading...' : label}
    </Button>
  )
}