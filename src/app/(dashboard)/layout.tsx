"use client";
import DashboardSidebar from "@/components/dashboardSidebar";
import DashboardTopBar, { PathDetails } from "@/components/dashboardTopBar";
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
        name: "customer",
        path: "/website/customer",
      },
      {
        name: "contact",
        path: "/website/contact",
      },
      {
        name: "project",
        path: "/website/project",
      },
      {
        name: "project-stakeholders",
        path: "/website/project-stakeholder",
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
  "settings": {
    pathname: "Settings",
    paths: [

    ],
  },
};

const Dashboard = ({ children }: { children: React.ReactNode }) => {

const {user, isLoaded} = useAuth()
  const pathname = usePathname();
  const pathSplit = pathname.split("/")[1];
  const findPath = nav[pathSplit];
  useEffect(() => {
    if(!isLoaded) return
    if(!user) {
      redirect('/signin')
    }

  }, [])
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = original
    } 

  }, [])
  return (
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
  );
};

export default Dashboard;
