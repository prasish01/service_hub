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
      url: "#",
      icon: Building2,
      isActive: true,
      items: [
        {
          title: "About",
          url: "#",
        },
        {
          title: "Media Library",
          url: "#",
        },
        {
          title: "Services",
          url: "#",
        },
        {
          title: "Schedule",
          url: "#",
        },
      ],
    },
    {
      title: "Service Providers",
      url: "#",
      icon: HandHelping,
      items: [
        {
          title: "Providers List",
          url: "#",
        },
        {
          title: "Add Provider",
          url: "#",
        },
      ],
    },
    {
      title: "Profile",
      url: "#",
      icon: User,
      items: [
        {
          title: "About",
          url: "#",
        },
        {
          title: "Media Library",
          url: "#",
        },
        {
          title: "Services",
          url: "#",
        },
        {
          title: "Schedule",
          url: "#",
        },
        {
          title: "Contact",
          url: "#",
        },
        {
          title: "Visibility",
          url: "#",
        },
      ],
    },
    {
      title: "Messages",
      url: "#",
      icon: Inbox,
      items: [
        {
          title: "Inbox",
          url: "#",
        },
        {
          title: "Sent",
          url: "#",
        },
        {
          title: "Requests",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      name: "Account",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Signout",
      url: "#",
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
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
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
