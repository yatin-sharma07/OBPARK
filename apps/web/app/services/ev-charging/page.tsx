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
            <Hero />
            <PowerUp />
            <ForEveryNeed />
            <FAQ />
            <Footer />
        </main>
    );
}
