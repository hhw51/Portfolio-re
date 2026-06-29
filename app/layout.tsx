import type React from "react"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import WhatsAppChatbot from "@/components/whatsapp-chatbot"

// --- TYPOGRAPHY CONFIGURATION ---
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
})

// --- SEO & GLOBAL METADATA ---
export const metadata = {
  metadataBase: new URL("https://wyne-portfolio.vercel.app"),
  title: {
    default: "Haris Wyne | Full Stack Engineer & AI Solutions Architect",
    template: "%s | Haris Wyne",
  },
  description:
    "Full-stack engineer with 2+ years building scalable web applications. Specialist in Next.js, React, Spring Boot, and AI integration. Expert in architecting high-performance systems and leading technical teams.",
  
  // --- ADDED FAVICON CONFIGURATION HERE ---
  icons: {
    icon: "/logo.ico",
  },
  
  keywords: [
    "haris wyne",
    "full stack developer",
    "next.js developer",
    "react developer",
    "spring boot engineer",
    "AI integration",
    "web development",
    "software engineer",
    "pakistan developer",
  ],
  authors: [{ name: "Haris Wyne" }],
  creator: "Haris Wyne",
  publisher: "Haris Wyne",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wyne-portfolio.vercel.app",
    title: "Haris Wyne | Full Stack Engineer & AI Solutions Architect",
    description: "2+ years building scalable web applications. Next.js, React, Spring Boot, and AI integration specialist.",
    siteName: "Haris Wyne",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haris Wyne Full Stack Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haris Wyne | Full Stack Engineer",
    description: "Architecting high-performance systems and innovative AI solutions.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // --- STRUCTURED DATA (JSON-LD) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Haris Wyne",
    "url": "https://wyne-portfolio.vercel.app",
    "logo": "https://wyne-portfolio.vercel.app/logo.png",
    "jobTitle": "Full Stack Engineer",
    "description": "Full-stack engineer with 2+ years experience building scalable web applications. Specialist in Next.js, React, Spring Boot, and AI integration.",
    "areaServed": [
      { "@type": "Country", "name": "Worldwide" }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-321-9981625",
      "contactType": "Work",
      "availableLanguage": ["English"],
    },
    "email": "haris.wyne10@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/haris-wyne",
      "https://github.com/hhw51"
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <meta name="theme-color" content="#050505" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      
      <body className="antialiased font-sans bg-[#050505] text-white selection:bg-[#00FFC6] selection:text-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          
          <main className="relative min-h-screen">
            {children}
          </main>
          
          <WhatsAppChatbot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
