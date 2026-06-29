"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

type Card3DProps = {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
  service?: {
    title: string
    category: string
  }
}

export default function Card3D({ front, back, className = "", service }: Card3DProps) {
  const router = useRouter()

  const handleViewPortfolio = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (service) {
      const categoryMap: { [key: string]: string } = {
        "Full-Stack Development": "Web Design",
        "AI Integration": "AI/ML",
        "SEO Mastery": "Web Design",
        "UI/UX Design": "Web Design",
        "Data Solutions": "AI/ML",
        "Security & Performance": "Web Design",
        "Cross Platform App Development": "Web Design",
        "SEO & Social Media Management": "Web Design",
        "AI Automation & Chatbots": "AI/ML",
        "Video & Photo Editing": "Web Design",
        "IT Support & Business Listings": "Web Design",
        "Lead Generation & YouTube Automation": "Web Design",
        "Amazon VA PPC Services": "E-commerce",
      }

      const category = categoryMap[service.title] || "All"
      router.push(`/portfolio?category=${encodeURIComponent(category)}`)
    }
  }

  const handleStartService = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (service) {
      router.push(`/contact?service=${encodeURIComponent(service.title)}`)
    }
  }

  return (
    <div
      className={`card3d group relative w-full h-80 cursor-pointer ${className}`}
      tabIndex={0}
      role="button"
      aria-label="Flip card to see details"
    >
      <div className="inner-transition">
        <div className="card-face front-face">{front}</div>
        <div className="card-face back-face rotate-y-180">
          <div className="h-full flex flex-col">
            <div className="flex-1">{back}</div>
            {service && (
              <div className="mt-4 space-y-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleViewPortfolio}
                  className="w-full px-4 py-2 bg-[#00FFC6] text-black font-semibold rounded-lg hover:bg-[#00FFC6]/90 transition-colors text-sm"
                >
                  View Portfolio
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartService}
                  className="w-full px-4 py-2 border border-[#00FFC6] text-[#00FFC6] font-semibold rounded-lg hover:bg-[#00FFC6]/10 transition-colors text-sm"
                >
                  Start This Service
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
