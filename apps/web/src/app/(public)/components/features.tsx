import { CreditCard, Receipt, Shield, Sparkles, Split, Users } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card'

import { HomeSection } from './home-section'
import { SectionHeader } from './section-header'

const data = [
  {
    icon: Users,
    title: 'Custom Groups',
    description: 'Create groups for different occasions: trips, shared housing, events, and more.'
  },
  {
    icon: Receipt,
    title: 'Expense Tracking',
    description: 'Add expenses quickly and split them equally or customized among members.'
  },
  {
    icon: CreditCard,
    title: 'Simplified Settlements',
    description: 'See who owes whom and how much, with smart suggestions to minimize transactions.'
  },
  {
    icon: Split,
    title: 'Flexible Splitting',
    description: 'Split expenses equally, by percentage, specific amounts, or exclude members.'
  },
  {
    icon: Sparkles,
    title: 'Intuitive Interface',
    description: 'Modern, easy-to-use design with quick access to all features.'
  },
  {
    icon: Shield,
    title: 'Total Security',
    description: 'Your financial data is protected with the most advanced security technologies.'
  }
]

export function Features(): React.JSX.Element {
  return (
    <HomeSection>
      <SectionHeader
        badge="Features"
        title="Everything you need to split expenses"
        subtitle="Divisio offers all the tools you need to manage shared expenses with ease and transparency."
      />
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="gap-2">
            <CardHeader className="pb-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="size-6" />
              </div>
              <CardTitle className="text-left font-semibold text-2xl leading-none tracking-tight">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-left text-muted-foreground text-sm">
                {description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </HomeSection>
  )
}
