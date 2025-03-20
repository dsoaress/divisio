import { cn } from '@/lib/cn'

export function Table({ className, ...props }: React.ComponentProps<'table'>): React.JSX.Element {
  return (
    <div className="rounded-md border">
      <div className="relative w-full overflow-auto">
        <table className={cn('w-full caption-bottom text-sm', className)} {...props} />
      </div>
    </div>
  )
}

export function TableHeader({
  className,
  ...props
}: React.ComponentProps<'thead'>): React.JSX.Element {
  return <thead className={cn('[&_tr]:border-b', className)} {...props} />
}

export function TableBody({
  className,
  ...props
}: React.ComponentProps<'tbody'>): React.JSX.Element {
  return <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />
}

export function TableFooter({
  className,
  ...props
}: React.ComponentProps<'tfoot'>): React.JSX.Element {
  return (
    <tfoot
      className={cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  )
}

export function TableRow({ className, ...props }: React.ComponentProps<'tr'>): React.JSX.Element {
  return (
    <tr
      className={cn(
        'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        className
      )}
      {...props}
    />
  )
}

export function TableHead({ className, ...props }: React.ComponentProps<'th'>): React.JSX.Element {
  return (
    <th
      className={cn(
        'h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  )
}

export function TableCell({ className, ...props }: React.ComponentProps<'td'>): React.JSX.Element {
  return (
    <td
      className={cn(
        'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  )
}

export function TableCaption({
  className,
  ...props
}: React.ComponentProps<'caption'>): React.JSX.Element {
  return <caption className={cn('mt-4 text-muted-foreground text-sm', className)} {...props} />
}
