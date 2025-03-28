import { Plus } from 'lucide-react'

import { Button } from '@/components/button'
import { TooltipProvider } from '@/components/tooltip'
import { httpModule } from '@/infra/http/http.module'

import { GroupCard } from './components/group-card'

export default async function GroupsPage(): Promise<React.JSX.Element> {
  const { getGroups } = httpModule()
  const { data } = await getGroups.execute()

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-2">
        <div>
          <h1 className="font-bold text-2xl tracking-tight md:text-3xl">Your Groups</h1>
          <h2 className="mt-1 text-muted-foreground text-sm md:text-base">
            Manage your shared expenses with friends and family
          </h2>
        </div>
        <Button size="lg">
          <Plus className="size-4" />
          New Group
        </Button>
      </div>
      <TooltipProvider delayDuration={0}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map(group => (
            <GroupCard key={group.id} {...group} />
          ))}
        </div>
      </TooltipProvider>
    </div>
  )
}
