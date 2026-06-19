"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, Star, Heart } from "lucide-react";
import Link from "next/link";
import { APP_PRODUCTS, ProductDetails } from "@/app/data/products";

interface SimilarProductsProps {
  currentProduct: ProductDetails;
}

export function SimilarProducts({ currentProduct }: SimilarProductsProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Filter out the current product from the centralized list to suggest alternative choices
  const relatedProducts = Object.values(APP_PRODUCTS).filter(
    (item) => item.id !== currentProduct.id
  );

  // Smooth scroll handler engine
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.75; // Scroll roughly 75% of container viewport width
      
      sliderRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // If there are no other products in the category registry, skip rendering
  if (relatedProducts.length === 0) return null;

  return (
    <div className="space-y-6 pt-6">
      
      {/* Header Controller Bar */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-[#022c22]">
          Similar Products
        </h2>
        
        {/* Navigation Action Buttons (Visible only if multiple items exist) */}
        {relatedProducts.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-all active:scale-95 shadow-sm"
              aria-label="Slide left"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-all active:scale-95 shadow-sm"
              aria-label="Slide right"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Slider Viewport Window Container */}
      <div
        ref={sliderRef}
        className="flex items-stretch gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1 -mx-1 snap-x mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Loop through matching products from the dataset */}
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="w-[240px] sm:w-[260px] shrink-0 bg-white border border-slate-100 rounded-[0.7rem] p-4 flex flex-col justify-between transition-all hover:shadow-md snap-start relative group"
          >
            {/* Wishlist Heart Overlay Tag */}
            <button 
              className="absolute top-4 right-4 p-2 rounded-full text-slate-300 hover:text-rose-500 bg-white shadow-sm border border-slate-50 transition-colors z-10"
              aria-label="Add to wishlist"
            >
              <Heart className="h-4 w-4 stroke-[2]" />
            </button>

            {/* Link wrapper around image and details */}*
            <Link href={`/product/${product.id}`} className="block space-y-4 cursor-pointer flex-1">
              {/* Product Image Frame */}
              <div className="w-full aspect-square bg-slate-50/50 rounded-2xl flex items-center justify-center p-4 overflow-hidden relative">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title & Ratings Block */}
              <div className="space-y-1.5 text-center px-1">
                <h3 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug tracking-tight min-h-[2rem]">
                  {product.title}
                </h3>
                
                {/* Rating Display matching image_ed8422.png format */}
                <div className="flex items-center justify-center gap-1 text-[11px] font-black text-slate-500">
                  <span className="text-teal-700 pt-0.5">{product.rating.toFixed(1)}</span>
                  <div className="flex items-center text-teal-600">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 fill-current ${
                          i < Math.floor(product.rating) ? "text-teal-600" : "text-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Link>

            {/* Pricing & CTA Button Block */}
            <div className="space-y-3 pt-3 text-center  mt-4">
              <div className="text-base font-black text-slate-950 tracking-tight">
                ${product.price}
              </div>

              <Link 
                href={`/product/${product.id}`}
                className="block w-full bg-teal-800 hover:bg-teal-900 text-white font-black text-[10px] uppercase tracking-widest py-3 rounded-xl shadow-sm transition-all text-center outline-none"
              >
                Buy Now
              </Link>
            </div>

          </div>
        ))}

        {/* Fallback duplication item to match layout balance if dataset contains only 1 similar item */}
        {relatedProducts.length === 1 && (
          <div className="w-[240px] sm:w-[260px] shrink-0 bg-slate-50/40 border border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center p-6 text-center text-slate-400 gap-1 opacity-70">
            <span className="text-xl">✨</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">More models coming soon</span>
          </div>
        )}
      </div>

    </div>
  );
}