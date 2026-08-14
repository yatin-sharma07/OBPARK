"use client";

import { motion, Variants } from "framer-motion";
import FaqSection, { FaqItem } from "@/components/faq/FaqSection";

const generalFaqs: FaqItem[] = [
  {
    question: "What is OBPARK?",
    answer: "OBPARK is a smart parking and indoor navigation platform that helps users discover, reserve, navigate to, and manage parking spaces through a web platform and mobile application."
  },
  {
    question: "Where is OBPARK available?",
    answer: "OBPARK is expanding across India through partnerships with commercial buildings, shopping malls, hospitals, airports, residential communities, corporate campuses, and parking operators. Availability varies by location."
  },
  {
    question: "Do I need to create an account?",
    answer: "Some features may be available without registration, but creating an account allows you to make reservations, manage bookings, receive updates, and access personalized services."
  },
  {
    question: "Is OBPARK free to use?",
    answer: "Creating an account is free. Parking charges, premium subscriptions, convenience fees, or partner-specific pricing may apply depending on the location and services selected."
  }
];

const parkingReservationsFaqs: FaqItem[] = [
  {
    question: "How do I book a parking space?",
    answer: "Search for your destination, select an available parking location, choose your preferred date and time (where applicable), and confirm your booking."
  },
  {
    question: "Can I reserve parking in advance?",
    answer: "Yes. Many participating parking locations allow advance reservations."
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, subject to the cancellation policy of the parking location. Refund eligibility depends on the partner's terms and the time of cancellation."
  },
  {
    question: "What happens if I arrive late?",
    answer: "Some parking providers offer a grace period, while others may release your reservation after the scheduled arrival time. Check the booking details for location-specific policies."
  },
  {
    question: "Can I extend my parking duration?",
    answer: "If additional space is available, you may extend your booking directly through the platform."
  },
  {
    question: "What if the parking facility is full when I arrive?",
    answer: "If you have a confirmed reservation, your space should be available according to the booking terms. If you experience any issue, contact customer support immediately."
  }
];

const navigationFaqs: FaqItem[] = [
  {
    question: "Does OBPARK provide indoor navigation?",
    answer: "Yes. At supported locations, OBPARK provides indoor navigation to help users find parking spaces, entrances, exits, elevators, and other important destinations."
  },
  {
    question: "Do I need GPS for indoor navigation?",
    answer: "Indoor navigation may use GPS, Bluetooth beacons, QR codes, Wi-Fi positioning, sensors, or other supported technologies depending on the location."
  },
  {
    question: "Will navigation work underground?",
    answer: "Indoor positioning technologies are designed to support navigation in environments where GPS signals may be limited."
  }
];

const paymentsFaqs: FaqItem[] = [
  {
    question: "Which payment methods are accepted?",
    answer: "Supported payment methods may include UPI, debit cards, credit cards, net banking, digital wallets, and other payment options made available through our payment partners."
  },
  {
    question: "Is online payment secure?",
    answer: "Yes. Payments are processed through secure payment gateways using industry-standard encryption."
  },
  {
    question: "Will I receive an invoice?",
    answer: "Yes. Digital receipts and invoices are available after successful payment."
  },
  {
    question: "Can I pay at the parking location?",
    answer: "Some locations support on-site payments, while others require online payment. Available payment options will be displayed before booking."
  }
];

const accountManagementFaqs: FaqItem[] = [
  {
    question: "How do I create an account?",
    answer: "You can register using your mobile number, email address, or other supported authentication methods."
  },
  {
    question: "I forgot my password. What should I do?",
    answer: 'Use the "Forgot Password" option on the login page to reset your password.'
  },
  {
    question: "Can I change my registered mobile number or email?",
    answer: "Yes. You can update your profile information through your account settings."
  },
  {
    question: "Can I delete my account?",
    answer: "Yes. You may request account deletion through your profile settings or by contacting customer support. Certain records may be retained where required by law."
  }
];

const vehiclesFaqs: FaqItem[] = [
  {
    question: "Can I register multiple vehicles?",
    answer: "Yes. You can add and manage multiple vehicles under a single account."
  },
  {
    question: "Can I edit my vehicle information?",
    answer: "Yes. Vehicle details can be updated anytime from your account."
  },
  {
    question: "What if I enter the wrong vehicle number?",
    answer: "Please update the information before your booking begins. Incorrect details may affect access to the parking facility."
  }
];

const subscriptionsFaqs: FaqItem[] = [
  {
    question: "Does OBPARK offer subscription plans?",
    answer: "Yes. Premium plans may provide additional benefits such as discounted parking, priority access, exclusive offers, and enhanced platform features."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes. Subscription cancellation policies are described in our Subscription Terms."
  },
  {
    question: "Are subscriptions automatically renewed?",
    answer: "Some subscription plans renew automatically unless cancelled before the renewal date."
  }
];

const parkingPartnersFaqs: FaqItem[] = [
  {
    question: "How can I list my parking facility on OBPARK?",
    answer: "Parking operators can apply through our Partner Registration page or contact our business development team."
  },
  {
    question: "Who can become a parking partner?",
    answer: "Commercial buildings, malls, hospitals, hotels, airports, residential communities, educational institutions, and independent parking operators are eligible, subject to approval."
  },
  {
    question: "Does OBPARK provide a management dashboard?",
    answer: "Yes. Approved partners receive access to dashboards for managing availability, bookings, reports, pricing, and operational insights."
  }
];

const propertyOwnersFaqs: FaqItem[] = [
  {
    question: "Can OBPARK be integrated into our property?",
    answer: "Yes. OBPARK provides solutions for commercial buildings, mixed-use developments, corporate campuses, smart cities, and enterprise parking environments."
  },
  {
    question: "Does OBPARK support custom branding?",
    answer: "Enterprise customers may have access to white-label or customized deployment options based on business requirements."
  },
  {
    question: "Does OBPARK provide APIs?",
    answer: "Yes. API integrations may be available for approved enterprise customers and technology partners."
  }
];

const privacySecurityFaqs: FaqItem[] = [
  {
    question: "How is my personal information protected?",
    answer: "We implement appropriate technical and organizational safeguards to protect user information from unauthorized access, disclosure, alteration, or destruction."
  },
  {
    question: "Does OBPARK collect location data?",
    answer: "Location information may be collected only when required to provide navigation, parking discovery, and related services, subject to your permissions."
  },
  {
    question: "Will my payment details be stored?",
    answer: "Sensitive payment information is handled securely through certified payment service providers. OBPARK does not store complete payment card details."
  },
  {
    question: "Can I request deletion of my personal data?",
    answer: "Yes. You may submit a request through our Privacy Policy or contact our support team."
  }
];

const technicalSupportFaqs: FaqItem[] = [
  {
    question: "The app is not working. What should I do?",
    answer: "Ensure you are using the latest version of the application, verify your internet connection, and restart the app. If the issue continues, contact support."
  },
  {
    question: "I cannot receive the OTP.",
    answer: "Verify that your mobile number is correct, check your network connection, wait a few minutes, and request another OTP if necessary."
  },
  {
    question: "The payment failed but money was deducted.",
    answer: "Most failed transactions are automatically reversed by your bank or payment provider. If the issue persists, contact our support team with your transaction details."
  }
];

const legalFaqs: FaqItem[] = [
  {
    question: "Where can I read your Privacy Policy?",
    answer: "Our Privacy Policy is available in the Legal Center and explains how personal information is collected, used, and protected."
  },
  {
    question: "Where can I find your Terms of Service?",
    answer: "Our Terms of Service are available in the Legal Center and apply to all users of the OBPARK platform."
  },
  {
    question: "How can I report misuse or abuse?",
    answer: "You can report suspicious activity, fraud, or policy violations by contacting our support team."
  }
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
        className="text-center mb-16 md:mb-20 px-4"
      >
        <p className="text-[#2F6158] font-serif text-xl md:text-2xl mb-3">OBPARK Help Center</p>
        <h1 className="text-[#164841] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="max-w-3xl mx-auto text-left md:text-center text-[#164841] font-medium leading-relaxed">
          <p className="mb-2 text-sm md:text-base opacity-75">Last Updated: July 15, 2026</p>
          <p className="text-sm md:text-base">
            Welcome to the OBPARK Help Center. This FAQ answers the most common questions about our platform, including parking reservations, navigation, subscriptions, payments, account management, and partner services. If you can't find what you're looking for, please contact our support team.
          </p>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8 px-4 md:px-10 lg:px-16 w-full max-w-[1700px] mx-auto"
      >
        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection subtitle="" title="General" faqs={generalFaqs} />
        </motion.div>

        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection subtitle="" title="Parking Reservations" faqs={parkingReservationsFaqs} />
        </motion.div>

        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection subtitle="" title="Navigation" faqs={navigationFaqs} />
        </motion.div>

        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection subtitle="" title="Payments" faqs={paymentsFaqs} />
        </motion.div>

        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection subtitle="" title="Account Management" faqs={accountManagementFaqs} />
        </motion.div>

        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection subtitle="" title="Vehicles" faqs={vehiclesFaqs} />
        </motion.div>

        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection subtitle="" title="Subscriptions" faqs={subscriptionsFaqs} />
        </motion.div>

        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection subtitle="" title="Parking Partners" faqs={parkingPartnersFaqs} />
        </motion.div>

        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection subtitle="" title="Property Owners & Enterprises" faqs={propertyOwnersFaqs} />
        </motion.div>

        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection subtitle="" title="Privacy & Security" faqs={privacySecurityFaqs} />
        </motion.div>

        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection subtitle="" title="Technical Support" faqs={technicalSupportFaqs} />
        </motion.div>

        <motion.div variants={itemVariants} viewport={{ once: true, margin: "-100px" }}>
          <FaqSection subtitle="" title="Legal" faqs={legalFaqs} />
        </motion.div>

      </motion.div>
    </main>
  );
}
