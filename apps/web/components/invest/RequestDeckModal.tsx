'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { microgrammaBold } from '@/lib/fonts'

export function RequestDeckModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block bg-gradient-to-r from-[#1A817F] to-[#59D0B5] hover:opacity-90 text-white text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-md transition-opacity"
        style={{ fontFamily: 'var(--font-michroma)' }}
      >
        Request Investor Deck
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[24px] p-8 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6 text-left">
                <div className="space-y-2">
                  <h3 className={`${microgrammaBold.className} text-2xl text-[#074139]`}>
                    Request Deck
                  </h3>
                  <p className="text-sm text-[#484848]" style={{ fontFamily: 'var(--font-michroma)' }}>
                    Enter your details to receive our investor presentation.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                  <div className="space-y-1.5 text-left">
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A817F] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-1.5 text-left">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A817F] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A817F] focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1A817F] to-[#59D0B5] hover:opacity-90 text-white font-medium py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] mt-4"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
