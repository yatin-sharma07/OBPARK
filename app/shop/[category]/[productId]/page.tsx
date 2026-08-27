'use client'

import React, { use, useMemo } from "react";
import { useProduct } from "@/hooks/useProducts";
import { ProductInfo } from "./productDetails";
import { ObparkMarket } from "@/components/home/ObparkMarket";
import { SingleProduct } from "@/types/product";

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

// ──────────────────────────────────────────────────────────
// MAPPER: Transform the backend API response into the
// SingleProduct shape that <ProductInfo /> expects.
// ──────────────────────────────────────────────────────────
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

function prependBase(imgPath: string): string {
  if (!imgPath) return "";
  if (imgPath.startsWith("http") || imgPath.startsWith("data:")) return imgPath;
  return `${BASE_URL}${imgPath}`;
}

function mapApiToSingleProduct(api: any): SingleProduct {
  // Build gallery images with full URLs
  const galleryImages: string[] = (api.galleryImages || api.images || []).map(
    (img: string) => prependBase(img)
  );

  // Build aboutSections only from longDescription
  const aboutSections = [];
  if (api.longDescription) {
    aboutSections.push({
      heading: "",
      content: api.longDescription,
    });
  }

  return {
    id: String(api.productId || api.id),
    productHeading: api.productHeading || api.productName || "",
    title: api.title || api.productName || "",
    brand: api.brand || "",
    price: api.price ?? api.productCost ?? 0,
    currencySymbol: "\u20B9",
    imagePath: prependBase(api.imagePath || (api.images && api.images[0]) || ""),
    galleryImages,
    discountText: api.discountCoupon ? `${api.discountCoupon}% OFF` : "",
    ratingData: {
      averageRating: api.productRating ?? 0,
      totalReviewsCount: api.totalReviewsCount ?? 0,
      boughtPastMonthText: api.boughtPastMonthText || "",
      soldLastWeekText: api.soldLastWeekText || "",
    },
    attributes: (api.productFeatures || []).slice(0, 4).map((feat: string) => ({
      label: feat,
      value: feat,
    })),
    aboutSections,
    shippingBadges: api.shippingInformation
      ? [api.shippingInformation]
      : [],
    reviewsBreakdown: {
      starBars: [],
      userFeed: [],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // 1. Unwrap the dynamic route params using React.use()
  const resolvedParams = use(params);
  const productId = resolvedParams.productId;

  // 2. Fetch the product details from the backend API
  const { data: apiProduct, isLoading } = useProduct(productId) as any;

  // 3. Transform API product into SingleProduct shape
  const product: SingleProduct | null = useMemo(() => {
    if (apiProduct) return mapApiToSingleProduct(apiProduct);
    return null;
  }, [apiProduct]);

  const categorySlug = apiProduct?.category?.slug || "";

  // 4. Handle Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-[#0A3D31]">
        <p className="animate-pulse font-semibold">Loading product details...</p>
      </div>
    );
  }

  // 6. Handle Error or Not Found State
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#0A3D31]">
        <h3 className="text-xl font-bold">Product not found</h3>
        <p className="text-gray-500 mt-2">We could not retrieve the details for this product.</p>
      </div>
    );
  }

  // 7. Render details
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
