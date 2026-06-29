"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/portfolio", label: "Work" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Automatically close mobile menu when routing changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-300",
        // 1. DYNAMIC POINTER EVENTS: If menu is open, let the whole header catch clicks.
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "pointer-events-auto flex items-center justify-between px-4 md:px-6 py-2 rounded-full border transition-all duration-500",
          scrolled 
            ? "glassmorphism w-full max-w-4xl border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]" 
            : "bg-transparent border-transparent w-full max-w-6xl"
        )}
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#00FFC6] flex items-center justify-center">
            <span className="text-black text-xs font-black">HW</span>
          </div>
          <span className="hidden sm:inline-block">
            Haris<span className="text-[#00FFC6]">Wyne</span>
          </span>
        </Link>

        {/* Desktop Links (Centered) */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all hover:text-[#00FFC6]",
                pathname === item.href ? "text-[#00FFC6] bg-white/5" : "text-gray-400"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Button - The Highlighted "Book Call" */}
        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden sm:block">
            <Button 
              className={cn(
                "rounded-full px-6 transition-all duration-300 font-bold uppercase tracking-widest text-[10px]",
                pathname === "/contact" 
                  ? "bg-white text-black" 
                  : "bg-[#00FFC6] text-black hover:shadow-[0_0_15px_rgba(0,255,198,0.4)]"
              )}
            >
              Book Call
            </Button>
          </Link>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full text-white pointer-events-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            // 2. EXPLICIT INTERACTION CATCHING: Forced pointer-events-auto on menu container
            className="fixed inset-x-4 top-24 z-50 md:hidden glassmorphism p-6 rounded-[2rem] border border-white/10 pointer-events-auto shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-semibold px-4 py-2 rounded-xl transition-all",
                    pathname === item.href ? "text-[#00FFC6] bg-white/5" : "text-white active:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-white/10 my-2" />
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#00FFC6] text-black font-bold h-12 rounded-xl text-xs uppercase tracking-wider">
                  BOOK A STRATEGY CALL
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
