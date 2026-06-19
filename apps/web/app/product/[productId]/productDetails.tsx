"use client";

import React, { useState } from "react";
import { Star, ShieldCheck, ShoppingBag, ArrowLeft, Plus, Minus, CheckCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import { ProductDetails } from "@/app/data/products";
import Image from "next/image";
import truckIcon from "@/app/assets/icons/truck.svg";
import cartsIcon from "@/app/assets/icons/carts.svg";
import globeIcon from "@/app/assets/icons/globe.svg"

interface ProductInfoProps {
  product: ProductDetails;
}

export function ProductInfo({ product }: ProductInfoProps) {
  // Gallery and configuration state hooks
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  
  // Accordion toggle states - matching image_ed9044.png default view (Description open, About closed)
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Counter helper engines
  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Dynamic Back-to-Category Link */}
      <Link 
        href={`/${product.category}`} 
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 hover:text-[#064e3b] transition-colors group"
      >
        <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
        <span>Back to Explore</span>
      </Link>

      {/* Main Container Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* ==================== LEFT COLUMN: IMAGE VIEWER GALLERY ==================== */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Hero Container Frame */}
          <div className="w-full aspect-square bg-white border border-slate-100 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 relative shadow-sm">
            <img 
              src={activeImage} 
              alt={product.title} 
              className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
            />
            
            {/* Minimal Image Dot Carousel Indicator bar */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
              {product.images.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all ${activeImage === product.images[idx] ? "w-4 bg-teal-800" : "w-1.5 bg-slate-200"}`}
                />
              ))}
            </div>
          </div>
          
          {/* Bottom Grid Layout Gallery Previews */}
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`aspect-square rounded-2xl bg-slate-50 border overflow-hidden p-2 flex items-center justify-center transition-all ${
                  activeImage === img ? "border-teal-700 bg-teal-50/20 scale-95" : "border-slate-100 opacity-80 hover:opacity-100"
                }`}
              >
                <img src={img} alt="Thumbnail view" className="max-w-full max-h-full object-contain" />
              </button>
            ))}
            {/* Placeholders if data has less than 4 preview thumbnails */}
            {product.images.length < 4 && [...Array(4 - product.images.length)].map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl bg-slate-100 border border-slate-100 opacity-40" />
            ))}
          </div>
        </div>


        {/* ==================== RIGHT COLUMN: BUYING OPTIONS & ACCORDIONS ==================== */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Product Header Titles Block */}
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-black text-slate-900 leading-snug tracking-tight">
              {product.title}
            </h1>
            
            {product.brand && (
              <p className="text-xs font-bold text-slate-400 tracking-wide">
                Brand : <span className="text-slate-700 font-black">{product.brand}</span>
              </p>
            )}
          </div>

          {/* Ratings & Social Validation Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500">
            <div className="flex items-center gap-1">
              <div className="flex items-center text-teal-600">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-3.5 w-3.5 fill-current ${i < Math.floor(product.rating) ? "text-teal-600" : "text-slate-200"}`} 
                  />
                ))}
              </div>
              <span className="text-slate-400 font-normal ml-1">{product.reviewCount || 102} reviews</span>
            </div>

            {product.recentSalesText && (
              <>
                <span className="text-slate-200">|</span>
                <div className="flex items-center gap-2">
                  {/* Stacked Circular User Avatars matching design file */}
                  {product.salesAvatars && (
                    <div className="flex -space-x-1.5">
                      {product.salesAvatars.map((url, index) => (
                        <img key={index} src={url} alt="User" className="w-4 h-4 rounded-full border border-white object-cover" />
                      ))}
                    </div>
                  )}
                  <span className="text-slate-600 font-bold">{product.recentSalesText}</span>
                  <CheckCircle className="h-3.5 w-3.5 text-teal-600 fill-teal-50" />
                </div>
              </>
            )}
          </div>

          {/* Pricing Box Layout */}
          <div className="flex items-baseline gap-3 pt-1">
            {product.discountPercentage && (
              <span className="text-xs font-black text-slate-400 tracking-tight">
                -{product.discountPercentage}%
              </span>
            )}
            <div className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight flex items-start">
              <span className="text-base font-bold mr-0.5">$</span>
              {product.price}
            </div>
          </div>

          {/* ==================== ACCORDION SECTION SYSTEM ==================== */}
          <div className="space-y-3">
            
            {/* ACCORDION 1: Description Technical Specs Matrix */}
            <div className="bg-white border border-none rounded-[1.5rem] overflow-hidden transition-all">
              <button 
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                className="w-full flex items-center justify-between px-5 py-4 text-left group"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#074139]">Description</span>
                <div className={`p-1 rounded-full text-slate-400 group-hover:text-teal-700 transition-all ${isDescriptionOpen ? "rotate-45 text-teal-700" : ""}`}>
                  <Plus className="h-4 w-4" />
                </div>
              </button>

              {isDescriptionOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-50/60 animate-slideDown">
                  <div className="divide-y-[0.5px] divide-slate-100 text-[10px]">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="grid grid-cols-12 py-2.5 gap-4 items-start">
                        <span className="col-span-4 font-black uppercase tracking-wider text-slate-700">{key}</span>
                        <span className="col-span-8 font-medium text-slate-500 whitespace-pre-line leading-relaxed">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ACCORDION 2: About This Item Highlighting Lists */}
            <div className="bg-white border-none rounded-[1.5rem] overflow-hidden transition-all">
              <button 
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="w-full flex items-center justify-between px-5 py-4 text-left group"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#074139]">About this item</span>
                <div className={`p-1 rounded-full text-slate-400 group-hover:text-teal-700 transition-all ${isAboutOpen ? "rotate-45 text-teal-700" : ""}`}>
                  <Plus className="h-4 w-4" />
                </div>
              </button>

              {isAboutOpen && (
                <div className="px-5 pb-5 pt-3 border-t border-slate-50/60 animate-slideDown">
                  <ul className="space-y-2.5 text-xs font-medium text-slate-600 list-disc list-inside leading-relaxed">
                    {product.description.map((bullet, idx) => (
                      <li key={idx} className="marker:text-teal-700">{bullet}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>

          {/* Shipping Perks Tags Footer */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <div className="bg-white border border-none rounded-l-3xl rounded-r-2xl px-4 py-6 flex items-center gap-2 text-[10px] font-bold text-slate-600">
                        <Image
                            src={truckIcon}
                            alt="Obrive Logo"
                            width={14}
                            height={14}
                        />
              <span>Free shipping over $500</span>
            </div>
            <div className="bg-white border border-none rounded-2xl px-4 py-6 flex items-center gap-2 text-[10px] font-bold text-slate-600">
                          <Image
                              src={globeIcon}
                              alt="Obrive Logo"
                            width={14}
                            height={14}
                          />
              <span>Fast global shipping</span>
            </div>
            <div className="bg-white border border-none  rounded-l-2xl rounded-r-3xl  rounded-xl px-4 py-6 flex items-center gap-2 text-[10px] font-bold text-slate-600">
                        <Image
                            src={cartsIcon}
                            alt="Obrive Logo"
                            width={14}
                            height={14}
                        />
              <span>Buy more, save more</span>
            </div>
          </div>

          {/* ==================== ACTIONS & PURCHASE FOOTER CONTROLS ==================== */}
          <div className="space-y-4 pt-2">
            {/* Quantity Controller Box */}
            <div className="flex items-center bg-slate-50 border border-slate-100 w-fit rounded-xl overflow-hidden p-1">
              <button onClick={decrementQty} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-white hover:text-teal-800 active:scale-95 transition-all">
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-10 text-center text-xs font-black text-slate-800 font-mono">
                {quantity}
              </span>
              <button onClick={incrementQty} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-white hover:text-teal-800 active:scale-95 transition-all">
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Split Main Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <button className="w-full bg-white border-2 border-teal-800 text-teal-800 hover:bg-teal-50/30 font-black text-xs uppercase tracking-widest py-4 rounded-xl transition-all outline-none">
                Add to cart
              </button>
              <button className="w-full bg-teal-800 hover:bg-teal-900 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-md shadow-teal-900/10 transition-all outline-none">
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}