import Hero from '@/components/puc/Hero';
import ExploreMenu from '@/components/puc/ExploreMenu';
import WhyCheck from '@/components/puc/WhyCheck';
import HowToCheck from '@/components/puc/HowToCheck';
import DriveCleanBanner from '@/components/puc/DriveCleanBanner';
import EverythingNeed from '@/components/puc/EverythingNeed';
import FAQ from '@/components/puc/FAQ';

export default function PucPage() {
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
                <ExploreMenu />
                <WhyCheck />
                <HowToCheck />
            </div>

            <DriveCleanBanner />

            <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
                <div className="py-4">
                    <EverythingNeed />
                </div>

                <div className="py-10">
                    <FAQ />
                </div>
            </div>
        </main>
    );
}
