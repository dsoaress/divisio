import Link from 'next/link'

import { Clock } from 'lucide-react'
import type { GetGroupsOutputDTO } from 'shared'

import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/card'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { formatDate } from '@/lib/format-date'
import { formatPrice } from '@/lib/format-price'
import { GroupMembers } from './group-members'

export function GroupCard({
  id,
  name,
  description,
  currency,
  lastUpdateAt,
  balance,
  members
}: Readonly<GetGroupsOutputDTO[number]>): React.JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <Tooltip>
          <TooltipTrigger asChild>
            <CardDescription className="overflow-hidden text-ellipsis text-nowrap">
              {description}
            </CardDescription>
          </TooltipTrigger>
          <TooltipContent>{description}</TooltipContent>
        </Tooltip>
      </CardHeader>

      <CardContent>
        <div className="mb-4 flex items-center justify-between">
          <GroupMembers members={members} />
          <Badge variant="secondary">{formatPrice(balance, currency)}</Badge>
        </div>

        <span className="flex items-center text-muted-foreground text-xs">
          <Clock className="mr-1 size-3" />
          Last activity: {formatDate(lastUpdateAt)}
        </span>
      </CardContent>

      <CardFooter>
        <Link href={`/groups/${id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
