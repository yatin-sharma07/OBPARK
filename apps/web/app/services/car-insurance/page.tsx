import Hero from "@/components/car-insurance/Hero";
import WhyChoose from "@/components/car-insurance/WhyChoose";
import HowItWorks from "@/components/car-insurance/HowItWorks";
import DriveWorryFree from "@/components/car-insurance/DriveWorryFree";
import ForEveryNeed from "@/components/car-insurance/ForEveryNeed";
import FAQ from "@/components/car-insurance/FAQ";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CarInsurancePage() {
    return (
        <main className="min-h-screen bg-[#eefaf6] text-[#074c43] overflow-x-hidden">
            <Navbar />
            <div className="px-3 sm:px-4 md:px-6">
                <div className="mx-auto max-w-screen py-4">
                    <section className="rounded-[28px] bg-white shadow-[0_12px_30px_rgba(7,76,67,0.08)] overflow-hidden min-h-[calc(100vh-32px)] lg:h-[calc(100vh-32px)]">
                        <Hero />
                    </section>

                    <WhyChoose />
                    <HowItWorks />
                </div>
            </div>

            <DriveWorryFree />

            <div className="px-3 sm:px-4 md:px-6">
                <div className="mx-auto max-w-screen py-4">
                    <ForEveryNeed />
                </div>

                <div className="mx-auto max-w-screen py-10">
                    <FAQ />
                    <Footer />
                </div>
            </div>
        </main>
    );
}
