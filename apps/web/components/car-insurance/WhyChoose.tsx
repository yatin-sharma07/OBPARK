'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';

const features = [
    {
        title: 'Compare Top Insurers',
        desc: 'Compare plans from leading insurance companies.',
        icon: '/Images/car-insurance/why-insurance-1.png',
    },
    {
        title: 'Instant Policy',
        desc: 'Get your policy instantly in just 2 minutes.',
        icon: '/Images/car-insurance/why-insurance-2.png',
    },
    {
        title: 'Best Prices Guaranteed',
        desc: 'Save up to 85% on your car insurance premium.',
        icon: '/Images/car-insurance/why-insurance-3.png',
    },
    {
        title: 'Trusted & Secure',
        desc: 'Your data is safe with bank-level security.',
        icon: '/Images/car-insurance/why-insurance-4.png',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function WhyChoose() {
    return (
        <section className="w-full px-4 py-14 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="mx-auto w-full max-w-none">
                <motion.h2
                    initial={{ opacity: 0, y: -18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className={`${microgrammaBold.className} mb-9 text-center text-[24px] font-bold leading-tight text-[#06483f] sm:text-[28px] md:text-[32px] lg:text-[36px]`}
                >
                    Why buy car insurance with OBPARK Insure?
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex min-h-[220px] w-full flex-col items-center justify-center rounded-[20px] border border-[#dfe9e6] bg-white px-5 py-8 text-center shadow-[0_0_20px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)] sm:min-h-[240px] lg:min-h-[260px]"
                        >
                            <div className="mb-6 flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#dff5f0] sm:h-[84px] sm:w-[84px]">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={46}
                                    height={46}
                                    className="h-[46px] w-[46px] object-contain"
                                />
                            </div>

                            <h3 className={`mb-3 text-[18px] font-bold leading-tight text-[#06483f] sm:text-[19px] lg:text-[17px] whitespace-nowrap ${microgrammaBold.className}`}>
                                {feature.title}
                            </h3>

                            <p className="max-w-[260px] text-[14px] font-medium leading-[1.7] text-[#4f6964] sm:text-[13px] ">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}