# 🚀 Instalação da Cyber_Stop

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn instalado
- Git instalado

## Passos para Instalação

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Variáveis de Ambiente
```bash
# Copie o arquivo de exemplo
cp env.example .env

# Edite o arquivo .env com suas configurações
```

### 3. Configurar Banco de Dados
```bash
# Gerar cliente Prisma
npm run db:generate

# Criar banco e tabelas
npm run db:push

# Popular banco com dados iniciais
npm run seed
```

### 4. Iniciar o Projeto
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## Usuários Padrão

### Administrador
- **Email**: admin@cyberstop.com
- **Senha**: Admin@123

### Cliente
- Acesse `/auth/register` para criar uma nova conta

## Estrutura do Projeto

```
cybbbbber/
├── app/                    # Páginas Next.js 14 (App Router)
│   ├── api/               # APIs do backend
│   ├── auth/              # Páginas de autenticação
│   ├── sobre/             # Página sobre
│   ├── planos/            # Página de planos
│   └── ...
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   ├── sections/         # Seções das páginas
│   ├── ui/               # Componentes de UI
│   └── providers/        # Providers (Auth, etc.)
├── prisma/               # Configuração do banco
│   ├── schema.prisma     # Schema do banco
│   └── seed.ts           # Dados iniciais
├── public/               # Arquivos estáticos
└── ...
```

## Funcionalidades Implementadas

### ✅ Páginas Públicas
- [x] Home com hero animado
- [x] Sobre com informações da empresa
- [x] Planos com 3 opções (Silver, Gold, Diamond)
- [x] Sistema de autenticação (login/registro)
- [x] Navbar responsiva com glassmorphism
- [x] Design futurista com animações

### ✅ Backend
- [x] APIs de autenticação
- [x] Schema do banco com Prisma
- [x] Seed com dados iniciais
- [x] Validação com Zod
- [x] Criptografia de senha com bcrypt

### ✅ Design System
- [x] Cores neon (azul, ciano, roxo)
- [x] Fontes Orbitron e Rajdhani
- [x] Animações com Framer Motion
- [x] Componentes reutilizáveis
- [x] Layout responsivo

## Próximos Passos

Para completar o sistema, você pode implementar:

1. **Páginas restantes**:
   - `/galeria` - Galeria de imagens
   - `/jogos` - Lista de jogos
   - `/eventos` - Eventos e campeonatos
   - `/ranking` - Ranking de clientes
   - `/contato` - Formulário de contato

2. **Área do Cliente** (`/cliente`):
   - Dashboard
   - Gerenciamento de reservas
   - Eventos inscritos
   - Edição de perfil

3. **Painel Administrativo** (`/admin`):
   - Dashboard com métricas
   - CRUD de usuários
   - Gerenciamento de máquinas
   - Criação de eventos
   - Upload de imagens

## Tecnologias Utilizadas

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animações**: Framer Motion
- **Formulários**: React Hook Form + Zod
- **Banco**: Prisma + SQLite
- **Autenticação**: Sistema customizado com bcrypt
- **Notificações**: React Hot Toast

## Suporte

Se encontrar algum problema:

1. Verifique se o Node.js está instalado
2. Confirme se todas as dependências foram instaladas
3. Verifique as variáveis de ambiente
4. Certifique-se de que o banco foi configurado corretamente

---

**Cyber_Stop** - A experiência gaming mais avançada do Brasil! 🎮✨


