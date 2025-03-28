import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar'

type GroupMemberAvatarProps = {
  fullName: string
  avatar?: string | null
  avatarFallback: string
}

export function GroupMemberAvatar({
  avatar,
  avatarFallback,
  fullName
}: Readonly<GroupMemberAvatarProps>): React.JSX.Element {
  return (
    <Avatar className="-ml-2 size-8 border-2 border-background">
      <AvatarImage src={avatar} alt={fullName} />
      <AvatarFallback className="text-[10px]">{avatarFallback}</AvatarFallback>
    </Avatar>
  )
}
