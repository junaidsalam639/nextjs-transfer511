"use client"

import * as React from "react"
import {
  Package,
  Percent,
  LayoutDashboard,
  BookIcon,
} from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { SearchForm } from "@/components/web/search-form"
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

const data = {
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
          title: "Cars",
          url: "/admin-dashboard/products",
          icon: <Package className="w-4 h-4 mr-2" />,
        },
        {
          title: "Coupons",
          url: "/admin-dashboard/coupons",
          icon: <Percent className="w-4 h-4 mr-2" />,
        },
        {
          title: "Booking",
          url: "/admin-dashboard/booking",
          icon: <BookIcon className="w-4 h-4 mr-2" />,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }) {
  const pathname = usePathname()

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.url
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors min-w-8 duration-200 ease-linear
                          ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted hover:text-primary"}`}
                      >
                        <Link href={item.url} className="flex items-center">
                          {item.icon}
                          {item.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
