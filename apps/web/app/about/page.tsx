'use client'

import { useEffect } from 'react';
import Hero from "@/components/about/Hero";
import WhyChoose from "@/components/about/WhyChoose";
import AdvisoryBoard from "@/components/about/AdvisoryBoard";
import TeamAndNote from "@/components/about/TeamAndNote";
import FAQ from "@/components/about/FAQ";

export default function AboutPage() {
    useEffect(() => {
        document.body.style.backgroundColor = '#ffffff';
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <main className="overflow-x-hidden bg-white">
            <Hero />
            <div className="w-full px-3 pb-3 pt-6 sm:px-5 sm:pb-5 sm:pt-10">
                <WhyChoose />
            </div>
            
            <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
                <AdvisoryBoard />
                <TeamAndNote />
            </div>

            <div className="w-full px-3 pb-3 pt-6 sm:px-5 sm:pb-5 sm:pt-10">
                <FAQ />
            </div>
        </main>
    );
}