'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Tabs, TabsContent } from '@/components/ui/tabs'

import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useEditor } from '@/providers/editor-provider'
import SettingsTab from './tabs/settings-tab'
import Tablist from './tabs'
import ComponentsTab from './tabs/components-tabs'
import MediaBucketTab from './tabs/media-bucket-tab'
// import SettingsTab from './tabs/settings-tab'
// import MediaBucketTab from './tabs/media-bucket-tab'
// import ComponentsTab from './tabs/components-tab'
import ComponentTree from './tabs/componentTree'

type Props = {
  subaccountId: string
}

const FunnelEditorSidebar = () => {
  const { state, dispatch } = useEditor()
  const  [isDomLoaded, setIsDomLoaded] = useState(false)

  useEffect(() => {
    setIsDomLoaded(true)
  }, [])
  return (
    <>
    {isDomLoaded &&     <Sheet
    
    open={true}
    modal={false}
    

  >
    <Tabs
      className="w-full   font-sans  "
      defaultValue="Settings"
    >
      <SheetContent
        showX={false}
        side="right"
        className={clsx(
          'mt-[90px] w-16 z-[80] shadow-none bg-[#12151C]   p-0 focus:border-none transition-all overflow-hidden',
          { hidden: state.editor.previewMode }
        )}
      >
        <Tablist />
      </SheetContent>
      <SheetContent
      suppressHydrationWarning
        side="right"
        className={clsx(
          'mt-[97px] w-80 z-[40] shadow-none p-0 mr-16 bg-background h-full transition-all overflow-hidden ',
          { hidden: state.editor.previewMode }
        )}
      >
        <div suppressHydrationWarning className="grid gap-4 h-full pb-36 overflow-scroll">
          <TabsContent value="Settings">
            <SheetHeader className="text-left p-6">
              <SheetTitle>Styles</SheetTitle>
              <SheetDescription>
                Show your creativity! You can customize every component as you
                like.
              </SheetDescription>
            </SheetHeader>
            <SettingsTab />
          </TabsContent>
          <TabsContent value="Media">
            <MediaBucketTab subaccountId={''} />
          </TabsContent>
          <TabsContent value="Layers">
            <ComponentTree  />
          </TabsContent>
          <TabsContent value="Components">
            <SheetHeader className="text-left p-6 ">
              <SheetTitle>Components</SheetTitle>
              <SheetDescription>
                You can drag and drop components on the canvas
              </SheetDescription>
            </SheetHeader>
            <ComponentsTab />
          </TabsContent>
        </div>
      </SheetContent>
    </Tabs>
  </Sheet>}
    </>

  )
}

export default FunnelEditorSidebar