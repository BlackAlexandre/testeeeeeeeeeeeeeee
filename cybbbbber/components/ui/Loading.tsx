export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-neon-blue/30 border-t-neon-blue rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-neon-cyan rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-orbitron font-semibold text-neon-blue animate-pulse">
            Cyber_Stop
          </h3>
          <p className="text-gray-400 font-rajdhani">
            Carregando...
          </p>
        </div>
      </div>
    </div>
  )
}


