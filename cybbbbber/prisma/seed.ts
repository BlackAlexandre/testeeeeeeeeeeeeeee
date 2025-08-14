import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Criar usuário admin
  const adminPassword = await bcrypt.hash('Admin@123', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@cyberstop.com' },
    update: {},
    create: {
      name: 'Administrador',
      email: 'admin@cyberstop.com',
      passwordHash: adminPassword,
      role: 'ADMIN',
      phone: '(11) 99999-9999',
      cpf: '123.456.789-00',
      points: 1000,
    },
  })

  // Criar planos
  const plans = await Promise.all([
    prisma.plan.upsert({
      where: { name: 'Silver' },
      update: {},
      create: {
        name: 'Silver',
        price: 99.90,
        perks: JSON.stringify([
          '20h de PC por mês',
          '5h de console por mês',
          '10 impressões PB',
          '1 acompanhante',
          'Pontos padrão'
        ]),
        hoursComputer: 20,
        hoursConsole: 5,
        printsBW: 10,
        printsColor: 0,
        companions: 1,
        priorityAccess: false,
        isPremium: false,
      },
    }),
    prisma.plan.upsert({
      where: { name: 'Gold' },
      update: {},
      create: {
        name: 'Gold',
        price: 199.90,
        perks: JSON.stringify([
          '40h de PC por mês',
          '10h de console por mês',
          '20 impressões PB ou 10 coloridas',
          '3 acompanhantes',
          'Bônus +10%',
          'Isenção 2ª via',
          'Acesso prioritário',
          'Suporte dedicado'
        ]),
        hoursComputer: 40,
        hoursConsole: 10,
        printsBW: 20,
        printsColor: 10,
        companions: 3,
        priorityAccess: true,
        isPremium: false,
      },
    }),
    prisma.plan.upsert({
      where: { name: 'Diamond' },
      update: {},
      create: {
        name: 'Diamond',
        price: 349.90,
        perks: JSON.stringify([
          'PC ilimitado em horário comercial',
          '20h de console por mês',
          'Impressões PB ilimitadas + 20 coloridas',
          'Bônus +20%',
          'Isenção geral de taxas',
          'Espaço gamer premium',
          'Snacks/bebidas inclusos',
          'Eventos exclusivos',
          'Acesso às estações de streaming/gravação'
        ]),
        hoursComputer: 999,
        hoursConsole: 20,
        printsBW: 999,
        printsColor: 20,
        companions: 5,
        priorityAccess: true,
        isPremium: true,
      },
    }),
  ])

  // Criar máquinas
  const machines = await Promise.all([
    // PCs High
    ...Array.from({ length: 8 }, (_, i) => 
      prisma.machine.upsert({
        where: { name: `PC High ${i + 1}` },
        update: {},
        create: {
          name: `PC High ${i + 1}`,
          type: 'PC',
          spec: 'RTX 4070, i7-13700K, 32GB RAM, 1TB NVMe',
          isActive: true,
        },
      })
    ),
    // PS5s
    ...Array.from({ length: 2 }, (_, i) =>
      prisma.machine.upsert({
        where: { name: `PS5 ${i + 1}` },
        update: {},
        create: {
          name: `PS5 ${i + 1}`,
          type: 'PS5',
          spec: 'PlayStation 5, DualSense, 4K HDR',
          isActive: true,
        },
      })
    ),
    // Xbox Series S
    ...Array.from({ length: 2 }, (_, i) =>
      prisma.machine.upsert({
        where: { name: `Xbox Series S ${i + 1}` },
        update: {},
        create: {
          name: `Xbox Series S ${i + 1}`,
          type: 'XBOX',
          spec: 'Xbox Series S, Game Pass Ultimate, 4K',
          isActive: true,
        },
      })
    ),
  ])

  // Criar jogos
  const games = await Promise.all([
    prisma.game.upsert({
      where: { title: 'Counter-Strike 2' },
      update: {},
      create: {
        title: 'Counter-Strike 2',
        platform: 'PC',
        genre: 'FPS',
        coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'O mais recente jogo da franquia Counter-Strike',
        tags: JSON.stringify(['FPS', 'Competitivo', 'Tático']),
      },
    }),
    prisma.game.upsert({
      where: { title: 'Valorant' },
      update: {},
      create: {
        title: 'Valorant',
        platform: 'PC',
        genre: 'FPS',
        coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'FPS tático 5v5 com agentes únicos',
        tags: JSON.stringify(['FPS', 'Tático', 'Competitivo']),
      },
    }),
    prisma.game.upsert({
      where: { title: 'League of Legends' },
      update: {},
      create: {
        title: 'League of Legends',
        platform: 'PC',
        genre: 'MOBA',
        coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'MOBA 5v5 com mais de 150 campeões',
        tags: JSON.stringify(['MOBA', 'Estratégia', 'Competitivo']),
      },
    }),
    prisma.game.upsert({
      where: { title: 'Fortnite' },
      update: {},
      create: {
        title: 'Fortnite',
        platform: 'Multiplataforma',
        genre: 'Battle Royale',
        coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Battle Royale com construção',
        tags: JSON.stringify(['Battle Royale', 'Construção', 'Casual']),
      },
    }),
    prisma.game.upsert({
      where: { title: 'Minecraft' },
      update: {},
      create: {
        title: 'Minecraft',
        platform: 'Multiplataforma',
        genre: 'Sandbox',
        coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Jogo de construção e sobrevivência',
        tags: JSON.stringify(['Sandbox', 'Construção', 'Criativo']),
      },
    }),
    prisma.game.upsert({
      where: { title: 'GTA V' },
      update: {},
      create: {
        title: 'GTA V',
        platform: 'Multiplataforma',
        genre: 'Ação/Aventura',
        coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Mundo aberto com história envolvente',
        tags: JSON.stringify(['Ação', 'Mundo Aberto', 'Online']),
      },
    }),
    prisma.game.upsert({
      where: { title: 'God of War' },
      update: {},
      create: {
        title: 'God of War',
        platform: 'PS5',
        genre: 'Ação/Aventura',
        coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Aventura épica com Kratos',
        tags: JSON.stringify(['Ação', 'Aventura', 'Narrativo']),
      },
    }),
    prisma.game.upsert({
      where: { title: 'Halo Infinite' },
      update: {},
      create: {
        title: 'Halo Infinite',
        platform: 'Xbox',
        genre: 'FPS',
        coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'FPS espacial com Master Chief',
        tags: JSON.stringify(['FPS', 'Espacial', 'Competitivo']),
      },
    }),
    prisma.game.upsert({
      where: { title: 'Spider-Man' },
      update: {},
      create: {
        title: 'Spider-Man',
        platform: 'PS5',
        genre: 'Ação/Aventura',
        coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Aventura do Homem-Aranha em Nova York',
        tags: JSON.stringify(['Ação', 'Super-herói', 'Mundo Aberto']),
      },
    }),
    prisma.game.upsert({
      where: { title: 'Forza Horizon' },
      update: {},
      create: {
        title: 'Forza Horizon',
        platform: 'Xbox',
        genre: 'Corrida',
        coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Simulador de corrida em mundo aberto',
        tags: JSON.stringify(['Corrida', 'Simulador', 'Mundo Aberto']),
      },
    }),
  ])

  // Criar eventos
  const events = await Promise.all([
    prisma.event.upsert({
      where: { name: 'CS2 Open Cup' },
      update: {},
      create: {
        name: 'CS2 Open Cup',
        bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop',
        gameTitle: 'Counter-Strike 2',
        description: 'Campeonato aberto de CS2 com 32 times',
        location: 'Cyber_Stop Arena',
        startAt: new Date('2024-02-15T19:00:00Z'),
        endAt: new Date('2024-02-15T23:00:00Z'),
        prize: 'R$ 2.000',
        rulesUrl: '/rules/cs2-open-cup.pdf',
        slots: 32,
        registeredCount: 0,
      },
    }),
    prisma.event.upsert({
      where: { name: 'Valorant Night Clash' },
      update: {},
      create: {
        name: 'Valorant Night Clash',
        bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop',
        gameTitle: 'Valorant',
        description: 'Noite especial de Valorant com 16 times',
        location: 'Cyber_Stop Arena',
        startAt: new Date('2024-02-20T20:00:00Z'),
        endAt: new Date('2024-02-20T23:00:00Z'),
        prize: 'R$ 1.500',
        rulesUrl: '/rules/valorant-night-clash.pdf',
        slots: 16,
        registeredCount: 0,
      },
    }),
    prisma.event.upsert({
      where: { name: 'LoL Weekend Invitational' },
      update: {},
      create: {
        name: 'LoL Weekend Invitational',
        bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop',
        gameTitle: 'League of Legends',
        description: 'Convite especial de LoL com 10 times',
        location: 'Cyber_Stop Arena',
        startAt: new Date('2024-02-25T14:00:00Z'),
        endAt: new Date('2024-02-25T18:00:00Z'),
        prize: 'Skins + Periféricos',
        rulesUrl: '/rules/lol-weekend-invitational.pdf',
        slots: 10,
        registeredCount: 0,
      },
    }),
    prisma.event.upsert({
      where: { name: 'FIFA Console Masters' },
      update: {},
      create: {
        name: 'FIFA Console Masters',
        bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop',
        gameTitle: 'FIFA 24',
        description: 'Mestres do FIFA com 32 jogadores',
        location: 'Cyber_Stop Arena',
        startAt: new Date('2024-03-01T15:00:00Z'),
        endAt: new Date('2024-03-01T19:00:00Z'),
        prize: 'Medalhas + Troféu',
        rulesUrl: '/rules/fifa-console-masters.pdf',
        slots: 32,
        registeredCount: 0,
      },
    }),
    prisma.event.upsert({
      where: { name: 'Minecraft Build Challenge' },
      update: {},
      create: {
        name: 'Minecraft Build Challenge',
        bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop',
        gameTitle: 'Minecraft',
        description: 'Desafio criativo de construção',
        location: 'Cyber_Stop Arena',
        startAt: new Date('2024-03-05T16:00:00Z'),
        endAt: new Date('2024-03-05T20:00:00Z'),
        prize: 'Acessórios Gaming',
        rulesUrl: '/rules/minecraft-build-challenge.pdf',
        slots: 20,
        registeredCount: 0,
      },
    }),
    prisma.event.upsert({
      where: { name: 'Fortnite Solo Rush' },
      update: {},
      create: {
        name: 'Fortnite Solo Rush',
        bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop',
        gameTitle: 'Fortnite',
        description: 'Rush solo com 50 jogadores',
        location: 'Cyber_Stop Arena',
        startAt: new Date('2024-03-10T17:00:00Z'),
        endAt: new Date('2024-03-10T21:00:00Z'),
        prize: 'Gift Cards',
        rulesUrl: '/rules/fortnite-solo-rush.pdf',
        slots: 50,
        registeredCount: 0,
      },
    }),
    prisma.event.upsert({
      where: { name: 'GTA V Roleplay Meetup' },
      update: {},
      create: {
        name: 'GTA V Roleplay Meetup',
        bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop',
        gameTitle: 'GTA V',
        description: 'Encontro social de roleplay e stream',
        location: 'Cyber_Stop Arena',
        startAt: new Date('2024-03-15T18:00:00Z'),
        endAt: new Date('2024-03-15T22:00:00Z'),
        prize: 'Experiência Única',
        rulesUrl: '/rules/gta-v-roleplay-meetup.pdf',
        slots: 30,
        registeredCount: 0,
      },
    }),
  ])

  // Criar cupons
  const coupons = await Promise.all([
    prisma.coupon.upsert({
      where: { code: 'CYBER10' },
      update: {},
      create: {
        code: 'CYBER10',
        percent: 10,
        maxUses: 100,
        usedCount: 0,
        expiresAt: new Date('2024-12-31'),
        active: true,
      },
    }),
    prisma.coupon.upsert({
      where: { code: 'WELCOME15' },
      update: {},
      create: {
        code: 'WELCOME15',
        percent: 15,
        maxUses: 50,
        usedCount: 0,
        expiresAt: new Date('2024-12-31'),
        active: true,
      },
    }),
    prisma.coupon.upsert({
      where: { code: 'DIAMOND20' },
      update: {},
      create: {
        code: 'DIAMOND20',
        percent: 20,
        maxUses: 20,
        usedCount: 0,
        expiresAt: new Date('2024-12-31'),
        active: true,
      },
    }),
  ])

  // Criar imagens da galeria
  const galleryImages = await Promise.all([
    prisma.galleryImage.upsert({
      where: { title: 'Sala Principal' },
      update: {},
      create: {
        title: 'Sala Principal',
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
        category: 'LOCAL',
      },
    }),
    prisma.galleryImage.upsert({
      where: { title: 'Estação Gaming' },
      update: {},
      create: {
        title: 'Estação Gaming',
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
        category: 'LOCAL',
      },
    }),
    prisma.galleryImage.upsert({
      where: { title: 'Sala Privativa' },
      update: {},
      create: {
        title: 'Sala Privativa',
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
        category: 'LOCAL',
      },
    }),
    prisma.galleryImage.upsert({
      where: { title: 'Área de Snacks' },
      update: {},
      create: {
        title: 'Área de Snacks',
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
        category: 'LOCAL',
      },
    }),
    prisma.galleryImage.upsert({
      where: { title: 'CS2 Tournament' },
      update: {},
      create: {
        title: 'CS2 Tournament',
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
        category: 'EVENT',
      },
    }),
    prisma.galleryImage.upsert({
      where: { title: 'Valorant Championship' },
      update: {},
      create: {
        title: 'Valorant Championship',
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
        category: 'EVENT',
      },
    }),
  ])

  console.log('✅ Seed concluído com sucesso!')
  console.log(`👤 Admin criado: ${admin.email}`)
  console.log(`📋 ${plans.length} planos criados`)
  console.log(`🖥️ ${machines.length} máquinas criadas`)
  console.log(`🎮 ${games.length} jogos criados`)
  console.log(`🏆 ${events.length} eventos criados`)
  console.log(`🎫 ${coupons.length} cupons criados`)
  console.log(`🖼️ ${galleryImages.length} imagens da galeria criadas`)
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


