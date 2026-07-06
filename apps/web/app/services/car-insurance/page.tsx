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
        <main className="overflow-x-hidden bg-[#F8FAFC]">
            <Navbar />
            <div className="px-3 sm:px-4 md:px-6">
                <div className="shadow-[0px_0px_30px_rgba(0,0,0,0.08)] bg-white min-h-screen">
                    <Hero />
                    <WhyChoose />
                    <HowItWorks />
                    <DriveWorryFree />
                    <ForEveryNeed />
                    <FAQ />
                </div>
                <Footer />
            </div>
        </main>
    );
}
