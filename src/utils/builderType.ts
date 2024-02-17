export type EditorElement = {
    id: string
    styles: React.CSSProperties
    name: string
    type: "container" | "link" | "section" | "video" | "image" | "text" | "contactForm" | "2Col" | "__body" | "3Col" | null
    content: EditorElement[] | { href?: string; innerText?: string; src?: string }
  }
