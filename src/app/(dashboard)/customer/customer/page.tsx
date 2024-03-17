"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListBulletIcon, PaintBrushIcon } from "@heroicons/react/16/solid";
import {
  ArrowLeft,
  ArrowRight,
  ChevronsUpDown,
  Edit,
  ListFilter,
  ListFilterIcon,
  MoreVertical,
  PlusIcon,
  SearchIcon,
  TrashIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import axios from "axios";
import { useAuth } from "@/context/UserContext";
import { apiService } from "@/utils/apiService";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import clsx from "clsx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { Skeleton } from "@/components/ui/skeleton";
export type Customer = {
  organizationId: string;
  id: number;
  companyName: string;
  website: string;
  category: string;
  relationshipManager: string;
};
const Customer = () => {
  const { token, loading } = useAuth();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [inputs, setInputs] = useState({
    website: "",
    companyName: "",
    relationshipManager: "",
    category: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const [getCustomers, setGetCustomers] = useState(false);
  const [expandLoading, setExpandLoading] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [params, setParams] = useState({
    total: 0
  })
  const [currentPage, setCurrentPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const handleSubmitCustomer = async () => {
    setisLoading(true);
    try {
      const resp = await apiService.post(
        "/api/Customer/CreateCustomer",
        inputs,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(resp);
      if (resp.succeeded === true) {
        setCustomers([...customers, resp.customer]);
        setOpen(false);

      }
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };
  function searchCustomer() {
    let query = search.toLowerCase();
    const comm = customers?.filter((customer) => {
      const searchableProperties = [
        customer?.companyName,
        customer?.website,
        customer?.category,
        customer?.relationshipManager,
      ].map((prop) => prop?.toLowerCase());
      return searchableProperties?.some((prop) => prop?.includes(query));
    });
    return comm;
  }
  useEffect(() => {
    const getCustomers = async () => {
      setGetCustomers(true);
      try {
        const resp = await apiService.get("/api/Customer/GetAllCustomers", {
          Authorization: `Bearer ${token}`,
        });
        console.log(resp);
        if (resp.succeeded === true) {
          setCustomers(resp.customers);
          setParams({
            total: resp.total
          })
        }
        setGetCustomers(false);
      } catch (error) {
        setGetCustomers(false);
      }
    };
          getCustomers();
  }, [loading, token]);


  const maxPage = Math.ceil(params.total / pageSize);

  const handlePageNavigation = (directon: "next" | "previous") => {
    if (directon === "next") {
      if (maxPage === currentPage) return;
      setCurrentPage(currentPage + 1);
    } else {
      if (currentPage === 1) return;
      setCurrentPage(currentPage - 1);
    }
  };
  const handleExpand = async (id: number) => {
    setExpandLoading(id);
    try {
      const resp = await apiService.get(`/api/Customer/GetCustomerById/${id}`, {
        Authorization: `Bearer ${token}`,
      });
      if (resp.succeeded === true) {
        setInputs(resp.customer);
        setOpen(true);
      }
    } catch (error) {
      setExpandLoading(null);
    }
  };
  const handleChange = (name: string, value: string) => {
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const onSubmit = () => {
    if (expandLoading) {
      handleUpdate();
    } else {
      handleSubmitCustomer();
    }
  };
  const handleUpdate = async () => {
    setisLoading(true)
    try {
      const resp = await apiService.put(
        `/api/Customer/UpdateCustomer/${expandLoading}`,
        {...inputs, id: expandLoading},
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(resp);
      if (resp.succeeded === true) {
        setOpen(false);
        setExpandLoading(null);
        setisLoading(false);
        const updatedCustomer = resp.customer; 
        const index = customers.findIndex(customer => customer.id === expandLoading);
        if (index !== -1) {
          const updatedcustomers = [...customers];
          updatedcustomers[index] = updatedCustomer;
          setCustomers(updatedcustomers);
        }
        setInputs({
          website: "",
          companyName: "",
          relationshipManager: "",
          category: "",
        })
      }
      setisLoading(false)
    } catch (error) {
      setisLoading(false);
      setisLoading(false)

    }
  };
  const handleDelete = async (id: number) => {
    try {
      const resp = await apiService.delete(`/api/Customer/DeleteCustomer/${id}`, {
        Authorization: `Bearer ${token}`,
      });
      console.log(resp);
      if (resp.succeeded === true) {
        setCustomers((prev) => prev.filter((customer) => customer.id !== id));
        console.log(resp);
      }
    } catch (error) {
      setisLoading(false);
    }
  };
  const handleCancel = () => {
    setInputs({
      website: "",
      companyName: "",
      relationshipManager: "",
      category: "",
    })
    setExpandLoading(null)
  }
  return (
    <main className=" flex gap-10  h-screen pb-[120px]  overflow-y-scroll  flex-col">
      <div className=" flex justify-between">
        <div className=" grow"></div>
        {/* <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Last 15 days" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select> */}
        <Dialog open={open} onOpenChange={(o) => setOpen(o)} >
          <DialogTrigger className=" bg-[#0330AE] rounded-lg cursor-pointer items-center justify-center p-2 gap-2 w-fit flex text-white">
            {" "}
            <span className=" font-bold text-sm">Create customer</span>
            <PlusIcon className=" w-4 h-4 text-white" />
          </DialogTrigger>
          <DialogContent className="  max-w-[408px] w-full rounded-[8px] bg-white  shadow-lg flex flex-col gap-[10px] border p-6 items-center">
            <p>Customer</p>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Company Name</p>
              <input
                type="text"
                value={inputs.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                placeholder="Customer name"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Website</p>
              <input
                type="text"
                value={inputs.website}
                onChange={(e) => handleChange("website", e.target.value)}
                placeholder="website"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">
                Relationship Manager
              </p>
           
                     <Select>
          <SelectTrigger className="bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]">
            <SelectValue placeholder="Relationship manager" />
          </SelectTrigger>
          <SelectContent>
            {/* <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem> */}
          </SelectContent>
        </Select>
            </div>
            <div className=" w-full">
            <p className=" text-[13px] mb-2 text-[#677189]">
                Category
              </p>
            <input
                type="text"
                value={inputs.category}
                onChange={(e) =>
                  handleChange("category", e.target.value)
                }
                placeholder="Category"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
              />

            </div>

            <div className=" w-full">
              <button
                onClick={onSubmit}
                className="grid place-items-center items-center justify-center w-full bg-ai-button-blue text-white text-sm rounded-[4px] py-3"
              >
                {isLoading ? (
                  <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                ) : expandLoading ? (
                  "Edit Customer"
                ) : (
                  "Add Customer"
                )}
              </button>
            </div>
            <div className=" w-full">
              <DialogClose
                onClick={handleCancel}
                className=" w-full  text-[#8D8D91]  text-sm border-none py-3"
              >
                Cancel
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className=" border h-[62px] max-w-[1107px] flex items-center justify-between border-[rgb(239,241,244)] rounded-[8px] p-2 ">
        <div className=" w-1/2 flex h-full gap-2 items-center max-w-[435px]  bg-white rounded-[8px]">
          <SearchIcon className=" w-4 h-4" />
          <input
            type="text"
            className=" shadow-none outline-none w-full h-full bg-transparent"
            placeholder="Search for Customer"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <div className=" flex items-center gap-3">
          <div className="flex rounded-[8px] border py-[10px] px-4 border-[rgb(239,239,239)]">
            <ListFilterIcon className=" w-5 h-5 text-[rgb(52,64,84)]" />
            <span className=" text-sm text-[#344054]">Filter</span>
          </div>
          <div className="flex rounded-[8px]  py-[10px] px-4  bg-[#EFEFEF]">
            <ListBulletIcon className=" w-5 h-5 text-white" />
          </div>
          <div className="flex  rounded-[8px] border py-[10px] px-4 border-[rgb(239,239,239)] bg-[#EFEFEF]">
            <svg
              width="20.000000"
              height="20.000000"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M18.334 3.31665C18.334 2.1416 17.8008 1.66663 16.4746 1.66663L13.1074 1.66663C11.7832 1.66663 11.25 2.1416 11.25 3.31665L11.25 7.09167C11.25 8.2749 11.7832 8.74158 13.1074 8.74158L16.4746 8.74158C17.8008 8.75 18.334 8.2749 18.334 7.09998L18.334 3.31665Z"
                stroke="#292D32"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
              <path
                id="Vector"
                d="M18.334 13.1083C18.334 11.7833 17.8008 11.25 16.4746 11.25L13.1074 11.25C11.7832 11.25 11.25 11.7833 11.25 13.1083L11.25 16.475C11.25 17.8 11.7832 18.3334 13.1074 18.3334L16.4746 18.3334C17.8008 18.3334 18.334 17.8 18.334 16.475L18.334 13.1083Z"
                stroke="#292D32"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
              />
              <path
                id="Vector"
                d="M8.75 3.31665C8.75 2.1416 8.2168 1.66663 6.89062 1.66663L3.52344 1.66663C2.19922 1.66663 1.66602 2.1416 1.66602 3.31665L1.66602 7.09167C1.66602 8.2749 2.19922 8.74158 3.52344 8.74158L6.89062 8.74158C8.2168 8.75 8.75 8.2749 8.75 7.09998L8.75 3.31665Z"
                stroke="#292D32"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
              />
              <path
                id="Vector"
                d="M8.75 13.1083C8.75 11.7833 8.2168 11.25 6.89062 11.25L3.52344 11.25C2.19922 11.25 1.66602 11.7833 1.66602 13.1083L1.66602 16.475C1.66602 17.8 2.19922 18.3334 3.52344 18.3334L6.89062 18.3334C8.2168 18.3334 8.75 17.8 8.75 16.475L8.75 13.1083Z"
                stroke="#292D32"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
              />
              <g opacity="0.000000" />
            </svg>
          </div>
        </div>
      </div>
      <div className=" bg-white border overflow-hidden max-w-[1107px] w-full rounded-lg">
        <Table className=" ">
          {/* <TableCaption>
            {" "}
            {customers.length < 1 ? "No customers found" : ""}
          </TableCaption> */}
          <TableHeader className=" bg-[rgb(250,251,251)]">
            <TableRow>
              <TableHead className=" bg-transparent">Company name</TableHead>
              <TableHead>Website</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Relationship manager</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getCustomers ? (
              <TableRow>
                <TableCell>
                  <Skeleton className=" w-[100px] h-[20px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className=" w-[100px] h-[20px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className=" w-[100px] h-[20px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className=" w-[100px] h-[20px]" />
                </TableCell>
              </TableRow>
            ) : (
              searchCustomer().map((customer, index) => {
                return (
                  <TableRow
                    key={customer.id}
                    className={clsx(
                      " border-b border-b-[rgb(234,236,240)] py-4"
                    )}
                  >
                    <TableCell className="text-sm text-[#42526D]">
                      {customer.companyName}
                    </TableCell>
                    <TableCell>
                      <div className="bg-[#ECFDF3] rounded-[16px] w-fit  px-2 py-2 text-xs font-medium ">
                        {customer.website}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-[#42526D]">
                      {customer.category}
                    </TableCell>
                    <TableCell className=" text-sm text-[#42526D]">
                      {customer.relationshipManager}
                    </TableCell>
 
   
                    <TableCell>
                      <Popover>
                        <PopoverTrigger>
                          <MoreVertical className=" w-4 h-4" />
                        </PopoverTrigger>
                        <PopoverContent className=" w-fit flex flex-col gap-3">
                          <Link
                            href={`/customer/${customer.id}/invoice`}
                            className=" text-sm"
                          >
                            View invoice
                          </Link>
                          <Link
                            href={`/customer/${customer.id}/contact`}
                            className=" text-sm"
                          >
                            View contact
                          </Link>
                          <Link
                            href={`/customer/${customer.id}/communication`}
                            className=" text-sm"
                          >
                            View communication
                          </Link>
                          <AlertDialog>
                            <AlertDialogTrigger className="  cursor-pointer flex gap-2 justify-between items-center">
                              <span className=" text-sm">Delete</span>
                              <div className=" bg-red-600 w-fit   p-2 rounded-[7px]">
                                <TrashIcon className=" w-4 h-4 text-white" />
                              </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Are you absolutely sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will
                                  permanently delete this entry and remove your
                                  data from the servers.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  className=" bg-ai-button-blue"
                                  onClick={() => handleDelete(customer.id)}
                                >
                                  Continue
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                          {expandLoading === customer.id ? (
                            <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                          ) : (
                            <div onClick={() => handleExpand(customer.id)} className=" flex cursor-pointer  items-center justify-between w-full gap-2">
                              <span className=" text-sm">Edit</span>
                              <Edit
                                
                                className=" w-4 h-4 rotate-45 cursor-pointer"
                              />
                            </div>
                          )}
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
        <Pagination className=" px-4 pb-7 pt-2">
        <PaginationContent className=" w-full flex items-center justify-between ">
            <PaginationItem className=" border rounded-[8px] border-[rgb(208,213,221)]">
              <button
                disabled={currentPage === 1}
                className=" disabled:cursor-not-allowed  px-4 py-2 rounded-[8px] flex items-center justify-center gap-2 text-[#344054] border-[#D0D5DD] border "
                onClick={() => handlePageNavigation("previous")}
              >
                <ArrowLeft className=" w-4 h-4" /> <span>Previous</span>{" "}
              </button>
            </PaginationItem>
            <div className=" flex text-sm font-medium items-center gap-2"></div>

            <PaginationItem className=" border rounded-[8px] border-[rgb(208,213,221)]">
              <button
                disabled={maxPage === currentPage}
                className=" disabled:cursor-not-allowed  px-4 py-2 rounded-[8px] flex items-center justify-center gap-2 text-[#344054] border-[#D0D5DD] border "
                onClick={() => handlePageNavigation("next")}
              >
                <span>Next</span>
                <ArrowRight className=" w-4 h-4" />
              </button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
};

export default Customer;
