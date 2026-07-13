'use client'

import { microgrammaBold } from '@/lib/fonts'
import { AddProductForm } from '@/components/admin/products/AddProductForm'

export default function AddProductPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <h1
          className={`${microgrammaBold.className} text-[24px] font-bold text-gray-800`}
        >
          Add Product
        </h1>

        <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
        </div>

        <div className="w-9 h-9 rounded-full bg-gray-300" />
      </div>

      <div className="p-6 space-y-6">
        <AddProductForm />
      </div>

    </div>
  )
}