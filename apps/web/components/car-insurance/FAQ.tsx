'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { microgrammaBold } from '@/lib/fonts';

const faqs = [
    {
        question: 'What is car insurance and why is it important?',
        answer:
            'Car insurance is a contract between you and the insurance company that protects you against financial loss in the event of an accident or theft. It is also mandatory by law in India.',
    },
    {
        question: 'What is the difference between comprehensive and third-party insurance?',
        answer:
            'Third-party insurance only covers damages to other people or property caused by your car. Comprehensive insurance covers third-party liabilities as well as damages to your own car.',
    },
    {
        question: 'Can I renew my car insurance online?',
        answer:
            'Yes, you can easily renew your car insurance online through our platform in just a few minutes without any paperwork.',
    },
    {
        question: 'How do I file a claim?',
        answer:
            'You can file a claim online through our portal or app, or contact our 24x7 support team. We will guide you through the process and help you at our cashless network garages.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full px-4 py-14 sm:px-5 md:px-8 lg:px-10 xl:px-12">
            <div className="mx-auto w-full max-w-none">
                <motion.h2
                    initial={{ opacity: 0, y: -18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className={`${microgrammaBold.className} mb-9 text-center text-[22px] font-bold leading-tight text-[#06483f] sm:text-[26px] md:text-[30px] lg:text-[36px]`}
                >
                    FAQs on Car Insurance
                </motion.h2>

                <div className="w-full space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFaq(idx)}
                                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                            >
                                <span className="font-medium text-[#143B33]">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    size={22}
                                    strokeWidth={2.4}
                                    className={`shrink-0 text-[#06483f] transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
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
                    ))}
                </div>
            </div>
        </section>
    );
}