//portfolio/[id]/page.tsx
"use client"
import { use, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, X, Layout, Globe, Cpu, Scale, ExternalLink, Loader2 } from "lucide-react"
import Image from "next/image"
import { useVapi } from "@/hooks/useVapi"
import { allProjects } from "../data"

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ProjectDetailPage({ params }: PageProps) {
  const router = useRouter()
  const resolvedParams = use(params)
  
  const projectData = allProjects.find((p) => p.id === resolvedParams.id)
  
  const vapiPublicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || ""
  
  // Note: If your custom useVapi hook exposes an 'isLoading' or 'isConnecting' status, 
  // you can destructure it here. Otherwise, the local state below catches the transition cleanly.
  const { isCalling, toggleCall, stopCall, activeError, clearError } = useVapi(
    vapiPublicKey || "YOUR_HARDCODED_PUBLIC_KEY_FALLBACK_FOR_TESTING"
  )

  // Local transition state to handle connection setup latency
  const [isConnecting, setIsConnecting] = useState(false)

  // Reset connection loader whenever the active calling state changes
  useEffect(() => {
    setIsConnecting(false)
  }, [isCalling])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "unset" }
  }, [])

  useEffect(() => {
    return () => { 
      stopCall() 
      setIsConnecting(false)
    }
  }, [stopCall])

  if (!projectData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center font-mono text-xs text-red-400">
        ERR_PROJECT_METADATA_NOT_FOUND (ID: {resolvedParams.id})
      </div>
    )
  }

  const handleClose = () => {
    stopCall()
    setIsConnecting(false)
    router.push("/portfolio")
  }

  const handleCallToggle = async () => {
    if (!projectData.vapiAssistantId) return
    
    // Only show connection loader if we are initiating a fresh call
    if (!isCalling) {
      setIsConnecting(true)
    }
    
    try {
      await toggleCall(projectData.vapiAssistantId)
    } catch (err) {
      setIsConnecting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[500] flex items-center justify-center p-4 md:p-12" onClick={handleClose}>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-[#080808] w-full max-w-[1400px] max-h-[92vh] rounded-[3rem] overflow-hidden border border-white/10 flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE INTERFACE CONTROL */}
        <button onClick={handleClose} className="absolute top-8 right-8 z-[600] text-gray-500 hover:text-[#00FFC6] bg-white/5 p-3 rounded-full border border-white/5 transition-colors">
          <X className="w-6 h-6" />
        </button>

        {/* Media Layout Viewport */}
        <div className="w-full md:w-3/5 relative bg-black min-h-[350px] md:h-auto">
          <Image src={projectData.image} alt={projectData.title} fill className="object-cover opacity-70" priority />
          {/* Replace the static padding/layout container around your badges with this: */}
<div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-1.5 md:bottom-10 md:left-10 md:gap-2">
  {projectData.technologies.slice(0, 4).map(tech => (
    <span 
      key={tech} 
      className="bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-bold text-gray-300 white-space-nowrap"
    >
      {tech}
    </span>
  ))}
</div>
        </div>

        {/* Content Stream Metrics Section */}
        <div className="w-full md:w-2/5 overflow-y-auto custom-scrollbar p-6 sm:p-10 md:p-16 lg:p-20 space-y-10 md:space-y-16 flex flex-col">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-4 h-4 text-[#00FFC6]" />
              <span className="text-[#00FFC6] font-mono text-[10px] tracking-[0.5em] uppercase">System Specifications</span>
            </div>
            <h2 className="text-5xl font-bold text-white tracking-tighter mb-4">{projectData.title}</h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed">{projectData.description}</p>
          </div>

          {/* VAPI SANDBOX CALL EXECUTION TERMINAL */}
          {projectData.vapiAssistantId && (
            <div className="p-8 rounded-[2rem] border border-[#00FFC6]/20 bg-[#00FFC6]/[0.02] space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bot className="text-[#00FFC6] w-5 h-5" />
                  <span className="text-[10px] font-mono font-black text-[#00FFC6] uppercase tracking-[0.2em]">Voice Portal Active</span>
                </div>
              </div>
              
              <button
                disabled={isConnecting}
                onClick={handleCallToggle}
                className={`w-full font-black py-5 rounded-xl flex items-center justify-center gap-3 transition-all text-xs tracking-widest border ${
                  isConnecting
                    ? "bg-white/5 text-gray-400 border-white/10 cursor-not-allowed"
                    : isCalling 
                      ? "bg-red-500 text-white border-red-600 animate-pulse" 
                      : "bg-[#00FFC6] text-black border-[#00FFC6] hover:bg-transparent hover:text-[#00FFC6]"
                }`}
              >
                {isConnecting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#00FFC6]" />
                    <span>SECURED CHANNEL ROUTING...</span>
                  </>
                ) : isCalling ? (
                  "DISCONNECT VOICE CALL"
                ) : (
                  "ESTABLISH VOICE CHANNEL"
                )}
              </button>

              {/* DYNAMIC ERROR INFRASTRUCTURE OUTPUT */}
              <AnimatePresence>
                {activeError && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-xs font-mono flex items-start justify-between gap-2"
                  >
                    <span className="leading-relaxed">⚠️ {activeError}</span>
                    <button onClick={clearError} className="text-red-400/50 hover:text-red-400 uppercase font-black text-[9px] tracking-wider transition-colors pt-0.5">
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Impact Quantizers */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 py-8 border-y border-white/5">
            {Object.entries(projectData.impact).map(([key, value]) => (
                <div key={key} className="border-b border-white/[0.03] sm:border-b-0 pb-4 sm:pb-0 last:border-b-0">
                <p className="text-white font-bold text-lg md:text-xl tracking-tighter break-words">{value}</p>
                <p className="text-gray-500 text-[9px] uppercase font-black tracking-widest mt-0.5">{key}</p>
                </div>
            ))}
            </div>

          {/* Context Blocks */}
          <div className="space-y-8">
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2"><Layout className="w-4 h-4 text-[#00FFC6]"/> The Challenge</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{projectData.challenge}</p>
            </div>
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2"><Globe className="w-4 h-4 text-[#00FFC6]"/> The Solution</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{projectData.solution}</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-4 pt-6 mt-auto">
  <a 
    href={projectData.projectUrl} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-white/5 border border-white/10 text-white font-black py-4 md:py-6 px-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-xs md:text-sm tracking-widest text-center"
  >
    <span className="truncate">LAUNCH LIVE TERMINAL</span> 
    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
  </a>
  
  {projectData.legacyUrl && (
    <a 
      href={projectData.legacyUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="border border-white/10 text-gray-500 font-bold py-3.5 md:py-4 px-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all text-[11px] md:text-xs tracking-widest text-center"
    >
      <span className="truncate">VIEW LEGACY INFRASTRUCTURE</span> 
      <Scale className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
    </a>
  )}
</div>
        </div>
      </motion.div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 255, 198, 0.3); border-radius: 20px; }
      `}</style>
    </div>
  )
}