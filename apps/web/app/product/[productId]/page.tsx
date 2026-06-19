import React from "react";
import { notFound } from "next/navigation";
import { APP_PRODUCTS } from "@/app/data/products";
import { ProductInfo } from "./productDetails";
import { SimilarProducts } from "./similarProducts";
import { CustomerReviews } from "./customerReviews"; // 1. Import reviews element

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const currentId = resolvedParams.productId;

  // Retrieve matching item datasets dynamically via params routing context index keys
  const productData = APP_PRODUCTS[currentId];

  if (!productData) {
    notFound();
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Component 1: Core Content Hero Card with embedded Accordion spec logic */}
      <ProductInfo product={productData} />
      
      {/* Component 2: Cross-sell recommendation dynamic carousel engine slider */}
      <SimilarProducts currentProduct={productData} />
      
      {/* Component 3: Complete Review matrices with image galleries */}
      <CustomerReviews product={productData} />
    </div>
  );
}