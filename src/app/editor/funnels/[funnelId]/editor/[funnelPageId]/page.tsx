"use client"
import EditorProvider, { useEditor } from '@/providers/editor-provider'
import { redirect } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import FunnelEditorNavigation from './_components/funnel-editor-navigation'
import FunnelEditorSidebar from './_components/funnel-editor-sidebar'
import FunnelEditor from './_components/funnel-editor'
import ProtectedRoute from '@/components/protectedRoute'
import { apiService } from '@/utils/apiService'
import { useAuth } from '@/context/UserContext'


type props = {
    params: {
        funnelPageId: string
    }
}
const Page = async(props: props) => {
    const {funnelPageId} = props.params
    const {token} = useAuth()
    const {state} = useEditor()
    const [pageDetails, setPageDetails] = useState(null)
    console.log(funnelPageId)
    useEffect(() => {
        console.log('firing')
        const getWebsite = async () => {
            try {
                const response = await apiService.get(`api/Website/page/${funnelPageId}`, {
                    Authorization: `Bearer ${token}`
                })
                console.log(response)  
            } catch (error) {
                console.log(error)
                
            }
    
        }
        getWebsite()
    }, [])
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