'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CheckAndVerify() {
    return (
        <section className="w-full py-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative w-full min-h-[200px] sm:min-h-[300px]"
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
