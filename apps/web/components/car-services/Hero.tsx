'use client';

import { MapPin } from 'lucide-react';
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

export default function Hero() {
    return (
        <section className="relative mt-20 w-full overflow-hidden rounded-b-[22px] bg-white px-4 py-8 sm:px-6 md:px-10 lg:min-h-[640px] lg:px-12 xl:px-14">
            {/* Right Image Background - desktop */}
            <motion.div
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="pointer-events-none absolute right-0 top-0 hidden h-full w-[58%] lg:block"
            >
                <Image
                    src="/Images/car-service/hero-bg.png"
                    alt="Car Services"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </motion.div>

            <div className="relative z-10 mx-auto flex min-h-[540px] w-full max-w-none flex-col items-center gap-10 lg:min-h-[600px] lg:flex-row lg:gap-0">
                {/* Left Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariants}
                    className="relative z-10 flex w-full flex-col justify-center pt-4 lg:w-[48%]"
                >
                    <h1
                        className={`${microgrammaBold.className} mb-5 text-[32px] font-bold leading-[1.12] text-[#00473f] sm:text-[40px] md:text-[45px] lg:text-[48px] xl:text-[50px]`}
                    >
                        Find the Best
                        <br />
                        Car Services Near You
                    </h1>

                    <p className="mb-7 max-w-[470px] text-sm font-medium leading-relaxed text-[#4c6661] sm:text-base md:text-[15px]">
                        Book trusted car services at your convenience.
                        <br />
                        Genuine care for your car.
                    </p>

                    {/* Search Input */}
                    <div className="mb-8 flex w-full max-w-[540px] items-center rounded-[10px] border border-[#e4ece9] bg-white p-1.5 shadow-[0_8px_28px_rgba(0,0,0,0.06)]">
                        <div className="relative flex-1">
                            <MapPin
                                size={19}
                                strokeWidth={2.2}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00574d]"
                            />

                            <input
                                type="text"
                                placeholder="Enter your location or area"
                                className="h-[52px] w-full bg-transparent pl-12 pr-3 text-[13px] font-medium text-[#0b4038] outline-none placeholder:text-[#7f918c] sm:text-sm"
                            />
                        </div>

                        <button className="h-[46px] shrink-0 rounded-[7px] bg-[#00574d] px-5 text-xs font-bold text-white shadow-[0_8px_18px_rgba(0,87,77,0.22)] transition hover:bg-[#06483f] sm:px-7 sm:text-sm">
                            Find Services
                        </button>
                    </div>

                    {/* Features */}
                    <div className="grid max-w-[520px] grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/Images/car-service/header-icon-1.png"
                                alt="Trusted"
                                width={38}
                                height={38}
                                className="shrink-0"
                            />
                            <p className="text-[13px] font-bold leading-snug text-[#16463f]">
                                Trusted & Verified
                                <br />
                                Service Centers
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image
                                src="/Images/car-service/header-icon-2.png"
                                alt="Genuine Parts"
                                width={38}
                                height={38}
                                className="shrink-0"
                            />
                            <p className="text-[13px] font-bold leading-snug text-[#16463f]">
                                Genuine Parts
                                <br />
                                & Quality Service
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image
                                src="/Images/car-service/header-icon-3.png"
                                alt="Transparent Pricing"
                                width={38}
                                height={38}
                                className="shrink-0"
                            />
                            <p className="text-[13px] font-bold leading-snug text-[#16463f]">
                                Transparent Pricing
                                <br />
                                No Hidden Charges
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image
                                src="/Images/car-service/header-icon-4.png"
                                alt="Online Booking"
                                width={38}
                                height={38}
                                className="shrink-0"
                            />
                            <p className="text-[13px] font-bold leading-snug text-[#16463f]">
                                Quick & Easy
                                <br />
                                Online Booking
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Mobile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative h-[330px] w-full sm:h-[430px] md:h-[520px] lg:hidden"
                >
                    <Image
                        src="/Images/car-service/hero-bg.png"
                        alt="Car Services"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </motion.div>
            </div>
        </section>
    );
}