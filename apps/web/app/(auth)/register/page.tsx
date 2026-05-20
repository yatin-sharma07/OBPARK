'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { EmailInput } from '@/components/forms/EmailInput'
import { PasswordInput } from '@/components/forms/PasswordInput'
import { SubmitButton } from '@/components/forms/SubmitButton'
import { Input } from '@/components/ui/input'

import { useAuthStore } from '@/store/auth.store'
import { registerUser } from '@/lib/auth.api'

interface RegisterForm {
  name: string
  email: string
  password: string
}

export default function RegisterPage() {
  const router = useRouter()
  const setAuth = useAuthStore((state) => state.setAuth)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterForm>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: RegisterForm) => {
    try {
      const res = await registerUser(data)

      setAuth(res.user, res.accessToken)

      router.push('/')
    } catch (error) {
      setError('root', {
        message: error instanceof Error
          ? error.message
          : 'Something went wrong',
      })
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold">
          Create Account
        </h1>

        <p className="mb-6 text-sm text-muted-foreground">
          Enter your details to create your account.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div>
          <label
      htmlFor="name"
      className="text-sm font-medium"
    >
      Full Name
    </label>
            <Input
              id="name"
              type="text"
              autoComplete="name"
              aria-invalid={!!errors.name}
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
              })}
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          <EmailInput
            id="email"
            autoComplete="email"
            error={errors.email?.message}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />

          <PasswordInput
            id="password"
            autoComplete="new-password"
            error={errors.password?.message}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Minimum 8 characters',
              },
            })}
          />

          {errors.root && (
            <p className="text-sm text-red-500">
              {errors.root.message}
            </p>
          )}

          <SubmitButton
            label="Create Account"
            isLoading={isSubmitting}
          />
        </form>
      </div>
    </div>
  )
}