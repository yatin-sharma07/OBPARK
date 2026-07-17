'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { microgrammaBold } from '@/lib/fonts';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
    const faqs = [
        {
            question: 'Can I check vehicle owner details using just the number plate?',
            answer:
                'Yes, you can check the vehicle owner details using just the vehicle registration number (number plate). Simply enter the number in the search box to get started.',
        },
        {
            question: 'Can I check vehicle owner details using just the number plate?',
            answer:
                'Yes, you can check the vehicle owner details using just the vehicle registration number (number plate). Simply enter the number in the search box to get started.',
        },
        {
            question: 'Can I check vehicle owner details using just the number plate?',
            answer:
                'Yes, you can check the vehicle owner details using just the vehicle registration number (number plate). Simply enter the number in the search box to get started.',
        },
        {
            question: 'Can I check vehicle owner details using just the number plate?',
            answer:
                'Yes, you can check the vehicle owner details using just the vehicle registration number (number plate). Simply enter the number in the search box to get started.',
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full px-4 py-12 sm:py-14 md:py-16">
            <div className="mx-auto max-w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`${microgrammaBold.className} mb-8 text-center text-xl font-bold text-[#0B402F] sm:text-[24px] md:text-[28px] lg:text-[32px]`}
                >
                    FAQs on Checking Vehicle Owner Details by Number Plate Online
                </motion.h2>

                <div className="w-full space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(index)}
                                    className="
                                        flex w-full items-center justify-between
                                        px-6 py-4 text-left outline-none transition-colors
                                        hover:bg-[#f8fbfa] sm:px-10
                                    "
                                >
                                    <span className="font-medium text-[#143B33]">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`h-5 w-5 flex-shrink-0 text-[#174B43] transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-5 pt-1 text-[#3F665D] leading-relaxed text-sm">
                                                    {faq.answer}
                                                </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
