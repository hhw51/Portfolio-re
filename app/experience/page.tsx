"use client"

import { motion } from "framer-motion"
import { Starfield } from "@/components/starfield"
import SocialMediaSection from "@/components/social-media-section"
import { Briefcase, Code, Users, Trophy, ArrowRight } from "lucide-react"
import CTAButton from "@/components/cta-button"
import { useRouter } from "next/navigation"

export default function ExperiencePage() {
  const router = useRouter()

  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Freelance / Startup",
      period: "2023 - Present",
      description: "Building scalable web applications and AI-powered solutions for global clients. Leading technical projects from architecture to deployment.",
      highlights: [
        "Architected and deployed 15+ full-stack applications using Next.js and Spring Boot",
        "Integrated OpenAI APIs for intelligent automation features",
        "Led cross-functional teams to deliver high-conversion platforms",
        "Optimized database performance, reducing query times by 60%",
      ],
      technologies: ["Next.js 15", "React", "Node.js", "Spring Boot", "PostgreSQL", "OpenAI API", "Docker", "AWS"],
    },
    {
      title: "Backend Engineer",
      company: "Tech Startup",
      period: "2022 - 2023",
      description: "Developed robust backend systems and microservices architecture for enterprise clients.",
      highlights: [
        "Built microservices using Spring Boot handling 100K+ daily requests",
        "Designed and optimized database schemas for complex queries",
        "Implemented CI/CD pipelines using GitHub Actions",
        "Mentored junior developers on best practices and system design",
      ],
      technologies: ["Spring Boot", "Java", "PostgreSQL", "Redis", "Docker", "Kubernetes", "GraphQL"],
    },
  ]

  const skills = [
    {
      category: "Frontend",
      items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "SWR", "TanStack Query"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"],
    },
    {
      category: "AI & Automation",
      items: ["OpenAI API", "LLM Integration", "Computer Vision", "Prompt Engineering", "Automation Workflows"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "Vercel", "Git", "Linux"],
    },
  ]

  const achievements = [
    { icon: Code, label: "30+ Projects Delivered", value: "Shipped across multiple industries" },
    { icon: Users, label: "8+ Years Experience", value: "Continuous learning and growth" },
    { icon: Trophy, label: "100% Client Satisfaction", value: "Dedicated to excellence" },
    { icon: Briefcase, label: "Full-Stack Expertise", value: "End-to-end solution delivery" },
  ]

  return (
    <div className="relative min-h-screen pt-20 overflow-x-hidden bg-[#050505]">
      <Starfield />

      <div className="container mx-auto px-4 py-24 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white">
            EXPERIENCE & <span className="text-[#00FFC6] italic">EXPERTISE</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            2+ years of building scalable systems, leading technical teams, and delivering high-impact solutions across diverse industries.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism p-6 rounded-2xl border-white/5 hover:border-[#00FFC6]/30 transition-all text-center group"
            >
              <achievement.icon className="h-8 w-8 mx-auto mb-4 text-[#00FFC6] group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">{achievement.label}</h3>
              <p className="text-gray-400 text-sm">{achievement.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-left mb-16 border-l-2 border-[#00FFC6] pl-6">
            <h2 className="text-sm font-mono tracking-[0.3em] text-[#00FFC6] uppercase mb-2">Career Path</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Professional Journey</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glassmorphism p-10 rounded-[2.5rem] border-white/5 hover:border-[#00FFC6]/20 transition-all"
              >
                <div className="flex justify-between items-start mb-6 flex-col sm:flex-row">
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-2">{exp.title}</h4>
                    <p className="text-lg text-[#00FFC6] font-mono tracking-[0.2em] text-xs uppercase">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-mono text-sm mt-4 sm:mt-0">{exp.period}</span>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-6">{exp.description}</p>

                <div className="mb-6">
                  <h5 className="text-white font-bold mb-4">Key Achievements</h5>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400 flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-[#00FFC6] mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-white font-bold mb-3">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-[#00FFC6]/10 border border-[#00FFC6]/30 rounded-full text-[#00FFC6] text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-left mb-16 border-l-2 border-[#00FFC6] pl-6">
            <h2 className="text-sm font-mono tracking-[0.3em] text-[#00FFC6] uppercase mb-2">Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Technical Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism p-8 rounded-2xl border-white/5 hover:border-[#00FFC6]/30 transition-all"
              >
                <h4 className="text-lg font-bold text-[#00FFC6] mb-6 uppercase tracking-[0.2em] text-xs">
                  {skillGroup.category}
                </h4>
                <div className="space-y-3">
                  {skillGroup.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00FFC6]" />
                      <span className="text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center glassmorphism p-16 md:p-24 rounded-[3rem] border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00FFC6]/10 blur-[120px] pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">READY TO COLLABORATE?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
            Let's discuss how I can bring my expertise to your next project or opportunity.
          </p>
          <div className="flex justify-center gap-6 flex-col sm:flex-row">
            <CTAButton 
              label="Start a Project" 
              variant="primary" 
              onClick={() => router.push("/contact")}
            >
              <ArrowRight className="w-4 h-4" />
            </CTAButton>
            <CTAButton 
              label="Download Resume" 
              variant="secondary" 
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <ArrowRight className="w-4 h-4" />
            </CTAButton>
          </div>
        </motion.div>
      </div>

      <SocialMediaSection />
    </div>
  )
}
