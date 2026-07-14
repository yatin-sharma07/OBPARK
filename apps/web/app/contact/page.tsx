"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  MessageCircle,
  UserCheck,
  Zap,
  ShieldCheck,
  ChevronDown,
  HeadphonesIcon,
  ChevronRight
} from "lucide-react";

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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

  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer: "Our standard response time is within 24 hours during business days. For urgent inquiries, please try our Live Chat or WhatsApp.",
    },
    {
      question: "What information should I include in my message?",
      answer: "Please include your order number (if applicable), full name, and a detailed description of your inquiry so we can help you as efficiently as possible.",
    },
    {
      question: "Do you provide product demos?",
      answer: "Yes, we do! Please reach out to our sales team to schedule a comprehensive product demonstration.",
    },
    {
      question: "Can I schedule a call with your team?",
      answer: "Absolutely. You can request a callback by leaving your phone number and preferred time in our contact form or via email.",
    },
    {
      question: "Is my information secure?",
      answer: "Yes, your data and privacy are always safe with us. We use industry-standard encryption and never share your information with third parties.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. Hero Banner with Contact Form */}
      <div className="px-3 sm:px-4 md:px-6 pt-24 pb-4">
        <div className="mx-auto max-w-[2000px]">
          <section className="w-full h-[calc(100vh-120px)] bg-[#094639] rounded-[28px] flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-20 overflow-hidden relative shadow-[0_12px_30px_rgba(7,76,67,0.08)]">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 text-white z-10 mb-12 lg:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#A2C7BC] text-lg md:text-xl max-w-lg mb-8"
            >
              Have a question, feedback, or need assistance? Fill out the form and our team will get back to you within 24 hours.
            </motion.p>
          </div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-[450px] bg-white rounded-3xl p-6 md:p-8 shadow-2xl z-10"
          >
            <h3 className="text-2xl font-bold text-[#094639] mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#094639]/20 focus:border-[#094639] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#094639]/20 focus:border-[#094639] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#094639]/20 focus:border-[#094639] transition-colors resize-none"></textarea>
              </div>
              <button type="button" className="w-full bg-[#094639] text-white font-bold py-4 rounded-xl hover:bg-[#07362c] transition-colors mt-2">
                Submit Message
              </button>
            </form>
          </motion.div>

          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#59D0B5]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
          </section>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#094639]">
              Ways to Connect With Us
            </h2>
          </motion.div>

          {/* 5-Column Contact Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
            
            {/* Call Us */}
            <div className="flex flex-col items-center text-center p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#E5F5F0] text-[#094639] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-[#094639] mb-3">Call Us</h3>
              <p className="text-sm font-semibold text-gray-700">+91 98765 43210</p>
              <p className="text-xs text-gray-500 mt-1">(Mon - Sat, 9AM - 7PM)</p>
            </div>

            {/* Email Us */}
            <div className="flex flex-col items-center text-center p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#E5F5F0] text-[#094639] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-[#094639] mb-3">Email Us</h3>
              <p className="text-sm font-semibold text-gray-700">support@obpark.com</p>
              <p className="text-xs text-gray-500 mt-1">We reply within 24 hrs</p>
            </div>

            {/* Live Chat */}
            <div className="flex flex-col items-center text-center p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#E5F5F0] text-[#094639] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-[#094639] mb-3">Live Chat</h3>
              <p className="text-sm font-semibold text-gray-700">Chat with our support team</p>
              <p className="text-xs text-gray-500 mt-1">Available on website</p>
            </div>

            {/* Visit Us */}
            <div className="flex flex-col items-center text-center p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#E5F5F0] text-[#094639] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-[#094639] mb-3">Visit Us</h3>
              <p className="text-sm font-semibold text-gray-700">Bangalore, Karnataka, India</p>
              <p className="text-xs text-gray-500 mt-1">560001</p>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center text-center p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#E5F5F0] text-[#094639] flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-[#094639] mb-3">WhatsApp</h3>
              <p className="text-sm font-semibold text-gray-700">+91 98765 43210</p>
              <p className="text-xs text-gray-500 mt-1">(Mon - Sat, 9AM - 7PM)</p>
            </div>

          </motion.div>

          {/* 2-Column Bottom Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left: Help Card */}
            <motion.div variants={itemVariants} className="bg-[#094639] text-white rounded-[2rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">We're Here to Help You</h2>
              <p className="text-[#A2C7BC] font-medium mb-10 max-w-md">
                Our team is available to assist you with any questions or support you may need.
              </p>

              <div className="space-y-8 relative z-10">
                {/* Feature 1 */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Reliable Support</h3>
                    <p className="text-[#A2C7BC] text-sm">Get help from our expert team.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Fast Solutions</h3>
                    <p className="text-[#A2C7BC] text-sm">We provide quick and effective solutions.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Secure & Trusted</h3>
                    <p className="text-[#A2C7BC] text-sm">Your data and privacy are always safe with us.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: FAQ Card */}
            <motion.div variants={itemVariants} className="bg-[#F8F9F9] rounded-[2rem] p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#094639] mb-8">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-3 mb-10">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;

                    return (
                      <div 
                        key={idx}
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all shadow-sm"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                        >
                          <span className="font-bold text-[#094639] text-[15px]">{faq.question}</span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[#094639] ml-4 flex-shrink-0"
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Chat With Us Footer */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-gray-200 gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-[#094639]">
                    <HeadphonesIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#094639] text-sm md:text-base">Still have questions?</h4>
                    <p className="text-gray-500 text-xs md:text-sm font-medium mt-0.5">Our support team is just a message away.</p>
                  </div>
                </div>
                <button className="bg-white text-[#094639] font-bold text-sm px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center gap-2 flex-shrink-0">
                  Chat With Us
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>

          </div>
        </motion.div>
      </section>

    </main>
  );
}
