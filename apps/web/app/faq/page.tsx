"use client";

import { motion, Variants } from "framer-motion";
import FaqSection, { FaqItem } from "@/components/faq/FaqSection";

const aboutNosuFaqs: FaqItem[] = [
  {
    question: "What is Nosu?",
    answer: (
      <p>
        Nosu is a metabolic health company. We help people make better choices
        around food and lifestyle to support long-term health and metabolic
        resilience. Our goal is to support behavior change through tools that
        work with your biology, not against it.
      </p>
    ),
  },
  {
    question: "How is Nosu different from other supplements?",
    answer: "Unlike typical quick fixes, Nosu products are formulated with scientifically backed ingredients designed to support long-term metabolic health and behavior change.",
  },
  {
    question: "Where are your products made?",
    answer: "Our products are manufactured in certified facilities that adhere to strict quality and safety standards, ensuring you receive the best possible ingredients.",
  },
  {
    question: "How does Nosu support metabolic health?",
    answer: "We provide tools that work with your biology, not against it, helping you manage cravings, balance blood sugar, and make better lifestyle choices.",
  },
];

const sweetShieldFaqs: FaqItem[] = [
  {
    question: "What is Sweet Shield?",
    answer: (
      <p>
        Sweet Shield is Nosu's flagship pre-meal supplement. It reduces sugar
        cravings, limits sugar absorption, and supports healthy blood sugar
        balance. It's made with plant-based, well-researched ingredients:
        Gymnema sylvestre, quercetin, and jujube extract.
      </p>
    ),
  },
  {
    question: "What's inside Sweet Shield?",
    answer: "Sweet Shield features powerful plant-based, well-researched ingredients like Gymnema sylvestre, quercetin, and jujube extract.",
  },
  {
    question: "Is Sweet Shield vegan, gluten-free, and non-GMO?",
    answer: "Yes, it is 100% vegan, gluten-free, and non-GMO.",
  },
  {
    question: "Does Sweet Shield contain caffeine or stimulants?",
    answer: "No. It is completely stimulant-free.",
  },
  {
    question: "Is Sweet Shield safe?",
    answer: "Yes. It's made with high-quality, natural ingredients that are backed by research. If you're pregnant, breastfeeding, or taking medications, consult your healthcare provider before use.",
  },
  {
    question: "Is there research behind Sweet Shield?",
    answer: "Yes. Each ingredient is supported by peer-reviewed studies related to glucose metabolism, sugar absorption, and insulin sensitivity.",
  },
  {
    question: "How does Sweet Shield work?",
    answer: "It temporarily blocks sweet taste receptors to reduce cravings and interacts with sugar transporters in the gut to reduce absorption of glucose.",
  },
  {
    question: "Will Sweet Shield change how sweet things taste?",
    answer: "Yes. When dissolved in the mouth, it temporarily reduces sweetness perception, making sugary foods less appealing for about 1 hour.",
  },
  {
    question: "Will food still taste good with Sweet Shield?",
    answer: "Yes. Only overly sweet foods are affected. Savory, spicy, sour, and fresh foods still taste great.",
  },
  {
    question: "How quickly does Sweet Shield work?",
    answer: "It starts working within 5 minutes, ideal before meals with sugar or refined carbs.",
  },
  {
    question: "How do I take Sweet Shield?",
    answer: "Take 2 capsules about 20 minutes before meals high in sugar or refined carbs.",
  },
  {
    question: "Can I take Sweet Shield every day?",
    answer: "Yes. It's safe for daily use.",
  },
  {
    question: "Can I use Sweet Shield occasionally?",
    answer: "Absolutely. Sweet Shield can be taken only when needed, such as before events with tempting food.",
  },
];

const shippingFaqs: FaqItem[] = [
  {
    question: "How long does shipping take, and when will my order be dispatched?",
    answer: (
      <p>
        Orders are processed within 1-2 business days. Shipping time starts
        after processing and depends on your location and selected shipping
        method (Economy or Express). For our shipping time estimations, see
        our shipping policy.
      </p>
    ),
  },
  {
    question: "Do you ship internationally, and what are the costs?",
    answer: "Yes, we ship worldwide. Shipping costs are calculated at checkout based on your location and chosen delivery speed.",
  },
  {
    question: "Can I track my order?",
    answer: "Absolutely. You'll receive a tracking link via email once your order has been shipped.",
  },
  {
    question: "What if my package is delayed, lost, or damaged?",
    answer: "If your package hasn't arrived within the estimated timeframe or appears lost or damaged, please contact us at support and we'll help resolve it quickly.",
  },
  {
    question: "Will I have to pay customs duties or taxes?",
    answer: "Depending on your country's regulations, customs fees may apply. These are the responsibility of the customer and are not included in our shipping charges.",
  },
];

const returningFaqs: FaqItem[] = [
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

const paymentFaqs: FaqItem[] = [
  {
    question: "Accepted payment methods and currencies",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>Accepted payment methods</strong>
          <br />
          We process all payments securely through our trusted payment partner.
        </p>
        <p>
          At checkout, you can choose from a wide range of options, including:
          <br />
          Credit & Debit Cards: Visa, Mastercard, American Express, Maestro
          <br />
          Digital Wallets: Apple Pay, PayPal
          <br />
          Local Payment Methods: iDEAL, Klarna, Bancontact, SEPA Bank Transfer
        </p>
        <p>
          <strong>Accepted currencies</strong>
          <br />
          We accept payments in most local currencies of countries we ship to.
        </p>
      </div>
    ),
  },
  {
    question: "Refund & return payments",
    answer: "Approved refunds are processed back to the original payment method used during checkout within 5-10 business days depending on your bank.",
  },
  {
    question: "Subscription payments",
    answer: "Your subscription renews automatically on the same day each cycle until you decide to pause or cancel. You can pause or cancel anytime.",
  },
  {
    question: "When am I charged?",
    answer: "One-time orders: You're charged immediately when you complete checkout. Subscriptions: Your first payment is taken when you sign up.",
  },
  {
    question: "Payment security & privacy",
    answer: "Your details are encrypted and never stored. Whether you place a one-time order or start a subscription, you'll always have a safe and seamless payment experience.",
  },
];

export default function FaqPage() {
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
    <main className="min-h-screen pt-32 md:pt-44 pb-16 bg-[#F2FAF6]">
      
      {/* Global Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-16 md:mb-20"
      >
        <p className="text-[#2F6158] font-serif text-xl md:text-2xl mb-3">Nosu Support</p>
        <h1 className="text-[#164841] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Frequently Asked Questions (FAQ)
        </h1>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8 px-4 md:px-10 lg:px-16 w-full max-w-[1700px] mx-auto"
      >
        {/* 1. About Nosu */}
        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection
            subtitle="Frequently Asked Questions (FAQ)"
            title="About Nosu"
            faqs={aboutNosuFaqs}
          />
        </motion.div>

        {/* 2. About Sweet-Shield */}
        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection
            subtitle="Frequently Asked Questions (FAQ)"
            title="About Sweet-Shield"
            faqs={sweetShieldFaqs}
          />
        </motion.div>

        {/* 3. Shipping */}
        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection
            subtitle="Frequently Asked Questions (FAQ)"
            title="Nosu general shipping questions"
            faqs={shippingFaqs}
          />
        </motion.div>

        {/* 4. Returns */}
        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection
            subtitle="Frequently Asked Questions (FAQ)"
            title="Returning your Nosu order"
            faqs={returningFaqs}
          />
        </motion.div>

        {/* 5. Payments */}
        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection
            subtitle="Frequently Asked Questions (FAQ)"
            title="Payment information"
            faqs={paymentFaqs}
          />
        </motion.div>

      </motion.div>
    </main>
  );
}
