'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';

const stats = [
    { title: '20+', desc: 'Insurance Partners' },
    { title: '5000+', desc: 'Cashless Garages' },
    { title: '1M+', desc: 'Happy Customers' },
    { title: '4.8/5', desc: 'Customer Rating', isStar: true },
];

const points = [
    '24x7 Claim Support',
    'Cashless Network Garages',
    'No Hidden Charges',
    'Trusted by 1M+ Customers',
];

export default function DriveWorryFree() {
    return (
        <section className="w-full bg-white px-4 py-8 sm:px-5 lg:px-5">
            <div className="relative mx-auto w-full max-w-none overflow-hidden rounded-[22px] shadow-xl">
                {/* Background Image */}
                <Image
                    src="/Images/car-insurance/worry-free.png"
                    alt="Drive worry free background"
                    fill
                    priority
                    className="object-fill object-center"
                />

                {/* Content */}
                <div className="relative z-10 flex min-h-[520px] w-full flex-col justify-between gap-8 px-5 py-8 sm:px-8 md:px-10 lg:min-h-[440px] lg:flex-row lg:items-center lg:px-10 xl:min-h-[470px] xl:px-12">
                    {/* Left Content */}
                    <div className="w-full max-w-[600px] text-white">
                        <motion.h2
                            initial={{ opacity: 0, y: -18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55 }}
                            className={`${microgrammaBold.className} mb-6 text-[28px] font-bold leading-tight sm:text-[34px] md:text-[40px] lg:text-[40px] xl:text-[40px]`}
                        >
                            Drive worry-free with the
                            <br className="hidden sm:block" />
                            right car insurance
                        </motion.h2>

                        <ul className="mb-8 space-y-4 text-sm font-semibold sm:text-base">
                            {points.map((point, index) => (
                                <motion.li
                                    key={point}
                                    initial={{ opacity: 0, x: -18 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="flex items-center gap-3"
                                >
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-black text-[#117265]">
                                        ✓
                                    </span>
                                    {point}
                                </motion.li>
                            ))}
                        </ul>

                        <motion.button
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                            className="flex h-[58px] w-full max-w-[280px] items-center justify-between rounded-lg bg-[#00574d] px-6 text-sm font-bold text-white shadow-[0_8px_22px_rgba(0,0,0,0.18)] transition hover:bg-[#06483f] sm:text-base"
                        >
                            Compare & Buy Now
                            <span className="text-2xl leading-none">→</span>
                        </motion.button>
                    </div>

                    {/* Right Stats */}
                    <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[230px] lg:grid-cols-1 lg:gap-4 xl:w-[250px]">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 18 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="flex min-h-[78px] flex-col justify-center rounded-xl bg-white/95 px-5 py-4 text-[#06483f] shadow-lg backdrop-blur-sm"
                            >
                                <div className={`flex items-center gap-2 text-[24px] font-black leading-none sm:text-[22px] lg:text-[25px] ${stat.isStar ? "text-[#18a98f]" : ""}`}>
                                    {stat.isStar && (
                                        <span className="text-[20px] text-[#18a98f]">★</span>
                                    )}
                                    {stat.title}
                                </div>

                                <div className="mt-1 text-[11px] font-semibold text-[#355b55] sm:text-xs">
                                    {stat.desc}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}