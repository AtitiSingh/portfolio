"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode
}

export function AnimatedButton({ children, ...props }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  )
}
