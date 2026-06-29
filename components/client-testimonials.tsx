"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  { name: "Nimra Wasti", company: "EveWhites", content: "Haris transformed our digital presence. His AI integration saved us 40% in operational costs. Highly recommended!", rating: 5 },
  { name: "Michael Chen", company: "DataFlow Solutions", content: "His expertise in full-stack development is unmatched. He delivered beyond expectations and was a pleasure to work with.", rating: 5 },
  { name: "K. Sheen", company: "DRC by PCL", content: "Outstanding technical implementation. Our user engagement increased by 300%. Seamless process from start to finish.", rating: 5 }
]

export function ClientTestimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16 border-l-2 border-[#00FFC6] pl-6">
          <h2 className="text-sm font-mono tracking-[0.3em] text-[#00FFC6] uppercase mb-2">Social Proof</h2>
          <h3 className="text-4xl font-bold tracking-tighter">Verified Outcomes.</h3>
        </div>

        {/* Desktop Grid / Mobile Scroll */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="min-w-[85vw] md:min-w-0 snap-center glassmorphism p-8 rounded-[2rem] border-white/5 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#00FFC6]/20 mb-4" />
                <div className="flex mb-4 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#00FFC6] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white tracking-tight">{testimonial.name}</h4>
                <p className="text-[#00FFC6] text-xs font-mono uppercase tracking-widest">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for hiding scrollbar on mobile */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
