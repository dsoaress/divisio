import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/card'
import { cn } from '@/lib/cn'
import { formatPrice } from '@/lib/format-price'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { HomeSection } from './home-section'
import { SectionHeader } from './section-header'

const data = [
  {
    popular: false,
    title: 'Free',
    description: 'For basic personal use and small groups.',
    price: 0,
    features: [
      'Up to 3 active groups',
      'Up to 5 members per group',
      'Equal expense splitting',
      'Unlimited history'
    ],
    cta: {
      label: 'Get started for free',
      href: '/register'
    }
  },
  {
    popular: true,
    title: 'Premium',
    description: 'For large groups and families.',
    price: 990,
    features: [
      'Unlimited groups',
      'Up to 20 members per group',
      'Custom splitting',
      'Unlimited history',
      'Report exports'
    ],
    cta: {
      label: 'Subscribe now',
      href: '/register?plan=premium'
    }
  }
]

export function Plans(): React.JSX.Element {
  return (
    <HomeSection className="bg-muted/50">
      <SectionHeader
        badge="Plans"
        title="Choose the ideal plan for you"
        subtitle="We have options for all profiles, from personal to business use."
      />
      <div className="mx-auto mt-12 grid w-full max-w-[800px] grid-cols-1 gap-6 md:grid-cols-2">
        {data.map(({ popular, title, description, price, features, cta }) => (
          <Card
            key={title}
            className={cn('justify-between text-left', { 'border-primary shadow-2xl': popular })}
          >
            <CardHeader className="flex flex-col space-y-1.5">
              <div className="flex w-full items-center justify-between font-semibold text-2xl leading-none tracking-tight">
                {title}
                {popular && <Badge>Popular</Badge>}
              </div>
              <div className="text-muted-foreground text-sm">{description}</div>
              <div className="flex items-baseline font-bold text-5xl">
                {formatPrice(price, 'USD')}
                <span className="ml-1 font-medium text-muted-foreground text-sm">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {features.map(feature => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 size-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={cta.href} className="w-full">
                <Button variant={popular ? 'default' : 'outline'} className="w-full" size="lg">
                  {cta.label}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </HomeSection>
  )
}
