import React from "react";
import { notFound } from "next/navigation";

// NEW DATA SOURCE
import { MockData } from "@/app/category/mock-data/mock-data";

// EXISTING UI COMPONENTS (unchanged)
import { ProductInfo } from "./productDetails";
import { SimilarProducts } from "./similarProducts";
import { CustomerReviews } from "./customerReviews";

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  
  // Resolve dynamic route params
  const resolvedParams = await params;
  const currentId = resolvedParams.productId;

  // Search through every category → every product
  let productData = null;

  for (const category of MockData) {
    const foundProduct = category.items.find(
      (item) => item.id === currentId
    );

    if (foundProduct) {
      productData = foundProduct;
      break;
    }
  }

  // If product not found → 404 page
  if (!productData) {
    notFound();
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Product Main Details Section */}
      <ProductInfo product={productData} />

      {/* Similar Products Slider */}
      <SimilarProducts currentProduct={productData} />

      {/* Customer Reviews Section */}
      <CustomerReviews product={productData} />

    </div>
  );
}