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
  title: "Medoniq | المنصة الذكية للرعاية الصحية في مصر",
  description:
    "Medoniq منصة رعاية صحية ذكية بتسهّل التواصل بين الأطباء والمرضى، وتوفر حجز مواعيد، تذكيرات تلقائية، وخدمات موثوقة. ابحث عن أطباء، مستشفيات، أدوية بسهولة في مصر.",
  keywords:
    "رعاية صحية, أطباء, مستشفيات, أدوية, عيادات, حجز مواعيد, أونلاين, مصر, healthcare Egypt, doctors, hospitals, medicine",
  openGraph: {
    title: "Medoniq | المنصة الذكية للرعاية الصحية في مصر",
    description:
      "Medoniq منصة رعاية صحية ذكية بتسهّل التواصل بين الأطباء والمرضى، وتوفر حجز مواعيد، تذكيرات تلقائية، وخدمات موثوقة. ابحث عن أطباء، مستشفيات، أدوية بسهولة في مصر.",
    url: "https://medoniqeg.vercel.app",
    siteName: "Medoniq",
    images: [
      {
        url: "/images/health-icon.png",
        width: 1400,
        height: 1200,
        alt: "Medoniq Logo",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medoniq | المنصة الذكية للرعاية الصحية في مصر",
    description:
      "Medoniq منصة رعاية صحية ذكية بتسهّل التواصل بين الأطباء والمرضى، وتوفر حجز مواعيد، تذكيرات تلقائية، وخدمات موثوقة. ابحث عن أطباء، مستشفيات، أدوية بسهولة في مصر.",
    images: ["/images/health-icon.png"],
  },
  icons: {
    icon: "/images/medoniq.ico", 
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "name": "Medoniq",
      "url": "https://www.medoniq.com",
      "logo": "https://www.medoniq.com/images/health-icon.png",
      "description":
        "Medoniq منصة رعاية صحية ذكية بتسهّل التواصل بين الأطباء والمرضى، وتوفر حجز مواعيد، تذكيرات تلقائية، وخدمات موثوقة. ابحث عن أطباء، مستشفيات، أدوية بسهولة في مصر.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+20-1555783152",
        "contactType": "Customer Service",
      },
    },
    {
      "@type": "WebSite",
      "url": "https://www.medoniq.com",
      "name": "Medoniq",
      "publisher": {
        "@type": "MedicalOrganization",
        "name": "Medoniq",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar-EG">
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-serif: ${inter.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
