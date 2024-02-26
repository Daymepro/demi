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
import { ListFilter, ListFilterIcon, SearchIcon } from "lucide-react";
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
  


type Contact = {
  "organizationId": string,
  "id": number,
  "firstName": string,
  "lastName": string,
  "email": string,
  "mobileNumber": string,
  "customer": string,
  "customerId": number
}
const Contact = () => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [params, setParams] = useState({
    total: 0
  })
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const {token } = useAuth()

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await apiService.get(`/api/Contact/GetAllContacts?${search}&page=${currentPage}&pageSize=10`, {'Authorization' : `Bearer ${token}`})
        console.log(response)
        if(response.succeeded !== false) {
          setContacts(response.contacts)
        } else {
          console.log(response.responseMessage)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchContacts()
  }, [search, currentPage, token])
  return (
    <main className=" flex gap-10 remove-scrollbar h-screen pb-[120px]  overflow-y-scroll  flex-col">
      <div className=" flex justify-between">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Last 15 days" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <div className=" bg-[#0330AE] rounded-lg cursor-pointer items-center justify-center p-2 gap-2 w-fit flex text-white">
          <span className=" font-bold text-sm">Edit website</span>
          <PaintBrushIcon className=" w-4 h-4 text-white" />
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
              <TableHead className=" bg-transparent">First name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead >Phone Number</TableHead>
              <TableHead >Customer</TableHead>

            </TableRow>
          </TableHeader>
          <TableBody>

              {contacts.map((contact) => {
                return <TableRow key={contact.id} className=" border-b border-b-[rgb(234,236,240)] py-4">
                     <TableCell className="font-medium text-sm text-[#101828]">
                {contact.firstName}
              </TableCell>
              <TableCell>
                {contact.lastName}
              </TableCell>
              <TableCell className="text-sm text-[#42526D]">
                
                <div className="bg-[#ECFDF3] rounded-[16px] w-fit  px-2 py-2 text-xs font-medium ">
                  {contact.email}
                </div>
              </TableCell>
              <TableCell>
                {contact.mobileNumber}
              </TableCell>
              <TableCell>
                {contact.customer}
              </TableCell>
                </TableRow>
              })}
          </TableBody>
        </Table>
        <Pagination className=" px-4 pb-7 pt-2">
  <PaginationContent className=" w-full flex items-center justify-between ">
    <PaginationItem className=" border rounded-[8px] border-[rgb(208,213,221)]">
      <PaginationPrevious href="#" />
    </PaginationItem>
    <div className=" flex text-sm font-medium items-center gap-2">
    <PaginationItem className=" text-[#667085]">
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem className=" text-[#667085]">
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem className=" text-[#667085]">
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem className="text-[#667085]">
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink className=" text-[#667085]" href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem className=" text-[#667085]">
      <PaginationLink href="#">5</PaginationLink>
    </PaginationItem>
    <PaginationItem className=" text-[#667085]">
      <PaginationLink href="#">6</PaginationLink>
    </PaginationItem>
    </div>
    
    <PaginationItem className=" border rounded-[8px] border-[rgb(208,213,221)]">
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

      </div>
    </main>
  );
};

export default Contact;
