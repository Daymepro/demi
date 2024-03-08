import { EditorBtns } from '@/lib/contants'
import { Contact2Icon, BookUser, HelpingHandIcon } from 'lucide-react'
import React from 'react'

type Props = {}
const ServicesPlaceHolder = (props: Props) => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'services')}
      className=" h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      <HelpingHandIcon
        size={40}
        className="text-muted-foreground"
      />
    </div>
  )
}

export default ServicesPlaceHolder
