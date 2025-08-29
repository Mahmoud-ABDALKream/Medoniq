import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ScrollAnimation variants={sectionVariants} duration={0.8}>
          <BenefitsSection />
        </ScrollAnimation>
        <ScrollAnimation variants={sectionVariants} duration={0.8} delay={0.2}>
          <HowItWorksSection />
        </ScrollAnimation>
        <ScrollAnimation variants={sectionVariants} duration={0.8} delay={0.2}>
          <TestimonialsSection />
        </ScrollAnimation>
        <ScrollAnimation variants={sectionVariants} duration={0.8} delay={0.2}>
          <FinalCTASection />
        </ScrollAnimation>
        <ScrollAnimation variants={sectionVariants} duration={0.8} delay={0.2}>
          <FAQSection />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  )
}
