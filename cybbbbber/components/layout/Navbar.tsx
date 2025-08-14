'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, LogOut, Settings, Calendar, Trophy } from 'lucide-react'
import { useAuth } from '@/components/providers/AuthProvider'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/planos', label: 'Planos' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/jogos', label: 'Jogos' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/ranking', label: 'Ranking' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-cyan rounded-lg flex items-center justify-center group-hover:animate-glow transition-all duration-300">
              <span className="text-dark-bg font-orbitron font-bold text-lg">CS</span>
            </div>
            <span className="text-xl lg:text-2xl font-orbitron font-bold text-gradient">
              Cyber_Stop
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-neon-blue font-rajdhani font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href={user.role === 'ADMIN' ? '/admin' : '/cliente'} className="btn-neon text-sm">
                  <User className="w-4 h-4 mr-2" />
                  {user.role === 'ADMIN' ? 'Admin' : 'Minha Conta'}
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-300 hover:text-neon-pink transition-colors duration-300"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/auth/login" className="text-gray-300 hover:text-neon-blue font-rajdhani transition-colors duration-300">
                  Entrar
                </Link>
                <Link href="/auth/register" className="btn-neon text-sm">
                  Cadastrar
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-neon-blue transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass backdrop-blur-md border-t border-white/10"
          >
            <div className="container-custom py-6">
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-neon-blue font-rajdhani font-medium transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="border-t border-white/10 pt-4 mt-4">
                  {user ? (
                    <div className="space-y-4">
                      <Link
                        href={user.role === 'ADMIN' ? '/admin' : '/cliente'}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center text-gray-300 hover:text-neon-blue transition-colors duration-300 py-2"
                      >
                        <User className="w-5 h-5 mr-3" />
                        {user.role === 'ADMIN' ? 'Painel Admin' : 'Minha Conta'}
                      </Link>
                      <button
                        onClick={() => {
                          logout()
                          setIsOpen(false)
                        }}
                        className="flex items-center text-gray-300 hover:text-neon-pink transition-colors duration-300 py-2 w-full"
                      >
                        <LogOut className="w-5 h-5 mr-3" />
                        Sair
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Link
                        href="/auth/login"
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-300 hover:text-neon-blue font-rajdhani transition-colors duration-300 py-2"
                      >
                        Entrar
                      </Link>
                      <Link
                        href="/auth/register"
                        onClick={() => setIsOpen(false)}
                        className="btn-neon text-center"
                      >
                        Cadastrar
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}


