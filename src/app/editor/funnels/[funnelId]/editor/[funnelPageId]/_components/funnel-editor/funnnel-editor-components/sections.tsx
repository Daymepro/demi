import { useEditor } from '@/providers/editor-provider';
import React from 'react'
import { v4 } from 'uuid';
import { EditorElement } from '@/utils/builderType';
import { SectionNames } from '@/lib/contants';

type Props = {
    name: string
    modalOpener: string | null
    id: string
}

const Section = (name:SectionNames): EditorElement[] => {
    console.log(name)
  switch (name) {
    case 'Banner':
        return [
            {
              "content": [
                {
                  "content": [
                    {
                      "content": {
                        "innerText": "Transform your Product with hack design"
                      },
                      "id": v4(),
                      "name": "Text",
                      "styles": {
                        "color": "White",
                        "backgroundPosition": "center",
                        "objectFit": "cover",
                        "backgroundRepeat": "no-repeat",
                        "textAlign": "left",
                        "opacity": "100%",
                        // "DM Sans": "",
                        "fontWeight": "bold",
                        "fontSize": "50px"
                      },
                      "type": "text"
                    },
                    {
                      "content": {
                        "innerText": "Lorem ipsum dolor sit amet consectetur. Venenatis quam egestas quis lectus commodo. Integer lectus purus curabitur lacus fames. Gravida lectus suspendisse vitae vulputate nulla praesent proin lectus."
                      },
                      "id": v4(),
                      "name": "Text",
                      "styles": {
                        "color": "white",
                        "backgroundPosition": "center",
                        "objectFit": "cover",
                        "backgroundRepeat": "no-repeat",
                        "textAlign": "left",
                        "opacity": "100%"
                      },
                      "type": "text"
                    }
                  ],
                  "id": v4(),
                  "name": "Container",
                  "styles": {
                    "maxWidth": "60%"
                  },
                  "type": "container"
                }
              ],
              "id": v4(),
              "name": "Container",
              "styles": {
                "backgroundImage": "url(https://images.unsplash.com/photo-1543269664-647163ef2ee4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                "backgroundSize": "cover"
              },
              "type": "container"
            }
          ]
    case 'Text':
        return [
            {
              "content": [
                {
                  "content": {
                    "innerText": "Branding and logo design"
                  },
                  "id": v4(),
                  "name": "Text",
                  "styles": {
                    "color": "black",
                    "backgroundPosition": "center",
                    "objectFit": "cover",
                    "backgroundRepeat": "no-repeat",
                    "textAlign": "left",
                    "opacity": "100%",
                    "fontSize": "30px",
                    "fontWeight": "bold",
                    "display": "flex"
                  },
                  "type": "text"
                },
                {
                  "content": {
                    "innerText": "Branding and logo design are pivotal components of any business's identity and marketing strategy. Branding encompasses the overall image and reputation of a company, including its values, personality, and the emotional connection it establishes with its audience. A logo, on the other hand, serves as a visual symbol that represents the essence of the brand, aiming to evoke specific emotions and associations. Effective branding and logo design help differentiate a company from its competitors, build trust and credibility with customers, and foster loyalty. By crafting a cohesive brand identity and memorable logo, businesses can effectively communicate their values, resonate with their target audience, and ultimately drive success in the market."
                  },
                  "id": v4(),
                  "name": "Text",
                  "styles": {
                    "color": "black",
                    "backgroundPosition": "center",
                    "objectFit": "cover",
                    "backgroundRepeat": "no-repeat",
                    "textAlign": "left",
                    "opacity": "100%",
                    "borderRadius": "14px",
                    "borderWidth": "3px",
                    "paddingTop": "5px",
                    "paddingBottom": "5px",
                    "paddingLeft": "05px",
                    "paddingRight": "05px"
                  },
                  "type": "text"
                }
              ],
              "id": v4(),
              "name": "container",
              "styles": {
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "center",
                "backgroundSize": "cover",
                "alignItems": "center"
              },
              "type": "container"
            }
          ]
  
    default:
       return [];
  }
}

export default Section