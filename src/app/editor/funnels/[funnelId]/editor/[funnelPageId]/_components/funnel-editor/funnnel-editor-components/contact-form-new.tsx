"use client";
import { Badge } from "@/components/ui/badge";
import { EditorBtns, defaultStyles } from "@/lib/contants";
import { EditorElement, useEditor } from "@/providers/editor-provider";
import clsx from "clsx";
import React from "react";
import { v4 } from "uuid";
import Recursive from "./recursive";
import { ArrowDown, ArrowUp, Trash } from "lucide-react";
import TextComponent from "./textComponent";

type Props = { element: EditorElement };

const ContactFormComponentNew = ({ element }: Props) => {
  const { id, content, name, styles, type } = element;
  const { dispatch, state } = useEditor();

  const handleOnDrop = (e: React.DragEvent, type: string) => {
    e.stopPropagation();
    const componentType = e.dataTransfer.getData("componentType") as EditorBtns;

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
    //   case "video":
        // dispatch({
        //   type: "ADD_ELEMENT",
        //   payload: {
        //     containerId: id,
        //     elementDetails: {
        //       content: {
        //         src: "https://www.youtube.com",
        //       },
        //       id: v4(),
        //       name: "Video",
        //       styles: {},
        //       type: "video",
        //     },
        //   },
        // });
        // break;
        // case "image":
        //   dispatch({
        //     type: "ADD_ELEMENT",
        //     payload: {
        //       containerId: id,
        //       elementDetails: {
        //         content: {
        //           src: "",
        //         },
        //         id: v4(),
        //         name: "image",
        //         styles: {},
        //         type: "image",
        //       },
        //     },
        //   });
        //   break;
    //   case "container":
    //     dispatch({
    //       type: "ADD_ELEMENT",
    //       payload: {
    //         containerId: id,
    //         elementDetails: {
    //           content: [],
    //           id: v4(),
    //           name: "Container",
    //           styles: { ...defaultStyles },
    //           type: "container",
    //         },
    //       },
    //     });
    //     break;
    //   case "contactForm":
    //     dispatch({
    //       type: "ADD_ELEMENT",
    //       payload: {
    //         containerId: id,
    //         elementDetails: {
    //           content: [],
    //           id: v4(),
    //           name: "Contact Form",
    //           styles: {},
    //           type: "contactForm",
    //         },
    //       },
    //     });
    //     break;
    //   case "contactFormNew":
    //     dispatch({
    //       type: "ADD_ELEMENT",
    //       payload: {
    //         containerId: id,
    //         elementDetails: {
    //             content: [
    //                         {
    //                             id: v4(),
    //                             name: "text",
    //                             type: "text",
    //                             styles: {
    //                                 color: "black",
    //                                 ...styles,
    //                             },
    //                             content: { innerText: "Name" },
    //                         },
    //                         {
    //                             id: v4(),
    //                             name: "input",
    //                             type: "input",
    //                             styles: {
    //                                 color: "black",
    //                                 ...styles,
    //                             },
    //                             content: { placeholder: "Enter Placeholder from sidebar" },
    //                         }
    //                     ],
    //           id: v4(),
    //           name: "Contact Form New",
    //           styles: {},
    //           type: "contactFormNew",
    //         },
    //       },
    //     });
        
    //     break;
    //   case "paymentForm":
    //     dispatch({
    //       type: "ADD_ELEMENT",
    //       payload: {
    //         containerId: id,
    //         elementDetails: {
    //           content: [],
    //           id: v4(),
    //           name: "Contact Form",
    //           styles: {},
    //           type: "paymentForm",
    //         },
    //       },
    //     });
    //     break;
    //   case "2Col":
    //     dispatch({
    //       type: "ADD_ELEMENT",
    //       payload: {
    //         containerId: id,
    //         elementDetails: {
    //           content: [
    //             {
    //               content: [],
    //               id: v4(),
    //               name: "Container",
    //               styles: { ...defaultStyles, width: "100%" },
    //               type: "container",
    //             },
    //             {
    //               content: [],
    //               id: v4(),
    //               name: "Container",
    //               styles: { ...defaultStyles, width: "100%" },
    //               type: "container",
    //             },
    //           ],
    //           id: v4(),
    //           name: "Two Columns",
    //           styles: { ...defaultStyles, display: "flex" },
    //           type: "2Col",
    //         },
    //       },
    //     });
    //     break;
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
  console.log(element)

  return (
    <div
      style={styles}
      className={clsx("relative p-4 transition-all remove-scrollbar group", {
        "max-w-full w-full": type === "container" || type === "2Col",
        "h-fit": type === "container",
        "h-full border": type === "__body",
        "overflow-scroll ": type === "__body",
        "flex flex-col md:!flex-row": type === "2Col",
        "!border-blue-500":
          state.editor.selectedElement.id === id &&
          !state.editor.liveMode &&
          state.editor.selectedElement.type !== "__body",
        "!border-yellow-400 !border-4":
          state.editor.selectedElement.id === id &&
          !state.editor.liveMode &&
          state.editor.selectedElement.type === "__body",
        "!border-solid":
          state.editor.selectedElement.id === id && !state.editor.liveMode,
        "border-dashed border-[1px] border-slate-300": !state.editor.liveMode,
        "h-[500px]": type === 'section',
      })}
      onDrop={(e) => handleOnDrop(e, id)}
      onDragOver={handleDragOver}
      draggable={type !== "__body"}
      onClick={handleOnClickBody}
      onDragStart={(e) => handleDragStart(e, "container")}
    >
      <Badge
        className={clsx(
          "absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg hidden",
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
              <Trash size={16} onClick={handleDeleteElement} />
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

export default ContactFormComponentNew;
