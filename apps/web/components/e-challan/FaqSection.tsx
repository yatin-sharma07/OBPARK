'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'How can I check my e-Challan status?',
        answer:
            'You can easily check your e-Challan status by entering your vehicle registration number or challan number in the search box.',
    },
    {
        question: 'Is it safe to pay e-Challans online?',
        answer:
            'Yes, our platform uses secure payment gateways to ensure your transaction is safe and instantly updated.',
    },
    {
        question: "What happens if I don't pay my e-Challan?",
        answer:
            'Failure to pay an e-Challan may result in additional penalties, legal action, or issues during vehicle registration renewal.',
    },
    {
        question: 'How long does it take to update the challan status?',
        answer:
            'The status is usually updated instantly after a successful payment, but it may take up to 24 hours to reflect in the official government records.',
    },
    {
        question: 'Can I pay multiple challans at once?',
        answer:
            'Yes, you can view all pending challans for your vehicle and pay them together in a single transaction.',
    },
];

export default function FaqSection() {
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
                        E-Challan FAQs
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