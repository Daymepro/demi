import FunnelEditor from '@/app/editor/funnels/[funnelId]/editor/[funnelPageId]/_components/funnel-editor'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'


type Props = {
  params: {
    domain: string
    pathID: string
  }
}
const page = () => {
  const pageDetails = {
    updatedAt: '2022-10-18T12:50:22.000Z',
    pathName: 'about',
    name: 'About'
  }
  //get domain and find the page data
  return (
    <></>
    // <EditorProvider pageDetails={pageDetails} funnelId='kjskjd'>
    //   <FunnelEditor funnelPageId='76676ds' liveMode={true} />
    // </EditorProvider>
  )
}

export default page