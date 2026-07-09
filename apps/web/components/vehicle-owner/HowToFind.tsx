'use client';

import { microgrammaBold } from '@/lib/fonts';
import { motion } from 'framer-motion';

const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function HowToFind() {
    const obparkSteps = [
        'Enter "Car Number/Vehicle Registration Number" in the above box.',
        'Click on "Check Details" and get the information within seconds.',
    ];

    const parivahanSteps = [
        'Go to the Parivahan website.',
        'Select "Know Your Vehicle Details" from the "Informational Services" dropdown.',
        'Provide your mobile phone number and fill in the displayed verification code.',
        'Complete the sign-in process or create an account.',
        "Enter the vehicle registration number and click on 'Search Vehicle' or 'Vahan Search' to get the details.",
    ];

    return (
        <section className="w-full px-4 py-12 sm:py-14 md:py-16">
            <div className="mx-auto max-w-full text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`${microgrammaBold.className} mb-8 sm:mb-10 md:mb-12 text-xl font-bold leading-tight text-[#0B402F] sm:text-[28px] md:text-[34px] lg:text-[36px]`}
                >
                    How to find your vehicle owner details online
                </motion.h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* OBPARK Section */}
                    <motion.div
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="
                            rounded-[18px] border border-[#C7F1E7]
                            bg-[#6CCBA4] bg-opacity-80 px-5 py-8 text-left
                            shadow-[0_2px_14px_rgba(11,64,47,0.08)]
                            sm:px-7 sm:py-9 md:px-9 lg:px-11
                        "
                    >
                        <div className="mb-8 flex items-center justify-center gap-2">
                            <span
                                className={`${microgrammaBold.className} text-[22px] font-bold tracking-wide text-[#06463E] sm:text-[26px] md:text-[28px]`}
                            >
                                OBPARK
                            </span>
                        </div>

                        <div className="space-y-6 sm:space-y-8">
                            {obparkSteps.map((step, idx) => (
                                <div key={idx} className="relative flex items-start gap-4 sm:gap-5">
                                    {idx !== obparkSteps.length - 1 && (
                                        <span className="absolute left-[13px] top-7 h-[50px] sm:h-[60px] w-[2px] bg-white bg-opacity-30 border-l border-dashed border-white" />
                                    )}

                                    <div
                                        className="
                                            relative z-10 flex h-7 w-7 flex-shrink-0
                                            items-center justify-center rounded-full
                                            bg-transparent border border-white text-sm font-bold text-white
                                        "
                                    >
                                        {idx + 1}
                                    </div>

                                    <div className="rounded-lg bg-white bg-opacity-95 px-4 py-3 shadow-sm flex-1">
                                        <p className="text-[13px] font-medium leading-relaxed text-[#285F5A] sm:text-[14px] md:text-[15px]">
                                            {step}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Parivahan Section */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="
                            rounded-[18px] border border-[#E8ECEC]
                            bg-white px-5 py-8 text-left
                            shadow-[0_12px_30px_rgba(7,76,67,0.08)]
                            sm:px-7 sm:py-9 md:px-9 lg:px-11
                        "
                    >
                        <h3
                            className={`${microgrammaBold.className} mb-8 text-center text-[22px] font-bold text-[#074139] sm:text-[26px] md:text-[28px]`}
                        >
                            Parivahaan
                        </h3>

                        <div className="space-y-5 sm:space-y-6">
                            {parivahanSteps.map((step, idx) => (
                                <div key={idx} className="relative flex items-start gap-4 sm:gap-5">
                                    {idx !== parivahanSteps.length - 1 && (
                                        <span className="absolute left-[13px] top-7 h-[40px] sm:h-[42px] w-px bg-[#D8F0EE]" />
                                    )}

                                    <div
                                        className="
                                            relative z-10 flex h-7 w-7 flex-shrink-0
                                            items-center justify-center rounded-full
                                            border border-[#D8F8F3] text-sm font-bold text-[#0B7064]
                                        "
                                    >
                                        {idx + 1}
                                    </div>

                                    <p className="pt-[2px] text-[13px] font-medium leading-relaxed text-[#285F5A] sm:text-[14px] md:text-[15px]">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
