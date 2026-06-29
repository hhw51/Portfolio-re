"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Starfield } from "@/components/starfield"
import CTAButton from "@/components/cta-button"
import { ChevronDown, MessageCircle, Mail } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What makes you different from other developers?",
    answer:
      "I specialize in full-stack development with a focus on performance, scalability, and user experience. I combine Next.js, React, Spring Boot, and AI integration to create innovative solutions. My approach emphasizes clean code, system design, and delivering products that drive business impact.",
  },
  {
    id: 2,
    question: "Do you work with clients of all sizes?",
    answer:
      "Yes, I work with startups, growing businesses, and enterprises. My scalable approach allows me to tailor solutions to match your budget and requirements while maintaining high quality standards.",
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. Simple projects typically take 2-4 weeks, while complex full-stack applications can take 2-4 months. I provide detailed timelines during our initial consultation.",
  },
  {
    id: 4,
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in Next.js 15, React, Node.js, Spring Boot, PostgreSQL, MongoDB, TypeScript, and OpenAI API integration. I also have expertise in cloud deployment (AWS, Vercel), DevOps, and system architecture. I stay current with emerging technologies to deliver cutting-edge solutions.",
  },
  {
    id: 5,
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, I offer comprehensive support and maintenance services. This includes bug fixes, security updates, performance optimization, and feature enhancements. I believe in long-term partnerships with my clients.",
  },
  {
    id: 6,
    question: "Can you help with project optimization and scaling?",
    answer:
      "Absolutely! I specialize in optimizing existing systems, improving performance, and architecting solutions for scale. Whether you need database optimization, caching strategies, or infrastructure improvements, I can help your system handle growth efficiently.",
  },
  {
    id: 7,
    question: "What is your development process?",
    answer:
      "My process starts with understanding your requirements and goals. I then create technical specifications and architecture diagrams. Throughout development, I maintain regular communication with progress updates and involve you in key decisions to ensure the final product exceeds expectations.",
  },
  {
    id: 8,
    question: "Do you provide deployment and DevOps support?",
    answer:
      "Yes, I handle full deployment and DevOps support. This includes setting up CI/CD pipelines, containerization, cloud infrastructure, monitoring, and ongoing optimization to ensure your application runs smoothly in production.",
  },
]

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="relative min-h-screen pt-20">
      <Starfield />

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00FFC6] to-white bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and approach to digital innovation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <motion.div animate={{ rotate: openFAQ === faq.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="h-5 w-5 text-[#00FFC6] flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 glassmorphism p-12 rounded-2xl"
        >
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-[#00FFC6]" />
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help you with any questions about our services
            or process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton label="Start a Conversation" className="inline-flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
            </CTAButton>
            <CTAButton label="Send us an Email" className="text-white border-white/30 inline-flex items-center">
              <Mail className="mr-2 h-5 w-5" />
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
