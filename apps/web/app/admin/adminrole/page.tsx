// apps/web/app/admin/adminrole/page.tsx
'use client'

import { useState } from 'react'
import { Header } from '@/components/admin/layout/Header'
import { ProfileCard } from '@/components/admin/settings/ProfileCard'
import { ChangePasswordCard } from '@/components/admin/settings/ChangePasswordCard'
import { ProfileUpdateForm } from '@/components/admin/settings/ProfileUpdateForm'
import { useProfile } from '@/hooks/useProfile'

export default function AdminRolePage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { data: profile, isLoading } = useProfile()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Admin Role" onMenuClick={() => setDrawerOpen(true)} />

      <div className="p-6 space-y-6">
        <h2 className="font-semibold text-lg text-gray-800">About section</h2>

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