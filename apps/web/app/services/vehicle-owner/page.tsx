import Hero from '@/components/vehicle-owner/Hero';
import ExploreMenu from '@/components/vehicle-owner/ExploreMenu';
import WhyCheck from '@/components/vehicle-owner/WhyCheck';
import HowToFind from '@/components/vehicle-owner/HowToFind';
import CheckAndVerify from '@/components/vehicle-owner/CheckAndVerify';
import FAQ from '@/components/vehicle-owner/FAQ';

export default function VehicleOwnerPage() {
    return (
        <main className="min-h-screen bg-[#eefaf6] text-[#074c43] overflow-x-hidden">
            <div className="px-3 sm:px-4 md:px-6">
                <div className="mx-auto w-full py-4">
                    <section className="rounded-[28px] bg-white shadow-[0_12px_30px_rgba(7,76,67,0.08)] overflow-hidden h-[calc(100vh-32px)] min-h-[600px]">
                        <Hero />
                    </section>
                </div>
            </div>

            <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
                <ExploreMenu />
                <WhyCheck />
                <HowToFind />
            </div>

            <CheckAndVerify />

            <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
                <div className="py-10">
                    <FAQ />
                </div>
            </div>
        </main>
    );
}
