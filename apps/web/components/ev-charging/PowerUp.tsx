'use client';

import { microgrammaBold } from '@/lib/fonts';
import Image from 'next/image';

export default function PowerUp() {
    const features = [
        {
            icon: '/Images/ev/powerup/wide-network.png',
            label: (
                <>
                    Wide Network
                    <br />
                    Coverage
                </>
            ),
        },
        {
            icon: '/Images/ev/powerup/charger-types.png',
            label: (
                <>
                    Multiple
                    <br />
                    Charger Types
                </>
            ),
        },
        {
            icon: '/Images/ev/powerup/secure.png',
            label: (
                <>
                    Secure &
                    <br />
                    Reliable
                </>
            ),
        },
        {
            icon: '/Images/ev/powerup/save-time.png',
            label: (
                <>
                    Save Time
                    <br />& Money
                </>
            ),
        },
    ];

    return (
        <section className="w-full bg-white px-4 py-12 sm:py-14 md:py-16">
            <div className="mx-auto max-w-full">
                <div
                    className="
                        relative min-h-[500px] overflow-hidden rounded-[22px]
                        bg-[#0B402F] bg-cover bg-center bg-no-repeat
                        px-7 py-10 shadow-[0_10px_35px_rgba(11,64,47,0.12)]
                        sm:px-10 md:px-12 lg:min-h-[510px] lg:px-12 lg:py-14
                    "
                    style={{
                        backgroundImage:
                            'url(/Images/ev-charging/power-up-bg.png)',
                    }}
                >
                    {/* Left Content */}
                    <div className="relative z-10 max-w-[570px] text-white">
                        <h2
                            className={`${microgrammaBold.className} mb-6 text-[30px] font-bold leading-[1.25] text-white sm:text-[38px] whitespace-nowrap md:text-[40px] lg:text-[42px]`}
                        >
                            Power Up Your Journey
                            <br />
                            With OBPARK EV
                        </h2>

                        <p className="mb-10 max-w-[470px] text-base font-medium leading-relaxed text-white/90 sm:text-lg">
                            India&apos;s most reliable platform to find, compare and
                            navigate to EV charging stations.
                        </p>

                        <div className="mb-10 grid max-w-[560px] grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Image
                                        src={feature.icon}
                                        alt=""
                                        width={34}
                                        height={34}
                                        className="h-[34px] w-[34px] flex-shrink-0 object-contain"
                                    />

                                    <span className="text-[10px] font-semibold leading-snug text-white/90 sm:text-sm ">
                                        {feature.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button
                            className="
                                flex h-[56px] items-center gap-4 rounded-[12px]
                                bg-[#06493E] px-7 text-base font-bold text-white
                                shadow-[0_8px_18px_rgba(0,0,0,0.15)]
                                transition-all duration-300 hover:bg-[#043B33]
                            "
                        >
                            Explore Stations

                            <span className="flex h-8 w-8 items-center justify-center rounded-full  ">
                                <Image
                                    src="/Images/ev-charging/explore-1.png"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="h-10 w-10 object-contain"
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}