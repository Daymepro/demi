import EditorProvider from '@/providers/editor-provider'
import React, { useEffect } from 'react'
import FunnelEditor from '../editor/funnels/[funnelId]/editor/[funnelPageId]/_components/funnel-editor'
import { notFound } from 'next/navigation'

const Page =  async( {params} : {params: {domain: string}}) => {
  const pageDetails = {
    updatedAt: '2022-10-18T12:50:22.000Z',
    pathName: 'about',
    name: 'About'
  }
  // if(!pageDetails) return notFound()
  //fetch domain data, then find the specific page in the pages array if the page is not found return a not found error and if the page exists then find the page content and increment the number of visits

  return (
    <EditorProvider pageDetails={pageDetails} funnelId='kjskjd'>
      <FunnelEditor funnelPageId='76676ds' liveMode={true} />
    </EditorProvider>
  )
}

export default Page