"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Smartphone, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <main className="min-h-screen bg-[#F2FAF6]">
      {/* Container matched to exactly fit screen height (s-h) */}
      <div className="px-3 sm:px-4 md:px-6 pt-24 pb-4">
        <div className="mx-auto max-w-[2000px]">
          <section className="w-full h-[calc(100vh-120px)] bg-white rounded-[28px] flex flex-col lg:flex-row items-center justify-between overflow-hidden shadow-[0_12px_30px_rgba(7,76,67,0.08)]">
            
            {/* Left Side: Image Section (Hidden on Mobile) */}
            <div className="hidden lg:block w-full lg:w-1/2 h-full relative">
              <Image 
                src="/Images/login/login_banner.png" 
                alt="Shop Your Car Parts at OBPARK"
                fill
                priority
                className="object-cover object-center"
              />
              
              {/* Text Overlay */}
              <div className="absolute inset-0 px-12 pt-8 pb-3 flex flex-col justify-between">
                
                {/* Top Text */}
                <div className="mt-0">
                  <h1 className="text-5xl xl:text-[3.5rem] leading-[1.1] font-bold text-[#094639] mb-6">
                    Shop Your<br />Car Parts<br />at OBPARK
                  </h1>
                  <div className="w-12 h-1 bg-[#094639] mb-6"></div>
                  <p className="text-gray-600 font-medium text-lg leading-relaxed">
                    Genuine parts. Best prices.<br />Delivered to your drive.
                  </p>
                </div>

                {/* Bottom Features Card */}
                <div className="w-full bg-[#094639]/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center justify-between shadow-xl mb-0">
                  
                  {/* Feature 1 */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">100% Genuine</p>
                      <p className="text-white/80 text-xs">Parts</p>
                    </div>
                  </div>

                  <div className="w-[1px] h-10 bg-white/20 mx-2"></div>

                  {/* Feature 2 */}
                  <div className="flex items-center gap-4 flex-1 justify-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Best Prices</p>
                      <p className="text-white/80 text-xs">Guaranteed</p>
                    </div>
                  </div>

                  <div className="w-[1px] h-10 bg-white/20 mx-2"></div>

                  {/* Feature 3 */}
                  <div className="flex items-center gap-4 flex-1 justify-end">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Fast & Safe</p>
                      <p className="text-white/80 text-xs">Delivery</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Side: Auth Form */}
            <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8 md:p-12 lg:p-20 overflow-y-auto">
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

                  {/* Divider */}
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">or</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>

                  {/* Google Login */}
                  <button 
                    type="button"
                    className="w-full bg-white text-gray-700 font-bold py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 shadow-sm"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Continue with Google
                  </button>

                </form>

                <div className="mt-8 text-center">
                  <p className="text-gray-500 font-medium">
                    Don't have an account? <Link href="/register" className="text-[#094639] font-bold hover:underline">Sign up</Link>
                  </p>
                </div>

              </div>
            </div>

          </section>
        </div>
      </div>
    </main>
  );
}