'use client';

import { microgrammaBold } from '@/lib/fonts';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
    const faqs = [
        {
            question: 'How do I find EV charging stations near me?',
            answer:
                'You can find charging stations by using the search bar at the top of the page. Simply enter your location or allow location access to see the nearest stations.',
        },
        {
            question: 'What types of chargers are available?',
            answer:
                'We support a variety of chargers including fast chargers (DC) and standard chargers (AC). You can filter stations by connector type in the app.',
        },
        {
            question: 'Can I see real-time availability of stations?',
            answer:
                'Yes, our platform provides live availability status for most stations on our network, so you know if a charger is free before you arrive.',
        },
        {
            question: 'Is there a cost to use the OBPARK EV platform?',
            answer:
                'The platform is free to use for finding and navigating to stations. Charging costs vary by station and provider.',
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-white px-4 py-12 sm:py-14 md:py-16">
            <div className="mx-auto max-w-full">
                <h2
                    className={`${microgrammaBold.className} mb-8 text-center text-2xl font-bold text-[#0B402F] sm:text-[28px] md:text-[34px] lg:text-[36px]`}
                >
                    FAQs on EV Charging Stations
                </h2>

                <div className="w-full">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="
                                    overflow-hidden border border-[#E4EAEA] bg-white
                                    shadow-[0_2px_10px_rgba(11,64,47,0.04)]
                                    first:rounded-t-[12px] last:rounded-b-[12px]
                                    [&:not(:first-child)]:-mt-px
                                "
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="
                                        flex w-full items-center justify-between
                                        px-6 py-4 text-left outline-none
                                        sm:px-10
                                    "
                                >
                                    <span className="text-sm font-bold text-[#174B43] sm:text-base md:text-[17px]">
                                        {faq.question}
                                    </span>

                                    {isOpen ? (
                                        <ChevronUp className="h-5 w-5 flex-shrink-0 text-[#174B43]" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 flex-shrink-0 text-[#174B43]" />
                                    )}
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-5 sm:px-10">
                                        <p className="max-w-5xl text-sm leading-relaxed text-[#3E7071] sm:text-base">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}