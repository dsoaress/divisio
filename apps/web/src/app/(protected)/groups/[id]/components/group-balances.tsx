import { Currency } from '@/components/currency'
import type { GetGroupByIdOutputDTO } from 'shared'

type GroupBalancesProps = {
  currency: string
  balance: GetGroupByIdOutputDTO['balance']
}

export function GroupBalances({
  balance,
  currency
}: Readonly<GroupBalancesProps>): React.JSX.Element {
  return (
    <div>
      <h3>Group Balances</h3>
      <div>
        {balance.map(({ amount, firstName, lastName, memberId }) => (
          <div key={memberId}>
            {firstName} {lastName} - <Currency amount={amount} currency={currency} />
          </div>
        ))}
      </div>
    </div>
  )
}
