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
  ListFilter,
  ListFilterIcon,
  PlusIcon,
  SearchIcon,
  TrashIcon,
} from "lucide-react";
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
import { apiService } from "@/utils/apiService";
import { useAuth } from "@/context/UserContext";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { Skeleton } from "@/components/ui/skeleton";
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

type Opportunity = {
  companyName: string;
  id: number;
  description: string;
  organizationId: string;
  action: string;
  stage: string;
  amount: string;
};
const Opportunity = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [params, setParams] = useState({
    total: 0,
  });

  const [isLoading, setisLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [expandLoading, setExpandLoading] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { token, loading } = useAuth();
  const [pageSize, setPageSize] = useState(10);
  const [inputs, setInputs] = useState<Opportunity>({} as Opportunity);
  const [open, setOpen] = useState(false);

  const handleChange = (name: string, value: string) => {
    setInputs((values) => ({ ...values, [name]: value }));
  };
  useEffect(() => {
    const fetchOpportunities = async () => {
      setTableLoading(true);
      try {
        const response = await apiService.get(
          `/api/Opportunity/GetAllOpportunities?search=""&page=${currentPage}&pageSize=${pageSize}`,
          { Authorization: `Bearer ${token}` }
        );
        if (response.succeeded !== false) {
          setOpportunities(response.opportunities);
        } else {
          setParams({
            total: response.total,
          });
          console.log(response.responseMessage);
        }
        setTableLoading(false);
      } catch (error) {
        console.log(error);
        setTableLoading(false);
      }
    };
    if (loading === false) {
      fetchOpportunities();
    }
  }, [currentPage, token]);
  const handleSubmit = async () => {
    setisLoading(true);
    try {
      const resp = await apiService.post(
        "/api/Opportunity/CreateOpportunity",
        inputs,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(resp);
      if (resp.succeeded === true) {
        setOpportunities([...opportunities, resp.opportunity]);
        setOpen(false);
      }
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };
  const handleUpdate = async () => {
    setisLoading(true);
    try {
      const resp = await apiService.put(
        `/api/Opportunity/UpdateOpportunity/${expandLoading}`,
        inputs,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(`/api/Opportunity/UpdateOpportunity/${expandLoading}`);
      console.log(resp);
      if (resp.succeeded === true) {
        setOpen(false);
        setExpandLoading(null);
        console.log(resp);
        const updatedOpportunity = resp.opportunity;
        const index = opportunities.findIndex(
          (opportunity) => opportunity.id === expandLoading
        );
        if (index !== -1) {
          const updatedOppotunities = [...opportunities];
          updatedOppotunities[index] = updatedOpportunity;
          setOpportunities(updatedOppotunities);
        }
      }
      setisLoading(false);

    } catch (error) {
      setisLoading(false);
    }
  };
  function searchOpportunities() {
    let query = search.toLowerCase();
    const comm = opportunities.filter((opportunity) => {
      const searchableProperties = [
        opportunity?.companyName,
        opportunity?.description,
        opportunity?.action,
        opportunity?.stage,
      ].map((prop) => prop.toLowerCase());
      return searchableProperties?.some((prop) => prop?.includes(query));
    });
    return comm;
  }
  const handleDelete = async (id: number) => {
    try {
      const resp = await apiService.delete(
        `/api/Opportunity/DeleteOpportunity/${id}`,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(resp);
      if (resp.succeeded === true) {
        setOpportunities((prev) =>
          prev.filter((opportunity) => opportunity.id !== id)
        );
        console.log(resp);
      }
    } catch (error) {
      setisLoading(false);
    }
  };
  const handleExpand = async (id: number) => {
    setExpandLoading(id);
    console.log(id);
    try {
      const resp = await apiService.get(
        `/api/Opportunity/GetOpportunityById/${id}`,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (resp.succeeded === true) {
        setInputs(resp.opportunity);
        setOpen(true);
      }
    } catch (error) {
      setExpandLoading(null);
    }
  };
  const onSubmit = () => {
    if (expandLoading) {
      handleUpdate();
    } else {
      handleSubmit();
    }
  };
  const maxPage = Math.ceil(params.total / pageSize);

  const handleNavigation = (dir: "next" | "prev") => {
    if (dir === "next") {
      if (maxPage === currentPage) return;
      setCurrentPage((prev) => prev + 1);
    } else {
      if (currentPage === 1) return;
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <main className=" flex gap-10 remove-scrollbar h-screen pb-[120px]  overflow-y-scroll  flex-col">
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
        <Dialog open={open} onOpenChange={(open) =>{ setOpen(open); if(!open) setInputs({} as Opportunity); setExpandLoading(null)} }>
          <DialogTrigger className=" bg-[#0330AE] rounded-lg cursor-pointer items-center justify-center p-2 gap-2 w-fit flex text-white">
            {" "}
            <span className=" font-bold text-sm">Create opportunity</span>
            <PlusIcon className=" w-4 h-4 text-white" />
          </DialogTrigger>
          <DialogContent className="  max-w-[408px] w-full rounded-[8px] bg-white  shadow-lg flex flex-col gap-[10px] border p-6 items-center">
            <p>Opportunity</p>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Company Name</p>
              <input
                type="text"
                value={inputs.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                placeholder="Company name"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Description</p>
              <input
                type="text"
                value={inputs.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Description"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Action</p>
              <input
                type="text"
                value={inputs.action}
                onChange={(e) => handleChange("action", e.target.value)}
                placeholder="Action"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Amount</p>
              <input
                type="number"
                value={inputs.amount}
                onChange={(e) => handleChange("amount", e.target.value)}
                placeholder="amount"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Stage</p>
              <input
                type="text"
                value={inputs.stage}
                onChange={(e) => handleChange("stage", e.target.value)}
                placeholder="Stage"
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
                  "Edit Opportunity"
                ) : (
                  "Add Opportunity"
                )}
              </button>
            </div>
            <div className=" w-full">
              <DialogClose
                onClick={() => setExpandLoading(null)}
                className=" w-full  text-[#8D8D91]  text-sm border-none py-3"
              >
                Cancel
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className=" border h-[62px] max-w-[1107px] flex items-center justify-between border-[rgb(239,241,244)] rounded-[8px] p-2 ">
        <div className=" w-1/2 flex h-full items-center max-w-[435px]  bg-white rounded-[8px]">
          <SearchIcon className=" w-4 h-4" />
          <input
            type="text"
            className=" shadow-none outline-none w-full h-full bg-transparent"
            placeholder="Search opportunity"
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
      <div className=" bg-white max-w-[1107px] w-full rounded-lg">
        <Table className="">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className=" bg-[rgb(250,251,251)]">
            <TableRow>
              <TableHead className=" bg-transparent">Company Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Stage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableLoading ? (
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
                <TableCell>
                  <Skeleton className=" w-[100px] h-[20px]" />
                </TableCell>
              </TableRow>
            ) : (
              searchOpportunities().map((opportunity, id) => {
                return (
                  <TableRow
                    key={id}
                    className=" border-b border-b-[rgb(234,236,240)] py-4"
                  >
                    <TableCell className="font-medium text-sm text-[#101828]">
                      {opportunity.companyName}
                    </TableCell>
                    <TableCell>{opportunity.description}</TableCell>

                    <TableCell>{opportunity.action}</TableCell>
                    <TableCell>{opportunity.amount}</TableCell>
                    <TableCell>{opportunity.stage}</TableCell>
                    <TableCell>
                      {
                        <AlertDialog>
                          <AlertDialogTrigger className=" bg-red-600 rounded-[7px] cursor-pointer w-fit h-fit p-2">
                            <TrashIcon className=" w-4 h-4 text-white" />
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
                                onClick={() => handleDelete(opportunity.id)}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      }
                    </TableCell>
                    <TableCell>
                      {expandLoading === opportunity.id ? (
                        <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                      ) : (
                        <ChevronsUpDown
                          onClick={() => handleExpand(opportunity.id)}
                          className=" w-4 h-4 cursor-pointer rotate-45"
                        />
                      )}
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
                onClick={() => handleNavigation("prev")}
              >
                <ArrowLeft className=" w-4 h-4" /> <span>Previous</span>{" "}
              </button>
            </PaginationItem>

            <PaginationItem className=" border rounded-[8px] border-[rgb(208,213,221)]">
              <button
                disabled={maxPage === currentPage}
                className=" disabled:cursor-not-allowed  px-4 py-2 rounded-[8px] flex items-center justify-center gap-2 text-[#344054] border-[#D0D5DD] border "
                onClick={() => handleNavigation("next")}
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

export default Opportunity;
