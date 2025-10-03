'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaVuejs, FaJsSquare, FaPhp, FaNodeJs, FaReact, FaAws } from 'react-icons/fa'
import { SiKotlin, SiTailwindcss, SiBootstrap } from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import React, { JSX } from 'react'

type TechIconProps = { name: string }

const techIconMap: Record<string, JSX.Element> = {
  'Vue.js': <FaVuejs size={24} color="#42b883" />,
  JavaScript: <FaJsSquare size={24} color="#f7df1e" />,
  PHP: <FaPhp size={24} color="#777bb3" />,
  'Node.js': <FaNodeJs size={24} color="#339933" />,
  React: <FaReact size={24} color="#61dafb" />,
  Kotlin: <SiKotlin size={24} color="#0095D5" />,
  Java: <DiJava size={24} color="#007396" />,
  AWS: <FaAws size={24} color="#FF9900" />,
  'Tailwind CSS': <SiTailwindcss size={24} color="#38bdf8" />,
  Bootstrap: <SiBootstrap size={24} />,
}

function TechIcon({ name }: TechIconProps) {
  return techIconMap[name] || null
}

export type ProjectCardProps = {
  slug: string
  image: string
  name: string
  description: string
  technologies: string[]
}

export default function ProjectCard({
  slug,
  image,
  name,
  description,
  technologies,
}: ProjectCardProps) {
  const uniqueTech = Array.from(new Set(technologies))

  return (
    <div
      className="bg-dark rounded-lg shadow-lg min-w-[280px] max-w-xs mx-4 flex-shrink-0 overflow-hidden border border-primary focus-within:ring-2 focus-within:ring-primary/60 transform transition duration-300 hover:scale-105"
      role="article"
      aria-label={`Projeto ${name}`}
    >
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={`Tela do projeto ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 320px"
          priority={false}
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm mb-3 text-white/90 line-clamp-3">{description}</p>

        {/* Techs */}
        <div className="flex flex-wrap gap-3 mb-4">
          {uniqueTech.map((tech) => {
            const icon = <TechIcon name={tech} />
            return (
              <div key={tech} className="flex items-center gap-2" title={tech} aria-label={tech}>
                {icon ? (
                  icon
                ) : (
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/80">
                    {tech}
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {/* Apenas "Leia mais..." no card */}
        <Link
          href={`/projetos/${slug}`}
          className="inline-block bg-primary px-4 py-2 rounded font-semibold hover:bg-orange-500 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/60"
        >
          Leia mais…
        </Link>
      </div>
    </div>
  )
}
