'use client';

import { microgrammaBold } from '@/lib/fonts';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function WhyCheck() {
    const features = [
        {
            icon: '/Images/vehicle-owner/header1.png',
            text: 'Get instant, verified vehicle owner details online',
        },
        {
            icon: '/Images/vehicle-owner/header2.png',
            text: 'Check complete vehicle info in seconds',
        },
        {
            icon: '/Images/vehicle-owner/header3.png',
            text: 'Quick 2-step lookup for fast and reliable results',
        },
    ];

    return (
        <section className="w-full py-12 sm:py-14 md:py-16">
            <div className="mx-auto max-w-full text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`${microgrammaBold.className} mb-8 sm:mb-10 md:mb-12 text-xl font-bold text-[#0B402F] sm:text-[28px] md:text-[34px] lg:text-[36px]`}
                >
                    Why check vehicle owner details online
                </motion.h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-3"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            variants={fadeInUp}
                            key={index}
                            className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 py-8 sm:py-12 shadow-[0_12px_30px_rgba(7,76,67,0.08)] transition-shadow hover:shadow-[0_12px_30px_rgba(7,76,67,0.12)]"
                        >
                            <div className="mb-5 flex items-center justify-center">
                                <Image
                                    src={feature.icon}
                                    alt="Feature Icon"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>

                            <p className="text-center text-sm font-medium text-[#3E7071] sm:text-base md:text-[16px]">
                                {feature.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
