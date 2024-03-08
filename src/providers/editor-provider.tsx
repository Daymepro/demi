"use client";
import React, { Dispatch, useContext, useReducer, createContext } from "react";
import { EditorAction } from "./editor-actions";

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
}>({
  state: initialState,
  dispatch: () => undefined,
  funnelId: "",
  pageDetails: null,
});

type EditorProps = {
  children: React.ReactNode;
  funnelId: string;
  pageDetails: any;
};

const EditorProvider = (props: EditorProps) => {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  return (
    <EditorContext.Provider
      value={{
        state,
        dispatch,
        funnelId: props.funnelId,
        pageDetails: props.pageDetails,
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

const man = [
  {
    content: [
      {
        content: [],
        id: "1991e0c8-f5d8-4a9d-9491-dee8737579d2",
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
                id: "971e9a53-6d70-44fc-a800-d33caf118166",
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
                id: "f147c878-7460-4bd5-8267-c473ffc9e3fa",
                name: "Text",
                styles: {
                  color: "black",
                  backgroundPosition: "center",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  textAlign: "left",
                  opacity: "100%",
                  "font-weight": "bold",
                  fontSize: "30px",
                },
                type: "text",
              },
              {
                content: { innerText: "Per Project" },
                id: "0fd9950c-2d71-49aa-b3f5-a04c0963858f",
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
                id: "f721a65a-1543-46ac-8e4f-5b088feb888d",
                name: "Text",
                styles: {
                  color: "black",
                  backgroundPosition: "center",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  textAlign: "left",
                  opacity: "100%",
                  "font-weight": "bold",
                },
                type: "text",
              },
              {
                content: { innerText: "✓ Details" },
                id: "06ee1363-b26b-4a40-ba8d-58b8caed3bf9",
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
                id: "2297d2af-547e-43b1-83ca-b07ca265740e",
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
                id: "60fce882-369b-4dee-a77a-3f696059d87b",
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
                id: "0ee1dae1-3a2d-4a47-9d0d-5635f439c40f",
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
            id: "090881ee-2a53-4a66-bc08-2fa41e76f4ba",
            name: "Container",
            styles: {},
            type: "container",
          },
        ],
        id: "39843fad-9d81-45e2-bf03-c6cdd79456dc",
        name: "Container",
        styles: {},
        type: "container",
      },
    ],
    id: "2cbaf6cd-eb37-4f72-8cde-84f6930bf9a9",
    name: "Container",
    styles: {
      maxWidth: "570px",
      display: "flex",
      flexDirection: "column",
      rowGap: "10px",
    },
    type: "container",
  },
  {
    content: [],
    id: "a5609d80-a66f-4bb4-aae4-0b32c565471c",
    name: "Container",
    styles: { maxWidth: "570px" },
    type: "container",
  },
  {
    content: [],
    id: "071745de-ef43-44bc-996c-227d1598591f",
    name: "Container",
    styles: { maxWidth: "570px" },
    type: "container",
  },
];
