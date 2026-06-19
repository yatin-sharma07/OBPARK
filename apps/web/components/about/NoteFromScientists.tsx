import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { microgrammaBold } from "@/lib/fonts";

export default function NoteFromScientist() {
  return (
    <section className="bg-white px-4 py-4 sm:px-6 sm:py-6 md:py-8">
      <FadeIn>
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-8 lg:grid-cols-[360px_1fr] lg:gap-10">

            {/* LEFT PANEL */}
            <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

              {/* Image */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/Images/images/scientist.png"
                  alt="Dr. Robert Lufkin"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Info Card */}
              <div className="border-t border-[#EEF3F1] bg-[#F0F9F5] px-6 py-6 text-center">
                <p className="text-[11px] tracking-wide text-[#5B6368]">
                  Nosu lead scientist & advisor
                </p>

                <h3
                  className={`
                    ${microgrammaBold.className}
                    mt-2
                    text-[20px]
                    text-[#074139]
                  `}
                >
                  Dr. Robert Lufkin
                </h3>

                <div className="mt-5 flex justify-center">
                  <div className="relative h-14 w-44">
                    <Image
                      src="/Images/images/ucla.png"
                      alt="UCLA USC"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="rounded-[28px] bg-[#F0F9F5] px-8 py-8 md:px-10 md:py-10 flex flex-col justify-center">
              <h2
                className={`
                  ${microgrammaBold.className}
                  text-[24px]
                  sm:text-[28px]
                  lg:text-[32px]
                  leading-tight
                  text-[#074139]
                `}
              >
                A Note from Dr. Robert Lufkin
              </h2>

              <div className="mt-8 space-y-8 text-[15px] sm:text-[16px] leading-[1.8] text-[#5B6368] italic">
                <p>
                  “Most people don’t realize how sugar controls their energy,
                  mood, and long-term health until they experience life without
                  the constant highs and crashes. What I love about Nosu’s
                  methodology is that it’s not about extreme diets or guilt.
                  It’s about small, science-backed changes that help people feel
                  more in control, more balanced, and more themselves.”
                </p>

                <p>
                  “And the most unique part about Nosu’s Sweet Shield formula?
                  You feel it working within minutes. Sugar stops tasting sweet,
                  which means cravings lose their grip almost instantly. With
                  Nosu, you can finally enjoy food on your terms, without sugar
                  calling the shots.”
                </p>
              </div>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}