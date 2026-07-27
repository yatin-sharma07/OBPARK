import { HeroSection } from '@/components/home/HeroSection'
import { MarqueeStrip } from '@/components/home/MarqueeStrip'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { TrustBadges } from '@/components/home/TrustBadges'
import { ProblemSolution } from '@/components/home/ProblemSolution'
import { WhyEnterprise } from '@/components/home/WhyEnterprise'



export default function HomePage() {
  return (
    <main className="bg-white pt-[0.1px]">
      <div className="px-1 sm:px-4 md:px-1">
        <div className="flex flex-col h-[100dvh]">
          <HeroSection />
          <MarqueeStrip />
        </div>
        
        <div className="w-full mx-auto xl:max-w-[1300px] px-4 sm:px-8 md:px-12 xl:px-0 pt-8">
          <ServicesGrid />
          <TrustBadges />
          <ProblemSolution />
          <WhyEnterprise />
        </div>
      </div>
    </main>
  )
}