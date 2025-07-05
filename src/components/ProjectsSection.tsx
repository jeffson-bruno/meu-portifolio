'use client'

import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

type MotionDivProps = React.ComponentPropsWithoutRef<typeof motion.div> & { className?: string };

const MotionDiv: React.FC<MotionDivProps> = (props) => (
  <motion.div {...props} />
)

const projetos = [
  {
    image: '/projetos/projeto1.jpg',
    name: 'Consulta Clima',
    description: 'Aplicação web para gerenciamento de pedidos e estoque.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    link: 'consulta-clima-tau.vercel.app/',
  },
  {
    image: '/projetos/projeto2.jpg',
    name: 'iMovi',
    description: 'Dashboard moderno com gráficos, estatísticas e controle de usuários.',
    technologies: ['Bootstrap', 'HTML5', 'CSS3'],
    link: 'jeff-desv.github.io/iMovi/',
  },
  {
    image: '/projetos/projeto3.jpg',
    name: 'Landing Page',
    description: 'Página institucional responsiva com integração de formulário.',
    technologies: ['Vue.js', 'Tailwind CSS'],
    link: 'https://github.com/seuusuario/projeto3',
  },
]

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
          transition={{ duration: 0.5 }}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent"
        >
          {projetos.map((projeto, index) => (
            <ProjectCard key={index} {...projeto} />
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}
