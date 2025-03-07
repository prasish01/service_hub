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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Eye, EyeOff, Edit, Trash } from "lucide-react";

// Define the type for a service provider
type ServiceProvider = {
  id: number;
  name: string;
  avatar: string;
  service: string;
  visibility: "visible" | "hidden";
};

// Sample data for service providers
const serviceProviders: ServiceProvider[] = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://github.com/shadcn.png",
    service: "Hair Styling",
    visibility: "visible",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://github.com/shadcn.png",
    service: "Makeup Artist",
    visibility: "hidden",
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatar: "https://github.com/shadcn.png",
    service: "Nail Technician",
    visibility: "visible",
  },
  {
    id: 4,
    name: "Alice Johnson",
    avatar: "https://github.com/shadcn.png",
    service: "Nail Technician",
    visibility: "hidden",
  },
  {
    id: 5,
    name: "Alice Johnson",
    avatar: "https://github.com/shadcn.png",
    service: "Nail Technician",
    visibility: "visible",
  },
  {
    id: 6,
    name: "Alice Johnson",
    avatar: "https://github.com/shadcn.png",
    service: "Nail Technician",
    visibility: "hidden",
  },
  {
    id: 7,
    name: "Alice Johnson",
    avatar: "https://github.com/shadcn.png",
    service: "Nail Technician",
    visibility: "visible",
  },
];

export default function ServiceProvidersPage() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Handle row selection
  const handleRowSelection = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  // Handle visibility toggle
  const toggleVisibility = (id: number) => {
    // Implement logic to toggle visibility
    console.log(`Toggled visibility for provider with ID: ${id}`);
  };

  // Handle edit action
  const handleEdit = (id: number) => {
    // Implement edit logic
    console.log(`Edit provider with ID: ${id}`);
  };

  // Handle delete action
  const handleDelete = (id: number) => {
    // Implement delete logic
    console.log(`Delete provider with ID: ${id}`);
  };

  return (
    <div className="bg-background mx-auto min-h-[60vh] w-full max-w-6xl rounded-xl p-8 shadow-lg">
      {/* Page Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Service Providers</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Add Service Provider
        </Button>
      </div>

      {/* Service Providers Table */}
      <div className="rounded-lg border shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={
                    selectedRows.length === serviceProviders.length &&
                    serviceProviders.length > 0
                  }
                  onCheckedChange={() => {
                    if (selectedRows.length === serviceProviders.length) {
                      setSelectedRows([]);
                    } else {
                      setSelectedRows(
                        serviceProviders.map((provider) => provider.id),
                      );
                    }
                  }}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Service Provided</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {serviceProviders.map((provider) => (
              <TableRow key={provider.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(provider.id)}
                    onCheckedChange={() => handleRowSelection(provider.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={provider.avatar} alt={provider.name} />
                      <AvatarFallback>{provider.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{provider.name}</span>
                  </div>
                </TableCell>
                <TableCell>{provider.service}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                      provider.visibility === "visible"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {provider.visibility === "visible" ? "Visible" : "Hidden"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => toggleVisibility(provider.id)}
                      >
                        {provider.visibility === "visible" ? (
                          <EyeOff className="mr-2 h-4 w-4" />
                        ) : (
                          <Eye className="mr-2 h-4 w-4" />
                        )}
                        {provider.visibility === "visible" ? "Hide" : "Show"}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEdit(provider.id)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(provider.id)}
                        className="text-red-600"
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
