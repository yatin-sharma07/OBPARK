import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import AdvisoryBoard from "@/components/about/AdvisoryBoard";
import NoteFromScientist from "@/components/about/NoteFromScientists";
import FAQ from "@/components/about/FAQ";

export default function AboutPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Hero />
            <Story />
            <AdvisoryBoard />
            <NoteFromScientist />
            <FAQ />
        </main>
    );
}