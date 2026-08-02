'use client'

import { microgrammaBold } from '@/lib/fonts'

export default function PartnersPage() {
  return (
    <div className="w-full bg-[#eefaf6] text-[#074c43] min-h-screen pt-[33px] md:pt-[47px] lg:pt-[52px] xl:pt-[56px] pb-16 px-3 sm:px-5">
      <div className="mx-auto w-full space-y-12">
        {/* Main Partners Banner */}
        <div
          className="w-full rounded-[32px] md:rounded-[40px] px-6 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-32 md:px-12 md:pb-12 md:pt-40 shadow-[0_12px_30px_rgba(7,76,67,0.08)] flex flex-col lg:h-[calc(100vh-80px)] lg:min-h-[720px] overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #177E80 0%, #AFE5CC 100%)'
          }}
        >
          <div className="max-w-[1300px] mx-auto w-full flex-1 flex flex-col min-h-0">
            <h1 className={`${microgrammaBold.className} text-white text-3xl sm:text-4xl md:text-[56px] leading-none mb-8 shrink-0`}>
              Our Partners
            </h1>

            {/* Translucent Container */}
            <div className="border border-white/30 rounded-[32px] p-8 sm:p-12 flex-1 flex flex-col justify-center items-center">
              <div className="w-full max-w-4xl flex items-center justify-center p-4">
                <img
                  src="/Images/our_partners.svg"
                  alt="Our Partners"
                  className="w-full h-auto max-h-[360px] object-contain opacity-95 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
