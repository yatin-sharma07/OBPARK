"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { microgrammaBold } from "@/lib/fonts";

export default function HeroSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center px-4 pb-8 pt-4 text-center sm:px-6 md:pb-12 mt-20 lg:mt-20"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`max-w-[1000px] text-[24px] leading-[1.15] tracking-[-0.03em] text-[#074c43] sm:text-[34px] md:text-[48px] lg:text-[64px] lg:mt-20 ${microgrammaBold.className}`}
            >
                E-Challan: Check &amp; Pay Traffic E-Challan Online by Vehicle Number
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex w-full max-w-[700px] flex-col items-stretch overflow-hidden rounded-[10px] bg-white sm:flex-row sm:items-center sm:px-5 sm:py-5 lg:h-[120px]"
            >
                {/* Icon — hidden on mobile to save space */}
                <div className="hidden sm:flex h-[80px] w-[80px] shrink-0 items-center justify-center">
                    <Image
                        src="/Images/e-challan/search-icon.png"
                        alt="Search Icon"
                        width={80}
                        height={80}
                        className="h-[60px] w-[60px] object-contain"
                    />
                </div>

                <input
                    placeholder="Enter Vehicle Number"
                    className="flex-1 px-5 py-4 text-[14px] outline-none placeholder:text-[#a0aaa7] sm:text-[16px] sm:px-6 sm:py-0 border-b border-[#e8eeee] sm:border-b-0"
                />

                <button className="w-full sm:w-auto py-4 sm:py-0 sm:h-[70px] rounded-b-[10px] sm:rounded-b-none sm:rounded-r-md bg-[#064c43] px-6 text-[14px] font-bold text-white transition-opacity hover:opacity-90 sm:px-8 sm:text-[14px]">
                    Check Challan
                </button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative mt-8 h-[160px] w-full max-w-[800px] sm:h-[220px] md:h-[400px] lg:h-[480px]"
            >
                <Image
                    src="/Images/e-challan/HeroLogo.png"
                    alt="Cars"
                    fill
                    priority
                    className="object-contain"
                />
            </motion.div>
        </motion.section>
    );
}