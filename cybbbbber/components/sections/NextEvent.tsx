'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Trophy, Clock } from 'lucide-react'
import Link from 'next/link'

// Próximo evento (simulado)
const nextEvent = {
  name: 'CS2 Open Cup',
  date: new Date('2024-02-15T19:00:00Z'),
  location: 'Cyber_Stop Arena',
  participants: '32 times',
  prize: 'R$ 2.000',
  game: 'Counter-Strike 2',
  description: 'Campeonato aberto de CS2 com premiação em dinheiro e equipamentos gaming.',
  banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop'
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function NextEvent() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = nextEvent.date.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: 'Dias', color: 'text-neon-blue' },
    { value: timeLeft.hours, label: 'Horas', color: 'text-neon-cyan' },
    { value: timeLeft.minutes, label: 'Minutos', color: 'text-neon-purple' },
    { value: timeLeft.seconds, label: 'Segundos', color: 'text-neon-pink' }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-card/50 to-neon-blue/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-6">
            Próximo{' '}
            <span className="text-gradient">Evento</span>
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Não perca o próximo campeonato! Inscreva-se agora e garanta sua vaga
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Event Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-neon-blue/20 border border-neon-blue/30 rounded-full px-4 py-2 text-neon-blue font-rajdhani text-sm">
                <Trophy className="w-4 h-4" />
                <span>Evento Premium</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-orbitron font-bold text-white">
                {nextEvent.name}
              </h3>
              
              <p className="text-xl text-gray-300 font-rajdhani">
                {nextEvent.description}
              </p>
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-neon-blue" />
                <span className="font-rajdhani">
                  {nextEvent.date.toLocaleDateString('pt-BR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-neon-cyan" />
                <span className="font-rajdhani">{nextEvent.location}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <Users className="w-5 h-5 text-neon-purple" />
                <span className="font-rajdhani">{nextEvent.participants}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <Trophy className="w-5 h-5 text-neon-pink" />
                <span className="font-rajdhani font-semibold">{nextEvent.prize}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/eventos" className="btn-neon">
                Inscrever-se
              </Link>
              <Link href="/eventos" className="btn-neon bg-neon-purple border-neon-purple text-white hover:bg-neon-purple/80">
                Ver Todos os Eventos
              </Link>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Event Banner */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={nextEvent.banner}
                alt={nextEvent.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="text-white font-orbitron font-semibold text-lg">
                  {nextEvent.game}
                </h4>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="card-scanline">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-2 text-neon-blue">
                  <Clock className="w-6 h-6" />
                  <h4 className="text-xl font-orbitron font-semibold">
                    Contagem Regressiva
                  </h4>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {timeUnits.map((unit, index) => (
                    <motion.div
                      key={unit.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className={`text-3xl sm:text-4xl font-orbitron font-bold ${unit.color} mb-2`}>
                        {unit.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-sm text-gray-400 font-rajdhani">
                        {unit.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-sm text-gray-300 font-rajdhani">
                  Não perca essa oportunidade única!
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


