import Image from "next/image";

export default function Story() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
                <div>
                    <p className="text-sm uppercase text-slate-500">
                        About Obpark
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-[#264942]">
                        Our Story
                    </h2>

                    <p className="mt-6 leading-8 text-slate-700">
                        We founded Obpark with a clear vision to improve metabolic
                        health through behavior change and science-backed solutions.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="h-36 rounded-2xl bg-slate-200" />
                    <div className="h-36 rounded-2xl bg-slate-200" />
                    <div className="h-36 rounded-2xl bg-slate-200" />
                </div>
            </div>
        </section>
    );
}