'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';

const needs = [
    {
        title: 'Routine Maintenance',
        desc: 'Keep your car in top condition.',
        image: '/Images/car-services/routine-maintenance.png',
    },
    {
        title: 'Repairs & Diagnostics',
        desc: 'Fix issues with expert solutions.',
        image: '/Images/car-services/repairs-diagnostics.png',
    },
    {
        title: 'AC Service & Cooling',
        desc: 'Stay cool with efficient AC performance.',
        image: '/Images/car-services/ac-service.png',
    },
    {
        title: 'Washing & Detailing',
        desc: 'Shine bright like new.',
        image: '/Images/car-services/washing-detailing.png',
    },
    {
        title: 'Tyres & Alignment',
        desc: 'Safe drive starts with the right grip.',
        image: '/Images/car-services/tyres-alignment.png',
    },
    {
        title: 'Battery & Electricals',
        desc: 'Power up with reliable performance.',
        image: '/Images/car-services/battery-electricals.png',
    },
];

const stats = [
    {
        value: '2500+',
        label: 'Trusted Service Centers',
        icon: '/Images/car-service/icon-1.png',
    },
    {
        value: '50K+',
        label: 'Happy Customers',
        icon: '/Images/car-service/icon-2.png',
    },
    {
        value: '4.8/5',
        label: 'Average Rating',
        icon: '/Images/car-service/icon-3.png',
    },
    {
        value: '1M+',
        label: 'Services Completed',
        icon: '/Images/car-service/icon-4.png',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45 },
    },
};

export default function CarServicesForEveryNeed() {
    return (
        <section className="w-full bg-white px-4 py-12 sm:px-5 md:px-8 lg:px-10 xl:px-12">
            <div className="mx-auto w-full max-w-none">
                <motion.h2
                    initial={{ opacity: 0, y: -18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className={`${microgrammaBold.className} mb-8 text-center text-[24px] font-bold leading-tight text-[#06483f] sm:text-[28px] md:text-[30px] lg:text-[34px]`}
                >
                    Car Services for Every Need
                </motion.h2>

                {/* Service Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
                >
                    {needs.map((need) => (
                        <motion.div
                            key={need.title}
                            variants={itemVariants}
                            className="flex min-h-[270px] w-full flex-col rounded-[18px] border border-[#e1ebe8] bg-white p-4 text-left shadow-[0_6px_24px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)]"
                        >
                            <div className="relative mb-5 h-[125px] w-full overflow-hidden rounded-[11px] bg-[#eef7f5]">
                                <Image
                                    src={need.image}
                                    alt={need.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h3
                                className={`${microgrammaBold.className} mb-3 text-[16px] font-bold leading-[1.35] text-[#06483f]`}
                            >
                                {need.title}
                            </h3>

                            <p className="text-[13px] font-medium leading-[1.7] text-[#4f6964]">
                                {need.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className="mt-8 grid w-full grid-cols-1 gap-5 rounded-[24px] bg-[#e8f8f5] px-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12"
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.value}
                            className="flex items-center justify-center gap-4 text-[#087365]"
                        >
                            <div className="relative h-[38px] w-[38px] shrink-0">
                                <Image
                                    src={stat.icon}
                                    alt={stat.label}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div>
                                <h4 className="text-[22px] font-black leading-none text-[#087365]">
                                    {stat.value}
                                </h4>
                                <p className="mt-1 text-[12px] font-semibold text-[#315d56]">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}