'use client';

import { microgrammaBold } from '@/lib/fonts';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function WhyChoose() {
  const points = [
    'Lower Infrastructure Costs?',
    'Faster Deployment?',
    'Better Customer Experience?',
    'Higher Revenue Potential?',
    'Enterprise Scalability?',
    'Sustainability & Smart Cities?',
  ];

  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: 'linear-gradient(135deg, #A6DEC7 0%, #1C8182 100%)',
        }}
        className="w-full rounded-[24px] sm:rounded-[32px] py-16 sm:py-24 md:py-32 px-6 sm:px-12 md:px-16 flex flex-col items-center justify-center gap-8 shadow-xl border border-white/20 text-white"
      >
        <h2
          className={`
            ${microgrammaBold.className}
            text-lg sm:text-2xl md:text-[28px] lg:text-[32px]
            font-bold text-center tracking-wide
          `}
        >
          <ScrollReveal as="span" text="Why Organisations Choose OBPARK ?" />
        </h2>

        <div 
          className="flex flex-col items-center gap-4 sm:gap-5 text-center text-[13px] sm:text-[15px] md:text-[17px] opacity-90 font-medium"
          style={{ fontFamily: 'var(--font-michroma)' }}
        >
          {points.map((point, index) => (
            <ScrollReveal key={index} as="p" text={point} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
