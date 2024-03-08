'use client'
import EditorInput from '@/components/forms/editorInput'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { EditorElement, useEditor } from '@/providers/editor-provider'

import clsx from 'clsx'
import { Trash } from 'lucide-react'
import React from 'react'

type Props = {
  element: EditorElement 
}

const InputComponent = (props: Props) => {
  const { dispatch, state } = useEditor()

  const handleDeleteElement = () => {
    console.log('firing')
    console.log(props.element)
    dispatch({
      type: 'DELETE_ELEMENT',
      payload: { elementDetails: props.element },
    })
  }
  const styles = props.element.styles

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch({
      type: 'CHANGE_CLICKED_ELEMENT',
      payload: {
        elementDetails: props.element,
      },
    })
  }
  //WE ARE NOT ADDING DRAG DROP
  console.log(props.element)
  return (
    <div
      style={styles}
      className={clsx(
        'p-[2px] w-full m-[5px] relative text-[16px] transition-all',
        {
          '!border-blue-500':
            state.editor.selectedElement.id === props.element.id,

          '!border-solid': state.editor.selectedElement.id === props.element.id,
          'border-dashed border-[1px] border-slate-300': !state.editor.liveMode,
        }
      )}
      onClick={handleOnClickBody}
    >
      {state.editor.selectedElement.id === props.element.id &&
        !state.editor.liveMode && (
          <Badge className="absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg">
            {state.editor.selectedElement.name}
          </Badge>
        )}
            {!Array.isArray(props.element.content) &&
            <EditorInput placeholder={props.element.content.placeholder || ''} />

        }
      {state.editor.selectedElement.id === props.element.id &&
        !state.editor.liveMode && (
          <div className="absolute bg-primary px-2.5 py-1 text-xs font-bold -top-[25px] -right-[1px] rounded-none rounded-t-lg !text-white">
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

export default InputComponent