"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqSectionProps {
  subtitle: string;
  title: string;
  faqs: FaqItem[];
}

export default function FaqSection({
  subtitle,
  title,
  faqs,
}: FaqSectionProps) {
  // First FAQ is open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const half = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, half).map((faq, i) => ({ faq, index: i }));
  const rightColumn = faqs.slice(half).map((faq, i) => ({ faq, index: i + half }));

  const renderFaqCard = (faq: FaqItem, idx: number) => {
    const isOpen = openIndex === idx;

    return (
      <div
        key={idx}
        className={`rounded-2xl overflow-hidden transition-colors border shadow-sm ${
          isOpen
            ? "bg-white text-[#164841] border-transparent"
            : "bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-white/30"
        }`}
      >
        <button
          onClick={() => toggleOpen(idx)}
          className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        >
          <span className={`font-semibold text-base md:text-lg pr-4 ${isOpen ? "text-[#164841]" : "text-white"}`}>
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className={`flex-shrink-0 ${isOpen ? "text-[#164841]" : "text-white"}`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 pb-6 text-[#1F5F56] text-sm md:text-base leading-relaxed space-y-4">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="w-full py-12 md:py-16 px-6 md:px-12 bg-gradient-to-r from-[#59D0B5] to-[#CAEDE5] rounded-[2rem] overflow-hidden relative shadow-sm border border-white/30">
      <div className="w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 text-white">
          <p className="text-sm md:text-base font-medium font-serif opacity-90 mb-2">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
        </div>

        {/* Content Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col gap-6">
            {leftColumn.map(({ faq, index }) => renderFaqCard(faq, index))}
          </div>
          <div className="flex flex-col gap-6">
            {rightColumn.map(({ faq, index }) => renderFaqCard(faq, index))}
          </div>
        </div>
      </div>
    </section>
  );
}
