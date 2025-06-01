import * as React from "react"
import {
  Package,
  Percent,
  LayoutDashboard,
} from "lucide-react" // Importing icons

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Admin Dashboard",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/admin-dashboard",
          icon: <LayoutDashboard className="w-4 h-4 mr-2" />,
        },
        {
          title: "Products",
          url: "/admin-dashboard/products",
          icon: <Package className="w-4 h-4 mr-2" />,
        },
        {
          title: "Coupons",
          url: "/admin-dashboard/coupons",
          icon: <Percent className="w-4 h-4 mr-2" />,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors hover:bg-muted hover:text-primary"
                      isActive={item.isActive}
                    >
                      <Link href={item.url} className="flex items-center">
                        {item.icon}
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
