import { Eye, Trash2 } from 'lucide-react'
import { notFound } from 'next/navigation'

import { Button } from '@/components/button'
import { Currency } from '@/components/currency'
import { ItemsPerPage } from '@/components/items-per-page'
import { Pagination } from '@/components/pagination'
import { SearchInput } from '@/components/search-input'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/table'
import { getGroupTransactionsByGroupIdQuery } from '@/modules/groups/queries/get-group-transactions-by-group-id.query'

import { groupsByIdSearchParamsValidator } from '../validators/groups-by-id-search-params.validator'

type TransactionsTableProps = {
  groupId: string
  searchParams: Promise<{ [key: string]: string | undefined }>
}

export async function TransactionsTable({
  groupId,
  searchParams
}: Readonly<TransactionsTableProps>): Promise<React.JSX.Element> {
  const {
    s: search,
    p: page,
    pp: perPage,
    o: order,
    d: dir
  } = groupsByIdSearchParamsValidator.parse(await searchParams)
  const getGroupTransactionsByGroupId = getGroupTransactionsByGroupIdQuery()
  const { data: transactions, pages } = await getGroupTransactionsByGroupId.execute({
    groupId,
    page,
    dir,
    order,
    'per-page': perPage,
    search
  })

  if (page > pages) notFound()

  return (
    <div className="w-full">
      <div className="mb-8 ml-auto w-64">
        <SearchInput />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40%]">Transaction Name</TableHead>
            <TableHead className="w-[10%]">Amount</TableHead>
            <TableHead className="w-[20%]">Your Contribution</TableHead>
            <TableHead className="w-[20%]">Payer</TableHead>
            <TableHead className="w-[15%]">Date</TableHead>
            <TableHead className="w-[5%]" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map(transaction => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.name}</TableCell>
              <TableCell>
                <Currency
                  amount={transaction.amount}
                  currency={transaction.currency}
                  withColor={false}
                />
              </TableCell>
              <TableCell>
                <Currency amount={transaction.contribution} currency={transaction.currency} />
              </TableCell>
              <TableCell>{`${transaction.payer.firstName} ${transaction.payer.lastName}`}</TableCell>
              <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
              <TableCell className="w-22">
                <div className="flex justify-end space-x-2">
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Go to last page</span>
                    <Eye />
                  </Button>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Go to last page</span>
                    <Trash2 className="text-destructive" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} />
            <TableCell colSpan={3}>
              <div className="flex items-center space-x-4 md:justify-end">
                <span className="hidden md:inline">
                  <ItemsPerPage />
                </span>
                <Pagination pages={pages} />
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
