"use client";

import { motion, Variants } from "framer-motion";
import FaqSection, { FaqItem } from "@/components/faq/FaqSection";

const refundFaqs: FaqItem[] = [
  {
    question: "Can I cancel my order?",
    answer: (
      <p>
        If you have regrets regarding your purchase, you can reach out to us at:
        support@nosuhealth.com to request your order to be cancelled only if your
        order has not yet been dispatched. After the order has been shipped by us,
        the order cannot be cancelled. Customers can opt to start the refund
        process after receiving the goods in their order.
      </p>
    ),
  },
  {
    question: "Can I return my order?",
    answer: (
      <div className="space-y-4">
        <p>
          We hope you're loving your Nosu products! But if something's not
          quite right, we totally understand that you might want to return it.
        </p>
        <p>
          If you're not 100% happy, you can return your order within 14 days
          of receiving it. Just reach out to our support team at
          support@nosuhealth.com and we will get into the further details.
          We're here to help and always aim to make things right.
        </p>
        <p>Your satisfaction is part of our mission.</p>
      </div>
    ),
  },
  {
    question: "What are the conditions of returning an order?",
    answer: <p>Detailed conditions for returning an order will go here.</p>,
  },
  {
    question: "I do not meet the requirements for a refund, what now?",
    answer: <p>Information on what to do if requirements are not met will go here.</p>,
  },
  {
    question: "What should I do if my product is damaged?",
    answer: "Sometimes things get a little bumpy in transit. If your product arrives damaged, let us know within a week and we'll make it right.",
  },
  {
    question: "How will my refund payment be arranged?",
    answer: "Once your return is received and inspected, your refund will be processed, and a credit will automatically be applied to your original method of payment.",
  },
  {
    question: "Return shipping costs",
    answer: "You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.",
  },
];

export default function RefundPolicyPage() {
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
        <p className="text-[#2F6158] font-serif text-xl md:text-2xl mb-3">Legal Links</p>
        <h1 className="text-[#164841] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Refund and Returns Policy
        </h1>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-12 px-4 md:px-10 lg:px-16 w-full max-w-[1700px] mx-auto"
      >
        {/* Refund Policy Questions */}
        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection
            subtitle=""
            title="Returning your Nosu order"
            faqs={refundFaqs}
          />
        </motion.div>

      </motion.div>
    </main>
  );
}
