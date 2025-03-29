import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar'
import { Card, CardContent, CardFooter } from '@/components/card'
import { getUserInitials } from '@/lib/get-user-initials'
import { HomeSection } from './home-section'
import { SectionHeader } from './section-header'

const data = [
  {
    firstName: 'Mariana',
    lastName: 'Silva',
    avatar: null,
    profession: 'Software Engineer',
    review:
      'Divisio transformed how we split bills in our shared house. We no longer have arguments about who owes what. I recommend it to everyone!'
  },
  {
    firstName: 'Lucas',
    lastName: 'Oliveira',
    avatar: null,
    profession: 'Designer',
    review:
      'I organized a trip with 8 friends and Divisio was essential to keep the accounts in order. The interface is intuitive and the features are excellent.'
  },
  {
    firstName: 'Isabella',
    lastName: 'Pereira',
    avatar: null,
    profession: 'Event Organizer',
    review:
      'As an event organizer, Divisio helps me manage shared expenses with vendors and clients. Simply indispensable!'
  }
]

export function Testimonials(): React.JSX.Element {
  return (
    <HomeSection>
      <SectionHeader
        badge="Testimonials"
        title="What our users say"
        subtitle="Thousands of people have already simplified expense sharing with Divisio."
      />
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {data.map(({ firstName, lastName, avatar, profession, review }) => (
          <Card key={firstName} className="justify-between text-left">
            <CardContent>"{review}"</CardContent>
            <CardFooter>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={avatar} alt={`${firstName} ${lastName}`} />
                  <AvatarFallback className="text-xs">
                    {getUserInitials(firstName, lastName)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">
                    {firstName} {lastName}
                  </p>
                  <p className="text-muted-foreground text-xs">{profession}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </HomeSection>
  )
}
