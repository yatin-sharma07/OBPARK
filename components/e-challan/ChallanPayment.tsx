'use client'
import { useState } from 'react'
import { microgrammaBold } from '@/lib/fonts'
import Image from 'next/image'

export function ChallanPayment() {
  const [paymentMethod, setPaymentMethod] = useState('card')

  return (
    <div className="min-h-screen p-4 sm:p-6" style={{ background: '#F0FAF5' }}>
      <div className="mx-auto mt-6 sm:mt-25 w-full max-w-[1344px] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">

        <div className="w-full max-w-[650px] bg-white rounded-2xl p-6 sm:p-10">
          <div className=" rounded-xl p-5 sm:p-8">

            <p className={`${microgrammaBold.className} text-base text-[#074139] pb-3 border-b border-[#CECECE]`}>
              Payment method
            </p>

            <div className="flex items-center gap-3 pt-5">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="accent-[#074139]"
              />
              <span className="font-michroma text-sm text-[#000000]">Credit or debit card</span>
            </div>

            <div className="flex items-center gap-2 mt-3 ml-7 flex-wrap">
              {['apple', 'amex', 'mastercard', 'discover', 'paypal', 'visa'].map((card) => (
                <div key={card} className="w-9 h-6 rounded bg-gray-100 flex items-center justify-center text-[8px] font-bold text-gray-500">
                  {card.slice(0, 4).toUpperCase()}
                </div>
              ))}
            </div>

            <div className="mt-5">
              <label style={{ fontFamily: 'Inter', fontWeight: 500 }} className="text-[18px] text-[#0A0D13] block mb-1.5">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9101 1121"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#074139]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label style={{ fontFamily: 'Inter', fontWeight: 500 }} className="text-[18px] text-[#000000] block mb-1.5">Expiration Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#074139]"
                />
              </div>
              <div>
                <label style={{ fontFamily: 'Inter', fontWeight: 500 }} className="text-[18px] text-[#0A0D13] block mb-1.5">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#074139]"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" className="accent-[#074139]" />
              <span style={{ fontFamily: 'Inter', fontWeight: 500 }} className="text-[16px] text-[#ACACAC]">Save card details</span>
            </div>

            <button
              className={`${microgrammaBold.className} w-full mt-5 py-3.5 rounded-[10px] text-white text-sm`}
              style={{ background: 'linear-gradient(90deg, #187E80, #B0E5CC)' }}
            >
              Pay USD 59.28
            </button>

            <p style={{ fontFamily: 'Inter', fontWeight: 500 }} className="text-[11px] text-[#ACACAC] mt-3 leading-relaxed">
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
            </p>

            <div className="flex items-center gap-3 pt-5 mt-5 border-t border-[#CECECE]">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
                className="accent-[#074139]"
              />
              <span className="font-michroma text-sm text-[#000000]">Scan and Pay with UPI</span>
              <Image
    src="/upi.png"
    alt="UPI"
    width={40}
    height={16}
  />
            </div>

            <div className="pt-5 mt-5 border-t border-[#CECECE]">
  <div className="flex items-center gap-3">
    <input
      type="radio"
      name="payment"
      checked={paymentMethod === "netbanking"}
      onChange={() => setPaymentMethod("netbanking")}
      className="accent-[#074139]"
    />

    <span className="font-michroma text-sm text-[#000000]">
      Net Banking
    </span>
  </div>

  {paymentMethod === "netbanking" && (
    <select className="mt-4 ml-9 w-[130px] h-[40px] px-4 border border-[#CECECE] rounded-xl font-michroma text-sm outline-none">
      <option value="">Value</option>
      <option value="sbi">State Bank of India</option>
      <option value="hdfc">HDFC Bank</option>
      <option value="icici">ICICI Bank</option>
      <option value="axis">Axis Bank</option>
    </select>
  )}
</div>

            <div className="flex items-center gap-1 pt-8 mt-5 border-t border-[#CECECE]">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
                className="accent-[#074139]"
              />
              <span className="font-michroma text-sm text-[#000000]">Cash on Delivery/Pay on Delivery</span>
            </div>

          </div>
        </div>

        <div className="w-full lg:w-[534px] bg-white rounded-2xl p-5 sm:p-6">
          <div className=" rounded-xl p-5 sm:p-6">
            <div className="flex justify-between font-michroma text-sm text-[#000000] pb-2">
              <span>Items:</span>
              <span>$180.00</span>
            </div>
            <div className="flex justify-between font-michroma text-sm text-[#000000] pb-2">
              <span>Delivery:</span>
              <span className="text-gray-400 text-xs">Calculated at next step</span>
            </div>
            <div className="flex justify-between font-michroma text-sm text-[#000000] pb-3 border-b border-[#CECECE]">
              <span>Total:</span>
              <span>$180.00</span>
            </div>
            <div className={`${microgrammaBold.className} flex justify-between text-sm text-[#000000] pt-3`}>
              <span>Order Total:</span>
              <span>$180.00</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}