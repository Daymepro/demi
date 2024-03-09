
import EditorProvider from '@/providers/editor-provider'
import React, { useEffect, useState } from 'react'
import FunnelEditor from '../editor/funnels/[funnelId]/editor/[funnelPageId]/_components/funnel-editor'
import { notFound, usePathname } from 'next/navigation'
import { apiService } from '@/utils/apiService'
import { useAuth } from '@/context/UserContext'
import { Metadata } from 'next'
import axios from 'axios'



 const metadata: Metadata = {
  title: "AI Web Hero",
  description: "AI web builder",
};
type WebData = {
 path: string, 
 name: string
}
const Page =  async ( {params} : {params: {domain: string}}) => {


  const website = await apiService.get(`/api/Website/Website/soniodentalservices.aiwebhero.com`,{
  
  })


// console.log(website)

const getWebsite = website.pages.find((web: WebData) => web.path === '/')



  return (
    <EditorProvider pageDetails={getWebsite} funnelId={website.websiteID}>
      <FunnelEditor funnelPageId={getWebsite.id} liveMode={true} />
    </EditorProvider>
  )
}

export default Page