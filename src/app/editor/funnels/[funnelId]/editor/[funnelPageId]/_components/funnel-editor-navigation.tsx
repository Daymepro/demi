"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAuth } from "@/context/UserContext";
import { upsertFunnelPage } from "@/lib/queries";
import { DeviceTypes, useEditor } from "@/providers/editor-provider";
import { apiService } from "@/utils/apiService";
import { formatDate } from "@/utils/formatDate";
import clsx from "clsx";
import {
  ArrowLeftCircle,
  EyeIcon,
  Laptop,
  Redo2,
  Smartphone,
  Tablet,
  TabletIcon,
  Undo2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FocusEventHandler, useEffect, useState } from "react";
import { toast } from "sonner";
import { PageDetails } from "../page";
import { LoadingSpinner } from "@/components/loadingSpinner";

type Props = {
  funnelId: string;
  funnelPageDetails: PageDetails;
};

const FunnelEditorNavigation = (props: Props) => {
  const { funnelPageDetails, funnelId } = props;
  const { token } = useAuth();
  const router = useRouter();
  const { state, dispatch } = useEditor();
  const [saveLoading, setSaveLoading] = useState(false)
  const [publishLoading, setPublishLoading] = useState(false)


  useEffect(() => {
    dispatch({
      type: "SET_FUNNELPAGE_ID",
      payload: {
        funnelPageId: funnelPageDetails.id.toString(),
      },
    });
  }, [funnelPageDetails]);
  const handleOnBlurTitleChange: FocusEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (event.target.value === funnelPageDetails.name) return;
    if (event.target.value) {
      // await upsertFunnelPage(
      //   // subaccountId,
      //   {
      //     id: funnelPageDetails.id,
      //     name: event.target.value,
      //     order: funnelPageDetails.order,
      //   },
      //   funnelId
      // )
      const response = await apiService.post(
        `/api/MyWebsite/updatepage/${funnelPageDetails.id}`,
        { name: event.target.value },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (response.succeeded === true) {
        toast("Success", {
          description: "Saved Page title",
        });
      } else {
        toast("opps", {
          description: "Something went wrong",
        });
      }
      router.refresh();
    } else {
      toast("Oppse!", {
        description: "You need to have a title!",
      });
      event.target.value = funnelPageDetails.name;
    }
  };

  const handlePreviewClick = () => {
    dispatch({ type: "TOGGLE_PREVIEW_MODE" });
    dispatch({ type: "TOGGLE_LIVE_MODE" });
  };

  const handleUndo = () => {
    dispatch({ type: "UNDO" });
  };

  const handleRedo = () => {
    dispatch({ type: "REDO" });
  };

  const handleOnSave = async () => {
    console.log(state.editor.elements);
    const content = JSON.stringify(state.editor.elements);
    setSaveLoading(true)
    try {
      const response = await apiService.post(
        `/api/MyWebsite/updatepage/${funnelPageDetails.id}`,
        { content },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (response.succeeded === true) {
        toast("Success", {
          description: "Saved Editors",
        });
      } else {
        toast("Oppse!", {
          description: "Could not save editor",
        });
      }
      setSaveLoading(false)
    } catch (error) {
      toast("Oppse!", {
        description: "Could not save editor",
      });
      setSaveLoading(false)

    }
  };
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  const handlePublish = async () => {
    setPublishLoading(true)
    try {
      const resp = await apiService.post(
        `/api/MyWebsite/publishPage/${funnelPageDetails.id}`, {},
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (resp.succeeded === true) {
        toast("Success", {
          description: "Published",
        });
      }
    setPublishLoading(false)

    } catch (error) {
      toast("Oppse!", {
        description: "Could not publish",
      });
      console.log(error)
    setPublishLoading(false)

    }

  };
  useEffect(() => {
    setIsDomLoaded(true);
  });
  return (
    <>
      {isDomLoaded && (
        <TooltipProvider>
          <nav
            className={clsx(
              "border-b-[1px] font-sans bg-[#12151C]  flex items-center justify-between p-4 gap-2 transition-all",
              { "!h-0 !p-0 !overflow-hidden": state.editor.previewMode }
            )}
          >
            <aside className="flex items-center gap-4 max-w-[260px] w-[300px]">
              <Link className=" text-white" href={`/website/preview`}>
                <ArrowLeftCircle />
              </Link>
              <div className="flex flex-col w-full ">
                <Input
                  defaultValue={funnelPageDetails.name}
                  className="border h-8 m-0 pl-2 text-sm"
                  onBlur={handleOnBlurTitleChange}
                />
                <span className="text-sm text-[#FFFFFF99]">
                  Path: {funnelPageDetails.path}
                </span>
              </div>
            </aside>
            <aside>
              <Tabs
                defaultValue="Desktop"
                className="w-fit "
                value={state.editor.device}
                onValueChange={(value) => {
                  dispatch({
                    type: "CHANGE_DEVICE",
                    payload: { device: value as DeviceTypes },
                  });
                }}
              >
                <TabsList className="grid w-full grid-cols-3 bg-transparent h-fit">
                  <Tooltip>
                    <TooltipTrigger suppressHydrationWarning>
                      <TabsTrigger
                        suppressHydrationWarning
                        value="Desktop"
                        className="data-[state=active]:bg-muted w-10 h-10 p-0"
                      >
                        <Laptop />
                      </TabsTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Desktop</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger suppressHydrationWarning>
                      <TabsTrigger
                        suppressHydrationWarning
                        value="Tablet"
                        className="w-10 h-10 p-0 data-[state=active]:bg-muted"
                      >
                        <Tablet />
                      </TabsTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tablet</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger suppressHydrationWarning>
                      <TabsTrigger
                        suppressHydrationWarning
                        value="Mobile"
                        className="w-10 h-10 p-0 data-[state=active]:bg-muted"
                      >
                        <Smartphone />
                      </TabsTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Mobile</p>
                    </TooltipContent>
                  </Tooltip>
                </TabsList>
              </Tabs>
            </aside>
            <aside className="flex items-center gap-2">
              <Button
                variant={"ghost"}
                size={"icon"}
                className=" text-white"
                onClick={handlePreviewClick}
              >
                <EyeIcon />
              </Button>
              <Button
                disabled={!(state.history.currentIndex > 0)}
                onClick={handleUndo}
                variant={"ghost"}
                size={"icon"}
                className=" text-white"
              >
                <Undo2 />
              </Button>
              <Button
                disabled={
                  !(
                    state.history.currentIndex <
                    state.history.history.length - 1
                  )
                }
                onClick={handleRedo}
                variant={"ghost"}
                size={"icon"}
                className="text-white mr-4"
              >
                <Redo2 />
              </Button>
              <div className="flex flex-col item-center mr-4">
                <div className=" flex gap-2 text-white items-center">
                  {/* Draft
          <Switch
            disabled
            defaultChecked={true}
          /> */}
                  <button
                    onClick={handlePublish}
                    className=" px-6 py-2 rounded-[8px] flex items-center justify-center border-[2px] border-[#1455FF] text-white font-semibold bg-transparent text-sm"
                  >
                    { publishLoading ? <LoadingSpinner divClassName=" w-[20px] h-[20px]" /> : "Publish"}
                  </button>
                  <Button
                    className="bg-[#1455FF] flex items-start justify-center text-white"
                    onClick={handleOnSave}
                  >
                    {saveLoading ? <LoadingSpinner divClassName=" w-[20px] h-[20px]" /> : "Save"}
                  </Button>
                </div>
                <div>
                  <span className="text-white text-sm">
                    last updated {formatDate(funnelPageDetails.lastUpdated)}
                  </span>
                </div>
              </div>
            </aside>
          </nav>
        </TooltipProvider>
      )}
    </>
  );
};

export default FunnelEditorNavigation;
