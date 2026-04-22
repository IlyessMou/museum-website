import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { PavillonsSection } from "@/components/pavillons-section"
import { StatisticsSection } from "@/components/statistics-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SolutionsSection } from "@/components/solutions-section"
import { QuizSection } from "@/components/quiz-section"
import { TeamSection } from "@/components/team-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <PavillonsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <SolutionsSection />
      <QuizSection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
