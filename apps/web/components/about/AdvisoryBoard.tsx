import Image from "next/image";
import { microgrammaBold } from "@/lib/fonts";

const members = [
    {
        name: "Dr. Robert Lufkin",
        role: "Lead Scientist",
        image: "/Images/images/robert.png",
    },
    {
        name: "Dr. Malakh",
        role: "Advisor",
        image: "/Images/images/nikhil.png",
    },
    {
        name: "Dr. Nikhil",
        role: "Advisor",
        image: "/Images/images/malakh.png",
    },
];

export default function AdvisoryBoard() {
    return (
        <section className="bg-white px-4 py-4 sm:px-6 sm:py-6 md:py-8">
            <div className="mx-auto max-w-7xl">
                <h2
                    className={`
            ${microgrammaBold.className}
            mb-6
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-[40px]
            xl:text-[48px]
            leading-[1.12]
            text-[#074139]
            sm:mb-8
            md:mb-10
          `}
                >
                    Science Team & Advisory Board
                </h2>

                <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                    {members.map((member, index) => (
                        <div
                            key={`${member.name}-${index}`}
                            className="overflow-hidden rounded-2xl bg-[#EEF3F1]"
                        >
                            <div className="relative h-[220px] sm:h-[240px] md:h-[260px]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="min-h-[120px] p-5 sm:min-h-[140px] sm:p-6 md:min-h-[180px]">
                                <h3 className="text-base font-semibold text-[#074139] sm:text-lg" style={{ fontFamily: 'var(--font-michroma)' }}>
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}