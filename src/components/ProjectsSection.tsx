'use client'

import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

type MotionDivProps = React.ComponentPropsWithoutRef<typeof motion.div> & { className?: string }
const MotionDiv: React.FC<MotionDivProps> = (props) => <motion.div {...props} />

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-16 px-4 bg-dark text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-primary inline-block">
          Projetos
        </h2>

        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent"
          aria-label="Lista de projetos"
        >
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              image={p.images?.[0]?.src || '/imgs/projetos/placeholder.png'}
              name={p.name}
              description={p.description}
              technologies={p.technologies}
            />
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}
