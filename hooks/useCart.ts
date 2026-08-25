import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { useAuthStore } from '@/store/auth.store'

// 1️⃣ FETCH CART (GET /cart)
export function useCart() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  return useQuery({
    queryKey: ['cart'],
    queryFn: () => api.get<any>('/cart'),
    retry: false, // Don't retry if user is not logged in (401)
    enabled: isAuthenticated,
  })
}

// 2️⃣ ADD TO CART (POST /cart/items)
export function useAddToCart() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: { productId: string; quantity?: number; vehicleId?: string; color?: string; size?: string }) =>
      api.post('/cart/items', data),

    // Automatically refetch the cart so the UI updates immediately!
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })
}

// 3️⃣ UPDATE ITEM QUANTITY (PATCH /cart/items/:itemId)
export function useUpdateCartItem() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ itemId, quantity }: { itemId: string; quantity: number }) =>
      api.patch(`/cart/items/${itemId}`, { quantity }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })
}

// 4️⃣ DELETE ITEM (DELETE /cart/items/:itemId)
export function useRemoveCartItem() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (itemId: string) =>
      api.delete(`/cart/items/${itemId}`),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })
}
