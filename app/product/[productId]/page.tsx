'use client'

import React, { use } from "react";
import { useProduct } from "@/hooks/useProducts";
import { ProductInfo } from "./productDetails";
import { ObparkMarket } from "@/components/home/ObparkMarket";

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  // 1. Unwrap the dynamic route params using React.use()
  const resolvedParams = use(params);
  const productId = resolvedParams.productId;

  // 2. Fetch the product details from the backend API using our hook
  const { data: product, isLoading, error } = useProduct(productId) as any;

  // 3. Handle Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-[#0A3D31]">
        <p className="animate-pulse font-semibold">Loading product details...</p>
      </div>
    );
  }

  // 4. Handle Error or Not Found State
  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#0A3D31]">
        <h3 className="text-xl font-bold">Product not found</h3>
        <p className="text-gray-500 mt-2">We couldn't retrieve the details for this product.</p>
      </div>
    );
  }

  // 5. Render details
  const categorySlug = product.category?.slug || "";

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 mt-25">
        {/* Product Main Details Section */}
        <ProductInfo product={product} categorySlug={categorySlug} />
      </div>

      {/* Everything Your Car Needs Section */}
      <ObparkMarket />
    </>
  );
}
