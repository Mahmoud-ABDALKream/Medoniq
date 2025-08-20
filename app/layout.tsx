import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Medoniq - Your Family's Health, Harmony at Last",
  description:
    "Medoniq is the smart assistant that manages medications, stores health records, and connects your family for simpler, safer care.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-serif: ${inter.variable};
}
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
