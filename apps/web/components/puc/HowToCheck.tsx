'use client';

import { microgrammaBold } from '@/lib/fonts';
import { motion } from 'framer-motion';
import { ClipboardList, ShieldCheck, FileCheck, Download, ArrowRight } from 'lucide-react';

const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const steps = [
    {
        number: '1',
        title: 'Enter Vehicle Number',
        description: 'Enter your vehicle number in the search box.',
        icon: ClipboardList,
        filled: true,
        strokeWidth: 2,
    },
    {
        number: '2',
        title: 'Verify Details',
        description: 'We fetch data from official VAHAN database.',
        icon: ShieldCheck,
        filled: true,
        strokeWidth: 2,
    },
    {
        number: '3',
        title: 'Get PUC Status',
        description: 'View your PUC certificate status instantly.',
        icon: FileCheck,
        filled: true,
        strokeWidth: 2,
    },
    {
        number: '4',
        title: 'Download Certificate',
        description: 'Download or save your PUC certificate for reference.',
        icon: Download,
        filled: false,
        strokeWidth: 2.8,
    },
];

export default function HowToCheck() {
    return (
        <section className="w-full py-12 sm:py-14 md:py-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${microgrammaBold.className} mb-10 sm:mb-12 md:mb-16 text-center text-xl font-bold text-[#074c43] sm:text-[24px] md:text-[28px] lg:text-[32px]`}
            >
                How to check PUC certificate online
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 relative">
                {steps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                        <motion.div
                            key={step.number}
                            variants={slideInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center text-center relative z-10"
                        >
                            {/* Step Circle with Icon */}
                            <div className="relative mb-5 sm:mb-6">
                                <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-[#074c43] text-white flex items-center justify-center font-bold text-xs shadow-sm z-10">
                                    {step.number}
                                </div>
                                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#eefaf6] flex items-center justify-center text-[#074c43]" style={{ width: 72, height: 72 }}>
                                    <Icon 
                                        className={`w-7 h-7 sm:w-8 sm:h-8 ${step.filled ? 'fill-[#074c43]' : ''}`} 
                                        strokeWidth={step.strokeWidth}
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <h3 className="text-base font-bold text-[#074c43] mb-2">{step.title}</h3>
                            <p className="text-xs sm:text-sm text-[#4a5f5a] font-medium max-w-[200px] leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connecting Arrow */}
                            {idx < steps.length - 1 && (
                                <ArrowRight className="hidden lg:block absolute top-10 left-[calc(100%+16px)] -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
