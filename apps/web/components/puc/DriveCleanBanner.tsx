'use client';

import { motion } from 'framer-motion';
import { Leaf, Zap, ShieldCheck, Activity } from 'lucide-react';

export default function DriveCleanBanner() {
    return (
        <section className="w-full py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-[#074c43] overflow-hidden shadow-[0_8px_30px_rgba(7,76,67,0.12)] border border-gray-100"
            >
                {/* Mobile: text stacked above image */}
                <div className="block lg:hidden w-full px-6 py-8 sm:px-10 sm:py-10 text-white">
                    <h2 className="text-xl sm:text-2xl font-extrabold mb-3 leading-tight">
                        Drive Clean.<br /> Stay Compliant.
                    </h2>
                    <p className="text-xs sm:text-sm text-white/90 mb-6 max-w-md font-medium leading-relaxed">
                        A valid PUC certificate ensures better performance, more mileage, and a healthier tomorrow.
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs sm:text-sm font-semibold max-w-xs">
                        <div className="flex items-center gap-2">
                            <Leaf className="w-4 h-4 text-[#3fc197] flex-shrink-0" />
                            <span>Better Mileage</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-[#3fc197] flex-shrink-0" />
                            <span>Smoother Perf.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-[#3fc197] flex-shrink-0" />
                            <span>Less Pollution</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#3fc197] flex-shrink-0" />
                            <span>Longer Engine Life</span>
                        </div>
                    </div>
                </div>

                {/* Mobile: banner image below text */}
                <img
                    src="/Images/puc/drive-clean.png"
                    alt="Drive Clean. Stay Compliant."
                    className="w-full h-auto object-contain block lg:hidden"
                />

                {/* Desktop: image with text overlay */}
                <div className="hidden lg:relative lg:block">
                    <img
                        src="/Images/puc/drive-clean.png"
                        alt="Drive Clean. Stay Compliant."
                        className="w-full h-auto object-contain block"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-12 xl:p-16 text-white z-10">
                        <h2 className="text-[28px] xl:text-[32px] font-extrabold mb-3 leading-tight">
                            Drive Clean.<br /> Stay Compliant.
                        </h2>
                        <p className="text-[15px] text-white/90 mb-6 max-w-md font-medium leading-relaxed">
                            A valid PUC certificate ensures better performance, more mileage, and a healthier tomorrow.
                        </p>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-semibold max-w-sm">
                            <div className="flex items-center gap-2">
                                <Leaf className="w-4 h-4 text-[#3fc197] flex-shrink-0" />
                                <span>Better Mileage</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-[#3fc197] flex-shrink-0" />
                                <span>Smoother Perf.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-[#3fc197] flex-shrink-0" />
                                <span>Less Pollution</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-[#3fc197] flex-shrink-0" />
                                <span>Longer Engine Life</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
