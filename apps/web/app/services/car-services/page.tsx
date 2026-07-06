import Hero from "@/components/car-services/Hero";
import ExploreTopServices from "@/components/car-services/ExploreTopServices";
import WhyChoose from "@/components/car-services/WhyChoose";
import HowItWorks from "@/components/car-services/HowItWorks";
import CompleteCarCare from "@/components/car-services/CompleteCarCare";
import CarServicesForEveryNeed from "@/components/car-services/CarServicesForEveryNeed";
import FAQ from "@/components/car-services/FAQ";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CarServicesPage() {
    return (
        <main className="overflow-x-hidden bg-[#F8FAFC]">
            <Navbar />
            <div className="px-3 sm:px-4 md:px-6">
                <div className="shadow-[0px_0px_30px_rgba(0,0,0,0.08)] bg-white min-h-screen">
                    <Hero />
                    <ExploreTopServices />
                    <WhyChoose />
                    <HowItWorks />
                    <CompleteCarCare />
                    <CarServicesForEveryNeed />
                    <FAQ />
                </div>
                <Footer />
            </div>
        </main>
    );
}
