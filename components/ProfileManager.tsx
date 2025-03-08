"use client";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
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

const ProfileManager = () => {
  // State for Date of Birth
  const [dob, setDob] = useState<Date | undefined>(undefined);

  return (
    <div className="bg-background mx-auto min-h-[60vh] w-full max-w-6xl rounded-xl p-8 shadow-lg">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">Profile Page</h2>
      <form className="space-y-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <Input
              type="text"
              placeholder="John Doe"
              className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </div>

          {/* Date of Birth */}
          <div className="space-y-2">
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
                  <span className="text-gray-700">
                    {dob ? format(dob, "PPP") : "Select date"}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dob}
                  onSelect={setDob}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Location (Google Autocomplete Placeholder) */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Location
            </label>
            <Input
              type="text"
              placeholder="Enter your location"
              className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Gender</label>
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

          {/* Body Type */}
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

          {/* Height */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Height</label>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="175"
                className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
              />
              <Select defaultValue="cm">
                <SelectTrigger className="h-11 w-20 focus:ring-2 focus:ring-blue-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cm">cm</SelectItem>
                  <SelectItem value="ft">ft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Weight */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Weight</label>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="70"
                className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
              />
              <Select defaultValue="kg">
                <SelectTrigger className="h-11 w-20 focus:ring-2 focus:ring-blue-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">kg</SelectItem>
                  <SelectItem value="lbs">lbs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Hair Color */}
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

          {/* Eye Color */}
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

          {/* Spoken Languages */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Spoken Languages
            </label>
            <Select>
              <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500">
                <SelectValue placeholder="Select languages" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <Textarea
              placeholder="Tell us about yourself..."
              rows={4}
              className="focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileManager;
