'use client';

import { microgrammaBold } from '@/lib/fonts';
import { Leaf, ShieldAlert, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cards = [
    {
        title: 'Protect Environment',
        description: 'Ensure your vehicle meets emission standards and contributes to a cleaner environment.',
        icon: Leaf,
        bgIcon: 'bg-green-50 text-[#074c43]',
        filled: true,
        strokeWidth: 2,
    },
    {
        title: 'Avoid Penalties',
        description: 'Stay updated with valid PUC certificate and avoid fines during traffic checks.',
        icon: ShieldAlert,
        bgIcon: 'bg-emerald-50 text-[#074c43]',
        filled: true,
        strokeWidth: 2,
    },
    {
        title: 'Save Time & Effort',
        description: 'Get instant PUC status online without visiting RTO or PUC centers.',
        icon: Clock,
        bgIcon: 'bg-teal-50 text-[#074c43]',
        filled: false,
        strokeWidth: 2.8,
    },
];

export default function WhyCheck() {
    return (
        <section className="w-full py-12 sm:py-14 md:py-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${microgrammaBold.className} mb-8 sm:mb-10 md:mb-12 text-center text-xl font-bold text-[#074c43] sm:text-[24px] md:text-[28px] lg:text-[32px]`}
            >
                Why check PUC online?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                {cards.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                        <motion.div
                            key={card.title}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-50 shadow-[0_8px_30px_rgba(7,76,67,0.04)] flex flex-col items-center text-center group hover:shadow-md transition-all"
                        >
                            <div className={`p-4 rounded-full ${card.bgIcon} mb-5 sm:mb-6 transition-transform group-hover:scale-110 duration-300`}>
                                <Icon 
                                    className={`w-7 h-7 sm:w-8 sm:h-8 ${card.filled ? 'fill-[#074c43]' : ''}`} 
                                    strokeWidth={card.strokeWidth}
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-[#074c43] mb-2 sm:mb-3">{card.title}</h3>
                            <p className="text-sm sm:text-[15px] md:text-base text-[#4a5f5a] leading-relaxed font-medium">
                                {card.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
