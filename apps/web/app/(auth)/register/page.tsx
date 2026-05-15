'use client'
import { useForm } from 'react-hook-form'
import { EmailInput } from '@/components/forms/EmailInput'
import { PasswordInput } from '@/components/forms/PasswordInput'
import { SubmitButton } from '@/components/forms/SubmitButton'

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 border rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Create Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <EmailInput register={register} error={errors.email?.message as string} />
          <PasswordInput register={register} error={errors.password?.message as string} />
          <SubmitButton label="Create Account" />
        </form>
      </div>
    </div>
  )
}