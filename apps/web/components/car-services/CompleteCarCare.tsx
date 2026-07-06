'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';

const points = [
    'Expert Technicians',
    'Affordable Prices',
    'Genuine Parts',
    'Service Warranty',
    'On-time Service',
    'Doorstep Pick-up & Drop',
];

export default function CompleteCarCare() {
    return (
        <section className="w-full bg-white px-4 py-8 sm:px-5 lg:px-5">
            <div className="relative mx-auto w-full max-w-none overflow-hidden rounded-[22px] shadow-xl">
                {/* Background Image */}
                <Image
                    src="/Images/car-service/care-bg.png"
                    alt="Complete car care background"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Content */}
                <div className="relative z-10 flex min-h-[360px] w-full items-center px-5 py-8 sm:px-8 md:px-10 lg:min-h-[390px] lg:px-12 xl:min-h-[410px]">
                    {/* Left Content */}
                    <div className="w-full max-w-[560px] text-white">
                        <motion.h2
                            initial={{ opacity: 0, y: -18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55 }}
                            className={`${microgrammaBold.className} mb-4 text-[28px] font-bold leading-tight drop-shadow-sm sm:text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px]`}
                        >
                            Complete Car Care
                            <br />
                            Under One Roof
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.1 }}
                            className="mb-6 max-w-[430px] text-sm font-medium leading-relaxed text-white/90 sm:text-sm"
                        >
                            From routine maintenance to complete car care,
                            <br className="hidden sm:block" />
                            we&apos;ve got you covered.
                        </motion.p>

                        {/* Left Tags */}
                        <div className="mb-8 grid max-w-[520px] grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                            {points.map((point, index) => (
                                <motion.div
                                    key={point}
                                    initial={{ opacity: 0, x: -18 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.06 }}
                                    className="flex items-center gap-3 text-sm font-semibold text-white sm:text-[15px]"
                                >
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-black text-[#117265]">
                                        ✓
                                    </span>
                                    <span>{point}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                            className="flex h-[56px] w-full max-w-[280px] items-center justify-between rounded-lg bg-[#00574d] px-6 text-sm font-bold text-white shadow-[0_8px_22px_rgba(0,0,0,0.22)] transition hover:bg-[#06483f] sm:text-sm whitespace-nowrap"
                        >
                            Book Your Service Now
                            <span className="text-xl leading-none ml-2">→</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}