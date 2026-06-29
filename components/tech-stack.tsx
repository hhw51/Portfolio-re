"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const techCategories = [
  {
    title: "Frontend",
    color: "#00FFC6",
    technologies: [
      { name: "React", logo: "/placeholder.svg?height=60&width=60" },
      { name: "Next.js", logo: "/placeholder.svg?height=60&width=60" },
      { name: "TypeScript", logo: "/placeholder.svg?height=60&width=60" },
    ],
  },
  {
    title: "Backend",
    color: "#5000A8",
    technologies: [
      { name: "Node.js", logo: "/placeholder.svg?height=60&width=60" },
      { name: "Python", logo: "/placeholder.svg?height=60&width=60" },
      { name: "PostgreSQL", logo: "/placeholder.svg?height=60&width=60" },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "#FF6B6B",
    technologies: [
      { name: "AWS", logo: "/placeholder.svg?height=60&width=60" },
      { name: "Docker", logo: "/placeholder.svg?height=60&width=60" },
      { name: "Kubernetes", logo: "/placeholder.svg?height=60&width=60" },
    ],
  },
  {
    title: "AI & ML",
    color: "#4ECDC4",
    technologies: [
      { name: "TensorFlow", logo: "/placeholder.svg?height=60&width=60" },
      { name: "OpenAI", logo: "/placeholder.svg?height=60&width=60" },
      { name: "Hugging Face", logo: "/placeholder.svg?height=60&width=60" },
    ],
  },
]

export function TechStack() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            Our <span className="text-[#00FFC6]">Technology Stack</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            We use cutting-edge technologies to build scalable, secure, and high-performance solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glassmorphism p-6 md:p-8 rounded-xl"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center" style={{ color: category.color }}>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + techIndex * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <Image
                      src={tech.logo || "/placeholder.svg"}
                      alt={`${tech.name} logo`}
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                    <span className="text-white font-medium text-sm md:text-base">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { metric: "99.9%", label: "Uptime Guarantee" },
              { metric: "<100ms", label: "API Response Time" },
              { metric: "50+", label: "Technologies Mastered" },
              { metric: "24/7", label: "Monitoring & Support" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00FFC6] mb-2">{stat.metric}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
