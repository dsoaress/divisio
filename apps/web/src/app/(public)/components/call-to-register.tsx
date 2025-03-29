import { Button } from '@/components/button'
import { ArrowRight } from 'lucide-react'
import { HomeSection } from './home-section'
import { SectionHeader } from './section-header'

export function CallToRegister(): React.JSX.Element {
  return (
    <HomeSection className="bg-primary text-primary-foreground">
      <SectionHeader
        title="Ready to simplify your shared finances?"
        subtitle="Join thousands of users who are already saving time and avoiding conflicts with Divisio."
      />
      <Button
        size="lg"
        className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80"
      >
        Create free account
        <ArrowRight />
      </Button>
    </HomeSection>
  )
}
