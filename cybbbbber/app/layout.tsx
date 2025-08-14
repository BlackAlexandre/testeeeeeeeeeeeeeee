import type { Metadata } from 'next'
import { Inter, Orbitron, Rajdhani } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/components/providers/AuthProvider'
import Navbar from '@/components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const rajdhani = Rajdhani({ 
  subsets: ['latin'], 
  variable: '--font-rajdhani',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Cyber_Stop - Lan House Gamer 100% Automatizada',
  description: 'A melhor lan house gamer do Brasil com equipamentos premium, eventos exclusivos e ambiente futurista.',
  keywords: 'lan house, gamer, cyber stop, gaming, eventos, campeonatos',
  authors: [{ name: 'Cyber_Stop Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} ${orbitron.variable} ${rajdhani.variable} bg-dark-bg text-white antialiased`}>
        <AuthProvider>
          <Navbar />
          <main className="pt-16 lg:pt-20">
            {children}
          </main>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1a1a1a',
                color: '#fff',
                border: '1px solid #2a2a2a',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  )
}
