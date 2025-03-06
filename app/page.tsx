import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Pen } from "lucide-react";

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

      <h2 className="mt-20 pl-8 text-2xl font-bold">Jess Hong</h2>
      <div className="bg-background mx-auto min-h-[60vh] w-full max-w-6xl rounded-xl p-8 shadow-lg">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Profile Page</h1>
        <form className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Height (cm)
              </label>
              <Input
                type="number"
                placeholder="175"
                className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Weight (kg)
              </label>
              <Input
                type="number"
                placeholder="70"
                className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>

            {/* Hair and Eyes */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Hair Color
              </label>
              <Select>
                <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select hair color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="brown">Brown</SelectItem>
                  <SelectItem value="blonde">Blonde</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Eye Color
              </label>
              <Select>
                <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select eye color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brown">Brown</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="hazel">Hazel</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Body Type
              </label>
              <Select>
                <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select body type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="slim">Slim</SelectItem>
                  <SelectItem value="athletic">Athletic</SelectItem>
                  <SelectItem value="average">Average</SelectItem>
                  <SelectItem value="curvy">Curvy</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Ethnicity
              </label>
              <Select>
                <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select ethnicity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asian">Asian</SelectItem>
                  <SelectItem value="african">African</SelectItem>
                  <SelectItem value="caucasian">Caucasian</SelectItem>
                  <SelectItem value="hispanic">Hispanic</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <div className="grid grid-cols-1 gap-[12px] md:grid-cols-[1fr_auto_1fr]">
                <div className="w-full max-w-[160px] space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-11 w-full justify-start bg-white text-left font-normal hover:bg-gray-50"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">Select date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="hidden md:block"></div>

                <div className="w-full max-w-[200px] space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <Select>
                    <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Looking For
              </label>
              <Select>
                <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relationship">Relationship</SelectItem>
                  <SelectItem value="casual">Casual Dating</SelectItem>
                  <SelectItem value="friendship">Friendship</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="max-w-[140px] space-y-4">
              <label className="p text-sm font-medium text-gray-700">
                Preferred Age Range
              </label>
              <Input
                type="text"
                placeholder="25-35"
                className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                Personality Traits
              </label>
              <Input
                type="text"
                placeholder="Adventurous, Funny, Caring, etc."
                className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                Hobbies and Interests
              </label>
              <Textarea
                placeholder="Traveling, Cooking, Reading, etc."
                rows={3}
                className="focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                About You
              </label>
              <Textarea
                placeholder="Tell us about yourself..."
                rows={4}
                className="focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6">
            <Button
              type="submit"
              className="h-11 bg-blue-600 px-8 text-base font-medium transition-colors hover:bg-blue-700"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
