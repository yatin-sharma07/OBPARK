import FadeIn from "@/components/ui/FadeIn";

export default function NewsLetter() {
    return (
        <section className="px-6 py-20 bg-[#264942] text-white">
            <div className="mx-auto max-w-4xl text-center">
                <FadeIn>
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Stay Updated on Metabolic Science
                    </h2>
                    <p className="mt-4 text-emerald-100/80">
                        Subscribe to receive insights from Dr. Robert Lufkin and the Obpark team directly to your inbox.
                    </p>
                    <form className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-5 py-3 rounded-full text-slate-800 focus:outline-none w-full bg-white/95"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#5FA59B] hover:bg-[#44766E] text-white font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </form>
                </FadeIn>
            </div>
        </section>
    )
}