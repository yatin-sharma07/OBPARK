

import AvoidSection from "@/components/e-challan/AvoidSection";
import ComparisonSection from "@/components/e-challan/ComparisonSection";
import CtaBanner from "@/components/e-challan/CtaBanner";
import FaqSection from "@/components/e-challan/FaqSection";
import HeroSection from "@/components/e-challan/HeroSection";
import HowToPaySection from "@/components/e-challan/HowToPaySection";

export default function EChallanPage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-[#eefaf6] text-[#074c43]">
            <div className="px-3 sm:px-4 md:px-6">
                <div className="mx-auto w-full py-4">

                    <section className="rounded-[28px] bg-white shadow-[0_12px_30px_rgba(7,76,67,0.08)] overflow-hidden min-h-[calc(100vh-32px)] lg:h-[calc(100vh-32px)]">

                        <HeroSection />
                    </section>
                </div>
            </div>

            <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
                <AvoidSection />
                <HowToPaySection />
                <ComparisonSection />
            </div>

            <CtaBanner />

            <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
                <div className="py-10">
                    <FaqSection />
                </div>
            </div>
        </main>
    );
}