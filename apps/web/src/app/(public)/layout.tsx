import { Footer } from './components/footer'

type Props = {
  children: React.ReactNode
}

export default function PublicLayout({ children }: Readonly<Props>): React.JSX.Element {
  return (
    <main>
      {children}
      <Footer />
    </main>
  )
}
