"use client"

import { motion } from "framer-motion"
import { GlassCard } from "./glass-card"
import { Award, ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    title: string
    image: string
    description: string
    longDescription: string
    link: string
    github: string
    tech: string[]
    achievement?: string
    category: string
    status: string
    year: string
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <GlassCard className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {project.achievement && (
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              <Award className="w-4 h-4" />
              {project.achievement}
            </div>
          )}

          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-blue-500/90 text-white rounded-full text-sm font-medium">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-green-500/90 text-white rounded-full text-sm font-medium">
              {project.status}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{project.year}</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {project.title}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
