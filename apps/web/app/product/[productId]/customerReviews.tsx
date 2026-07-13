"use client";

import React, { useState } from "react";
import {
  Star,
  CheckCircle2,
  Search,
  ChevronDown,
} from "lucide-react";

// NEW TYPE
import { SingleProduct } from "@/app/category/mock-data/types";
import { extraImages } from "@/app/category/mock-data/mock-data";

interface CustomerReviewsProps {
  product: SingleProduct;
}

export function CustomerReviews({
  product,
}: CustomerReviewsProps) {
  const [searchQuery, setSearchQuery] =
    useState("");

  
    const [activeImage, setActiveImage] = useState(
      extraImages.extraImagesSet[0]
    );

  // NEW → real star distribution
  const ratingDistribution =
    product.reviewsBreakdown.starBars;

  // NEW → actual user reviews
  const displayReviews =
    product.reviewsBreakdown.userFeed;

  return (
    <div className="space-y-8 pt-10 border-t border-slate-100">

      {/* Header */}
      <div>
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-[#022c22]">
          Customer reviews
        </h2>

        <div className="h-[1px] bg-slate-100 w-full mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* LEFT PANEL */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-6">

          <div className="space-y-4">

            {/* Rating Number */}
            <div className="flex items-center gap-3">

              <span className="text-4xl font-black text-slate-900 tracking-tight">
                {product.ratingData.averageRating}
              </span>

              <div className="space-y-0.5">

                <span className="text-xs font-bold text-slate-400">
                  / 5
                </span>

                <div className="flex items-center text-teal-600">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-current text-teal-600"
                    />
                  ))}
                </div>
              </div>

              <span className="text-[11px] font-black text-slate-400 ml-1">
                {
                  product.ratingData
                    .totalReviewsCount
                }{" "}
                reviews
              </span>
            </div>

            {/* Rating Bars */}
            <div className="space-y-2 max-w-xs">

              {ratingDistribution.map((row) => (
                <div
                  key={row.stars}
                  className="flex items-center gap-3 text-[10px] font-bold text-slate-400"
                >
                  <span className="w-4 shrink-0 text-right">
                    {row.stars}★
                  </span>

                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-600/70 rounded-full"
                      style={{
                        width: `${row.percentage}%`,
                      }}
                    />
                  </div>

                  <span className="w-7 shrink-0 text-left text-slate-400/80">
                    {row.percentage}%
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* Review CTA */}
          <div className="space-y-3 pt-4 border-t border-slate-50">

            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
              Review this product
            </h3>

            <p className="text-xs font-medium text-slate-400 max-w-xs leading-relaxed">
              Share your thoughts with other customers
            </p>

            <button className="inline-block bg-teal-800 hover:bg-teal-900 text-white font-black text-[10px] uppercase tracking-widest px-5 py-3 rounded-xl transition-all shadow-sm outline-none">
              Write a product review
            </button>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-8 space-y-6">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">

            <div className="space-y-1">

              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                Customers say
              </h3>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">

                <span className="text-teal-800 border-b-2 border-teal-800 pb-1 px-0.5">
                  Reviews
                </span>

                <span className="bg-slate-50 text-slate-500 rounded-md px-1.5 py-0.5 text-[10px] font-mono">
                  {
                    product.ratingData
                      .totalReviewsCount
                  }
                </span>

              </div>
            </div>

            <button className="bg-teal-800 hover:bg-teal-900 text-white font-black text-[10px] uppercase tracking-widest px-5 py-3 rounded-xl transition-all self-start sm:self-center">
              Write a review
            </button>

          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-1">

            <div className="relative flex items-center max-w-xs flex-1 min-w-[160px]">

              <Search className="absolute left-3 h-3.5 w-3.5 text-slate-400" />

              <input
                type="text"
                placeholder="Search reviews"
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(
                    e.target.value
                  )
                }
                className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-9 pr-4 py-2 text-xs font-medium placeholder-slate-400 focus:outline-none"
              />
            </div>

            <button className="bg-slate-50 border border-slate-100 text-slate-600 rounded-xl px-3 py-2 text-[10px] font-bold inline-flex items-center gap-1.5">
              <span>Most relevant</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

            <button className="bg-slate-50 border border-slate-100 text-slate-600 rounded-xl px-3 py-2 text-[10px] font-bold inline-flex items-center gap-1.5">
              <span>All ratings</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

          </div>

          {/* Reviews */}
          <div className="divide-y divide-slate-100">

            {displayReviews.map((review) => (
              <div
                key={review.id}
                className="py-6 space-y-3"
              >

                {/* Stars */}
                <div className="flex items-center justify-between text-[11px] font-bold">

                  <div className="flex items-center text-teal-600">

                    {[...Array(5)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 fill-current ${
                            i <
                            review.rating
                              ? "text-teal-600"
                              : "text-slate-200"
                          }`}
                        />
                      )
                    )}

                  </div>

                  <span className="text-slate-400 font-normal">
                    {
                      review.postedDateAgo
                    }
                  </span>

                </div>

                {/* Reviewer */}
                <div className="space-y-1">

                  <div className="flex items-center gap-1.5 text-xs font-black text-slate-800">

                    <span>
                      {
                        review.reviewerName
                      }
                    </span>

                    {review.isVerifiedBuyer && (
                      <div className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-700 bg-teal-50/40 rounded px-1 py-0.5">
                        <CheckCircle2 className="h-2.5 w-2.5 text-teal-600 fill-teal-50" />
                        <span>
                          Verified buyer
                        </span>
                      </div>
                    )}

                  </div>

                  <p className="text-xs font-medium text-slate-600 leading-relaxed font-sans pt-0.5">
                    {
                      review.commentText
                    }
                  </p>

                </div>

                {/* Images */}
                {extraImages.extraImagesSet &&
                  extraImages.extraImagesSet
                    .length > 0 && (
                    <div className="pt-2">

                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-w-xl">




                          {extraImages.extraImagesSet.map(
                          (
                            imgUrl,
                            imgIdx
                          ) => (
                            <div
                              key={imgIdx}
                              className="aspect-square bg-slate-50 border border-slate-100 rounded-xl overflow-hidden p-1 flex items-center justify-center"
                            >
                              <img
                                src={imgUrl}
                                alt="review image"
                                className="max-w-full max-h-full object-cover rounded-lg"
                              />
                            </div>
                          )
                        )}

                        {/* {review.userUploadedMedia.map(
                          (
                            imgUrl,
                            imgIdx
                          ) => (
                            <div
                              key={imgIdx}
                              className="aspect-square bg-slate-50 border border-slate-100 rounded-xl overflow-hidden p-1 flex items-center justify-center"
                            >
                              <img
                                src={imgUrl}
                                alt="review image"
                                className="max-w-full max-h-full object-cover rounded-lg"
                              />
                            </div>
                          )
                        )} */}

                      </div>
                    </div>
                  )}
              </div>
            ))}

          </div>

          {/* Bottom Button */}
          <div className="pt-4 text-center">
            <button className="bg-teal-800 hover:bg-teal-900 text-white font-black text-[10px] uppercase tracking-widest px-8 py-3 rounded-xl shadow-sm transition-all outline-none">
              Show more
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}