"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="bg-background mx-auto min-h-[60vh] w-full max-w-6xl rounded-xl p-8 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold">Contact</h1>

      {/* Direct Contact Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Direct Contact</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="telephone">Telephone</Label>
            <Input
              id="telephone"
              type="tel"
              placeholder="Enter telephone number"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="mt-2"
            />
          </div>
        </div>
      </div>

      {/* Website URL Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Website URL</h2>
        <div>
          <Label htmlFor="website">Website URL</Label>
          <Input
            id="website"
            type="url"
            placeholder="Enter website URL"
            className="mt-2"
          />
        </div>
      </div>

      {/* Social Media Accounts Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Social Media Accounts</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="facebook">Facebook</Label>
            <Input
              id="facebook"
              type="url"
              placeholder="Enter Facebook URL"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="instagram">Instagram</Label>
            <Input
              id="instagram"
              type="url"
              placeholder="Enter Instagram URL"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="youtube">YouTube</Label>
            <Input
              id="youtube"
              type="url"
              placeholder="Enter YouTube URL"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              type="url"
              placeholder="Enter LinkedIn URL"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="tiktok">TikTok</Label>
            <Input
              id="tiktok"
              type="url"
              placeholder="Enter TikTok URL"
              className="mt-2"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
      </div>
    </div>
  );
};

export default Contact;
