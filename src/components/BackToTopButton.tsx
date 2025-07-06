'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-orange-500 transition z-50"
      aria-label="Voltar ao topo"
    >
      <FaArrowUp />
    </button>
  )
}
