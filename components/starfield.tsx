"use client"

import { useEffect, useRef, useCallback } from "react"

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const starsRef = useRef<Array<{ x: number; y: number; z: number; prevZ: number }>>([])

  const initStars = useCallback(() => {
    const stars = []
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 1000,
        prevZ: Math.random() * 1000,
      })
    }
    starsRef.current = stars
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.fillStyle = "rgba(30, 0, 51, 0.1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    starsRef.current.forEach((star) => {
      star.prevZ = star.z
      star.z -= 2

      if (star.z <= 0) {
        star.x = Math.random() * 2000 - 1000
        star.y = Math.random() * 2000 - 1000
        star.z = 1000
        star.prevZ = 1000
      }

      const x = (star.x / star.z) * centerX + centerX
      const y = (star.y / star.z) * centerY + centerY
      const prevX = (star.x / star.prevZ) * centerX + centerX
      const prevY = (star.y / star.prevZ) * centerY + centerY

      const opacity = Math.min(1, (1000 - star.z) / 1000)

      ctx.strokeStyle = `rgba(0, 255, 198, ${opacity * 0.8})`
      ctx.lineWidth = Math.max(0.5, (1000 - star.z) / 500)
      ctx.beginPath()
      ctx.moveTo(prevX, prevY)
      ctx.lineTo(x, y)
      ctx.stroke()
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    initStars()
    animate()

    const handleResize = () => {
      const canvas = canvasRef.current
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [initStars, animate])

  return (
    <canvas
      ref={canvasRef}
      className="starfield"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    />
  )
}
