"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    number: "40+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries",
    color: "#00FFC6",
  },
  {
    icon: Users,
    number: "20+",
    label: "Happy Clients",
    description: "Satisfied clients who trust us with their digital transformation",
    color: "#5000A8",
  },
  {
    icon: Clock,
    number: "3+",
    label: "Years Experience",
    description: "Years of expertise in cutting-edge technology solutions",
    color: "#5000A8",
  },
]

export function CompanyStats() {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our <span className="text-[#00FFC6]">Track Record</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and client satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glassmorphism p-8 rounded-2xl text-center group"
            >
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${stat.color}20`, border: `2px solid ${stat.color}40` }}
              >
                <stat.icon className="h-8 w-8" style={{ color: stat.color }} />
              </div>

              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.number}
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3">{stat.label}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10"
        >
          {[
            { metric: "99.9%", label: "Uptime" },
            { metric: "< 2s", label: "Load Time" },
            { metric: "100%", label: "Client Retention" },
            { metric: "24/7", label: "Support" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#00FFC6] mb-1">{item.metric}</div>
              <div className="text-gray-400 text-sm">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
