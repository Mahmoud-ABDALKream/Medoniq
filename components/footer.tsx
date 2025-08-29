import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { TikTokIcon } from "@/components/ui/tiktok-icon"

export function Footer() {
  return (
    <footer className="bg-medoniq-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image src="/images/medoniq-logo.png" alt="Medoniq" width={140} height={40} className="h-8 w-auto" />
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
              Medoniq is the smart health assistant that helps families manage medications, store health records, and
              stay connected for better care coordination.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61579766157171"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/medoniq/posts/?feedView=all"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@medoniq?is_from_webapp=1&sender_device=pc"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <TikTokIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-blue-100 hover:text-white transition-colors duration-200">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Download
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-blue-100 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-blue-100">
                <Mail className="w-4 h-4" />
                <span>medoniqeg@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <Phone className="w-4 h-4" />
                <span>01555783152</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <MapPin className="w-4 h-4" />
                <span>Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-blue-100 text-sm">
            © 2025 Medoniq. All rights reserved. Your family&apos;s health, our priority.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
              HIPAA Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
