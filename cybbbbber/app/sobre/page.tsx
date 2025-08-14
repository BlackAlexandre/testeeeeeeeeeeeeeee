import { motion } from 'framer-motion'
import { Users, Trophy, Shield, Zap, Clock, Star } from 'lucide-react'

const stats = [
  { icon: Users, value: '1000+', label: 'Clientes Ativos' },
  { icon: Trophy, value: '50+', label: 'Eventos Realizados' },
  { icon: Shield, value: '100%', label: 'Segurança' },
  { icon: Zap, value: '24/7', label: 'Disponibilidade' },
]

const team = [
  {
    name: 'João Silva',
    role: 'CEO & Fundador',
    description: 'Especialista em gaming e tecnologia com mais de 10 anos de experiência.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Maria Santos',
    role: 'CTO',
    description: 'Desenvolvedora full-stack apaixonada por criar experiências únicas.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Pedro Costa',
    role: 'Head de Eventos',
    description: 'Organizador de campeonatos e especialista em eSports.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  }
]

const testimonials = [
  {
    name: 'Carlos Oliveira',
    role: 'Gamer Profissional',
    content: 'A Cyber_Stop é simplesmente incrível! Os equipamentos são top de linha e o ambiente é perfeito para treinar.',
    rating: 5
  },
  {
    name: 'Ana Ferreira',
    role: 'Streamer',
    content: 'Melhor lan house que já frequentei. O sistema automatizado facilita muito e os eventos são sempre incríveis.',
    rating: 5
  },
  {
    name: 'Lucas Mendes',
    role: 'Estudante',
    content: 'Preço justo, equipamentos excelentes e atendimento impecável. Recomendo para todos os gamers!',
    rating: 5
  }
]

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-bg via-dark-card/50 to-neon-blue/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
              Sobre a{' '}
              <span className="text-gradient">Cyber_Stop</span>
            </h1>
            <p className="text-xl text-gray-300 font-rajdhani max-w-4xl mx-auto leading-relaxed">
              Somos a lan house mais avançada do Brasil, oferecendo uma experiência gaming 
              única com tecnologia de ponta, eventos exclusivos e uma comunidade apaixonada.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-neon-blue/20 border border-neon-blue/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-neon-blue" />
                </div>
                <div className="text-3xl font-orbitron font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-rajdhani">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-orbitron font-bold mb-6">
                Nossa <span className="text-gradient">Missão</span>
              </h2>
              <p className="text-lg text-gray-300 font-rajdhani leading-relaxed mb-6">
                Proporcionar a melhor experiência gaming possível, conectando jogadores 
                através de tecnologia avançada, eventos emocionantes e uma comunidade 
                apaixonada por games.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-neon-blue mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-rajdhani">
                    Equipamentos de última geração para performance máxima
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-neon-cyan mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-rajdhani">
                    Ambiente seguro e confortável para todos os gamers
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-neon-purple mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-rajdhani">
                    Eventos e campeonatos para todos os níveis
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-orbitron font-bold mb-6">
                Nossa <span className="text-gradient">Visão</span>
              </h2>
              <p className="text-lg text-gray-300 font-rajdhani leading-relaxed mb-6">
                Ser a referência nacional em lan houses gaming, expandindo nossa 
                presença e criando a maior rede de espaços gaming do Brasil, sempre 
                inovando e oferecendo experiências únicas.
              </p>
              <div className="card-scanline">
                <h3 className="text-xl font-orbitron font-semibold mb-4">
                  Valores
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                    <span className="text-gray-300 font-rajdhani">Inovação constante</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                    <span className="text-gray-300 font-rajdhani">Qualidade excepcional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                    <span className="text-gray-300 font-rajdhani">Comunidade inclusiva</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                    <span className="text-gray-300 font-rajdhani">Paixão pelo gaming</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="section-padding bg-dark-card/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-6">
              Nossa <span className="text-gradient">Equipe</span>
            </h2>
            <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
              Conheça os profissionais apaixonados que fazem a Cyber_Stop acontecer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-scanline text-center"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-orbitron font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-neon-blue font-rajdhani font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 font-rajdhani text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-6">
              O que nossos <span className="text-gradient">clientes</span> dizem
            </h2>
            <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
              A opinião de quem vive a experiência Cyber_Stop todos os dias
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-scanline"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 font-rajdhani mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="text-white font-rajdhani font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-neon-blue font-rajdhani text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


