'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CheckAndVerify() {
    return (
        <section className="w-full py-8 px-4 sm:px-8 md:px-12 xl:px-0">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative w-full max-w-[1300px] mx-auto min-h-[200px] sm:min-h-[300px] overflow-hidden rounded-[28px]"
                style={{ aspectRatio: '1728 / 708' }}
            >
                <Image
                    src="/Images/vehicle-owner/check-verify.png"
                    alt="Check and Verify Vehicle Owner Details"
                    fill
                    className="object-cover object-center"
                />
            </motion.div>
        </section>
    );
}
