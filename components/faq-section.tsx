"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Is Medoniq secure and HIPAA compliant?",
    answer:
      "Yes, Medoniq is fully HIPAA compliant and uses bank-level encryption to protect your family's health information. All data is stored securely and never shared without your explicit consent.",
  },
  {
    question: "How much does Medoniq cost?",
    answer:
      "Medoniq is free to download and use for basic features. Premium features like advanced AI insights and unlimited family members are available through our affordable subscription plans.",
  },
  {
    question: "Can I use Medoniq for multiple family members?",
    answer:
      "Medoniq is designed for families. You can add multiple family members, set up shared access, and coordinate care across generations from one central app.",
  },
  {
    question: "What happens if I miss a medication reminder?",
    answer:
      "Medoniq sends multiple gentle reminders and can alert designated family members if medications are missed. The app learns your patterns and adjusts reminder timing for better adherence.",
  },
  {
    question: "Is my data backed up if I lose my phone?",
    answer:
      "Yes, all your health data is securely backed up to the cloud. Simply log in to your account on a new device to access all your information and continue managing your family's health.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-medoniq-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-medoniq-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-medoniq-secondary">
            Get answers to common questions about Medoniq and family health management.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-medoniq-primary pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-medoniq-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-medoniq-accent flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-medoniq-secondary leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-medoniq-secondary mb-4">Still have questions?</p>
          <button className="bg-medoniq-accent hover:bg-medoniq-primary text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
