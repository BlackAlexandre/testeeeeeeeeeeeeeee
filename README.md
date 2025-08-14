# Cyber_Stop - Lan House Gamer 100% Automatizada

Uma lan house gamer futurista com sistema completo de gerenciamento, eventos, reservas e painel administrativo.

## 🚀 Características

- **Design Futurista**: Interface neon com cores azul/ciano e roxo sobre fundo escuro
- **100% Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Sistema de Autenticação**: Login/registro com criptografia de senha
- **Painel Administrativo**: Gerenciamento completo de usuários, eventos e reservas
- **Área do Cliente**: Dashboard personalizado com reservas e histórico
- **Eventos e Campeonatos**: Sistema de inscrição e gerenciamento de eventos
- **Galeria de Imagens**: Lightbox com modal para visualização
- **Sistema de Planos**: Planos Silver, Gold e Diamond com benefícios exclusivos
- **Banco de Dados**: SQLite local com Prisma ORM

## 🛠️ Tecnologias

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS com animações personalizadas
- **Animações**: Framer Motion
- **Formulários**: React Hook Form + Zod
- **Banco de Dados**: Prisma + SQLite
- **Autenticação**: Sistema customizado com bcrypt
- **Notificações**: React Hot Toast
- **Ícones**: Lucide React

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd cybbbbber
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_SECRET="sua-chave-secreta-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Configure o banco de dados**
```bash
# Gerar cliente Prisma
npm run db:generate

# Criar banco e tabelas
npm run db:push

# Popular banco com dados iniciais
npm run seed
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## 👤 Usuários Padrão

### Administrador
- **Email**: admin@cyberstop.com
- **Senha**: Admin@123

### Cliente (criar via registro)
- Acesse `/auth/register` para criar uma nova conta

## 📋 Funcionalidades

### Páginas Públicas
- **Home**: Hero animado, features, galeria e próximo evento
- **Sobre**: Informações da empresa e diferenciais
- **Planos**: Planos Silver, Gold e Diamond
- **Galeria**: Imagens do local com lightbox
- **Jogos**: Lista de jogos disponíveis
- **Eventos**: Campeonatos e inscrições
- **Ranking**: Top 10 clientes
- **Contato**: Formulário e informações

### Área do Cliente (`/cliente`)
- Dashboard com estatísticas
- Gerenciamento de reservas
- Eventos inscritos
- Edição de perfil

### Painel Administrativo (`/admin`)
- Dashboard com métricas
- CRUD de usuários
- Gerenciamento de máquinas
- Criação de eventos
- Upload de imagens
- Gestão de cupons

## 🎨 Design System

### Cores
- **Neon Blue**: `#00d4ff`
- **Neon Cyan**: `#00ffff`
- **Neon Purple**: `#8b5cf6`
- **Neon Pink**: `#ec4899`
- **Dark Background**: `#0a0a0a`
- **Dark Card**: `#1a1a1a`

### Fontes
- **Orbitron**: Títulos e elementos principais
- **Rajdhani**: Texto e conteúdo

### Animações
- Partículas no hero
- Scanline nos cards
- Glow nos botões
- Transições suaves

## 📊 Estrutura do Banco

### Modelos Principais
- **User**: Usuários (CLIENT/ADMIN)
- **Machine**: Máquinas (PC/PS5/XBOX)
- **Game**: Jogos disponíveis
- **Event**: Eventos e campeonatos
- **Reservation**: Reservas de máquinas
- **Plan**: Planos de assinatura
- **Coupon**: Cupons de desconto
- **GalleryImage**: Imagens da galeria

## 🚀 Deploy

### Vercel (Recomendado)

1. **Conecte seu repositório ao Vercel**
2. **Configure as variáveis de ambiente**
3. **Deploy automático**

### Outras Plataformas

Para outras plataformas, certifique-se de:
- Configurar as variáveis de ambiente
- Usar PostgreSQL em produção (altere DATABASE_URL)
- Configurar domínios permitidos no NextAuth

## 📝 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Verificar código
npm run format       # Formatar código
npm run seed         # Popular banco de dados
npm run db:push      # Sincronizar banco
npm run db:generate  # Gerar cliente Prisma
```

## 🔧 Configurações Avançadas

### Banco de Dados em Produção

Para usar PostgreSQL em produção:

1. **Altere o provider no `prisma/schema.prisma`**:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

2. **Configure a URL do banco**:
```env
DATABASE_URL="postgresql://user:password@host:port/database"
```

### Upload de Imagens

Para usar Cloudinary:

1. **Configure as variáveis**:
```env
CLOUDINARY_CLOUD_NAME="seu-cloud-name"
CLOUDINARY_API_KEY="sua-api-key"
CLOUDINARY_API_SECRET="seu-api-secret"
```

2. **Implemente o upload no componente de galeria**

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique se todas as dependências estão instaladas
2. Confirme se o banco de dados foi configurado corretamente
3. Verifique as variáveis de ambiente
4. Abra uma issue no repositório

## 🎯 Roadmap

- [ ] Integração com pagamentos (Pix, Cartão)
- [ ] Sistema de notificações push
- [ ] App mobile (React Native)
- [ ] Integração com Discord
- [ ] Sistema de achievements
- [ ] Streaming integrado
- [ ] IA para recomendações

---

**Cyber_Stop** - A experiência gaming mais avançada do Brasil! 🎮✨


