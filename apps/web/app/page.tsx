import { HeroSection } from '@/components/home/HeroSection'
import { MarqueeStrip } from '@/components/home/MarqueeStrip'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeStrip />
      <ServicesGrid />
      <Footer />
    </main>
  )
}