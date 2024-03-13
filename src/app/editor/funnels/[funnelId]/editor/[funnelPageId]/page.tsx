"use client";
import EditorProvider, { useEditor } from "@/providers/editor-provider";
import { redirect, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import FunnelEditorNavigation from "./_components/funnel-editor-navigation";
import FunnelEditorSidebar from "./_components/funnel-editor-sidebar";
import FunnelEditor from "./_components/funnel-editor";
import ProtectedRoute from "@/components/protectedRoute";
import { apiService } from "@/utils/apiService";
import { useAuth } from "@/context/UserContext";
import PageLoader from "@/components/pageLoader";

type props = {
  params: {
    funnelPageId: string;
    funnelId: string;
  };
};

export type PageDetails = {
  dateCreated: Date;
  description: string;
  lastUpdated: Date;
  published: boolean;
  url: string;
  websiteID: string;
  name: string
  path: string
  id: number
};
const Page =  (props: props) => {
  const { funnelPageId, funnelId } = props.params;
  const { token, loading } = useAuth();
  const router = useRouter()
  const [pageDetails, setPageDetails] = useState<PageDetails | null>(null);



  useEffect(() => {
    const getWebsite = async () => {
      try {
        const pageResp = await apiService.get(
          `/api/MyWebsite/ViewPage/${funnelPageId}`,
          {
            Authorization: `Bearer ${token}`,
          }
        );
        console.log(pageResp);
        if (pageResp.succeeded === true) {
          setPageDetails(pageResp.page);
        } else {
          router.push("/website/preview");
        }
      } catch (error) {
        console.log(error);
        router.push("/website/preview");

      }
    };
      getWebsite();


  }, [token, loading]);

  return (
      <div className=" fixed top-0 bottom-0 left-0 right-0 z-[20] overflow-hidden">
 {!pageDetails ? <div className=" absolute w-screen h-screen top-0 left-0 bottom-0 right-0">

  <PageLoader />
 </div> :      <EditorProvider
          pageDetails={pageDetails}
          funnelId={props.params.funnelPageId}
        >
   {pageDetails !== null &&       <FunnelEditorNavigation
            funnelId={props.params.funnelId}
            funnelPageDetails={pageDetails}
          />}
     {pageDetails !== null &&        <div className=" h-full flex justify-center">
            <FunnelEditor funnelPageId={props.params.funnelPageId} />
          </div>}
          <FunnelEditorSidebar />
        </EditorProvider>}
      </div>
  );
};

export default Page;
