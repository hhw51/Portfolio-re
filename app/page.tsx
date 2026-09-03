"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Starfield } from "@/components/starfield"
import CTAButton from "@/components/cta-button"
import { ServicesOverview } from "@/components/services-overview"
import { DevelopmentProcess } from "@/components/development-process"
import { ClientTestimonials } from "@/components/client-testimonials"
import { QuickContactModal } from "@/components/quick-contact-modal"
import { ArrowRight, Code, Rocket, Users, Phone } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function HomePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [showContactModal, setShowContactModal] = useState(false)
  const [contactType, setContactType] = useState<"consultation" | "general">("general")

  const handleGetStarted = () => {
    setContactType("consultation")
    setShowContactModal(true)
  }

  const handleViewWork = () => {
    router.push("/portfolio")
  }

  const handleQuickContact = () => {
    setContactType("general")
    setShowContactModal(true)
  }

  const handleCallNow = () => {
    const sendCallRequest = async () => {
      try {
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            userEmail: "haris.wyne10@gmail.com",
            message: "A visitor requested a phone call from the homepage.",
            subject: "Phone Call Request",
            name: "Website Visitor",
          }),
        })

        toast({
          title: "Call Request Sent! 📞",
          description: "We'll call you back within 30 minutes during business hours.",
          duration: 5000,
        })
      } catch (error) {
        console.error("Error sending call request:", error)
      }
    }

    sendCallRequest()
    window.open("tel:+923219981625")
  }

  return (
    <div className="relative overflow-x-hidden w-full bg-[#050505]">
      <Starfield />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-[#00FFC6]/10 border border-[#00FFC6]/20 rounded-full text-[#00FFC6] text-xs font-mono tracking-[0.2em] uppercase">
                Full Stack Engineer
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white">
              BUILDING <br />
              <span className="text-[#00FFC6] italic">REMARKABLE TECH</span>
            </h1>

            <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              I specialize in creating elegant, scalable solutions that solve complex problems. From idea to production, let&apos;s build something exceptional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 px-4">
              <CTAButton
                label="Get In Touch"
                variant="primary"
                onClick={handleGetStarted}
                className="w-full sm:w-auto min-w-[240px]"
              >
                <Rocket className="w-4 h-4" />
              </CTAButton>
              
              <CTAButton
                label="View Projects"
                variant="secondary"
                onClick={handleViewWork}
                className="w-full sm:w-auto min-w-[240px]"
              >
                <Code className="w-4 h-4" />
              </CTAButton>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto px-4 border-t border-white/5 pt-12"
            >
            {[
                { number: "30+", label: "PROJECTS DELIVERED" },
                { number: "2+", label: "YEARS EXPERIENCE" },
                { number: "100%", label: "CLIENT SATISFACTION" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-4xl font-black text-white mb-1 tracking-tighter">{stat.number}</div>
                  <div className="text-[10px] font-mono tracking-[0.2em] text-[#00FFC6] uppercase">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <ServicesOverview />
      <DevelopmentProcess />
      <ClientTestimonials />

      {/* Final CTA Section */}
      <section className="py-32 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glassmorphism p-12 md:p-24 rounded-[3rem] text-center max-w-5xl mx-auto border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00FFC6]/5 blur-[100px] pointer-events-none" />
            
            <Users className="h-16 w-16 mx-auto mb-8 text-[#00FFC6] opacity-50" />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
              Let&apos;s <span className="italic">Create</span> Together
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you have a bold idea or need to optimize existing systems, I&apos;m here to help. Let&apos;s turn your vision into reality with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <CTAButton
                label="Start a Project"
                variant="primary"
                onClick={handleQuickContact}
                className="w-full sm:w-auto"
              >
                <ArrowRight className="w-4 h-4" />
              </CTAButton>
              
              <CTAButton
                label="Schedule a Call"
                variant="secondary"
                onClick={handleCallNow}
                className="w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <QuickContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
        type={contactType} 
      />
    </div>
  )
}
