'use client'

import { BadgeCheck, ChevronsUpDown, GalleryVerticalEnd, LogOut, Sparkles } from 'lucide-react'
import Link from 'next/link'
import type { GetUserProfileOutputDTO } from 'shared'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/sidebar'
import { getUserInitials } from '@/lib/get-user-initials'

type NavUserProps = {
  user: GetUserProfileOutputDTO
}

export function NavUser({ user }: Readonly<NavUserProps>): React.JSX.Element {
  const { isMobile } = useSidebar()
  const fullName = `${user.firstName} ${user.lastName}`

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={fullName} />
                <AvatarFallback className="rounded-lg">
                  {getUserInitials(user.firstName, user.lastName)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{fullName}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={16}
          >
            <Link href="/upgrade">
              <DropdownMenuItem>
                <Sparkles className="size-4" />
                Upgrade to Pro
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link href="/user/account">
              <DropdownMenuItem>
                <BadgeCheck className="size-4" />
                Account
              </DropdownMenuItem>
            </Link>
            <Link href="/user/billing">
              <DropdownMenuItem>
                <GalleryVerticalEnd className="size-4" />
                Billing
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link href="/api/sessions/logout">
              <DropdownMenuItem variant="destructive">
                <LogOut className="size-4" />
                Log out
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
