'use client'
import { Badge } from '@/components/ui/badge'
import { EditorElement, useEditor } from '@/providers/editor-provider'

import clsx from 'clsx'
import { Trash } from 'lucide-react'
import React from 'react'
import { getColorFromPallete } from './container'

type Props = {
  element: EditorElement
}

const TextComponent = (props: Props) => {
  const { dispatch, state, pallete } = useEditor()

  const handleDeleteElement = () => {
    dispatch({
      type: 'DELETE_ELEMENT',
      payload: { elementDetails: props.element },
    })
  }
  const styles = {...props.element.styles }

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
  // console.log(props.element)
  return (
    <div
      style={styles}
      className={clsx(
        'p-[2px] w-fit m-[5px] relative text-[16px] transition-all animation-mine',
        `p-[2px] w-full m-[5px] relative text-[16px] transition-all `,
        {
          '!outline-blue-500':
            state.editor.selectedElement.id === props.element.id,

          '!outline': state.editor.selectedElement.id === props.element.id,
          'outline-dashed outline-[1px] outline-slate-300': !state.editor.liveMode,
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
      <span
        contentEditable={!state.editor.liveMode}
        suppressContentEditableWarning={true}
        className={`${getColorFromPallete("text", pallete)}`}
        onBlur={(e) => {
          const spanElement = e.target as HTMLSpanElement
          dispatch({
            type: 'UPDATE_ELEMENT',
            payload: {
              elementDetails: {
                ...props.element,
                content: {
                  innerText: spanElement.innerText,
                },
              },
            },
          })
        }}
      >
        {!Array.isArray(props.element.content) &&
          props.element.content.innerText}
      </span>
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

export default TextComponent