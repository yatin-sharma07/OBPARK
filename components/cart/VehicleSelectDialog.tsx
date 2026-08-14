'use client'

import { useState } from 'react'
import { useVehicles } from '@/hooks/useVehicles'
import { Button } from '@/components/ui/button'
import { Car, X } from 'lucide-react'

interface Props {
  productName: string
  onConfirm: (vehicleId: string | null) => void
  onCancel: () => void
  isLoading?: boolean
}

export function VehicleSelectDialog({
  productName,
  onConfirm,
  onCancel,
  isLoading,
}: Props) {
  const { data: vehicles } = useVehicles()

  const [selected, setSelected] =
    useState<string | null | 'none'>('none')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onCancel}
      />

      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 p-6 space-y-5">
        <div className="flex items-start justify-between">
          <div>
            <h3
              className="font-bold text-lg"
              style={{ color: '#074139' }}
            >
              Which vehicle is this for?
            </h3>

            <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
              {productName}
            </p>
          </div>

          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => setSelected('none')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all ${
              selected === 'none'
                ? 'border-[#074139] bg-[#f0faf8]'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Car className="h-4 w-4 text-gray-400" />
            </div>

            <div>
              <p className="text-sm font-medium">
                No specific vehicle
              </p>

              <p className="text-xs text-muted-foreground">
                Add without vehicle link
              </p>
            </div>
          </button>

          {vehicles?.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelected(v.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all ${
                selected === v.id
                  ? 'border-[#074139] bg-[#f0faf8]'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                style={{ backgroundColor: '#074139' }}
              >
                {v.make[0]}
              </div>

              <div>
                <p className="text-sm font-medium">
                  {v.vrn}
                </p>

                <p className="text-xs text-muted-foreground">
                  {v.make} {v.model} · {v.year}
                </p>
              </div>
            </button>
          ))}
        </div>

        <Button
          className="w-full"
          style={{
            backgroundColor: '#074139',
            color: '#A2F1DF',
          }}
          disabled={isLoading}
          onClick={() =>
            onConfirm(
              selected === 'none'
                ? null
                : (selected as string)
            )
          }
        >
          {isLoading ? 'Adding...' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  )
}