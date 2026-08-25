'use client'

import Image from 'next/image'
import Link from 'next/link'
import { michroma, microgrammaBold } from '@/lib/fonts'
import { useAddToCart } from '@/hooks/useCart'
import { useAuthStore } from '@/store/auth.store'

export interface Product {
    category?: string | { id?: string; name?: string; slug?: string };
    id: number;
    productId: string;
    productName: string;
    productDescription: string;
    productCost: number;
    images: string[];
    productRating: number;
}

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const addToCartMutation = useAddToCart()
    const accessToken = useAuthStore((state) => state.accessToken)

    const handleAddToBasket = async () => {
        if (!accessToken) {
            alert('Please login first to add items to your cart.')
            return
        }
        try {
            await addToCartMutation.mutateAsync({
                productId: String(product.productId || product.id),
                quantity: 1,
            })
            alert('Product added to basket successfully!')
        } catch (err) {
            console.error(err)
            alert('Failed to add product to basket.')
        }
    }

    // Prepend backend API url for images hosted on the backend server
    const categorySlug = typeof product.category === 'object' && product.category?.slug
        ? product.category.slug
        : (typeof product.category === 'string' && product.category ? product.category : 'car-accessories');

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    const mainImage = product.images && product.images.length > 0
        ? (product.images[0].startsWith('http') || product.images[0].startsWith('data:')
            ? product.images[0]
            : `${baseUrl}${product.images[0]}`)
        : '/Images/no-image.jpg';

    // Calculate dynamic dummy discount and original price
    const discount = 20; // matching the image
    const originalPrice = Math.round(product.productCost / (1 - discount / 100));
    const reviewCount = product.id % 2 === 0 ? '(1.2k)' : '(840)';

    return (
        <div className="relative group bg-white border border-gray-100 rounded-[12px] p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col  h-full">

            {/* Discount Badge */}
            <div className={`${microgrammaBold.className} absolute top-5 left-5 bg-[#FF2D2D] text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-10`}>
                -{discount}%
            </div>

            {/* Product Image */}
            <Link href={`/shop/${categorySlug}/${product.productId}`} className="relative w-full aspect-square bg-transparent flex items-center justify-center overflow-hidden mb-6 cursor-pointer">
                <Image
                    src={mainImage}
                    alt={product.productName}
                    fill
                    unoptimized
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                />
            </Link>

            {/* Product Title */}
            <Link href={`/shop/${categorySlug}/${product.productId}`}>
                <h3 className={`${microgrammaBold.className} text-[#0A3D31] text-[13px] sm:text-[14px] font-bold leading-[1.4] line-clamp-3 min-h-[60px] mb-4 hover:text-[#308E8C] transition-colors cursor-pointer`}>
                    {product.productName}
                </h3>
            </Link>

            {/* Rating & Review Section */}
            <div className="flex items-center gap-2 mb-3">
                <span className="text-yellow-400 text-lg">{"\u2605"}</span>
                <span className={`${michroma.className} text-yellow-400 text-[13px] font-bold`}>
                    {product.productRating}
                </span>
                <span className={`${michroma.className} text-gray-400 text-[10px]`}>
                    {reviewCount}
                </span>
            </div>

            {/* Price Section */}
            <div className="flex items-baseline gap-3 mb-4">
                <span className={`${microgrammaBold.className} text-[#0A3D31] text-lg sm:text-[20px] font-black`}>
                    Rs - {product.productCost}
                </span>
                <span className={`${michroma.className} text-gray-400 text-xs line-through`}>
                    {originalPrice}.00
                </span>
            </div>


            {/* Actions Row */}
            {/* <div className="flex items-center justify-between mt-auto gap-4"> */}
            {/* Wishlist Button (Left) */}
            {/* <button className="flex items-center visibility-hidden justify-center w-12 h-8 border border-[#308E8C]/30 hover:border-[#308E8C]/60 rounded-md transition-all bg-white text-[#308E8C] hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                </button> */}

            {/* Actions Row */}
            <div className="flex items-center justify-end mt-auto gap-4">
                {/* <button className="flex items-center justify-center w-12 h-8 border border-[#308E8C]/30 hover:border-[#308E8C]/60 rounded-md transition-all bg-white text-[#308E8C] hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                </button> */}

                {/* Add to Basket Button (Right) */}
                <button
                    onClick={handleAddToBasket}
                    disabled={addToCartMutation.isPending}
                    className="flex items-center justify-center w-12 h-8 bg-gradient-to-r from-[#308E8C] to-[#59D0B5] hover:opacity-95 rounded-md transition-all text-white shadow-sm disabled:opacity-50"
                >
                    {addToCartMutation.isPending ? (
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                            <path d="M27.4919 12.1016C27.9775 11.8645 28.5679 12.0567 28.8106 12.5309L31.6952 18.1659C33.4685 18.2989 34.5812 18.6386 35.2993 19.5061C35.8699 20.1955 36.0545 21.0531 35.9866 22.2402H12.0134C11.9455 21.0531 12.1302 20.1955 12.7008 19.5061C13.4187 18.6386 14.5315 18.2989 16.3047 18.1659L19.1893 12.5309C19.4321 12.0567 20.0225 11.8645 20.508 12.1016C20.9935 12.3387 21.1903 12.9153 20.9476 13.3895L18.5429 18.087C19.1761 18.0802 19.8671 18.0802 20.6214 18.0802H27.3786C28.1329 18.0802 28.8238 18.0802 29.457 18.087L27.0524 13.3895C26.8095 12.9153 27.0064 12.3387 27.4919 12.1016Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.933 27.3694C12.6617 26.1329 12.4295 25.0745 12.2646 24.1602H35.7355C35.5706 25.0745 35.3384 26.1328 35.0671 27.3692L34.5056 29.9294C33.8674 32.8382 33.5482 34.2926 32.4669 35.1464C31.3857 36.0002 29.8628 36.0002 26.817 36.0002H21.1831C18.1373 36.0002 16.6145 36.0002 15.5332 35.1464C14.4519 34.2926 14.1328 32.8382 13.4947 29.9294L12.933 27.3694ZM21.379 26.0802C20.8362 26.0802 20.3961 26.51 20.3961 27.0402C20.3961 27.5703 20.8362 28.0002 21.379 28.0002H26.621C27.1639 28.0002 27.6039 27.5703 27.6039 27.0402C27.6039 26.51 27.1639 26.0802 26.621 26.0802H21.379Z" fill="currentColor" />
                        </svg>
                    )}
                </button>
            </div>

        </div>
    )
}
