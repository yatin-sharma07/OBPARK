'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';

const needs = [
    {
        title: 'Car Servicing & Maintenance',
        desc: '',
        icon: '/Images/car-service/explore-1.png',
    },
    {
        title: 'General Repairs & Mechanic',
        desc: '',
        icon: '/Images/car-service/explore-2.png',
    },
    {
        title: 'AC Service & Repair',
        desc: '',
        icon: '/Images/car-service/explore-3.png',
    },
    {
        title: 'Car Wash & Detailing',
        desc: '',
        icon: '/Images/car-service/explore-4.png',
    },
    {
        title: 'Battery & Electrical',
        desc: '',
        icon: '/Images/car-service/explore-5.png',
    },
    {
        title: 'Tyres & Wheels Care',
        desc: '',
        icon: '/Images/car-service/explore-6.png',
    },
    {
        title: "More",
        desc: "",
        icon: "/Images/car-service/explore-3.png"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function ExploreTopServices() {
    return (
        <section className="w-full px-4 py-14 sm:px-5 md:px-8 lg:px-10 xl:px-12">
            <div className="mx-auto w-full max-w-none">
                <motion.h2
                    initial={{ opacity: 0, y: -18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className={`${microgrammaBold.className} mb-9 text-center text-[24px] font-bold leading-tight text-[#06483f] sm:text-[28px] md:text-[32px] lg:text-[36px]`}
                >
                    Explore Top Car Services
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7"
                >
                    {needs.map((need, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex min-h-[245px] w-full flex-col items-center justify-start rounded-[18px] border border-[#dfe9e6] bg-white px-4 py-7 text-center shadow-[0_0_20px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)] sm:min-h-[255px] lg:min-h-[260px]"
                        >
                            <div className="mb-5 flex h-[64px] w-[64px] items-center justify-center">
                                <Image
                                    src={need.icon}
                                    alt={need.title}
                                    width={54}
                                    height={54}
                                    className="h-[54px] w-[54px] object-contain"
                                />
                            </div>

                            <h3 className={`mb-3 flex min-h-[44px] max-w-[170px] items-center justify-center text-center text-[15px] font-bold leading-[1.45] text-[#06483f] sm:text-[16px] ${microgrammaBold.className}`}>
                                {need.title}
                            </h3>

                            <p className="max-w-[175px] text-[12px] font-medium leading-[1.7] text-[#4f6964] sm:text-[13px]">
                                {need.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}