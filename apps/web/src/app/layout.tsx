import '../styles/globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Divisio - Split Bills Easily',
  description:
    'A bill-splitting application where users can create groups and register expenses to be fairly shared among group members.'
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<Props>): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
    </html>
  )
}
