import { Badge } from '@/components/badge'

type SectionHeaderProps = {
  title: string
  subtitle: string
  badge?: string
}

export function SectionHeader({
  badge,
  subtitle,
  title
}: Readonly<SectionHeaderProps>): React.JSX.Element {
  return (
    <div className="space-y-2">
      {badge && <Badge variant="secondary">{badge}</Badge>}
      <h2 className="font-bold text-3xl tracking-tighter md:text-4xl">{title}</h2>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        {subtitle}
      </p>
    </div>
  )
}
