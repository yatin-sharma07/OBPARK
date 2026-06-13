const members = [
    {
        name: "Dr. Robert Lufkin",
        role: "Lead Scientist",
    },
    {
        name: "Board Member",
        role: "Advisor",
    },
    {
        name: "Board Member",
        role: "Advisor",
    },
];

export default function AdvisoryBoard() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-4xl font-bold text-[#264942]">
                    Science Team & Advisory Board
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {members.map((member) => (
                        <div
                            key={member.name}
                            className="overflow-hidden rounded-2xl bg-[#EEF3F1]"
                        >
                            <div className="aspect-[4/3] bg-slate-300" />

                            <div className="p-6">
                                <h3 className="font-semibold">{member.name}</h3>
                                <p className="text-sm text-slate-500">
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