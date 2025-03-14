import { getGroupsQuery } from '@/modules/groups/queries/get-groups.query'
import Link from 'next/link'

export default async function GroupsPage(): Promise<React.JSX.Element> {
  const getGroups = getGroupsQuery()
  const { data } = await getGroups.execute()
  if (!data) return <div>Loading...</div>
  return (
    <div>
      <h1>Groups</h1>
      {data.map(group => (
        <div key={group.id}>
          <h2>
            <Link href={`/groups/${group.id}`}>{group.name}</Link>
          </h2>

          <p>{group.balance}</p>
          <p>{group.currency}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}
