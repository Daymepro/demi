"use client";
import { Badge } from "@/components/ui/badge";
import { EditorBtns, defaultStyles } from "@/lib/contants";
import { EditorElement, useEditor } from "@/providers/editor-provider";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import clsx from "clsx";
import React from "react";
import { v4 } from "uuid";
import Recursive from "./recursive";
import { ArrowDown, ArrowUp, Trash, X } from "lucide-react";
import TextComponent from "./textComponent";
import { Separator } from "@/components/ui/separator";
import { sections } from "@/lib/contants";
import { useState } from "react";
import Section from "./sections";
import { colorObj } from "@/utils/pallete";
import { string } from "zod";
type Props = { element: EditorElement };


export const getColorFromPallete = (type: string, pallete: string) => {
  switch(type) {
    case "container":
      return  colorObj[pallete as keyof typeof colorObj].foreground;
    case "body": 
    return  colorObj[pallete as keyof typeof colorObj].background;
    case "text":
      return colorObj[pallete as keyof typeof colorObj].text;
    case "section": 
    return colorObj[pallete as keyof typeof colorObj].a;
  }
   
  }

const Container = ({ element }: Props) => {
  const { id, content, name, styles, type } = element;
  const [modalOpener, setModalOpener] = useState<null | string>(null);
  const { dispatch, state, pallete } = useEditor();
  const [open, setOpen] = useState(false)

  const handleOnDrop = (e: React.DragEvent, type: string) => {
    e.stopPropagation();
    const componentType = e.dataTransfer.getData("componentType") as EditorBtns;
    if (type === "__body" && componentType === "section") {
      dispatch({
        type: "ADD_ELEMENT",
        payload: {
          containerId: id,
          elementDetails: {
            content: [],
            id: v4(),
            name: "Section",
            styles: {},
            type: "section",
          },
        },
      });
    } else if (type === "section" || type === "container") {
      switch (componentType) {
        case "text":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: { innerText: "Text Element" },
                id: v4(),
                name: "Text",
                styles: {
                  color: "black",
                  ...defaultStyles,
                },
                type: "text",
              },
            },
          });
          break;
        case "input":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: { placeholder: "Enter Placeholder from sidebar" },
                id: v4(),
                name: "input",
                styles: {
                  color: "black",
                  ...defaultStyles,
                },
                type: "input",
              },
            },
          });
          break;
        case "link":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: {
                  innerText: "Link Element",
                  href: "#",
                },
                id: v4(),
                name: "Link",
                styles: {
                  color: "black",
                  ...defaultStyles,
                },
                type: "link",
              },
            },
          });
          break;
        case "video":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: {
                  src: "https://www.youtube.com",
                },
                id: v4(),
                name: "Video",
                styles: {},
                type: "video",
              },
            },
          });
          break;
        case "image":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: {
                  src: "",
                },
                id: v4(),
                name: "image",
                styles: {},
                type: "image",
              },
            },
          });
          break;
        case "button":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: {
                  content: "New button",
                },
                id: v4(),
                name: "button",
                styles: {
                  width: "fit-content",
                },
                type: "button",
              },
            },
          });
          break;
        case "container":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: [],
                id: v4(),
                name: "Container",
                styles: {},
                type: "container",
              },
            },
          });
          break;
        case "pricing":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: [
                  {
                    content: [
                      {
                        content: [],
                        id: v4(),
                        name: "Container",
                        styles: {
                          height: "400px",
                          borderRadius: "30px",
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1455165814004-1126a7199f9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVuZ2luZWVyaW5nfGVufDB8fDB8fHww)",
                          borderWidth: "0px",
                        },
                        type: "container",
                      },
                      {
                        content: [
                          {
                            content: [
                              {
                                content: {
                                  innerText: "Standard Civil Engineering Plan",
                                },
                                id: v4(),
                                name: "Text",
                                styles: {
                                  color: "black",
                                  backgroundPosition: "center",
                                  objectFit: "cover",
                                  backgroundRepeat: "no-repeat",
                                  textAlign: "left",
                                  opacity: "100%",
                                  fontSize: "25px",
                                },
                                type: "text",
                              },
                              {
                                content: { innerText: "$500" },
                                id: v4(),
                                name: "Text",
                                styles: {
                                  color: "black",
                                  backgroundPosition: "center",
                                  objectFit: "cover",
                                  backgroundRepeat: "no-repeat",
                                  textAlign: "left",
                                  opacity: "100%",
                                  fontWeight: "bold",
                                  fontSize: "30px",
                                },
                                type: "text",
                              },
                              {
                                content: { innerText: "Per Project" },
                                id: v4(),
                                name: "Text",
                                styles: {
                                  color: "black",
                                  backgroundPosition: "center",
                                  objectFit: "cover",
                                  backgroundRepeat: "no-repeat",
                                  textAlign: "left",
                                  opacity: "100%",
                                },
                                type: "text",
                              },
                              {
                                content: {
                                  innerText: "Comprehensive Plans For Projects",
                                },
                                id: v4(),
                                name: "Text",
                                styles: {
                                  color: "black",
                                  backgroundPosition: "center",
                                  objectFit: "cover",
                                  backgroundRepeat: "no-repeat",
                                  textAlign: "left",
                                  opacity: "100%",
                                  fontWeight: "bold",
                                },
                                type: "text",
                              },
                              {
                                content: { innerText: "✓ Details" },
                                id: v4(),
                                name: "Text",
                                styles: {
                                  color: "black",
                                  backgroundPosition: "center",
                                  objectFit: "cover",
                                  backgroundRepeat: "no-repeat",
                                  textAlign: "left",
                                  opacity: "100%",
                                },
                                type: "text",
                              },
                              {
                                content: { innerText: "✓ Analysis" },
                                id: v4(),
                                name: "Text",
                                styles: {
                                  color: "black",
                                  backgroundPosition: "center",
                                  objectFit: "cover",
                                  backgroundRepeat: "no-repeat",
                                  textAlign: "left",
                                  opacity: "100%",
                                },
                                type: "text",
                              },
                              {
                                content: { innerText: "✓ Blueprints" },
                                id: v4(),
                                name: "Text",
                                styles: {
                                  color: "black",
                                  backgroundPosition: "center",
                                  objectFit: "cover",
                                  backgroundRepeat: "no-repeat",
                                  textAlign: "left",
                                  opacity: "100%",
                                },
                                type: "text",
                              },
                              {
                                content: { innerText: "✓ Supervision" },
                                id: v4(),
                                name: "Text",
                                styles: {
                                  color: "black",
                                  backgroundPosition: "center",
                                  objectFit: "cover",
                                  backgroundRepeat: "no-repeat",
                                  textAlign: "left",
                                  opacity: "100%",
                                },
                                type: "text",
                              },
                            ],
                            id: v4(),
                            name: "Container",
                            styles: {},
                            type: "container",
                          },
                        ],
                        id: v4(),
                        name: "Container",
                        styles: {
                          width: "fit-content",
                        },
                        type: "container",
                      },
                    ],
                    id: v4(),
                    name: "Container",
                    styles: {
                      maxWidth: "570px",
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "10px",
                    },
                    type: "container",
                  },
                  // {
                  //   content: [],
                  //   id: "a5609d80-a66f-4bb4-aae4-0b32c565471c",
                  //   name: "Container",
                  //   styles: { maxWidth: "570px" },
                  //   type: "container",
                  // },
                  // {
                  //   content: [],
                  //   id: "071745de-ef43-44bc-996c-227d1598591f",
                  //   name: "Container",
                  //   styles: { maxWidth: "570px" },
                  //   type: "container",
                  // },
                ],
                id: v4(),
                name: "Pricing",
                styles: {
                  width: "fit-content",
                },
                type: "pricing",
              },
            },
          });
          break;
        case "services":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: [
                  {
                    id: v4(),
                    styles: {
                      textAlign: "center",
                      display: "flex",
                      backgroundColor: "",
                      flexDirection: "column",
                      paddingTop: "0px",
                      paddingBottom: "0px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      marginLeft: "0px",
                      marginRight: "0px",
                    },
                    name: "Services",
                    type: "container",
                    content: [
                      {
                        content: [
                          {
                            content: [
                              {
                                content: {
                                  innerText: "Civil Engineering Services",
                                },
                                id: "a9d786fd-600e-4005-94d0-ef392aa077dc",
                                name: "Text",
                                styles: {
                                  color: "White",
                                  backgroundPosition: "center",
                                  objectFit: "cover",
                                  backgroundRepeat: "no-repeat",
                                  textAlign: "center",
                                  opacity: "100%",
                                  fontSize: "48px",
                                  fontWeight: "bold",
                                },
                                type: "text",
                              },
                            ],
                            id: "acb313c8-072d-4d68-9ef7-44ad140cf1ac",
                            name: "Container",
                            styles: {
                              backgroundPosition: "center",
                              objectFit: "cover",
                              backgroundRepeat: "no-repeat",
                              textAlign: "left",
                              opacity: "100%",
                            },
                            type: "container",
                          },
                          {
                            content: [
                              {
                                content: [
                                  {
                                    content: {
                                      innerText:
                                        "Structural Analysis and Design",
                                    },
                                    id: "ce350122-dbae-4dc6-b4aa-e443df0bd660",
                                    name: "Text",
                                    styles: {
                                      color: "black",
                                      backgroundPosition: "center",
                                      objectFit: "cover",
                                      backgroundRepeat: "no-repeat",
                                      textAlign: "center",
                                      opacity: "100%",
                                      fontSize: "28px",
                                      fontWeight: "bold",
                                    },
                                    type: "text",
                                  },
                                  {
                                    content: {
                                      innerText:
                                        "Our team provides comprehensive structural analysis and design services, ensuring the safety and efficiency of your construction projects.",
                                    },
                                    id: "6b65db2a-d616-452f-a8b2-031ef0b021e9",
                                    name: "Text",
                                    styles: {
                                      color: "black",
                                      backgroundPosition: "center",
                                      objectFit: "cover",
                                      backgroundRepeat: "no-repeat",
                                      textAlign: "center",
                                      opacity: "100%",
                                    },
                                    type: "text",
                                  },
                                ],
                                id: "fc1523ae-2160-46ed-9966-fd882acfb24b",
                                name: "Container",
                                styles: {
                                  backgroundPosition: "center",
                                  objectFit: "cover",
                                  backgroundRepeat: "no-repeat",
                                  textAlign: "left",
                                  opacity: "100%",
                                  marginLeft: "32px",
                                  marginRight: "32px",
                                  minWidth: "300px",
                                  maxWidth: "500px",

                                  backgroundImage:
                                    "url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                                  height: "400px",
                                  display: "flex",
                                  flexDirection: "column",
                                  backgroundSize: "cover",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  paddingLeft: "30px",
                                  paddingRight: "30px",
                                },
                                type: "container",
                              },
                              {
                                content: [
                                  {
                                    content: {
                                      innerText:
                                        "Structural Analysis and Design",
                                    },
                                    id: "ce350122-dbae-4dc6-b4aa-e443df0bd660",
                                    name: "Text",
                                    styles: {
                                      color: "black",
                                      backgroundPosition: "center",
                                      objectFit: "cover",
                                      backgroundRepeat: "no-repeat",
                                      textAlign: "center",
                                      opacity: "100%",
                                      fontSize: "28px",
                                      fontWeight: "bold",
                                    },
                                    type: "text",
                                  },
                                  {
                                    content: {
                                      innerText:
                                        "Our team provides comprehensive structural analysis and design services, ensuring the safety and efficiency of your construction projects.",
                                    },
                                    id: "6b65db2a-d616-452f-a8b2-031ef0b021e9",
                                    name: "Text",
                                    styles: {
                                      color: "black",
                                      backgroundPosition: "center",
                                      objectFit: "cover",
                                      backgroundRepeat: "no-repeat",
                                      textAlign: "center",
                                      opacity: "100%",
                                    },
                                    type: "text",
                                  },
                                ],
                                id: "3b6fc1f9-e7d0-4626-bad4-b9ad1b49a769",
                                name: "Container",
                                styles: {
                                  backgroundPosition: "center",
                                  objectFit: "cover",
                                  backgroundRepeat: "no-repeat",
                                  textAlign: "left",
                                  opacity: "100%",
                                  marginLeft: "32px",
                                  marginRight: "32px",
                                  minWidth: "300px",
                                  maxWidth: "500px",

                                  backgroundImage:
                                    "url(https://images.unsplash.com/photo-1498631906572-66c58d46ecf7?q=80&w=2566&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                                  height: "400px",
                                  display: "flex",
                                  flexDirection: "column",
                                  backgroundSize: "cover",
                                  justifyContent: "center",
                                },
                                type: "container",
                              },
                              {
                                content: [
                                  {
                                    content: {
                                      innerText:
                                        "Structural Analysis and Design",
                                    },
                                    id: "ce350122-dbae-4dc6-b4aa-e443df0bd660",
                                    name: "Text",
                                    styles: {
                                      color: "black",
                                      backgroundPosition: "center",
                                      objectFit: "cover",
                                      backgroundRepeat: "no-repeat",
                                      textAlign: "center",
                                      opacity: "100%",
                                      fontSize: "28px",
                                      fontWeight: "bold",
                                    },
                                    type: "text",
                                  },
                                  {
                                    content: {
                                      innerText:
                                        "Our team provides comprehensive structural analysis and design services, ensuring the safety and efficiency of your construction projects.",
                                    },
                                    id: "6b65db2a-d616-452f-a8b2-031ef0b021e9",
                                    name: "Text",
                                    styles: {
                                      color: "black",
                                      backgroundPosition: "center",
                                      objectFit: "cover",
                                      backgroundRepeat: "no-repeat",
                                      textAlign: "center",
                                      opacity: "100%",
                                    },
                                    type: "text",
                                  },
                                ],
                                id: "3c7a914b-0722-4bc8-b796-50749e3e7c24",
                                name: "Container",
                                styles: {
                                  backgroundPosition: "center",
                                  objectFit: "cover",
                                  backgroundRepeat: "no-repeat",
                                  textAlign: "left",
                                  opacity: "100%",
                                  marginLeft: "32px",
                                  marginRight: "32px",
                                  minWidth: "300px",
                                  maxWidth: "500px",

                                  backgroundImage:
                                    "url(https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",

                                  height: "400px",
                                  display: "flex",
                                  flexDirection: "column",
                                  backgroundSize: "cover",
                                  justifyContent: "center",
                                },
                                type: "container",
                              },
                            ],
                            id: "4a3b9e79-9f3e-48db-b13b-9649fa4d383c",
                            name: "Container",
                            styles: {
                              backgroundPosition: "center",
                              objectFit: "cover",
                              backgroundRepeat: "no-repeat",
                              textAlign: "left",
                              opacity: "100%",
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              rowGap: "32px",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            type: "container",
                          },
                        ],
                        id: "dbfb4129-39f0-4506-970e-160ea700ea37",
                        name: "Container",
                        styles: {
                          backgroundPosition: "center",
                          objectFit: "cover",
                          backgroundRepeat: "no-repeat",
                          textAlign: "left",
                          opacity: "100%",
                          backgroundColor: "",
                        },
                        type: "container",
                      },
                    ],
                  },
                ],
                id: v4(),
                name: "Sevices",
                styles: {},
                type: "services",
              },
            },
          });
          break;
        case "contactForm":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: [],
                id: v4(),
                name: "Contact Form",
                styles: {},
                type: "contactForm",
              },
            },
          });
          break;
        case "contactFormNew":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: [
                  {
                    content: [
                      {
                        id: v4(),
                        name: "container",
                        type: "container",
                        styles: {
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          gap: "10px",
                          paddingLeft: "0px",
                          paddingRight: "0px",
                        },
                        content: [
                          {
                            content: [
                              {
                                id: v4(),
                                name: "text",
                                type: "text",
                                styles: {
                                  color: "black",
                                  ...styles,
                                  width: "fit-content",
                                },
                                content: { innerText: "Name" },
                              },
                              {
                                id: v4(),
                                name: "input",
                                type: "input",
                                styles: {
                                  color: "black",
                                  ...styles,
                                },
                                content: {
                                  placeholder: "Enter Placeholder from sidebar",
                                },
                              },
                            ],
                            id: v4(),
                            name: "Container",
                            styles: {
                              ...defaultStyles,
                              display: "flex",
                              flexDirection: "column",
                              // width: "50%",
                              alignItems: "flex-start",
                              paddingLeft: "0px",
                              paddingRight: "0px",
                            },
                            type: "container",
                          },
                          {
                            content: [
                              {
                                id: v4(),
                                name: "text",
                                type: "text",
                                styles: {
                                  color: "black",
                                  ...styles,
                                  width: "fit-content",
                                },
                                content: { innerText: "Email" },
                              },
                              {
                                id: v4(),
                                name: "input",
                                type: "input",
                                styles: {
                                  color: "black",
                                  ...styles,
                                },
                                content: {
                                  placeholder: "Enter Placeholder from sidebar",
                                },
                              },
                            ],
                            id: v4(),
                            name: "Container",
                            styles: {
                              ...defaultStyles,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              paddingLeft: "0px",
                              paddingRight: "0px",
                            },
                            type: "container",
                          },
                        ],
                      },

                      {
                        id: v4(),
                        name: "text area",
                        type: "textarea",
                        styles: {
                          color: "black",
                          ...styles,
                        },
                        content: {
                          placeholder: "Enter your message here",
                        },
                      },
                    ],
                    id: v4(),
                    name: "Container",
                    styles: {
                      width: "50%",
                      display: "flex",
                      flexDirection: "column",
                    },
                    type: "container",
                  },
                  {
                    id: v4(),
                    name: "container",
                    type: "container",
                    styles: {
                      ...styles,
                      width: "50%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      justifyContent: "center",
                    },
                    content: [
                      {
                        id: v4(),
                        name: "text",
                        type: "text",
                        styles: {
                          color: "black",
                          ...styles,
                          width: "fit-content",
                          fontSize: "30px",
                        },
                        content: { innerText: "Contact Us" },
                      },
                      {
                        id: v4(),
                        name: "text",
                        type: "text",
                        styles: {
                          color: "black",
                          ...styles,
                          width: "fit-content",
                          fontSize: "20px",
                        },
                        content: { innerText: "Send us a message" },
                      },
                    ],
                  },
                ],
                id: v4(),
                name: "Contact Form New",
                styles: {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                },
                type: "contactFormNew",
              },
            },
          });

          break;
        case "paymentForm":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: [],
                id: v4(),
                name: "Contact Form",
                styles: {},
                type: "paymentForm",
              },
            },
          });
          break;
        case "2Col":
          dispatch({
            type: "ADD_ELEMENT",
            payload: {
              containerId: id,
              elementDetails: {
                content: [
                  {
                    content: [],
                    id: v4(),
                    name: "Container",
                    styles: { ...defaultStyles, width: "100%" },
                    type: "container",
                  },
                  {
                    content: [],
                    id: v4(),
                    name: "Container",
                    styles: { ...defaultStyles, width: "100%" },
                    type: "container",
                  },
                ],
                id: v4(),
                name: "Two Columns",
                styles: { ...defaultStyles, display: "flex" },
                type: "2Col",
              },
            },
          });
          break;
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent, type: string) => {
    if (type === "__body") return;
    e.dataTransfer.setData("componentType", type);
  };

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {
        elementDetails: element,
      },
    });
  };

  const handleDeleteElement = () => {
    dispatch({
      type: "DELETE_ELEMENT",
      payload: {
        elementDetails: element,
      },
    });
  };


  
  return (
    <div
      style={styles}
      className={clsx(`relative p-4 transition-all  group `, {
        "max-w-full w-full": type === "container" || type === "2Col",
        "h-fit": type === "container",
        " h-full  outline": type === "__body",
        "overflow-scroll remove-scrollbar": type === "__body",
        "flex flex-col md:!flex-row": type === "2Col",
        "!outline-blue-500":
          state.editor.selectedElement.id === id &&
          !state.editor.liveMode &&
          state.editor.selectedElement.type !== "__body",
        // "pt-5": element.type === "__body" && !state.editor.liveMode,
        "!border-yellow-400 !border-4 ":
          state.editor.selectedElement.id === id &&
          !state.editor.liveMode &&
          state.editor.selectedElement.type === "__body",
        "!outline outline-2":
          state.editor.selectedElement.id === id && !state.editor.liveMode,
        "outline-dashed outline-[2px] outline-slate-300":
          !state.editor.liveMode,
        "min-h-[500px] border-b-[16px] border-red-400  ": type === "section" && !state.editor.liveMode,
        "border-dashed border-[1px] border-slate-300": !state.editor.liveMode,
        "h-[500px]": type === "section",
        [getColorFromPallete("body", pallete) as string]: type === "__body",
        [getColorFromPallete("container", pallete) as string]: type === "container",
        [getColorFromPallete("section", pallete) as string]: type === "section",


      })}
      onDrop={(e) => handleOnDrop(e, type as string)}
      onDragOver={handleDragOver}
      draggable={type !== "__body"}
      onClick={handleOnClickBody}
      onDragStart={(e) => handleDragStart(e, "container")}
    >
      <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
        <DialogTrigger className="m-0 p-0 z-50 absolute -top-[17px] left-1/2 -translate-x-1/2">
          <Badge
            className={clsx(
              " text-xs relative font-semibold  rounded h-fit py-2   hidden",
              {
                "flex":
                  state.editor.selectedElement.id === element.id &&
                  // element.type === "section" &&
                  state.editor.selectedElement.type === "section" &&
                  !state.editor.liveMode,
              }
            )}
            onClick={() => setModalOpener("top")}
          >
            Add section +
          </Badge>
        </DialogTrigger>
        <DialogTrigger className="m-0 p-0 z-50 absolute -bottom-[17px] left-1/2 -translate-x-1/2">
          <Badge
            style={{ zIndex: "100" }}
            className={clsx(
              " text-xs font-semibold  rounded h-fit py-2  hidden",
              {
                flex:
                  state.editor.selectedElement.id === element.id &&
                  // element.type === "section" &&
                  state.editor.selectedElement.type === "section" &&
                  !state.editor.liveMode,
              }
            )}
            onClick={() => setModalOpener("bottom")}
          >
            Add section +
          </Badge>
        </DialogTrigger>
        <DialogContent className="px-0 max-w-[800px] w-full">
          <div className="flex px-4 items-center justify-between">
            <div className="font-bold text-gray-900 ">Add section</div>
            <DialogClose>
              <X width={"16px"} />
            </DialogClose>
          </div>
          <Separator className="mb-4" />
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 md:max-h-96 lg:max-h-96 xl:max-h-[480px] pt-0.5 pb-6 px-4 md:px-6 lg:pr-3 overflow-y-scroll">
            {sections.map((section, key) => (
              <div
                className=" flex group p-4 gap-4 border rounded-md ring-0 ring-indigo-700 cursor-pointer transition-all hover:ring-1 hover:border-indigo-700 hover:shadow-md border-gray-300 justify-between"
                key={key}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false)
                  dispatch({
                    type: "ADD_SECTION",
                    payload: {
                      containerId: id,
                      elementDetails: {
                        "content": Section(section.name),
                        id: v4(),
                        name: "Section",
                        styles: {
                          backgroundColor: "",
                          paddingLeft: "0",
                          paddingRight: "0",
                          paddingTop: "0",
                          paddingBottom: "0",
                        },
                        type: "section",
                      },
                      position: modalOpener as "top" | "bottom",
                    },
                  });
                }}
              >
                <div>
                  <p className="text-sm font-semibold group-hover:text-indigo-700">
                    {section.name}
                  </p>
                  <p className="text-sm mb-2 text-gray-500">
                    {section.description}
                  </p>
                  <p className="text-xs font-medium mb-2 text-gray-800 capitalize">
                    By AIWebHeo
                  </p>
                </div>
                <div className=" flex  rounded-md px-2">
                  <img
                    src={section.icon}
                    className="w-[64px]"
                    alt={section.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Badge
        className={clsx(
          "absolute -top-[23px] z-50 -left-[1px] rounded-none rounded-t-lg hidden",
          {
            block:
              state.editor.selectedElement.id === element.id &&
              !state.editor.liveMode,
          }
        )}
      >
        {element.name}
      </Badge>

      {Array.isArray(content) &&
        content.map((childElement) => (
          <Recursive key={childElement.id} element={childElement} />
        ))}

      <div className=" flex items-center gap-3 absolute -top-[25px] -right-[1px] ">
        {state.editor.selectedElement.id === element.id &&
          !state.editor.liveMode &&
          state.editor.selectedElement.type !== "__body" && (
            <div className=" bg-primary px-2.5 py-1 text-xs font-bold text-white cursor-pointer  rounded-none rounded-t-lg ">
              <Trash
                size={16}
                onClick={handleDeleteElement}
                className=" z-50"
              />
            </div>
          )}
        {/* {state.editor.selectedElement.type === "container" && <TextComponent element={element}/> } */}
        {/* {state.editor.selectedElement.id === element.id &&
        !state.editor.liveMode &&
        state.editor.selectedElement.type === 'section' && (
          <div className=" bg-primary px-2.5 py-1 text-xs font-bold  rounded-none rounded-t-lg ">
            <ArrowUp
              size={16}
              onClick={handleGoUp}
            />
          </div>
        )}
            {  state.editor.selectedElement.id === element.id &&
        !state.editor.liveMode &&
        state.editor.selectedElement.type === 'section' && (
          <div className=" bg-primary px-2.5 py-1 text-xs font-bold  rounded-none rounded-t-lg ">
            <ArrowDown
              size={16}
              onClick={handleDeleteElement}
            />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Container;
