import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ScrollAnimation direction="scale" delay={200} duration={900} stagger>
          <BenefitsSection />
        </ScrollAnimation>
        <ScrollAnimation direction="fade" delay={300} duration={1200}>
          <HowItWorksSection />
        </ScrollAnimation>
        <ScrollAnimation direction="bounce" delay={100} duration={900} stagger>
          <TestimonialsSection />
        </ScrollAnimation>
        <ScrollAnimation direction="rotate" delay={200} duration={1200}>
          <FinalCTASection />
        </ScrollAnimation>
        <ScrollAnimation direction="scale" delay={150} duration={900}>
          <FAQSection />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  )
}
