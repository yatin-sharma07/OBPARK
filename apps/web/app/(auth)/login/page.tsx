'use client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { EmailInput } from '@/components/forms/EmailInput'
import { PasswordInput } from '@/components/forms/PasswordInput'
import { SubmitButton } from '@/components/forms/SubmitButton'
import { useAuthStore } from '@/store/auth.store'
import { loginUser } from '@/lib/auth.api'

interface LoginForm {
  email: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()
  const setAuth = useAuthStore((state) => state.setAuth)
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<LoginForm>()

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await loginUser(data)
      setAuth(res.user, res.accessToken)
      router.push('/')
    } catch (err: any) {
      setError('root', { message: err.message })
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 border rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <EmailInput
            id="email"
            error={errors.email?.message}
            {...register('email', { required: 'Email is required' })}
          />
          <PasswordInput
            id="password"
            error={errors.password?.message}
            {...register('password', { required: 'Password is required' })}
          />
          {errors.root && (
            <p className="text-sm text-red-500">{errors.root.message}</p>
          )}
          <SubmitButton label="Login" isLoading={isSubmitting} />
          <p className="text-sm text-center text-muted-foreground">
  Don't have an account?{' '}
  <a href="/register" className="text-brand-500 font-medium hover:underline">
    Create one
  </a>
</p>
        </form>
      </div>
    </div>
  )
}