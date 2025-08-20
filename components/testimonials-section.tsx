"use client"

import { Star, Quote, User, Briefcase, TrendingUp, Brain, Code, Users, DollarSign, CheckCircle } from "lucide-react"

const testimonials = [
  {
    quote:
      "As a pharmacist, I understand the importance of medication adherence. Medoniq has revolutionized how I help my patients manage their prescriptions and health records.",
    author: "Atef Rabie",
    role: "Pharmacist Doctor",
    avatar: "A",
    rating: 5,
  },
  {
    quote:
      "Finally, all our family's health information in one secure place. The medication reminders have been a game-changer for our busy household.",
    author: "Islam Sabri",
    role: "Father of Three",
    avatar: "I",
    rating: 5,
  },
  {
    quote:
      "The AI insights helped me catch a potential drug interaction before it became a problem. This app truly cares about our family's wellbeing.",
    author: "Abeer Ismail",
    role: "Mother & Healthcare Worker",
    avatar: "A",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-medoniq-primary mb-4">Trusted by Families Everywhere</h2>
          <p className="text-xl text-medoniq-secondary max-w-3xl mx-auto">
            See how Medoniq is helping families stay healthy and connected across the globe.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-medoniq-light rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-medoniq-accent rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-medoniq-primary mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-medoniq-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-medoniq-primary">{testimonial.author}</div>
                  <div className="text-sm text-medoniq-secondary">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-medoniq-primary mb-4">Our Expert Team</h2>
          <p className="text-xl text-medoniq-secondary max-w-3xl mx-auto">Diverse skills driving Medoniq's success</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mahmoud ABD ELKream */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-medoniq-light rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-medoniq-primary">
                <User className="w-10 h-10 text-medoniq-primary" />
              </div>
              <h3 className="text-xl font-bold text-medoniq-primary mb-2">Mahmoud ABD ELKream</h3>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <Briefcase className="w-3 h-3" />
                  PM
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <User className="w-3 h-3" />
                  UI/UX
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <Brain className="w-3 h-3" />
                  AI/ML
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <Code className="w-3 h-3" />
                  Dev
                </span>
              </div>
              <p className="text-medoniq-secondary leading-relaxed">
                Product vision and technical leadership with expertise in AI and mobile development.
              </p>
            </div>
          </div>

          {/* Mohaned Mohamed */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-medoniq-light rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-medoniq-primary">
                <User className="w-10 h-10 text-medoniq-primary" />
              </div>
              <h3 className="text-xl font-bold text-medoniq-primary mb-2">Mohaned Mohamed</h3>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <Code className="w-3 h-3" />
                  Dev
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <TrendingUp className="w-3 h-3" />
                  Marketing
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <Briefcase className="w-3 h-3" />
                  Business Dev
                </span>
              </div>
              <p className="text-medoniq-secondary leading-relaxed">
                Technical expertise combined with marketing strategy and business development skills.
              </p>
            </div>
          </div>

          {/* Yunus ABD Ghaffar */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-medoniq-light rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-medoniq-primary">
                <User className="w-10 h-10 text-medoniq-primary" />
              </div>
              <h3 className="text-xl font-bold text-medoniq-primary mb-2">Yunus ABD Ghaffar</h3>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <Briefcase className="w-3 h-3" />
                  Product Owner
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <Users className="w-3 h-3" />
                  Customer Success
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <DollarSign className="w-3 h-3" />
                  Finance
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  QA
                </span>
              </div>
              <p className="text-medoniq-secondary leading-relaxed">
                Product management with focus on customer experience and financial oversight.
              </p>
            </div>
          </div>

          {/* Mohammed Hassan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-medoniq-light rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-medoniq-primary">
                <User className="w-10 h-10 text-medoniq-primary" />
              </div>
              <h3 className="text-xl font-bold text-medoniq-primary mb-2">Mohammed Hassan</h3>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <DollarSign className="w-3 h-3" />
                  Finance
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <Briefcase className="w-3 h-3" />
                  Business Dev
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <Code className="w-3 h-3" />
                  Dev
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-medoniq-primary text-white text-sm rounded-full">
                  <Brain className="w-3 h-3" />
                  AI/ML
                </span>
              </div>
              <p className="text-medoniq-secondary leading-relaxed">
                Financial strategy and business development with strong technical background.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
