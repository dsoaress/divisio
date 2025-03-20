type Props = {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: Readonly<Props>): React.JSX.Element {
  return <main className="pb-8">{children}</main>
}
