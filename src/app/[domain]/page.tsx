
import EditorProvider from '@/providers/editor-provider'
import React, { useEffect, useState } from 'react'
import FunnelEditor from '../editor/funnels/[funnelId]/editor/[funnelPageId]/_components/funnel-editor'
import { notFound, usePathname } from 'next/navigation'
import { apiService } from '@/utils/apiService'
import { useAuth } from '@/context/UserContext'
import { Metadata } from 'next'
import axios from 'axios'
import { headers } from 'next/headers'



 const metadata: Metadata = {
  title: "AI Web Hero",
  description: "AI web builder",
};
type WebData = {
 path: string, 
 name: string
}
const Page =  async (context: any) => {
  const headerList  = headers()
  const hostname = headerList.get('x-forwarded-host');
  const website = await apiService.get(`/api/Website/Website/${hostname}`,{
  
  })


if(!website) return notFound()
const getWebsite = website.pages.find((web: WebData) => web.path === '/')
if(!getWebsite) return notFound()



  return (
    <EditorProvider pageDetails={getWebsite} funnelId={website.websiteID}>
      <FunnelEditor funnelPageId={getWebsite.id} liveMode={true} />
    </EditorProvider>
  )
}

export default Page