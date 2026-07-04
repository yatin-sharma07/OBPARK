'use client';

import { microgrammaBold } from '@/lib/fonts';
import { MapPin, CheckCircle2, Zap } from 'lucide-react';
import Image from 'next/image';
import Explore from './Explore';
import WhyChoose from './WhyChoose';
import HowToFind from './HowToFind';

export default function Hero() {
    return (
        <div
            className="
        w-auto
        overflow-hidden
        border border-gray-200
        bg-white
        shadow-xl
        rounded-2xl
        sm:rounded-3xl
        mb-8
        sm:mb-10
        lg:mb-12

        mx-4
        sm:mx-3
        md:mx-4
        lg:mx-5
        xl:mx-6
    "
        >
            <section
                className="
          relative
          w-full
          bg-white
          overflow-hidden
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          pt-20
          sm:pt-24
          lg:pt-32
          pb-10
          sm:pb-14
          lg:pb-24
        "
            >
                <div
                    className="
            relative
            z-10
            w-full
            max-w-none
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            sm:gap-12
            lg:gap-14
            xl:gap-16
            items-center
          "
                >
                    {/* Left Content */}
                    <div className="w-full space-y-6 sm:space-y-8">
                        <h1
                            className={`
                ${microgrammaBold.className}
                text-[#0B402F]
                font-bold
                leading-tight
                text-[34px]
                sm:text-4xl
                md:text-5xl
                lg:text-[52px]
                xl:text-[56px]
                max-w-none
              `}
                        >
                            Find EV Charging Stations Near You in India
                        </h1>

                        <p
                            className="
                text-[#3E7071]
                text-base
                sm:text-lg
                md:text-[18px]
                leading-relaxed
                w-full
                max-w-2xl
              "
                        >
                            Locate, compare and navigate to the best EV charging stations -
                            anytime, anywhere.
                        </p>

                        {/* Search Box */}
                        <div
                            className="
                w-full
                max-w-none
                bg-white
                
               rounded-xl
                shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                border border-gray-100
                flex
                flex-col
                sm:flex-row
                sm:items-center
                gap-3
                sm:gap-0
                p-3
                sm:p-2
              "
                        >
                            <div className="flex items-center flex-1 w-full">
                                <MapPin className="text-gray-400 ml-1 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />

                                <input
                                    type="text"
                                    placeholder="Enter Location or Area"
                                    className="
                    flex-1
                    w-full
                    py-3
                    px-3
                    sm:px-4
                    outline-none
                    text-gray-700
                    bg-transparent
                    placeholder:font-sans
                    font-sans
                    text-sm
                    sm:text-base
                  "
                                />
                            </div>

                            <button
                                className="
                  w-full
                  sm:w-auto
                  bg-[#0B402F]
                  text-white
                  px-6
                  sm:px-8
                  py-3
                  rounded-xl
                  
                  font-medium
                  hover:bg-[#083023]
                  transition-colors
                  whitespace-nowrap
                "
                            >
                                Find Stations
                            </button>
                        </div>

                        {/* Features */}
                        <div
                            className="
                w-full
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-y-4
                gap-x-6
                pt-2
                sm:pt-4
              "
                        >
                            <div className="flex items-center gap-2 text-sm sm:text-[15px] text-gray-600 font-medium">
                                <Image src={"/Images/ev-charging/header-icon-1.png"} alt='Icon' width={30} height={30} />
                                Verified Stations
                            </div>

                            <div className="flex items-center gap-2 text-sm sm:text-[15px] text-gray-600 font-medium">
                                <Image src={"/Images/ev-charging/header-icon-2.png"} alt='Icon' width={30} height={30} />
                                Real-time Availability
                            </div>

                            <div className="flex items-center gap-2 text-sm sm:text-[15px] text-gray-600 font-medium">
                                <Image src={"/Images/ev-charging/header-icon-4.png"} alt='Icon' width={30} height={30} />
                                Fast & Reliable
                            </div>

                            <div className="flex items-center gap-2 text-sm sm:text-[15px] text-gray-600 font-medium">
                                <Image src={"/Images/ev-charging/header-icon-3.png"} alt='Icon' width={30} height={30} />
                                All India Coverage
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div
                        className="
              relative
              w-full
              h-[320px]
              sm:h-[420px]
              md:h-[500px]
              lg:h-[540px]
              xl:h-[580px]
              mt-4
              lg:mt-0
            "
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#D3F5E7] to-teal-50 rounded-full blur-3xl opacity-60 -z-10" />

                        <div
                            className="
                relative
                w-full
                h-full
                overflow-hidden
                rounded-2xl
                sm:rounded-3xl
                bg-[#E5F5EF]/50
                
                border-[#59D0B5]
              "
                        >
                            <Image
                                src="/Images/ev-charging/ev-hero.png"
                                alt="EV charging station"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>

                {/* Background Element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#E5F5EF]/40 to-transparent -z-10 hidden lg:block" />
            </section>

            <div className="w-full">
                <Explore />
                <WhyChoose />
                <HowToFind />
            </div>
        </div>
    );
}