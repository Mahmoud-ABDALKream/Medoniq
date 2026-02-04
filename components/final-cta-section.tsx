"use client"

import { Shield, Heart, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-br from-medoniq-primary to-medoniq-accent text-white relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 border border-white/20 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Animated Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
            <Heart className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">Start Your Family&apos;s Health Journey Today</h2>

        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Join over 500,000 families who trust Medoniq to keep their loved ones healthy, safe, and connected.
        </p>

        {/* App Store Buttons */}
        <div className="flex justify-center mb-12">
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-medoniq-primary px-12 py-6 rounded-xl flex items-center gap-4 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Download size={32} />
            <div className="text-left">
              <div className="text-sm font-medium">Download</div>
              <div className="text-xl font-bold">Medoniq APK</div>
            </div>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Free to Download</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Bank-Level Security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
