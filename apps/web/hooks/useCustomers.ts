// TODO: replace with GET /admin/customers once that endpoint exists
// Needs: per-user order count + total spend aggregation, joined from `orders` + `users`
import type { Customer } from '@/components/admin/customers/types'

const PLACEHOLDER_CUSTOMERS: Customer[] = [
  { id: '#CUST001', name: 'Ravi Kumar', phone: '+91 98765 43210', orders: 25, spend: 3450, status: 'Active' },
  { id: '#CUST002', name: 'Priya Sharma', phone: '+91 98765 43211', orders: 5, spend: 250, status: 'Inactive' },
  { id: '#CUST003', name: 'Arjun Reddy', phone: '+91 98765 43212', orders: 30, spend: 4600, status: 'VIP' },
  { id: '#CUST004', name: 'Sneha Iyer', phone: '+91 98765 43213', orders: 25, spend: 3450, status: 'Active' },
  { id: '#CUST005', name: 'Vikram Singh', phone: '+91 98765 43214', orders: 5, spend: 250, status: 'Inactive' },
  { id: '#CUST006', name: 'Anjali Nair', phone: '+91 98765 43215', orders: 30, spend: 4600, status: 'VIP' },
]

export function useCustomers() {
  // Once GET /admin/customers exists, swap this for:
  // return useQuery({ queryKey: ['admin', 'customers'], queryFn: () => api.get<Customer[]>('/admin/customers') })
  return { data: PLACEHOLDER_CUSTOMERS, isLoading: false }
}