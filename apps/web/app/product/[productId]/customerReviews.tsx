"use client";

import React, { useState } from "react";
import { Star, CheckCircle2, Search, ChevronDown } from "lucide-react";
import { ProductDetails } from "@/app/data/products";

interface CustomerReviewsProps {
  product: ProductDetails;
}

export function CustomerReviews({ product }: CustomerReviewsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Hardcoded layout distribution data matching the reference image's breakdown sidebar
  const ratingDistribution = [
    { stars: 5, percentage: 67 },
    { stars: 4, percentage: 67 },
    { stars: 3, percentage: 67 },
    { stars: 2, percentage: 67 },
    { stars: 1, percentage: 67 },
  ];

  // Fallback layout review data matching exactly what is shown in the image grid if the product array is sparse
  const displayReviews = product.reviews.length > 0 ? product.reviews : [
    {
      id: "ex-1",
      author: "Jan",
      rating: 5,
      date: "3 months ago",
      verified: true,
      comment: "Pretty cool effect!",
    },
    {
      id: "ex-2",
      author: "Sofie",
      rating: 5,
      date: "5 months ago",
      verified: true,
      comment: "Grappig! Ben benieuwd of het me ook echt helpt om minder suiker te nemen.",
    },
    {
      id: "ex-3",
      author: "Julia",
      rating: 5,
      date: "5 months ago",
      verified: true,
      comment: "Grappig! Ben benieuwd of het me ook echt helpt om minder suiker te nemen.",
      images: ["https://images.unsplash.com/photo-1552656967-7a0991a13906?w=400&auto=format&fit=crop&q=80"]
    },
    {
      id: "ex-4",
      author: "Sofie",
      rating: 5,
      date: "5 months ago",
      verified: true,
      comment: "Grappig! Ben benieuwd of het me ook echt helpt om minder suiker te nemen.",
    },
    {
      id: "ex-5",
      author: "Sofie",
      rating: 5,
      date: "5 months ago",
      verified: true,
      comment: "Grappig! Ben benieuwd of het me ook echt helpt om minder suiker te nemen.",
      images: [
        "https://images.unsplash.com/photo-1552656967-7a0991a13906?w=200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&auto=format&fit=crop&q=80"
      ]
    }
  ];

  return (
    <div className="space-y-8 pt-10 border-t border-slate-100">
      {/* Primary Outer Component Header Accent */}
      <div>
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-[#022c22]">
          Customer reviews
        </h2>
        <div className="h-[1px] bg-slate-100 w-full mt-4" />
      </div>

      {/* Main Structural Split Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* ==================== LEFT COLUMN: RATINGS BREAKDOWN PANEL ==================== */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-6">
          
          <div className="space-y-4">
            {/* Total Value Block Readout */}
            <div className="flex items-center gap-3">
              <span className="text-4xl font-black text-slate-900 tracking-tight">4.7</span>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-slate-400">/ 5</span>
                <div className="flex items-center text-teal-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current text-teal-600" />
                  ))}
                </div>
              </div>
              <span className="text-[11px] font-black text-slate-400 ml-1">
                {product.reviewCount || 102} reviews
              </span>
            </div>

            {/* Distribution Horizontal Indicator Bars */}
            <div className="space-y-2 max-w-xs">
              {ratingDistribution.map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                  <span className="w-4 shrink-0 text-right">{row.stars}★</span>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-teal-600/70 rounded-full" 
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span className="w-7 shrink-0 text-left text-slate-400/80">{row.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Prompt Callout */}
          <div className="space-y-3 pt-4 border-t border-slate-50">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">Review this product</h3>
            <p className="text-xs font-medium text-slate-400 max-w-xs leading-relaxed">
              Share your thoughts with other customers
            </p>
            <button className="inline-block bg-teal-800 hover:bg-teal-900 text-white font-black text-[10px] uppercase tracking-widest px-5 py-3 rounded-xl transition-all shadow-sm outline-none">
              Write a product review
            </button>
          </div>

        </div>

        {/* ==================== RIGHT COLUMN: DETAILED FEED & SEARCH ==================== */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="space-y-1">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">Customers say</h3>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <span className="text-teal-800 border-b-2 border-teal-800 pb-1 px-0.5">Reviews</span>
                <span className="bg-slate-50 text-slate-500 rounded-md px-1.5 py-0.5 text-[10px] font-mono">
                  {product.reviewCount || 102}
                </span>
              </div>
            </div>
            
            <button className="bg-teal-800 hover:bg-teal-900 text-white font-black text-[10px] uppercase tracking-widest px-5 py-3 rounded-xl transition-all self-start sm:self-center">
              Write a review
            </button>
          </div>

          {/* Filter Navigation Options Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {/* Minimal Input Text Field */}
            <div className="relative flex items-center max-w-xs flex-1 min-w-[160px]">
              <Search className="absolute left-3 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search reviews"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-9 pr-4 py-2 text-xs font-medium placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-200 text-slate-700 transition-all"
              />
            </div>

            {/* Filter Pill Triggers */}
            <button className="bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-600 rounded-xl px-3 py-2 text-[10px] font-bold inline-flex items-center gap-1.5 transition-colors">
              <span>Most relevant</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

            <button className="bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-600 rounded-xl px-3 py-2 text-[10px] font-bold inline-flex items-center gap-1.5 transition-colors">
              <span>All ratings</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

            <button className="bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-600 rounded-xl px-3 py-2 text-[10px] font-bold transition-colors">
              With media
            </button>
          </div>

          {/* Active Review Cards Stack Loop Container */}
          <div className="divide-y divide-slate-100">
            {displayReviews.map((review) => (
              <div key={review.id} className="py-6 space-y-3 animate-fadeIn">
                
                {/* Meta Summary Header Metadata */}
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <div className="flex items-center text-teal-600">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 fill-current ${i < review.rating ? "text-teal-600" : "text-slate-200"}`} 
                      />
                    ))}
                  </div>
                  <span className="text-slate-400 font-normal">{review.date}</span>
                </div>

                {/* Profile Details Author Identification Badge */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-black text-slate-800">
                    <span>{review.author}</span>
                    {review.verified && (
                      <div className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-700 bg-teal-50/40 rounded px-1 py-0.5">
                        <CheckCircle2 className="h-2.5 w-2.5 text-teal-600 fill-teal-50" />
                        <span>Verified buyer</span>
                      </div>
                    )}
                  </div>

                  {/* Comment Context Copy */}
                  <p className="text-xs font-medium text-slate-600 leading-relaxed font-sans pt-0.5">
                    {review.comment}
                  </p>
                </div>

                {/* Attached Review Media Layout Blocks */}
                {review.images && review.images.length > 0 && (
                  <div className="pt-2">
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-w-xl">
                      {review.images.map((imgUrl, imgIdx) => (
                        <div 
                          key={imgIdx} 
                          className="aspect-square bg-slate-50 border border-slate-100 rounded-xl overflow-hidden p-1 flex items-center justify-center cursor-zoom-in hover:brightness-95 transition-all"
                        >
                          <img 
                            src={imgUrl} 
                            alt={`Review asset reference lookup #${imgIdx}`} 
                            className="max-w-full max-h-full object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* Bottom Pagination Trigger */}
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