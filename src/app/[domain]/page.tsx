"use client"

import EditorProvider from '@/providers/editor-provider'
import React, { useEffect, useState } from 'react'
import FunnelEditor from '../editor/funnels/[funnelId]/editor/[funnelPageId]/_components/funnel-editor'
import { notFound, usePathname } from 'next/navigation'
import { apiService } from '@/utils/apiService'
import { useAuth } from '@/context/UserContext'



const Page =  ( {params} : {params: {domain: string}}) => {
const {token, loading} = useAuth()

  useEffect(() => {
    const getWebsite = async () => {
      console.log('firing')
      console.log(token)
      try {
        const url = window.location.host
        const websiteData = await apiService.get(`/api/Website/Website/deji.aiwebhero.com
        `, {
        Authorization: `Bearer ${token}`,
        })
        console.log(websiteData)
      } catch (error) {
        
      }
   
      
    }
    if(loading === false) {

      getWebsite()
    }
  }, [token, loading])

  // console.log(websiteData)
  // if(!websiteData) return notFound()

  // const pageDetails = websiteData.pages.find((page: any) => page.path === params.domain)
  // //fetch domain data, then find the specific page in the pages array if the page is not found return a not found error and if the page exists then find the page content and increment the number of visits
  // if(!pageDetails) return notFound()

  return (
    <></>
    // <EditorProvider pageDetails={pageDetails} funnelId={websiteData.websiteID}>
    //   <FunnelEditor funnelPageId={pageDetails.id} liveMode={true} />
    // </EditorProvider>
  )
}

export default Page