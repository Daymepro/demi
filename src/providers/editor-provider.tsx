"use client";
import React, { Dispatch, useContext, useReducer, createContext, useState } from "react";
import { EditorAction } from "./editor-actions";
import { PageDetails } from "@/app/editor/funnels/[funnelId]/editor/[funnelPageId]/page";
import { apiService } from "@/utils/apiService";
import { useAuth } from "@/context/UserContext";

export type DeviceTypes = "Desktop" | "Tablet" | "Mobile";

export type EditorButton =
  | "text"
  | "container"
  | "section"
  | "contactForm"
  | "contactFormNew"
  | "paymentForm"
  | "link"
  | "2Col"
  | "video"
  | "__body"
  | "image"
  | "input"
  | "textarea"
  | "services"
  | "pricing"
  | "button"
  | null
  | "3Col";
export type EditorElement = {
  id: string;
  styles: React.CSSProperties;
  name: string;
  type: EditorButton;
  content:
    | EditorElement[]
    | {
        href?: string;
        innerText?: string;
        src?: string;
        placeholder?: string;
        content?: string;
      };
};
export type Editor = {
  liveMode: boolean;
  elements: EditorElement[];
  selectedElement: EditorElement;
  device: DeviceTypes;
  previewMode: boolean;
  funnelPageId: string;
};

export type HistoryState = {
  history: Editor[];
  currentIndex: number;
};

export type EditorState = {
  editor: Editor;
  history: HistoryState;
};

export const initialEditorState: EditorState["editor"] = {
  elements: [
    {
      content: [],
      id: "__body",
      name: "Body",
      styles: {},
      type: "__body",
    },
  ],
  selectedElement: {
    content: [],
    id: "",
    name: "",
    styles: {},
    type: null,
  },
  device: "Desktop",
  previewMode: false,
  liveMode: false,
  funnelPageId: "",
};
const initialHistoryState: HistoryState = {
  history: [initialEditorState],
  currentIndex: 0,
};

const initialState: EditorState = {
  editor: initialEditorState,
  history: initialHistoryState,
};
const addAnElement = (
  editorArray: EditorElement[],
  action: EditorAction
): EditorElement[] => {
  if (action.type !== "ADD_ELEMENT")
    throw Error(
      "You sent the wrong action type to the Add Element editor State"
    );
  return editorArray.map((item) => {
    if (item.id === action.payload.containerId && Array.isArray(item.content)) {
      return {
        ...item,
        content: [...item.content, action.payload.elementDetails],
      };
    } else if (item.content && Array.isArray(item.content)) {
      return {
        ...item,
        content: addAnElement(item.content, action),
      };
    }
    return item;
  });
};

const addASection = (
  editorArray: EditorElement[],
  action: EditorAction,
  position: "top" | "bottom"
): EditorElement[] => {
  if (action.type !== "ADD_SECTION")
    throw Error(
      "You sent the wrong action type to the Add Section editor State"
    );
    
  return editorArray.map((item) => {
    if (item.type === "__body") {
      if (position === "top") {
        const indexToAdd =
          (Array.isArray(item.content) &&
            item.content.findIndex(
              (element: EditorElement) =>
                element.id === action.payload.containerId
            )) ||
          0;
        console.log("payload", indexToAdd);
        const newBody =
          Array.isArray(item.content) &&
          [...item.content.slice(0, indexToAdd), action.payload.elementDetails, ...item.content.slice(indexToAdd)]
        console.log("newBody", item.content);
        return {
          ...item,
          content: newBody ? newBody : item.content,
        };
      } else if (position === "bottom") {
        const indexToAdd =
          (Array.isArray(item.content) &&
            item.content.findIndex(
              (element: EditorElement) =>
                element.id === action.payload.containerId
            )) ||
          0;
        console.log("payload", indexToAdd);
        const newBody =
          Array.isArray(item.content) &&
          [...item.content.slice(0, indexToAdd+1), action.payload.elementDetails, ...item.content.slice(indexToAdd+1)]
        console.log("newBody", item.content);
        return {
          ...item,
          content: newBody ? newBody : item.content,
        };
      }
    }
    return item;
  });
};

const deleteAnElement = (
  editorArray: EditorElement[],
  action: EditorAction
): EditorElement[] => {
  if (action.type !== "DELETE_ELEMENT")
    throw Error(
      "You sent the wrong action type to the Delete Element editor State"
    );
  return editorArray.filter((item) => {
    if (item.id === action.payload.elementDetails.id) {
      return false;
    } else if (item.content && Array.isArray(item.content)) {
      item.content = deleteAnElement(item.content, action);
    }
    return true;
  });
};
const updateAnElement = (
  editorArray: EditorElement[],
  action: EditorAction
): EditorElement[] => {
  if (action.type !== "UPDATE_ELEMENT") {
    throw Error("You sent the wrong action type to the update Element State");
  }

  return editorArray.map((item) => {
    if (item.id === action.payload.elementDetails.id) {
      return { ...item, ...action.payload.elementDetails };
    } else if (item.content && Array.isArray(item.content)) {
      return {
        ...item,
        content: updateAnElement(item.content, action),
      };
    }
    return item;
  });
};

const editorReducer = (
  state: EditorState = initialState,
  action: EditorAction
): EditorState => {
  console.log(action);
  switch (action.type) {
    case "ADD_ELEMENT":
      const updatedEditorState = {
        ...state.editor,
        elements: addAnElement(state.editor.elements, action),
      };
      const updatedHistory = [
        ...state.history.history.slice(0, state.history.currentIndex + 1),
        {
          ...updatedEditorState,
        },
      ];
      console.log(updatedEditorState);
      const newEditorState = {
        ...state,
        editor: updatedEditorState,
        history: {
          ...state.history,
          history: updatedHistory,
          currentIndex: updatedHistory.length - 1,
        },
      };
      return newEditorState;

    case "ADD_SECTION":

      const updatedEditorStateWithSection = {
        ...state.editor,
        elements: addASection(
          state.editor.elements,
          action,
          action.payload.position
        ),
      };
      const updatedHistoryWithSection = [
        ...state.history.history.slice(0, state.history.currentIndex + 1),
        {
          ...updatedEditorStateWithSection,
        },
      ];
      const updatedEditorSection = {
        ...state,
        editor: updatedEditorStateWithSection,
        history: {
          ...state.history,
          history: updatedHistoryWithSection,
          currentIndex: updatedHistoryWithSection.length - 1,
        },
      };
 
      return updatedEditorSection;

    case "UPDATE_ELEMENT":
      // Perform your logic to update the element in the state
      const updatedElements = updateAnElement(state.editor.elements, action);

      const UpdatedElementIsSelected =
        state.editor.selectedElement.id === action.payload.elementDetails.id;

      const updatedEditorStateWithUpdate = {
        ...state.editor,
        elements: updatedElements,
        selectedElement: UpdatedElementIsSelected
          ? action.payload.elementDetails
          : {
              id: "",
              content: [],
              name: "",
              styles: {},
              type: null,
            },
      };

      const updatedHistoryWithUpdate = [
        ...state.history.history.slice(0, state.history.currentIndex + 1),
        { ...updatedEditorStateWithUpdate }, // Save a copy of the updated state
      ];
      const updatedEditor = {
        ...state,
        editor: updatedEditorStateWithUpdate,
        history: {
          ...state.history,
          history: updatedHistoryWithUpdate,
          currentIndex: updatedHistoryWithUpdate.length - 1,
        },
      };
      return updatedEditor;

    case "DELETE_ELEMENT":
      // Perform your logic to delete the element from the state
      const updatedElementsAfterDelete = deleteAnElement(
        state.editor.elements,
        action
      );
      const updatedEditorStateAfterDelete = {
        ...state.editor,
        elements: updatedElementsAfterDelete,
      };
      const updatedHistoryAfterDelete = [
        ...state.history.history.slice(0, state.history.currentIndex + 1),
        { ...updatedEditorStateAfterDelete }, // Save a copy of the updated state
      ];

      const deletedState = {
        ...state,
        editor: updatedEditorStateAfterDelete,
        history: {
          ...state.history,
          history: updatedHistoryAfterDelete,
          currentIndex: updatedHistoryAfterDelete.length - 1,
        },
      };
      return deletedState;

    case "CHANGE_CLICKED_ELEMENT":
      const clickedState = {
        ...state,
        editor: {
          ...state.editor,
          selectedElement: action.payload.elementDetails || {
            id: "",
            content: [],
            name: "",
            styles: {},
            type: null,
          },
        },
        history: {
          ...state.history,
          history: [
            ...state.history.history.slice(0, state.history.currentIndex + 1),
            { ...state.editor }, // Save a copy of the current editor state
          ],
          currentIndex: state.history.currentIndex + 1,
        },
      };
      return clickedState;
    case "CHANGE_DEVICE":
      const changedDeviceState = {
        ...state,
        editor: {
          ...state.editor,
          device: action.payload.device,
        },
      };
      return changedDeviceState;

    case "TOGGLE_PREVIEW_MODE":
      const toggleState = {
        ...state,
        editor: {
          ...state.editor,
          previewMode: !state.editor.previewMode,
        },
      };
      return toggleState;

    case "TOGGLE_LIVE_MODE":
      const toggleLiveMode: EditorState = {
        ...state,
        editor: {
          ...state.editor,
          liveMode: action.payload
            ? action.payload.value
            : !state.editor.liveMode,
        },
      };
      return toggleLiveMode;

    case "REDO":
      if (state.history.currentIndex < state.history.history.length - 1) {
        const nextIndex = state.history.currentIndex + 1;
        const nextEditorState = { ...state.history.history[nextIndex] };
        const redoState = {
          ...state,
          editor: nextEditorState,
          history: {
            ...state.history,
            currentIndex: nextIndex,
          },
        };
        return redoState;
      }
      return state;

    case "UNDO":
      if (state.history.currentIndex > 0) {
        const prevIndex = state.history.currentIndex - 1;
        const prevEditorState = { ...state.history.history[prevIndex] };
        const undoState = {
          ...state,
          editor: prevEditorState,
          history: {
            ...state.history,
            currentIndex: prevIndex,
          },
        };
        return undoState;
      }
      return state;

    case "LOAD_DATA":
      return {
        ...initialState,
        editor: {
          ...initialState.editor,
          elements: action.payload.elements || initialEditorState.elements,
          liveMode: !!action.payload.withLive,
        },
      };

    case "SET_FUNNELPAGE_ID":
      const { funnelPageId } = action.payload;
      const updatedEditorStateWithFunnelPageId = {
        ...state.editor,
        funnelPageId,
      };

      const updatedHistoryWithFunnelPageId = [
        ...state.history.history.slice(0, state.history.currentIndex + 1),
        { ...updatedEditorStateWithFunnelPageId }, // Save a copy of the updated state
      ];

      const funnelPageIdState = {
        ...state,
        editor: updatedEditorStateWithFunnelPageId,
        history: {
          ...state.history,
          history: updatedHistoryWithFunnelPageId,
          currentIndex: updatedHistoryWithFunnelPageId.length - 1,
        },
      };
      return funnelPageIdState;
    case "LOAD_LOCALSTORAGE":
      const dataFromStorage = localStorage.getItem(
        action.payload.elementDetails.funnelPageId
      );
      if (dataFromStorage) return JSON.parse(dataFromStorage);
      else return state;
        
    default:
      return state;
  }
};

export type EditorContextData = {
  device: DeviceTypes;
  previewMode: boolean;
  setPreviewMode: (previewMode: boolean) => void;
  setDevice: (device: DeviceTypes) => void;
};

export const EditorContext = createContext<{
  state: EditorState;
  dispatch: Dispatch<EditorAction>;
  funnelId: string;
  pageDetails: any;
  pallete: string
  setPallete: any
  handlePalleteChange: (key: string) => void
}>({
  state: initialState,
  dispatch: () => undefined,
  funnelId: "",
  pageDetails: null,
  pallete: "",
  setPallete: () => {},
  handlePalleteChange: () => {}
});

type EditorProps = {
  children: React.ReactNode;
  funnelId: string;
  pageDetails: PageDetails;
};

const EditorProvider = (props: EditorProps) => {
  const [state, dispatch] = useReducer(editorReducer, initialState);
  const [pallete, setPallete] = useState("first")
  const {token} = useAuth()

  const handlePalleteChange = async (key: string) => {
    const response = await apiService.post(
      `/api/MyWebsite/updatepage/${props.pageDetails.id}`,
      { pallete: key },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log(response)
    setPallete(key)

  }
  return (
    <EditorContext.Provider
      value={{
        state,
        dispatch,
        funnelId: props.funnelId,
        pageDetails: props.pageDetails,
        pallete,
        setPallete,
        handlePalleteChange
      }}
    >
      {props.children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor Hook must be used within the editor Provider");
  }
  return context;
};

export default EditorProvider;

const man = "";
