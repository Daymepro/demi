"use client"
import EditorProvider, { useEditor } from '@/providers/editor-provider'
import EditorProvider, { useEditor } from '@/providers/editor-provider'
import { redirect } from 'next/navigation'
import React from 'react'
import FunnelEditorNavigation from './_components/funnel-editor-navigation'
import FunnelEditorSidebar from './_components/funnel-editor-sidebar'
import FunnelEditor from './_components/funnel-editor'
import ProtectedRoute from '@/components/protectedRoute'


type props = {
    params: {
        funnelPageId: string
    }
}
const Page = async(props: props) => {
    const {funnelPageId} = props.params
    // const {state} = useEditor()
    // console.log(state)
    const {state, dispatch} = useEditor()
    console.log(funnelPageId)

    //fetch funnelId
    const funnelPageDetails = {
        updatedAt: '2022-10-18T12:50:22.000Z',
        pathName: 'about',
        name: 'About'

    }

    if(!funnelPageDetails) {
        return redirect('/website')
    }


  return (
    <div className=' fixed top-0 bottom-0 left-0 right-0 z-[20] overflow-hidden'>
        <ProtectedRoute>
        <EditorProvider  pageDetails={funnelPageDetails} funnelId={props.params.funnelPageId}>
           <FunnelEditorNavigation funnelId={props.params.funnelPageId} funnelPageDetails={funnelPageDetails} />
<div className=' h-full flex justify-center'>
    <FunnelEditor  funnelPageId={props.params.funnelPageId} />
</div>
           <FunnelEditorSidebar />
        </EditorProvider>
        </ProtectedRoute>
    </div>
  )
}

export default Page