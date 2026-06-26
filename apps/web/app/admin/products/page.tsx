'use client'
import { useState } from 'react'
import { useAdminProducts, useCreateProduct, useUpdateProduct, useArchiveProduct } from '@/hooks/useAdmin'
import { useCategories } from '@/hooks/useProducts'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Plus, Pencil, Archive, X } from 'lucide-react'
import { useForm } from 'react-hook-form'

type FormMode = 'create' | 'edit' | null

export default function AdminProductsPage() {
  const [search, setSearch] = useState('')
  const [formMode, setFormMode] = useState<FormMode>(null)
  const [editingId, setEditingId] = useState<string | null>(null)

  const { data, isLoading } = useAdminProducts(search ? { search } : {})
  const { data: categories } = useCategories()
  const createProduct = useCreateProduct()
  const updateProduct = useUpdateProduct()
  const archiveProduct = useArchiveProduct()
  const { register, handleSubmit, reset } = useForm()

  const openCreate = () => { reset(); setEditingId(null); setFormMode('create') }
  const openEdit = (product: any) => { reset(product); setEditingId(product.id); setFormMode('edit') }
  const closeForm = () => { setFormMode(null); setEditingId(null); reset() }

  const onSubmit = async (data: any) => {
    const payload = { ...data, basePrice: parseFloat(data.basePrice), stock: parseInt(data.stock), compatibility: [], images: [] }
    if (formMode === 'create') await createProduct.mutateAsync(payload)
    else if (editingId) await updateProduct.mutateAsync({ id: editingId, ...payload })
    closeForm()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#074139' }}>Products</h1>
          <p className="text-sm text-muted-foreground mt-1">{data?.total ?? 0} products total</p>
        </div>
        <Button onClick={openCreate} style={{ backgroundColor: '#074139', color: '#A2F1DF' }}>
          <Plus className="h-4 w-4 mr-2" /> Add Product
        </Button>
      </div>

      <Input placeholder="Search by name or SKU..." value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-sm" />

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                {['Name', 'SKU', 'Category', 'Price', 'Stock', 'Status', 'Actions'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {isLoading ? [...Array(5)].map((_, i) => (
                <tr key={i}>{[...Array(7)].map((_, j) => <td key={j} className="px-4 py-3"><div className="h-4 bg-gray-100 rounded animate-pulse" /></td>)}</tr>
              )) : data?.products?.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium max-w-[200px] truncate">{product.name}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{product.sku}</td>
                  <td className="px-4 py-3 text-muted-foreground">{product.category.name}</td>
                  <td className="px-4 py-3 font-medium">₹{Number(product.basePrice).toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3">{product.stock}</td>
                  <td className="px-4 py-3">
                    <Badge className={`border-0 text-xs ${product.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {product.isActive ? 'Active' : 'Archived'}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => openEdit(product)} className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Pencil className="h-3.5 w-3.5" /></button>
                      {product.isActive && <button onClick={() => archiveProduct.mutate(product.id)} className="p-1.5 rounded hover:bg-red-50 text-gray-500 hover:text-red-500"><Archive className="h-3.5 w-3.5" /></button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {formMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={closeForm} />
          <Card className="relative w-full max-w-lg mx-4 p-6 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg" style={{ color: '#074139' }}>{formMode === 'create' ? 'Add Product' : 'Edit Product'}</h2>
              <button onClick={closeForm}><X className="h-5 w-5 text-gray-400" /></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2"><Label>Product Name</Label><Input {...register('name', { required: true })} placeholder="Oil Filter — Maruti Swift" /></div>
                <div><Label>Slug</Label><Input {...register('slug', { required: true })} placeholder="oil-filter-maruti-swift" /></div>
                <div><Label>SKU</Label><Input {...register('sku', { required: true })} placeholder="ENG-OIL-001" /></div>
                <div><Label>Price (₹)</Label><Input type="number" {...register('basePrice', { required: true })} placeholder="349" /></div>
                <div><Label>Stock</Label><Input type="number" {...register('stock', { required: true })} placeholder="100" /></div>
                <div className="col-span-2">
                  <Label>Category</Label>
                  <select {...register('categoryId', { required: true })} className="w-full border rounded-md px-3 py-2 text-sm">
                    <option value="">Select category</option>
                    {categories?.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                  </select>
                </div>
                <div className="col-span-2"><Label>Description</Label><textarea {...register('description')} rows={3} className="w-full border rounded-md px-3 py-2 text-sm resize-none" placeholder="Product description..." /></div>
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="submit" className="flex-1" style={{ backgroundColor: '#074139', color: '#A2F1DF' }} disabled={createProduct.isPending || updateProduct.isPending}>
                  {formMode === 'create' ? 'Create Product' : 'Save Changes'}
                </Button>
                <Button type="button" variant="outline" onClick={closeForm}>Cancel</Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  )
}