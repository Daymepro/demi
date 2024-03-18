import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { EditorElement, useEditor } from '@/providers/editor-provider'
import { TrashIcon } from 'lucide-react'
import React from 'react'

const ComponentTree = () => {
    const {state, dispatch} = useEditor()
    const handleOnClickBody = (e: React.MouseEvent, element: EditorElement) => {
        e.stopPropagation();
        dispatch({
          type: "CHANGE_CLICKED_ELEMENT",
          payload: {
            elementDetails: element,
          },
        });
      };
    const loadComponent = (content: EditorElement[]) => {
        return (
            <div>
                {content.map((item) => {
                    if (Array.isArray(item.content)) {
                        return (
                            <div key={item.id}>
                                    <AccordionItem value={item.id}>
                                    <AccordionTrigger onClick={(e) => handleOnClickBody(e, item)}> <span>{item.name}</span>  </AccordionTrigger>
                                    <AccordionContent style={{ marginLeft: '20px' }}>
                                        {loadComponent(item.content)}
                                    </AccordionContent>
                                    </AccordionItem>
                            </div>
                        );
                    } else {
                        return (
                            <div onClick={(e) => handleOnClickBody(e, item)} className=' cursor-pointer' key={item.id}>
                                {item.name}
                            </div>
                        );
                    }
                })}
            </div>
        );
    }

  return (
    <div>
         {state.editor.elements.map((elem) => (
        <div key={elem.id}>
            <Accordion type='multiple'>
                <AccordionItem value={elem.id}>
                <AccordionTrigger onClick={(e) => handleOnClickBody(e, elem)}>{elem.name}</AccordionTrigger>
                <AccordionContent style={{ marginLeft: '20px' }}>
                    {Array.isArray(elem.content)
                        ? loadComponent(elem.content)
                        : <div onClick={(e) => handleOnClickBody(e, elem)} className=' cursor-pointer'>{elem.content?.innerText}</div>
                    }
                </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    ))}
    </div>
  )
}

export default ComponentTree