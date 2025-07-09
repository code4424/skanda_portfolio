"use client"

import { motion } from "framer-motion"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { SparklesCore } from "@/components/ui/sparkles"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { ChevronDown, Download, MessageCircle } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  darkMode: boolean
  words: Array<{
    text: string
    className?: string
  }>
}

export function HeroSection({ darkMode, words }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          speed={0.1}
          minSize={0.4}
          maxSize={1}
          particleColor={darkMode ? "#FFFFFF" : "#000000"}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="relative w-48 sm:w-56 h-48 sm:h-56 mx-auto mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-gray-700/20 shadow-2xl">
            <Image
              src="/placeholder.svg?height=224&width=224"
              alt="Skanda I B"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full animate-ping" />
            <div className="absolute w-3 h-3 bg-white rounded-full" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          SKANDA I B
        </motion.h1>

        {/* Main Heading */}
        <TextGenerateEffect
          words="Transforming Ideas into Intelligent Solutions"
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
        />

        {/* Typewriter Effect */}
        <div className="mt-8">
          <TypewriterEffect words={words} className="text-xl sm:text-2xl" />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Full-stack developer and AI engineer passionate about creating innovative solutions that bridge the gap
          between cutting-edge technology and real-world impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Let's Collaborate
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Skanda-CV.pdf"
            download="SKANDA-RESUME.pdf"
            className="group px-8 py-4 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-full font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-3"
          >
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
