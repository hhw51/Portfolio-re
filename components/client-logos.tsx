"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateLab", logo: "IL" },
  { name: "DataFlow", logo: "DF" },
  { name: "CloudSync", logo: "CS" },
  { name: "AIVision", logo: "AV" },
  { name: "WebForge", logo: "WF" },
]

export function ClientLogos() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We've partnered with innovative companies to deliver exceptional digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="glassmorphism p-6 rounded-xl w-full h-20 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#00FFC6]">{client.logo}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
