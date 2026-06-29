"use client"

import { motion } from "framer-motion"
import { Starfield } from "@/components/starfield"
import CTAButton from "@/components/cta-button"
import { Cpu, Brain, Zap, CheckCircle2 } from "lucide-react"

const primaryPillars = [
  {
    title: "Digital Architecture",
    icon: Cpu,
    description: "We build the nervous system of modern brands. High-concurrency Next.js 15 platforms designed for global scale and sub-second latency.",
    bullets: ["Enterprise Cloud Infrastructure", "Bespoke SaaS Engineering", "Security Hardening"],
    cta: "View Engineering Specs"
  },
  {
    title: "Neural Automation",
    icon: Brain,
    description: "Eliminate operational debt with autonomous agents. We integrate custom LLMs and RPA workflows directly into your existing stack.",
    bullets: ["Custom GPT-4 Agents", "Internal Knowledge Bases", "Automated Ops Pipelines"],
    cta: "Audit AI Potential"
  },
  {
    title: "Commerce Intelligence",
    icon: Zap,
    description: "Revenue-first engineering for the elite. From headless Shopify builds to precision Amazon FBA marketplace dominance.",
    bullets: ["Headless E-commerce", "Amazon PPC Optimization", "Conversion Rate Engineering"],
    cta: "Scale Revenue"
  }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <Starfield />

      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Minimalist Header */}
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 italic">
            Focus. <span className="text-[#00FFC6]">Scale.</span> Result.
          </h1>
          <p className="text-xl text-gray-400">
            I don't offer simple tasks. I offer scalable infrastructure and strategic solutions that drive business impact through high-end engineering.
          </p>
        </div>

        {/* The Big Three (The only things that matter) */}
        <div className="grid grid-cols-1 gap-12 mb-32">
          {primaryPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group grid grid-cols-1 md:grid-cols-12 border-t border-white/10 py-16 hover:bg-white/[0.02] transition-all px-4"
            >
              <div className="md:col-span-1 mb-6 md:mb-0">
                <pillar.icon className="w-10 h-10 text-[#00FFC6]" />
              </div>
              <div className="md:col-span-5 pr-8">
                <h2 className="text-3xl font-bold mb-4">{pillar.title}</h2>
                <p className="text-gray-400 leading-relaxed text-lg">{pillar.description}</p>
              </div>
              <div className="md:col-span-4 space-y-3 py-4 md:py-0">
                {pillar.bullets.map(bullet => (
                  <div key={bullet} className="flex items-center gap-3 text-sm font-mono tracking-tight text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00FFC6]" />
                    {bullet}
                  </div>
                ))}
              </div>
              <div className="md:col-span-2 flex items-end md:justify-end">
                 <span className="text-xs font-black tracking-[.3em] uppercase text-[#00FFC6] group-hover:mr-4 transition-all">Explore —&gt;</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The "Hidden" Support Layer (Burying the generic services) */}
        <div className="glassmorphism p-12 rounded-[2rem] border-white/5">
          <h3 className="text-xs font-mono tracking-[.4em] text-gray-500 uppercase mb-8">Complementary Growth Ecosystem</h3>
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-gray-500 font-medium">
            <span>SEO Architecture</span>
            <span>Performance UI/UX</span>
            <span>Video Storytelling</span>
            <span>Data Visualization</span>
            <span>Mobile Logic</span>
            <span>Strategic Ads</span>
          </div>
        </div>

        {/* Final Sharp CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready for an Infrastructure Audit?</h2>
          <CTAButton label="Book Strategy Call" />
        </div>
      </div>
    </div>
  )
}
