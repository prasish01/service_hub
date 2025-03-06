import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ServicesPage = () => {
  // Sample data for Main Services
  const mainServices = [
    { name: "Service 1", duration: "0:00", rate: "$100" },
    { name: "Service 2", duration: "0:30", rate: "$200" },
    { name: "Service 3", duration: "1:00", rate: "$300" },
  ];

  // Sample data for Additional Services
  const additionalServices = [
    { name: "Service A", rate: "$50" },
    { name: "Service B", rate: "$75" },
  ];

  // Sample data for Outcall Rates
  const outcallRates = [
    { location: "Auckland", rate: "$50" },
    { location: "Hamilton", rate: "$100" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold">Services</h1>

      {/* Main Services Table */}
      <div className="mb-8 max-w-xl">
        <h2 className="mb-4 text-xl font-semibold">Main Services</h2>
        <div className="shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mainServices.map((service, index) => (
                <TableRow key={index}>
                  <TableCell>{service.name}</TableCell>
                  <TableCell>{service.duration}</TableCell>
                  <TableCell>{service.rate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex gap-32">
        <div className="mb-8 max-w-72">
          <h2 className="mb-4 text-xl font-semibold">Additional Services</h2>
          <div className="shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {additionalServices.map((service, index) => (
                  <TableRow key={index}>
                    <TableCell>{service.name}</TableCell>
                    <TableCell>{service.rate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Outcall Rates Table */}
        <div className="mb-8 max-w-72">
          <h2 className="mb-4 text-xl font-semibold">Outcall Rates</h2>
          <div className="shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Location</TableHead>
                  <TableHead>Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {outcallRates.map((outcall, index) => (
                  <TableRow key={index}>
                    <TableCell>{outcall.location}</TableCell>
                    <TableCell>{outcall.rate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Service Radius Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Service Radius</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter radius"
            className="w-28 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <span className="text-gray-500">km</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Accepted Payment Methods</h2>
        <div className="flex flex-wrap gap-4">
          {["Cash", "Credit Card", "Bank Transfer", "Crypto Currency"].map(
            (method, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox
                  id={`payment-method-${index}`}
                  className="h-5 w-5 rounded-md"
                />
                <Label htmlFor={`payment-method-${index}`}>{method}</Label>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
