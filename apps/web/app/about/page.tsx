import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import AdvisoryBoard from "@/components/about/AdvisoryBoard";
import NoteFromScientist from "@/components/about/NoteFromScientists";
import FAQ from "@/components/about/FAQ";
import NewsLetter from "@/components/about/NewsLetter";

export default function AboutPage() {
    return (
        <main className="bg-[#F5F6F4]">
            <Hero />
            <Story />
            <AdvisoryBoard />
            <NoteFromScientist />
            <FAQ />
            <NewsLetter />
        </main>
    );
}