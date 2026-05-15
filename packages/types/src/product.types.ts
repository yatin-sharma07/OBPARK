import { z } from 'zod'

export const CompatibilityRuleSchema = z.object({
  make: z.string(),
  model: z.string(),
  yearFrom: z.number(),
  yearTo: z.number(),
})

export type CompatibilityRule = z.infer<typeof CompatibilityRuleSchema>

export interface Product {
  id: string
  name: string
  slug: string
  description?: string
  categoryId: string
  basePrice: number
  images: string[]
  compatibility: CompatibilityRule[]
  stock: number
  sku: string
}