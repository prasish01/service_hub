"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Settings = () => {
  return (
    <div className="bg-background mx-auto min-h-[60vh] w-full max-w-6xl rounded-xl p-8 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold">Settings</h1>

      {/* Profile Picture Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Profile Picture</h2>
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gray-200"></div>
          <Button variant="outline">Upload New Photo</Button>
        </div>
      </div>

      {/* Display Name Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Display Name</h2>
        <div>
          <Label htmlFor="displayName">Display Name</Label>
          <Input
            id="displayName"
            type="text"
            placeholder="Enter your display name"
            className="mt-2"
          />
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Bio</h2>
        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell us a little about yourself"
            className="mt-2"
            rows={4}
          />
        </div>
      </div>

      {/* Visibility Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Visibility</h2>
        <div>
          <Label htmlFor="visibility">Who can see your profile?</Label>
          <Select>
            <SelectTrigger className="mt-2 w-[200px]">
              <SelectValue placeholder="Select visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Private</SelectItem>
              <SelectItem value="registered">Registered Members</SelectItem>
              <SelectItem value="public">Public</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
      </div>
    </div>
  );
};

export default Settings;
