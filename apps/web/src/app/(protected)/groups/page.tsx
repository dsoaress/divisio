import Link from 'next/link'

import { httpModule } from '@/infra/http/http.module'

export default async function GroupsPage(): Promise<React.JSX.Element> {
  const { getGroups, getUserProfile } = httpModule()
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
