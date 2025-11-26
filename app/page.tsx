import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import CollaboratorsStrip from '@/components/CollaboratorsStrip'
import SectionCluster from '@/components/SectionCluster'
import HowItWorks from '@/components/HowItWorks'
import ProblemVsFuture from '@/components/ProblemVsFuture'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <CollaboratorsStrip />
      
      {/* Domains cluster section */}
      <section id="product" className="bg-black">
        <div className="section-padding">
          <div className="container-width text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              From chaos to clarity across your funnel.
            </h2>
          </div>
        </div>
        <SectionCluster
          title="Traffic you can actually explain"
          subtitle="GA4 + social reach + click data → one story about where visitors come from and what changed since last week."
          description="Stop guessing which channel drove results. ClarityGrid fuses traffic data from all your sources into a single narrative. See exactly where your visitors came from, what changed week-over-week, and which channels are trending up or down—all in plain language."
          videoSrc="/videos/analytics-grid.mp4"
        />
        <SectionCluster
          title="Conversion insights without another dashboard"
          subtitle="Surfaces the key drop-off points and suggests 2–3 tests to run."
          description="Identify bottlenecks before they cost you revenue. ClarityGrid analyzes your conversion funnel, highlights where visitors are dropping off, and recommends specific A/B tests or UX improvements based on your actual data patterns."
          reverse={true}
        />
        <SectionCluster
          title="Retention alerts before revenue leaks"
          subtitle="Daily check that flags when returning visitors, subscribers, or repeat buyers start dropping off, with recommended actions."
          description="Catch retention issues early. When returning visitors, subscribers, or repeat buyers start declining, ClarityGrid alerts you immediately with context about what changed and concrete steps to reverse the trend."
        />
      </section>

      <HowItWorks />
      <ProblemVsFuture />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Waitlist />
      <Footer />
    </main>
  )
}

