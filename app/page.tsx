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
import { CalendarIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center bg-muted/50 rounded-xl p-6">
          <div className="relative w-full h-48 bg-purple-200 rounded-t-xl">
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="relative h-40 w-40 rounded-full bg-gray-300 border-4 border-white">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>
          {/* Name */}
          <h2 className="mt-16 text-2xl font-bold">Jess Hong</h2>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex h-1/2 flex-col items-center justify-center bg-muted/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold">Change Banner</h3>
            <p className="text-sm text-muted-foreground">
              Upload a new banner image.
            </p>
          </div>

          <div className="flex h-1/2 flex-col items-center justify-center bg-muted/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold">Change Avatar</h3>
            <p className="text-sm text-muted-foreground">
              Upload a new profile picture.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-background min-h-[60vh] rounded-xl p-8 shadow-lg w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Profile Page</h1>
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
                <div className="space-y-2 w-full max-w-[160px]">
                  <label className="text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-11 justify-start text-left font-normal bg-white hover:bg-gray-50"
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

                <div className="space-y-2 w-full max-w-[200px]">
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
            <div className="space-y-4 max-w-[140px]">
              <label className="text-sm font-medium text-gray-700 p ">
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
              className="h-11 px-8 text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
