import { michroma, microgrammaBold } from "@/lib/fonts";
import Link from "next/link";

interface HeroProps {
    category: string;
}
// 1. Car Accessories - car-accessories											
// 2. Car Care detailing - car-care-detailing												
// 3. Electronics smart gagets - electronics-and-smart-gadgets												
// 4. Emergency & Safety - emergency-and-safety													
// 5. Travel & Road Safety - travel-and-road-safety												
// 6. Family & Pet Care Products - family-and-pet-care-products
// 7. EV PRODUCTS - ev-products
// 8. Bike Shop - bike-shop													
// 9. Guest Gifting - guest-gifting

const categoryHero = [
    {
        name: "Car Accessories",
        slug: "car-accessories",
        image: "/Images/category/car-accessories.png",
        description: "Upgrade your ride with the best car accessories. Comfort, style, protection & convenience everything your car deserves.",
    },
    {
        name: "Car Care Detailing",
        slug: "car-care-detailing",
        image: "/Images/category/car-care-detailing.png",
        description: "Premium car care & detailing products for a showroom shine,  Every day, Clean, Protect, Enhance.",
    },
    {
        name: "Electronics Smart Gagets",
        slug: "electronics-and-smart-gadgets",
        image: "/Images/category/electronics-and-smart-gadgets.png",
        description: "Upgrade your drive with intelligent electronic gadgets. Smarter, safer, and more connected every mile.",
    },
    {
        name: "Emergency & Safety",
        slug: "emergency-and-safety",
        image: "/Images/category/emergency-and-safety.png",
        description: "Be prepared for anything on the road. Premium safety & emergency essentials for you and your car.",
    },
    {
        name: "Travel & Road Safety",
        slug: "travel-and-road-safety",
        image: "/Images/category/travel-and-road-safety.png",
        description: "Make every journey safer, smarter & more comfortable. Essential travel and road safety products for every drive.",
    },
    {
        name: "Family & Pet Care Products",
        slug: "family-and-pet-care-products",
        image: "/Images/category/family-and-pet-care-products.png",
        description: "Care for your family. Care for your Pets. Premium family, pet care essentials for every happy journey.",
    },
    {
        name: "EV PRODUCTS",
        slug: "ev-products",
        image: "/Images/category/ev-products.png",
        description: "Power up your EV experience. Premium EV accessories & charging solutions for a smarter drive.",
    },
    {
        name: "Bike Shop",
        slug: "bike-shop",
        image: "/Images/category/bike-shop.png",
        description: "Gear up for every ride. Premium biking accessories for safety, comfort & performance",
    },
    {
        name: "Guest Gifting",
        slug: "guest-gifting",
        image: "/Images/category/guest-gifting.png",
        description: "Thoughtful gifts for everyone occasion. Premium picks that leave a lasting impression.",
    }
]

export default function Hero({ category }: HeroProps) {
    const hero = categoryHero.find((item) => item.slug === category);

    const handleShopNow = () => {
        const element = document.getElementById("products-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Hero
    // Hero Container with Background Image
    return (
        <div className="w-full px-3 sm:px-5 pt-10">
            <div
                className="w-full h-[700px] bg-[#D9D9D9] bg-cover bg-center bg-no-repeat pt-24 pb-16 px-4 sm:px-8 md:px-12 rounded-[48px] relative overflow-hidden"
                style={{ backgroundImage: `url(${hero?.image})` }}
            >
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[460px]">

                    {/* Left Column: Text, Search & Buttons */}
                    <div className="text-center lg:text-left z-10 flex flex-col items-center lg:items-start">
                        <p className={`${microgrammaBold.className} text-[#59D0B5] uppercase tracking-[3px] text-xs sm:text-sm font-bold mb-2`}>
                            OBPARK SHOP
                        </p>
                        <h1 className={`${microgrammaBold.className} text-white font-bold text-3xl sm:text-4xl md:text-[44px] leading-[1.2]`}>
                            {hero?.name}
                        </h1>
                        <p className={`${michroma.className} text-white/80 text-xs sm:text-[13px] leading-[1.8] mt-4 max-w-[500px]`}>
                            {hero?.description}
                        </p>

                        {/* Search Input Bar */}
                        <div className="relative mt-8 max-w-md w-full">
                            <input
                                type="text"
                                placeholder={`Search for ${hero?.name || "Car Accessories"}`}
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
                            <button
                                onClick={handleShopNow}
                                className={`${microgrammaBold.className} bg-gradient-to-r from-[#308E8C] to-[#59D0B5] hover:opacity-95 text-white font-bold text-[10px] tracking-wider rounded-full px-6 py-3.5 flex items-center gap-1.5 transition-all`}
                            >
                                SHOP NOW {"→"}
                            </button>
                            <Link href="/shop">
                                <button className={`${microgrammaBold.className} bg-[#0A3D31]/40 hover:bg-[#0A3D31]/60 border border-[#308E8C]/50 text-white font-bold text-[10px] tracking-wider rounded-full px-6 py-3.5 flex items-center gap-1.5 transition-all`}>
                                    EXPLORE CATEGORIES {"→"}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:block" />
                </div>
            </div>
        </div>
    );
}