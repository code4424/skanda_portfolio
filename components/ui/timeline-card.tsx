"use client"

import { motion } from "framer-motion"
import { GlassCard } from "./glass-card"
import { Briefcase, MapPin, Calendar, Award } from "lucide-react"
import Image from "next/image"

interface TimelineCardProps {
  experience: {
    company: string
    position: string
    duration: string
    location: string
    type: string
    logo: string
    details: string[]
    tech: string[]
    achievements: string[]
  }
  index: number
}

export function TimelineCard({ experience, index }: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative"
    >
      <div className="absolute left-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -translate-x-2 top-8 hidden md:block shadow-lg" />

      <div className="md:ml-16">
        <GlassCard className="p-8 hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 dark:border-gray-700/20">
                <Image
                  src={experience.logo || "/placeholder.svg"}
                  alt={experience.company}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{experience.position}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">{experience.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {experience.type}
                    </div>
                  </div>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                {experience.details.map((detail, i) => (
                  <li key={i} className="leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>

              {experience.achievements.length > 0 && (
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  )
}
