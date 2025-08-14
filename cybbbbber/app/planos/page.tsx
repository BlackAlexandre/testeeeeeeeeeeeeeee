'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, Shield } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Silver',
    price: 99.90,
    period: 'mês',
    description: 'Plano básico para quem está começando',
    icon: Shield,
    color: 'text-gray-400',
    bgColor: 'bg-gray-400/10',
    borderColor: 'border-gray-400/30',
    popular: false,
    features: [
      '20h de PC por mês',
      '5h de console por mês',
      '10 impressões PB',
      '1 acompanhante',
      'Pontos padrão',
      'Suporte básico'
    ]
  },
  {
    name: 'Gold',
    price: 199.90,
    period: 'mês',
    description: 'Plano intermediário com benefícios exclusivos',
    icon: Star,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400/30',
    popular: true,
    features: [
      '40h de PC por mês',
      '10h de console por mês',
      '20 impressões PB ou 10 coloridas',
      '3 acompanhantes',
      'Bônus +10%',
      'Isenção 2ª via',
      'Acesso prioritário',
      'Suporte dedicado'
    ]
  },
  {
    name: 'Diamond',
    price: 349.90,
    period: 'mês',
    description: 'Plano premium com todos os benefícios',
    icon: Crown,
    color: 'text-neon-purple',
    bgColor: 'bg-neon-purple/10',
    borderColor: 'border-neon-purple/30',
    popular: false,
    features: [
      'PC ilimitado em horário comercial',
      '20h de console por mês',
      'Impressões PB ilimitadas + 20 coloridas',
      'Bônus +20%',
      'Isenção geral de taxas',
      'Espaço gamer premium',
      'Snacks/bebidas inclusos',
      'Eventos exclusivos',
      'Acesso às estações de streaming/gravação'
    ]
  }
]

const services = [
  { name: 'PC', price: 'R$ 8,50/h' },
  { name: 'Xbox S', price: 'R$ 9,00/h' },
  { name: 'PS5', price: 'R$ 9,50/h' },
  { name: 'Impressão PB', price: 'R$ 0,50' },
  { name: 'Impressão Colorida', price: 'R$ 1,00' },
  { name: '2ª via', price: 'R$ 2,00' },
  { name: 'Digitação', price: 'R$ 1,25' },
  { name: 'Escaneamento', price: 'R$ 3,00' },
  { name: 'Xerox PB', price: 'R$ 0,75/folha' },
  { name: 'Scanner pendrive', price: 'R$ 3,00' },
  { name: 'Digitação texto/folha', price: 'A partir de R$ 10,00' },
  { name: 'Currículo PB', price: 'R$ 1,00' },
  { name: 'Currículo Colorido', price: 'R$ 1,50' }
]

export default function PlanosPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

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
              Escolha seu <span className="text-gradient">Plano</span>
            </h1>
            <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
              Planos flexíveis para todos os tipos de gamers. Encontre o que melhor 
              se adapta ao seu estilo de jogo e orçamento.
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative card-scanline ${
                  plan.popular ? 'ring-2 ring-yellow-400/50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-dark-bg px-4 py-1 rounded-full text-sm font-rajdhani font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center space-y-6">
                  {/* Plan Header */}
                  <div className="space-y-4">
                    <div className={`w-16 h-16 ${plan.bgColor} ${plan.borderColor} border-2 rounded-full flex items-center justify-center mx-auto`}>
                      <plan.icon className={`w-8 h-8 ${plan.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-400 font-rajdhani">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <div className="text-4xl font-orbitron font-bold text-white">
                      R$ {plan.price}
                    </div>
                    <div className="text-gray-400 font-rajdhani">
                      por {plan.period}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-neon-blue flex-shrink-0" />
                        <span className="text-gray-300 font-rajdhani text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/auth/register"
                    className="btn-neon w-full flex justify-center items-center"
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Assinar {plan.name}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Nossos <span className="text-gradient">Serviços</span>
            </h2>
            <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto">
              Além dos planos, oferecemos diversos serviços para atender todas as suas necessidades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card-scanline flex items-center justify-between"
              >
                <span className="text-white font-rajdhani font-medium">
                  {service.name}
                </span>
                <span className="text-neon-blue font-orbitron font-semibold">
                  {service.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card-scanline">
                <h3 className="text-xl font-orbitron font-semibold text-white mb-3">
                  Como funciona o sistema de pontos?
                </h3>
                <p className="text-gray-300 font-rajdhani">
                  Você ganha pontos por cada hora jogada. Esses pontos podem ser trocados 
                  por descontos, horas extras ou produtos exclusivos.
                </p>
              </div>

              <div className="card-scanline">
                <h3 className="text-xl font-orbitron font-semibold text-white mb-3">
                  Posso cancelar meu plano a qualquer momento?
                </h3>
                <p className="text-gray-300 font-rajdhani">
                  Sim! Você pode cancelar seu plano a qualquer momento sem multa. 
                  O acesso será mantido até o final do período contratado.
                </p>
              </div>

              <div className="card-scanline">
                <h3 className="text-xl font-orbitron font-semibold text-white mb-3">
                  Os planos incluem jogos?
                </h3>
                <p className="text-gray-300 font-rajdhani">
                  Todos os planos incluem acesso a nossa biblioteca completa de jogos, 
                  incluindo títulos premium e lançamentos.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card-scanline">
                <h3 className="text-xl font-orbitron font-semibold text-white mb-3">
                  Como funciona o acesso prioritário?
                </h3>
                <p className="text-gray-300 font-rajdhani">
                  Planos Gold e Diamond têm prioridade na reserva de máquinas e 
                  acesso a salas exclusivas durante horários de pico.
                </p>
              </div>

              <div className="card-scanline">
                <h3 className="text-xl font-orbitron font-semibold text-white mb-3">
                  Posso transferir horas entre PC e console?
                </h3>
                <p className="text-gray-300 font-rajdhani">
                  As horas são específicas para cada plataforma. No entanto, 
                  planos Diamond têm mais flexibilidade na conversão.
                </p>
              </div>

              <div className="card-scanline">
                <h3 className="text-xl font-orbitron font-semibold text-white mb-3">
                  Há desconto para pagamento anual?
                </h3>
                <p className="text-gray-300 font-rajdhani">
                  Sim! Pagamento anual tem 15% de desconto em todos os planos. 
                  Entre em contato conosco para mais detalhes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="card-scanline max-w-2xl mx-auto">
              <h3 className="text-2xl font-orbitron font-bold mb-4">
                Pronto para começar?
              </h3>
              <p className="text-gray-300 font-rajdhani mb-6">
                Escolha seu plano e comece sua jornada na Cyber_Stop hoje mesmo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/register" className="btn-neon">
                  Criar Conta
                </Link>
                <Link href="/contato" className="btn-neon bg-neon-purple border-neon-purple text-white hover:bg-neon-purple/80">
                  Falar Conosco
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


