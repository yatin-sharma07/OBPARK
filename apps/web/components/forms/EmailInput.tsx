import { forwardRef } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ label = 'Email', error, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <Label htmlFor={props.id}>{label}</Label>
        <Input
          ref={ref}
          type="email"
          autoComplete="email"
          className={cn(error && 'border-red-500 focus-visible:ring-red-500', className)}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    )
  }
)
EmailInput.displayName = 'EmailInput'