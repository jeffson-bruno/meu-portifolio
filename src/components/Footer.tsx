'use client'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8 border-t border-primary mt-10 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/jeffson-bruno" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="hover:text-primary transition" />
        </a>
        <a href="https://www.linkedin.com/in/jeffsonsousa" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="hover:text-primary transition" />
        </a>
        <a href="https://instagram.com/brunojeff0012?igsh=MTU2YzJ3b3pjYWJxdg==" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} className="hover:text-primary transition" />
        </a>
      </div>

      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} • Desenvolvido por Jeffson Bruno de Sousa
      </p>
    </footer>
  )
}
