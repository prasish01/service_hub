"use client";

import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const Settings = () => {
  return (
    <div className="bg-background mx-auto min-h-[60vh] w-full max-w-6xl rounded-xl p-8 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold">Settings</h1>

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
      {/* <div className="flex justify-end">
        <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
      </div> */}
    </div>
  );
};

export default Settings;
