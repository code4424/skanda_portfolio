"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  )
}
