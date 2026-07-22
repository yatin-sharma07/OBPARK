'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { microgrammaBold } from '@/lib/fonts';
import {
    Zap,
    ShieldCheck,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
    const [manualVrn, setManualVrn] = useState('');
    const router = useRouter();

    const handleCheck = () => {
        if (manualVrn.trim()) {
            router.push(`/payment?type=owner&amount=500&vrn=${manualVrn.trim()}`);
        }
    };

    return (
        <section className="relative w-full h-full overflow-hidden">
            {/* Background image fills the hero area */}
            <Image
                src="/Images/vehicle-owner/hero-banner.png"
                alt="Vehicle Owner Details Background"
                fill
                priority
                unoptimized={true}
                className="object-cover"
                style={{ objectPosition: 'center 35%' }}
            />

            {/* Text overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 px-4 sm:px-6">
                <div className="flex flex-col items-center text-center max-w-4xl w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`${microgrammaBold.className} text-[22px] sm:text-[34px] md:text-[46px] lg:text-[54px] xl:text-[60px] leading-[1.1] text-[#074c43]`}
                    >
                        Vehicle Owner Details by <br />
                        <span className="bg-gradient-to-r from-[#1A817F] to-[#59D0B5] bg-clip-text text-transparent">Number Plate in India</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-2 sm:mt-4 text-[#4a5f5a] text-[11px] sm:text-[15px] md:text-[17px] max-w-2xl font-medium"
                    >
                        Get instant access to <span className="text-[#3fc197] font-bold">verified</span> vehicle owner details<br className="hidden sm:block"/> in just a few seconds.
                    </motion.p>

                    {/* Search Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-3 sm:mt-6 md:mt-8 w-full max-w-[580px] bg-white rounded-xl shadow-[0_8px_30px_rgba(7,76,67,0.1)] p-1.5 sm:p-2 flex items-stretch border border-gray-100 gap-1.5 sm:gap-0"
                    >
                        {/* IND Badge */}
                        <div className="flex items-center justify-center bg-[#1e2329] rounded-lg px-2.5 sm:px-4 h-9 sm:h-[52px] w-[52px] sm:w-[66px] flex-shrink-0">
                            <div className="flex flex-col items-center justify-center">
                                <div className="text-sm sm:text-lg leading-none">🇮🇳</div>
                                <span className="text-white text-[7px] sm:text-[9px] font-bold mt-0.5">IND</span>
                            </div>
                        </div>

                        {/* Input */}
                        <input
                            type="text"
                            placeholder="VEHICLE NUMBER"
                            value={manualVrn}
                            onChange={(e) => setManualVrn(e.target.value.toUpperCase())}
                            className="flex-1 px-2 sm:px-4 py-2 text-[10px] sm:text-xs md:text-sm outline-none text-[#074c43] placeholder-[#8ca49d] uppercase font-bold tracking-wider bg-transparent"
                            style={{ fontFamily: 'var(--font-michroma)' }}
                        />

                        {/* Submit Button */}
                        <button 
                            onClick={handleCheck}
                            disabled={!manualVrn.trim()}
                            className="bg-[#074c43] hover:bg-[#0a5c52] transition-colors text-white px-4 sm:px-7 h-9 sm:h-[52px] rounded-lg font-bold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-xs sm:text-sm md:text-base flex-shrink-0 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Check Details <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-2 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-5 bg-white/80 backdrop-blur-md px-3 sm:px-7 py-2 sm:py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                    >
                        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm font-semibold text-[#074c43]">
                            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3fc197]" />
                            Instant Results
                        </div>
                        <div className="hidden sm:block w-[1px] h-4 bg-gray-300"></div>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm font-semibold text-[#074c43]">
                            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3fc197]" />
                            100% Secure
                        </div>
                        <div className="hidden sm:block w-[1px] h-4 bg-gray-300"></div>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm font-semibold text-[#074c43]">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3fc197]" />
                            Verified Sources
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
