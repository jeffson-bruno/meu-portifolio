'use client'

import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'
import type { MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps

type Props = {
  children: ReactNode
  delay?: number
  className?: string
}

const MotionDiv: React.FC<MotionDivProps> = (props) => (
  <motion.div {...props} />
)

export default function FadeInSection({ children, delay = 0, className = '' }: Props) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </MotionDiv>
  )
}
