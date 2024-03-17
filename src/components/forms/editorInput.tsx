import React from 'react'
import { Input } from '../ui/input'
import { useEditor } from '@/providers/editor-provider'

interface EditorInputProps{
    placeholder: string
}

const EditorInput: React.FC<EditorInputProps> = (props: EditorInputProps) => {
    const editor = useEditor()
    const {state} = useEditor() 
  return (
    <div>
      <Input
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default EditorInput