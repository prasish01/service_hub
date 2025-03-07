import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Pen } from "lucide-react";
import Image from "next/image";
import ProfileManager from "@/components/ProfileManager";
import ServicesPage from "@/components/Services";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Settings from "@/components/Settings";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {/* Banner Section */}
      <div className="relative h-54 w-full rounded-xl bg-slate-300">
        <div className="relative h-full w-full">
          {/* <Image
            src="/banner.jpg" // Replace with your banner image path
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          /> */}

          <div className="absolute right-4 bottom-4">
            <button className="flex gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white">
              <Pen className="h-5 w-5" />
              Change Banner
            </button>
          </div>
        </div>

        {/* Profile Picture Section */}
        <div className="absolute -bottom-16 left-8">
          <div className="relative z-10 h-32 w-32 rounded-full border-4 border-white bg-gray-300">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={128}
              height={128}
              className="h-full w-full rounded-full object-cover"
            />

            <button className="absolute right-0 bottom-0 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white">
              <Pen className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Profile Name */}
      <h2 className="mt-20 pl-8 text-2xl font-bold">Jess Hong</h2>

      {/* Tabs for Navigation */}
      <Tabs defaultValue="profile" className="mx-8 w-auto">
        <TabsList className="mb-4 grid w-full grid-cols-5">
          <TabsTrigger value="profile" className="cursor-pointer">
            Profile
          </TabsTrigger>
          <TabsTrigger value="services" className="cursor-pointer">
            Services
          </TabsTrigger>
          <TabsTrigger value="schedule" className="cursor-pointer">
            Schedule
          </TabsTrigger>
          <TabsTrigger value="contact" className="cursor-pointer">
            Contact
          </TabsTrigger>
          <TabsTrigger value="settings" className="cursor-pointer">
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileManager />
        </TabsContent>

        <TabsContent value="services">
          <ServicesPage />
        </TabsContent>

        <TabsContent value="schedule">
          <Schedule />
        </TabsContent>

        <TabsContent value="contact">
          <Contact />
        </TabsContent>

        <TabsContent value="settings">
          <Settings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
