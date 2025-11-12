"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 sm:gap-3 bg-white/90 dark:bg-slate-900/90 border border-orange/20 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl shadow-orange/10">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.url

          return (
            <Link
              key={item.name}
              href={item.url}
              className={cn(
                "relative cursor-pointer text-sm sm:text-base font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300",
                "text-foreground/70 hover:text-orange hover:scale-105",
                isActive && "bg-orange/10 text-orange shadow-lg shadow-orange/20",
              )}
            >
              <span className="hidden md:inline tracking-wide">{item.name}</span>
              <span className="md:hidden">
                <Icon size={20} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-gradient-to-r from-orange/20 via-orange/10 to-orange/20 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-orange rounded-t-full shadow-lg shadow-orange/50">
                    <div className="absolute w-16 h-8 bg-orange/30 rounded-full blur-xl -top-3 -left-3" />
                    <div className="absolute w-12 h-6 bg-orange/40 rounded-full blur-lg -top-2" />
                    <div className="absolute w-6 h-5 bg-orange/50 rounded-full blur-md top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}