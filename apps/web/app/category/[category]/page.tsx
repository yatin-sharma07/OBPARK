import React from "react";
import { MockData } from "@/app/category/mock-data/mock-data";
import { ProductCard } from "./product-card";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  // WAIT for params
  const resolvedParams = await params;
  const currentCategorySlug = resolvedParams.category;

  console.log("slug =", currentCategorySlug);

  const categoryData = MockData.find(
    (cat) => cat.slug === currentCategorySlug
  );

  const products = categoryData ? categoryData.items : [];

  return (
    <div className="rounded-xl overflow-hidden">
      {products.length === 0 ? (
        <div className="p-12 text-center text-slate-400 text-sm">
          No products found for this category loop. Try testing <code className="bg-slate-100 px-1 py-0.5 rounded text-rose-500">/electronics-smart-gadgets</code>
        </div>
      ) : (
        /* Grid hata kar initial vertical stack class aur divide border wapas laga di hain */
        <div className="divide-y divide-slate-100">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}