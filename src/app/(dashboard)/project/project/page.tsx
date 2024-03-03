"use client";
import React, { useEffect, useRef, useState } from "react";
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
  CalendarIcon,
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
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { formatDate } from "@/utils/formatDate";
import { Switch } from "@/components/ui/switch";
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

type Contact = {
  id: number;
  projectName: string;
  description: string;
  startDate: Date;
  isCompleted: boolean;
  dueDate: Date;
  blockers: string;
};
const Project = () => {
  const [projects, setProjects] = useState<Contact[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const [isLoading, setisLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { token } = useAuth();
  const { loading } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(10);
  const [inputs, setInputs] = useState({
    description: "",
    assignedTo: "",
    projectName: "",
    blockers: "",
    startDate: new Date(),
    dueDate: new Date(),
    isCompleted: false,
  });
  const disabledBeforeDate = new Date();

  const disabledDays = { before: disabledBeforeDate };

  const handleEndDateChange = (date: Date) => {
    setInputs((prev) => ({
      ...prev,
      dueDate: date,
    }));
  };

  const handleChange = (name: string, value: string | Date | boolean) => {
    setInputs((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await apiService.get(
          `/api/Project/GetAllProjects?&page=${currentPage}&pageSize=${pagination}`,
          { Authorization: `Bearer ${token}` }
        );
        console.log(response);
        if (response.succeeded !== false) {
          setProjects(response.projects);
        } else {
          console.log(response.responseMessage);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (loading === false) {
      fetchProjects();
    }
  }, [token, loading]);
  const createProject = async () => {
    try {
      const resp = await apiService.post(
        "/api/Project/CreateProject",
        { ...inputs, dueDate: format(inputs.dueDate, "yyyy-MM-dd HH:mm:ss") },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(resp);
      if (resp.succeeded === true) {
        setOpenModal(false);
        setProjects([...projects, resp.project]);
      }
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };
  const handleSubmitProject = async () => {
    setisLoading(true);
    if (expandLoading === null) {
      createProject();
    } else {
      handleUpdate();
    }
  };
  const [expandLoading, setExpandLoading] = useState<number | null>(null);
  const identity = useRef<number | null>(null);
  const expand = async (id: number) => {
    setExpandLoading(id);
    identity.current = id;
    console.log(inputs);
    try {
      const resp = await apiService.get(`/api/Project/GetProjectById/${id}`, {
        Authorization: `Bearer ${token}`,
      });
      console.log(resp);
      if (resp.succeeded === true) {
        setInputs(resp.project);

        setOpenModal(true);
      }
    } catch (error) {}
  };
  const handleUpdate = async () => {
    try {
      const resp = await apiService.put(
        `/api/Project/UpdateProject/${identity.current}`,
        { ...inputs, dueDate: format(inputs.dueDate, "yyyy-MM-dd HH:mm:ss") },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(resp);
      if (resp.succeeded === true) {
        setOpenModal(false);
        setExpandLoading(null);
        setisLoading(false);
        console.log(resp);
        identity.current = null;
      } else {
        setisLoading(false);

      }
    } catch (error) {
      setisLoading(false);
      identity.current = null;
    }
  };
  const handleDelete = async (id: number) => {
    try {
      const resp = await apiService.delete(`/api/Project/DeleteProject/${id}`, {
        Authorization: `Bearer ${token}`,
      });
      console.log(resp);
      if (resp.succeeded === true) {
        setOpenModal(false);
        setExpandLoading(null);
        setisLoading(false);
        setProjects((prev) => prev.filter((project) => project.id !== id));
        console.log(resp);
        identity.current = null;
      }
    } catch (error) {
      setisLoading(false);
      identity.current = null;
    }
  };
  return (
    <main className=" flex gap-10 remove-scrollbar h-screen pb-[120px]  overflow-y-scroll  flex-col">
      {openModal && (
        <div className=" flex items-center fixed w-screen top-0 right-0 left-0 bottom-0 h-screen justify-center z-50 bg-[rgba(0,0,0,0.6)]">
          <div className="  max-w-[408px] w-full rounded-[8px] bg-white  shadow-lg flex flex-col gap-[10px] border p-6 items-center">
            <p>Project</p>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Project Name</p>
              <input
                type="text"
                onChange={(e) => handleChange("projectName", e.target.value)}
                placeholder="Project name"
                value={inputs.projectName}
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">
                Project Description
              </p>
              <input
                type="text"
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Description"
                value={inputs.description}
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Blockers</p>
              <input
                type="text"
                onChange={(e) => handleChange("blockers", e.target.value)}
                placeholder="Blockers"
                value={inputs.blockers}
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Due Date</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={clsx(
                      " w-full justify-start bg-[#F3F4F6] text-[#B3B3B6]  text-left font-normal",
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
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={inputs.dueDate as unknown as Date}
                    disabled={disabledDays}
                    onSelect={(d) => handleEndDateChange(d as Date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            {identity.current !== null && (
              <div className=" w-full flex items-center justify-between ">
                <p className=" text-[13px] mb-2 text-[#677189]">Completed</p>
                <Switch
                  defaultChecked={inputs.isCompleted}
                  onCheckedChange={(e) => handleChange("isCompleted", e)}
                  checked={inputs.isCompleted}
                />
              </div>
            )}

            <div className=" w-full">
              <button
                onClick={handleSubmitProject}
                className="grid place-items-center items-center justify-center w-full bg-ai-button-blue text-white text-sm rounded-[4px] py-3"
              >
                {isLoading ? (
                  <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                ) : identity.current !== null ? (
                  "Update"
                ) : (
                  "Create"
                )}
              </button>
            </div>
            <div
              onClick={() => {
                setOpenModal(false);
                setExpandLoading(null);
                setisLoading(false);
              }}
              className=" w-full"
            >
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
        <div
          onClick={() => setOpenModal(true)}
          className=" bg-[#0330AE] rounded-lg cursor-pointer items-center justify-center p-2 gap-2 w-fit flex text-white"
        >
          <span className=" font-bold text-sm">Create Project</span>
          <PlusIcon className=" w-4 h-4 text-white" />
        </div>
      </div>
      <div className=" border h-[62px] max-w-[1107px] flex items-center justify-between border-[rgb(239,241,244)] rounded-[8px] p-2 ">
        <div className=" w-1/2 flex h-full items-center max-w-[435px]  bg-white rounded-[8px]">
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
      <div className=" bg-white max-w-[1107px] w-full rounded-lg">
        <Table className="">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className=" bg-[rgb(250,251,251)]">
            <TableRow>
              <TableHead className=" bg-transparent">Project Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>

              <TableHead>Blocker</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => {
              return (
                <TableRow
                  key={project.id}
                  className=" border-b border-b-[rgb(234,236,240)] py-4"
                >
                  <TableCell className="font-medium text-sm text-[#101828]">
                    {project.projectName}
                  </TableCell>
                  <TableCell>{project.description}</TableCell>

                  <TableCell>{formatDate(project.startDate)}</TableCell>
                  <TableCell>{formatDate(project.dueDate)}</TableCell>
                  <TableCell className="text-sm text-[#42526D]">
                    <div
                      className={clsx(
                        " rounded-[16px] w-fit  px-2 py-2 text-xs font-medium",
                        {
                          " bg-green-600 text-white": project.isCompleted,
                          "bg-[#D6F3FF] text-[#0A3465]": !project.isCompleted,
                        }
                      )}
                    >
                      {project.isCompleted ? "Completed" : "In Progress"}
                    </div>
                  </TableCell>
                  <TableCell>{project.blockers}</TableCell>
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
                              permanently delete this entry and remove your data
                              from the servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction className=" bg-ai-button-blue"
                              onClick={() => handleDelete(project.id)}
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    }
                  </TableCell>
                  <TableCell>
                    {expandLoading === project.id ? (
                      <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                    ) : (
                      <ChevronsUpDown
                        onClick={() => expand(project.id)}
                        className=" w-4 h-4 rotate-45 cursor-pointer"
                      />
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Pagination className=" px-4 pb-7 pt-2">
          <PaginationContent className=" w-full flex items-center justify-between ">
            <PaginationItem className=" border rounded-[8px] border-[rgb(208,213,221)]">
              <PaginationPrevious href="#" />
            </PaginationItem>

            <PaginationItem className=" border rounded-[8px] border-[rgb(208,213,221)]">
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
};

export default Project;
