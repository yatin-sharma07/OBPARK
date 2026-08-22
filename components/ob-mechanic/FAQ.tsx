'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'Why Should I Choose OBMechanic?',
        answer:
            'OBMechanic makes car servicing simple, convenient, and reliable. Get access to a wide range of multi-brand car services at competitive prices, delivered by skilled technicians using quality parts and professional service standards.',
    },
    {
        question: 'How Can OBMechanic Offer Savings on Car Services?',
        answer:
            'OBMechanic keeps service costs competitive through an efficient, technology-driven business model. By optimizing operations, sourcing quality parts efficiently, and reducing unnecessary overheads, we can pass the savings on to customers.',
    },
    {
        question: 'How Is OBMechanic Different from Other Car Services?',
        answer:
            'OBMechanic focuses on delivering a complete, transparent car-service experience rather than simply generating service leads. We streamline the journey from service coordination and parts sourcing to quality checks and customer updates.',
    },
    {
        question: 'Where Can I Book a Car Service with OBMechanic?',
        answer:
            'You can conveniently book your car service through the OBMechanic platform. Simply choose the service you need, select a convenient date and time, and submit your booking request.',
    },
    {
        question: 'How Do I Book a Car Service with OBMechanic?',
        answer:
            "Select your car — choose make, model, and fuel type. Choose your service — select the package that best suits your car's needs. Pick a time slot. Confirm your booking.",
    },
    {
        question: "What If I'm Not Available to Drop Off My Car?",
        answer:
            'No problem! OBMechanic can make car servicing more convenient with pickup and drop-off assistance, subject to availability in your location.',
    },
    {
        question: 'Do I Have to Pay Before the Service?',
        answer:
            "No, you don't have to pay upfront. At OBMechanic, your car is serviced and inspected by professionals before the final bill is generated.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const renderCard = (faq: typeof faqs[0], index: number) => {
        const isOpen = openIndex === index;

        return (
            <div
                key={index}
                className={`flex flex-col rounded-[20px] transition-all duration-300 overflow-hidden ${
                    isOpen ? 'bg-white shadow-md' : 'shadow-sm'
                }`}
                style={isOpen ? {} : { background: 'linear-gradient(135deg, #59D0B5 0%, #1C8182 100%)' }}
            >
                <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`w-full text-left px-6 py-6 sm:px-8 sm:py-8 flex items-center justify-between transition-colors min-h-[100px] sm:min-h-[112px] ${
                        isOpen ? 'text-[#0C403A]' : 'text-white'
                    }`}
                >
                    <span
                        className="text-[14px] sm:text-[15px] font-semibold tracking-wide"
                        style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                        {faq.question}
                    </span>
                    {isOpen ? (
                        <Minus className="w-5 h-5 shrink-0 text-[#0C403A]" />
                    ) : (
                        <Plus className="w-5 h-5 shrink-0 text-white" />
                    )}
                </button>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="px-6 sm:px-8 pb-6 sm:pb-8"
                        >
                            <p
                                className="text-[#0C403A] text-[13px] sm:text-[14px] leading-[1.7] whitespace-pre-line font-medium"
                                style={{ fontFamily: 'var(--font-michroma)' }}
                            >
                                {faq.answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <section className="w-full py-6 px-3 sm:px-5">
            <div className="w-full rounded-[28px] bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-28 px-6 sm:px-10 md:px-12 border border-[#E1EBE8] shadow-sm">
                <div className="mx-auto w-full max-w-[1300px]">
                    <h2
                        className={`
                            ${microgrammaBold.className}
                            mb-10
                            text-2xl
                            sm:text-3xl
                            md:text-[36px]
                            text-[#074139]
                            font-bold
                        `}
                    >
                        OB Mechanic FAQs
                    </h2>

                    <div className="flex flex-col md:flex-row gap-5 sm:gap-6 w-full items-start">
                        <div className="flex flex-col gap-5 sm:gap-6 w-full md:w-1/2">
                            {faqs.map((faq, index) => {
                                if (index % 2 !== 0) return null;
                                return renderCard(faq, index);
                            })}
                        </div>
                        <div className="flex flex-col gap-5 sm:gap-6 w-full md:w-1/2">
                            {faqs.map((faq, index) => {
                                if (index % 2 === 0) return null;
                                return renderCard(faq, index);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
