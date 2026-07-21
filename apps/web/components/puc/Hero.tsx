'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { microgrammaBold } from '@/lib/fonts';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
    const [manualVrn, setManualVrn] = useState('');
    const router = useRouter();

    const handleCheck = () => {
        if (manualVrn.trim()) {
            router.push(`/payment?type=puc&amount=500&vrn=${manualVrn.trim()}`);
        }
    };

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
                    <div className="mb-8 bg-white p-2 sm:p-2.5 rounded-2xl border border-gray-200/80 shadow-[0_4px_25px_rgba(7,65,57,0.05)] flex items-center justify-between gap-3 w-full max-w-[540px]">
                        <div className="flex items-center flex-1 gap-2 sm:gap-3 min-w-0">
                            {/* IND Plate */}
                            <div className="bg-[#1c2024] text-white w-12 h-10 sm:w-14 sm:h-12 rounded-xl flex flex-col items-center justify-center font-bold shrink-0 select-none">
                                <span className="text-base sm:text-lg leading-none">🇮🇳</span>
                                <span className="text-[8px] sm:text-[10px] tracking-widest mt-0.5 leading-none font-sans font-extrabold text-[#D1D5DB]">IND</span>
                            </div>
                            {/* Input */}
                            <input
                                type="text"
                                placeholder="VEHICLE NUMBER"
                                value={manualVrn}
                                onChange={(e) => setManualVrn(e.target.value.toUpperCase())}
                                className="w-full bg-transparent outline-none border-0 text-[#074c43] placeholder:text-[#a0aaa7] font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider"
                                style={{ fontFamily: 'var(--font-michroma)' }}
                            />
                        </div>
                        {/* Button */}
                        <button
                            onClick={handleCheck}
                            disabled={!manualVrn.trim()}
                            className="bg-[#074139] hover:bg-[#052e28] text-white shrink-0 font-bold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl text-[10px] sm:text-xs md:text-sm h-auto flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-[1.02] shadow-[0_4px_12px_rgba(7,65,57,0.15)] disabled:opacity-50 disabled:pointer-events-none"
                            style={{ fontFamily: 'var(--font-michroma)' }}
                        >
                            <span>Check Details</span>
                            <span className="text-xs sm:text-sm md:text-base">→</span>
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
