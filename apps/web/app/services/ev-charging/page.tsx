import Hero from "@/components/ev-charging/Hero";
import Explore from "@/components/ev-charging/Explore";
import WhyChoose from "@/components/ev-charging/WhyChoose";
import HowToFind from "@/components/ev-charging/HowToFind";
import PowerUp from "@/components/ev-charging/PowerUp";
import ForEveryNeed from "@/components/ev-charging/ForEveryNeed";
import FAQ from "@/components/ev-charging/FAQ";

export default function EvChargingPage() {
    return (
        <main className="min-h-screen bg-[#eefaf6] text-[#074c43] overflow-x-hidden">
            <div className="px-3 sm:px-4 md:px-6">
                <div className="mx-auto max-w-screen py-4">
                    <section className="rounded-[28px] bg-white shadow-[0_12px_30px_rgba(7,76,67,0.08)] overflow-hidden min-h-[calc(100vh-32px)] lg:h-[calc(100vh-32px)]">
                        <Hero />
                    </section>

                    <Explore />
                    <WhyChoose />
                    <HowToFind />
                </div>
            </div>

            <PowerUp />

            <div className="px-3 sm:px-4 md:px-6">
                <div className="mx-auto max-w-screen py-4">
                    <ForEveryNeed />
                </div>

                <div className="mx-auto max-w-screen py-10">
                    <FAQ />
                </div>
            </div>
        </main>
    );
}

