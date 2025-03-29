import { Button } from '@/components/button'
import { ArrowRight, GalleryVerticalEnd } from 'lucide-react'
import Link from 'next/link'

export function HomeHero(): React.JSX.Element {
  return (
    <header className="w-full bg-gradient-to-b from-background to-muted py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <div className="flex aspect-square h-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <GalleryVerticalEnd className="size-6" />
                </div>
                <p className="font-bold text-2xl">Divisio</p>
              </div>
              <h1 className="font-bold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
                Split bills with friends without complications
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Simplify expense sharing in groups, track balances, and organize payments with ease.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg">
                Get started for free
                <ArrowRight />
              </Button>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Login
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center" />
        </div>
      </div>
    </header>
  )
}
