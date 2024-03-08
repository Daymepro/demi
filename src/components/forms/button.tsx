import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'


interface EditorInputProps{
    content?: string,
    action?: () => void
}

const ButtonMain: React.FC<EditorInputProps> = (props: EditorInputProps) => {

  return (
    <div>
      <Button>{props.content}</Button>
    </div>
  )
}

export default ButtonMain