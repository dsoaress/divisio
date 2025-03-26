'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar'
import { Separator } from '@/components/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from '@/components/sidebar'
import { CreditCard, Home, LogOut, Receipt, Settings, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NextTopLoader from 'nextjs-toploader'

type Props = {
  children: React.ReactNode
}

const user = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: '/placeholder.svg?height=40&width=40'
}

export default function ProtectedLayout({ children }: Readonly<Props>): React.JSX.Element {
  const pathname = usePathname()

  const isActive = (path: string): boolean => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  return (
    <main>
      <NextTopLoader />
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <div className="flex items-center gap-2">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <CreditCard className="size-4" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                      <span className="font-semibold">Divisio</span>
                      <span className="text-muted-foreground text-xs">Split bills easily</span>
                    </div>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/dashboard')}>
                  <Link href="/dashboard">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/groups')}>
                  <Link href="/groups">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Groups</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/expenses')}>
                  <Link href="/expenses">
                    <Receipt className="mr-2 h-4 w-4" />
                    <span>Expenses</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/settlements')}>
                  <Link href="/settlements">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Settlements</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/settings')}>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5 leading-none">
                      <span className="font-medium">{user.name}</span>
                      <span className="text-muted-foreground text-xs">{user.email}</span>
                    </div>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/logout" className="text-muted-foreground hover:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex min-h-screen flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-16">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-6" />
          </header>
          <main className="container mx-auto px-4 py-6 md:px-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </main>
  )
}
