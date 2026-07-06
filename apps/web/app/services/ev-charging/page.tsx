import Hero from "@/components/ev-charging/Hero";
import PowerUp from "@/components/ev-charging/PowerUp";
import ForEveryNeed from "@/components/ev-charging/ForEveryNeed";
import FAQ from "@/components/ev-charging/FAQ";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function EvChargingPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />
            <div className="px-3 sm:px-4 md:px-6">
                <Hero />
                <PowerUp />
                <ForEveryNeed />
                <FAQ />
                <Footer />
            </div>
        </main>
    );
}
