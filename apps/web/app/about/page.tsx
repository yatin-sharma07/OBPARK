import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import AdvisoryBoard from "@/components/about/AdvisoryBoard";
import NoteFromScientist from "@/components/about/NoteFromScientists";
import FAQ from "@/components/about/FAQ";

export default function AboutPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Hero />
            <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
                <Story />
                <AdvisoryBoard />
                <NoteFromScientist />
                <FAQ />
            </div>
        </main>
    );
}