//portfolio/page.tsx
"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Starfield } from "@/components/starfield"
import { Search, ExternalLink } from "lucide-react"
import Image from "next/image"
import { allProjects, categories } from "./data"

export default function PortfolioPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = allProjects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
    const searchMatch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return categoryMatch && searchMatch
  })

  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const regularProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <div className="relative min-h-screen pt-20 bg-[#050505] text-white overflow-x-hidden">
      <Starfield />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Branding Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <span className="text-[#00FFC6] font-mono tracking-[0.4em] uppercase text-[10px] mb-6 block">Featured Work // 2023-2026</span>
          <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">Projects</h1>
        </motion.div>

        {/* Search Engine & Filtering Controls */}
        <div className="max-w-4xl mx-auto mb-20 space-y-8">
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#00FFC6] transition-colors" />
            <input
              type="text"
              placeholder="Search by technology, industry, or outcome..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-8 focus:outline-none focus:border-[#00FFC6]/50 transition-all text-lg font-light backdrop-blur-md text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase border transition-all ${
                  selectedCategory === category ? "bg-[#00FFC6] text-black border-[#00FFC6]" : "bg-white/5 text-gray-500 border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 0.985 }}
              className="relative aspect-[16/10] glassmorphism rounded-[2.5rem] overflow-hidden cursor-pointer group border border-white/5 shadow-2xl"
              onClick={() => router.push(`/portfolio/${project.id}`)}
            >
              <Image src={project.image} alt={project.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div>
                  <p className="text-[#00FFC6] text-[10px] font-black tracking-[0.4em] uppercase mb-2">{project.category}</p>
                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">{project.title}</h3>
                </div>
                <div className="p-5 bg-white/10 backdrop-blur-xl rounded-full border border-white/10 group-hover:bg-[#00FFC6] transition-all">
                  <ExternalLink className="w-6 h-6 text-white group-hover:text-black" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Archive Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regularProjects.map((project) => (
            <motion.div 
              key={project.id} 
              onClick={() => router.push(`/portfolio/${project.id}`)}
              className="bg-white/[0.02] p-8 rounded-[2rem] border border-white/5 hover:border-[#00FFC6]/20 transition-all cursor-pointer group flex flex-col h-full"
            >
              <div className="relative h-56 rounded-2xl overflow-hidden mb-8 bg-gray-900 border border-white/5">
                <Image src={project.image} alt={project.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              </div>
              <h3 className="font-bold text-2xl text-white group-hover:text-[#00FFC6] transition-colors mb-4">{project.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed flex-grow">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
