"use client";
import DashboardSidebar from "@/components/dashboardSidebar";
import DashboardTopBar, { PathDetails } from "@/components/dashboardTopBar";
import { usePathname } from "next/navigation";
import React from "react";

interface Nav {
  [key: string]: PathDetails;
}
const nav: Nav = {
  website: {
    pathname: "Website",
    paths: [
      {
        name: "preview",
        path: "/kajd/website/preview",
      },
      {
        name: "analytics",
        path: "/dkjsd/website/analytics",
      },
      {
        name: "optimize",
        path: "/sdjk/website/optimization",
      },
      {
        name: "domain",
        path: "/sdlsld/website/domain",
      },
      {
        name: "settings",
        path: "/sdlks/website/settings",
      },
    ],
  },
  "content-generator": {
    pathname: "Content Generator",
    paths: [
      {
        name: "generate",
        path: "/sdksdj/content/preview",
      },
      {
        name: "analytics",
        path: "/sdjsk/content/analytics",
      },
      {
        name: "optimize",
        path: "/kdjksd/content/optimize",
      },
      {
        name: "domain",
        path: "/sdkjs/content/domain",
      },
      {
        name: "settings",
        path: "/sdksj/content/settings",
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
  const pathname = usePathname();
  const pathSplit = pathname.split("/")[2];
  const findPath = nav[pathSplit];
  return (
    <div className=" flex relative bg-[#F9FAFB] font-sans">
      <div className=" sticky z-20 bg-white h-screen left-0">
        <DashboardSidebar />
      </div>
      <div className=" flex flex-col  pl-[43px] w-full">
        <div className=" sticky top-0">
          <DashboardTopBar pathIdentity={findPath} />
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
