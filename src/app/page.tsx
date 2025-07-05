import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white flex flex-col items-center justify-center p-8">
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
    </main>
  )
}