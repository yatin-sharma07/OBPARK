import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

interface SubmitButtonProps {
  label: string
  isLoading?: boolean
  disabled?: boolean
}

export function SubmitButton({ label, isLoading, disabled }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className="w-full bg-brand-500 hover:bg-brand-600"
      disabled={isLoading || disabled}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  )
}