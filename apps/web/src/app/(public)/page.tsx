import { CallToRegister } from './components/call-to-register'
import { FAQ } from './components/faq'
import { Features } from './components/features'
import { HomeHero } from './components/home-hero'
import { HowItWorks } from './components/how-it-works'
import { Plans } from './components/plans'
import { Testimonials } from './components/testimonials'

export default function Home(): React.JSX.Element {
  return (
    <>
      <HomeHero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Plans />
      <FAQ />
      <CallToRegister />
    </>
  )
}
