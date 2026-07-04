'use client';

import { microgrammaBold } from '@/lib/fonts';

export default function HowToFind() {
    const obparkSteps = [
        'Enter your location or allow GPS access.',
        'Browse nearby EV charging stations with filters.',
        'Check availability, connector type and pricing.',
        'Navigate to the station and charge with ease.',
    ];

    const parivahanSteps = [
        'Go to the Parivahan website.',
        "Select 'EV Charging Stations' from the informational services dropdown.",
        'Choose your state or city to view charging stations.',
        'View station details and navigate using the map.',
    ];

    return (
        <section className="w-full bg-white px-4 py-12 sm:py-14 md:py-16">
            <div className="mx-auto max-w-full text-center">
                <h2
                    className={`${microgrammaBold.className} mb-8 text-2xl font-bold leading-tight text-[#0B402F] sm:text-[28px] md:text-[34px] lg:text-[36px]`}
                >
                    How to find EV charging stations
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* OBPARK EV Section */}
                    <div
                        className="
                            rounded-[18px] border border-[#C7F1E7]
                            bg-[#CFF4EA] px-7 py-9 text-left
                            shadow-[0_2px_14px_rgba(11,64,47,0.08)]
                            sm:px-9 md:px-10 lg:px-11 min-h-[400px]
                        "
                    >
                        <div className="mb-8 flex items-center justify-center gap-2">
                            <span
                                className={`${microgrammaBold.className} text-[26px] font-bold tracking-wide text-[#06463E] sm:text-[28px]`}
                            >
                                OBPARK
                            </span>
                            <span
                                className={`${microgrammaBold.className} text-[26px] font-bold tracking-wide text-[#18A889] sm:text-[28px]`}
                            >
                                EV
                            </span>
                        </div>

                        <div className="space-y-6">
                            {obparkSteps.map((step, idx) => (
                                <div key={idx} className="relative flex items-start gap-5">
                                    {idx !== obparkSteps.length - 1 && (
                                        <span className="absolute left-[13px] top-7 h-[42px] w-px bg-[#39AE9B]" />
                                    )}

                                    <div
                                        className="
                                            relative z-10 flex h-7 w-7 flex-shrink-0
                                            items-center justify-center rounded-full
                                            bg-[#28A890] text-sm font-bold text-white
                                            shadow-[0_2px_6px_rgba(40,168,144,0.25)]
                                        "
                                    >
                                        {idx + 1}
                                    </div>

                                    <p className="pt-[2px] text-[15px] font-medium leading-relaxed text-[#285F5A] sm:text-base md:text-[17px]">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Parivahan Section */}
                    <div
                        className="
                            rounded-[18px] border border-[#E8ECEC]
                            bg-white px-7 py-9 text-left
                            shadow-[0_2px_14px_rgba(11,64,47,0.08)]
                            sm:px-9 md:px-10 lg:px-11 min-h-[460px]
                        "
                    >
                        <h3
                            className={`${microgrammaBold.className} mb-8 text-center text-[26px] font-bold text-[#074139] sm:text-[28px]`}
                        >
                            Parivahan
                        </h3>

                        <div className="space-y-6">
                            {parivahanSteps.map((step, idx) => (
                                <div key={idx} className="relative flex items-start gap-5">
                                    {idx !== parivahanSteps.length - 1 && (
                                        <span className="absolute left-[13px] top-7 h-[42px] w-px bg-[#D8F0EE]" />
                                    )}

                                    <div
                                        className="
                                            relative z-10 flex h-7 w-7 flex-shrink-0
                                            items-center justify-center rounded-full
                                            bg-[#D8F8F3] text-sm font-bold text-[#0B7064]
                                        "
                                    >
                                        {idx + 1}
                                    </div>

                                    <p className="pt-[2px] text-[15px] font-medium leading-relaxed text-[#285F5A] sm:text-base md:text-[17px]">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}