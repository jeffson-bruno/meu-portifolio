'use client'

import Link from 'next/link'

const Header = () => {
  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Mim', href: '#sobre' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="fixed top-0 w-full bg-dark z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Jeffson.dev</h1>

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
