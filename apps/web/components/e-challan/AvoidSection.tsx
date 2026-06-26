"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const cards = [
    {
        title: "Higher legal penalty",
        image: "/Images/e-challan/icon1.png",
    },
    {
        title: "Vehicle impound",
        image: "/Images/e-challan/icon2.png",
    },
    {
        title: "License suspension",
        image: "/Images/e-challan/icon3.png",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AvoidSection() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full px-4 sm:px-6 md:px-12 py-10"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading title="Pay challan on time to avoid" />

                <motion.div
                    className="grid gap-6 sm:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {cards.map((card) => (
                        <motion.div
                            key={card.title}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="flex min-h-[140px] flex-col items-center justify-center rounded-[10px] border border-[#d7e3df] bg-white px-5 py-8 text-center shadow-sm transition-shadow hover:shadow-md cursor-default"
                        >
                            <div className="relative h-12 w-12">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <p className="mt-5 text-[14px] font-medium text-[#074c43]">
                                {card.title}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}