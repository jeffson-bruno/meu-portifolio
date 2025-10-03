'use client'

import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../../../data/projects'
import FadeInSection from '../../../components/FadeInSection'

type Props = { params: { slug: string } }

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return (
      <main className="bg-dark text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
          <p className="mt-2 text-white/70">
            Verifique o endereço ou volte para a <Link className="text-primary underline" href="/">página inicial</Link>.
          </p>
        </div>
      </main>
    )
  }

  const isConstruloc = project.slug === 'construloc'

  return (
    <main className="bg-dark text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <FadeInSection>
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <p className="mt-3 text-white/80 max-w-3xl">{project.description}</p>
        </FadeInSection>

        {/* === Resumo (novo) === */}
        {project.summary && (
          <FadeInSection delay={0.08}>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold mb-2">Resumo</h2>
              <p className="text-white/90 leading-relaxed">{project.summary}</p>
            </div>
          </FadeInSection>
        )}

        {/* === Principais pontos (novo) === */}
        {project.highlights?.length ? (
          <FadeInSection delay={0.12}>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold mb-3">Principais pontos</h2>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          </FadeInSection>
        ) : null}

        {/* Tech badges */}
        <FadeInSection delay={0.16}>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeInSection>

        {/* Links externos */}
        <FadeInSection delay={0.2}>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 font-semibold hover:bg-white/10 transition"
              >
                Ver no GitHub
              </a>
            )}
          </div>
        </FadeInSection>

        {/* (Construloc) Credenciais + botão */}
        {isConstruloc && project.extra?.credentials && (
          <FadeInSection delay={0.24}>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold mb-4">Acesso de demonstração</h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">Admin</p>
                    <p>Usuário: <code className="text-primary">admin@construloc.com</code></p>
                    <p>Senha: <code className="text-primary">818181</code></p>
                  </div>
                  <div>
                    <p className="font-semibold">Operador</p>
                    <p>Usuário: <code className="text-primary">operador@construloc.com</code></p>
                    <p>Senha: <code className="text-primary">919191</code></p>
                  </div>
                  <p className="text-white/60 mt-2">* Contas para testar o sistema. Acesse a demo em uma nova aba.</p>
                </div>
              </div>

              <div className="flex items-start md:items-center">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold hover:bg-orange-500 transition"
                  >
                    Acessar
                  </a>
                )}
              </div>
            </div>
          </FadeInSection>
        )}

        {/* Galeria */}
        <FadeInSection delay={0.25}>
          <h2 className="mt-12 text-2xl font-semibold">Capturas de tela</h2>
          {(() => {
            const firstFour = project.images.slice(0, 4)
            const leftovers = project.images.slice(4)

            const Card = ({ src, alt }: { src: string; alt: string }) => (
              <div className="group relative w-full h-60 md:h-64 overflow-hidden rounded-[25px] border border-white/10 bg-white/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute inset-0 p-3">
                  <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-black/20">
                    <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-contain" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-[25px] ring-0 ring-primary/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/40" />
                <button className="absolute inset-0 outline-none" aria-label={`Visualizar ${alt}`} />
              </div>
            )

            return (
              <>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {firstFour.map((img) => <Card key={img.src} src={img.src} alt={img.alt} />)}
                </div>

                {leftovers.length > 0 && (
                  <div className="mt-8 flex flex-wrap justify-center gap-8">
                    {leftovers.map((img) => (
                      <div key={img.src} className="w-full sm:w-[520px]">
                        <Card src={img.src} alt={img.alt} />
                      </div>
                    ))}
                  </div>
                )}
              </>
            )
          })()}
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="mt-12">
            <Link href="/#projetos" className="text-primary underline">← Voltar para projetos</Link>
          </div>
        </FadeInSection>
      </section>
    </main>
  )
}
