import { GalleryVerticalEnd } from 'lucide-react'
import Link from 'next/link'

export function LoginBoxHeader(): React.JSX.Element {
  return (
    <Link href="/" className="flex items-center gap-2 self-center font-medium">
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <GalleryVerticalEnd className="size-4" />
      </div>
      Divisio.
    </Link>
  )
}
