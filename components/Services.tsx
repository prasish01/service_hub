// "use client";
// import { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";

// const ServicesPage = () => {
//   // Sample data for Main Services
//   const [mainServices, setMainServices] = useState([
//     { id: 1, name: "Service 1", duration: "0:00", rate: "$100" },
//     { id: 2, name: "Service 2", duration: "0:30", rate: "$200" },
//     { id: 3, name: "Service 3", duration: "1:00", rate: "$300" },
//   ]);

//   // Sample data for Additional Services
//   const [additionalServices, setAdditionalServices] = useState([
//     { id: 4, name: "Service A", rate: "$50" },
//     { id: 5, name: "Service B", rate: "$75" },
//   ]);

//   // Sample data for Outcall Rates
//   const [outcallRates, setOutcallRates] = useState([
//     { id: 6, location: "Auckland", rate: "$50" },
//     { id: 7, location: "Hamilton", rate: "$100" },
//   ]);

//   // State to manage selected rows
//   const [selectedRows, setSelectedRows] = useState<number[]>([]);

//   // Handle row selection
//   const handleRowSelection = (id: number) => {
//     setSelectedRows((prev) =>
//       prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
//     );
//   };

//   // Handle row deletion for a specific table
//   const handleDeleteRow = (setter: Function, data: any[], id: number) => {
//     setter(data.filter((item) => item.id !== id));
//   };

//   // Handle service name change
//   const handleServiceNameChange = (
//     id: number,
//     newName: string,
//     setter: Function,
//     data: any[],
//   ) => {
//     setter(
//       data.map((item) => (item.id === id ? { ...item, name: newName } : item)),
//     );
//   };

//   // Handle duration change
//   const handleDurationChange = (
//     id: number,
//     newDuration: string,
//     setter: Function,
//     data: any[],
//   ) => {
//     setter(
//       data.map((item) =>
//         item.id === id ? { ...item, duration: newDuration } : item,
//       ),
//     );
//   };

//   // Dropdown options for services
//   const serviceOptions = [
//     "Service 1",
//     "Service 2",
//     "Service 3",
//     "Service A",
//     "Service B",
//   ];

//   // Dropdown options for duration (time in hh:mm format)
//   const durationOptions = [
//     "0:00",
//     "0:30",
//     "1:00",
//     "1:30",
//     "2:00",
//     "2:30",
//     "3:30",
//     "4:00",
//     "4:30",
//     "5:00",
//     "5:30",
//     "6:00",
//     "6:30",
//     "7:00",
//     "7:30",
//     "8:00",
//   ];

//   return (
//     <div className="bg-background mx-auto min-h-[60vh] w-full max-w-6xl rounded-xl p-8 shadow-lg">
//       <h1 className="mb-6 text-2xl font-bold">Services</h1>

//       {/* Main Services Table */}
//       <div className="mb-8 max-w-xl">
//         <h2 className="mb-4 text-xl font-semibold">Main Services</h2>
//         <div className="shadow">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Select</TableHead>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Duration</TableHead>
//                 <TableHead>Rate</TableHead>
//                 <TableHead>Action</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {mainServices.map((service) => (
//                 <TableRow key={service.id}>
//                   <TableCell>
//                     <Checkbox
//                       checked={selectedRows.includes(service.id)}
//                       onCheckedChange={() => handleRowSelection(service.id)}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Select
//                       value={service.name}
//                       onValueChange={(newName) =>
//                         handleServiceNameChange(
//                           service.id,
//                           newName,
//                           setMainServices,
//                           mainServices,
//                         )
//                       }
//                     >
//                       <SelectTrigger className="w-[120px]">
//                         <SelectValue placeholder="Select Service" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {serviceOptions.map((option, index) => (
//                           <SelectItem key={index} value={option}>
//                             {option}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </TableCell>
//                   <TableCell>
//                     <Select
//                       value={service.duration}
//                       onValueChange={(newDuration) =>
//                         handleDurationChange(
//                           service.id,
//                           newDuration,
//                           setMainServices,
//                           mainServices,
//                         )
//                       }
//                     >
//                       <SelectTrigger className="w-[100px]">
//                         <SelectValue placeholder="Select Duration" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {durationOptions.map((option, index) => (
//                           <SelectItem key={index} value={option}>
//                             {option}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </TableCell>
//                   <TableCell>{service.rate}</TableCell>
//                   <TableCell>
//                     <Button
//                       onClick={() =>
//                         handleDeleteRow(
//                           setMainServices,
//                           mainServices,
//                           service.id,
//                         )
//                       }
//                       variant="destructive"
//                       size="sm"
//                       className="cursor-pointer bg-red-400"
//                     >
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>

//       <div className="flex gap-32">
//         {/* Additional Services Table */}
//         <div className="mb-8 max-w-auto">
//           <h2 className="mb-4 text-xl font-semibold">Additional Services</h2>
//           <div className="shadow">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Select</TableHead>
//                   <TableHead>Name</TableHead>
//                   <TableHead>Rate</TableHead>
//                   <TableHead>Action</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {additionalServices.map((service) => (
//                   <TableRow key={service.id}>
//                     <TableCell>
//                       <Checkbox
//                         checked={selectedRows.includes(service.id)}
//                         onCheckedChange={() => handleRowSelection(service.id)}
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <Select
//                         value={service.name}
//                         onValueChange={(newName) =>
//                           handleServiceNameChange(
//                             service.id,
//                             newName,
//                             setAdditionalServices,
//                             additionalServices,
//                           )
//                         }
//                       >
//                         <SelectTrigger className="w-[120px]">
//                           <SelectValue placeholder="Select Service" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {serviceOptions.map((option, index) => (
//                             <SelectItem key={index} value={option}>
//                               {option}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </TableCell>
//                     <TableCell>{service.rate}</TableCell>
//                     <TableCell>
//                       <Button
//                         onClick={() =>
//                           handleDeleteRow(
//                             setAdditionalServices,
//                             additionalServices,
//                             service.id,
//                           )
//                         }
//                         variant="destructive"
//                         className="cursor-pointer bg-red-400"
//                         size="sm"
//                       >
//                         Delete
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </div>

//         {/* Outcall Rates Table */}
//         <div className="mb-8 max-w-72">
//           <h2 className="mb-4 text-xl font-semibold">Outcall Rates</h2>
//           <div className="shadow">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Select</TableHead>
//                   <TableHead>Location</TableHead>
//                   <TableHead>Rate</TableHead>
//                   <TableHead>Action</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {outcallRates.map((outcall) => (
//                   <TableRow key={outcall.id}>
//                     <TableCell>
//                       <Checkbox
//                         checked={selectedRows.includes(outcall.id)}
//                         onCheckedChange={() => handleRowSelection(outcall.id)}
//                       />
//                     </TableCell>
//                     <TableCell>{outcall.location}</TableCell>
//                     <TableCell>{outcall.rate}</TableCell>
//                     <TableCell>
//                       <Button
//                         onClick={() =>
//                           handleDeleteRow(
//                             setOutcallRates,
//                             outcallRates,
//                             outcall.id,
//                           )
//                         }
//                         variant="destructive"
//                         size="sm"
//                         className="cursor-pointer bg-red-400"
//                       >
//                         Delete
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </div>
//       </div>

//       {/* Service Radius Section */}
//       {/* <div className="mb-8">
//         <h2 className="mb-4 text-xl font-semibold">Service Radius</h2>
//         <div className="flex items-center gap-4">
//           <input
//             type="text"
//             placeholder="Enter radius"
//             className="w-28 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />
//           <span className="text-gray-500">km</span>
//         </div>
//       </div> */}

//       {/* Accepted Payment Methods Section */}
//       <div className="mb-8">
//         <h2 className="mb-4 text-xl font-semibold">Accepted Payment Methods</h2>
//         <div className="flex flex-wrap gap-4">
//           {["Cash", "Credit Card", "Bank Transfer", "Crypto Currency"].map(
//             (method, index) => (
//               <div key={index} className="flex items-center space-x-2">
//                 <Checkbox
//                   id={`payment-method-${index}`}
//                   className="h-5 w-5 rounded-md"
//                 />
//                 <Label htmlFor={`payment-method-${index}`}>{method}</Label>
//               </div>
//             ),
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

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
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Define types for services
type Service = {
  id: number;
  name?: string;
  duration?: string;
  rate: string;
  location?: string;
};

const ServicesPage = () => {
  // Sample data for Main Services
  const [mainServices, setMainServices] = useState<Service[]>([
    { id: 1, name: "Service 1", duration: "0:00", rate: "$100" },
    { id: 2, name: "Service 2", duration: "0:30", rate: "$200" },
    { id: 3, name: "Service 3", duration: "1:00", rate: "$300" },
  ]);

  // Sample data for Additional Services
  const [additionalServices, setAdditionalServices] = useState<Service[]>([
    { id: 4, name: "Service A", rate: "$50" },
    { id: 5, name: "Service B", rate: "$75" },
  ]);

  // Sample data for Outcall Rates
  const [outcallRates, setOutcallRates] = useState<Service[]>([
    { id: 6, location: "Auckland", rate: "$50" },
    { id: 7, location: "Hamilton", rate: "$100" },
  ]);

  // State to manage selected rows
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Handle row selection
  const handleRowSelection = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  // Handle row deletion for a specific table
  const handleDeleteRow = (
    setter: React.Dispatch<React.SetStateAction<Service[]>>,
    data: Service[],
    id: number,
  ) => {
    setter(data.filter((item) => item.id !== id));
  };

  // Handle service name change
  const handleServiceNameChange = (
    id: number,
    newName: string,
    setter: React.Dispatch<React.SetStateAction<Service[]>>,
    data: Service[],
  ) => {
    setter(
      data.map((item) => (item.id === id ? { ...item, name: newName } : item)),
    );
  };

  // Handle duration change
  const handleDurationChange = (
    id: number,
    newDuration: string,
    setter: React.Dispatch<React.SetStateAction<Service[]>>,
    data: Service[],
  ) => {
    setter(
      data.map((item) =>
        item.id === id ? { ...item, duration: newDuration } : item,
      ),
    );
  };

  // Dropdown options for services
  const serviceOptions = [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service A",
    "Service B",
  ];

  // Dropdown options for duration (time in hh:mm format)
  const durationOptions = [
    "0:00",
    "0:30",
    "1:00",
    "1:30",
    "2:00",
    "2:30",
    "3:30",
    "4:00",
    "4:30",
    "5:00",
    "5:30",
    "6:00",
    "6:30",
    "7:00",
    "7:30",
    "8:00",
  ];

  return (
    <div className="bg-background mx-auto min-h-[60vh] w-full max-w-6xl rounded-xl p-8 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold">Services</h1>

      {/* Main Services Table */}
      <div className="mb-8 max-w-xl">
        <h2 className="mb-4 text-xl font-semibold">Main Services</h2>
        <div className="shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Select</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mainServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(service.id)}
                      onCheckedChange={() => handleRowSelection(service.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <Select
                      value={service.name}
                      onValueChange={(newName) =>
                        handleServiceNameChange(
                          service.id,
                          newName,
                          setMainServices,
                          mainServices,
                        )
                      }
                    >
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option, index) => (
                          <SelectItem key={index} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={service.duration}
                      onValueChange={(newDuration) =>
                        handleDurationChange(
                          service.id,
                          newDuration,
                          setMainServices,
                          mainServices,
                        )
                      }
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Select Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        {durationOptions.map((option, index) => (
                          <SelectItem key={index} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>{service.rate}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() =>
                        handleDeleteRow(
                          setMainServices,
                          mainServices,
                          service.id,
                        )
                      }
                      variant="destructive"
                      size="sm"
                      className="cursor-pointer bg-red-400"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex gap-32">
        {/* Additional Services Table */}
        <div className="mb-8 max-w-auto">
          <h2 className="mb-4 text-xl font-semibold">Additional Services</h2>
          <div className="shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Select</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {additionalServices.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedRows.includes(service.id)}
                        onCheckedChange={() => handleRowSelection(service.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        value={service.name}
                        onValueChange={(newName) =>
                          handleServiceNameChange(
                            service.id,
                            newName,
                            setAdditionalServices,
                            additionalServices,
                          )
                        }
                      >
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option, index) => (
                            <SelectItem key={index} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>{service.rate}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleDeleteRow(
                            setAdditionalServices,
                            additionalServices,
                            service.id,
                          )
                        }
                        variant="destructive"
                        className="cursor-pointer bg-red-400"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </TableCell>
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
                  <TableHead>Select</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {outcallRates.map((outcall) => (
                  <TableRow key={outcall.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedRows.includes(outcall.id)}
                        onCheckedChange={() => handleRowSelection(outcall.id)}
                      />
                    </TableCell>
                    <TableCell>{outcall.location}</TableCell>
                    <TableCell>{outcall.rate}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleDeleteRow(
                            setOutcallRates,
                            outcallRates,
                            outcall.id,
                          )
                        }
                        variant="destructive"
                        size="sm"
                        className="cursor-pointer bg-red-400"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Accepted Payment Methods Section */}
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
    </div>
  );
};

export default ServicesPage;
