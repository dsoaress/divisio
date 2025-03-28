import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { getUserInitials } from '@/lib/get-user-initials'

import { GroupMemberAvatar } from './group-member-avatar'

type GroupMembersProps = {
  members: {
    memberId: string
    firstName: string
    lastName: string
    avatar: string | null
  }[]
}

const MAX_MEMBERS = 3

export function GroupMembers({ members }: Readonly<GroupMembersProps>): React.JSX.Element {
  return (
    <div className="ml-2 flex">
      {members.map((member, index) => {
        const fullName = `${member.firstName} ${member.lastName}`
        if (index > MAX_MEMBERS) return null
        if (index === MAX_MEMBERS) {
          return (
            <Tooltip key={member.memberId}>
              <TooltipTrigger asChild>
                <GroupMemberAvatar
                  fullName={fullName}
                  avatarFallback={`+${members.length - MAX_MEMBERS}`}
                />
              </TooltipTrigger>
              <TooltipContent>
                {members.slice(MAX_MEMBERS).map(member => {
                  return (
                    <div key={member.memberId} className="flex items-center justify-center gap-1.5">
                      {fullName}
                    </div>
                  )
                })}
              </TooltipContent>
            </Tooltip>
          )
        }
        return (
          <Tooltip key={member.memberId}>
            <TooltipTrigger asChild>
              <GroupMemberAvatar
                avatar={member.avatar}
                fullName={fullName}
                avatarFallback={getUserInitials(member.firstName, member.lastName)}
              />
            </TooltipTrigger>
            <TooltipContent>{fullName}</TooltipContent>
          </Tooltip>
        )
      })}
    </div>
  )
}
