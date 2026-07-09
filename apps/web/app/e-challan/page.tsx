

import { Navbar } from "@/components/Navbar";
import AvoidSection from "@/components/e-challan/AvoidSection";
import ComparisonSection from "@/components/e-challan/ComparisonSection";
import CtaBanner from "@/components/e-challan/CtaBanner";
import FaqSection from "@/components/e-challan/FaqSection";
import HeroSection from "@/components/e-challan/HeroSection";
import HowToPaySection from "@/components/e-challan/HowToPaySection";
import { Footer } from "@/components/layout/Footer";

export default function EChallanPage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-[#eefaf6] text-[#074c43]">
            <Navbar />
            <div className="px-3 sm:px-4 md:px-6">
                <div className="mx-auto max-w-screen py-4">

                    <section className="rounded-[28px] bg-white shadow-[0_12px_30px_rgba(7,76,67,0.08)] overflow-hidden">

                        <HeroSection />
                    </section>

                    <AvoidSection />
                    <HowToPaySection />
                    <ComparisonSection />
                </div>
            </div>

            <CtaBanner />

            <div className="px-3 sm:px-4 md:px-6">
                <div className="mx-auto max-w-screen py-10">
                    <FaqSection />
                    <Footer />
                </div>
            </div>
        </main>
    );
}