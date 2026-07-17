'use client';

import { motion } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';
import {
    CarFront,
    FileText,
    ArrowRight,
    Search,
    Shield,
    Gavel
} from 'lucide-react';
import Link from 'next/link';

export default function ExploreMenu() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full p-6 sm:p-8 flex flex-col items-center mt-6"
        >
            <h3 className={`${microgrammaBold.className} text-lg sm:text-xl md:text-[22px] text-[#074c43] mb-6 text-center`}>
                Explore Everything About Your Vehicle
            </h3>

            <div className="w-full pb-4">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-2">
                    {/* Explore Pills */}
                    <Link href="#" className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl border border-gray-200 hover:border-[#3fc197] hover:shadow-md transition-all group bg-white">
                        <span className="font-extrabold text-[#ff8b49] text-xs sm:text-sm tracking-tighter">FAST<span className="text-[#3fc197]">ag</span></span>
                        <span className="font-semibold text-[#074c43] text-xs sm:text-sm">Fastag</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#3fc197] transition-colors" />
                    </Link>

                    <Link href="#" className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl border border-gray-200 hover:border-[#3fc197] hover:shadow-md transition-all group bg-white">
                        <CarFront className="w-4 h-4 sm:w-5 sm:h-5 text-[#074c43] group-hover:text-[#3fc197] transition-colors" />
                        <span className="font-semibold text-[#074c43] text-xs sm:text-sm">New cars</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#3fc197] transition-colors" />
                    </Link>

                    <Link href="#" className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl border border-gray-200 hover:border-[#3fc197] hover:shadow-md transition-all group bg-white">
                        <Gavel className="w-4 h-4 sm:w-5 sm:h-5 text-[#074c43] group-hover:text-[#3fc197] transition-colors" />
                        <span className="font-semibold text-[#074c43] text-xs sm:text-sm">Check Challan</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#3fc197] transition-colors" />
                    </Link>

                    <Link href="#" className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl border border-gray-200 hover:border-[#3fc197] hover:shadow-md transition-all group bg-white">
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#074c43] group-hover:text-[#3fc197] transition-colors" />
                        <span className="font-semibold text-[#074c43] text-xs sm:text-sm">Puc Certificate</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#3fc197] transition-colors" />
                    </Link>

                    <Link href="#" className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl border border-[#3fc197] bg-[#f2fdf9] shadow-sm transition-all group">
                        <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#3fc197]" />
                        <span className="font-semibold text-[#074c43] text-xs sm:text-sm">Vehicle owner details</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#3fc197]" />
                    </Link>

                    <Link href="#" className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl border border-gray-200 hover:border-[#3fc197] hover:shadow-md transition-all group bg-white">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#074c43] group-hover:text-[#3fc197] transition-colors" />
                        <span className="font-semibold text-[#074c43] text-xs sm:text-sm">Car Insurance</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#3fc197] transition-colors" />
                    </Link>
                </div>
            </div>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </motion.div>
    );
}
