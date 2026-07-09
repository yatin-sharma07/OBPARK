'use client';

import { microgrammaBold } from '@/lib/fonts';
import { motion } from 'framer-motion';
import { HelpCircle, Calendar, IndianRupee, MapPin, ClipboardCheck } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cards = [
    {
        title: 'What is PUC?',
        description: 'Know what PUC certificate is and why it is important for your vehicle.',
        icon: HelpCircle,
        filled: true,
        strokeWidth: 2,
    },
    {
        title: 'PUC Validity',
        description: 'Check the validity period of PUC certificate for different fuel types.',
        icon: Calendar,
        filled: true,
        strokeWidth: 2,
    },
    {
        title: 'PUC Charges',
        description: 'Find out the latest PUC certificate charges in your state.',
        icon: IndianRupee,
        filled: false,
        strokeWidth: 2.8,
    },
    {
        title: 'PUC Centers',
        description: 'Locate nearest PUC centers and get your vehicle tested.',
        icon: MapPin,
        filled: true,
        strokeWidth: 2,
    },
    {
        title: 'Documents Required',
        description: 'Check the list of documents required for PUC certificate.',
        icon: ClipboardCheck,
        filled: true,
        strokeWidth: 2,
    },
];

export default function EverythingNeed() {
    return (
        <section className="w-full py-12 sm:py-14 md:py-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${microgrammaBold.className} mb-8 sm:mb-10 md:mb-12 text-center text-xl font-bold text-[#074c43] sm:text-[24px] md:text-[28px] lg:text-[32px]`}
            >
                Everything You Need to Know About PUC
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
                {cards.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                        <motion.div
                            key={card.title}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-50 shadow-[0_8px_30px_rgba(7,76,67,0.04)] flex flex-col items-center text-center group hover:shadow-md transition-all"
                        >
                            <div className="p-3 rounded-full bg-[#eefaf6] text-[#074c43] mb-3 sm:mb-4 transition-transform group-hover:scale-110 duration-300">
                                <Icon 
                                    className={`w-6 h-6 ${card.filled ? 'fill-[#074c43]' : ''}`} 
                                    strokeWidth={card.strokeWidth}
                                />
                            </div>
                            <h3 className="text-sm sm:text-base lg:text-sm xl:text-base font-bold text-[#074c43] mb-1 sm:mb-2">{card.title}</h3>
                            <p className="text-xs sm:text-sm text-[#4a5f5a] leading-relaxed font-medium">
                                {card.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
