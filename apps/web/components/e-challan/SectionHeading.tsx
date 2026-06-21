import { microgrammaBold } from "@/lib/fonts";

type SectionHeadingProps = {
    title: string;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
    return (
        <div className="my-10 flex items-center justify-center gap-4 sm:gap-8">
            <div className="h-px flex-1 bg-[#7a8f89]" />
            <h2 className={`shrink-0 text-center text-[18px] tracking-[-0.03em] text-[#074c43] sm:text-[22px] ${microgrammaBold.className}`}>
                {title}
            </h2>
            <div className="h-px flex-1 bg-[#7a8f89]" />
        </div>
    );
}