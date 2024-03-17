import { EditorBtns } from '@/lib/contants'
import { Contact2Icon, BookUser, HelpingHandIcon, CircleDollarSign } from 'lucide-react'
import React from 'react'

type Props = {}
const PricingPlaceholder = (props: Props) => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'pricing')}
      className=" h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      <CircleDollarSign
        size={40}
        className="text-muted-foreground"
      />
    </div>
  )
}

export default PricingPlaceholder
