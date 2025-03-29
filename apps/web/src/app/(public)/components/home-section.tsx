import { cn } from '@/lib/cn'

export function HomeSection({
  className,
  children,
  ...props
}: Readonly<React.ComponentProps<'section'>>): React.JSX.Element {
  return (
    <section className={cn('w-full bg-background py-12 md:py-24 lg:py-32', className)} {...props}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {children}
        </div>
      </div>
    </section>
  )
}
