'use client';

import { microgrammaBold } from '@/lib/fonts';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export default function ForEveryNeed() {
    const needs = [
        {
            icon: '/Images/ev-charging/need-1.png',
            title: 'Malls & Retail',
            description: 'Charge while you shop and relax.',
        },
        {
            icon: '/Images/ev-charging/need-2.png',
            title: 'Corporate Offices',
            description: 'Work while your EV charges.',
        },
        {
            icon: '/Images/ev-charging/need-3.png',
            title: 'Highways',
            description: 'Fast charging on the go.',
        },
        {
            icon: '/Images/ev-charging/need-4.png',
            title: 'Residential',
            description: 'Find chargers near your home.',
        },
        {
            icon: '/Images/ev-charging/need-5.png',
            title: 'Airports',
            description: 'Charge while you travel.',
        },
        {
            icon: '/Images/ev-charging/need-6.png',
            title: 'Hospitals',
            description: 'Reliable charging near healthcare.',
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
                    EV Charging Stations for Every Need
                </motion.h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-9 md:grid-cols-3 lg:grid-cols-6"
                >
                    {needs.map((need, index) => (
                        <motion.div
                            variants={fadeInUp}
                            key={index}
                            className="
                                flex min-h-[180px] flex-col items-center justify-center
                                rounded-2xl border border-gray-100 bg-white p-6
                                shadow-sm transition-shadow hover:shadow-md
                            "
                        >
                            <Image
                                src={need.icon}
                                alt={need.title}
                                width={54}
                                height={54}
                                className="mb-4 h-[54px] w-[54px] object-contain"
                            />

                            <h3 className={`${microgrammaBold.className} mb-3 text-sm font-bold text-[#0B402F] whitespace-nowrap`}>
                                {need.title}
                            </h3>

                            <p className="text-center text-xs leading-relaxed text-gray-500">
                                {need.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}