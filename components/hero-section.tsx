"use client"

import { Button } from "@/components/ui/button"
import { Download, Shield, Heart, Users } from "lucide-react"
import { PhoneMockup } from "@/components/ui/phone-mockup"
import { BackgroundDecor } from "@/components/ui/background-decor"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-medoniq-light/30 to-medoniq-light overflow-hidden py-24 lg:py-32">
      <BackgroundDecor />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-medoniq-primary/10 rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2.5 h-2.5 bg-medoniq-success rounded-full"></div>
              <span className="text-sm font-medium text-medoniq-primary">Trusted by 50,000+ families</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-medoniq-primary leading-tight mb-6 font-sans">
              Your Family&apos;s Health,{" "}
              <span className="text-medoniq-accent bg-gradient-to-r from-medoniq-accent to-medoniq-primary bg-clip-text text-transparent">
                Harmony at Last
              </span>
            </h1>

            <p className="text-lg text-medoniq-secondary leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-sans">
              Medoniq is the smart assistant that manages medications, stores health records, and connects your family
              for simpler, safer care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="/medoniq.apk"
                download="medoniq.apk"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-medoniq-primary to-medoniq-accent hover:from-medoniq-primary/90 hover:to-medoniq-accent/90 text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg border-0 relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  <Download size={22} className="relative z-10" />
                  <span className="text-base relative z-10">Download Medoniq APK</span>
                </Button>
              </a>
           </div>



            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-medoniq-secondary">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-medoniq-success" />
                <span className="font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-medoniq-error" />
                <span className="font-medium">Family Trusted</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-medoniq-accent" />
                <span className="font-medium">50K+ Users</span>
              </div>
            </div>
          </div>

          <PhoneMockup />
        </div>
      </div>

      {/* Custom CSS for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  )
}
