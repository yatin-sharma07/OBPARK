'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'How Does OBDrive Work?',
        answer:
            "Request a driver through the OBDrive app, and we'll assign a verified driver to your booking. Your driver will head to your selected pickup location, while you can track their journey in real time through the app.",
    },
    {
        question: 'Can We Trust OBDrive Drivers?',
        answer:
            'Your safety is our top priority, and we never compromise on it. Every OBDrive driver undergoes a thorough background verification and screening process before joining our platform. Drivers also receive proper training to ensure they meet our safety and service standards.',
    },
    {
        question: 'How Do I Contact My Driver?',
        answer:
            'Once a driver is assigned to your booking, you can contact them directly through the Obpark app. Call or message your driver conveniently from the app without needing to share your personal number.',
    },
    {
        question: "What's the Difference Between a Round Trip and a One-Way Trip?",
        answer:
            'Round Trip: Your driver picks you up and brings you back to the same location where your trip started. One-Way Trip: Your driver picks you up at your selected location and drops you off at a different destination.',
    },
    {
        question: 'How Much in Advance Should I Book a Driver?',
        answer:
            "If a driver is available nearby, you can book an OBDrive driver instantly through the app. If no driver is currently available, or you'd like to schedule a ride in advance, we recommend booking at least 1 hour ahead. This gives us enough time to arrange a verified driver for you.",
    },
    {
        question: 'Can I Extend My Booking Duration?',
        answer:
            "Yes. You can extend your booking if you need your driver for longer. Simply inform your driver, and they'll accommodate the additional time whenever possible. Additional charges may apply based on the extra duration or distance, as per OBDrive's pricing policy.",
    },
    {
        question: 'How Can I Pay for My Driver?',
        answer:
            'You can pay your OBDrive driver directly at the end of your trip using Cash or UPI. You can also choose your preferred payment method while placing your booking through the Obpark app.',
    },
    {
        question: 'What Is OBDrive Secure?',
        answer:
            'OBDrive Secure is designed to provide added peace of mind during your journey. It covers eligible damages that may occur to your car due to the fault of an OBDrive driver while driving your vehicle, subject to the applicable terms and conditions.',
    },
    {
        question: 'Do You Provide Invoices?',
        answer:
            'Yes. Once your payment is completed, you can access or request your invoice directly from the OBDrive app. Go to My Account → Orders → Past Orders & Bookings to view your completed booking and invoice details.',
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
                        OB Driver FAQs
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
