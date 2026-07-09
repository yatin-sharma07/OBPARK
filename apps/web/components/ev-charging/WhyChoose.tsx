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

export default function WhyChoose() {
    const features = [
        {
            icon: '/Images/ev-charging/header-icon-1.png',
            title: 'Find Stations Instantly',
            description: 'Locate nearby EV charging stations in real-time with accurate details.',
        },
        {
            icon: '/Images/ev-charging/header-icon-3.png',
            title: 'Real-time Availability',
            description: 'Check live availability of chargers before you go.',
        },
        {
            icon: '/Images/ev-charging/why-choose-1.png',
            title: 'Trusted & Verified',
            description: 'All stations are verified for reliability, safety and ease of use.',
        },
    ];

    return (
        <section className="w-full px-4 py-16">
            <div className="mx-auto max-w-full text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`${microgrammaBold.className} mb-12 text-2xl font-bold text-[#0B402F] sm:text-2xl md:text-[34px] lg:text-[36px]`}
                >
                    Why choose OBPARK EV
                </motion.h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-3"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            variants={fadeInUp}
                            key={index}
                            className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={34}
                                    height={34}
                                    className="h-[34px] w-[34px] object-contain"
                                />
                            </div>

                            <h3 className={`${microgrammaBold.className} mb-4 text-[18px] font-bold text-[#0B402F] sm:text-[20px] md:text-[22px] lg:text-[24px]`}>
                                {feature.title}
                            </h3>

                            <p className="text-center text-base text-[#3E7071] sm:text-lg md:text-[16px]">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}