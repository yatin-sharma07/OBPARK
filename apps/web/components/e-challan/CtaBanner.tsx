import { microgrammaBold } from "@/lib/fonts";
import Image from "next/image";

export default function CtaBanner() {
    return (
        <section className="w-full bg-white">
            <div
                className="
                    relative
                    mx-auto
                    flex
                    aspect-[899/390]
                    w-full
                    max-w-[2000px]
                    items-center
                    justify-start
                    bg-no-repeat
                    px-6
                    sm:px-10
                    lg:px-[52px]
                "
                style={{
                    backgroundImage: "url('/Images/e-challan/bg.png')",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                }}
            >
                <div className="relative z-10 max-w-[600px]h-full">
                    <h2
                        className={`
                            ${microgrammaBold.className}
                            max-w-[600px]
                            text-[26px]
                            leading-[1.25]
                            tracking-[0.08em]
                            text-[#064c43]
                            sm:text-[38px]
                            lg:text-[46px]
                        `}
                    >
                        Check and pay your pending traffic challans
                    </h2>

                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/Images/e-challan/court.png"
                                alt="Court"
                                width={50}
                                height={50}
                            />

                            <p className="max-w-[140px] text-[15px] font-medium leading-[1.15] tracking-[-0.02em] text-[#064c43] sm:text-[17px]">
                                No court visits required
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image
                                src="/Images/e-challan/rupee.png"
                                alt="Court"
                                width={50}
                                height={50}
                            />

                            <p className="max-w-[170px] text-[15px] font-medium leading-[1.15] tracking-[-0.02em] text-[#064c43] sm:text-[17px]">
                                Easy refunds on fine waiver
                            </p>
                        </div>
                    </div>

                    <button
                        className="
                            mt-7
                            flex
                            h-[48px]
                            items-center
                            gap-3
                            rounded-[6px]
                            bg-[#064c43]
                            px-6
                            text-[13px]
                            font-medium
                            text-white
                            sm:h-[54px]
                            sm:px-7
                            sm:text-[14px]
                        "
                    >
                        Check Challan
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white text-[12px] p-3">
                            →
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}