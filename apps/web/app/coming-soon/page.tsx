import { Navbar } from '@/components/Navbar'
import { Footer } from "@/components/layout/Footer";
import { Construction } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center font-michroma pt-32 pb-20">
        <Construction className="w-24 h-24 text-[#074139] mb-8 animate-pulse" />
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#074139]">
          Stay Put we are working on something Amazing
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl">
          Our team is currently building this feature. Please check back later.
        </p>
      </div>
      <Footer />
    </main>
  );
}
