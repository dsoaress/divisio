import { cn } from '@/lib/cn'

export function Skeleton({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>): React.JSX.Element {
  return <div className={cn('animate-pulse rounded-md bg-primary/10', className)} {...props} />
}
