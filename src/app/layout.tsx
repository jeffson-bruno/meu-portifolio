import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jeffson Bruno | Portfólio',
  description: 'Desenvolvedor Front-end & Back-end',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <div className="pt-20">{children}</div>
        </body>
    </html>
  )
}