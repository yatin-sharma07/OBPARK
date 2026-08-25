import { ProductsPage } from "@/components/products/ProductsPage"


interface CategoryPageProps {
  params: Promise<{ category: string }>
}



export default async function Page({ params }: CategoryPageProps) {

  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;

  return <ProductsPage categorySlug={categorySlug} />
}