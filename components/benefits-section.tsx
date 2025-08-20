"use client"

import { Bell, FileText, Users, Brain } from "lucide-react"

const benefits = [
  {
    icon: Bell,
    title: "Never Miss a Dose",
    description: "Smart reminders and family alerts ensure medications are taken on time, every time.",
    color: "text-medoniq-accent",
    bgColor: "bg-medoniq-accent/10",
  },
  {
    icon: FileText,
    title: "All Health Info in One Place",
    description: "Digital vault for prescriptions, lab results, and medical records accessible anywhere.",
    color: "text-medoniq-primary",
    bgColor: "bg-medoniq-primary/10",
  },
  {
    icon: Users,
    title: "Care Together, From Anywhere",
    description: "Shared access for family members to coordinate care and stay connected.",
    color: "text-medoniq-success",
    bgColor: "bg-green-100",
  },
  {
    icon: Brain,
    title: "Smarter Health Insights",
    description: "AI-powered symptom checker and personalized doctor recommendations.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
]

export function BenefitsSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-medoniq-primary mb-4">Why Families Choose Medoniq</h2>
          <p className="text-xl text-medoniq-secondary max-w-3xl mx-auto">
            Comprehensive health management designed for modern families who want peace of mind and better care
            coordination.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-medoniq-primary mb-3 group-hover:text-medoniq-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-medoniq-secondary leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 bg-medoniq-light rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-medoniq-primary mb-2">500K+</div>
              <div className="text-medoniq-secondary">Families Trust Medoniq</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medoniq-primary mb-2">99.9%</div>
              <div className="text-medoniq-secondary">Medication Adherence Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medoniq-primary mb-2">24/7</div>
              <div className="text-medoniq-secondary">Health Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
