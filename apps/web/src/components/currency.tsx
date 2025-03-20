import { cn } from '@/lib/cn'

interface CurrencyProps extends React.ComponentProps<'span'> {
  amount: number
  currency: string
  withColor?: boolean
}

export function Currency({
  amount,
  currency,
  withColor = true,
  className,
  ...props
}: Readonly<CurrencyProps>): React.JSX.Element {
  const isNegative = amount < 0
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(Math.abs(amount / 100))

  if (!withColor) {
    return (
      <span className={cn('', className)} {...props}>
        {formattedAmount}
      </span>
    )
  }

  return (
    <span
      className={cn('', className, {
        'text-red-500': isNegative,
        'text-green-500': !isNegative
      })}
      {...props}
    >
      {isNegative ? 'Owes ' : 'Receives '}
      {formattedAmount}
    </span>
  )
}
