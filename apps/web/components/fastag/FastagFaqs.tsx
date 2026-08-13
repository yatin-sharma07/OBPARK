'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'What is FASTag and how does it work?',
        answer:
            'FASTag is an electronic toll collection system in India, operated by the National Highway Authority of India (NHAI). It uses Radio Frequency Identification (RFID) technology for making toll payments directly from the prepaid linked account.',
    },
    {
        question: 'How do I check my FASTag wallet balance?',
        answer:
            'You can easily check your FASTag wallet balance by entering your vehicle registration number (VRN) on our FASTag portal or through instant SMS updates.',
    },
    {
        question: 'How long does a FASTag recharge take to reflect?',
        answer:
            'FASTag recharges done via UPI, Net Banking, or Credit/Debit cards are updated instantly, within 10 to 60 seconds.',
    },
    {
        question: 'What should I do if my FASTag is blacklisted?',
        answer:
            'A FASTag gets blacklisted if there is insufficient balance in your wallet. Simply top up your FASTag wallet and wait 15-30 minutes for automatic unblocking.',
    },
];

export function FastagFaqs() {
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
                    <p
                        className="mb-3 text-[13px] sm:text-[14px] text-[#074139] tracking-wider uppercase font-semibold"
                        style={{ fontFamily: 'var(--font-michroma)' }}
                    >
                        Frequently Asked Questions (FAQ)
                    </p>

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
                        FASTag FAQs
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

export default FastagFaqs;
