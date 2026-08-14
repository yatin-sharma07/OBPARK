'use client';

import { motion } from 'framer-motion';
import { microgrammaBold } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function ExploreMenu() {
    const items = [
        { label: 'Check PUC Status', icon: '/Images/puc/check_puc_status.svg' },
        { label: 'PUC Certificate', icon: '/Images/puc/puc_certificate.svg' },
        { label: 'PUC Centers', icon: '/Images/puc/puc_center.svg' },
        { label: 'PUC Charges', icon: '/Images/puc/puc_charges.svg' },
        { label: 'Validity Details', icon: '/Images/puc/vlidity  details.svg' },
        { label: 'PUC Guidelines', icon: '/Images/puc/puc_guidelines.svg' },
        { label: 'Help & Support', icon: '/Images/puc/help and support.svg' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center mt-8 sm:mt-10 md:mt-12 py-4"
        >
            <h3 className={`${microgrammaBold.className} text-lg sm:text-xl md:text-[22px] text-[#074c43] mb-6 sm:mb-8 text-center`}>
                Explore Everything About PUC
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5 lg:gap-6 xl:gap-8 w-full px-0 sm:px-2 md:px-4">
                {items.map((item) => {
                    return (
                        <Link
                            key={item.label}
                            href="#"
                            className="flex flex-col items-center justify-center py-5 sm:py-6 px-2 sm:px-4 rounded-2xl border border-gray-200/80 hover:border-[#3fc197] hover:shadow-md transition-all bg-white text-center gap-3 sm:gap-4 group min-h-[120px] sm:h-[140px] shadow-[0_4px_20px_rgba(11,64,47,0.02)]"
                        >
                            <div className="w-8 h-8 sm:w-9 sm:h-9 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src={item.icon}
                                    alt={item.label}
                                    width={36}
                                    height={36}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="font-semibold text-[#074c43] text-[11px] sm:text-xs lg:text-sm leading-tight">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </motion.div>
    );
}
