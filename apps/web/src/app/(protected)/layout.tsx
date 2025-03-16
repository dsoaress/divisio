type Props = {
  children: React.ReactNode
}

export default async function RootLayout({
  children
}: Readonly<Props>): Promise<React.JSX.Element> {
  return <main>{children}</main>
}
