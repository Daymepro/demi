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
  CalendarIcon,
  EditIcon,
  ListFilter,
  ListFilterIcon,
  MoreVertical,
  Plus,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { apiService } from "@/utils/apiService";
import { useAuth } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import clsx from "clsx";
import { format, formatISO } from "date-fns";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { formatDate } from "@/utils/formatDate";
import { Switch } from "@/components/ui/switch";
import { boolean } from "zod";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

type Contact = {
  organizationId: string;
  id: number;
  description: string;
  dateCreated: Date;
  assignedTo: string;
  status: string;
  blockers: string;
  dueDate: Date;
  isCompleted: boolean;
  propjectId: number;
};
type Props = {
  params: {
    projectId: string;
  };
};
const Tasks = (props: Props) => {
  const { projectId } = props.params;
  const [tasks, setTasks] = useState<Contact[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { token, loading } = useAuth();
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({
    total: 0,
  });
  const [tableLoading, setTableLoading] = useState(false)
  const [expandLoading, setExpandLoading] = useState<number | null>(null)
  const [pageSize, setPageSize] = useState(10);
  const [openModal, setOpenModal] = useState(false);
  const [inputs, setInputs] = useState({
    description: "",
    assignedTo: "",
    dateCreated: new Date(),
    dueDate: new Date(),
    status: "",
    blockers: "",
    isCompleted: false
  });
  // const disabledBeforeDate = new Date();
  // const disabledDays = { before: disabledBeforeDate, after: inputs.dueDate };

  const handleStartDateChange = (date: Date) => {
    setInputs((prev) => ({
      ...prev,
      dateCreated: date,
    }));
    // if (date > inputs.dueDate) {
    //   setInputs((prev) => ({
    //     ...prev,
    //     dueDate: date,
    //   }));
    // }
  };

  const handleEndDateChange = (date: Date) => {
    if (date >= inputs.dateCreated) {
      setInputs((prev) => ({
        ...prev,
        dueDate: date,
      }));
    }
  };

  const handleChange = (name: string, value: string | Date| boolean) => {
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleDelete = async (id: number) => {
    try {
      const resp = await apiService.delete(`/api/Task/DeleteTask/${id}`, {
        Authorization: `Bearer ${token}`,
      });
      console.log(resp);
      if (resp.succeeded === true) {
        setOpenModal(false);
        setTasks((prev) => prev.filter((task) => task.id !== id));
        console.log(resp);
        toast('success', {
          description: "Task deleted successfully",
        } );
      }
      setisLoading(false);

    } catch (error) {
      setisLoading(false);
    }
  };
   
  const handleUpdate = async () => {
    setisLoading(true)
    try {
      const resp = await apiService.put(
        `/api/Task/UpdateTask/${expandLoading}`,
        {
          ...inputs,
          dueDate: formatISO(inputs.dueDate, { representation: "complete" }),
          startDate: formatISO(inputs.dateCreated, {
            representation: "complete",
          }),
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (resp.succeeded === true) {
        setOpenModal(false);
        setExpandLoading(null);
        setisLoading(false);
        const updatedTask = resp.task; 
        const index = tasks.findIndex(task => task.id === expandLoading);
        if (index !== -1) {
          const updatedTasks = [...tasks];
          updatedTasks[index] = updatedTask;
          setTasks(updatedTasks);
        }
        setInputs({
          description: "",
          assignedTo: "",
          dateCreated: new Date(),
          dueDate: new Date(),
          status: "",
          blockers: "",
          isCompleted: false
        })
      } else {
        toast('error', {
          description: resp.responseMessage
        })
        setisLoading(false);
      }
     
    } catch (error) {
      setisLoading(false);
    }
  };
  

  useEffect(() => {
    const fetchTasks = async () => {
      setTableLoading(true)
      try {
        const response = await apiService.get(
          `/api/Task/GetAllTasks/${projectId}?page=${page}&pageSize=${pageSize}&searchTerm=""`,
          { Authorization: `Bearer ${token}` }
        );
        console.log(response);
        if (response.succeeded !== false) {
          setTasks(response.tasks);
          setParams({
            total: response.total,
          });
        } else {
          console.log(response.responseMessage);
        }
        setTableLoading(false)
      } catch (error) {
        console.log(error);
        setTableLoading(false)

      }
    };
    if (loading === false) {
      fetchTasks();
    }
  }, [token, page, pageSize]);
  const maxPage = Math.ceil(params.total / pageSize);
  const handlePageNavigation = (directon: "next" | "previous") => {
    if (directon === "next") {
      if (maxPage === page) return;
      setPage(page + 1);
    } else {
      if (page === 1) return;
      setPage(page - 1);
    }
  };
  const handleSubmitTask = async () => {
    setisLoading(true);
    try {
      const resp = await apiService.post(
        "/api/Task/CreateTask",
        {
          ...inputs,
          dueDate: formatISO(inputs.dueDate, { representation: "complete" }),
          dateCreated: formatISO(inputs.dateCreated, {
            representation: "complete",
          }),
          propjectId: projectId,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (resp.succeeded === true) {
        setOpenModal(false);
        setTasks([...tasks, resp.task]);
        setInputs({
          description: "",
          assignedTo: "",
          dateCreated: new Date(),
          dueDate: new Date(),
          status: "",
          blockers: "",
          isCompleted: false
        })
      } else {
        toast('error', {
          description: resp.responseMessage
        })
      }
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };
  const onSubmit = () => {
    if(expandLoading) {
      handleUpdate()
    } else {
      handleSubmitTask()
    }
  }
  const handleCancel = () => {
    setInputs({
      description: "",
      assignedTo: "",
      dateCreated: new Date(),
      dueDate: new Date(),
      status: "",
      blockers: "",
      isCompleted: false
    })
    setOpenModal(false); 
    setExpandLoading(null)
  }
  const handleExpand = async (id: number) => {
    setExpandLoading(id);
    try {
      const resp = await apiService.get(
        `/api/Task/GetTaskById/${id}`,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (resp.succeeded === true) {
        setInputs(resp.task);
        setOpenModal(true);
      }
    } catch (error) {
      setExpandLoading(null);
    }
  };
  function searchTasks( ){
    let query = search.toLowerCase();
     const comm = tasks?.filter(task => {
       const searchableProperties = [
         task?.description,
         task?.blockers,
         task?.status,
          task?.assignedTo
       ].map(prop => prop?.toLowerCase());
         return searchableProperties?.some(prop => prop?.includes(query));
     });
  return comm
   }
  return (
    <main className=" flex gap-10 remove-scrollbar h-screen pb-[120px]  overflow-y-scroll flex-col">
      {openModal && (
        <div key={expandLoading}  className=" flex items-center fixed w-screen top-0 right-0 left-0 bottom-0 h-screen justify-center z-[5000000] bg-[rgba(0,0,0,0.6)]">
          <div  className="  max-w-[408px] w-full rounded-[8px] bg-white  shadow-lg flex flex-col gap-[10px] border p-6 items-center">
            <p>Task</p>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">
                Task Description
              </p>
              <input
                type="text"
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Description"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
                value={inputs.description}
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Assigned to</p>
           <Select>
          <SelectTrigger className="  bg-[#F3F4F6] px-2 focus:border-none w-full py-2 rounded-[4px] text-[#677189]">
            <SelectValue placeholder=" Select user" />
          </SelectTrigger>
          <SelectContent>
         
          </SelectContent>
        </Select>
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Status</p>
              <input
                type="text"
                onChange={(e) => handleChange("status", e.target.value)}
                placeholder="status"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
                value={inputs.status}
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Blocker</p>
              <input
                type="text"
                onChange={(e) => handleChange("blockers", e.target.value)}
                placeholder="Blockers"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
                value={inputs.blockers}
              />
            </div>
        
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Start Date</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={clsx(
                      " w-full justify-start bg-[#F3F4F6] px-2 text-[#B3B3B6]  text-left font-normal",
                      !inputs.dateCreated && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {inputs.dateCreated ? (
                      format(inputs.dateCreated, "PPP")
                    ) : (
                      <span>dd/mm/yyyy</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0  z-[6000000000]" align="start">
                  <Calendar
                    mode="single"
                    className=" "
                    selected={inputs.dateCreated as unknown as Date}
                    onSelect={(d) => handleStartDateChange(d as Date)}
                    initialFocus
                    
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189] ">End Date</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={clsx(
                      " w-full justify-start bg-[#F3F4F6] px-2 text-[#B3B3B6]  text-left font-normal",
                      !inputs.dueDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {inputs.dueDate ? (
                      format(inputs.dueDate, "PPP")
                    ) : (
                      <span>dd/mm/yyyy</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 z-[6000000000]" align="start">
                  <Calendar
                    mode="single"
                    selected={inputs.dueDate as unknown as Date}
                    onSelect={(d) => handleEndDateChange(d as Date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            {expandLoading !== null && <div className=" w-full flex items-center justify-between ">
              <p className=" text-[13px] mb-2 text-[#677189]">Completed</p>
              <Switch onCheckedChange={(e) => handleChange("isCompleted", e)} defaultChecked={inputs.isCompleted} />
            </div>}
            <div className=" w-full">
              <button
                onClick={onSubmit}
                className="grid place-items-center items-center justify-center w-full bg-ai-button-blue text-white text-sm rounded-[4px] py-3"
              >
                {isLoading ? (
                  <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                ) : (
                 expandLoading ? "Update" : "Create"
                )}
              </button>
            </div>
            <div onClick={handleCancel} className=" w-full">
              <button className=" w-full  text-[#8D8D91]  text-sm border-none py-3">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
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
        <div className=" ">
          <div
            onClick={() => setOpenModal(true)}
            className="items-center justify-center bg-[#0330AE] rounded-lg cursor-pointer  text-white p-2 gap-2 w-fit flex"
          >
            {" "}
            <span className=" font-bold text-sm">Create Task</span>
            <Plus className=" w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      <div className=" border h-[62px] max-w-[1107px] flex items-center justify-between border-[rgb(239,241,244)] rounded-[8px] p-2 ">
        <div className=" w-1/2 flex h-full items-center max-w-[435px]  bg-white rounded-[8px]">
          <SearchIcon className=" w-4 h-4" />
          <input
            type="text"
            className=" shadow-none outline-none w-full h-full bg-transparent"
            placeholder="Search tasks"
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
              <TableHead className=" bg-transparent">Description</TableHead>
              <TableHead>Date created</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Assigned to</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Blockers</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableLoading ? <TableRow>

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
              <TableCell>
                <Skeleton className=" w-[100px] h-[20px]" />
              </TableCell>
            </TableRow> : searchTasks().map((task) => {
              return (
                <TableRow
                  key={task.id}
                  className=" border-b border-b-[rgb(234,236,240)] py-4"
                >
                  <TableCell className="font-medium text-sm text-[#101828]">
                    {task.description}
                  </TableCell>

                  <TableCell className="text-sm text-[#42526D]">
                    {formatDate(task.dateCreated)}
                  </TableCell>
                  <TableCell>{formatDate(task.dueDate)}</TableCell>
                  <TableCell>{task.assignedTo}</TableCell>
                  <TableCell>
                    <div className="bg-[#ECFDF3] rounded-[16px] w-fit  px-2 py-2 text-xs font-medium ">
                      {task.status}
                    </div>
                  </TableCell>
                  <TableCell>{task.blockers}</TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVertical className=" w-4 h-4" />
                      </PopoverTrigger>
                      <PopoverContent className=" w-fit flex flex-col gap-3">
                        <AlertDialog>
                          <AlertDialogTrigger className="">
                            {" "}
                            <div className=" flex items-center gap-2 ">
                              <span className=" text-sm">Delete</span>
                              <div className=" w-fit h-fit bg-red-600 rounded-[8px] p-1">
                                <TrashIcon className=" w-4 h-4 text-white" />
                              </div>
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
                                onClick={() => handleDelete(task.id)}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        { expandLoading === task.id ? <LoadingSpinner divClassName=" w-[20px] h-[20px]" /> : <div className=" flex cursor-pointer items-center justify-between gap-2" onClick={() => handleExpand(task.id)}>
                          <span className=" text-sm">Edit</span>
                          <EditIcon className=" w-4 h-4" />
                        </div>}
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Pagination className=" px-4 pb-7 pt-2">
          <PaginationContent className=" w-full flex items-center justify-between ">
            <PaginationItem className=" border rounded-[8px] border-[rgb(208,213,221)]">
              <button
                disabled={page === 1}
                className=" disabled:cursor-not-allowed  px-4 py-2 rounded-[8px] flex items-center justify-center gap-2 text-[#344054] border-[#D0D5DD] border "
                onClick={() => handlePageNavigation("previous")}
              >
                <ArrowLeft className=" w-4 h-4" /> <span>Previous</span>{" "}
              </button>
            </PaginationItem>
            <div className=" flex text-sm font-medium items-center gap-2"></div>

            <PaginationItem className=" border rounded-[8px] border-[rgb(208,213,221)]">
              <button
                disabled={maxPage === page}
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

export default Tasks;
