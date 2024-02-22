'use client'
import { Button } from "@/components/ui/button";
import { useEditor } from "@/providers/editor-provider";
import clsx from "clsx";
import { EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import Recursive from './funnnel-editor-components/recursive'

type Props = {
  funnelPageId: string;
  liveMode?: boolean;
};

const FunnelEditor = ({ funnelPageId, liveMode }: Props) => {
  const { dispatch, state } = useEditor();
  useEffect(() => {
    if (!liveMode) {
      dispatch({
        type: "TOGGLE_LIVE_MODE",
        payload: { value: true },
      });
    }

  }, [liveMode]);
  
useEffect(() => {
  const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/getData')
  if(!response) return
  const data = await response.json()
  dispatch({
    type: 'LOAD_DATA',
    payload: {
      elements: [
        {
          "id": "landingPage",
          "styles": {
            "textAlign": "center",
            "display": "flex",
            "backgroundColor": "grey",
            "flexDirection": "column"
          },
          "name": "Body",
          "type": "__body",
          "content": [
            {
              "id": "header",
              "styles": {
                "backgroundColor": "#333",
                "color": "#fff",
                "padding": "20px 0"
              },
              "name": "header",
              "type": "container",
              "content": [
                {
                  "id": "pageTitle",
                  "styles": {},
                  "name": "h1",
                  "type": "text",
                  "content": {
                    "innerText": "Welcome to Dog Haven"
                  } 
                },
                {
                  "id": "subtitle",
                  "styles": {},
                  "name": "p",
                  "type": "text",
                  "content": {
                    "innerText": "Find Your Perfect Companion"
                  } 
                }
              ]
            },
            {
              "id": "mainContent",
              "styles": {
                "maxWidth": "1200px",
                "margin": "20px auto",
                "padding": "0 20px"
              },
              "name": "container",
              "type": "container",
              "content": [
                {
                  "id": "sectionTitle",
                  "styles": {},
                  "name": "h2",
                  "type": "text",
                  "content": {
                    "innerText": "Meet Our Dogs"
                  } 
                },
                {
                  "id": "description",
                  "styles": {},
                  "name": "p",
                  "type": "text",
                  "content": {
                    "innerText": "We have a variety of breeds available for adoption. Take a look at our furry friends!"
                  } 
                },
                {
                  "id": "dogImage",
                  "styles": {
                    "maxWidth": "100%",
                    "height": "auto"
                  },
                  "name": "image",
                  "type": "image",
                  "content": {
                    "src": "dog_image.jpg"
                  }
                },
                {
                  "id": "ctaButton",
                  "styles": {
                    "display": "inline-block",
                    "backgroundColor": "#4CAF50",
                    "color": "white",
                    "padding": "14px 40px",
                    "textAlign": "center",
                    "textDecoration": "none",
                    "fontSize": "18px",
                    "marginTop": "20px",
                    "cursor": "pointer",
                    "borderRadius": "5px"
                  },
                  "name": "a",
                  "type": "link",
                  "content": {
                    "innerText": "Contact Us",
                    "href": ""
                  }
                }
              ]
            },
            {
              "id": "footer",
              "styles": {
                "backgroundColor": "#333",
                "color": "#fff",
                "padding": "20px 0",
                "bottom": "0",
                "width": "100%"
              },
              "name": "footer",
              "type": "section",
              "content": [
                {
                  "id": "copyright",
                  "styles": {},
                  "name": "p",
                  "type": "text",
                  "content": {
                    "innerText":  "© 2024 Dog Haven. All rights reserved."
                  }
                }
              ]
            }
          ]
        }
      ],
      withLive: !!liveMode
    }
  })
  } catch (error) {
    console.log(error)
  }
  }
  fetchData()
},[funnelPageId])

const handleClick = () => {
  dispatch({
    type: 'CHANGE_CLICKED_ELEMENT',
    payload: {}
  })
}
const handleOnPreview = () => {
  dispatch({
    type: 'TOGGLE_PREVIEW_MODE'
  })
  dispatch({
    type: 'TOGGLE_LIVE_MODE'
  })
}

  return <div suppressHydrationWarning className={clsx(' use-automation-zoom  h-full overflow-scroll mr-[385px] bg-background transition-all rounded-md', {
    ' !p-0 !mr-0': state.editor.previewMode === true || state.editor.liveMode === true,
    " !w-[850px]" : state.editor.device === 'Tablet',
    " !w-[420px]" : state.editor.device === 'Mobile',
    " !w-full" : state.editor.device === 'Desktop',
  })}
  onClick={handleClick}
  >
    
    {
      state.editor.previewMode && state.editor.liveMode && (
        <Button suppressHydrationWarning variant={'ghost'} size={'icon'} className=" w-6 h-6 bg-slate-600 p-[2px] fixed top-0 left-0 z-[100]" onClick={handleOnPreview}>
          <EyeOff />
        </Button>
      )
    }
       {Array.isArray(state.editor.elements) &&
        state.editor.elements.map((childElement) => (
          <Recursive
          
            key={childElement.id}
            element={childElement}
          />
        ))}
  </div>;
};

export default FunnelEditor;
