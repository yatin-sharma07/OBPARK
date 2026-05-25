'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { EmailInput } from '@/components/forms/EmailInput'
import { PasswordInput } from '@/components/forms/PasswordInput'
import { SubmitButton } from '@/components/forms/SubmitButton'
import { useLogin } from '@/hooks/useAuth'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})
type FormData = z.infer<typeof schema>

export default function LoginPage() {
  const login = useLogin()

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
      <div className="w-full max-w-md p-8 bg-white border rounded-xl shadow-sm space-y-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#074139' }}>Welcome back</h1>
          <p className="text-sm text-muted-foreground mt-1">Sign in to your Obrive account</p>
        </div>

        {login.error && (
          <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg">
            {(login.error as Error).message}
          </div>
        )}

        <form
          onSubmit={handleSubmit((data) => login.mutate(data))}
          className="space-y-4"
        >
          <EmailInput
            id="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register('email')}
          />
          <PasswordInput
            id="password"
            placeholder="••••••••"
            error={errors.password?.message}
            {...register('password')}
          />
          <SubmitButton label="Sign in" isLoading={login.isPending} />
        </form>

        <p className="text-sm text-center text-muted-foreground">
          Don't have an account?{' '}
          <Link href="/register" className="font-medium hover:underline" style={{ color: '#074139' }}>
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}