"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export function PolyLogo() {
  const logoRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={logoRef} className="relative w-64 h-64 mx-auto">
      <motion.div
        className="absolute inset-0"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0, -15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-4 border-2 border-[#00FFC6]/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Middle ring */}
        <motion.div
          className="absolute inset-8 border-2 border-[#5000A8]/50 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute inset-12 border-2 border-[#00FFC6]/70 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-[#00FFC6] to-[#5000A8] rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-[#00FFC6]/50"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 20px rgba(0, 255, 198, 0.5)",
                "0 0 40px rgba(0, 255, 198, 0.8)",
                "0 0 20px rgba(0, 255, 198, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            V
          </motion.div>
        </div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00FFC6] rounded-full"
            style={{
              left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 8)}%`,
              top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 8)}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
