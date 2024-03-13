"use client";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Cog, EditIcon, MoreVertical, PlusIcon, TrashIcon } from "lucide-react";
import clsx from "clsx";
import { LoadingSpinner } from "@/components/loadingSpinner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/context/UserContext";
import { apiService } from "@/utils/apiService";
import { useRouter } from "next/navigation";
import PageLoader from "@/components/pageLoader";
import { hardCodeDefault } from "@/app/editor/funnels/[funnelId]/editor/[funnelPageId]/_components/funnel-editor";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageDetails } from "@/app/editor/funnels/[funnelId]/editor/[funnelPageId]/page";
import { v4 } from "uuid";
import { Skeleton } from "@/components/ui/skeleton";

type Website = {
  dateCreated: Date;
  description: string;
  favicon: string;
  lastUpdated: Date;
  name: string;
  published: boolean;
  url: string;
  websiteID: string;
  pages: PageDetails[];
};
const Preview = () => {
  const router = useRouter();

  const [inputs, setInputs] = useState<Website>({
    name: "",
    description: "",
  } as Website);
  const [open, setOpen] = useState(false);
  const [expandLoading, setExpandLoading] = useState<number | null>(null);
  const [isLoading, setisLoading] = useState(false);
  const [generateLoading, setGenerateLoading] = useState(false);
  const [websites, setWebsites] = useState<Website[]>([]);
  const { token, loading } = useAuth();
  const [publishLoading, setPublishLoading] = useState(false);
  const [pageInputs, setPageInputs] = useState({
    name: "",
    path: "",
  });
  const [webLoading, setWebLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const handleSubmit = async () => {
    setisLoading(true);
    try {
      const resp = await apiService.post(
        "/api/MyWebsite/CreateWebsite",
        inputs,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(resp);
      if (resp.succeeded === true) {
        setGenerateLoading(true);
        console.log(resp);
        const response = await apiService.post(
          `/api/MyWebsite/AddPage/${resp.website.websiteID}`,
          {
            path: "/",
            websiteID: resp.website.websiteID,
            content: JSON.stringify(hardCodeDefault),
            name: "Home",
          },
          {
            Authorization: `Bearer ${token}`,
          }
        );
        console.log(response);

        if (response.succeeded === true) {
          router.push(
            `/editor/funnels/${resp.website.websiteID}/editor/${response.page.id}`
          );
        }
      }
      setGenerateLoading(false);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };
  const handleChange = (name: string, value: string) => {
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const get = async () => {
    try {
      setWebLoading(true);
      const resp = await apiService.get("/api/MyWebsite/Websites", {
        Authorization: `Bearer ${token}`,
      });
      if (resp.succeeded === true) {
        setWebsites(resp.websites);
      }
      setWebLoading(false);
      console.log(resp);
    } catch (error) {}
  };
  const handleEditWebsite = async (id: string) => {
    setEditLoading(true);
    console.log(inputs)
    try {
      const response = await apiService.post(
        `/api/MyWebsite/UpdateWebsite/${id}`,
        {
          name: inputs.name,
          description: inputs.description,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(response)
      if (response.succeeded === true) {
        setEditLoading(false);
        toast("Success", {
          description: "Website updated successfully",
        })
      } else {
        toast("oops", {
          description: "Something went wrong",
        })
      }
      setEditLoading(false)
    } catch (error) {
      setEditLoading(false)
      toast("oops", {
        description: "Something went wrong",
      })
    }
  };
  useEffect(() => {
    get();
  }, [loading]);

  const handlePublish = async (id: string) => {
    setPublishLoading(true);
    try {
      const resp = await apiService.post(
        `/api/MyWebsite/publish/${id}`,
        {},
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(resp);
      if (resp.succeeded === true) {
        toast("Success", {
          description: "Website published",
        });
        const web = websites.find((website) => website.websiteID === id);
        if (web) {
          const webIndex = websites.findIndex(
            (website) => website.websiteID === id
          );
          if (webIndex !== -1) {
            const updatedwebsites = [...websites];
            updatedwebsites[webIndex] = { ...web, published: true };

            setWebsites(updatedwebsites);
          }
        }
      } else {
        toast("Opps", {
          description: "Something went wrong",
        });
      }
      setPublishLoading(false);
    } catch (error) {
      toast("Opps", {
        description: "Something went wrong",
      });
    }
  };
  const handleSubmitPage = async (websiteId: string) => {
    try {
      setGenerateLoading(true);
      const response = await apiService.post(
        `/api/MyWebsite/AddPage/${websiteId}`,
        {
          ...pageInputs,
          websiteID: websiteId,
          content: JSON.stringify([
            {
              id: v4(),
              styles: {},
              name: "Body",
              type: "__body",
              content: [],
            },
          ]),
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(response);

      if (response.succeeded === true) {
        router.push(`/editor/funnels/${websiteId}/editor/${response.page.id}`);
      }
    } catch (error) {
      toast("Opps", {
        description: "Something went wrong",
      });
    }

    setGenerateLoading(false);
    setisLoading(false);
  };

  const handlePageInputs = (name: string, value: string) => {
    setPageInputs((values) => ({ ...values, [name]: value }));
  };
  const handleDeleteWebsite = async (id: string) => {
    try {
      const response = await apiService.delete(
        `/api/MyWebsite/DeleteWebsite/${id}`,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (response.succeeded === true) {
        setWebsites((prev) =>
          prev.filter((website) => website.websiteID !== id)
        );
      } else {
        toast("opps", {
          description: "something went wrong",
        });
      }
    } catch (error) {
      toast("opps", {
        description: "something went wrong",
      });
    }
  };
  const handleDeletePage = async (id: number) => {
    const updatedWebsite = websites.map((website) => ({
      ...website,
      pages: website.pages.filter((page) => page.id !== id),
    }));
    console.log(updatedWebsite);
    try {
      const response = await apiService.delete(
        `/api/MyWebsite/DeletePage/${id}`,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(response);
      if (response.succeeded === true) {
        //  setWebsites(updatedWebsite)
      } else {
        toast("opps", {
          description: "something went wrong",
        });
      }
    } catch (error) {
      console.log(error);
      toast("opps", {
        description: "something went wrong",
      });
    }
  };

  return (
    <>
      {generateLoading ? (
        <div className=" absolute w-screen h-screen top-0 left-0 z-[400000000000000000]">
          <PageLoader message="Please wait while we generate your website" />
        </div>
      ) : (
        <div className=" flex flex-col overflow-y-scroll h-screen">
          <div className="flex items-center gap-3 self-end">
            <Dialog
              open={open}
              onOpenChange={(open) => {
                setOpen(open);
                if (!open) setInputs({} as Website);
                setExpandLoading(null);
              }}
            >
              <DialogTrigger className=" bg-[#0330AE] rounded-lg cursor-pointer items-center justify-center p-2 gap-2 w-fit flex text-white">
                {" "}
                <span className=" font-bold text-sm">Create Website</span>
              </DialogTrigger>
              <DialogContent className="  max-w-[408px] w-full rounded-[8px] bg-white  shadow-lg flex flex-col gap-[10px] border p-6 items-center">
                <p>Website</p>
                <div className=" w-full ">
                  <p className=" text-[13px] mb-2 text-[#677189]">
                    Website name
                  </p>
                  <input
                    type="text"
                    value={inputs.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Website name"
                    className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
                  />
                </div>
                <div className=" w-full ">
                  <p className=" text-[13px] mb-2 text-[#677189]">
                    Description
                  </p>
                  <input
                    type="text"
                    value={inputs.description}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    placeholder="Description"
                    className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
                  />
                </div>
                {/* <div className="  py-[10px] w-full">
                  <div className="rounded-[6px] p-2 bg-[#f9fafb] border flex items-center justify-between">
                    <div className=" bg-[#0330AE0F] text-sm rounded-[6px] font-medium text-[#00010399] py-[10px] px-5">
                      https://
                    </div>
                    <input
                      onChange={(e) => handleChange("url", e.target.value)}
                      className=" border-none text-[#B3B3B6]  bg-transparent outline-none shadow-none w-full h-full pl-2 "
                      type="text"
                    />
                    <div className=" bg-[#0330AE0F] text-sm rounded-[6px] text-[#00010399] font-medium py-[10px] px-5">
                      .aiwebhero
                    </div>
                  </div>
                  <div className=" text-[#00010380] mt-4 text-[13px]">
                    you can use letters (a-z), numbers (0-9), and - (dash)
                  </div>
                </div> */}

                <div className=" w-full">
                  <button
                    onClick={handleSubmit}
                    className="grid place-items-center items-center justify-center w-full bg-ai-button-blue text-white text-sm rounded-[4px] py-3"
                  >
                    {isLoading ? (
                      <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                    ) : (
                      "Create website"
                    )}
                  </button>
                </div>
                <div className=" w-full">
                  <DialogClose
                    onClick={() => setExpandLoading(null)}
                    className=" w-full  text-[#8D8D91]  text-sm border-none py-3"
                  >
                    Cancel
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
            {/* <button className="bg-[rgba(3,49,174,0.03)] text-sm font-semibold p-2  rounded-lg text-[rgb(0,48,173)]">
              Publish
            </button> */}
          </div>
          <div className=" flex items-center gap-3 flex-wrap mt-9">
            {webLoading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="rounded-lg w-fit px-3 py-3 bg-white">
                    <div className=" flex items-center gap-2 justify-between ">
                      <Skeleton className=" w-[100px] h-[20px]" />
                      <Skeleton className=" w-[100px] h-[20px]" />
                    </div>
                    <div className="w-[500px] mt-9 aspect-square rounded-lg">
                      <Skeleton className=" w-full h-[300px]" />
                    </div>
                  </div>
                ))
              : websites.map((website) => {
                  return (
                    <div key={website.websiteID} className=" rounded-lg w-fit px-3 bg-white">
                      <div className=" flex items-center justify-between gap-3 px-1 py-3 border-b">
                        <span className=" text-sm">{website.url}</span>
                        <div>
                          {website.published ? (
                            <div className=" w-fit h-fit text-xs text-[#0A6555] bg-[#D6FFF8] px-2 py-2 rounded-[16px] ">
                              published
                            </div>
                          ) : (
                            <div className=" w-fit rounded-[16px] h-fit text-xs text-[#F28A10] bg-[#F8F1E4] px-2 py-2 ">
                              unpublished
                            </div>
                          )}
                        </div>
                      </div>
                      {/* <iframe
                      src={`http://${website.url}`}
                      className="w-[500px] aspect-square rounded-lg"
                      frameBorder="0"
                    ></iframe> */}

                      <Popover>
                        <PopoverTrigger className=" flex items-center gap-1 text-[12px] text-[#abac9d] font-bold mt-3">
                          <Cog className=" w-4 h-4" />
                          <span>Settings</span>
                        </PopoverTrigger>
                        <PopoverContent className=" py-3 gap-3 px-4 flex flex-col h-fit w-fit  rounded-md shadow-md">
                          <div className=" flex mt-4 items-center justify-between">
                            <Button
                              onClick={() => handlePublish(website.websiteID)}
                              className=" w-full px-6 py-2 rounded-[8px] flex items-center bg-[#12151C] justify-center border-[2px] border-[#1455FF] text-white font-semibold  text-sm"
                            >
                              {publishLoading ? (
                                <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                              ) : (
                                "Publish"
                              )}
                            </Button>
                          </div>
                          <Accordion type="multiple" className="w-full">
                            <AccordionItem value="Pages">
                              <AccordionTrigger>Pages</AccordionTrigger>
                              <AccordionContent>
                                {website.pages.map((page) => {
                                  return (
                                    <div key={page.id} className=" flex justify-between">
                                      <span>{page.name}</span>
                                      <Popover>
                                        <PopoverTrigger>
                                          <MoreVertical className=" w-4 h-4" />
                                        </PopoverTrigger>
                                        <PopoverContent className=" w-fit">
                                          <Button
                                            onClick={() =>
                                              router.push(
                                                `/editor/funnels/${website.websiteID}/editor/${page.id}`
                                              )
                                            }
                                            className=" w-full flex mt-3 items-center justify-between"
                                          >
                                            <span>Edit page</span>
                                            <EditIcon className=" w-4 h-4" />
                                          </Button>
                                          <Button
                                            className=" bg-red-600 w-full flex items-center mt-5 justify-between"
                                            onClick={() =>
                                              handleDeletePage(page.id)
                                            }
                                          >
                                            Delete page{" "}
                                            <TrashIcon className=" w-4 h-4" />{" "}
                                          </Button>
                                        </PopoverContent>
                                      </Popover>
                                    </div>
                                  );
                                })}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                          <Dialog>
                            <DialogTrigger
                              className=" w-fit
                         flex items-center gap text-sm bg-ai-button-blue px-3 py-2 rounded-[8px] text-white"
                            >
                              <span>Edit website</span>
                              <EditIcon className=" w-4 h-4" />
                            </DialogTrigger>
                            <DialogContent className=" max-w-[408px] w-full rounded-[8px] bg-white  shadow-lg flex flex-col gap-[10px] border p-6 items-center">
                              <div className=" w-full">
                                <p className=" text-[13px] mb-2 text-[#677189]">
                                  Website name
                                </p>
                                <input
                                  type="text"
                                  className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
                                  placeholder="website name"
                                  value={inputs.name}
                                  onChange={(e) =>
                                    handleChange("name", e.target.value)
                                  }
                                />
                              </div>
                              <div className=" w-full">
                                <p className=" text-[13px] mb-2 text-[#677189]">
                                  Description
                                </p>
                                <input
                                  type="text"
                                  className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
                                  placeholder="Description"
                                  value={inputs.description}
                                  onChange={(e) =>
                                    handleChange("description", e.target.value)
                                  }
                                />
                              </div>
                              <div className=" w-full">
                                <button
                                  onClick={() =>
                                    handleEditWebsite(website.websiteID)
                                  }
                                  className="grid place-items-center items-center justify-center w-full bg-ai-button-blue text-white text-sm rounded-[4px] py-3"
                                >
                                  {editLoading ? (
                                    <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                                  ) : (
                                    "Update website"
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
                          <Dialog>
                            <DialogTrigger className=" w-fit text-sm bg-ai-button-blue px-3 py-2 rounded-[8px] text-white">
                              Add new page
                            </DialogTrigger>

                            <DialogContent className="  max-w-[408px] w-full rounded-[8px] bg-white  shadow-lg flex flex-col gap-[10px] border p-6 items-center">
                              <p>Page</p>
                              <div className=" w-full ">
                                <p className=" text-[13px] mb-2 text-[#677189]">
                                  Page name
                                </p>
                                <input
                                  type="text"
                                  value={pageInputs.name}
                                  onChange={(e) =>
                                    handlePageInputs("name", e.target.value)
                                  }
                                  placeholder="Page name"
                                  className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]  w-full py-2 rounded-[4px]"
                                />
                              </div>
                              <div className=" w-full ">
                                <p className=" text-[13px] mb-2 text-[#677189]">
                                  Path
                                </p>
                                <input
                                  type="text"
                                  value={pageInputs.path}
                                  onChange={(e) =>
                                    handlePageInputs("path", e.target.value)
                                  }
                                  placeholder="Path"
                                  className=" bg-[#F3F4F6] px-2 text-[#B3B3B6]   w-full py-2 rounded-[4px]"
                                />
                              </div>

                              <div className=" w-full">
                                <button
                                  onClick={() =>
                                    handleSubmitPage(website.websiteID)
                                  }
                                  className="grid place-items-center items-center justify-center w-full bg-ai-button-blue text-white text-sm rounded-[4px] py-3"
                                >
                                  {pageLoading ? (
                                    <LoadingSpinner divClassName=" w-[20px] h-[20px]" />
                                  ) : (
                                    "Create page"
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
                          <Button
                            className=" bg-red-600 w-full flex items-center justify-between"
                            onClick={() =>
                              handleDeleteWebsite(website.websiteID)
                            }
                          >
                            Delete <TrashIcon className=" w-4 h-4" />{" "}
                          </Button>
                        </PopoverContent>
                      </Popover>
                    </div>
                  );
                })}
          </div>
        </div>
      )}
    </>
  );
};

export default Preview;
