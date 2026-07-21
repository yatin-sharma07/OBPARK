"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { microgrammaBold } from "@/lib/fonts";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
    const [manualVrn, setManualVrn] = useState("");
    const router = useRouter();

    const handleCheck = () => {
        if (manualVrn.trim()) {
            router.push(`/payment?type=challan&amount=500&vrn=${manualVrn.trim()}`);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-full min-h-[calc(100vh-32px)] lg:min-h-0 flex flex-col justify-center items-center px-4 pb-8 pt-20 sm:pt-24 lg:pt-32 text-center sm:px-6 md:pb-12 lg:mt-0"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`max-w-[1000px] text-[24px] leading-[1.15] tracking-[-0.03em] text-[#074c43] sm:text-[34px] md:text-[48px] lg:text-[64px] ${microgrammaBold.className}`}
            >
                E-Challan: Check &amp; Pay Traffic E-Challan Online by Vehicle Number
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 bg-white p-2 sm:p-2.5 rounded-2xl border border-gray-200/80 shadow-[0_4px_25px_rgba(7,65,57,0.05)] flex items-center justify-between gap-3 w-full max-w-[580px] mx-auto"
            >
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