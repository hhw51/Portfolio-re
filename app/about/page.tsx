"use client"

import { motion } from "framer-motion"
import { Starfield } from "@/components/starfield"
import CTAButton from "@/components/cta-button"
import SocialMediaSection from "@/components/social-media-section"
import { Users, Target, Zap, Shield, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen pt-20 overflow-x-hidden bg-[#050505]">
      <Starfield />

      <div className="container mx-auto px-4 py-24 max-w-7xl relative z-10">
        {/* Institutional Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white">
            HARIS <span className="text-[#00FFC6] italic">WYNE</span>
          </h1>
          <p className="text-sm font-mono tracking-[0.4em] text-[#00FFC6] uppercase mb-12">
            Full Stack Engineer & AI Solutions Architect
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            I bridge the gap between complex software architecture and seamless user experiences. With 2+ years of experience, I specialize in building scalable systems and leading high-performance engineering teams.
          </p>
        </motion.div>

        {/* Narrative Section: Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glassmorphism p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-12 h-12 text-[#00FFC6]" />
            </div>
            <h2 className="text-xs font-mono tracking-[0.3em] text-[#00FFC6] uppercase mb-6 italic">Who I Am</h2>
            <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">My Journey</h3>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              I&apos;m a full-stack engineer passionate about building performant systems and solving complex problems. <span className="text-white">Performance, scalability, and user experience</span> are not negotiable in my work—they form the foundation of everything I build.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              From Next.js frontends to Spring Boot backends and AI integration, I deliver solutions that drive business impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glassmorphism p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield className="w-12 h-12 text-[#00FFC6]" />
            </div>
            <h2 className="text-xs font-mono tracking-[0.3em] text-[#00FFC6] uppercase mb-6 italic">My Mission</h2>
            <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">Building Tomorrow</h3>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              My goal is to empower businesses and innovators with robust, scalable solutions. I don't just solve today's problems; I architect systems that <span className="text-white">scale confidently</span> and drive sustainable growth.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every project is a partnership—your success is my success.
            </p>
          </motion.div>
        </div>

        {/* Core Values: Rebranded for Authority */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">ENGINEERING RIGOR</h2>
            <div className="h-1 w-20 bg-[#00FFC6] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: "Velocity", desc: "Optimizing for sub-second response times." },
              { icon: Target, title: "Precision", desc: "Meticulous pixel-perfect implementation." },
              { icon: Users, title: "Integrity", desc: "Transparent, data-backed partnerships." },
              { icon: Shield, title: "Reliability", desc: "Redundant and secure infrastructures." },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism p-8 rounded-2xl border-white/5 hover:border-[#00FFC6]/30 transition-all text-center group"
              >
                <value.icon className="h-8 w-8 mx-auto mb-6 text-[#00FFC6] group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-3 text-white">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center glassmorphism p-16 md:p-24 rounded-[3rem] border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00FFC6]/10 blur-[120px] pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">THE LAB IS OPEN.</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
            Ready to integrate elite engineering into your workflow? Let's discuss your roadmap.
          </p>
          <div className="flex justify-center">
            <CTAButton 
              label="Initiate Consultation" 
              variant="primary" 
              onClick={() => router.push("/contact")}
            >
              <ChevronRight className="w-4 h-4" />
            </CTAButton>
          </div>
        </motion.div>
      </div>

      <SocialMediaSection />
    </div>
  )
}
