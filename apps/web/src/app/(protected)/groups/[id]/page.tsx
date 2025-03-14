import { CONSTANTS } from '@/core/constantes'
import { getGroupByIdQuery } from '@/modules/groups/queries/get-group-by-id.query'
import { getGroupTransactionsByGroupIdQuery } from '@/modules/groups/queries/get-group-transactions-by-group-id.query'

import { ItensPerPage } from './components/items-per-page'
import { SearchInput } from './components/search-input'
import { Transaction } from './components/transaction'

type GroupPageProps = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string }>
}

export default async function GroupPage({
  params,
  searchParams
}: Readonly<GroupPageProps>): Promise<React.JSX.Element> {
  const { id } = await params
  const { s: search, p: page, pp: perPage } = await searchParams
  const getGroupById = getGroupByIdQuery()
  const getGroupTransactionsByGroupId = getGroupTransactionsByGroupIdQuery()

  const { data: group } = await getGroupById.execute({ id })
  const { data: transactions, ...props } = await getGroupTransactionsByGroupId.execute({
    groupId: id,
    page: Number(page ?? CONSTANTS.DEFAULT_PAGE),
    dir: 'asc',
    order: 'date',
    'per-page': Number(perPage ?? CONSTANTS.DEFAULT_PER_PAGE),
    search
  })
  return (
    <div>
      <SearchInput />
      <ItensPerPage />
      <pre>{JSON.stringify({ ...props }, null, 2)}</pre>
      <pre>{JSON.stringify(group, null, 2)}</pre>
      {transactions.map(transaction => (
        <div key={transaction.id}>
          {transaction.name} - {transaction.amount}
          <Transaction groupId={id} groupTransactionId={transaction.id} />
        </div>
      ))}
    </div>
  )
}
