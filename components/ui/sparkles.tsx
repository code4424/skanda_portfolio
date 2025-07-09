"use client"

import type React from "react"
import { useId, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SparklesProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
  speed?: number
}

export const SparklesCore: React.FC<SparklesProps> = ({
  id,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 1200,
  className,
  particleColor = "#FFF",
  speed = 0.1,
}) => {
  const generateId = useId()
  const sparklesId = id || generateId

  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      opacity: number
    }>
  >([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < particleDensity; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (maxSize - minSize) + minSize,
          opacity: Math.random(),
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [particleDensity, minSize, maxSize])

  return (
    <div className={`absolute inset-0 ${className}`} style={{ background }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particleColor,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [particle.opacity, 0.8, particle.opacity],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
