import { Card, CardContent, CardHeader } from '@/components/card'
import { HomeSection } from './home-section'
import { SectionHeader } from './section-header'

const data = [
  {
    title: 'How does Divisio calculate expense splits?',
    content:
      'Divisio offers different splitting methods: equal (same amount for everyone), percentage-based (based on defined percentages), exact (specific amounts for each person), or you can exclude members from specific expenses.'
  },
  {
    title: 'Can I use Divisio for recurring expenses?',
    content:
      'Yes! You can set up recurring expenses (like rent or monthly bills) and Divisio will automatically add them to your group at the specified intervals.'
  },
  {
    title: 'Does Divisio process payments directly?',
    content:
      'No, Divisio only records and calculates debts between group members. Payments are made outside the app, but you can mark when a payment has been completed.'
  },
  {
    title: 'Can I use Divisio with different currencies?',
    content:
      'Yes, Divisio supports multiple currencies. You can set a default currency for each group and also record expenses in different currencies when needed, such as for international trips.'
  },
  {
    title: 'How do I invite friends to a group?',
    content:
      "You can invite friends via email, by sharing an invite link, or through QR codes. They'll receive instructions to join your group, even if they don't have a Divisio account yet."
  },
  {
    title: 'On which platforms is Divisio available?',
    content:
      'Divisio is available as a web app, as well as native apps for iOS and Android. All platforms sync automatically, so you can access your information from any device.'
  }
]

export function FAQ(): React.JSX.Element {
  return (
    <HomeSection>
      <SectionHeader
        badge="FAQ"
        title="Frequently asked questions"
        subtitle="Answers to the most common questions about Divisio."
      />
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {data.map(({ title, content }) => (
          <Card key={title} className="text-left">
            <CardHeader className="font-semibold text-2xl leading-none tracking-tight">
              {title}
            </CardHeader>
            <CardContent className="text-muted-foreground">{content}</CardContent>
          </Card>
        ))}
      </div>
    </HomeSection>
  )
}
