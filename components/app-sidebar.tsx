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
      url: "/services",
      icon: HandHelping,
    },
    {
      title: "Profile",
      url: "/",
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
      url: "/account",
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
        {/* Platform Section */}
        <div className="mb-6">
          <h3 className="mt-4 px-3 text-sm text-gray-500">Platform</h3>
          <div className="mt-2 space-y-1">
            {data.navMain.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
              >
                <item.icon className="size-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Projects/Settings Section */}
        <div>
          <h3 className="px-3 text-sm text-gray-500">Projects & Settings</h3>
          <div className="mt-2 space-y-1">
            {data.projects.map((project, index) => (
              <Link
                key={index}
                href={project.url}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
              >
                <project.icon className="size-4" />
                <span>{project.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

//
// "use client";

// import * as React from "react";
// import {
//   Command,
//   User,
//   PieChart,
//   Settings,
//   Building2,
//   HandHelping,
//   Inbox,
//   LogOut,
// } from "lucide-react";

// import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarRail,
// } from "@/components/ui/sidebar";
// import Link from "next/link";

// // This is sample data.
// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },

//   navMain: [
//     {
//       title: "Company",
//       url: "#",
//       icon: Building2,
//       isActive: true,
//       items: [
//         {
//           title: "About",
//           url: "#",
//         },
//         {
//           title: "Media Library",
//           url: "#",
//         },
//         {
//           title: "Services",
//           url: "/services",
//         },
//         {
//           title: "Schedule",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Service Providers",
//       url: "#",
//       icon: HandHelping,
//       items: [
//         {
//           title: "Providers List",
//           url: "#",
//         },
//         {
//           title: "Add Provider",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Profile",
//       url: "/",
//       icon: User,
//       items: [
//         {
//           title: "About",
//           url: "/",
//         },
//         {
//           title: "Media Library",
//           url: "/",
//         },
//         {
//           title: "Services",
//           url: "/",
//         },
//         {
//           title: "Schedule",
//           url: "/",
//         },
//         {
//           title: "Contact",
//           url: "/",
//         },
//         {
//           title: "Visibility",
//           url: "/",
//         },
//       ],
//     },
//     {
//       title: "Messages",
//       url: "#",
//       icon: Inbox,
//       items: [
//         {
//           title: "Inbox",
//           url: "#",
//         },
//         {
//           title: "Sent",
//           url: "#",
//         },
//         {
//           title: "Requests",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   projects: [
//     {
//       name: "Settings",
//       url: "/settings",
//       icon: Settings,
//     },
//     {
//       name: "Account",
//       url: "#",
//       icon: PieChart,
//     },
//     {
//       name: "Signout",
//       url: "/login",
//       icon: LogOut,
//     },
//   ],
// };

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   return (
//     <Sidebar collapsible="icon" {...props}>
//       <SidebarHeader>
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton size="lg" asChild>
//               <Link href="/">
//                 <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
//                   <Command className="size-4" />
//                 </div>
//                 <div className="grid flex-1 text-left text-sm leading-tight">
//                   <span className="truncate font-semibold">Acme Inc</span>
//                   <span className="truncate text-xs">Enterprise</span>
//                 </div>
//               </Link>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>
//       <SidebarContent>
//         <NavMain items={data.navMain} />

//         <NavProjects projects={data.projects} />
//       </SidebarContent>
//       <SidebarRail />
//     </Sidebar>
//   );
// }
