import Hero from "@/components/car-insurance/Hero";
import WhyChoose from "@/components/car-insurance/WhyChoose";
import HowItWorks from "@/components/car-insurance/HowItWorks";
import DriveWorryFree from "@/components/car-insurance/DriveWorryFree";
import ForEveryNeed from "@/components/car-insurance/ForEveryNeed";
import FAQ from "@/components/car-insurance/FAQ";

export default function CarInsurancePage() {
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
                <WhyChoose />
                <HowItWorks />
            </div>

            <DriveWorryFree />

            <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
                <div className="py-4">
                    <ForEveryNeed />
                </div>

                <div className="py-10">
                    <FAQ />
                </div>
            </div>
        </main>
    );
}
