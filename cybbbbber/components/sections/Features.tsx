'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Monitor, Users, Trophy, Clock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '100% Automatizada',
    description: 'Sistema inteligente que gerencia reservas, pagamentos e acesso às máquinas automaticamente.',
    color: 'text-neon-blue',
    bgColor: 'bg-neon-blue/10',
    borderColor: 'border-neon-blue/30'
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Ambiente seguro com câmeras 24h, controle de acesso e proteção de dados dos clientes.',
    color: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/10',
    borderColor: 'border-neon-cyan/30'
  },
  {
    icon: Monitor,
    title: 'Equipamentos Premium',
    description: 'PCs com RTX 4070, PS5 e Xbox Series S com monitores 4K e periféricos profissionais.',
    color: 'text-neon-purple',
    bgColor: 'bg-neon-purple/10',
    borderColor: 'border-neon-purple/30'
  },
  {
    icon: Users,
    title: 'Comunidade Gaming',
    description: 'Encontre outros gamers, participe de eventos e faça parte da maior comunidade do Brasil.',
    color: 'text-neon-pink',
    bgColor: 'bg-neon-pink/10',
    borderColor: 'border-neon-pink/30'
  },
  {
    icon: Trophy,
    title: 'Eventos Exclusivos',
    description: 'Campeonatos semanais com premiações em dinheiro, skins e equipamentos gaming.',
    color: 'text-neon-blue',
    bgColor: 'bg-neon-blue/10',
    borderColor: 'border-neon-blue/30'
  },
  {
    icon: Clock,
    title: 'Funcionamento 24/7',
    description: 'Aberto 24 horas por dia, 7 dias por semana para você jogar quando quiser.',
    color: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/10',
    borderColor: 'border-neon-cyan/30'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Features() {
  return (
    <section className="section-padding bg-dark-card/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-6">
            Por que escolher a{' '}
            <span className="text-gradient">Cyber_Stop</span>?
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
            Descubra os diferenciais que fazem da nossa lan house a melhor escolha para gamers exigentes
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="responsive-grid"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-scanline group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full ${feature.bgColor} ${feature.borderColor} border-2 flex items-center justify-center group-hover:animate-glow transition-all duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-orbitron font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-rajdhani leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card-scanline max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold mb-4">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-gray-300 font-rajdhani mb-6">
              Junte-se à comunidade mais avançada de gamers do Brasil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/planos" className="btn-neon">
                Ver Planos
              </a>
              <a href="/contato" className="btn-neon bg-neon-purple border-neon-purple text-white hover:bg-neon-purple/80">
                Falar Conosco
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


