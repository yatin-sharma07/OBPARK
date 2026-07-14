// apps/web/app/admin/adminrole/page.tsx
'use client'

import { useState } from 'react'
import { Header } from '@/components/admin/layout/Header'
import { ProfileCard } from '@/components/admin/adminrole/ProfileCard'
import { ChangePasswordCard } from '@/components/admin/adminrole/ChangePasswordCard'
import { ProfileUpdateForm } from '@/components/admin/adminrole/ProfileUpdateForm'
import { useProfile } from '@/hooks/useProfile'
import { microgrammaBold } from '@/lib/fonts'

export default function AdminRolePage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { data: profile, isLoading } = useProfile()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-10">
  <h1 className={`${microgrammaBold.className} text-[24px] font-bold text-gray-800`}>
    Admin Role
  </h1>

  <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
  </div>

  <div className="w-9 h-9 rounded-full bg-gray-300" />
</div>

      <div className="p-6 space-y-6">
        <h2 className={`font-semibold text-lg text-gray-800 ${microgrammaBold.className}`}>About section</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <ProfileCard profile={profile} isLoading={isLoading} />
            <ChangePasswordCard />
          </div>
          <div className="lg:col-span-2">
            <ProfileUpdateForm profile={profile} />
          </div>
        </div>
      </div>
    </div>
  )
}