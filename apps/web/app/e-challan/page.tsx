


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
        <main className="min-h-screen bg-[#eefaf6] text-[#074c43]">
            <Navbar />
            <div className="mx-auto max-w-screen px-4 py-4 sm:px-6">

                <section className="rounded-[28px] bg-white shadow-[0_12px_30px_rgba(7,76,67,0.08)]">

                    <HeroSection />
                </section>

                <AvoidSection />
                <HowToPaySection />
                <ComparisonSection />
            </div>

            <CtaBanner />

            <div className="mx-auto max-w-screen px-4 py-10 sm:px-6">
                <FaqSection />
                <Footer />
            </div>
        </main>
    );
}