'use client';

import { microgrammaBold } from '@/lib/fonts';
import Image from 'next/image';

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
        <section className="w-full bg-white px-4 py-16">
            <div className="mx-auto max-w-full text-center">
                <h2
                    className={`${microgrammaBold.className} mb-12 text-2xl font-bold text-[#0B402F] sm:text-2xl md:text-[34px] lg:text-[36px]`}
                >
                    Why choose OBPARK EV
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
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

                            <h3 className={`${microgrammaBold.className} mb-4 text-[24px] font-bold text-[#0B402F]`}>
                                {feature.title}
                            </h3>

                            <p className="text-center text-base text-[#3E7071] sm:text-lg md:text-[16px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}