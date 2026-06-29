"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const WHATSAPP_NUMBER = "+923104755973" // Replace with actual WhatsApp number

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"whatsapp" | "chatbot">("whatsapp")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Haris' assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your services. Can we discuss my project?")
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("price") || input.includes("cost") || input.includes("budget")) {
      return "Our pricing varies based on project scope. We offer packages starting from $5,000. Would you like to schedule a free consultation to discuss your specific needs?"
    }

    if (input.includes("service") || input.includes("what do you do")) {
      return "We specialize in web development, mobile apps, AI integration, SEO, and digital marketing. What type of project are you working on?"
    }

    if (input.includes("time") || input.includes("how long")) {
      return "Project timelines typically range from 1-6 months depending on complexity. Can you tell me more about your project requirements?"
    }

    if (input.includes("contact") || input.includes("call") || input.includes("meeting")) {
      return "I'd be happy to help! You can reach Haris at haris.wyne10@gmail.com or click the WhatsApp button to chat directly."
    }

    return "That's a great question! For detailed information about your specific needs, I'd recommend speaking with our team directly. Would you like me to connect you with one of our experts?"
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Floating Side Buttons - Repositioned Higher */}
      <div className="fixed right-4 top-1/3 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group relative"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z" />
          </svg>

          {/* Tooltip - Hidden on mobile */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
            Chat on WhatsApp
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black"></div>
          </div>
        </motion.button>

        {/* Chatbot Button */}
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-[#00FFC6] to-[#00D4AA] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group relative"
          title="Open AI Assistant"
        >
          {isOpen ? (
            <X className="w-6 h-6 md:w-7 md:h-7 text-black" />
          ) : (
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-black" />
          )}

          {/* Tooltip - Hidden on mobile */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
            {isOpen ? "Close AI Chat" : "Open AI Assistant"}
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black"></div>
          </div>
        </motion.button>
      </div>

      {/* Chatbot Modal - Improved Mobile Responsiveness */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
              className="fixed z-50 bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden
                         md:right-20 md:top-1/4 md:w-80 md:h-96
                         inset-4 md:inset-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#00FFC6] to-[#00D4AA] p-3 md:p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-sm md:text-base">VEXIS AI</h3>
                    <p className="text-xs text-black/70">Online now</p>
                  </div>
                </div>

                {/* Close button for mobile */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="md:hidden w-8 h-8 bg-black/10 rounded-full flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-black" />
                </button>

                {/* Tab Switcher - Hidden on mobile for space */}
                <div className="hidden md:flex bg-black/10 rounded-full p-1">
                  <button
                    onClick={() => setActiveTab("chatbot")}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      activeTab === "chatbot" ? "bg-black/20 text-black" : "text-black/70 hover:text-black"
                    }`}
                  >
                    AI Chat
                  </button>
                  <button
                    onClick={() => setActiveTab("whatsapp")}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      activeTab === "whatsapp" ? "bg-black/20 text-black" : "text-black/70 hover:text-black"
                    }`}
                  >
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Mobile Tab Switcher */}
              <div className="md:hidden flex bg-gray-100 border-b">
                <button
                  onClick={() => setActiveTab("chatbot")}
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${
                    activeTab === "chatbot" ? "bg-white text-[#00FFC6] border-b-2 border-[#00FFC6]" : "text-gray-600"
                  }`}
                >
                  AI Chat
                </button>
                <button
                  onClick={() => setActiveTab("whatsapp")}
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${
                    activeTab === "whatsapp" ? "bg-white text-[#25D366] border-b-2 border-[#25D366]" : "text-gray-600"
                  }`}
                >
                  WhatsApp
                </button>
              </div>

              {/* Content */}
              {activeTab === "whatsapp" ? (
                <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-50">
                  <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Chat on WhatsApp</h3>
                  <p className="text-sm text-gray-600 text-center mb-6">
                    Get instant responses from our team on WhatsApp
                  </p>
                  <Button onClick={handleWhatsAppClick} className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Start WhatsApp Chat
                  </Button>
                </div>
              ) : (
                <>
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 bg-gray-50">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] md:max-w-[80%] p-3 rounded-lg ${
                            message.sender === "user" ? "bg-[#00FFC6] text-black" : "bg-white text-gray-800 shadow-sm"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p
                            className={`text-xs mt-1 ${message.sender === "user" ? "text-black/70" : "text-gray-500"}`}
                          >
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input */}
                  <div className="p-3 md:p-4 bg-white border-t">
                    <div className="flex gap-2">
                      <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 border-gray-200 focus:border-[#00FFC6] focus:ring-[#00FFC6] text-sm"
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim()}
                        size="sm"
                        className="bg-[#00FFC6] hover:bg-[#00FFC6]/90 text-black px-3"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
