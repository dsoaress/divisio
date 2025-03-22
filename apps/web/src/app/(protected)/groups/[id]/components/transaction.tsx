import { httpModule } from '@/infra/http/http.module'

type TransactionProps = {
  groupId: string
  groupTransactionId: string
}

export async function Transaction({
  groupId,
  groupTransactionId
}: Readonly<TransactionProps>): Promise<React.JSX.Element> {
  const { getGroupTransactionById } = httpModule()
  const { data: transaction } = await getGroupTransactionById.execute({
    groupId,
    groupTransactionId
  })
  return <pre>{JSON.stringify(transaction, null, 2)}</pre>
}
