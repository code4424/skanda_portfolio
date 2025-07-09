"use client"

import type React from "react"

import { motion } from "framer-motion"
import { GlassCard } from "./glass-card"

interface SkillCardProps {
  skill: {
    name: string
    icon: React.ReactNode
    level: number
    category: string
  }
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <GlassCard className="p-6 text-center group hover:scale-105 transition-all duration-300">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{skill.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{skill.category}</p>
        <div className="relative">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
            />
          </div>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.level}%</span>
        </div>
      </GlassCard>
    </motion.div>
  )
}
