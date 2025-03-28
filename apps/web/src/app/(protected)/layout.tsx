import { Separator } from '@/components/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/sidebar'

import { AppSidebar } from './components/app-sidebar'

type ProtectedLayoutProps = {
  children: React.ReactNode
}

export default function ProtectedLayout({
  children
}: Readonly<ProtectedLayoutProps>): React.JSX.Element {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
