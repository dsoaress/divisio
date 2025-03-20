import { getGroupByIdQuery } from '@/modules/groups/queries/get-group-by-id.query'

import { GroupBalances } from './components/group-balances'
import { TransactionsTable } from './components/transactions-table'

type GroupPageProps = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | undefined }>
}

export default async function GroupPage({
  params,
  searchParams
}: Readonly<GroupPageProps>): Promise<React.JSX.Element> {
  const { id } = await params
  const getGroupById = getGroupByIdQuery()
  const { data: group } = await getGroupById.execute({ id })

  return (
    <div className="container mx-auto">
      <h2>{group.name}</h2>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <TransactionsTable groupId={id} searchParams={searchParams} />
        <GroupBalances balance={group.balance} currency={group.currency} />
      </div>
    </div>
  )
}
