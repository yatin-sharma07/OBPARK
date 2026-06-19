"use client";
import React from "react";
// import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import obriveLogo from "@/app/assets/logo/obpark_title_logo.svg";
import facebookLogo from "@/app/assets/logo/facebookLogo.svg";
import instagramLogo from "@/app/assets/logo/instagramLogo.svg";
import whatsappLogo from "@/app/assets/logo/whatsappLogo.svg";

export function Footer() {
const router = useRouter();


  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-12">
      {/* Main Footer Container Box with custom layout styling matching image_fcf540.png */}
      <div className="w-full  bg-gradient-to-b from-[#CAEDE5] to-[#59D0B5] rounded-[2.5rem] p-12 text-[#022c22]">
        
        {/* TOP ROW: Brand Logo & Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-black"
        onClick={() => router.push("/")}
        >
          <div className="flex flex-rowtext-3xl font-black tracking-widest font-mono">
            
                        <Image
                            src={obriveLogo}
                            alt="Obrive Logo"
                            width={250}
                            height={60}
                        />
            
            <span className="text-[8px] font-medium font-sans align-top relative -top-[6.7px] text-[#022c22]">©</span>
          </div>


          
          {/* Social Icons with circular transparent backgrounds */}
          <div className="flex items-center gap-3">
                        <Image
                            src={instagramLogo}
                            alt="instagramLogo"
                            width={50}
                            height={50}
                        />

                        <Image
                            src={facebookLogo}
                            alt="facebookLogo"
                            width={50}
                            height={50}
                        />

                        <Image
                            src={whatsappLogo}
                            alt="whatsappLogo"
                            width={50}
                            height={50}
                        />
          </div>
        </div>

        {/* MIDDLE SECTION: Navigation Links & Newsletter Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-10 pb-12">
          
          {/* Column 1: About Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider opacity-90">About</h4>
            <ul className="space-y-2 text-xs font-medium opacity-75">
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Shop</Link></li>
            </ul>
          </div>

          {/* Column 2: Support Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider opacity-90">Support</h4>
            <ul className="space-y-2 text-xs font-medium opacity-75">
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Faqs</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Refund Policy</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">My Account</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: The Custom Newsletter Subscription Box Layout */}
          <div className="md:col-span-7 bg-white/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20 max-w-lg ml-auto w-full">
            <h4 className="text-sm font-bold tracking-wide mb-6 text-[#022c22]">
              Subscribe to our newsletter
            </h4>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* First Name & Last Name Twin Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-wider text-[#022c22]/70 block mb-1.5">First Name</label>
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full bg-white/50 border border-transparent rounded-xl px-4 py-2.5 text-xs text-[#022c22] placeholder-[#022c22]/40 outline-none focus:bg-white focus:border-emerald-300 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-wider text-[#022c22]/70 block mb-1.5">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full bg-white/50 border border-transparent rounded-xl px-4 py-2.5 text-xs text-[#022c22] placeholder-[#022c22]/40 outline-none focus:bg-white focus:border-emerald-300 transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-wider text-[#022c22]/70 block mb-1.5">Email Id</label>
                <input 
                  type="email" 
                  placeholder="Email Id" /* Matches exact image placeholder quirk text placeholder */
                  className="w-full bg-white/50 border border-transparent rounded-xl px-4 py-2.5 text-xs text-[#022c22] placeholder-[#022c22]/40 outline-none focus:bg-white focus:border-emerald-300 transition-all"
                />
              </div>

              {/* Dark Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[#022c22] hover:bg-[#064e3b] text-white text-xs font-bold tracking-wider py-3.5 rounded-xl transition-colors shadow-sm mt-2"
              >
                Submit
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM ROW: Privacy Links & Copyright Details */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-bold tracking-wide opacity-60">
          <div className="flex gap-6">
            <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">Terms & Condition</Link>
          </div>
          <div>
            © OBPARK All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}