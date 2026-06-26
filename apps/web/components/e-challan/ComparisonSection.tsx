import SectionHeading from "./SectionHeading";

const rows = [
    {
        label: "Instant Challan Settlement",
        obpark: true,
        other: false,
    },
    {
        label: "Accuracy",
        obpark: true,
        other: false,
        highlight: true,
    },
    {
        label: "Secure Payments",
        obpark: true,
        other: true,
    },
    {
        label: "Transparency",
        obpark: true,
        other: false,
        highlight: true,
    },
    {
        label: "24/7 support assistance",
        obpark: true,
        other: false,
    },
];

function StatusIcon({ active }: { active: boolean }) {
    return (
        <span
            className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-black text-white ${active ? "bg-[#178f88]" : "bg-[#ff4e4e]"
                }`}
        >
            {active ? "✓" : "×"}
        </span>
    );
}

export default function ComparisonSection() {
    return (
        <section className="pb-12">
            <SectionHeading title="E-Challans made simple with OBPARK" />

            <div className="mx-auto max-w-[920px] overflow-hidden rounded-t-[8px]">
                <table className="w-full border-collapse text-left text-[12px] text-[#074c43]">
                    <thead>
                        <tr className="bg-[#064c43] text-white">
                            <th className="px-6 py-4 font-black">Basis of Comparison</th>
                            <th className="px-6 py-4 text-center font-black">OBPARK</th>
                            <th className="px-6 py-4 text-center font-black">Other</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row) => (
                            <tr
                                key={row.label}
                                className={row.highlight ? "bg-[#c9f0e8]" : "bg-[#eefaf6]"}
                            >
                                <td className="px-6 py-4">{row.label}</td>
                                <td className="px-6 py-4 text-center">
                                    <StatusIcon active={row.obpark} />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <StatusIcon active={row.other} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="h-px bg-[#7a8f89]" />
            </div>
        </section>
    );
}