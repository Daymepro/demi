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
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { formatDate } from "@/utils/formatDate";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { format, formatISO } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

type Invoice = {
  id: number;
  organizationId: string;
  customerName: string;
  invoiceNo: string;
  customerId: number;
  amount: number;
  active: boolean;
  paid: boolean;
  dueDate: Date;
};
type Props = {
  params: {
    customerid: string;
  };
};
const Invoice = (props: Props) => {
  const [invoice, setInvoice] = useState<Invoice[]>([]);
  const [params, setParams] = useState({
    total: 0,
  });
  const { user } = useAuth();
  const [isLoading, setisLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const { token } = useAuth();
  const [inputs, setInputs] = useState<Invoice>({
    dueDate: new Date(),
  } as Invoice);
  const [tableLoading, setTableLoading] = useState(false);
  const { customerid } = props.params;
  const [expandLoading, setExpandLoading] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const handleChange = (name: string, value: string | boolean) => {
    setInputs((values) => ({ ...values, [name]: value }));
  };
  useEffect(() => {
    const fetchinvoice = async () => {
      setTableLoading(true);
      try {
        const response = await apiService.get(
          `/api/Invoice/GetAllInvoices/${customerid}?search=""&page=${currentPage}&pageSize=${pageSize}`,
          { Authorization: `Bearer ${token}` }
        );
        console.log(response);
        if (response.succeeded !== false) {
          setInvoice(response.invoices);
          setParams({
            total: response.total,
          });
        } else {
          console.log(response.responseMessage);
        }
        setTableLoading(false);
      } catch (error) {
        console.log(error);
        setTableLoading(false);
      }
    };
    fetchinvoice();
  }, [currentPage, token]);
  function searchInvoice() {
    let query = search.toLowerCase();
    const comm = invoice?.filter((invoice) => {
      const searchableProperties = [
        invoice?.customerName,
        invoice?.invoiceNo,
        invoice?.amount.toString(),
      ].map((prop) => prop?.toLowerCase());
      return searchableProperties?.some((prop) => prop?.includes(query));
    });
    return comm;
  }
  const handleSubmit = async () => {
    setisLoading(true);
    try {
      const resp = await apiService.post(
        "/api/Invoice/CreateInvoice",
        {
          ...inputs,
          dueDate: formatISO(inputs.dueDate, { representation: "complete" }),
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(resp);
      if (resp.succeeded === true) {
        setInvoice([...invoice, resp.invoice]);
        setOpen(false);
      }
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };
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
  const handleStartDateChange = (date: Date) => {
    setInputs((prev) => ({
      ...prev,
      dueDate: date,
    }));
  };
  const handleUpdate = async () => {
    setisLoading(true);
    try {
      const resp = await apiService.put(
        `/api/Invoice/UpdateInvoice/${expandLoading}`,
        {
          ...inputs,
          dueDate: formatISO(inputs.dueDate, { representation: "complete" }),
          customerId: customerid,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (resp.succeeded === true) {
        setOpen(false);
        setExpandLoading(null);
        setisLoading(false);
        const updatedInvoice = resp.invoice;
        const index = invoice.findIndex(
          (invoice) => invoice.id === expandLoading
        );
        if (index !== -1) {
          const updatedInvoices = [...invoice];
          updatedInvoices[index] = updatedInvoice;
          setInvoice(updatedInvoices);
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
      handleSubmit();
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const resp = await apiService.delete(`/api/Invoice/DeleteInvoice/${id}`, {
        Authorization: `Bearer ${token}`,
      });
      console.log(resp);
      if (resp.succeeded === true) {
        setOpen(false);
        setInvoice((prev) => prev.filter((invoice) => invoice.id !== id));
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
      const resp = await apiService.get(`/api/Invoice/GetInvoiceById/${id}`, {
        Authorization: `Bearer ${token}`,
      });
      console.log(resp);
      if (resp.succeeded === true) {
        setInputs(resp.invoice);
        setOpen(true);
      } else {
        setExpandLoading(null);
      }
    } catch (error) {
      setExpandLoading(null);
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
        {open && (
          <div className=" fixed z-30 top-0 left-0 right-0 bottom-0 grid place-items-center bg-[rgba(0,0,0,0.5)]">
            <div className="  max-w-[408px] w-full rounded-[8px] bg-white  shadow-lg flex flex-col gap-[10px] border p-6 items-center">
              <p>Invoice</p>
              <div className=" w-full ">
                <p className=" text-[13px] mb-2 text-[#677189]">
                  Customer Name
                </p>
                <input
                  type="text"
                  value={inputs.customerName}
                  onChange={(e) => handleChange("customerName", e.target.value)}
                  placeholder="Company name"
                  className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
                />
              </div>
              <div className=" w-full ">
                <p className=" text-[13px] mb-2 text-[#677189]">Invoice ID</p>
                <input
                  type="text"
                  value={inputs.invoiceNo}
                  onChange={(e) => handleChange("invoiceNo", e.target.value)}
                  placeholder="Invoice No"
                  className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
                />
              </div>
              {/* <div className=" w-full ">
              <p className=" text-[13px] mb-2 text-[#677189]">Action</p>
              <input
                type="text"
                value={inputs.action}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Action"
                className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
              />
            </div> */}
              <div className=" w-full ">
                <p className=" text-[13px] mb-2 text-[#677189]">Amount</p>
                <input
                  type="number"
                  value={inputs.amount}
                  onChange={(e) => handleChange("amount", e.target.value)}
                  placeholder="Amount"
                  className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
                />
              </div>
              <div className=" w-full ">
                <p className=" text-[13px] mb-2 text-[#677189] ">Due date</p>
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
                  <PopoverContent
                    className="w-auto p-0 z-[600000000000000]"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={inputs.dueDate as unknown as Date}
                      onSelect={(d) => handleStartDateChange(d as Date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              {expandLoading !== null && (
                <div className=" w-full flex items-center justify-between ">
                  <p className=" text-[13px] mb-2 text-[#677189]">Active</p>
                  <Switch
                    className=""
                    defaultChecked={inputs.active}
                    onCheckedChange={(e) => handleChange("active", e)}
                  />
                </div>
              )}
                 {expandLoading !== null && (
                <div className=" w-full flex items-center justify-between ">
                  <p className=" text-[13px] mb-2 text-[#677189]">Paid</p>
                  <Switch
                    className=""
                    defaultChecked={inputs.paid}
                    onCheckedChange={(e) => handleChange("paid", e)}
                  />
                </div>
              )}

              <div className=" w-full">
                <button
                  onClick={onSubmit}
                  className="grid place-items-center items-center justify-center w-full bg-ai-button-blue text-white text-sm rounded-[4px] py-3"
                >
                  {isLoading ? (
                    <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                  ) : expandLoading ? (
                    "Update Invoice"
                  ) : (
                    "Add Invoice"
                  )}
                </button>
              </div>
              <div
                onClick={() => {
                  setOpen(false);
                  setExpandLoading(null);
                }}
                className=" cursor-pointer text-center w-full"
              >
                <div className=" w-full  text-[#8D8D91]  text-sm border-none py-3">
                  Cancel
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
      <div className=" border h-[62px] max-w-[1107px] flex items-center justify-between border-[rgb(239,241,244)] rounded-[8px] p-2 ">
        <div className=" w-1/2 flex h-full items-center max-w-[435px]  bg-white rounded-[8px]">
          <SearchIcon className=" w-4 h-4" />
          <input
            type="text"
            className=" shadow-none outline-none w-full h-full bg-transparent"
            placeholder="Search invoice"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <div className=" flex items-center gap-3">
        <div
          onClick={() => setOpen(true)}
          className=" bg-[#0330AE] rounded-lg cursor-pointer items-center justify-center p-2 gap-2 w-fit flex text-white"
        >
          {" "}
          <span className=" font-bold text-sm">Create Invoice</span>
          <PlusIcon className=" w-4 h-4 text-white" />
        </div>
        </div>
      </div>
      <div className=" bg-white max-w-[1107px] w-full rounded-lg">
        <Table className="">
          {/* {invoice.length === 0 && <TableCaption>No invoices</TableCaption>} */}
          <TableHeader className=" bg-[rgb(250,251,251)]">
            <TableRow>
              <TableHead className=" bg-transparent">Customer</TableHead>
              <TableHead>Invoice ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Active</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableLoading ? (
              <TableRow>
                <TableCell>
                  <Skeleton className=" w-full h-[20px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className=" w-full h-[20px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className=" w-full h-[20px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className=" w-full h-[20px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className=" w-full h-[20px]" />
                </TableCell>
              </TableRow>
            ) : (
              searchInvoice().map((Invoice, id) => {
                return (
                  <TableRow
                    key={id}
                    className=" border-b border-b-[rgb(234,236,240)] py-4"
                  >
                    <TableCell className="font-medium text-sm text-[#101828]">
                      {Invoice.customerName}
                    </TableCell>
                    <TableCell>{Invoice.invoiceNo}</TableCell>

                    <TableCell>{formatDate(Invoice.dueDate)}</TableCell>
                    <TableCell>${Invoice.amount}</TableCell>
                    <TableCell>
                      {Invoice.paid ? (
                        <div className=" w-fit h-fit text-xs text-[#0A6555] bg-[#D6FFF8] px-2 py-2 rounded-[16px] ">
                          Paid
                        </div>
                      ) : (
                        <div className=" w-fit rounded-[16px] h-fit text-xs text-[#F28A10] bg-[#F8F1E4] px-2 py-2 ">
                          Unpaid
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                    <div
                        className={clsx(
                          " rounded-[16px] w-fit  px-2 py-2 text-xs font-medium",
                          {
                            " bg-green-600 text-white": Invoice.active,
                            "bg-[#D6F3FF] text-[#0A3465]": !Invoice.active,
                          }
                        )}
                      >
                        {Invoice.active ? "Active" : "Inactive"}
                      </div>
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
                                permanently delete this entry and remove your
                                data from the servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                className=" bg-ai-button-blue"
                                onClick={() => handleDelete(Invoice.id)}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      }
                    </TableCell>
                    <TableCell>
                      {expandLoading === Invoice.id ? (
                        <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                      ) : (
                        <EditIcon
                          onClick={() => handleExpand(Invoice.id)}
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

export default Invoice;
