'use client';

import { motion } from 'framer-motion';
import { Leaf, Zap, ShieldCheck, Activity } from 'lucide-react';

export default function DriveCleanBanner() {
    return (
        <section className="w-full py-8 px-4 sm:px-8 md:px-12 xl:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[1300px] mx-auto bg-[#eefaf6] lg:bg-transparent overflow-hidden rounded-[28px] shadow-[0_8px_30px_rgba(7,76,67,0.08)] border border-gray-100"
            >
                {/* Mobile: text stacked above image */}
                <div className="block lg:hidden w-full px-6 py-8 sm:px-10 sm:py-10 text-[#074c43]">
                    <h2 className="text-xl sm:text-2xl font-extrabold mb-3 leading-tight text-[#074c43]">
                        Drive Clean.<br /> Stay Compliant.
                    </h2>
                    <p className="text-xs sm:text-sm text-[#074c43]/85 mb-6 max-w-md font-medium leading-relaxed">
                        A valid PUC certificate ensures better performance, more mileage, and a healthier tomorrow.
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs sm:text-sm font-semibold max-w-xs text-[#074c43]">
                        <div className="flex items-center gap-2">
                            <Leaf className="w-4 h-4 text-[#167D7F] flex-shrink-0" />
                            <span>Better Mileage</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-[#167D7F] flex-shrink-0" />
                            <span>Smoother Perf.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-[#167D7F] flex-shrink-0" />
                            <span>Less Pollution</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#167D7F] flex-shrink-0" />
                            <span>Longer Engine Life</span>
                        </div>
                    </div>
                </div>

                {/* Mobile: banner image below text */}
                <img
                    src="/Images/puc/drive-clean.jpg"
                    alt="Drive Clean. Stay Compliant."
                    className="w-full h-auto object-contain block lg:hidden"
                />

                {/* Desktop: image with text overlay */}
                <div className="hidden lg:relative lg:block">
                    <img
                        src="/Images/puc/drive-clean.jpg"
                        alt="Drive Clean. Stay Compliant."
                        className="w-full h-auto object-contain block"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-12 xl:p-16 text-[#074c43] z-10">
                        <h2 className="text-[28px] xl:text-[32px] font-extrabold mb-3 leading-tight text-[#074c43]">
                            Drive Clean.<br /> Stay Compliant.
                        </h2>
                        <p className="text-[15px] text-[#074c43]/85 mb-6 max-w-md font-medium leading-relaxed">
                            A valid PUC certificate ensures better performance, more mileage, and a healthier tomorrow.
                        </p>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-semibold max-w-sm text-[#074c43]">
                            <div className="flex items-center gap-2">
                                <Leaf className="w-4 h-4 text-[#167D7F] flex-shrink-0" />
                                <span>Better Mileage</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-[#167D7F] flex-shrink-0" />
                                <span>Smoother Perf.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-[#167D7F] flex-shrink-0" />
                                <span>Less Pollution</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-[#167D7F] flex-shrink-0" />
                                <span>Longer Engine Life</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
