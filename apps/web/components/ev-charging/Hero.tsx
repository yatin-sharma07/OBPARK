'use client';

import { microgrammaBold } from '@/lib/fonts';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function Hero() {
    return (
        <section
            className="relative w-full h-full min-h-[calc(100vh-32px)] lg:min-h-0 flex flex-col justify-center bg-white overflow-hidden px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-20 sm:pt-24 lg:pt-32 pb-10 sm:pb-14 lg:pb-24"
        >
            <div
                className="relative z-10 w-full max-w-none mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-center lg:h-full"
            >
                {/* Left Content */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="w-full space-y-6 sm:space-y-8"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className={`
                            ${microgrammaBold.className}
                            text-[#0B402F]
                            font-bold
                            leading-tight
                            text-[34px]
                            sm:text-4xl
                            md:text-5xl
                            lg:text-[52px]
                            xl:text-[56px]
                            max-w-none
                        `}
                    >
                        Find EV Charging Stations Near You in India
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="
                            text-[#3E7071]
                            text-base
                            sm:text-lg
                            md:text-[18px]
                            leading-relaxed
                            w-full
                            max-w-2xl
                        "
                    >
                        Locate, compare and navigate to the best EV charging stations -
                        anytime, anywhere.
                    </motion.p>

                    {/* Search Box */}
                    <motion.div
                        variants={fadeInUp}
                        className="
                            w-full
                            max-w-none
                            bg-white
                            rounded-xl
                            shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                            border border-gray-100
                            flex
                            flex-col
                            sm:flex-row
                            sm:items-center
                            gap-3
                            sm:gap-0
                            p-3
                            sm:p-2
                        "
                    >
                        <div className="flex items-center flex-1 w-full">
                            <MapPin className="text-gray-400 ml-1 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />

                            <input
                                type="text"
                                placeholder="Enter Location or Area"
                                className="
                                    flex-1
                                    w-full
                                    py-3
                                    px-3
                                    sm:px-4
                                    outline-none
                                    text-gray-700
                                    bg-transparent
                                    placeholder:font-sans
                                    font-sans
                                    text-sm
                                    sm:text-base
                                "
                            />
                        </div>

                        <button
                            className="
                                w-full
                                sm:w-auto
                                bg-[#0B402F]
                                text-white
                                px-6
                                sm:px-8
                                py-3
                                rounded-xl
                                font-medium
                                hover:bg-[#083023]
                                transition-colors
                                whitespace-nowrap
                            "
                        >
                            Find Stations
                        </button>
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        variants={fadeInUp}
                        className="
                            w-full
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-y-4
                            gap-x-6
                            pt-2
                            sm:pt-4
                        "
                    >
                        <div className="flex items-center gap-2 text-sm sm:text-[15px] text-gray-600 font-medium">
                            <Image src={"/Images/ev-charging/header-icon-1.png"} alt='Icon' width={30} height={30} />
                            Verified Stations
                        </div>

                        <div className="flex items-center gap-2 text-sm sm:text-[15px] text-gray-600 font-medium">
                            <Image src={"/Images/ev-charging/header-icon-2.png"} alt='Icon' width={30} height={30} />
                            Real-time Availability
                        </div>

                        <div className="flex items-center gap-2 text-sm sm:text-[15px] text-gray-600 font-medium">
                            <Image src={"/Images/ev-charging/header-icon-4.png"} alt='Icon' width={30} height={30} />
                            Fast & Reliable
                        </div>

                        <div className="flex items-center gap-2 text-sm sm:text-[15px] text-gray-600 font-medium">
                            <Image src={"/Images/ev-charging/header-icon-3.png"} alt='Icon' width={30} height={30} />
                            All India Coverage
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 45 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-full lg:max-h-[600px] xl:max-h-[660px] mt-4 lg:mt-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#D3F5E7] to-teal-50 rounded-full blur-3xl opacity-60 -z-10" />

                    <div
                        className="
                            relative
                            w-full
                            h-full
                            overflow-hidden
                            rounded-2xl
                            sm:rounded-3xl
                            bg-[#E5F5EF]/50
                            border-[#59D0B5]
                        "
                    >
                        <Image
                            src="/Images/ev-charging/ev-hero.png"
                            alt="EV charging station"
                            fill
                            priority
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#E5F5EF]/40 to-transparent -z-10 hidden lg:block" />
        </section>
    );
}