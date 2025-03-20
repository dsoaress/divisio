import Link from 'next/link'

import { getGroupsQuery } from '@/modules/groups/queries/get-groups.query'
import { getUserProfileQuery } from '@/modules/users/queries/get-profile.query'

export default async function GroupsPage(): Promise<React.JSX.Element> {
  const getGroups = getGroupsQuery()
  const getUserProfile = getUserProfileQuery()
  const { data } = await getGroups.execute()
  const { data: user } = await getUserProfile.execute()

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
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
