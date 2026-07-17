import Hero from "@/components/car-services/Hero";
import ExploreTopServices from "@/components/car-services/ExploreTopServices";
import WhyChoose from "@/components/car-services/WhyChoose";
import HowItWorks from "@/components/car-services/HowItWorks";
import CompleteCarCare from "@/components/car-services/CompleteCarCare";
import CarServicesForEveryNeed from "@/components/car-services/CarServicesForEveryNeed";
import FAQ from "@/components/car-services/FAQ";

export default function CarServicesPage() {
    return (
        <main className="min-h-screen bg-[#eefaf6] text-[#074c43] overflow-x-hidden">
            <div className="px-3 sm:px-4 md:px-6">
                <div className="mx-auto w-full py-4">
                    <section className="rounded-[28px] bg-white shadow-[0_12px_30px_rgba(7,76,67,0.08)] overflow-hidden min-h-[calc(100vh-32px)] lg:h-[calc(100vh-32px)]">
                        <Hero />
                    </section>
                </div>
            </div>

            <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
                <ExploreTopServices />
                <WhyChoose />
                <HowItWorks />
            </div>

            <CompleteCarCare />

            <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
                <div className="py-4">
                    <CarServicesForEveryNeed />
                </div>

                <div className="py-10">
                    <FAQ />
                </div>
            </div>
        </main>
    );
}
