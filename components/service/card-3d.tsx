/**
 * Card3D Component - Pure CSS 3D flip cards
 *
 * 3D ASSET SLOTS:
 * - Replace service.icon with custom 3D models (GLB/GLTF)
 * - Add Spline scenes: <Spline scene="/public/services/[service-name].splinecode" />
 * - Icon animations can be enhanced with R3F or Spline
 */

"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
}

interface Card3DProps {
  service: Service
  index: number
}

export function Card3D({ service, index }: Card3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.8, 0.5, 1],
      }}
      className="card3d h-80 group cursor-pointer"
      tabIndex={0}
      role="button"
      aria-label={`${service.title} service details`}
    >
      <div className="inner">
        {/* Front Face */}
        <div className="front glassmorphism border border-white/10">
          <div className="p-8 text-center">
            {/* 3D ASSET SLOT: Replace with custom 3D icon or Spline scene */}
            <service.icon
              className="h-16 w-16 mb-6 mx-auto transition-transform duration-300 group-hover:scale-110"
              style={{ color: service.color }}
            />
            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
            <p className="text-gray-300 leading-relaxed">{service.description}</p>
          </div>
        </div>

        {/* Back Face */}
        <div className="back glassmorphism border border-white/10">
          <div className="p-8 h-full flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: service.color }}>
              {service.title}
            </h3>
            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: featureIndex * 0.1,
                    duration: 0.4,
                    ease: [0.25, 0.8, 0.5, 1],
                  }}
                  className="flex items-center text-gray-300 text-sm"
                >
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: service.color }} />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
