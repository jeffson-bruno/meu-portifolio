'use client'

import Image from 'next/image'
import { FaAws, FaJsSquare, FaNodeJs, FaPhp, FaReact, FaVuejs, FaJava } from 'react-icons/fa'
import { SiTailwindcss, SiKotlin } from 'react-icons/si'
import ProjectsSection from '../components/ProjectsSection'
import ContatoDireto from '../components/ContatoDireto'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'




export default function Home() {
  return (
 <main className="bg-dark text-white">

     
      {/* Seção Inicio */}
        <div className="bg-gray-900">
          <section className="min-h-screen text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-10 pb-20 mt-[-30px]">

            {/* Texto à esquerda */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{}}
              // @ts-expect-error: className is valid for motion.div
              className="text-center md:text-left max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Olá! 👋🏽 Sou Jeffson
              </h1>
              <p className="text-xl">
                <span className="text-primary font-semibold">Front-end Developer</span>
              </p>
            </motion.div>

            {/* Foto à direita */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ marginTop: '2.5rem' }} // fallback for mt-10
              // @ts-ignore
              className="md:mt-0"
            >
              <div className="rounded-full overflow-hidden w-80 h-80 md:w-[380px] md:h-[380px] border-4 border-primary shadow-lg">
                <Image
                  src="/imgs/perfil.jpg"
                  alt="Foto de Jeffson"
                  width={288}
                  height={288}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>
          </section>
        </div>

      {/* Seção Sobre Mim */}
      <section id="sobre" className="max-w-4xl mx-auto py-16 px-6">
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8 border-b-4 border-primary inline-block">
            Sobre Mim
          </h2>
        </motion.div>

          <div className="space-y-8 text-lg leading-relaxed">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
            >
            <div>
              <h3 className="text-xl font-semibold mb-2">Experiência e Tecnologias</h3>
              <p>
                Estudo desenvolvimento desde 2020, entrei na faculdade de Análise e Desenvolvimento de Sistemas em 2021, onde me formei em 2023.  
                Atuo como freelancer desde 2024, utilizando principalmente Vue.js, Javascript, Node.js, PHP e Blade.  
                Estou expandindo meus conhecimentos para React, React Native, Java, Kotlin e AWS.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >

            <div>
              <h3 className="text-xl font-semibold mb-2">Ferramentas e Boas Práticas</h3>
              <p>
                Tenho experiência com testes de software, integração contínua e mensageria, buscando sempre aplicar boas práticas no desenvolvimento para garantir qualidade e manutenibilidade dos projetos.
              </p>
            </div>
          </motion.div>
          </div>
      </section>

      {/* Seção Tecnologias */}
      <div className="bg-gray-900">
        <section id="tecnologias" className="max-w-5xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-8 border-b-4 border-primary inline-block">
            Tecnologias
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <FaVuejs size={48} color="#42b883" />
              <span>Vue.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJsSquare size={48} color="#f7df1e" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaPhp size={48} color="#777bb3" />
              <span>PHP</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaNodeJs size={48} color="#339933" />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaReact size={48} color="#61dafb" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiKotlin size={48} color="#0095D5" />
              <span>Kotlin</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJava size={48} color="#007396" />
              <span>Java</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaAws size={48} color="#FF9900" />
              <span>AWS</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiTailwindcss size={48} color="#38bdf8" />
              <span>Tailwind CSS</span>
            </div>
          </div>
        </section>
      </div>
      {/* Seção Projetos */}
      <ProjectsSection />

      {/* Seção Contato */}
      <div className="bg-gray-900">
        <ContatoDireto />
      </div>

      {/* Seção Footer */}
      <Footer />
      
    </main>
  )
}



