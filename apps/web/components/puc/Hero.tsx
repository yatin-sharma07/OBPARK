'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { microgrammaBold } from '@/lib/fonts';
import {
    Zap,
    ShieldCheck,
    Database,
    ArrowRight,
    Leaf
} from 'lucide-react';

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function Hero() {
    return (
        <section className="relative w-full h-full min-h-[calc(100vh-32px)] lg:min-h-0 flex flex-col justify-center overflow-hidden px-4 py-8 sm:px-6 md:px-10 lg:px-12 xl:px-14">
            {/* Background Image - Desktop */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Images/puc/hero-banner.png"
                    alt="PUC Certificate Background"
                    fill
                    priority
                    unoptimized={true}
                    className="object-cover object-right"
                />
                {/* Overlay for better text readability on smaller screens */}
                <div className="absolute inset-0 bg-white/60 lg:bg-transparent z-0 pointer-events-none" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[540px] w-full max-w-none flex-col items-center gap-10 lg:h-full lg:min-h-0 lg:flex-row lg:gap-0">
                {/* Left Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariants}
                    className="relative z-10 flex w-full flex-col justify-center pt-4 lg:w-[55%] text-left items-start"
                >
                    {/* Drive Clean Pill */}
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#b2e5d7] bg-[#e8faf4] text-[#074c43] text-xs sm:text-sm font-semibold mb-6">
                        <Leaf className="w-4 h-4 text-[#3fc197]" />
                        <span>Drive Clean. Drive Legal.</span>
                    </div>

                    <h1
                        className={`${microgrammaBold.className} mb-4 text-[30px] font-bold leading-[1.12] text-[#074c43] sm:text-[38px] md:text-[46px] lg:text-[50px] xl:text-[54px]`}
                    >
                        Check Pollution <br />
                        Under Control (PUC) <br />
                        Certificate Online
                    </h1>

                    <p className="mb-8 text-sm sm:text-base md:text-[17px] text-[#4a5f5a] font-medium max-w-xl">
                        Verify your vehicle's PUC certificate status instantly and stay compliant with environmental norms.
                    </p>

                    {/* Search Input Box */}
                    <div className="mb-8 flex w-full max-w-[540px] items-center rounded-xl border border-[#e4ece9] bg-white p-1.5 shadow-[0_8px_28px_rgba(0,0,0,0.06)]">
                        {/* IND Badge */}
                        <div className="flex items-center justify-center bg-[#1e2329] rounded-lg px-3 py-2 sm:px-4 sm:py-3 h-12 w-14 sm:w-16">
                            <div className="flex flex-col items-center justify-center">
                                <div className="text-[14px] sm:text-[16px] leading-none tracking-tighter">🇮🇳</div>
                                <span className="text-white text-[8px] sm:text-[9px] font-bold mt-1">IND</span>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Enter Vehicle Number"
                                className="h-[52px] w-full bg-transparent pl-4 pr-3 text-sm sm:text-base font-bold text-[#0b4038] outline-none placeholder:text-[#7f918c] uppercase tracking-wider"
                            />
                        </div>

                        {/* Submit Button */}
                        <button className="h-[46px] shrink-0 rounded-lg bg-[#074c43] hover:bg-[#0a5c52] transition-colors px-4 sm:px-6 text-xs sm:text-sm font-bold text-white shadow-[0_8px_18px_rgba(0,87,77,0.22)] flex items-center justify-center gap-1.5">
                            Check PUC Status <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                        <div className="flex items-center gap-2 bg-[#f4faf8] border border-[#e2f2ee] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#074c43]">
                            <Zap className="w-4 h-4 text-[#3fc197]" />
                            <span>Instant Results</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#f4faf8] border border-[#e2f2ee] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#074c43]">
                            <ShieldCheck className="w-4 h-4 text-[#3fc197]" />
                            <span>100% Secure</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#f4faf8] border border-[#e2f2ee] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#074c43]">
                            <Database className="w-4 h-4 text-[#3fc197]" />
                            <span>Government Data</span>
                        </div>
                    </div>
                </motion.div>

                {/* Empty block on the right to offset layout */}
                <div className="hidden lg:block lg:w-[45%]" />
            </div>
        </section>
    );
}
