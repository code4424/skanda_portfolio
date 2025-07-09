"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingNavProps {
  navItems: {
    name: string
    href: string
    icon: React.ReactNode
  }[]
}

export function FloatingNav({ navItems }: FloatingNavProps) {
  const [visible, setVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setVisible(scrollY > 100)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-40"
        >
          <div className="flex items-center gap-2 px-6 py-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-full shadow-lg">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                  activeSection === item.href.substring(1)
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/20",
                )}
              >
                {item.icon}
                <span className="text-sm font-medium hidden sm:block">{item.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
