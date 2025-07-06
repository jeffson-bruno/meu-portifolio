'use client'

import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'
import type { MotionProps } from 'framer-motion'
type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps

const MotionDiv: React.FC<MotionDivProps> = (props) => (
  <motion.div {...props} />
)

export default function Loader() {
  return (
    <MotionDiv
      className="fixed inset-0 bg-dark flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-white text-lg">Carregando...</p>
      </div>
    </MotionDiv>
  )
}
