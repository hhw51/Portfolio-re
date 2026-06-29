"use client"

import { motion } from "framer-motion"
import { Code, Brain, Rocket, Shield, Cpu } from "lucide-react"
import Link from "next/link"

export function ServicesOverview() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-16 border-l-2 border-[#00FFC6] pl-6">
          <h2 className="text-sm font-mono tracking-[0.3em] text-[#00FFC6] uppercase mb-2">What I Do</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Full-Stack Solutions<br />Built with Precision
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* ANCHOR 1: ENGINEERING */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 glassmorphism p-10 rounded-[2rem] border-white/5 flex flex-col justify-between min-h-[400px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#00FFC6]/10 flex items-center justify-center mb-8">
              <Cpu className="w-7 h-7 text-[#00FFC6]" />
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-4 tracking-tight">Full-Stack Web Development</h4>
              <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                Expert in Next.js 15, React, Spring Boot, and Node.js. I architect scalable systems, lead technical teams, and deliver high-conversion platforms for enterprise clients.
              </p>
            </div>
          </motion.div>

          {/* ANCHOR 2: AI */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-gradient-to-br from-[#00FFC6] to-[#008a6b] p-10 rounded-[2rem] text-black flex flex-col justify-between"
          >
            <Brain className="w-10 h-10 mb-8" />
            <div>
              <h4 className="text-2xl font-black mb-4 tracking-tighter uppercase italic">AI & Automation</h4>
              <p className="font-medium text-black/80">
                OpenAI API integration, intelligent automation, computer vision, and smart backends powering cutting-edge applications.
              </p>
            </div>
          </motion.div>

          {/* SUPPORT SERVICES (SMALLER) */}
          {[
            { title: "Microservices Architecture", icon: Rocket },
            { title: "Cloud Deployment & DevOps", icon: Shield },
            { title: "API Design & Integration", icon: Code }
          ].map((item, i) => (
            <div key={i} className="md:col-span-4 glassmorphism p-6 rounded-2xl flex items-center gap-4 hover:border-[#00FFC6]/30 transition-all cursor-default">
              <item.icon className="w-5 h-5 text-[#00FFC6]" />
              <span className="font-bold text-sm uppercase tracking-widest">{item.title}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <Link href="/portfolio" className="text-[#00FFC6] font-mono text-xs tracking-[0.4em] uppercase hover:tracking-[0.6em] transition-all">
                View My Work —&gt;
            </Link>
        </div>
      </div>
    </section>
  )
}
