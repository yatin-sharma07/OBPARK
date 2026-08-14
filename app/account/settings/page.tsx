import { Settings } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
      <Settings className="h-10 w-10 text-muted-foreground" />
      <h2 className="text-lg font-semibold">Settings</h2>
      <p className="text-sm text-muted-foreground">
        Account settings will be available here soon.
      </p>
    </div>
  )
}