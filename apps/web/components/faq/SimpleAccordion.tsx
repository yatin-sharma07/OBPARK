"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface SimpleFaqItem {
  question: string;
  answer: React.ReactNode;
}

interface SimpleAccordionProps {
  items: SimpleFaqItem[];
}

export default function SimpleAccordion({ items }: SimpleAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={`border rounded-[24px] overflow-hidden transition-colors ${
              isOpen ? "border-[#164841]" : "border-[#164841]/30"
            }`}
          >
            <button
              onClick={() => toggleOpen(idx)}
              className="w-full px-5 py-4 text-left flex items-center gap-4 focus:outline-none"
            >
              <div className="flex-shrink-0 text-[#164841] w-4 flex justify-center">
                {isOpen ? (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                )}
              </div>
              <span className="font-medium text-sm md:text-base text-[#164841]">
                {item.question}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-1 pl-12 text-[#2F6158] text-sm md:text-base">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
