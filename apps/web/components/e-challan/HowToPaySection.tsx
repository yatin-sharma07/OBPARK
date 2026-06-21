"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useState } from "react";

type TabType = "OBPARK" | "Parivahan" | "Offline";

const content: Record<
    TabType,
    {
        title?: string;
        description: string;
        image: string;
        steps: {
            number: string;
            title: string;
            description: string;
        }[];
    }
> = {
    OBPARK: {
        description:
            "E-Challan meaning is a fine imposed by the traffic police on individuals who violate traffic rules in India. It is a strong measure to prevent increasing traffic violations and ensure the safety of people on the road.",
        image: "/images/e-challan/HowToCheck.png",
        steps: [
            {
                number: "01",
                title: "Go to Park + E-Challan section",
                description:
                    "Visit the Park section or mobile application and go to the E-Challan section for online challan check.",
            },
            {
                number: "02",
                title: "Input the Vehicle registration number",
                description:
                    "Enter your vehicle number to access details by vehicle number and click on Check Challan to view the pending challans.",
            },
            {
                number: "03",
                title: "Verification and challan check",
                description:
                    "Enter the OTP sent to the registered mobile number for verification and continue to view pending challans.",
            },
            {
                number: "04",
                title: "Settle e-challan",
                description:
                    "Choose a suitable payment method to clear the fine from an online check and make sure no pending challan remains.",
            },
        ],
    },

    Parivahan: {
        title: "Parivahan",
        description:
            "E-Challan meaning is a fine imposed by the traffic police on individuals who violate traffic rules in India. It is a strong measure to prevent increasing traffic violations and ensure the safety of people on the road.",
        image: "/images/e-challan/HowToCheck.png",
        steps: [
            {
                number: "01",
                title: "Go to Parivahan E-Challan section",
                description:
                    "Visit the official Parivahan e-Challan portal and open the challan status section.",
            },
            {
                number: "02",
                title: "Enter vehicle details",
                description:
                    "Enter your vehicle number, challan number, or driving license number to check pending challans.",
            },
            {
                number: "03",
                title: "Verify and check challan",
                description:
                    "Complete the verification process and view all pending challan details linked to your vehicle.",
            },
            {
                number: "04",
                title: "Pay through Parivahan",
                description:
                    "Select the pending challan and complete the payment using the available online payment method.",
            },
        ],
    },

    Offline: {
        title: "Offline",
        description:
            "E-Challan meaning is a fine imposed by the traffic police on individuals who violate traffic rules in India. It is a strong measure to prevent increasing traffic violations and ensure the safety of people on the road.",
        image: "/images/e-challan/HowToCheck.png",
        steps: [
            {
                number: "01",
                title: "Visit traffic police office",
                description:
                    "Go to the nearest traffic police station or authorized challan payment center.",
            },
            {
                number: "02",
                title: "Share vehicle details",
                description:
                    "Provide your vehicle number, challan number, or driving license details to the officer.",
            },
            {
                number: "03",
                title: "Verify challan amount",
                description:
                    "The officer will verify your pending challan details and confirm the payable amount.",
            },
            {
                number: "04",
                title: "Pay and collect receipt",
                description:
                    "Pay the challan offline and collect the official receipt as proof of payment.",
            },
        ],
    },
};

const sectionVariants = {
    hidden: {
        opacity: 0,
        y: 28,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.45,
            ease: "easeOut",
            staggerChildren: 0.12,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.98,
        transition: {
            duration: 0.25,
            ease: "easeIn",
        },
    },
};

const leftVariants = {
    hidden: {
        opacity: 0,
        x: -35,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },
};

const stepVariants = {
    hidden: {
        opacity: 0,
        x: 35,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

export default function HowToPaySection() {
    const [section, setSection] = useState<TabType>("OBPARK");

    const activeContent = content[section];

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="w-full px-4 py-10 sm:px-6 md:px-12"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading title="How to Check & Pay E-Challan?" />

                <div className="mb-10 flex justify-center">
                    <div className="flex rounded-[8px] border border-[#9bb9b0] bg-white p-1">
                        {(["OBPARK", "Parivahan", "Offline"] as TabType[]).map(
                            (tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setSection(tab)}
                                    className={`
                                        h-13
                                        w-40
                                        rounded-[5px]
                                        px-6
                                        py-2
                                        text-[15px]
                                        font-black
                                        transition-all
                                        duration-200
                                        ${section === tab
                                            ? "bg-gradient-to-br from-[#B0E5CC] to-[#187E80] text-white shadow-md"
                                            : "bg-white text-[#074c43] hover:bg-gradient-to-br hover:from-[#B0E5CC] hover:to-[#187E80] hover:text-white"
                                        }
                                    `}
                                >
                                    {tab}
                                </button>
                            )
                        )}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={section}
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="grid items-center gap-10 lg:grid-cols-2"
                    >
                        <motion.div variants={leftVariants}>
                            {activeContent.title && (
                                <h3 className="mb-5 text-[22px] font-black text-[#074c43]">
                                    {activeContent.title}
                                </h3>
                            )}

                            <p className="max-w-[520px] text-[13px] leading-7 text-[#247064]">
                                {activeContent.description}
                            </p>

                            <div className="relative mt-6 h-[260px] w-full max-w-[420px] sm:h-[340px]">
                                <Image
                                    src={activeContent.image}
                                    alt={`${section} E-Challan process`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>

                        <motion.div className="space-y-4">
                            {activeContent.steps.map((step) => (
                                <motion.div
                                    key={`${section}-${step.number}`}
                                    variants={stepVariants}
                                    className="flex gap-4 rounded-[6px] bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] bg-gradient-to-br from-[#B0E5CC] to-[#187E80] text-[13px] font-black text-white">
                                        {step.number}
                                    </div>

                                    <div>
                                        <h3 className="text-[13px] font-black text-[#074c43]">
                                            {step.title}
                                        </h3>

                                        <p className="mt-1 text-[11px] leading-5 text-[#426d66]">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.section>
    );
}