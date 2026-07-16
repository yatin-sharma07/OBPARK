import { HeroSection } from '@/components/home/HeroSection'
import { MarqueeStrip } from '@/components/home/MarqueeStrip'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { TrustBadges } from '@/components/home/TrustBadges'
import { ProblemSolution } from '@/components/home/ProblemSolution'
import { CtaBanner } from '@/components/home/CtaBanner'
import { ProductCategories } from '@/components/home/ProductCategories'
import { FeaturesAccordion } from '@/components/home/FeaturesAccordion'
import { MintCta } from '@/components/home/MintCta'
import { Reviews } from '@/components/home/Reviews'


export default function HomePage() {
  return (
    <main>
      <div className="px-1 sm:px-4 md:px-1">
        <HeroSection />
        
        <MarqueeStrip />
        
        <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
          <ServicesGrid />
          <TrustBadges />
          <ProblemSolution />
          <CtaBanner />
          <ProductCategories />
        </div>

        <MintCta />

        <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0">
          <Reviews />
          <FeaturesAccordion />
        </div>
      </div>
    </main>
  )
}