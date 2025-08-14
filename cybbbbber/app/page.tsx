import { Suspense } from 'react'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Gallery from '@/components/sections/Gallery'
import NextEvent from '@/components/sections/NextEvent'
import Loading from '@/components/ui/Loading'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <Hero />
        <Features />
        <Gallery />
        <NextEvent />
      </Suspense>
    </main>
  )
}


