'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { microgrammaBold } from '@/lib/fonts';

const faqs = [
  {
    question: 'Real-Time Occupancy',
    answer:
      'Live space tracking with 99.2% accuracy, updated every 2 seconds via IoT sensors and computer vision.',
  },
  {
    question: 'AR Navigation',
    answer:
      'Indoor wayfinding that guides customers with spatial precision, reducing parking time from 15 minutes to 2 minutes.',
  },
  {
    question: 'Digital Twins',
    answer:
      '3D virtual replicas of facilities synced in real-time, enabling predictive modeling and operational optimization.',
  },
  {
    question: 'AI Analytics',
    answer:
      'Predictive demand modeling, revenue optimization, and operational recommendations driven by machine learning.',
  },
  {
    question: 'Services Marketplace',
    answer:
      'In-app vehicle services including car wash, fuel, EV charging, and insurance that generate $250K-400K annual commission.',
  },
  {
    question: 'Facility Operations',
    answer:
      'Unified command center for pricing, enforcement, staff management, and security integration.',
  },
];

const leftColumn = [0, 2, 4];
const rightColumn = [1, 3, 5];

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
      className="flex w-full flex-col gap-4"
    >
      {indices.map((index) => {
        const itemValue = `item-${index}`;
        const isOpen = openItem === itemValue;
        const faq = faqs[index];

        return (
          <AccordionItem
            key={itemValue}
            value={itemValue}
            className={`w-full overflow-hidden border-0 transition-[background-color,border-radius] duration-300 ${isOpen
                ? 'rounded-[24px] bg-white'
                : 'min-h-[64px] rounded-[10px] bg-[#266D74] sm:min-h-[64px]'
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
                px-6
                py-4
                sm:px-8
                sm:py-5
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
                className={`flex-1 text-left text-base font-medium leading-snug sm:text-lg ${isOpen ? 'text-[#143B38]' : 'text-white'
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

            <AccordionContent className="border-0 px-6 pb-5 pt-0 text-sm leading-relaxed text-[#222222] sm:px-8 sm:pb-6 sm:text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState('');

  return (
    <section className="w-full bg-white px-4 py-4 sm:px-6 sm:py-6 md:py-8">
      <div className="w-full rounded-2xl bg-[#EAF3EE] p-5 sm:rounded-[24px] sm:p-8 md:rounded-[30px] md:p-10 lg:p-[50px]">
        <p className="mb-5 text-sm text-[#0B4944] sm:text-base">
          What We Build
        </p>

        <h2
          className={`
            ${microgrammaBold.className}
            mb-8
            text-3xl
            leading-[1.12]
            text-[#0B4944]
            sm:text-[30px]            md:text-[36px]
            lg:text-[40px]
            md:mb-10
          `}
        >
          About OBPARK
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:gap-10">
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