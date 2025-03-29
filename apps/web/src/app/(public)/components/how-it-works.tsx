import { HomeSection } from './home-section'
import { SectionHeader } from './section-header'

const data = [
  {
    title: 'Create a group',
    description: 'Add friends, family, or colleagues to your shared expense group.'
  },
  {
    title: 'Record expenses',
    description: 'Add expenses as they occur, specifying who paid and how to split.'
  },
  {
    title: 'Settle up',
    description: "See who owes whom and how much, and record payments when they're made."
  }
]

export function HowItWorks(): React.JSX.Element {
  return (
    <HomeSection className="bg-muted/50">
      <SectionHeader
        badge="How it works"
        title="Simple in 3 steps"
        subtitle="Start using Divisio in minutes and simplify expense sharing with your friends."
      />
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {data.map(({ title, description }, index) => (
          <div key={title} className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-bold text-2xl text-primary-foreground">
              {index + 1}
            </div>
            <h3 className="font-bold text-xl">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </HomeSection>
  )
}
