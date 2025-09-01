import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { TikTokIcon } from "@/components/ui/tiktok-icon"

export function Footer() {
  return (
    <footer className="bg-medoniq-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo & Description */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/medoniq-logo.png"
              alt="Medoniq Logo"
              width={80}
              height={80}
              className="h-20 w-20 rounded-full shadow-lg ring-2 ring-white/30"
            />
          </div>
          <p className="text-blue-100 leading-relaxed max-w-lg mx-auto text-base">
            Medoniq is the smart health assistant that helps families manage medications, 
            store health records, and stay connected for better care coordination.
          </p>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="lg:col-span-1 lg:text-center">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#download"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 lg:text-center">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center space-x-2">
                <Phone size={18} />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <Mail size={18} />
                <span>info@medoniq.com</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <MapPin size={18} />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1 lg:text-center">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="https://tiktok.com" target="_blank">
                <TikTokIcon className="hover:text-blue-400 transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 text-center text-sm text-blue-200">
          © {new Date().getFullYear()} Medoniq. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
