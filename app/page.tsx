import Image from "next/image";

import { Pen } from "lucide-react";
import ProfileManager from "@/components/ProfileManager";
import ServicesPage from "@/components/Services";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Settings from "@/components/Settings";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
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

      <h1 className="mt-20 pl-8 text-2xl font-bold">Jess Hong</h1>
      <ProfileManager />
      <ServicesPage />
      <Schedule />
      <Contact />
      <Settings />
      <div className="mr-9 flex justify-end py-4">
        <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
      </div>
    </div>
  );
}
