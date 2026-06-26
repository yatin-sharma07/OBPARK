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
import { Footer } from "@/components/layout/Footer";
import { Navbar } from '@/components/Navbar'


export default function HomePage() {
  return (
    <main>
<<<<<<< HEAD
      <HeroSection />
      <MarqueeStrip />
      <ServicesGrid />
=======
      <Navbar />
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
>>>>>>> 3944446130e51b4e0c3eef275cdb436c87727b5a
    </main>
  )
}