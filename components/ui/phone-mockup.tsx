"use client"

import Image from "next/image"
import { Heart, Shield } from "lucide-react"

export function PhoneMockup() {
  return (
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
  )
}
