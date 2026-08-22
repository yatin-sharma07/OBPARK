import React from "react";
import { notFound } from "next/navigation";

//DATA SOURCE
import { MockData } from "@/app/category/mock-data/mock-data";
import { ProductInfo } from "./productDetails";
import { ObparkMarket } from "@/components/home/ObparkMarket";

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  
  // Resolve dynamic route params
  const resolvedParams = await params;
  const currentId = resolvedParams.productId;
  //console.log("currentId =", currentId);
  // Search through every category → every product
  let productData = null;
  let categorySlug = "";

  for (const category of MockData) {
    const foundProduct = category.items.find(

      (item) => item.id === currentId
    );
    // console.log("foundProduct =", foundProduct);
    if (foundProduct) {
      productData = foundProduct;
       categorySlug = category.slug;// category slug for the found product
      break;
    }
  }

  // If product not found → fallback to default item
  if (!productData) {
    productData = MockData[0].items[0];
  }
  //console.log("productData =", productData);
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 mt-25">
        
        {/* Product Main Details Section */}
        <ProductInfo product={productData} categorySlug={categorySlug} />

      </div>

      {/* Everything Your Car Needs Section */}
      <ObparkMarket />
    </>
  );
}