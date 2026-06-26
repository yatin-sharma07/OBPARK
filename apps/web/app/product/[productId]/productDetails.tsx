"use client";

import React, { useState } from "react";
import {
  Star,
  ArrowLeft,
  Plus,
  Minus,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { SingleProduct } from "@/app/category/mock-data/types";

import truckIcon from "@/app/assets/icons/truck.svg";
import cartsIcon from "@/app/assets/icons/carts.svg";
import globeIcon from "@/app/assets/icons/globe.svg";
import { extraImages } from "@/app/category/mock-data/mock-data";

interface ProductInfoProps {
  product: SingleProduct;
}

export function ProductInfo({ product }: ProductInfoProps) {

  // COMBINED IMAGE ARRAY
  const allImages = [
    product.imagePath,
    ...extraImages.extraImagesSet.slice(0, 3),
  ];

  // DEFAULT MAIN IMAGE = PRODUCT IMAGE
  const [activeImage, setActiveImage] = useState(
    allImages[0]
  );

  const [quantity, setQuantity] = useState(1);

  const [isDescriptionOpen, setIsDescriptionOpen] =
    useState(true);

  const [isAboutOpen, setIsAboutOpen] =
    useState(false);

  const incrementQty = () =>
    setQuantity((prev) => prev + 1);

  const decrementQty = () =>
    setQuantity((prev) =>
      prev > 1 ? prev - 1 : 1
    );

  return (
    <div className="space-y-8 animate-fadeIn">

      {/* Back Button */}
      <Link
        href="/category/electronics-smart-gadgets"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 hover:text-[#064e3b] transition-colors group"
      >
        <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
        <span>Back to Explore</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* LEFT IMAGE SECTION */}
        <div className="lg:col-span-6 space-y-4">

          {/* Main Image */}
          <div className="w-full aspect-square bg-white border border-slate-100 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 relative shadow-sm">
            <img
              src={activeImage}
              alt={product.title}
              className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
            />

            {/* Dot indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
              {allImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    activeImage === allImages[idx]
                      ? "w-4 bg-teal-800"
                      : "w-1.5 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`aspect-square rounded-2xl bg-slate-50 border overflow-hidden p-2 flex items-center justify-center transition-all ${
                  activeImage === img
                    ? "border-teal-700 bg-teal-50/20 scale-95"
                    : "border-slate-100 opacity-80 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt="Thumbnail view"
                  className="max-w-full max-h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-6 space-y-6">

          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-black text-slate-900 leading-snug tracking-tight">
              {product.title}
            </h1>

            <p className="text-xs font-bold text-slate-400 tracking-wide">
              Brand :
              <span className="text-slate-700 font-black">
                {" "}
                {product.brand}
              </span>
            </p>
          </div>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500">
            <div className="flex items-center gap-1">

              <div className="flex items-center text-teal-600">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 fill-current ${
                      i <
                      Math.floor(
                        product.ratingData.averageRating
                      )
                        ? "text-teal-600"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>

              <span className="text-slate-400 font-normal ml-1">
                {product.ratingData.totalReviewsCount} reviews
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 pt-1">

            <span className="text-xs font-black text-slate-400 tracking-tight">
              {product.discountText}
            </span>

            <div className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight flex items-start">
              <span className="text-base font-bold mr-0.5">
                {product.currencySymbol}
              </span>

              {product.price}
            </div>
          </div>

          {/* ACCORDIONS */}
          <div className="space-y-3">

            <div className="bg-white border border-none rounded-[1.5rem] overflow-hidden transition-all">

              <button
                onClick={() =>
                  setIsDescriptionOpen(
                    !isDescriptionOpen
                  )
                }
                className="w-full flex items-center justify-between px-5 py-4 text-left group"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#074139]">
                  Description
                </span>

                <div
                  className={`p-1 rounded-full text-slate-400 group-hover:text-teal-700 transition-all ${
                    isDescriptionOpen
                      ? "rotate-45 text-teal-700"
                      : ""
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </div>
              </button>

              {isDescriptionOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-50/60 animate-slideDown">

                  <div className="divide-y-[0.5px] divide-slate-100 text-[10px]">

                    {product.attributes.map((item) => (
                      <div
                        key={item.label}
                        className="grid grid-cols-12 py-2.5 gap-4 items-start"
                      >
                        <span className="col-span-4 font-black uppercase tracking-wider text-slate-700">
                          {item.label}
                        </span>

                        <span className="col-span-8 font-medium text-slate-500 whitespace-pre-line leading-relaxed">
                          {item.value}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border-none rounded-[1.5rem] overflow-hidden transition-all">

              <button
                onClick={() =>
                  setIsAboutOpen(!isAboutOpen)
                }
                className="w-full flex items-center justify-between px-5 py-4 text-left group"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#074139]">
                  About this item
                </span>

                <div
                  className={`p-1 rounded-full text-slate-400 group-hover:text-teal-700 transition-all ${
                    isAboutOpen
                      ? "rotate-45 text-teal-700"
                      : ""
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </div>
              </button>

              {isAboutOpen && (
                <div className="px-5 pb-5 pt-3 border-t border-slate-50/60 animate-slideDown">

                  <ul className="space-y-2.5 text-xs font-medium text-slate-600 list-disc list-inside leading-relaxed">

                    {product.aboutSections.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="marker:text-teal-700"
                        >
                          <strong>{item.heading}</strong> : {item.content}
                        </li>
                      )
                    )}

                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Shipping */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">

            <div className="bg-white rounded-l-3xl rounded-r-2xl px-4 py-6 flex items-center gap-2 text-[10px] font-bold text-slate-600">
              <Image src={truckIcon} alt="truck" width={14} height={14} />
              <span>{product.shippingBadges[0]}</span>
            </div>

            <div className="bg-white rounded-2xl px-4 py-6 flex items-center gap-2 text-[10px] font-bold text-slate-600">
              <Image src={globeIcon} alt="globe" width={14} height={14} />
              <span>{product.shippingBadges[1]}</span>
            </div>

            <div className="bg-white rounded-l-2xl rounded-r-3xl px-4 py-6 flex items-center gap-2 text-[10px] font-bold text-slate-600">
              <Image src={cartsIcon} alt="cart" width={14} height={14} />
              <span>{product.shippingBadges[2]}</span>
            </div>

          </div>

          {/* Quantity */}
          <div className="space-y-4 pt-2">

            <div className="flex items-center bg-slate-50 border border-slate-100 w-fit rounded-xl overflow-hidden p-1">

              <button
                onClick={decrementQty}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-white"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>

              <span className="w-10 text-center text-xs font-black text-slate-800 font-mono">
                {quantity}
              </span>

              <button
                onClick={incrementQty}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-white"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

              <button className="w-full bg-white border-2 border-teal-800 text-teal-800 font-black text-xs uppercase tracking-widest py-4 rounded-xl">
                Add to cart
              </button>

              <button className="w-full bg-teal-800 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl">
                Buy Now
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}