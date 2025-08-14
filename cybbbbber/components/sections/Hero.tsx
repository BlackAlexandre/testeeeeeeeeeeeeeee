'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Play, Users, Zap, Shield } from 'lucide-react'

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Gerar partículas aleatórias
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Partículas animadas */}
      <div className="particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 6,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg/95 to-neon-blue/10" />
      
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 212, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-neon-blue/20 border border-neon-blue/30 rounded-full px-4 py-2 text-neon-blue font-rajdhani text-sm"
          >
            <Zap className="w-4 h-4" />
            <span>100% Automatizada</span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-bold"
          >
            <span className="text-gradient">Cyber_Stop</span>
            <br />
            <span className="text-white">Lan House Gamer</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed"
          >
            A experiência gaming mais avançada do Brasil. 
            <span className="text-neon-blue"> Equipamentos premium</span>, 
            <span className="text-neon-purple"> eventos exclusivos</span> e 
            <span className="text-neon-cyan"> ambiente futurista</span>.
          </motion.p>

          {/* Estatísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="space-y-2">
              <div className="text-3xl font-orbitron font-bold text-neon-blue">12</div>
              <div className="text-sm text-gray-400 font-rajdhani">Máquinas Premium</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-orbitron font-bold text-neon-purple">7</div>
              <div className="text-sm text-gray-400 font-rajdhani">Eventos Mensais</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-orbitron font-bold text-neon-cyan">24/7</div>
              <div className="text-sm text-gray-400 font-rajdhani">Suporte</div>
            </div>
          </motion.div>

          {/* Botões de ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/reservas" className="btn-neon group">
              <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Reservar Agora
            </Link>
            <Link href="/eventos" className="btn-neon bg-neon-purple border-neon-purple text-white hover:bg-neon-purple/80 group">
              <Users className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Ver Eventos
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-neon-blue rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


