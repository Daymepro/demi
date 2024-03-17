'use client'
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
import { ArrowLeft, ArrowRight, EditIcon, ListFilter, ListFilterIcon, PlusIcon, SearchIcon, TrashIcon } from "lucide-react";
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
  } from "@/components/ui/pagination"
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
} from "@/components/ui/dialog"
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
import { LoadingSpinner } from "@/components/loadingSpinner";
import { toast } from "sonner";



type Stakeholder = {
    "organizationId": string,
    "id": number,
    "userId": string,
    "role": string,
    "projectId": number
    name: string
}
type Props = {
  params: {
    projectId: string
  }
}
const ProjectStakeholders = (props: Props) => {
  const {projectId} = props.params
  const [projectStakeholders, setProjectStakeholders] = useState<Stakeholder[]>([])
  const [isLoading, setisLoading] = useState(false)
  const [search, setSearch] = useState('')
  const {token, loading } = useAuth()
  const [inputs, setInputs] = useState<Stakeholder>({
    organizationId: "",
    userId: "",
    role: "",
    projectId: 0,
    id: 0,
    name: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [expandLoading, setExpandLoading] = useState<number | null>(null);
  const [open, setOpen] = useState(false)
  const [params, setParams] = useState({
    total: 0,
  });
  const [roles, setRoles] = useState([])
  const handleChange = (name: string, value: string | Date) => {
    setInputs((values) => ({ ...values, [name]: value }));
  };
  useEffect(() => {
    const fetchStakeholders = async () => {
      try {
        const response = await apiService.get(`/api/ProjectStakeHolders/GetAllProjectStakeHolders/${projectId}?id=${projectId}&search=""&page=${currentPage}&pageSize=${pageSize}`, {'Authorization' : `Bearer ${token}`})
        if(response.succeeded !== false) {
            setProjectStakeholders(response.projectStakeHolders)
        } else {
          console.log(response.responseMessage)
        }
      } catch (error) {
        console.log(error)
      }
      try {
        const resp = await apiService.get(`/api/Business/Roles`, {
          Authorization: `Bearer ${token}`,
        })
        if(resp.succeeded === true) {
            setRoles(resp.roles)
        }
      } catch (error) {
        
      }
    }
    if(loading === false) {

      fetchStakeholders()
    }
  }, [ token, loading, currentPage, pageSize])
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
  function searchStakeholders() {
    let query = search.toLowerCase();
    const comm = projectStakeholders?.filter((project) => {
      const searchableProperties = [
        project?.name,
        project?.role,
        project?.userId,
      ].map((prop) => prop?.toLowerCase());
      return searchableProperties?.some((prop) => prop?.includes(query));
    });
    return comm;
  }
  const handleSubmitProject = async () => {
    setisLoading(true);
    try {
      const resp = await apiService.post("/api/ProjectStakeHolders/AddProjectStakeHolder", {...inputs, projectId}, {
        Authorization: `Bearer ${token}`,
      });
      if (resp.succeeded === true) {
        setProjectStakeholders([...projectStakeholders, resp.projectStakeHolder]);
        setOpen(false)
      }
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };
  const handleDelete = async (id: number) => {
    try {
      const resp = await apiService.delete(`/api/ProjectStakeHolders/DeleteProjectStakeHolder/${id}`, {
        Authorization: `Bearer ${token}`,
      });
      console.log(resp);
      if (resp.succeeded === true) {
        setProjectStakeholders((prev) => prev.filter((project) => project.id !== id));
        console.log(resp);
        toast("success", {
          description: "Task deleted successfully",
        });
      }
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };
  const handleExpand = async (id: number) => {
    console.log(id);
    setExpandLoading(id);
    try {
      const resp = await apiService.get(`/api/ProjectStakeHolders/GetProjectStakeHolderById/${id}`, {
        Authorization: `Bearer ${token}`,
      });
      console.log(resp);
      if (resp.succeeded === true) {
        setInputs(resp.projectStakeHolder);
        setOpen(true);
      } else {
        setExpandLoading(null);
      }
    } catch (error) {
      setExpandLoading(null);
    }
  };
  const handleUpdate = async () => {
    setisLoading(true);
    try {
      const resp = await apiService.put(
        `/api/ProjectStakeHolders/UpdateProjectStakeHolder/${expandLoading}`,
        {
          ...inputs,
          projectId
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (resp.succeeded === true) {
        setOpen(false);
        setExpandLoading(null);
        setisLoading(false);
        const updatedproject = resp.projectStakeHolder;
        const index = projectStakeholders.findIndex(
          (project) => project.id === expandLoading
        );
        if (index !== -1) {
          const updatedprojects = [...projectStakeholders];
          updatedprojects[index] = updatedproject;
          setProjectStakeholders(updatedprojects);
        }
      } else {
        toast("error", {
          description: resp.responseMessage,
        });
        setisLoading(false);
      }
    } catch (error) {
      setisLoading(false);
    }
  };
  const onSubmit = () => {
    if (expandLoading) {
      handleUpdate();
    } else {
      handleSubmitProject();
    }
  };
  console.log(projectStakeholders)
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

        {/* <div className=" bg-[#0330AE] rounded-lg cursor-pointer items-center justify-center p-2 gap-2 w-fit flex text-white">
          <span className=" font-bold text-sm">Edit website</span>
          <PaintBrushIcon className=" w-4 h-4 text-white" />
        </div> */}
      </div>
      <div className=" border h-[62px] max-w-[1107px] flex items-center justify-between border-[rgb(239,241,244)] rounded-[8px] p-2 ">
        <div className=" w-1/2 flex h-full items-center max-w-[435px]  bg-white rounded-[8px]">
          <SearchIcon className=" w-4 h-4" />
          <input
            type="text"
            className=" shadow-none outline-none w-full h-full bg-transparent"
            placeholder="Search for stakeholders"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <div className=" flex items-center gap-3">
        <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
  <DialogTrigger className=" bg-[#0330AE] rounded-lg cursor-pointer items-center justify-center p-2 gap-2 w-fit flex text-white">     <span className=" font-bold text-sm">Add stakeholder</span>
          <PlusIcon className=" w-4 h-4 text-white" /></DialogTrigger>
  <DialogContent className="  max-w-[408px] w-full rounded-[8px] bg-white  shadow-lg flex flex-col gap-[10px] border p-6 items-center">
            <p>Project stakeholder</p>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">
                Username
              </p>
              <input
                type="text"
                onChange={(e) => handleChange("userId", e.target.value)}
                placeholder="Username"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
                value={inputs.userId}
              />
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">
               Role
              </p>
            <Select  onValueChange={(value) => handleChange("role", value)}>
          <SelectTrigger  className=" w-full bg-[#F3F4F6] px-2 text-[#B3B3B6]">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role: string) => 
            
            <SelectItem key={role} value={role}>{role}</SelectItem>
            )}

          </SelectContent>
        </Select>
 
            </div>
            <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Name</p>
              <input
                type="text"
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="name"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
                value={inputs.name}
              />
            </div>
            {/* <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Project Id</p>
              <input
                type="text"
                onChange={(e) => handleChange("projectId", e.target.value)}
                placeholder="project id"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
              />
            </div> */}

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
            <div className=" w-full">
              <DialogClose onClick={() => setExpandLoading(null)} className=" w-full  text-[#8D8D91]  text-sm border-none py-3">
                Cancel
              </DialogClose>
            </div>
  </DialogContent>
</Dialog>

        </div>
      </div>
      <div className=" bg-white max-w-[1107px] w-full rounded-lg">
        <Table className="">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className=" bg-[rgb(250,251,251)]">
            <TableRow>
              <TableHead className=" bg-transparent">Username</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Projects</TableHead>


            </TableRow>
          </TableHeader>
          <TableBody>

              {searchStakeholders()?.map((project) => {
                return <TableRow key={project.id} className=" border-b border-b-[rgb(234,236,240)] py-4">
                     <TableCell className="font-medium text-sm text-[#101828]">
                {project.userId}
              </TableCell>
    
              <TableCell className="text-sm text-[#42526D]">
                
                <div className="bg-[#ECFDF3] rounded-[16px] w-fit  px-2 py-2 text-xs font-medium ">
                  {project.role}
                </div>
              </TableCell>
              <TableCell>
                {project.name}
              </TableCell>
              <TableCell>
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
                                onClick={() => handleDelete(project.id)}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

              </TableCell>
              <TableCell>
                      {expandLoading === project.id ? (
                        <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                      ) : (
                        <EditIcon
                          onClick={() => handleExpand(project.id)}
                          className=" w-4 h-4 cursor-pointer rotate-45"
                        />
                      )}
                    </TableCell>
                </TableRow>
              })}
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

export default ProjectStakeholders;
