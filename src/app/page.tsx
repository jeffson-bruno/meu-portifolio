import Image from 'next/image'

export default function Home() {
  return (
 <main className="bg-dark text-white">
      <section id="inicio" className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="rounded-full overflow-hidden w-40 h-40 mb-6 border-4 border-primary">
          <Image
            src="/profile.jpg"
            alt="Foto de Jeffson"
            width={160}
            height={160}
            priority
          />
        </div>

        <h1 className="text-4xl font-bold mb-2">Jeffson Bruno de Sousa</h1>
        <p className="text-lg text-primary mb-6">Desenvolvedor Front-End & Back-End</p>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition"
        >
          Contato WhatsApp
        </a>
      </section>
      {/* Seção Sobre Mim */}
      <section id="sobre" className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-primary inline-block">
          Sobre Mim
        </h2>

        <div className="space-y-8 text-lg leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2">Experiência e Tecnologias</h3>
            <p>
              Estudo desenvolvimento desde 2020, entrei na faculdade de Análise e Desenvolvimento de Sistemas em 2021, onde me formei em 2023.  
              Atuo como freelancer desde 2024, utilizando principalmente Vue.js, Javascript, Node.js, PHP e Blade.  
              Estou expandindo meus conhecimentos para React, React Native, Java, Kotlin e AWS.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Ferramentas e Boas Práticas</h3>
            <p>
              Tenho experiência com testes de software, integração contínua e mensageria, buscando sempre aplicar boas práticas no desenvolvimento para garantir qualidade e manutenibilidade dos projetos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Objetivos Profissionais</h3>
            <p>
              Atualmente, meu objetivo é conseguir uma oportunidade de emprego ou atuar como freelancer, buscando projetos desafiadores que me permitam crescer e contribuir com soluções eficientes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Interesses e Aprendizado</h3>
            <p>
              Sou apaixonado por resolver problemas e sempre busco aprender novas tecnologias e metodologias para me aprimorar continuamente na área de desenvolvimento.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}