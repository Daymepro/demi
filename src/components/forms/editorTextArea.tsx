import React from 'react'
import { Textarea } from '../ui/textarea'
import { useEditor } from '@/providers/editor-provider'

interface EditorInputProps{
    placeholder: string
}

const EditorTextArea: React.FC<EditorInputProps> = (props: EditorInputProps) => {
    const editor = useEditor()
    const {state} = useEditor() 
  return (
    <div>
      <Textarea
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default EditorTextArea