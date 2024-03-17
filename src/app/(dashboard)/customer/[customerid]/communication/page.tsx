"use client";
import React, { useEffect, useState } from "react";
import { ListBulletIcon, PaintBrushIcon } from "@heroicons/react/16/solid";
import {
  ArrowLeft,
  ArrowRight,
  CalendarIcon,
  ChevronsUpDown,
  ListFilter,
  ListFilterIcon,
  Maximize2Icon,
  MaximizeIcon,
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
import { parse, parseISO } from "date-fns";
import { formatDate } from "@/utils/formatDate";
import { Skeleton } from "@/components/ui/skeleton";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
} from "@/components/ui/alert-dialog"

import { format } from "date-fns";
import { toast } from "sonner";

type Communication = {
  organizationId: string;
  id: number;
  type: string;
  dateTime: Date;
  notes: string;
  customerId: string;
};
type Props = {
  params: {
    customerid: string
  }
}
const Communication = (props: Props) => {
  const {customerid} = props.params
  const [communication, setCommunication] = useState<Communication[]>([]);

  const [params, setParams] = useState({
    total: 0,
  });

  const [isLoading, setisLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(5);
  const [search, setSearch] = useState("");
  const { token, loading } = useAuth();
  const [inputs, setInputs] = useState<Communication>({
    dateTime: new Date()
  } as Communication);
  const [expandLoading, setExpandLoading] = useState<number | null>(null);
  const [tableLoading, setTableLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = (direction: "back" | "next") => {
    if (direction === "back") {
      if (currentPage === 1) return;
      setCurrentPage(Number(currentPage) - 1);
    } else if (direction === "next") {
      const maxPage = Math.ceil(communication.length / pagination);
      if (currentPage === maxPage) return;
      setCurrentPage(Number(currentPage) + 1);
    }
  };
  const handleChange = (name: string, value: string) => {
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const fetchCommunication = async () => {
    setTableLoading(true);
    try {
      const response = await apiService.get(
        `api/Communication/GetAllCommunications/${customerid}?search=""&page=${currentPage}&pageSize=${pagination}`,
        { Authorization: `Bearer ${token}` }
      );
      console.log(response)
      if (response.succeeded !== false) {
        setCommunication(response.communications);
      } else {
        toast("Opps", {
          description: "Something went wrong"
        })
      }
      setTableLoading(false);
    } catch (error) {
      toast("Opps", {
        description: "Something went wrong"
      })
      setTableLoading(false);
      

    }
  };
  useEffect(() => {
      fetchCommunication();
  }, [loading]);
  const handleSubmit = async () => {
    setisLoading(true);
    const formattedDate = format(inputs.dateTime, "yyyy-MM-dd HH:mm:ss");
    try {
      const resp = await apiService.post(
        "/api/Communication/CreateCommunication",
        {...inputs, dateTime: formattedDate},
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (resp.succeeded === true) {
        fetchCommunication();
        setOpen(false);
        setisLoading(false);

      } else {
        
        setisLoading(false);
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
        `/api/Communication/GetCommunicationById/${id}`,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (resp.succeeded === true) {
        setInputs(resp.communication);
        setExpandLoading(null);
        setOpen(true);
      }
    } catch (error) {
      setExpandLoading(null);
    }
  };

  function searchCommunications( ){
   let query = search.toLowerCase();
    const comm = communication.filter(communication => {
      const searchableProperties = [
        communication.type,
        communication.dateTime.toString(),
        communication.notes,
      ].map(prop => prop.toLowerCase());
        return searchableProperties.some(prop => prop.includes(query));
    });
 return comm
  }
  const handleStartDateChange = (date: Date) => {
      setInputs((prev) => ({
        ...prev,
        dateTime: date,
      }));
  };
const handleDelete = (id: number) => {

}
  
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
                <div onClick={() => setOpen(true)} className=" bg-[#0330AE] rounded-lg cursor-pointer items-center justify-center p-2 gap-2 w-fit flex text-white">
            {" "}
            <span className=" font-bold text-sm">Create Communication</span>
            <PlusIcon className=" w-4 h-4 text-white" />
          </div>
   {open &&     <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
  
          <div className="  max-w-[408px] w-full rounded-[8px] bg-white  shadow-lg flex flex-col gap-[10px] border p-6 items-center">
            <p>Communication</p>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Type</p>
              <input
                type="text"
                value={inputs.type}
                onChange={(e) => handleChange("type", e.target.value)}
                placeholder="Type"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Notes</p>
              <input
                type="text"
                value={inputs.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                placeholder="Description"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
              />
            </div>
                       <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Date</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={clsx(
                      " w-full justify-start bg-[#F3F4F6] text-[#B3B3B6]  text-left font-normal",
                      !inputs.dateTime && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {inputs.dateTime ? (
                      format(inputs.dateTime, "PPP")
                    ) : (
                      <span>dd/mm/yyyy</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    className=" "
                    selected={inputs.dateTime as unknown as Date}
                    onSelect={(d) => handleStartDateChange(d as Date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className=" w-full">
              <button
                onClick={handleSubmit}
                className="grid place-items-center items-center justify-center w-full bg-ai-button-blue text-white text-sm rounded-[4px] py-3"
              >
                {isLoading ? (
                  <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                ) : (
                  "Add Communication"
                )}
              </button>
            </div>
            <div onClick={() =>{ setOpen(false); setisLoading(false)}} className=" w-full cursor-pointer">
              <div className=" w-full text-center text-[#8D8D91]  text-sm border-none py-3">
                Cancel
              </div>
            </div>
          </div>
        </div>}
      </div>
      <div className=" border h-[62px] max-w-[1107px] flex items-center justify-between border-[rgb(239,241,244)] rounded-[8px] p-2 ">
        <div className=" w-1/2 flex items-center gap-2 h-full  max-w-[435px]  bg-white rounded-[8px]">
          <SearchIcon className=" w-4 h-4" />
          <input
            type="text"
            className=" shadow-none outline-none w-full h-full bg-transparent"
            placeholder="Search Communication"
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
          {/* <TableCaption>A list of your recent Communications.</TableCaption> */}
          <TableHeader className=" bg-[rgb(250,251,251)]">
            <TableRow>
              <TableHead className=" bg-transparent">Type</TableHead>
              <TableHead>Date/Time</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead>Customer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableLoading ? (
              <TableRow>
                <TableCell>
                  <Skeleton className=" w-[200px] h-[20px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className=" w-[200px] h-[20px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className=" w-[200px] h-[20px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className=" w-[200px] h-[20px]" />
                </TableCell>
              </TableRow>
            ) : (
              searchCommunications().map((communication, id) => {
                return (
                  <TableRow
                    key={id}
                    className=" border-b border-b-[hsl(220,17%,93%)] py-4"
                  >
                    <TableCell className="font-medium text-sm text-[#101828]">
                      {communication.type}
                    </TableCell>
                    <TableCell>{formatDate(communication.dateTime)}</TableCell>

                    <TableCell>{communication.notes}</TableCell>
                    <TableCell>{communication.customerId}</TableCell>
                    <TableCell>{ <AlertDialog>
  <AlertDialogTrigger className=" bg-red-600 rounded-[7px] cursor-pointer w-fit h-fit p-2"><TrashIcon className=" w-4 h-4 text-white" /></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete this entry
        and remove your data from the servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className=" bg-ai-button-blue" onClick={() => handleDelete(communication.id)} >Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
 }</TableCell>

                    <TableCell>
                      {expandLoading === communication.id ? (
                        <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                      ) : (
                        <ChevronsUpDown
                          onClick={() => handleExpand(communication.id)}
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
                onClick={() => navigate("back")}
              >
                <ArrowLeft className=" w-4 h-4" /> <span>Previous</span>{" "}
              </button>
            </PaginationItem>

            <PaginationItem className=" border rounded-[8px] border-[rgb(208,213,221)]">
              <button
                // disabled={
                //   currentPage === Math.ceil(communication.length / pagination)
                // }
                className=" disabled:cursor-not-allowed  px-4 py-2 rounded-[8px] flex items-center justify-center gap-2 text-[#344054] border-[#D0D5DD] border "
                onClick={() => navigate("next")}
              >
                <span>Next</span> <ArrowRight className=" w-4 h-4" />{" "}
              </button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
};

export default Communication;
