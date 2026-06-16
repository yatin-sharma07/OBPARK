import Link from 'next/link'
import { microgrammaBold } from '@/lib/fonts'

export function MintCta() {
  return (
    <section
      className="relative overflow-hidden flex items-end md:items-center justify-start w-full max-w-[1450px] min-h-[380px] md:min-h-[480px] xl:h-[580px] rounded-[30px] mx-auto mt-10 md:mt-12 px-6 md:px-16 pb-10 md:pb-0"
      style={{
        background: 'linear-gradient(135deg, #62E5CE 0%, #AFFFEF 35%, #A6FDEB 70%, #5DE3CA 100%)',
      }}
    >
      <div className="flex flex-col gap-10 md:gap-14 w-full max-w-[625px] mt-10 md:mt-0">
        <div className="flex flex-col gap-3 md:gap-4">
          <h2
            className={`${microgrammaBold.className} text-3xl md:text-4xl xl:text-[48px] leading-tight tracking-[0.1em] text-[#074139] font-bold`}
          >
            Balance is within your reach
          </h2>
          <p
            className="text-2xl md:text-3xl xl:text-[40px] leading-tight font-medium text-white"
            style={{ fontFamily: 'var(--font-michroma)' }}
          >
            It's time to unlock it
          </p>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center justify-center w-full md:w-auto max-w-[489px] h-[56px] md:h-[66px] xl:h-[76px] rounded-[20px] bg-white border border-[#074139]/50 px-6 text-base md:text-lg xl:text-2xl font-normal text-[#074139] hover:shadow-md transition-shadow"
          style={{ fontFamily: 'var(--font-michroma)' }}
        >
          Explore more about obpark
        </Link>
      </div>
    </section>
  )
}