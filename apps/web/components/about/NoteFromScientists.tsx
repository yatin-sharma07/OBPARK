import FadeIn from "@/components/ui/FadeIn";

export default function NoteFromScientist() {
  return (
    <section className="px-6 py-20 bg-[#EEF3F1]/50">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Visual/Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[32px] overflow-hidden bg-slate-300 shadow-xl">
                {/* Visual placeholder for doctor/scientist */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-xl font-bold">Dr. Robert Lufkin</p>
                  <p className="text-sm text-emerald-200">Lead Scientist, Obpark</p>
                </div>
              </div>
            </div>

            {/* Note/Content Column */}
            <div className="lg:col-span-7">
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Scientific Approach
              </span>
              <h2 className="mt-2 text-4xl font-extrabold text-[#264942] tracking-tight">
                A Note from our Lead Scientist
              </h2>
              
              <div className="mt-8 space-y-6 text-slate-700 leading-relaxed text-lg italic font-light">
                <p>
                  "For decades, we viewed metabolic disease and weight management through a very narrow lens—simply counting calories or prescribing medication. Today, modern science tells a different story. True health is governed by our metabolic health: how our bodies process energy, manage blood sugar, and build cellular resilience."
                </p>
                <p>
                  "By helping users reduce sugar intake, track metabolic habits, and implement small, science-backed behavioral changes, we aren't just managing symptoms. We are addressing the root cause. Obpark is designed to put the power of metabolic control back into your hands, making healthy living intuitive and sustainable."
                </p>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="font-bold text-slate-800">Dr. Robert Lufkin, MD</p>
                <p className="text-sm text-slate-500">Former Professor at UCLA School of Medicine & Advisor to Obpark</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}