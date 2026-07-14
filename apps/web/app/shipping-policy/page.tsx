"use client";

import { motion, Variants } from "framer-motion";
import { FaqItem } from "@/components/faq/FaqSection";
import FaqSection from "@/components/faq/FaqSection";
import SimpleAccordion, { SimpleFaqItem } from "@/components/faq/SimpleAccordion";

const generalShippingFaqs: FaqItem[] = [
  {
    question: "How long does shipping take, and when will my order be dispatched?",
    answer: (
      <p>
        Orders are processed within 1-2 business days. Shipping time starts
        after processing and depends on your location and selected shipping
        method (Economy or Express). For our shipping time estimations, see
        below.
      </p>
    ),
  },
  {
    question: "What if my package is delayed, lost, or damaged?",
    answer: (
      <p>
        Sometimes things get a little bumpy in transit. If your product arrives
        damaged or is lost, let us know within a week and we'll make it right.
      </p>
    ),
  },
  {
    question: "Will I have to pay customs duties or taxes?",
    answer: (
      <p>
        Non-EU orders may incur customs duties, VAT, or other fees depending on
        your local regulations. These are the responsibility of the customer.
      </p>
    ),
  },
  {
    question: "Do you ship internationally, and what are the costs?",
    answer: (
      <p>
        Yes, we ship worldwide. Shipping costs are calculated at checkout based
        on your location and chosen delivery speed.
      </p>
    ),
  },
  {
    question: "Can I track my order?",
    answer: (
      <p>
        Yes! Once your order has been dispatched, you will receive an email with
        tracking information.
      </p>
    ),
  },
];

const shippingTimesFaqs: FaqItem[] = [
  {
    question: "BeNeLux",
    answer: (
      <div className="space-y-4 text-sm md:text-base">
        <div>
          <strong>Netherlands:</strong>
          <br />
          • Economy: 1 day (PostNL)
        </div>
        <div>
          <strong>Belgium:</strong>
          <br />
          • Economy: 1-2 days (GLS Parcel)
          <br />
          • Express: ~1 day (DHL Express)
        </div>
        <div>
          <strong>Luxembourg:</strong>
          <br />
          • Economy: 2-5 days
          <br />
          • Express: 1 day (DPD Parcel)
        </div>
      </div>
    ),
  },
  {
    question: "Germany",
    answer: <p>Detailed shipping times for Germany will go here.</p>,
  },
  {
    question: "European Union (EU)",
    answer: <p>Detailed shipping times for the EU will go here.</p>,
  },
  {
    question: "Rest of Europe (non-EU)",
    answer: <p>Detailed shipping times for non-EU will go here.</p>,
  },
  {
    question: "North America",
    answer: <p>Detailed shipping times for North America will go here.</p>,
  },
  {
    question: "Asia & Oceania",
    answer: <p>Detailed shipping times for Asia & Oceania will go here.</p>,
  },
  {
    question: "Middle-East & Central Asia",
    answer: <p>Detailed shipping times for Middle-East & Central Asia will go here.</p>,
  },
  {
    question: "Africa",
    answer: <p>Detailed shipping times for Africa will go here.</p>,
  },
];

const costCalculationFaqs: SimpleFaqItem[] = [
  {
    question: "Subscriptions",
    answer: <p>Subscriptions receive complimentary FREE economy shipping.</p>,
  },
  {
    question: "Orders delivered within The Netherlands",
    answer: <p>Detailed cost info for The Netherlands will go here.</p>,
  },
  {
    question: "Orders delivered within Europe*",
    answer: <p>Detailed cost info for Europe will go here.</p>,
  },
  {
    question: "Orders delivered to the USA, Canada, Australia, New-Zealand, South Africa, and Israel",
    answer: <p>Detailed cost info for these regions will go here.</p>,
  },
  {
    question: "Orders delivered to the rest of the world",
    answer: <p>Detailed cost info for the rest of the world will go here.</p>,
  },
];

export default function ShippingPolicyPage() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen pt-32 md:pt-44 pb-20 bg-[#F2FAF6]">
      
      {/* Global Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <p className="text-[#2F6158] font-serif text-xl md:text-2xl mb-3">Nosu Support</p>
        <h1 className="text-[#164841] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Shipping Policy
        </h1>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-12 px-4 md:px-10 lg:px-16 w-full max-w-[1700px] mx-auto"
      >
        
        {/* Shipping Overview Text Block */}
        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }} className="max-w-[1000px] mx-auto text-[#164841]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Shipping Overview</h2>
          <div className="space-y-4 text-sm md:text-base font-medium">
            <p>
              At Nosu, we ship worldwide via our fulfillment partner. Shipping prices are calculated at checkout based on your location and shipping method (Economy or Express). Below is a full overview of estimated delivery times for both Economy and Express shipping options for a standard 0.5 kg letterbox parcel.
            </p>
            <p>
              <strong>Order Cutoff Time:</strong> Orders placed before 17:00 (CET) on business days are shipped same day. Orders placed after the cutoff or during the weekend are shipped the next working day.
            </p>
            <p>
              <strong>Note:</strong> the delivery times listed below represent shipping durations only. Orders are first processed by our team within 1 to 2 business days, depending on when the order is placed in relation to our 17:00 CET cut-off. After processing, parcels are shipped via our trusted fulfilment partner using the methods and timelines indicated below.
            </p>
          </div>
        </motion.div>

        {/* 1. General Shipping Questions */}
        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection
            subtitle=""
            title="Nosu general shipping questions"
            faqs={generalShippingFaqs}
          />
        </motion.div>

        {/* 2. Shipping Times by Region */}
        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection
            subtitle=""
            title="Nosu shipping times by region and country"
            faqs={shippingTimesFaqs}
          />
        </motion.div>

        {/* 3. Shipping Cost Calculation */}
        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }} className="max-w-[1000px] mx-auto w-full pt-10 text-[#164841]">
          <p className="text-sm md:text-base mb-6 font-medium">
            Please note that all delivery times are estimated and not guaranteed. Delays may occur due to local postal conditions, customs procedures, peak periods, or force majeure events. Nosu is not liable for delays once a parcel has been handed over to the shipping carrier.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Shipping cost calculation</h2>
          <p className="text-sm md:text-base font-medium mb-8">
            Shipping costs are calculated at checkout based on your location and shipping method. Prices vary by destination.
          </p>

          <SimpleAccordion items={costCalculationFaqs} />

          <p className="text-sm md:text-base mt-6 font-medium">
            Non-EU orders may incur customs duties, VAT, or other fees.
          </p>
        </motion.div>

      </motion.div>
    </main>
  );
}
