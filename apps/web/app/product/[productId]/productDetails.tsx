"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Plus,
  Minus,
  Maximize2,
  Lock,
  ShoppingBag,
  CheckCircle2,
  Car,
  Armchair,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SingleProduct } from "@/app/category/mock-data/types";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { useAddToCart } from "@/hooks/useCart";
import { useCartStore } from "@/store/cart.store";
import { VehicleSelectDialog } from "@/components/cart/VehicleSelectDialog";
import { MockData } from "@/app/category/mock-data/mock-data";
import { microgrammaBold } from "@/lib/fonts";

interface ProductInfoProps {
  product: SingleProduct;
  categorySlug: string; // Optional category slug for the product
}

export function ProductInfo({ product, categorySlug }: ProductInfoProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const addToCart = useAddToCart();
  const openCart = useCartStore((s) => s.openCart);

  const [showDialog, setShowDialog] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(1); // 1, 3, or 6 units
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);

  // Gallery Images
  const allImages = [
    product.imagePath || "/Images/Feature-Product/Microfiber-Cloth.jpg",
    "/Images/Feature-Product/Cleaning-Combo.jpg",
    "/Images/Feature-Product/Interior-Exterior-Combo.jpg",
    "/Images/Feature-Product/Microfiber-Cloth.jpg"
  ];

  const [activeImage, setActiveImage] = useState(allImages[0]);

  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    setShowDialog(true);
  };

  const handleConfirm = async (vehicleId: string | null) => {
    try {
      await addToCart.mutateAsync({
        productId: product.id,
        vehicleId: vehicleId ?? undefined,
        quantity: quantity,
      });
    } catch (e) {
      console.error(e);
    }
    setShowDialog(false);
    openCart();
  };
   

  const relatedProductIdsByCategory: Record<string, string[]> = {
  "exterior-accessories": ["ext-prod-2", "ext-prod-3", "ext-prod-4", "ext-prod-5", "ext-prod-6","ext-prod-7"],
  "car-interiors": ["int-prod-2", "int-prod-3", "int-prod-4", "int-prod-5", "int-prod-6","int-prod-7"],
  "car-essentials": [ "ess-prod-2", "ess-prod-3", "ess-prod-4"],
};

const defaultPartnerImages = [
  "/Images/Trusted-Partners/Partner1.png",
  "/Images/Trusted-Partners/Partner2.png",
  "/Images/Trusted-Partners/Partner3.png",
];

//  Resolve product IDs into actual product objects — THIS FIRST
const relatedProductIds = relatedProductIdsByCategory[categorySlug];

const relatedProducts = relatedProductIds
  ? relatedProductIds
      .map((id) => {
        for (const category of MockData) {
          const found = category.items.find((item) => item.id === id);
          if (found) return found;
        }
        return null;
      })
      .filter((p): p is SingleProduct => p !== null)
  : null;

//  THEN chunk it into slides — this depends on relatedProducts, so it must come after
const partnerSlides = relatedProducts
  ? Array.from({ length: Math.ceil(relatedProducts.length / 3) }, (_, i) =>
      relatedProducts.slice(i * 3, i * 3 + 3)
    )
  : null;



  return (
    <div className="space-y-12 animate-fadeIn bg-[#F0F9F5] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pt-4 pb-8 rounded-[32px]">
      
      {/* MAIN TOP SECTION (GALLERY + DETAILS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">

        {/* LEFT COLUMN: PRODUCT GALLERY */}
        <div className="lg:col-span-6 space-y-4">
          {/* MAIN IMAGE CARD */}
          <div className="w-full aspect-square bg-white rounded-[28px] overflow-hidden flex items-center justify-center p-8 relative shadow-sm border border-slate-100">
            <button 
              onClick={() => window.open(activeImage, '_blank')}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-slate-500 hover:text-teal-800 transition-colors z-10"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            
            <img
              src={activeImage}
              alt={product.title}
              className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* THUMBNAILS ROW */}
          <div className="grid grid-cols-4 gap-3">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`aspect-square rounded-[18px] bg-white border overflow-hidden p-2 flex items-center justify-center transition-all ${
                  activeImage === img
                    ? "border-[#1C8182] ring-2 ring-[#1C8182]/20 scale-95"
                    : "border-slate-200 opacity-80 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i}`}
                  className="max-w-full max-h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: PRODUCT DETAILS */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* HEADER ROW (TITLE + ADD BUTTON) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-[#074139] text-2xl sm:text-3xl font-bold tracking-wide" style={{ fontFamily: 'var(--font-michroma)' }}>
              {product.title}
            </h1>
            <button 
              onClick={handleAddToCart}
              className="bg-[#1C8182] hover:bg-[#156465] text-white text-sm sm:text-base px-6 py-2.5 sm:px-8 sm:py-3 rounded-[24px] flex items-center justify-center gap-2 shadow-sm transition-colors"
              style={{ fontFamily: 'var(--font-michroma)' }}
            >
              <Image src="/Images/product-common/Add.svg" alt="Add" width={20} height={20} />
              <span>Add</span>
            </button>
          </div>

          {/* FULL SUBTITLE */}
          <h2 className="text-[#074139] text-base sm:text-lg sm:leading-[1.7] font-medium" style={{ fontFamily: 'var(--font-michroma)' }}>
           {product.brand}
          </h2>

          {/* TAGLINE 
          <p className="text-[#1C8182] text-base sm:text-[17px] font-medium" style={{ fontFamily: 'var(--font-michroma)' }}>
            Natural shield against sweet temptations
          </p> */}

          {/* RATING & SOCIAL PROOF */}
          <div className="flex flex-col gap-2 pt-0.5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i === 4 ? 'text-[#81BDB5] fill-[#81BDB5]' : 'text-[#1C8182] fill-[#1C8182]'}`} />
                ))}
              </div>
              <span className="text-[#074139] text-[15px] whitespace-nowrap" style={{ fontFamily: 'var(--font-michroma)' }}>
      {product.ratingData.totalReviewsCount} reviews
    </span>
  </div>
            

            {/* AVATAR STACK SOCIAL PROOF */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-[#F0F9F5] object-cover" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?w=100&auto=format&fit=crop&q=80" alt="user" />
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-[#F0F9F5] object-cover" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?w=100&auto=format&fit=crop&q=80" alt="user" />
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-[#F0F9F5] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="user" />
              </div>
              <span className="text-[#1C8182] text-[15px]" style={{ fontFamily: 'var(--font-michroma)' }}>Sold over 238 times last week</span>
              <CheckCircle2 className="w-5 h-5 text-white fill-[#1d4ed8]" />
            </div>
          </div>

          {/* 4 FEATURE PILLS GRID (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            <div className="bg-white rounded-[16px] px-3 py-2.5 flex items-center gap-3 text-[12px] sm:text-[13px] text-[#1C8182] shadow-sm">
              <Image src="/Images/product-common/Cravings & Apetite regulation.svg" alt="Cravings" width={20} height={20} className="shrink-0" />
              <span style={{ fontFamily: 'var(--font-michroma)' }}>Cravings & Apetite regulation¹</span>
            </div>
            <div className="bg-white rounded-[16px] px-3 py-2.5 flex items-center gap-3 text-[12px] sm:text-[13px] text-[#1C8182] shadow-sm">
              <Image src="/Images/product-common/Weight management.svg" alt="Weight management" width={20} height={20} className="shrink-0" />
              <span style={{ fontFamily: 'var(--font-michroma)' }}>Weight management³</span>
            </div>
            <div className="bg-white rounded-[16px] px-3 py-2.5 flex items-center gap-3 text-[12px] sm:text-[13px] text-[#1C8182] shadow-sm">
              <Image src="/Images/product-common/Blood sugar balance.svg" alt="Blood sugar balance" width={20} height={20} className="shrink-0" />
              <span style={{ fontFamily: 'var(--font-michroma)' }}>Blood sugar balance²</span>
            </div>
            <div className="bg-white rounded-[16px] px-3 py-2.5 flex items-center gap-3 text-[12px] sm:text-[13px] text-[#1C8182] shadow-sm">
              <Image src="/Images/product-common/Diet synergy.svg" alt="Diet synergy" width={20} height={20} className="shrink-0" />
              <span style={{ fontFamily: 'var(--font-michroma)' }}>Diet synergy</span>
            </div>
          </div>

          {/* PURCHASE OPTIONS SECTION */}
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-[#1C8182] text-[15px]" style={{ fontFamily: 'var(--font-michroma)' }}>Purchase Options</span>
            </div>
            
            <div className="flex items-center justify-between pt-1">
              <span className="text-[#074139] text-[15px]" style={{ fontFamily: 'var(--font-michroma)' }}>One-Time Purchase</span>
              <div className="flex items-center gap-2 text-[#1C8182]">
                <Star className="w-4 h-4 fill-[#1C8182]" />
                <span className="text-[15px]" style={{ fontFamily: 'var(--font-michroma)' }}>Most Popular</span>
              </div>
            </div>

            {/* RADIO OPTIONS CONTAINER */}
            <div className="flex flex-col gap-2.5">
              {/* 1 UNIT */}
              <label 
                onClick={() => setSelectedUnit(1)}
                className="bg-white rounded-[16px] p-3.5 sm:p-4 flex items-center justify-between cursor-pointer shadow-sm transition-all hover:bg-slate-50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border-[1.5px] border-[#1C8182] flex items-center justify-center bg-white">
                    {selectedUnit === 1 && <div className="w-3.5 h-3.5 bg-[#1C8182] rounded-full" />}
                  </div>
                  <span className="text-[#074139] text-[15px]" style={{ fontFamily: 'var(--font-michroma)' }}>1 unit</span>
                </div>
                <span className="text-[#074139] text-[15px]" style={{ fontFamily: 'var(--font-michroma)' }}>034,99</span>
              </label>

              {/* 3 UNITS */}
              <label 
                onClick={() => setSelectedUnit(3)}
                className="bg-white rounded-[16px] p-3.5 sm:p-4 flex items-center justify-between cursor-pointer shadow-sm transition-all hover:bg-slate-50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border-[1.5px] border-[#1C8182] flex items-center justify-center bg-white">
                    {selectedUnit === 3 && <div className="w-3.5 h-3.5 bg-[#1C8182] rounded-full" />}
                  </div>
                  <span className="text-[#074139] text-[15px]" style={{ fontFamily: 'var(--font-michroma)' }}>3 units</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#074139] text-[15px]" style={{ fontFamily: 'var(--font-michroma)' }}>094,47</span>
                  <div className="bg-gradient-to-r from-[#167D7F] to-[#B0E5CC] text-white text-[12px] px-3.5 py-1.5 rounded-full tracking-wider" style={{ fontFamily: 'var(--font-michroma)' }}>-10%</div>
                </div>
              </label>

              {/* 6 UNITS */}
              <label 
                onClick={() => setSelectedUnit(6)}
                className="bg-white rounded-[16px] p-3.5 sm:p-4 flex items-center justify-between cursor-pointer shadow-sm transition-all hover:bg-slate-50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border-[1.5px] border-[#1C8182] flex items-center justify-center bg-white">
                    {selectedUnit === 6 && <div className="w-3.5 h-3.5 bg-[#1C8182] rounded-full" />}
                  </div>
                  <span className="text-[#074139] text-[15px]" style={{ fontFamily: 'var(--font-michroma)' }}>6 units</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#074139] text-[15px]" style={{ fontFamily: 'var(--font-michroma)' }}>0167,95</span>
                  <div className="bg-gradient-to-r from-[#167D7F] to-[#B0E5CC] text-white text-[12px] px-3.5 py-1.5 rounded-full tracking-wider" style={{ fontFamily: 'var(--font-michroma)' }}>-20%</div>
                </div>
              </label>
            </div>
          </div>

          {/* QUANTITY & ADD TO BAG BUTTON ROW */}
          <div className="flex items-center gap-4 pt-1">
            <div className="flex items-center gap-3">
              <button onClick={decrementQty} className="w-[52px] h-[52px] rounded-full bg-[#167D7F]/25 flex items-center justify-center text-white hover:opacity-75 shadow-sm transition-all">
                <Minus className="w-5 h-5" strokeWidth={3} />
              </button>
              <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center text-[#074139] text-xl shadow-sm" style={{ fontFamily: 'var(--font-michroma)' }}>
                {quantity}
              </div>
              <button onClick={incrementQty} className="w-[52px] h-[52px] rounded-full bg-[#167D7F]/25 flex items-center justify-center text-white hover:opacity-75 shadow-sm transition-all">
                <Plus className="w-5 h-5" strokeWidth={3} />
              </button>
            </div>

            <button 
              onClick={handleAddToCart}
              style={{ fontFamily: 'var(--font-michroma)' }}
              className="flex-1 h-[52px] bg-gradient-to-r from-[#2D7A79] to-[#70C1B3] text-white text-[16px] sm:text-[18px] rounded-[26px] flex items-center justify-center gap-3 shadow-md transition-all hover:opacity-90 active:scale-95 tracking-wide"
            >
              <Image src="/Images/product-common/Add.svg" alt="Add" width={20} height={20} />
              <span>Add to bag</span>
            </button>
          </div>

          {/* SHIPPING BADGES ROW (3 SEPARATE PILLS) */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-white rounded-[20px] px-3 py-4 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-[#074139] shadow-sm">
              <Image src="/Images/product-common/Free shipping.svg" alt="Free shipping" width={20} height={20} className="shrink-0" />
              <span style={{ fontFamily: 'var(--font-michroma)' }}>Free shipping over500/</span>
            </div>
            <div className="bg-white rounded-[20px] px-3 py-4 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-[#074139] shadow-sm">
              <Image src="/Images/product-common/Fast global shipping.svg" alt="Fast global shipping" width={20} height={20} className="shrink-0" />
              <span style={{ fontFamily: 'var(--font-michroma)' }}>Fast global shipping</span>
            </div>
            <div className="bg-white rounded-[20px] px-3 py-4 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-[#074139] shadow-sm">
              <Image src="/Images/product-common/Buy more, save more.svg" alt="Buy more, save more" width={20} height={20} className="shrink-0" />
              <span style={{ fontFamily: 'var(--font-michroma)' }}>Buy more, save more</span>
            </div>
          </div>

          {/* IN STOCK BANNER */}
          <div className="bg-white rounded-[20px] py-4 px-6 flex items-center justify-center gap-3 text-[11px] sm:text-[12px] text-[#074139] shadow-sm w-full">
            <span className="w-3 h-3 rounded-full bg-[#00C853] inline-block shrink-0" />
            <span style={{ fontFamily: 'var(--font-michroma)' }}>In stock, orders placed within 17:27:22 ship the same day</span>
          </div>

          {/* SERVICE GUARANTEE PILLS (ROWS OF 3) */}
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-[20px] px-3 py-4 flex items-center justify-center gap-2.5 text-[10px] sm:text-[11px] text-[#074139] shadow-sm">
                <Image src="/Images/product-common/Recurring delivery.svg" alt="Recurring delivery" width={20} height={20} className="shrink-0" />
                <span style={{ fontFamily: 'var(--font-michroma)' }}>Recurring delivery</span>
              </div>
              <div className="bg-white rounded-[20px] px-3 py-4 flex items-center justify-center gap-2.5 text-[10px] sm:text-[11px] text-[#074139] shadow-sm">
                <Image src="/Images/product-common/More savings.svg" alt="More savings" width={20} height={20} className="shrink-0" />
                <span style={{ fontFamily: 'var(--font-michroma)' }}>More savings</span>
              </div>
              <div className="bg-white rounded-[20px] px-3 py-4 flex items-center justify-center gap-2.5 text-[10px] sm:text-[11px] text-[#074139] shadow-sm leading-tight">
                <Image src="/Images/product-common/Pause or cancel.svg" alt="Pause or cancel" width={20} height={20} className="shrink-0" />
                <span style={{ fontFamily: 'var(--font-michroma)' }}>Pause or cancel<br/>anytime</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-[20px] px-3 py-4 flex items-center justify-center gap-2.5 text-[10px] sm:text-[11px] text-[#074139] shadow-sm">
                <Image src="/Images/product-common/Lab tested.svg" alt="Lab tested" width={20} height={20} className="shrink-0" />
                <span style={{ fontFamily: 'var(--font-michroma)' }}>Lab tested</span>
              </div>
              <div className="bg-white rounded-[20px] px-3 py-4 flex items-center justify-center gap-2.5 text-[10px] sm:text-[11px] text-[#074139] shadow-sm leading-tight">
                <Image src="/Images/product-common/Certified &approved.svg" alt="Certified & approved" width={20} height={20} className="shrink-0" />
                <span style={{ fontFamily: 'var(--font-michroma)' }}>Certified &<br/>approved</span>
              </div>
              <div className="bg-white rounded-[20px] px-3 py-4 flex items-center justify-center gap-2.5 text-[10px] sm:text-[11px] text-[#074139] shadow-sm">
                <Image src="/Images/product-common/All-natural.svg" alt="All-natural" width={20} height={20} className="shrink-0" />
                <span style={{ fontFamily: 'var(--font-michroma)' }}>All-natural</span>
              </div>
            </div>
          </div>

          {/* ACCORDION (DESCRIPTION) */}
          <div className="bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-sm mt-4">
            <button 
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
              className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left text-lg sm:text-xl text-[#1C8182]"
            >
              <span style={{ fontFamily: 'var(--font-michroma)' }}>Description</span>
              <motion.div
                animate={{ rotate: isDescriptionOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDescriptionOpen ? (
                  <Minus className="w-6 h-6 sm:w-7 sm:h-7 text-[#1C8182]" strokeWidth={3} />
                ) : (
                  <Plus className="w-6 h-6 sm:w-7 sm:h-7 text-[#1C8182]" strokeWidth={3} />
                )}
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isDescriptionOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-[11px] sm:text-[13px] text-slate-700 leading-[1.8]" style={{ fontFamily: 'var(--font-michroma)' }}>
  <ul className="list-disc pl-4 space-y-4 marker:text-slate-700">
    {product.aboutSections.map((section, i) => (
      <li key={i}>
        <span className="font-bold">{section.heading}</span>{section.content ? ` - ${section.content}` : ''}
      </li>
    ))}
  </ul>
</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* OUR TRUSTED PARTNERS CARD (SCREENSHOT 2) */}
          {/* OUR TRUSTED PARTNERS CARD (SCREENSHOT 2) */}
<div className="bg-gradient-to-b from-[#167D7F] to-[#B0E5CC] rounded-[24px] p-6 sm:p-8 text-white text-center shadow-md space-y-6">
  <h3 className="text-lg sm:text-xl tracking-wide font-normal" style={{ fontFamily: 'var(--font-michroma)' }}>
    Our Trusted Partners
  </h3>

  {partnerSlides ? (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPartnerSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="grid grid-cols-3 gap-3 sm:gap-4"
        >
          {partnerSlides[currentPartnerSlide].map((relatedProduct) => (
            <Link
              key={relatedProduct.id}
              href={`/product/${relatedProduct.id}`}
              className="relative bg-[#D9D9D9] rounded-2xl h-40 sm:h-52 overflow-hidden block"
            >
              <Image
                src={relatedProduct.imagePath}
                alt={relatedProduct.title}
                fill
                sizes="(max-width: 640px) 33vw, 200px"
                className="object-cover"
              />
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>

      {partnerSlides.length > 1 && (
        <div className="flex justify-center gap-2 pt-1">
          {partnerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPartnerSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentPartnerSlide === index
                  ? "w-7 bg-[#074139]"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </>
  ) : (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {defaultPartnerImages.map((img, i) => (
        <div key={i} className="relative bg-[#D9D9D9] rounded-2xl h-40 sm:h-52 overflow-hidden">
          <Image
            src={img}
            alt={`Partner ${i + 1}`}
            fill
            sizes="(max-width: 640px) 33vw, 200px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )}
</div>

        </div>

      </div>

      {/* BOTTOM SECTION REMOVED */}
      {showDialog && (
        <VehicleSelectDialog
          productName={product.title}
          onConfirm={handleConfirm}
          onCancel={() => setShowDialog(false)}
          isLoading={addToCart.isPending}
        />
      )}
    </div>
  );
}