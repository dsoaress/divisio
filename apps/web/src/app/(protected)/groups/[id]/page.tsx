import { notFound } from 'next/navigation'

import { ItemsPerPage } from '@/components/items-per-page'
import { Pagination } from '@/components/pagination'
import { getGroupByIdQuery } from '@/modules/groups/queries/get-group-by-id.query'
import { getGroupTransactionsByGroupIdQuery } from '@/modules/groups/queries/get-group-transactions-by-group-id.query'

import { SearchInput } from './components/search-input'
import { Transaction } from './components/transaction'
import { groupsByIdSearchParamsValidator } from './validators/groups-by-id-search-params.validator'

type GroupPageProps = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | undefined }>
}

export default async function GroupPage({
  params,
  searchParams
}: Readonly<GroupPageProps>): Promise<React.JSX.Element> {
  const { id } = await params
  const {
    s: search,
    p: page,
    pp: perPage,
    o: order,
    d: dir
  } = groupsByIdSearchParamsValidator.parse(await searchParams)
  const getGroupById = getGroupByIdQuery()
  const getGroupTransactionsByGroupId = getGroupTransactionsByGroupIdQuery()

  const { data: group } = await getGroupById.execute({ id })
  const { data: transactions, pages } = await getGroupTransactionsByGroupId.execute({
    groupId: id,
    page,
    dir,
    order,
    'per-page': perPage,
    search
  })

  if (page > pages) notFound()

  return (
    <div>
      <div className="flex items-center space-x-6 p-8 lg:space-x-8">
        <div>
          <ItemsPerPage />
        </div>
        <div>
          <Pagination pages={pages} />
        </div>
        <div>
          <SearchInput />
        </div>
      </div>
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
