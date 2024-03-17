"use client";
import {
  ChatBubbleLeftRightIcon,
  PaintBrushIcon,
} from "@heroicons/react/16/solid";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { ScrollText } from "lucide-react";

import React, { useState } from "react";

const optimization = [
  {
    icon: <BuildingOffice2Icon className=" w-4 h-4 text-ai-button-blue" />,
    title: "Claim a custom domain",
    content: "Make your business stand out with a custom domain",
    info: "A customer domain name looks professional and more memorable for customers",
  },
  {
    icon: <BuildingOffice2Icon className=" w-4 h-4 text-ai-button-blue" />,
    title: "Seo suggestions",
    content: "Make your business stand out with a custom domain",
    info: "SEO improves where your website ranks on search engines like google",
  },
  {
    icon: <ScrollText className=" w-4 h-4 text-ai-button-blue" />,
    title: "Create your content",
    content: "Make your business stand out with a custom domain",
    info: "A blog drives traffic to your website, engage customers and improve SEO",
  },
  {
    icon: <ChatBubbleLeftRightIcon className=" w-4 h-4 text-ai-button-blue" />,
    title: "Add social links",
    content: "Make your business stand out with a custom domain",
    info: "A blog drives traffic to your website, engage customers and improve SEO",
  },
];

const Optimization = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const toggleExpanded = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <main className=" flex gap-10  h-full max-h-screen pb-[120px]  overflow-y-scroll   items-center flex-col">
      <div className=" flex self-end items-center gap-3">
        <button className="bg-[rgba(3,49,174,0.03)] text-sm font-semibold p-2  rounded-lg text-[rgb(0,48,173)]">
          Publish
        </button>
        <button
          className=" text-white flex items-center gap-1 p-2
             rounded-lg bg-ai-button-blue "
        >
          <span className=" text-sm font-semibold">Edit</span>
          <PaintBrushIcon className=" w-4 h-4" />{" "}
        </button>
      </div>

      <div className="max-w-[593px] p-4 bg-white  w-full rounded-[16px] flex flex-col">
        <div className="  w-full flex flex-col gap-6">
          <p className=" font-bold text-[#000103]">Optimization suggestions</p>
          <div className=" flex flex-col gap-2">
            {optimization.map((opt, i) => (
              <>
                <div
                  key={i}
                  className=" px-[37px] py-[20px] flex justify-between items-center rounded-[8px] bg-[#F9FAFB]"
                >
                  <div className=" flex items-center gap-3">
                    <div className=" bg-white rounded-lg p-5">{opt.icon}</div>
                    <div>
                      <p className=" font-bold text-[20px] ">{opt.title}</p>
                      <p className=" font-normal text-base">{opt.content}</p>
                    </div>
                  </div>

                  <p
                    onClick={() => toggleExpanded(i)}
                    className=" text-ai-button-blue font-bold text-sm cursor-pointer"
                  >
                    {expanded[i] ? "Close" : "View"}
                  </p>
                </div>
                <div
                  style={{
                    transition: "height 0.2s ease-in-out",
                  }}
                  className={`${
                    expanded[i]
                      ? "h-[100px]   py-[20px] "
                      : " h-0 overflow-y-hidden  "
                  }flex px-[20px]  w-full items-center gap-2 rounded-[4px] bg-[#F5FBFF]  `}
                >
                  <svg
                    width="12.023438"
                    height="12.000000"
                    viewBox="0 0 12.0234 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Vector"
                      d="M11.7598 5.2453L10.9473 4.29516C10.7969 4.11476 10.6719 3.778 10.6719 3.53746L10.6719 2.51516C10.6719 1.87773 10.1484 1.35455 9.50977 1.35455L8.48828 1.35455C8.24805 1.35455 7.9043 1.22826 7.72461 1.07792L6.77344 0.266098C6.35938 -0.0886993 5.67969 -0.0886993 5.26562 0.266098L4.30273 1.07792C4.12305 1.22826 3.78516 1.35455 3.54492 1.35455L2.50391 1.35455C1.86719 1.35455 1.34375 1.87773 1.34375 2.51516L1.34375 3.53746C1.34375 3.77199 1.22461 4.10875 1.07422 4.28915L0.261719 5.2453C-0.0878906 5.66625 -0.0878906 6.33976 0.261719 6.74868L1.07422 7.70484C1.22461 7.87923 1.34375 8.222 1.34375 8.45653L1.34375 9.48484C1.34375 10.1223 1.86719 10.6455 2.50391 10.6455L3.55078 10.6455C3.78516 10.6455 4.12891 10.7717 4.30859 10.9221L5.25977 11.7339C5.67383 12.0887 6.35352 12.0887 6.76758 11.7339L7.71875 10.9221C7.89844 10.7717 8.23633 10.6455 8.47656 10.6455L9.49805 10.6455C10.1367 10.6455 10.6582 10.1223 10.6582 9.48484L10.6582 8.46254C10.6582 8.222 10.7852 7.88524 10.9355 7.70484L11.748 6.7547C12.1133 6.34578 12.1133 5.66625 11.7598 5.2453ZM5.55859 3.67577C5.55859 3.42922 5.76367 3.22476 6.00977 3.22476C6.25781 3.22476 6.46094 3.42922 6.46094 3.67577L6.46094 6.58031C6.46094 6.82686 6.25781 7.03132 6.00977 7.03132C5.76367 7.03132 5.55859 6.82686 5.55859 6.58031L5.55859 3.67577ZM6.00977 8.9316C5.67969 8.9316 5.4082 8.66099 5.4082 8.33024C5.4082 7.9995 5.67383 7.72889 6.00977 7.72889C6.3418 7.72889 6.61133 7.9995 6.61133 8.33024C6.61133 8.66099 6.34766 8.9316 6.00977 8.9316Z"
                      fill="#1E63A2"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <p className=" text-ai-button-blue text-[13px]">{opt.info}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Optimization;
