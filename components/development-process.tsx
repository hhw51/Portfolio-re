"use client"

import { motion } from "framer-motion"
import { Lightbulb, Code, TestTube, Rocket } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description: "We analyze your needs and define project requirements",
    color: "#00FFC6",
  },
  {
    icon: Code,
    title: "Development",
    description: "Our team builds your solution using cutting-edge technologies",
    color: "#5000A8",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Rigorous testing ensures quality and performance",
    color: "#00FFC6",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We deploy and support your project for success",
    color: "#5000A8",
  },
]

export function DevelopmentProcess() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery every time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="glassmorphism p-8 rounded-2xl mb-4">
                <step.icon className="w-12 h-12 mx-auto mb-4" style={{ color: step.color }} />
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              <div className="text-2xl font-bold" style={{ color: step.color }}>
                {String(index + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
