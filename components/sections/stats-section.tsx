"use client"

import type React from "react"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

interface StatsSectionProps {
  stats: Array<{
    label: string
    value: string
    icon: React.ReactNode
  }>
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <GlassCard className="p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
