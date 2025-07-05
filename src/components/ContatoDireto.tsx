'use client'

import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function ContatoDireto() {
  return (
    <section id="contato" className="py-16 px-6  text-white text-center">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-primary inline-block">Fale Comigo</h2>

      <div className="flex flex-col items-center gap-4 mt-6">
        <a
          href="mailto:brunojeff0012@gmail.com"
          className="flex items-center gap-3 text-lg hover:text-primary transition"
        >
          <FaEnvelope size={24} /> brunojeff0012@gmail.com
        </a>

        <a
          href="https://wa.me/5586999078090" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg hover:text-primary transition"
        >
          <FaWhatsapp size={24} /> Conversar no WhatsApp
        </a>
      </div>
    </section>
  )
}
