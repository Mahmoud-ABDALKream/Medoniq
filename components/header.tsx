"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/health-icon.png" alt="Medoniq Logo" width={52} height={52} className="h-16 w-16" />
              <span className="text-2xl font-bold text-medoniq-primary">Medoniq</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-medoniq-primary hover:text-medoniq-accent transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-medoniq-primary hover:text-medoniq-accent transition-colors duration-200 font-medium"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-medoniq-primary hover:text-medoniq-accent transition-colors duration-200 font-medium"
            >
              How It Works
            </Link>
            {/* Changed to anchor that downloads the APK */}
            <a
              href="/medoniq.apk"
              download
              className="text-medoniq-primary hover:text-medoniq-accent transition-colors duration-200 font-medium"
            >
              Download APK
            </a>
            <Link
              href="#faq"
              className="text-medoniq-primary hover:text-medoniq-accent transition-colors duration-200 font-medium"
            >
              FAQ
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Button
              className="bg-medoniq-accent hover:bg-medoniq-primary text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
              asChild
            >
              {/* changed from <Link href="#download"> to an anchor that downloads the file */}
              <a href="/medoniq.apk" download>
                Download APK
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-medoniq-primary hover:text-medoniq-accent transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link
                href="#home"
                className="block px-3 py-2 text-medoniq-primary hover:text-medoniq-accent hover:bg-medoniq-light rounded-md transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="#features"
                className="block px-3 py-2 text-medoniq-primary hover:text-medoniq-accent hover:bg-medoniq-light rounded-md transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="block px-3 py-2 text-medoniq-primary hover:text-medoniq-accent hover:bg-medoniq-light rounded-md transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                How It Works
              </Link>
              {/* Mobile download anchor: downloads and closes the menu */}
              <a
                href="/medoniq.apk"
                download
                className="block px-3 py-2 text-medoniq-primary hover:text-medoniq-accent hover:bg-medoniq-light rounded-md transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Download APK
              </a>
              <Link
                href="#faq"
                className="block px-3 py-2 text-medoniq-primary hover:text-medoniq-accent hover:bg-medoniq-light rounded-md transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                FAQ
              </Link>
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-medoniq-accent hover:bg-medoniq-primary text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                  asChild
                >
                  {/* changed from Link to anchor; call toggleMenu as well so the menu closes */}
                  <a
                    href="/medoniq.apk"
                    download
                    onClick={toggleMenu}
                  >
                    Download APK
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}