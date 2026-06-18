"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { microgrammaBold } from "@/lib/fonts";

const faqs = [
  {
    question: "What is Nosu?",
    answer:
      "Nosu is a metabolic health company. We help people make better choices around food and lifestyle to support long-term health and metabolic resilience. Our goal is to support behavior change through tools that work with your biology, not against it.",
  },
  {
    question: "How is Nosu different from other supplements?",
    answer:
      "Nosu focuses on science-backed metabolic support and long-term behavior change.",
  },
  {
    question: "Where are your products made?",
    answer:
      "Our products are manufactured in certified facilities with strict quality controls.",
  },
  {
    question: "How does Nosu support metabolic health?",
    answer:
      "By helping users reduce sugar intake and build sustainable habits.",
  },
];

const leftColumn = [0, 2];
const rightColumn = [1, 3];

function FAQColumn({
  indices,
  openItem,
  onValueChange,
}: {
  indices: number[];
  openItem: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      value={openItem}
      onValueChange={onValueChange}
      className="flex flex-col gap-4"
    >
      {indices.map((index) => {
        const itemValue = `item-${index}`;
        const isOpen = openItem === itemValue;
        const faq = faqs[index];

        return (
          <AccordionItem
            key={itemValue}
            value={itemValue}
            className={`overflow-hidden border-0 transition-[background-color,border-radius] duration-300 ${
              isOpen
                ? "rounded-[30px] bg-white"
                : "min-h-[88px] rounded-[16px] bg-[#266D74] sm:min-h-[120px]"
            }`}
          >
            <AccordionTrigger
              className="
                flex
                w-full
                items-center
                justify-between
                gap-4
                border-0
                px-5
                py-5
                sm:px-8
                sm:py-8
                shadow-none
                outline-none
                hover:no-underline
                focus-visible:ring-0
                focus-visible:border-transparent
                [&::after]:hidden
                [&::before]:hidden
                data-[state=open]:items-start
                data-[state=open]:pb-3
                [&>svg]:hidden
              "
            >
              <span
                className={`flex-1 text-left text-base font-medium leading-snug sm:text-lg ${
                  isOpen ? "text-[#143B38]" : "text-white"
                }`}
              >
                {faq.question}
              </span>
              {!isOpen && (
                <span
                  className="shrink-0 text-2xl font-light leading-none text-white"
                  aria-hidden="true"
                >
                  +
                </span>
              )}
            </AccordionTrigger>

            <AccordionContent className="border-0 px-5 pb-5 pt-0 text-sm leading-relaxed text-[#222222] sm:px-8 sm:pb-8 sm:text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState("");

  return (
    <section className="px-4 py-4 sm:px-6 sm:py-6 md:py-8 bg-white">
      <div className="mx-auto max-w-7xl rounded-2xl bg-[#EAF3EE] p-5 sm:rounded-[24px] sm:p-8 md:rounded-[30px] md:p-10 lg:p-[50px]">
        <p className="mb-3 text-xs text-[#0B4944] sm:mb-4 sm:text-sm">
          Frequently Asked Questions (FAQ)
        </p>

        <h2
          className={`
            ${microgrammaBold.className}
            mb-6
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[48px]
            leading-[1.12]
            text-[#0B4944]
            sm:mb-8
            md:mb-10
          `}
        >
          About Nosu
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          <FAQColumn
            indices={leftColumn}
            openItem={openItem}
            onValueChange={setOpenItem}
          />
          <FAQColumn
            indices={rightColumn}
            openItem={openItem}
            onValueChange={setOpenItem}
          />
        </div>
      </div>
    </section>
  );
}