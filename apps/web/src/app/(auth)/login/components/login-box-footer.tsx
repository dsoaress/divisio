import Link from 'next/link'

export function LoginBoxFooter(): React.JSX.Element {
  return (
    <div className="text-balance text-center text-muted-foreground text-xs [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary ">
      By clicking continue, you agree to our <Link href="#">Terms of Service</Link> and{' '}
      <Link href="#">Privacy Policy</Link>.
    </div>
  )
}
