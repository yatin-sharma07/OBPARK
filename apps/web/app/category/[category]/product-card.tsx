"use client";
import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";   // NEW

import { SingleProduct } from "@/app/category/mock-data/types";

interface ProductCardProps {
  product: SingleProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>   {/* NEW WRAPPER */}

      <div className="bg-transparent flex flex-col sm:flex-row items-center gap-6 p-4 border-t border-b border-black/5 cursor-pointer hover:bg-slate-50 transition-colors">

        {/* LEFT SIDE : Product Image */}
        <div className="w-50 h-40 shrink-0 flex items-center justify-center overflow-hidden p-2">
          <img
            src={product.imagePath}
            alt={product.title}
            className="max-w-full max-h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE : Product Content */}
        <div className="flex-1 space-y-2">

          {/* Product Title */}
          <h3 className="text-base text-[10px] font-extrabold text-slate-900 leading-snug tracking-tight mb-4">
            {product.title}
          </h3>

          {/* Rating Row */}
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mb-4">

            <span className="font-semibold text-[#1A817F]">
              {product.ratingData.averageRating.toFixed(1)}
            </span>

            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 fill-current ${
                    i < Math.floor(product.ratingData.averageRating)
                      ? "text-amber-400"
                      : "text-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bought Text */}
          <p className="text-[8px] text-slate-400 font-normal">
            {product.ratingData.boughtPastMonthText}
          </p>

          {/* Price + Button */}
          <div className="pt-2 space-y-3">

            <div className="text-[11px] font-extrabold text-slate-950">
              {product.currencySymbol}
              {product.price}
            </div>

            {/* Prevent button confusion */}
            <button
              onClick={(e) => e.preventDefault()}
              className="cursor-pointer text-[10px] bg-[#1A817F] hover:bg-[#156b6a] text-white font-medium px-10 py-2.5 rounded-lg shadow-sm transition-colors outline-none"
            >
              Add to Cart
            </button>

          </div>
        </div>
      </div>

    </Link>
  );
}