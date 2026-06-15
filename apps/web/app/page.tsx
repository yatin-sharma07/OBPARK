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
import {Footer} from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeStrip />
      <ServicesGrid />
      <TrustBadges />
      <ProblemSolution />
      <CtaBanner />
      <ProductCategories />
      <MintCta />
      <Reviews />
      <FeaturesAccordion />
      <Footer />
    </main>
  )
}