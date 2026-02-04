"use client"

import { Download, UserPlus, Users, Heart } from "lucide-react"

const steps = [
  {
    icon: Download,
    title: "Download",
    description: "Get Medoniq from the App Store or Google Play in seconds.",
    color: "text-medoniq-accent",
    bgColor: "bg-medoniq-accent/10",
    borderColor: "border-medoniq-accent",
  },
  {
    icon: UserPlus,
    title: "Set Up Profile",
    description: "Create your secure health profile with medications and conditions.",
    color: "text-medoniq-primary",
    bgColor: "bg-medoniq-primary/10",
    borderColor: "border-medoniq-primary",
  },
  {
    icon: Users,
    title: "Add Family",
    description: "Invite family members to join your health circle for shared care.",
    color: "text-medoniq-success",
    bgColor: "bg-green-100",
    borderColor: "border-green-400",
  },
  {
    icon: Heart,
    title: "Stay Connected",
    description: "Receive smart reminders and insights to keep everyone healthy.",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    borderColor: "border-pink-400",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-medoniq-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-medoniq-primary mb-4">How It Works</h2>
          <p className="text-xl text-medoniq-secondary max-w-3xl mx-auto">
            Get started with Medoniq in just a few simple steps. Your family&apos;s health journey begins here.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center group">
                  {/* Step Number */}
                  <div className="flex justify-center mb-6">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-medoniq-primary font-bold text-lg shadow-lg border-2 border-medoniq-light group-hover:border-medoniq-accent transition-all duration-300 font-sans">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon Container */}
                  <div
                    className={`w-24 h-24 ${step.bgColor} ${step.borderColor} border-2 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 ease-out`}
                  >
                    <IconComponent
                      className={`w-12 h-12 ${step.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-medoniq-primary mb-4 group-hover:text-medoniq-accent transition-colors duration-300 font-sans">
                    {step.title}
                  </h3>
                  <p className="text-medoniq-secondary leading-relaxed text-base font-sans font-normal px-2">
                    {step.description}
                  </p>

                  {/* Animated checkmark on hover */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-8 h-8 bg-medoniq-success rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-medoniq-primary mb-4">Ready to Get Started?</h3>
            <p className="text-medoniq-secondary mb-6">
              Join thousands of families who trust Medoniq for their health management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-medoniq-accent hover:bg-medoniq-primary text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Download size={20} />
                Download APK
              </button>
              <button className="border-2 border-medoniq-primary text-medoniq-primary hover:bg-medoniq-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
