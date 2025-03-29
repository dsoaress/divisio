import { GalleryVerticalEnd } from 'lucide-react'
import Link from 'next/link'

const data = {
  product: {
    label: 'Product',
    items: [
      { label: 'Dashboard', path: '/dashboard' },
      { label: 'Groups', path: '/groups' },
      { label: 'Expenses', path: '/expenses' },
      { label: 'Settlements', path: '/settlements' }
    ]
  },
  support: {
    label: 'Support',
    items: [
      { label: 'Help Center', path: '/help-center' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'FAQ', path: '/faq' },
      { label: 'support@divisio.app', path: 'mailto:support@divisio.app' }
    ]
  },
  legal: {
    label: 'Legal',
    items: [
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Cookies Policy', path: '/cookies' },
      { label: 'Security', path: '/security' }
    ]
  }
}

export function Footer(): React.JSX.Element {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex aspect-square h-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <p className="font-bold text-xl">Divisio</p>
            </div>
            <p className="text-muted-foreground text-sm">
              Simplify bill splitting between friends, family, and colleagues.
            </p>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Divisio. All rights reserved.
            </p>
          </div>
          {Object.values(data).map(({ label, items }) => (
            <div key={label}>
              <p className="mb-4 font-medium">{label}</p>
              <ul className="space-y-2 text-sm">
                {items.map(({ label, path }) => (
                  <li key={label}>
                    <Link href={path} className="text-muted-foreground hover:text-foreground">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
