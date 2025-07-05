'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { FaVuejs, FaJsSquare, FaPhp, FaNodeJs, FaReact, FaAws } from 'react-icons/fa'
import { SiKotlin, SiTailwindcss } from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import React, { JSX } from 'react'

type TechIconProps = { name: string }

type MotionDivProps = React.PropsWithChildren<HTMLMotionProps<'div'> & { className?: string }>

const MotionDiv: React.FC<MotionDivProps> = ({ className, children, ...props }) => (
  <motion.div {...props} {...(className ? { className } : {})}>
    {children}
  </motion.div>
)


const techIconMap: Record<string, JSX.Element> = {
  'Vue.js': <FaVuejs size={24} color="#42b883" />,
  'JavaScript': <FaJsSquare size={24} color="#f7df1e" />,
  PHP: <FaPhp size={24} color="#777bb3" />,
  'Node.js': <FaNodeJs size={24} color="#339933" />,
  React: <FaReact size={24} color="#61dafb" />,
  Kotlin: <SiKotlin size={24} color="#0095D5" />,
  Java: <DiJava size={24} color="#007396" />,
  AWS: <FaAws size={24} color="#FF9900" />,
  'Tailwind CSS': <SiTailwindcss size={24} color="#38bdf8" />,
}

function TechIcon({ name }: TechIconProps) {
  return techIconMap[name] || null
}

type ProjectCardProps = {
  image: string
  name: string
  description: string
  technologies: string[]
  link: string
}

export default function ProjectCard({
  image,
  name,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    // @ts-ignore
    <MotionDiv
      whileHover={{ scale: 1.05 }}
      className="bg-dark rounded-lg shadow-lg min-w-[280px] max-w-xs mx-4 flex-shrink-0 overflow-hidden border border-primary"
    >
      <img src={image} alt={`Imagem do projeto ${name}`} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm mb-3">{description}</p>
        <div className="flex space-x-3 mb-4">
          {technologies.map((tech) => (
            <div key={tech} title={tech}>
              <TechIcon name={tech} />
            </div>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary px-4 py-2 rounded font-semibold hover:bg-orange-500 transition"
        >
          Ver Projeto
        </a>
      </div>
    </MotionDiv>
  )
}
