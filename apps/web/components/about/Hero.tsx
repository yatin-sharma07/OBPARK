"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="h-[220px] rounded-[32px] bg-gradient-to-r from-[#5FA59B] to-[#44766E]" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-16 max-w-5xl text-center"
                >
                    <h1 className="text-5xl font-bold text-[#264942]">
                        Health isn't supposed to be this hard.
                    </h1>

                    <p className="mt-8 text-lg text-slate-700">
                        We live in a world where eating well feels like navigating a maze.
                    </p>
                    <p className="mt-4 text-lg text-slate-700">
                        Where “healthy choices” are surrounded by noise, marketing, and confusion.
                    </p>
                    <p className="mt-4 text-lg text-slate-700">
                        Where our food environment pushes us toward habits we never consciously chose.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}