"use client"

import { motion } from "framer-motion"
import type React from "react"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  label: string
  onClick?: () => void
  className?: string
  children?: React.ReactNode
  variant?: "primary" | "secondary"
}

export default function CTAButton({ label, onClick, className = "", children, variant = "primary" }: CTAButtonProps) {
  const isPrimary = variant === "primary"

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300",
        isPrimary 
          ? "bg-[#00FFC6] text-[#050505] shadow-[0_0_20px_rgba(0,255,198,0.3)] hover:shadow-[0_0_35px_rgba(0,255,198,0.5)]" 
          : "bg-transparent text-white border border-white/20 hover:border-[#00FFC6]/50 hover:text-[#00FFC6]",
        className
      )}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {label}
      </span>
      {isPrimary && (
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
      )}
    </motion.button>
  )
}