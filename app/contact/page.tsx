"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Starfield } from "@/components/starfield"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { getCalApi } from "@calcom/embed-react" 
import { 
  Mail, Clock, Loader2, ChevronDown, 
  Calendar, MessageSquare, ShieldCheck, Zap 
} from "lucide-react"

const services = [
  "Web Development", "Mobile App Development", "AI Integration",
  "SEO & Digital Marketing", "UI/UX Design", "E-commerce Solutions",
  "Custom Software", "Consulting"
]

const timelineOptions = ["1-3 months", "3-6 months", "6-12 months", "12+ months"]

const faqs = [
  {
    id: 1,
    question: "What makes you different from other developers?",
    answer: "I specialize in full-stack development with a focus on performance, scalability, and user experience. I combine modern technologies like Next.js 15, React, Spring Boot, and AI integration to create high-impact solutions tailored to your business needs.",
  },
  {
    id: 2,
    question: "Do you work with clients of all sizes?",
    answer: "Yes, I work with startups, growing businesses, and enterprises. My scalable approach allows me to tailor solutions to match your budget, timeline, and requirements while maintaining high quality standards.",
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer: "Simple projects typically take 2-4 weeks, while complex full-stack applications can take 2-4 months. I provide detailed timelines and milestones during our initial consultation.",
  },
  {
    id: 4,
    question: "What technologies do you specialize in?",
    answer: "I specialize in Next.js 15, React, Node.js, Spring Boot, PostgreSQL, MongoDB, OpenAI API integration, and cloud deployment. I stay current with emerging technologies to deliver cutting-edge solutions.",
  },
]

export default function BookCallPage() {
  const { toast } = useToast()
  const calendarRef = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [countryCode, setCountryCode] = useState<string | null>(null)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    message: "",
  })

  // Initialize Cal.com using your exact user profile namespace
  useEffect(() => {
    (async function initCal() {
      try {
        const cal = await getCalApi({ "namespace": "vexis-pwl3dg" }); 
        cal("ui", {
          "theme": "dark", 
          "styles": { 
            "branding": { 
              "brandColor": "#00FFC6" 
            } 
          }, 
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });
      } catch (err) {
        console.error("Cal.com failed to load global settings:", err);
      }
    })();
  }, [])
  
  useEffect(() => {
    async function detectCountry() {
      try {
        const res = await fetch("/api/geo")
        const data = await res.json()
        setCountryCode(data.country_code)
      } catch (e) {
        console.error("Geo detection failed:", e)
      }
    }
    detectCountry()
  }, [])

  const budgetOptionsByCountry: Record<string, string[]> = {
    PK: ["30,000 - 100,000 PKR", "100,000 - 200,000 PKR", "200,000 - 500,000 PKR", "500,000+ PKR"],
    US: ["$500 - $1000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"],
    GB: ["£350 - £1,000", "£1,000 - £2,500", "£2,500 - £5,000", "£5,000+"],
    SA: ["1,500 - 5,000 SAR", "5,000 - 10,000 SAR", "10,000 - 20,000 SAR", "20,000+ SAR"],
  }
  const defaultBudget = ["$500 - $1000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000+"]
  const budgetOptions = countryCode ? budgetOptionsByCountry[countryCode] || defaultBudget : defaultBudget

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Missing Information", description: "Please fill in all required fields.", variant: "destructive" })
      return
    }
    
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        toast({ title: "Brief Saved! ✅", description: "Scroll down to select your strategy slot below." })
        setFormData({ name: "", email: "", phone: "", company: "", services: [], budget: "", timeline: "", message: "" })
        
        // Smoothly scroll down right to the interactive inline calendar
        calendarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      } else { 
        const errData = await response.json();
        console.error("API error response:", errData);
        throw new Error("Server error dispatching brief details");
      }
    } catch (error) {
      console.error("Submission error encountered:", error)
      toast({ 
        title: "Brief Offline Notice", 
        description: "Network dropped your copy. Please lock in your booking time manually below!", 
        variant: "destructive" 
      })
      calendarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    } finally { 
      setIsSubmitting(false) 
    }
  }

  return (
    <div className="relative min-h-screen pt-20 bg-[#050505] text-white overflow-hidden">
      <Starfield />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-20 space-y-4"
        >
          <span className="text-[#00FFC6] font-mono tracking-[0.3em] text-[10px] uppercase block">Ready for takeoff</span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent px-2">
            Book a Strategy Call
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light px-4">
            Skip the back-and-forth. Tell us about your project and let's architect your digital future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24">
          {/* Left Side: Trust & Info */}
          <motion.div className="lg:col-span-4 space-y-8 order-last lg:order-first">
            <div className="glassmorphism p-6 md:p-8 rounded-[2rem] border border-white/5 space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#00FFC6]/10 flex items-center justify-center border border-[#00FFC6]/20 group-hover:bg-[#00FFC6] transition-all">
                  <Calendar className="w-6 h-6 text-[#00FFC6] group-hover:text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base">Expert Consultation</h3>
                  <p className="text-xs text-gray-500">30-min strategy session</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:border-white transition-all">
                  <ShieldCheck className="w-6 h-6 text-gray-400 group-hover:text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base">NDA Protected</h3>
                  <p className="text-xs text-gray-500">Your ideas stay yours</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                <div className="flex items-center gap-3 text-sm text-gray-400 break-all">
                  <Mail className="w-4 h-4 shrink-0 text-[#00FFC6]" /> haris.wyne10@gmail.com
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Clock className="w-4 h-4 shrink-0 text-[#00FFC6]" /> Response within 12 hours
                </div>
              </div>
            </div>

            {/* Micro FAQ */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Quick Answers</h4>
              {faqs.map((faq) => (
                <div key={faq.id} className="glassmorphism rounded-2xl border border-white/5 overflow-hidden">
                  <button 
                    onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm font-medium hover:bg-white/5 transition-colors gap-2"
                    type="button"
                  >
                    <span className="pr-2">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 text-[#00FFC6] transition-transform ${openFAQ === faq.id ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                        <p className="px-5 pb-5 text-xs text-gray-500 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: The Brief Form */}
          <motion.div className="lg:col-span-8">
            <div className="glassmorphism p-6 sm:p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
              <div className="absolute top-0 right-12 w-32 h-px bg-gradient-to-r from-transparent via-[#00FFC6] to-transparent" />
              
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Full Name</Label>
                    <Input name="name" value={formData.name} onChange={handleInputChange} required className="bg-white/5 border-white/10 h-14 rounded-xl focus:border-[#00FFC6]/50 text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Email Address</Label>
                    <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="bg-white/5 border-white/10 h-14 rounded-xl focus:border-[#00FFC6]/50 text-sm" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Services Required</Label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service} type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`px-3 py-2 md:px-4 md:py-2 rounded-xl text-[10px] md:text-[11px] font-bold transition-all border ${
                          formData.services.includes(service) ? "bg-[#00FFC6] text-black border-[#00FFC6]" : "bg-white/5 text-gray-400 border-white/10 hover:border-white/20"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Est. Budget ({countryCode || "Global"})</Label>
                    <select name="budget" value={formData.budget} onChange={handleInputChange} className="w-full bg-[#0d0d0d] border border-white/10 h-14 rounded-xl px-4 text-sm focus:outline-none focus:border-[#00FFC6]/50 transition-all text-white">
                      <option value="" className="bg-black">Select Range</option>
                      {budgetOptions.map(opt => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Desired Timeline</Label>
                    <select name="timeline" value={formData.timeline} onChange={handleInputChange} className="w-full bg-[#0d0d0d] border border-white/10 h-14 rounded-xl px-4 text-sm focus:outline-none focus:border-[#00FFC6]/50 transition-all text-white">
                      <option value="" className="bg-black">Select Timeline</option>
                      {timelineOptions.map(opt => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Project Brief</Label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} required className="bg-white/5 border-white/10 rounded-xl min-h-[150px] focus:border-[#00FFC6]/50 text-sm" placeholder="Describe the mission..." />
                </div>

                <Button 
                  type="submit" disabled={isSubmitting}
                  className="w-full h-16 bg-[#00FFC6] text-black font-black uppercase tracking-widest rounded-2xl hover:scale-[1.01] transition-all group text-xs md:text-sm"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : (
                    <span className="flex items-center justify-center gap-2">Send Brief & View Calendar <Zap className="w-4 h-4 group-hover:fill-black" /></span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Brand Theme-Matched Embedded Calendar Widget Section */}
        <motion.div 
          ref={calendarRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full rounded-[2.5rem] border border-white/10 bg-[#0d0d0d]/80 backdrop-blur-xl p-4 sm:p-6 md:p-10 shadow-2xl overflow-hidden mb-32"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">Select a Strategy Slot Directly</h2>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Book your session instantly into our verified workflow engineering grid.</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00FFC6] animate-pulse" /> Connection Stable
            </div>
          </div>

          {/* Cal.com Container Element */}
          <div className="w-full min-h-[700px] rounded-2xl bg-[#050505] border border-white/5 overflow-hidden">
            <iframe 
              src="https://cal.com/vexis-pwl3dg/30min?embed=vexis-pwl3dg&theme=dark" 
              width="100%" 
              height="700" 
              frameBorder="0" 
              className="w-full h-full border-none"
              style={{ minHeight: '700px', background: '#050505' }}
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Global CTA Banner */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="px-6 py-12 md:p-20 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-[#00FFC6]/20 via-transparent to-transparent border border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 pointer-events-none">
            <MessageSquare className="w-48 h-48 md:w-64 md:h-64 text-[#00FFC6]" />
          </div>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-6 relative z-10">
            Don't just exist. <br /><span className="text-[#00FFC6]">Dominate.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm md:text-lg relative z-10 px-2">
            Join the brands that have transitioned from generic sites to high-performance web infrastructure.
          </p>
          <Button 
            variant="outline" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="border-white/20 text-white h-14 px-8 rounded-full hover:bg-white hover:text-black transition-all text-xs"
          >
            Scroll back to top
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
