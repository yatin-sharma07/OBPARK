'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

export function FastagFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Is FASTag mandatory?',
      a: 'Yes, as per Government of India guidelines, FASTag is mandatory for all private and commercial vehicles across all national highway toll plazas.',
    },
    {
      q: 'How can I check my FASTag balance?',
      a: 'You can easily check your balance on this page by entering your Vehicle Registration Number (VRN) and clicking "Check FASTag".',
    },
    {
      q: 'What are the charges for a new FASTag?',
      a: 'The charges include a one-time tag issuance fee, a refundable security deposit depending on the vehicle type, and a minimum recharge amount.',
    },
    {
      q: 'How long is the FASTag valid?',
      a: 'A FASTag has a validity of 5 years. However, you need to recharge or top up as per your usage requirement.',
    },
    {
      q: 'What if my FASTag is damaged?',
      a: 'If your tag is damaged, you can request a replacement tag from your issuing bank by paying a nominal replacement fee.',
    },
    {
      q: 'Can I use one FASTag for two vehicles?',
      a: 'No, each FASTag is linked to a specific vehicle registration number. You must purchase separate FASTags for different vehicles.',
    },
  ]

  const toggle = (idx: number) => {
    if (openIndex === idx) setOpenIndex(null)
    else setOpenIndex(idx)
  }

  return (
    <section className="py-20 bg-[#f4fcf9] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl font-bold text-[#143B33] mb-10 text-left"
        >
          FASTag FAQs
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-medium text-[#143B33]">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-[#3F665D] leading-relaxed text-sm">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
