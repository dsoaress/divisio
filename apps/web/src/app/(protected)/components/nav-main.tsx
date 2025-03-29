'use client'

import { CreditCard, Home, Receipt, Settings2, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/sidebar'

const data = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: Home
  },
  {
    label: 'Groups',
    path: '/groups',
    icon: Users
  },
  {
    label: 'Expenses',
    path: '/expenses',
    icon: Receipt
  },
  {
    label: 'Settlements',
    path: '/settlements',
    icon: CreditCard
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: Settings2
  }
]

export function NavMain(): React.JSX.Element {
  const pathname = usePathname()

  const isActive = (path: string): boolean => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  return (
    <SidebarGroup>
      <SidebarMenu>
        {data.map(({ icon: Icon, label, path }) => (
          <SidebarMenuItem key={path}>
            <Link href={path}>
              <SidebarMenuButton
                tooltip={label}
                isActive={isActive(path)}
                className="cursor-pointer"
              >
                <Icon className="mr-2 size-4" />
                <span>{label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
