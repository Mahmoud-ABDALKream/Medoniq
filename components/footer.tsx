import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { TikTokIcon } from "@/components/ui/tiktok-icon";

export function Footer() {
  return (
    <footer className="bg-medoniq-primary/95 text-white border-t border-white/10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo & Description */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <Image
              src="/images/medoniq-logo.png"
              alt="Medoniq Logo"
              width={80}
              height={80}
              className="h-20 w-20 rounded-full shadow-xl ring-2 ring-white/40 bg-white/10"
              priority
            />
          </div>
          <h2 className="text-2xl font-bold mb-2 tracking-tight">Medoniq</h2>
          <p className="text-blue-100 leading-relaxed max-w-md mx-auto text-base">
            Medoniq is your intelligent health assistant for families. Seamlessly manage medications, health records, and care coordination — securely and simply.
          </p>
        </div>

        {/* Links & Contact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-blue-100 hover:text-white font-medium transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-blue-100 hover:text-white font-medium transition-colors duration-200"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#download"
                  className="text-blue-100 hover:text-white font-medium transition-colors duration-200"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-blue-100 hover:text-white font-medium transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-5 tracking-wide">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-blue-100 hover:text-white font-medium transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#careers"
                  className="text-blue-100 hover:text-white font-medium transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#privacy"
                  className="text-blue-100 hover:text-white font-medium transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#terms"
                  className="text-blue-100 hover:text-white font-medium transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-5 tracking-wide">Contact</h3>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-blue-300" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-blue-300" />
                <span>
                  <a href="mailto:info@medoniq.com" className="hover:text-white transition-colors">
                    info@medoniq.com
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-blue-300" />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-5 tracking-wide">Follow Us</h3>
            <div className="flex justify-start lg:justify-center space-x-7">
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook className="hover:text-blue-400 transition-colors" size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="hover:text-blue-400 transition-colors" size={24} />
              </Link>
              <Link href="https://tiktok.com" target="_blank" aria-label="TikTok">
                <TikTokIcon className="hover:text-blue-400 transition-colors" size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200 gap-2">
          <div>
            © {new Date().getFullYear()} <span className="font-semibold">Medoniq</span>. All rights reserved.
          </div>
          <div>
            Made with <span className="text-red-400 mx-0.5">♥</span> in Egypt
          </div>
        </div>
      </div>
    </footer>
  );
}
