"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface GlassmorphismButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "secondary"
}

export function GlassmorphismButton({
  children,
  onClick,
  className = "",
  variant = "default",
}: GlassmorphismButtonProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        z: 10,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        onClick={onClick}
        className={`
          relative overflow-hidden px-8 py-4 rounded-lg font-medium transition-all duration-300
          ${variant === "default" ? "text-[#00FFC6]" : "text-white"}
          ${className}
        `}
        variant="outline"
        style={{
          // Safari-compatible glassmorphism
          background: "rgba(30, 0, 51, 0.3)",
          border: `1px solid ${variant === "default" ? "rgba(0, 255, 198, 0.4)" : "rgba(255, 255, 255, 0.3)"}`,
          backdropFilter: "blur(10px) saturate(180%)",
          WebkitBackdropFilter: "blur(10px) saturate(180%)",
          // Safari-compatible glow
          boxShadow:
            variant === "default"
              ? "0 0 8px rgba(0, 255, 198, 0.3), inset 0 0 8px rgba(0, 255, 198, 0.1)"
              : "0 0 8px rgba(255, 255, 255, 0.2), inset 0 0 8px rgba(255, 255, 255, 0.05)",
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget as HTMLElement
          target.style.borderColor = variant === "default" ? "rgba(0, 255, 198, 0.6)" : "rgba(255, 255, 255, 0.5)"
          target.style.boxShadow =
            variant === "default"
              ? "0 0 12px rgba(0, 255, 198, 0.4), inset 0 0 12px rgba(0, 255, 198, 0.15)"
              : "0 0 12px rgba(255, 255, 255, 0.3), inset 0 0 12px rgba(255, 255, 255, 0.1)"
          target.style.background = variant === "default" ? "rgba(0, 255, 198, 0.1)" : "rgba(255, 255, 255, 0.1)"
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget as HTMLElement
          target.style.borderColor = variant === "default" ? "rgba(0, 255, 198, 0.4)" : "rgba(255, 255, 255, 0.3)"
          target.style.boxShadow =
            variant === "default"
              ? "0 0 8px rgba(0, 255, 198, 0.3), inset 0 0 8px rgba(0, 255, 198, 0.1)"
              : "0 0 8px rgba(255, 255, 255, 0.2), inset 0 0 8px rgba(255, 255, 255, 0.05)"
          target.style.background = "rgba(30, 0, 51, 0.3)"
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  )
}
