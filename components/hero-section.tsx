"use client"

import { Button } from "@/components/ui/button"
import { Download, Shield, Heart, Users } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-medoniq-light/30 to-medoniq-light overflow-hidden py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-medoniq-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-medoniq-accent rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-medoniq-success rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-medoniq-primary rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-4 h-4 bg-medoniq-accent/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-12 w-6 h-6 bg-medoniq-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/5 w-3 h-3 bg-medoniq-success/30 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-medoniq-accent/15 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-medoniq-primary/20 rounded-full px-4 py-2 mb-6 shadow-sm">
              <div className="w-2 h-2 bg-medoniq-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-medoniq-primary">Trusted by 50,000+ families</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-medoniq-primary leading-tight mb-6 font-sans">
              Your Family's Health,{" "}
              <span className="text-medoniq-accent bg-gradient-to-r from-medoniq-accent to-medoniq-primary bg-clip-text text-transparent">
                Harmony at Last
              </span>
            </h1>

            <p className="text-xl text-medoniq-secondary leading-relaxed mb-8 max-w-2xl font-sans">
              Medoniq is the smart assistant that manages medications, stores health records, and connects your family
              for simpler, safer care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-medoniq-primary to-medoniq-accent hover:from-medoniq-primary/90 hover:to-medoniq-accent/90 text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-0 relative overflow-hidden group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/medoniq.apk';
                  link.download = 'medoniq.apk';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <Download size={24} className="relative z-10" />
                <span className="text-lg relative z-10">Download Medoniq APK</span>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-medoniq-secondary">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 py-2">
                <Shield className="w-4 h-4 text-medoniq-success" />
                <span className="font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 py-2">
                <Heart className="w-4 h-4 text-medoniq-error" />
                <span className="font-medium">Family Trusted</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 py-2">
                <Users className="w-4 h-4 text-medoniq-accent" />
                <span className="font-medium">50K+ Users</span>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end relative z-10">
            <div className="relative">
              <div className="relative w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-medoniq-primary/20 to-medoniq-accent/20 rounded-[3rem] blur-xl scale-105 opacity-50"></div>

                <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-medoniq-primary to-medoniq-accent h-12 flex items-center justify-between px-6 text-white text-sm font-medium">
                    <span>9:41</span>
                    <span className="font-bold">Medoniq</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white/90 rounded-sm"></div>
                      <div className="w-1 h-2 bg-white/70 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 space-y-6 bg-gradient-to-b from-white to-medoniq-light/20">
                    {/* Welcome Message */}
                    <div className="bg-medoniq-light rounded-xl p-4">
                      <h3 className="font-semibold text-medoniq-primary mb-2">Good Morning, Sarah!</h3>
                      <p className="text-sm text-medoniq-secondary">You have 2 medications due today</p>
                    </div>

                    {/* Medication Reminder with Pulsing Animation */}
                    <div className="bg-white border-2 border-medoniq-accent rounded-xl p-4 relative">
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-medoniq-error rounded-full animate-pulse"></div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-medoniq-accent rounded-full flex items-center justify-center">
                          <Image
                            src="/images/health-icon.png"
                            alt="Medication"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-medoniq-primary">Metformin</h4>
                          <p className="text-sm text-medoniq-secondary">Due in 30 minutes</p>
                        </div>
                      </div>
                    </div>

                    {/* Family Members */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-medoniq-primary">Family Health</h4>
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-medoniq-light rounded-full flex items-center justify-center">
                          <span className="text-medoniq-primary font-semibold">D</span>
                        </div>
                        <div className="w-12 h-12 bg-medoniq-light rounded-full flex items-center justify-center">
                          <span className="text-medoniq-primary font-semibold">M</span>
                        </div>
                        <div className="w-12 h-12 bg-medoniq-light rounded-full flex items-center justify-center">
                          <span className="text-medoniq-primary font-semibold">J</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-medoniq-light rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-medoniq-primary rounded-full mx-auto mb-2"></div>
                        <span className="text-xs text-medoniq-primary font-medium">Add Medication</span>
                      </div>
                      <div className="bg-medoniq-light rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-medoniq-accent rounded-full mx-auto mb-2"></div>
                        <span className="text-xs text-medoniq-primary font-medium">Health Records</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-medoniq-success to-medoniq-accent rounded-full opacity-20 animate-bounce flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-r from-medoniq-primary to-medoniq-accent rounded-full opacity-30 animate-pulse flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-medoniq-light rounded-full opacity-40 animate-ping"></div>
              <div className="absolute top-1/4 -right-8 w-6 h-6 bg-medoniq-accent/30 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
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
