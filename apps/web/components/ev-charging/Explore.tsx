'use client';

import { microgrammaBold } from '@/lib/fonts';
import Image from 'next/image';

export default function Explore() {
    const tabs = [
        {
            icon: '/Images/ev-charging/header-icon-1.png',
            label: 'Find Stations',
        },
        {
            icon: '/Images/ev-charging/header-icon-2.png',
            label: 'Live Availability',
        },
        {
            icon: '/Images/ev-charging/explore-1.png',
            label: 'Type of Chargers',
        },
        {
            icon: '/Images/ev-charging/explore-2.png',
            label: 'Pricing & Plans',
        },
        {
            icon: '/Images/ev-charging/explore-3.png',
            label: 'EV Guides',
        },
        {
            icon: '/Images/ev-charging/explore-4.png',
            label: 'Add Your Station',
        },
    ];

    return (
        <section className="w-full bg-white px-4 py-8 sm:py-10">
            <div className="mx-auto max-w-full text-center">
                <h2
                    className={`${microgrammaBold.className} mb-8 text-2xl font-bold leading-tight text-[#0B402F] sm:text-[28px] md:text-[34px] lg:text-[36px]`}
                >
                    Explore Everything About EV Charging
                </h2>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:flex-nowrap lg:gap-5">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className="
                                flex h-[50px] w-full max-w-[260px] items-center justify-center gap-3
                                rounded-[10px] border border-[#E5EEEE] bg-white px-4
                                text-sm font-semibold text-[#174B43]
                                shadow-[0_0_14px_rgba(11,64,47,0.08)]
                                transition-all duration-300
                                hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(11,64,47,0.12)]
                                sm:h-[54px] sm:w-auto sm:min-w-[175px] sm:px-5
                            "
                        >
                            <span className="relative flex h-[30px] w-[30px] shrink-0 items-center justify-center">
                                <Image
                                    src={tab.icon}
                                    alt={tab.label}
                                    width={30}
                                    height={30}
                                    className="h-[30px] w-[30px] object-contain"
                                />
                            </span>

                            <span className="whitespace-nowrap">
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}