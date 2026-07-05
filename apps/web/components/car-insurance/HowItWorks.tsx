'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';

const steps = [
    {
        num: '1',
        title: 'Enter Car Details',
        desc: 'Enter your car number and basic details.',
        icon: '/Images/car-insurance/how-1.png',
    },
    {
        num: '2',
        title: 'Compare & Choose',
        desc: 'Compare best plans and choose the right one.',
        icon: '/Images/car-insurance/how-2.png',
    },
    {
        num: '3',
        title: 'Make Payment',
        desc: 'Secure payment through multiple options.',
        icon: '/Images/car-insurance/how-3.png',
    },
    {
        num: '4',
        title: 'Get Instant Policy',
        desc: 'Receive your policy documents instantly.',
        icon: '/Images/car-insurance/how-4.png',
    },
];

export default function HowItWorks() {
    return (
        <section className="w-full overflow-hidden bg-white px-4 py-14 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="mx-auto w-full max-w-none text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className={`${microgrammaBold.className} mb-12 text-[24px] font-bold leading-tight text-[#06483f] sm:text-[28px] md:text-[32px] lg:mb-16 lg:text-[36px]`}
                >
                    How it works?
                </motion.h2>

                <div className="mx-auto grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.12 }}
                            className="relative flex w-full flex-col items-center text-center"
                        >
                            {/* Desktop Arrow */}
                            {idx !== steps.length - 1 && (
                                <div className="pointer-events-none absolute left-[68%] top-[42px] z-0 hidden w-[64%] items-center justify-center lg:flex">
                                    <div className="h-[1px] w-full bg-[#dfe9e6]" />
                                    <span className="-ml-1 text-[22px] font-bold leading-none text-[#06483f]">
                                        →
                                    </span>
                                </div>
                            )}

                            <div className="relative z-10 mb-6">
                                <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[#dff5f0] sm:h-[100px] sm:w-[100px]">
                                    <Image
                                        src={step.icon}
                                        alt={step.title}
                                        width={48}
                                        height={48}
                                        className="h-[48px] w-[48px] object-contain sm:h-[54px] sm:w-[54px]"
                                    />
                                </div>

                                <div className="absolute -left-2 top-1 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#1fa878] text-xs font-bold text-white shadow-sm sm:h-[28px] sm:w-[28px]">
                                    {step.num}
                                </div>
                            </div>

                            <h3 className={`${microgrammaBold.className} mb-3 text-[17px] font-bold leading-tight text-[#06483f] sm:text-[18px] lg:text-[19px]`}>
                                {step.title}
                            </h3>

                            <p className="max-w-[250px] text-[14px] font-medium leading-[1.7] text-[#46645f] sm:text-[15px]">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}