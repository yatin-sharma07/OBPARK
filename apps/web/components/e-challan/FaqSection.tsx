"use client";

import { motion } from "framer-motion";

const faqs = [
    "Is FASTag mandatory?",
    "Is FASTag mandatory?",
    "Is FASTag mandatory?",
    "Is FASTag mandatory?",
    "Is FASTag mandatory?",
    "Is FASTag mandatory?",
    "Is FASTag mandatory?",
    "Is FASTag mandatory?",
    "Is FASTag mandatory?",
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

export default function FaqSection() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full px-4 sm:px-6 md:px-12 py-12"
        >
            <div className="mx-auto max-w-4xl">
                <h2 className="mb-8 text-[26px] font-black tracking-[-0.04em] text-[#074c43] text-center md:text-left">
                    FAQs - E Challan
                </h2>

                <motion.div 
                    className="space-y-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {faqs.map((faq, index) => (
                        <motion.details
                            key={`${faq}-${index}`}
                            variants={itemVariants}
                            className="group rounded-[8px] bg-white px-5 py-4 shadow-sm border border-transparent transition-colors hover:border-[#9bb9b0] cursor-pointer"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between text-[13px] font-medium text-[#074c43]">
                                {faq}
                                <span className="transition-transform group-open:rotate-180 text-lg">⌄</span>
                            </summary>

                            <p className="mt-3 text-[12px] leading-6 text-[#426d66]">
                                Yes, FASTag is mandatory for vehicles using toll plazas on
                                national highways. It helps make toll payments faster and
                                cashless.
                            </p>
                        </motion.details>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}