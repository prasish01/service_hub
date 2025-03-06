import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
      </div>

      {/* Settings Form */}
      <div className="bg-background mx-auto w-full max-w-6xl rounded-xl p-8 shadow-lg">
        <form className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              General Settings
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Timezone
                </Label>
                <Select>
                  <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Eastern Time (EST)</SelectItem>
                    <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                    <SelectItem value="gmt">
                      Greenwich Mean Time (GMT)
                    </SelectItem>
                    <SelectItem value="ist">
                      Indian Standard Time (IST)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Currency
                </Label>
                <Select>
                  <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                    <SelectItem value="inr">INR (₹)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Language
                </Label>
                <Select>
                  <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Date Format
                </Label>
                <Select>
                  <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-700">
                    Email Notifications
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive email notifications for important updates.
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-700">
                    Push Notifications
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive push notifications on your device.
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-700">
                    SMS Notifications
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive SMS notifications for urgent alerts.
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Privacy</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-700">
                    Profile Visibility
                  </Label>
                  <p className="text-sm text-gray-500">
                    Control who can see your profile.
                  </p>
                </div>
                <Select defaultValue="public">
                  <SelectTrigger className="h-11 w-[180px] focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder="Select visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="friends">Friends Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-700">
                    Data Sharing
                  </Label>
                  <p className="text-sm text-gray-500">
                    Allow sharing of anonymized data for analytics.
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Advanced</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-700">
                    Clear Cache
                  </Label>
                  <p className="text-sm text-gray-500">
                    Clear cached data to free up storage.
                  </p>
                </div>
                <Button variant="outline" className="h-11">
                  Clear Cache
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-700">
                    Reset Settings
                  </Label>
                  <p className="text-sm text-gray-500">
                    Reset all settings to default.
                  </p>
                </div>
                <Button variant="outline" className="h-11">
                  Reset Settings
                </Button>
              </div>
            </div>
          </div>

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
