"use client";
import DashboardSidebar from "@/components/dashboardSidebar";
import DashboardTopBar, { PathDetails } from "@/components/dashboardTopBar";
import ProtectedRoute from "@/components/protectedRoute";
import UserContext, { useAuth } from "@/context/UserContext";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";

interface Nav {
  [key: string]: PathDetails;
}
const nav: Nav = {
  website: {
    pathname: "Website",
    paths: [
      {
        name: "preview",
        path: "/website/preview",
      },
      {
        name: "analytics",
        path: "/website/analytics",
      },
      {
        name: "optimize",
        path: "/website/optimization",
      },
      {
        name: "domain",
        path: "/website/domain",
      },
      {
        name: "settings",
        path: "/website/settings",
      },

    ],
  },
  "content-generator": {
    pathname: "Content Generator",
    paths: [
      {
        name: "generate",
        path: "/content/preview",
      },
      {
        name: "analytics",
        path: "/content/analytics",
      },
      {
        name: "optimize",
        path: "/content/optimize",
      },
      {
        name: "domain",
        path: "/content/domain",
      },
      {
        name: "settings",
        path: "/content/settings",
      },
    ],
  },
  "project": {
    pathname: "Project",
    paths: [
      {
        name: "project",
        path: "/project/project",
      },
    ],
  },
  "customer": {
    pathname: "Customer",
    paths: [
      {
        name: "customer",
        path: "/customer/customer",
      },
      {
        name: "lead",
        path: "/customer/lead",
      },
      {
        name: "opportunity",
        path: "/customer/opportunity",
      },

    ],
  },
  "document": {
    pathname: "Document",
    paths: [

    ],
  },

  "support": {
    pathname: "Support Ticket",
    paths: [

    ],
  },
  "settings": {
    pathname: "Settings",
    paths: [

    ],
  },
  "task": {
    pathname: "Task",
    paths: [

    ],
  },
  "project-stakeholder": {
    pathname: "Project stakeholder",
    paths: [

    ],
  },
};

const Dashboard = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname();
  // const pathSplit = pathname.split("/")[1];
  const getPath = () => {
    const splitPath =  pathname.split("/")
    if(splitPath.length === 3){
      return splitPath[1]
    } else if(splitPath.length === 4){
      return splitPath[3]
    }
  }
  
  const findPath = nav[getPath() as keyof typeof nav];

  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    } 

  }, [])
  return (
    <ProtectedRoute>
    <div className=" flex relative overflow-hidden bg-[#F9FAFB] font-sans">
      <div className=" sticky z-20 bg-white h-screen left-0">
        <DashboardSidebar />
      </div>
      <div className=" flex flex-col  pl-[43px] w-full">
        <div className=" sticky top-0">
      {findPath &&    <DashboardTopBar pathIdentity={findPath} />}
        </div>
        <div>
          <div className="">
            <div className="  pt-4  pr-2 ">{children}</div>
          </div>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
