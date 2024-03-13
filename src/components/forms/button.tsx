// import React from 'react'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
// import { useEditor } from '@/providers/editor-provider'


// interface EditorInputProps{
//     content?: string,
//     action?: () => void
// }

// const ButtonMain: React.FC<EditorInputProps> = (props: EditorInputProps) => {
//   const { dispatch, state } = useEditor()

//   return (
//     <div>
//       <Button>
//         <span contentEditable
//         onBlur={(e) => {
//           const spanElement = e.target as HTMLSpanElement
//           dispatch({
//             type: 'UPDATE_ELEMENT',
//             payload: {
//               elementDetails: {
//                 ...props.element,
//                 content: {
//                   innerText: spanElement.innerText,
//                 },
//               },
//             },
//           })
//         }}>
//           {props.content}
//         </span>
//       </Button>
//     </div>
//   )
// }

// export default ButtonMain