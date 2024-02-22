"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { upsertFunnelPage } from '@/lib/queries'
import { DeviceTypes, useEditor } from '@/providers/editor-provider'
import clsx from 'clsx'
import { ArrowLeftCircle, EyeIcon, Laptop, Redo2, Smartphone, Tablet, TabletIcon, Undo2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FocusEventHandler, useEffect, useState } from 'react'
import { toast } from 'sonner'

type Props = {
    funnelId: string
    funnelPageDetails: any
}

const FunnelEditorNavigation = (props: Props) => {
  const {funnelPageDetails, funnelId} = props

    const router = useRouter()
    const {state, dispatch} = useEditor()

    useEffect(() => {
      dispatch({
        type: 'SET_FUNNELPAGE_ID',
        payload: {
          funnelPageId: funnelPageDetails.id
        }
      })
    }, [funnelPageDetails])
    const handleOnBlurTitleChange: FocusEventHandler<HTMLInputElement> = async (
      event
    ) => {
      if (event.target.value === funnelPageDetails.name) return
      if (event.target.value) {
        await upsertFunnelPage(
          // subaccountId,
          {
            id: funnelPageDetails.id,
            name: event.target.value,
            order: funnelPageDetails.order,
          },
          funnelId
        )
  
        toast('Success', {
          description: 'Saved Funnel Page title',
        })
        router.refresh()
      } else {
        toast('Oppse!', {
          description: 'You need to have a title!',
        })
        event.target.value = funnelPageDetails.name
      }
    }
  
    const handlePreviewClick = () => {
      dispatch({ type: 'TOGGLE_PREVIEW_MODE' })
      dispatch({ type: 'TOGGLE_LIVE_MODE' })
    }
  
    const handleUndo = () => {
      dispatch({ type: 'UNDO' })
    }
  
    const handleRedo = () => {
      dispatch({ type: 'REDO' })
    }
  
    const handleOnSave = async () => {
      const content = JSON.stringify(state.editor.elements)
      try {
        const response = await upsertFunnelPage(
          // subaccountId,
          {
            ...funnelPageDetails,
            content,
          },
          funnelId
        )
        // await saveActivityLogsNotification({
        //   agencyId: undefined,
        //   description: `Updated a funnel page | ${response?.name}`,
        //   subaccountId: subaccountId,
        // })
        toast('Success', {
          description: 'Saved Editor',
        })
      } catch (error) {
        toast('Oppse!', {
          description: 'Could not save editor',
        })
      }
    }
  const [isDomLoaded, setIsDomLoaded] = useState(false)

  useEffect(() => {
    setIsDomLoaded(true)
  })
  return (
<>
{
  isDomLoaded &&   <TooltipProvider>
  <nav
    className={clsx(
      'border-b-[1px] font-sans bg-[#12151C]  flex items-center justify-between p-4 gap-2 transition-all',
      { '!h-0 !p-0 !overflow-hidden': state.editor.previewMode }
    )}
  >
    <aside className="flex items-center gap-4 max-w-[260px] w-[300px]">
      <Link className=' text-white' href={`/website`}>
        <ArrowLeftCircle />
      </Link>
      <div className="flex flex-col w-full ">
        <Input
          defaultValue={funnelPageDetails.name}
          className="border h-8 m-0 p-0 text-sm"
          onBlur={handleOnBlurTitleChange}
        />
        <span className="text-sm text-[#FFFFFF99]">
          Path: /{funnelPageDetails.pathName}
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
            type: 'CHANGE_DEVICE',
            payload: { device: value as DeviceTypes },
          })
        }}
      >
        <TabsList className="grid w-full grid-cols-3 bg-transparent h-fit">
          <Tooltip >
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
        variant={'ghost'}
        size={'icon'}
        className=" text-white"
        onClick={handlePreviewClick}
      >
        <EyeIcon />
      </Button>
      <Button
        disabled={!(state.history.currentIndex > 0)}
        onClick={handleUndo}
        variant={'ghost'}
        size={'icon'}
        className=" text-white"
      >
        <Undo2 />
      </Button>
      <Button
        disabled={
          !(state.history.currentIndex < state.history.history.length - 1)
        }
        onClick={handleRedo}
        variant={'ghost'}
        size={'icon'}
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
          <button className=' px-6 py-2 rounded-[8px] border-[2px] border-[#1455FF] text-white font-semibold bg-transparent text-sm'>

          Publish
          </button>
      <Button className='bg-[#1455FF] text-white' onClick={handleOnSave}>Save</Button>
        </div>
        <span className="text-muted-foreground text-sm">
          Last updated today
          {/* Last updated today {funnelPageDetails.updatedAt.toLocaleDateString()} */}
        </span>
      </div>
    </aside>
  </nav>
</TooltipProvider>
}
</>

  )
}

export default FunnelEditorNavigation