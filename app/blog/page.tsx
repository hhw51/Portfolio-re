"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Starfield } from "@/components/starfield"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: 3D Interfaces and Beyond",
    excerpt:
      "Exploring how three-dimensional user interfaces are revolutionizing the way we interact with digital content.",
    author: "Alex Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
    image: "/images/blog/3d-web-interfaces.png",
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered Design: Automating Creative Workflows",
    excerpt: "How artificial intelligence is transforming the creative process and enabling new forms of digital art.",
    author: "Sarah Johnson",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "AI & Design",
    image: "/images/blog/ai-design.png",
    featured: false,
  },
  {
    id: 3,
    title: "Building Immersive Experiences with WebXR",
    excerpt: "A deep dive into creating virtual and augmented reality experiences that run directly in web browsers.",
    author: "Mike Rodriguez",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "WebXR",
    image: "/images/blog/webxr-experience.png",
    featured: false,
  },
  {
    id: 4,
    title: "Performance Optimization for 3D Web Applications",
    excerpt: "Best practices for maintaining smooth performance while delivering rich 3D experiences on the web.",
    author: "Emma Davis",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Performance",
    image: "/images/blog/performance-optimization.png",
    featured: false,
  },
  {
    id: 5,
    title: "The Psychology of Digital Interfaces",
    excerpt: "Understanding how users interact with digital spaces and designing for optimal user experience.",
    author: "David Kim",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "UX Design",
    image: "/images/blog/digital-psychology.png",
    featured: false,
  },
]

export default function BlogPage() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Successfully Subscribed! 🎉",
        description: "Welcome! You'll receive the latest insights on web development, AI integration, and digital innovation.",
        duration: 5000,
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <div className="relative min-h-screen pt-20">
      <Starfield />

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00FFC6] to-white bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on the future of digital experiences
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glassmorphism rounded-2xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00FFC6] text-black px-3 py-1 rounded-full text-sm font-bold">Featured</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <span className="text-[#00FFC6]">{featuredPost.category}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 hover:text-[#00FFC6] transition-colors">
                  <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                </h2>
                <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">By {featuredPost.author}</span>
                  <Link href={`/blog/${featuredPost.id}`} className="flex items-center text-[#00FFC6] hover:underline">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#00FFC6] transition-colors">{post.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">By {post.author}</span>
                    <ArrowRight className="h-4 w-4 text-[#00FFC6] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 glassmorphism p-12 rounded-2xl"
        >
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on digital innovation and cutting-edge technology.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-[#00FFC6]"
              required
              disabled={isSubscribing}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubscribing}
              className="px-6 py-3 bg-[#00FFC6] text-black font-bold rounded-lg hover:bg-[#00FFC6]/90 transition-colors disabled:opacity-50"
            >
              {isSubscribing ? "Subscribing..." : "Subscribe"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
