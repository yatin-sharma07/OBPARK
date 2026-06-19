"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white px-4 pt-4 pb-0 sm:px-6 sm:pt-6 sm:pb-0 md:pt-8 md:pb-0">
      <div className="mx-auto max-w-7xl">
        {/* Hero Banner */}
        <div
          className="relative h-[240px] sm:h-[320px] md:h-[520px] lg:h-[720px] w-full rounded-3xl md:rounded-[40px] lg:rounded-[60px]"
          style={{
            background:
              "linear-gradient(135deg, #66D8B2 0%, #7F9A8D 50%, #3A6B65 100%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-left px-10 md:px-14 lg:px-20"
        >
          <h1 className="mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#A1D6C7]">
            Health isn&apos;t supposed to be this hard.
          </h1>

          <div className="mt-8 space-y-6 sm:mt-12 sm:space-y-8 md:mt-16 pl-8 md:pl-10 lg:pl-12">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#3E7071]">
              We live in a world where eating well feels like navigating a maze.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#3E7071]">
              Where &ldquo;healthy choices&rdquo; are surrounded by noise, marketing, and
              confusion.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#3E7071]">
              Where our food environment pushes us toward habits we never
              consciously chose.
            </p>
          </div>

          <div className="mt-16 text-left sm:mt-20 md:mt-28 lg:mt-32">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-bold text-[#3E7071]">
              The truth is simple:
            </h2>
            <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-bold text-[#3E7071]">
              the modern world is engineered for
              <br className="hidden sm:inline" />
              {" "}overconsumption.
            </h2>
          </div>

          <ul className="mt-10 list-disc space-y-6 pl-10 md:pl-14 lg:pl-16 text-left marker:text-[#074139] sm:mt-14 sm:space-y-8 md:mt-16">
            <li className="text-base sm:text-lg md:text-xl lg:text-2xl leading-normal text-[#3E7071]">
              Sugar hides in{" "}
              <span className="font-medium text-[#59D0B5]">over 70% of</span>{" "}
              supermarket foods.
            </li>
            <li className="text-base sm:text-lg md:text-xl lg:text-2xl leading-normal text-[#3E7071]">
              The average person eats{" "}
              <span className="font-medium text-[#59D0B5]">2–3× more sugar</span>{" "}
              than recommended.
            </li>
            <li className="text-base sm:text-lg md:text-xl lg:text-2xl leading-normal text-[#3E7071]">
              Ultra-processed products now make up{" "}
              <span className="font-medium text-[#59D0B5]">over half</span> of
              modern diets.
            </li>
            <li className="text-base sm:text-lg md:text-xl lg:text-2xl leading-normal text-[#3E7071]">
              And most people underestimate their sugar intake by{" "}
              <span className="font-medium text-[#59D0B5]">up to 50%</span>.
            </li>
          </ul>

          <div className="mt-16 space-y-5 text-left sm:mt-20 sm:space-y-6 md:mt-28 md:space-y-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#3E7071]">
              This isn&apos;t a willpower problem.
            </h3>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#3E7071]">
              It&apos;s a biology problem.
            </h3>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#3E7071]">
              A system problem.
            </h3>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#3E7071]">
              A food-industry problem.
            </h3>
          </div>

          <div className="mt-16 text-left sm:mt-24 md:mt-32">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold leading-tight text-[#3E7071]">
              And that system is failing us.
            </h2>
          </div>
        </motion.div>

        <div className="mt-12 h-[220px] w-full rounded-[20px] bg-[#59D0B5] sm:mt-16 sm:h-[320px] sm:rounded-[24px] md:mt-20 md:h-[500px] md:rounded-[30px] lg:h-[955px]" />
      </div>
    </section>
  );
}