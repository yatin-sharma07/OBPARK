"use client";

import { ArrowRight, ChevronDown, Smartphone, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <main className="min-h-screen bg-[#F2FAF6]">
      <div className="px-3 sm:px-4 md:px-6 pt-20 sm:pt-24 md:pt-28 pb-4">
        <div className="mx-auto max-w-[2000px]">
          <section className="w-full min-h-[calc(100vh-120px)] bg-white rounded-[28px] p-8 md:p-12 lg:p-20 shadow-[0_12px_30px_rgba(7,76,67,0.08)] flex flex-col items-center justify-center relative overflow-hidden">
            
            <div className="w-full max-w-[480px]">
              
              {/* Header Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#E5F5F0] rounded-full flex items-center justify-center relative">
                  <Smartphone className="w-8 h-8 text-[#094639]" />
                  <div className="absolute bottom-4 right-4 bg-[#094639] rounded-full p-1 border-2 border-white">
                    <ShieldCheck className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="text-center mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-[#094639] mb-2 tracking-tight">
                  Welcome Back!
                </h1>
                <p className="text-gray-500 font-medium">
                  Login with your phone number to continue.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Phone Input Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="flex rounded-xl border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-[#094639]/20 focus-within:border-[#094639] transition-all bg-white shadow-sm">
                    
                    {/* Country Code Selector */}
                    <button type="button" className="flex items-center gap-2 px-4 py-4 bg-[#F8F9F9] border-r border-gray-200 hover:bg-gray-100 transition-colors">
                      <img 
                        src="https://flagcdn.com/w20/in.png" 
                        alt="India" 
                        className="w-5 h-auto rounded-sm"
                      />
                      <span className="font-semibold text-gray-700 text-sm">+91</span>
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </button>

                    {/* Number Input */}
                    <input 
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your phone number"
                      className="flex-1 px-4 py-4 focus:outline-none text-gray-700 font-medium"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-[#094639] text-white font-bold py-4 rounded-xl hover:bg-[#07362c] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#094639]/20"
                >
                  Send OTP
                  <ArrowRight className="w-5 h-5" />
                </button>

              </form>

            </div>

          </section>
        </div>
      </div>
    </main>
  );
}