"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const Schedule = () => {
  // State for timezone
  const [timezone, setTimezone] = useState("Pacific/Auckland");

  // State for schedule
  const [schedule, setSchedule] = useState([
    {
      day: "Monday",
      startHour: "00",
      startMinute: "00",
      endHour: "00",
      endMinute: "00",
    },
    {
      day: "Tuesday",
      startHour: "00",
      startMinute: "00",
      endHour: "00",
      endMinute: "00",
    },
    {
      day: "Wednesday",
      startHour: "00",
      startMinute: "00",
      endHour: "00",
      endMinute: "00",
    },
    {
      day: "Thursday",
      startHour: "00",
      startMinute: "00",
      endHour: "00",
      endMinute: "00",
    },
    {
      day: "Friday",
      startHour: "00",
      startMinute: "00",
      endHour: "00",
      endMinute: "00",
    },
    {
      day: "Saturday",
      startHour: "00",
      startMinute: "00",
      endHour: "00",
      endMinute: "00",
    },
    {
      day: "Sunday",
      startHour: "00",
      startMinute: "00",
      endHour: "00",
      endMinute: "00",
    },
  ]);

  // Timezone options
  const timezoneOptions = [
    "Pacific/Auckland",
    "Pacific/Honolulu",
    "America/Los Angeles",
    "America/New York",
    "Europe/London",
    "Europe/Paris",
    "Asia/Tokyo",
    "Australia/Sydney",
  ];

  // Hour options (0-23)
  const hourOptions = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0"),
  );

  // Minute options (00, 15, 30, 45)
  const minuteOptions = ["00", "15", "30", "45"];

  // Handle timezone change
  const handleTimezoneChange = (value: string) => {
    setTimezone(value);
  };

  // Handle start time change
  const handleStartTimeChange = (
    day: string,
    type: "hour" | "minute",
    value: string,
  ) => {
    setSchedule((prev) =>
      prev.map((entry) =>
        entry.day === day
          ? {
              ...entry,
              startHour: type === "hour" ? value : entry.startHour,
              startMinute: type === "minute" ? value : entry.startMinute,
            }
          : entry,
      ),
    );
  };

  // Handle end time change
  const handleEndTimeChange = (
    day: string,
    type: "hour" | "minute",
    value: string,
  ) => {
    setSchedule((prev) =>
      prev.map((entry) =>
        entry.day === day
          ? {
              ...entry,
              endHour: type === "hour" ? value : entry.endHour,
              endMinute: type === "minute" ? value : entry.endMinute,
            }
          : entry,
      ),
    );
  };

  return (
    <div className="bg-background mx-auto min-h-[60vh] w-full max-w-6xl rounded-xl p-8 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold">Schedule</h1>

      {/* Timezone Dropdown */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Timezone</h2>
        <Select value={timezone} onValueChange={handleTimezoneChange}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select Timezone" />
          </SelectTrigger>
          <SelectContent>
            {timezoneOptions.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Schedule Table */}
      <div className="shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Day</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>End Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((entry) => (
              <TableRow key={entry.day}>
                <TableCell>{entry.day}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Select
                      value={entry.startHour}
                      onValueChange={(value) =>
                        handleStartTimeChange(entry.day, "hour", value)
                      }
                    >
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="HH" />
                      </SelectTrigger>
                      <SelectContent>
                        {hourOptions.map((hour, index) => (
                          <SelectItem key={index} value={hour}>
                            {hour}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span>:</span>
                    <Select
                      value={entry.startMinute}
                      onValueChange={(value) =>
                        handleStartTimeChange(entry.day, "minute", value)
                      }
                    >
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        {minuteOptions.map((minute, index) => (
                          <SelectItem key={index} value={minute}>
                            {minute}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Select
                      value={entry.endHour}
                      onValueChange={(value) =>
                        handleEndTimeChange(entry.day, "hour", value)
                      }
                    >
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="HH" />
                      </SelectTrigger>
                      <SelectContent>
                        {hourOptions.map((hour, index) => (
                          <SelectItem key={index} value={hour}>
                            {hour}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span>:</span>
                    <Select
                      value={entry.endMinute}
                      onValueChange={(value) =>
                        handleEndTimeChange(entry.day, "minute", value)
                      }
                    >
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        {minuteOptions.map((minute, index) => (
                          <SelectItem key={index} value={minute}>
                            {minute}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Schedule;
