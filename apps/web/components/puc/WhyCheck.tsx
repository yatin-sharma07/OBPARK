'use client';

import { microgrammaBold } from '@/lib/fonts';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cards = [
    {
        title: 'Protect Environment',
        description: 'Ensure your vehicle meets emission standards and contributes to a cleaner environment.',
        icon: '/Images/puc/Protect Environment.svg',
    },
    {
        title: 'Avoid Penalties',
        description: 'Stay updated with valid PUC certificate and avoid fines during traffic checks.',
        icon: '/Images/puc/avoid Penalties.svg',
    },
    {
        title: 'Save Time & Effort',
        description: 'Get instant PUC status online without visiting RTO or PUC centers.',
        icon: '/Images/puc/Save Time & Effort.svg',
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
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#eefaf6] flex items-center justify-center p-3 mb-5 sm:mb-6 transition-transform group-hover:scale-110 duration-300">
                                <Image
                                    src={card.icon}
                                    alt={card.title}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain"
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
