"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  return (
    <motion.div ref={ref} className={cn("relative w-full max-w-4xl mx-auto h-full", className)}>
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{ opacity: scrollYProgress.get() > 0 ? 0.5 : 1 }}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center bg-white"
        >
          <motion.div className="h-2 w-2 rounded-full border border-neutral-300 bg-emerald-500" />
        </motion.div>
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-4 block" aria-hidden="true">
          <motion.path
            d={`m 1 0 V -36 l 18 24 V ${svgHeight * 0.8} l -18 24`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`m 1 0 V -36 l 18 24 V ${svgHeight * 0.8} l -18 24`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2={svgHeight}>
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  )
}
