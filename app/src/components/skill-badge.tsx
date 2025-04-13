"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors">
        {name}
      </Badge>
    </motion.div>
  )
}
