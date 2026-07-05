'use client';

import { useState } from 'react';
import { MapPin, Smartphone, Mail } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const tabs = ['New Policy', 'Renew Policy', 'Check Policy'];

export default function Hero() {
    const [activeTab, setActiveTab] = useState('New Policy');

    return (
        <section className="relative mt-20 w-full overflow-hidden rounded-b-[22px] px-4 py-8 sm:px-6 md:px-10 lg:px-12 xl:px-14">
            <div className="mx-auto flex min-h-[540px] w-full max-w-none flex-col items-center gap-10 lg:min-h-[600px] lg:flex-row lg:gap-6">
                {/* Left Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariants}
                    className="relative z-10 flex w-full flex-1 flex-col justify-center pt-4 lg:max-w-[50%]"
                >
                    <h1
                        className={`${microgrammaBold.className} mb-3 text-[30px] font-bold leading-[1.12] text-[#074139] sm:text-[38px] md:text-[46px] lg:text-[52px] xl:text-[58px]`}
                    >
                        Compare & Buy
                        <br />
                        Car Insurance Online
                    </h1>

                    <p className="mb-6 text-sm font-semibold text-[#49655f] sm:text-base md:text-[17px]">
                        Best Prices. Better Coverage. Instant Policy.
                    </p>

                    {/* Form Box */}
                    <div className="w-full max-w-[520px]">
                        {/* Tabs */}
                        <div className="mb-4 grid grid-cols-3 overflow-hidden rounded-lg border border-[#edf2f0] bg-[#f9fcfb] shadow-sm">
                            {tabs.map((tab, index) => {
                                const isActive = activeTab === tab;

                                return (
                                    <button
                                        key={tab}
                                        type="button"
                                        onClick={() => setActiveTab(tab)}
                                        className={`
                      relative px-2 py-3 text-[11px] transition sm:text-[13px]
                      ${index !== 0 ? 'border-l border-[#e8eeee]' : ''}
                      ${isActive
                                                ? 'bg-white font-bold text-[#074139]'
                                                : 'font-medium text-[#6b7f7a] hover:bg-white hover:text-[#074139]'
                                            }
                    `}
                                    >
                                        {tab}

                                        {isActive && (
                                            <span className="absolute bottom-0 left-1/2 h-[3px] w-[64%] -translate-x-1/2 rounded-full bg-[#074139]" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="space-y-3">
                            {/* Car Number */}
                            <div className="relative">
                                <MapPin
                                    size={18}
                                    strokeWidth={2}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#49655f]"
                                />

                                <input
                                    type="text"
                                    placeholder="Enter Car Number"
                                    className="h-[50px] w-full rounded-lg border border-[#e3ece9] bg-white pl-11 pr-14 text-[13px] font-medium text-[#0b4038] outline-none transition placeholder:text-[#7f918c] focus:border-[#59D0B5]"
                                />

                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-[#465c57]">
                                    IND
                                </span>
                            </div>

                            {/* Mobile + Email */}
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <div className="relative">
                                    <Smartphone
                                        size={17}
                                        strokeWidth={2}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#49655f]"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Enter Mobile Number"
                                        className="h-[50px] w-full rounded-lg border border-[#e3ece9] bg-white pl-11 pr-4 text-[13px] font-medium text-[#0b4038] outline-none transition placeholder:text-[#7f918c] focus:border-[#59D0B5]"
                                    />
                                </div>

                                <div className="relative">
                                    <Mail
                                        size={17}
                                        strokeWidth={2}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#49655f]"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Enter Email ID"
                                        className="h-[50px] w-full rounded-lg border border-[#e3ece9] bg-white pl-11 pr-4 text-[13px] font-medium text-[#0b4038] outline-none transition placeholder:text-[#7f918c] focus:border-[#59D0B5]"
                                    />
                                </div>
                            </div>

                            <button className="flex h-[52px] w-full items-center justify-center rounded-lg bg-[#00574d] text-sm font-bold text-white shadow-[0_8px_18px_rgba(0,87,77,0.22)] transition hover:bg-[#06483f]">
                                <span className="flex w-full items-center justify-center">
                                    View Prices
                                </span>
                                <span className="pr-5 text-xl leading-none">→</span>
                            </button>
                        </div>

                        {/* Features - unchanged */}
                        <div className="mt-7 grid grid-cols-2 gap-3 text-xs font-semibold text-[#143f39] sm:grid-cols-4 sm:text-sm whitespace-nowrap">
                            <span className="flex items-center gap-2">
                                <Image
                                    src="/Images/car-insurance/tick.png"
                                    alt="Quick"
                                    width={30}
                                    height={30}
                                />
                                Quick
                            </span>

                            <span className="flex items-center gap-2">
                                <Image
                                    src="/Images/car-insurance/tick.png"
                                    alt="Secure"
                                    width={30}
                                    height={30}
                                />
                                Secure
                            </span>

                            <span className="flex items-center gap-2">
                                <Image
                                    src="/Images/car-insurance/tick.png"
                                    alt="Reliable"
                                    width={30}
                                    height={30}
                                />
                                Reliable
                            </span>

                            <span className="flex items-center gap-2">
                                <Image
                                    src="/Images/car-insurance/tick.png"
                                    alt="Online"
                                    width={35}
                                    height={35}
                                />
                                100% Online
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image Only - unchanged */}
                <motion.div
                    initial={{ opacity: 0, x: 45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative h-[330px] w-full flex-1 sm:h-[430px] md:h-[520px] lg:h-[590px] lg:max-w-[52%] xl:h-[640px]"
                >
                    <Image
                        src="/Images/car-insurance/hero-bg.png"
                        alt="Car Insurance"
                        fill
                        priority
                        className="object-contain object-center lg:object-right"
                    />
                </motion.div>
            </div>
        </section>
    );
}