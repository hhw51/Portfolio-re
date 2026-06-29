"use client"

import { motion } from "framer-motion"
import { ExternalLink, Linkedin, Instagram, Twitter, Facebook, Youtube, Github, Dribbble, Figma } from "lucide-react"
import CTAButton from "@/components/cta-button"
import { useRouter } from "next/navigation"

const socialMediaLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/haris-wyne",
    icon: <Linkedin className="w-6 h-6" />,
    description: "Professional Network",
  },
  {
    name: "GitHub",
    url: "https://github.com/hhw51",
    icon: <Github className="w-6 h-6" />,
    description: "Code & Projects",
  },
  {
    name: "Email",
    url: "mailto:haris.wyne10@gmail.com",
    icon: <Twitter className="w-6 h-6" />,
    description: "Get in Touch",
  },
]

export default function SocialMediaSection() {
  const router = useRouter()

  return (
    <section className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background glow for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FFC6]/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-20 border-l-2 border-[#00FFC6] pl-8"
        >
          <h2 className="text-sm font-mono tracking-[0.4em] text-[#00FFC6] uppercase mb-4">
            Connect With Me
          </h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            LET'S <span className="italic">COLLABORATE.</span>
          </h3>
        </motion.div>

        {/* Simplified, High-End Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialMediaLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism p-8 rounded-2xl border-white/5 hover:border-[#00FFC6]/40 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:text-[#00FFC6] group-hover:bg-[#00FFC6]/10 transition-all duration-300">
                  {social.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {social.name}
                </h3>

                <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-6 group-hover:text-gray-300 transition-colors">
                  {social.description}
                </p>

                <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#00FFC6] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3 ml-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Integrated CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-32 text-center"
        >
          <div className="glassmorphism p-12 md:p-20 rounded-[3rem] max-w-4xl mx-auto border-white/5 relative overflow-hidden bg-white/[0.02]">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter text-white">Let's build something <span className="text-[#00FFC6]">Remarkable.</span></h3>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              I&apos;m available for freelance projects, consultations, and full-time opportunities. Let's discuss how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton
                label="Start a Project"
                variant="primary"
                onClick={() => router.push("/contact")}
              />
              <CTAButton
                label="View My Work"
                variant="secondary"
                onClick={() => router.push("/portfolio")}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
