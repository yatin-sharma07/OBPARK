'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { michroma, microgrammaBold } from '@/lib/fonts'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { ProductCard } from './ProductCard'



interface ProductsPageProps {
  categorySlug: string;
}

export function ProductsPage({ categorySlug }: ProductsPageProps) {
  const router = useRouter()
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await api.get<any>(`/products?categoryslug=${categorySlug}`);

        // If backend returned products, use them. Otherwise, fall back to our dummy fallback database
        if (response.products && response.products.length > 0) {
          setProducts(response.products);
          console.log("products: ", response.products);
        }
      } catch (error) {
        console.error("failed to load products : ", error);

      } finally {
        setLoading(false);
      }
    }

    if (categorySlug) {
      fetchProducts();
    }
  }, [categorySlug]);

  return (
    <div className="w-full min-h-screen bg-[#eefaf6] text-[#0A3D31]">

      {/* Hero */}
      {/* Hero Container with Background Image */}
      <div
        className="w-[96%] h-[700px] mx-auto bg-[#D9D9D9] bg-cover bg-center bg-no-repeat pt-24 mt-10 pb-16 px-4 sm:px-8 md:px-12 rounded-[48px] relative overflow-hidden"
        style={{ backgroundImage: "url('/Images/products/hero.jpg')" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[460px]">

          {/* Left Column: Text, Search & Buttons */}
          <div className="text-center lg:text-left z-10 flex flex-col items-center lg:items-start">
            <p className={`${microgrammaBold.className} text-[#59D0B5] uppercase tracking-[3px] text-xs sm:text-sm font-bold mb-2`}>
              OBPARK SHOP
            </p>
            <h1 className={`${microgrammaBold.className} text-white font-bold text-3xl sm:text-4xl md:text-[44px] leading-[1.2]`}>
              Car Accessories
            </h1>
            <p className={`${michroma.className} text-white/80 text-xs sm:text-[13px] leading-[1.8] mt-4 max-w-[500px]`}>
              Upgrade your ride with the best car accessories. Comfort, style, protection & convenience everything your car deserves.
            </p>

            {/* Search Input Bar */}
            <div className="relative mt-8 max-w-md w-full">
              <input
                type="text"
                placeholder="Search for Car Accessories"
                className={`${michroma.className} w-full bg-white text-black pl-6 pr-14 py-4 rounded-full text-[10px] outline-none shadow-md placeholder-gray-400`}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#308E8C] hover:bg-[#2A7E7C] text-white p-2 rounded-full transition-colors flex items-center justify-center w-9 h-9">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4.5 h-4.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.608 10.608Z" />
                </svg>
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button className={`${microgrammaBold.className} bg-gradient-to-r from-[#308E8C] to-[#59D0B5] hover:opacity-95 text-white font-bold text-[10px] tracking-wider rounded-full px-6 py-3.5 flex items-center gap-1.5 transition-all`}>
                SHOP NOW {"→"}
              </button>
              <button className={`${microgrammaBold.className} bg-[#0A3D31]/40 hover:bg-[#0A3D31]/60 border border-[#308E8C]/50 text-white font-bold text-[10px] tracking-wider rounded-full px-6 py-3.5 flex items-center gap-1.5 transition-all`}>
                EXPLORE CATEGORIES {"→"}
              </button>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Features Bar */}
      <section className="w-full py-8  bg-[#eefaf6]">
        <div className="w-[96%] max-w-6xl mx-auto bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x lg:divide-gray-100">

            {/* Item 1 */}
            <div className="flex items-center gap-4 lg:px-6 py-2 sm:py-4 lg:py-0">
              <div className="w-12 h-12 rounded-full bg-[#E8F6F1] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#308E8C" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.991l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <div>
                <h4 className={`${microgrammaBold.className} text-[#0A3D31] text-[11px] sm:text-[13px] tracking-wider font-bold`}>
                  100% Genuine Products
                </h4>
                <p className={`${michroma.className} text-gray-500 text-[9px] sm:text-[10px] mt-1`}>
                  Quality you can trust
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 lg:px-6 py-2 sm:py-4 lg:py-0">
              <div className="w-12 h-12 rounded-full bg-[#E8F6F1] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#308E8C" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125a1.125 1.125 0 0 0 1.125-1.125V9.75M8.25 13.875h10.875m-13.5-3.75h13.5m-3.75 3.75V9.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v5.625m17.25 0V9.75c0-.621-.504-1.125-1.125-1.125h-2.25c-.621 0-1.125.504-1.125 1.125v3.375m0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125Z" />
                </svg>
              </div>
              <div>
                <h4 className={`${microgrammaBold.className} text-[#0A3D31] text-[11px] sm:text-[13px] tracking-wider font-bold`}>
                  Fast & Secure Delivery
                </h4>
                <p className={`${michroma.className} text-gray-500 text-[9px] sm:text-[10px] mt-1`}>
                  Across India
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 lg:px-6 py-2 sm:py-4 lg:py-0">
              <div className="w-12 h-12 rounded-full bg-[#E8F6F1] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#308E8C" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <div>
                <h4 className={`${microgrammaBold.className} text-[#0A3D31] text-[11px] sm:text-[13px] tracking-wider font-bold`}>
                  Easy Returns
                </h4>
                <p className={`${michroma.className} text-gray-500 text-[9px] sm:text-[10px] mt-1`}>
                  7-Day return policy
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4 lg:px-6 py-2 sm:py-4 lg:py-0">
              <div className="w-12 h-12 rounded-full bg-[#E8F6F1] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#308E8C" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
                </svg>
              </div>
              <div>
                <h4 className={`${microgrammaBold.className} text-[#0A3D31] text-[11px] sm:text-[13px] tracking-wider font-bold`}>
                  Secure Checkout
                </h4>
                <p className={`${michroma.className} text-gray-500 text-[9px] sm:text-[10px] mt-1`}>
                  100% Safe Transactions
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="w-[96%] max-w-6xl mx-auto py-12 px-4 sm:px-0">

        {/* Case 1: Loading State */}
        {loading && (
          <div className="text-center py-12 text-gray-400">
            <p className="animate-pulse">Loading products...</p>
          </div>
        )}

        {/* Case 2: Empty State */}
        {!loading && products.length === 0 && (
          <div className="text-center py-16 border border-dashed border-gray-200 rounded-3xl">
            <h3 className="text-base font-bold text-gray-400">No products found</h3>
            <p className="text-xs text-gray-400 mt-1">We couldn't find any products in this category.</p>
          </div>
        )}

        {/* Case 3: Products Found */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </section>

    </div>
  )
}