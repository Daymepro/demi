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
import {
  DocumentTextIcon,
  ListBulletIcon,
  PaintBrushIcon,
} from "@heroicons/react/16/solid";
import {
  ArrowLeft,
  ArrowRight,
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
import { toast } from "sonner";

type Document = {
  fileName: string;
  documentType: string;
  file: File;
  id: number;
};
const Document = () => {
  const [documents, setdocuments] = useState<Document[]>([]);
  const [params, setParams] = useState({
    total: 0,
  });
  const [pageSize, setPageSize] = useState(10);

  const [isLoading, setisLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { token } = useAuth();
  const [inputs, setInputs] = useState<Document>({} as Document);
  const [open, setOpen] = useState(false);

  const handleChange = (name: string, value: string | File | null) => {
    setInputs((values) => ({ ...values, [name]: value }));
  };
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await apiService.get(
          `/api/Document/GetAllDocuments?page=${currentPage}&pageSize=${pageSize}`,
          { Authorization: `Bearer ${token}` }
        );
        console.log(response);
        if (response.succeeded !== false) {
          setdocuments(response.documents);
        } else {
          console.log(response.responseMessage);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDocuments();
  }, [currentPage, token]);
  function searchDocument() {
    let query = search.toLowerCase();
    const comm = documents?.filter((document) => {
      const searchableProperties = [document?.fileName].map((prop) =>
        prop?.toLowerCase()
      );
      return searchableProperties?.some((prop) => prop?.includes(query));
    });
    return comm;
  }
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
  const handleDelete = async (id: number) => {
    try {
      const resp = await apiService.delete(
        `/api/Document/DeleteDocument/${id}`,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(resp);
      if (resp.succeeded === true) {
        setOpen(false);
        setdocuments((prev) => prev.filter((docs) => docs.id !== id));
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
  const handleSubmit = async () => {
    setisLoading(true);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(inputs.file);
    fileReader.onload = async function () {
      const result = fileReader.result;
      if (typeof result === "string") {
        const base64String = result.split(",")[1];

        // Append base64 string to FormData
        console.log(base64String);

        try {
          const resp = await apiService.post(
            "/api/Document/UploadDocument",
            {
              file: base64String,
              documentType: inputs.documentType,
              fileName: inputs.fileName,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(resp);
          if (resp.succeeded === true) {
            setOpen(false);
            // Do something if the upload succeeded
          }
          setisLoading(false);
        } catch (error) {
          setisLoading(false);
        }
      } else {
        // Handle error or unexpected result
        console.error("Unexpected result type:", typeof result);
        setisLoading(false);
      }
    };
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
      </div>
      <div className=" border h-[62px] max-w-[1107px] flex items-center justify-between border-[rgb(239,241,244)] rounded-[8px] p-2 ">
        <div className=" w-1/2 flex h-full items-center max-w-[435px]  bg-white rounded-[8px]">
          <SearchIcon className=" w-4 h-4" />
          <input
            type="text"
            className=" shadow-none outline-none w-full h-full bg-transparent"
            placeholder="Search Document"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <div className=" flex items-center gap-3">
          <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
            <DialogTrigger className=" bg-[#0330AE] rounded-lg cursor-pointer items-center justify-center p-2 gap-2 w-fit flex text-white">
              {" "}
              <span className=" font-bold text-sm">Add Document</span>
              <PlusIcon className=" w-4 h-4 text-white" />
            </DialogTrigger>
            <DialogContent className="  max-w-[408px] w-full rounded-[8px] bg-white  shadow-lg flex flex-col gap-[10px] border p-6 items-center">
              <p>Document</p>
              <div className=" w-full ">
                <p className=" text-[13px] mb-2 text-[#677189]">File Name</p>
                <input
                  type="text"
                  value={inputs.fileName}
                  onChange={(e) => handleChange("fileName", e.target.value)}
                  placeholder="File name"
                  className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
                />
              </div>
              <div className=" w-full ">
                <p className=" text-[13px] mb-2 text-[#677189]">
                  Document Type
                </p>
                <input
                  type="text"
                  value={inputs.documentType}
                  onChange={(e) => handleChange("documentType", e.target.value)}
                  placeholder="Document type"
                  className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
                />
              </div>
              <div className=" w-full ">
                <p className=" text-[13px] mb-2 text-[#677189]">File</p>
                <input
                  type="file"
                  accept=".pdf"
                  // value={inputs.file}
                  onChange={(e) =>
                    handleChange(
                      "file",
                      !e.target.files ? null : e.target.files[0]
                    )
                  }
                  placeholder="file"
                  className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
                />
              </div>

              <div className=" w-full">
                <button
                  onClick={handleSubmit}
                  className="grid place-items-center items-center justify-center w-full bg-ai-button-blue text-white text-sm rounded-[4px] py-3"
                >
                  {isLoading ? (
                    <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                  ) : (
                    "Add Document"
                  )}
                </button>
              </div>
              <div className=" w-full">
                <DialogClose className=" w-full  text-[#8D8D91]  text-sm border-none py-3">
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
              <TableHead className=" bg-transparent">File Name</TableHead>
              <TableHead>Document Type</TableHead>
              <TableHead>File</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {searchDocument().map((document, id) => {
              return (
                <TableRow
                  key={id}
                  className=" border-b border-b-[rgb(234,236,240)] py-4"
                >
                  <TableCell className="font-medium text-sm text-[#101828]">
                    {document.fileName}
                  </TableCell>
                  <TableCell>{document.documentType}</TableCell>

                  <TableCell>
                    <div className=" w-full h-full bg-[#EBF1FC] rounded-[8px] px-2">
                      <DocumentTextIcon className=" w-4 h-4 text-ai-button-blue" />
                      <span>Download file as pdf</span>
                    </div>
                    {/* {document.file} */}
                  </TableCell>
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
                            <AlertDialogAction
                              className=" bg-ai-button-blue"
                              onClick={() => handleDelete(document.id)}
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    }
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

export default Document;
