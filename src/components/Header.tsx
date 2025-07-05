'use client'

import Link from 'next/link'
import { FiCode } from 'react-icons/fi'

const Header = () => {
  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Mim', href: '#sobre' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="bg-dark text-white py-6 shadow-md border-b border-primary">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <FiCode size={28} className="text-primary" />
            Jeffson Bruno
        </div>

        <nav className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
