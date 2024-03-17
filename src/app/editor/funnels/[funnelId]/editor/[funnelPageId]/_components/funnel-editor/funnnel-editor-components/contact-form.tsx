'use client'
import ContactForm from '@/components/forms/contactform'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/components/ui/use-toast'
import { EditorBtns } from '@/lib/contants'
import {
  getFunnel,
} from '@/lib/queries'

import { ContactUserFormSchema } from '@/lib/types'
import { EditorElement, useEditor } from '@/providers/editor-provider'
import clsx from 'clsx'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'

import React from 'react'
import { z } from 'zod'
import TextComponent from './textComponent'

type Props = {
  element: EditorElement
}

const ContactFormComponent = (props: Props) => {
  const { dispatch, state, funnelId, pageDetails } = useEditor()
  const router = useRouter()

  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch({
      type: 'CHANGE_CLICKED_ELEMENT',
      payload: {
        elementDetails: props.element,
      },
    })
  }

  const styles = props.element.styles

  const goToNextPage = async () => {
    if (!state.editor.liveMode) return
    const funnelPages = await getFunnel(funnelId)
    // if (!funnelPages || !pageDetails) return
    // if (funnelPages.FunnelPages.length > pageDetails.order + 1) {
    //   const nextPage = funnelPages.FunnelPages.find(
    //     (page) => page.order === pageDetails.order + 1
    //   )
    //   if (!nextPage) return
    //   router.replace(
    //     `${process.env.NEXT_PUBLIC_SCHEME}${funnelPages.subDomainName}.${process.env.NEXT_PUBLIC_DOMAIN}/${nextPage.pathName}`
    //   )
    // }
  }

  const handleDeleteElement = () => {
    dispatch({
      type: 'DELETE_ELEMENT',
      payload: { elementDetails: props.element },
    })
  }

  const onFormSubmit = async (
    values: z.infer<typeof ContactUserFormSchema>
  ) => {
    if (!state.editor.liveMode) return

    try {
  
      //WIP Call trigger endpoint
      await goToNextPage()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Failed',
        description: 'Could not save your information',
      })
    }
  }
  console.log(props.element)

  return (
    <div
      style={styles}
      draggable
      onDragStart={(e) => handleDragStart(e, 'contactForm')}
      onClick={handleOnClickBody}
      className={clsx(
        'p-[2px] w-full m-[5px] relative text-[16px] transition-all flex items-center justify-center',
        {
          '!outline-blue-500':
            state.editor.selectedElement.id === props.element.id,

          '!outline': state.editor.selectedElement.id === props.element.id,
          'outline-dashed outline-[1px] outline-slate-300': !state.editor.liveMode,
        }
      )}
    >
      {state.editor.selectedElement.id === props.element.id &&
        !state.editor.liveMode && (
          <Badge className="absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg ">
            {state.editor.selectedElement.name}
          </Badge>
        )}
        <TextComponent element={{name: 'text', styles:{}, id: 'jgvhg', type: 'text', content:{innerText: 'example'}}} />
      {/* <ContactForm
        subTitle="Contact Us"
        title=""
        apiCall={onFormSubmit}
      /> */}
      {state.editor.selectedElement.id === props.element.id &&
        !state.editor.liveMode && (
          <div className="absolute bg-primary px-2.5 py-1 text-xs font-bold  -top-[25px] -right-[1px] rounded-none rounded-t-lg !text-white">
            <Trash
              className="cursor-pointer"
              size={16}
              onClick={handleDeleteElement}
            />
          </div>
        )}
    </div>
  )
}

export default ContactFormComponent
