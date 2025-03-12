"use client";

import * as React from "react";
import {
  Command,
  User,
  PieChart,
  Settings,
  Building2,
  HandHelping,
  Inbox,
  LogOut,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Company",
      url: "/",
      icon: Building2,
      isActive: true,
    },
    {
      title: "Service Providers",
      url: "service-providers",
      icon: HandHelping,
    },
    {
      title: "Profile",
      url: "/tabs",
      icon: User,
    },
    {
      title: "Messages",
      url: "/messages",
      icon: Inbox,
    },
  ],
  projects: [
    {
      name: "Settings",
      url: "/settings",
      icon: Settings,
    },
    {
      name: "Account",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Signout",
      url: "/login",
      icon: LogOut,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
