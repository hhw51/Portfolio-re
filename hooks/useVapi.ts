"use client"
import { useState, useEffect, useCallback, useRef } from "react"

export function useVapi(publicKey: string) {
  const [isCalling, setIsCalling] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [activeError, setActiveError] = useState<string | null>(null)
  const vapiRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!publicKey) {
      setActiveError("Vapi Public Key is missing from your environment variables.")
      return
    }

    setActiveError(null)

    import("@vapi-ai/web").then((VapiClient) => {
      try {
        console.log("🛠️ Initializing Vapi Client Pipeline...")
        vapiRef.current = new VapiClient.default(publicKey)
        setIsInitialized(true)

        // Bind WebRTC connection listeners with logging
        vapiRef.current.on("call-start", () => {
          console.log("📞 WebRTC Channel Established Successfully.")
          setIsCalling(true)
          setActiveError(null)
        })

        vapiRef.current.on("call-end", () => {
          console.log("🛑 WebRTC Channel Disconnected Naturally.")
          setIsCalling(false)
        })

        vapiRef.current.on("error", (err: any) => {
          console.error("❌ Vapi Native Runtime Exception:", err)
          // Catch common Vapi error messages
          const errorMsg = err?.message || err?.reason || "An unexpected audio streaming error occurred."
          setActiveError(errorMsg)
          setIsCalling(false)
        })

      } catch (initError: any) {
        console.error("❌ Failed to parse Vapi SDK initialization:", initError)
        setActiveError("Failed to initialize voice engine.")
      }
    }).catch(err => {
      console.error("❌ Lazy-load SDK failure:", err)
      setActiveError("Failed to load voice streaming assets.")
    })

    return () => {
      if (vapiRef.current) {
        console.log("🧹 Cleaning up active audio listeners...")
        vapiRef.current.removeAllListeners()
        vapiRef.current.stop()
      }
    }
  }, [publicKey])

  const startCall = useCallback(async (assistantId: string) => {
    if (!vapiRef.current || !isInitialized) {
      setActiveError("Voice connection pipeline is still loading. Please try again.")
      return
    }

    if (!assistantId) {
      setActiveError("No active Assistant ID bound to this deployment terminal.")
      return
    }

    try {
      setActiveError(null)
      console.log(`🚀 Requesting audio stream connection for Assistant: ${assistantId}`)
      
      // Explicitly check for mediaDevices accessibility in modern browsers
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Your browser or connection protocol doesn't support microphone streaming access.")
      }

      await vapiRef.current.start(assistantId)
    } catch (err: any) {
      console.error("❌ Execution Blocked:", err)
      setActiveError(err.message || "Microphone access denied or network unavailable.")
      setIsCalling(false)
    }
  }, [isInitialized])

  const stopCall = useCallback(() => {
    if (!vapiRef.current) return
    try {
      vapiRef.current.stop()
    } catch (err) {
      console.error("Failed to cleanly terminate call session:", err)
    }
  }, [])

  const toggleCall = useCallback((assistantId: string) => {
    if (isCalling) {
      stopCall()
    } else {
      startCall(assistantId)
    }
  }, [isCalling, startCall, stopCall])

  return {
    isCalling,
    isInitialized,
    activeError,
    clearError: () => setActiveError(null),
    startCall,
    stopCall,
    toggleCall
  }
}