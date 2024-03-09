'use client'
import { Button } from "@/components/ui/button";
import { EditorElement, useEditor } from "@/providers/editor-provider";
import clsx from "clsx";
import { EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import Recursive from './funnnel-editor-components/recursive'
import { apiService } from "@/utils/apiService";
import { useAuth } from "@/context/UserContext";

type Props = {
  funnelPageId: string;
  liveMode?: boolean;
}
export  const hardCodeDefault = [{
  "id": "landingPage",
  "styles": {
    "textAlign": "center",
    "display": "block",
    "backgroundColor": "beige",
    "flexDirection": "column",
    "color": "",
    "paddingLeft": "0px",
    "paddingRight": "0px",
    "marginBottom": "",
    "paddingBottom": "150px"
  },
  "name": "Body",
  "type": "__body",
  "content": [
    {
      "content": [
        {
          "content": {
            "innerText": "TimiCivil"
          },
          "id": "317c9c95-17a4-446e-8437-958b1a8571a8",
          "name": "Text",
          "styles": {
            "color": "black",
            "backgroundPosition": "center",
            "objectFit": "cover",
            "backgroundRepeat": "no-repeat",
            "textAlign": "left",
            "opacity": "100%",
            "font-weight": "bold",
            "fontSize": "40px"
          },
          "type": "text"
        }
      ],
      "id": "f895b670-3b6a-4884-aaa7-14f81104d031",
      "name": "Container",
      "styles": {},
      "type": "container"
    },
    {
      "content": [
        {
          "content": {
            "innerText": "TimiCivil Engineering"
          },
          "id": "2fd9dc35-f4f3-459b-b829-bc7c0af0b0cf",
          "name": "Text",
          "styles": {
            "color": "#FAFAFA",
            "backgroundPosition": "center",
            "objectFit": "cover",
            "backgroundRepeat": "no-repeat",
            "textAlign": "left",
            "opacity": "100%",
            "font-weight": "bold",
            "fontSize": "80px"
          },
          "type": "text"
        },
        {
          "content": {
            "innerText": "Experience cutting-edge civil engineering with TimiCivil - your foundation for innovation."
          },
          "id": "a99359cd-70da-46ac-8607-230c796a6e53",
          "name": "Text",
          "styles": {
            "color": "#FAFAFA",
            "backgroundPosition": "center",
            "objectFit": "cover",
            "backgroundRepeat": "no-repeat",
            "textAlign": "left",
            "opacity": "100%",
            "fontSize": "30px"
          },
          "type": "text"
        },
        {
          "content": {
            "content": "New button"
          },
          "id": "4bc1a10d-dd0e-4b19-b45d-ab64b215982a",
          "name": "button",
          "styles": {
            "width": "fit-content",
            "height": ""
          },
          "type": "button"
        }
      ],
      "id": "af3c1389-401c-4e23-b92e-37b2a4c63896",
      "name": "Container",
      "styles": {
        "backgroundImage": "url(https://images.unsplash.com/photo-1490775949603-0e355e8e01ba?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        "backgroundSize": "cover",
        "color": "white",
        "height": "800px",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "normal",
        "justifyContent": "center"
      },
      "type": "container"
    },
    {
      "content": [
        {
          "content": {
            "innerText": "Shape Utah's Infrastructure"
          },
          "id": "f0c140e5-89f2-453d-af0f-35375a5562e0",
          "name": "Text",
          "styles": {
            "color": "Beige",
            "backgroundPosition": "center",
            "objectFit": "cover",
            "backgroundRepeat": "no-repeat",
            "textAlign": "center",
            "opacity": "100%",
            "fontSize": "96px",
            "font-weight": "bold",
            "maxWidth": "800px"
          },
          "type": "text"
        },
        {
          "content": {
            "innerText": "Expert civil engineering services for a robust and sustainable urban development."
          },
          "id": "71832915-58ae-4ab9-82e9-f3493aa62dff",
          "name": "Text",
          "styles": {
            "color": "Beige",
            "backgroundPosition": "center",
            "objectFit": "cover",
            "backgroundRepeat": "no-repeat",
            "textAlign": "center",
            "opacity": "100%",
            "fontSize": "36px",
            "width": "",
            "maxWidth": "800px"
          },
          "type": "text"
        },
        {
          "content": {
            "innerText": "Get Started"
          },
          "id": "4827c070-c960-4dae-9497-77274382c775",
          "name": "Link",
          "styles": {
            "color": "Beige",
            "backgroundPosition": "center",
            "objectFit": "cover",
            "backgroundRepeat": "no-repeat",
            "textAlign": "center",
            "opacity": "100%",
            "maxWidth": "800px"
          },
          "type": "link"
        }
      ],
      "id": "41a88110-a718-4639-ab3c-b3bbce6c4fc6",
      "name": "Container",
      "styles": {
        "backgroundColor": "#483C32",
        "height": "700px",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center"
      },
      "type": "container"
    },
    {
      "content": [
        {
          "content": [
            {
              "content": [
                {
                  "content": [],
                  "id": "4fdcc82e-b865-40dc-82b0-3ca055ca9937",
                  "name": "Container",
                  "styles": {
                    "height": "400px",
                    "borderRadius": "30px",
                    "backgroundImage": "url(https://images.unsplash.com/photo-1455165814004-1126a7199f9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVuZ2luZWVyaW5nfGVufDB8fDB8fHww)",
                    "borderWidth": "0px"
                  },
                  "type": "container"
                },
                {
                  "content": [
                    {
                      "content": [
                        {
                          "content": {
                            "innerText": "Standard Civil Engineering Plan"
                          },
                          "id": "ba511899-7afb-4baf-a279-f8244934d45b",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontSize": "25px"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "$500"
                          },
                          "id": "f4b757f4-5d4b-435e-8b4f-43f1158abb2a",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontWeight": "bold",
                            "fontSize": "30px"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Per Project"
                          },
                          "id": "f091dda0-fcaa-4c97-a13c-f2bb3168e08a",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Comprehensive Plans For Projects"
                          },
                          "id": "913996fb-d00a-4de1-a825-550febd27af1",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontWeight": "bold"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Details"
                          },
                          "id": "f2f3fd1f-bc07-46a4-bcdc-bad2c186846f",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Analysis"
                          },
                          "id": "3e8ddf93-2f61-439d-9b50-a9279b5482f2",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Blueprints"
                          },
                          "id": "f9a4565f-64a3-4374-beae-173df27c5421",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Supervision"
                          },
                          "id": "5750e7ca-0360-4595-96b9-0f5e1b824c9e",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        }
                      ],
                      "id": "5986b747-b310-47db-b68c-c0f40d7a0fb4",
                      "name": "Container",
                      "styles": {},
                      "type": "container"
                    }
                  ],
                  "id": "5d481ff0-93fd-47f1-94b9-b2a76cd81662",
                  "name": "Container",
                  "styles": {
                    "width": "fit-content"
                  },
                  "type": "container"
                }
              ],
              "id": "b9e8c683-ee47-45a9-b238-8d1d2a0e6394",
              "name": "Container",
              "styles": {
                "maxWidth": "570px",
                "display": "flex",
                "flexDirection": "column",
                "rowGap": "10px"
              },
              "type": "container"
            }
          ],
          "id": "f8ccca1c-a3e3-4316-89ff-30e4950ec510",
          "name": "Pricing",
          "styles": {
            "width": "fit-content"
          },
          "type": "pricing"
        },
        {
          "content": [
            {
              "content": [
                {
                  "content": [],
                  "id": "a3bac98d-c85b-4fe9-9e35-4d91d242e904",
                  "name": "Container",
                  "styles": {
                    "height": "400px",
                    "borderRadius": "30px",
                    "backgroundImage": "url(https://images.unsplash.com/photo-1455165814004-1126a7199f9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVuZ2luZWVyaW5nfGVufDB8fDB8fHww)",
                    "borderWidth": "0px"
                  },
                  "type": "container"
                },
                {
                  "content": [
                    {
                      "content": [
                        {
                          "content": {
                            "innerText": "Standard Civil Engineering Plan"
                          },
                          "id": "26e7d62f-c419-43b4-a977-6423895c5eb7",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontSize": "25px"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "$500"
                          },
                          "id": "8195dbe9-9b2e-43b3-a897-1939e1795990",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontWeight": "bold",
                            "fontSize": "30px"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Per Project"
                          },
                          "id": "6ebdf7f3-3ce8-4eed-93b6-ac585e93bdf6",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Comprehensive Plans For Projects"
                          },
                          "id": "6c45af48-252d-4c75-8c78-6fd278eda8e5",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontWeight": "bold"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Details"
                          },
                          "id": "66c58100-582b-46b5-99f0-9f715a15dd92",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Analysis"
                          },
                          "id": "bfe5bf2c-fe8b-4a89-aefc-be98474d076a",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Blueprints"
                          },
                          "id": "2d77bb5c-24ea-4f42-95dd-16e7def0f7ae",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Supervision"
                          },
                          "id": "0e67338b-ac38-4253-8fb0-29ed907b99d3",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        }
                      ],
                      "id": "2ac10a4a-eab6-4ef8-bd6f-ccf1f2b1fcb9",
                      "name": "Container",
                      "styles": {},
                      "type": "container"
                    }
                  ],
                  "id": "093affa1-ceeb-40dc-9d7c-0906afed8897",
                  "name": "Container",
                  "styles": {
                    "width": "fit-content"
                  },
                  "type": "container"
                }
              ],
              "id": "9540042b-f780-4131-a845-c0e2bf7f6b51",
              "name": "Container",
              "styles": {
                "maxWidth": "570px",
                "display": "flex",
                "flexDirection": "column",
                "rowGap": "10px"
              },
              "type": "container"
            }
          ],
          "id": "bbfd74ba-29f8-4bd0-bd18-b89c0e98631c",
          "name": "Pricing",
          "styles": {
            "width": "fit-content"
          },
          "type": "pricing"
        },
        {
          "content": [
            {
              "content": [
                {
                  "content": [],
                  "id": "10eaff56-2a79-4fca-bcf8-dc67eab13257",
                  "name": "Container",
                  "styles": {
                    "height": "400px",
                    "borderRadius": "30px",
                    "backgroundImage": "url(https://images.unsplash.com/photo-1455165814004-1126a7199f9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVuZ2luZWVyaW5nfGVufDB8fDB8fHww)",
                    "borderWidth": "0px"
                  },
                  "type": "container"
                },
                {
                  "content": [
                    {
                      "content": [
                        {
                          "content": {
                            "innerText": "Standard Civil Engineering Plan"
                          },
                          "id": "2ba86dc9-e67a-4a29-853c-43120ea41a71",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontSize": "25px"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "$500"
                          },
                          "id": "13689119-abf1-4c20-a974-98ce212de303",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontWeight": "bold",
                            "fontSize": "30px"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Per Project"
                          },
                          "id": "1881b0c3-b409-460c-a0c5-e7c5e5e5684e",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Comprehensive Plans For Projects"
                          },
                          "id": "123e15e8-9df3-4717-991c-55776fab6a88",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontWeight": "bold"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Details"
                          },
                          "id": "b03f4c9f-42b3-4792-b194-3cc06cb35e25",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Analysis"
                          },
                          "id": "2ecac53e-96e7-4b29-a83a-aa5427ae190f",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Blueprints"
                          },
                          "id": "1fd07d53-e35e-4042-a160-3f4d2edd3d35",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Supervision"
                          },
                          "id": "f0eb90ed-6d86-45ec-b0fc-1bbf1d907371",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        }
                      ],
                      "id": "ef53ab81-260a-4d2d-82c9-0808c1135838",
                      "name": "Container",
                      "styles": {},
                      "type": "container"
                    }
                  ],
                  "id": "70da1172-0af8-41d2-9343-8eac6b03eb55",
                  "name": "Container",
                  "styles": {
                    "width": "fit-content"
                  },
                  "type": "container"
                }
              ],
              "id": "c629c01f-9489-453f-a48c-fcf775881fa8",
              "name": "Container",
              "styles": {
                "maxWidth": "570px",
                "display": "flex",
                "flexDirection": "column",
                "rowGap": "10px"
              },
              "type": "container"
            }
          ],
          "id": "884c5c68-511e-4fb3-ae45-689cc67c7e2d",
          "name": "Pricing",
          "styles": {
            "width": "fit-content"
          },
          "type": "pricing"
        },
        {
          "content": [
            {
              "content": [
                {
                  "content": [],
                  "id": "ee2f6d5e-beb7-467b-999e-a7e786e250b3",
                  "name": "Container",
                  "styles": {
                    "height": "400px",
                    "borderRadius": "30px",
                    "backgroundImage": "url(https://images.unsplash.com/photo-1455165814004-1126a7199f9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVuZ2luZWVyaW5nfGVufDB8fDB8fHww)",
                    "borderWidth": "0px"
                  },
                  "type": "container"
                },
                {
                  "content": [
                    {
                      "content": [
                        {
                          "content": {
                            "innerText": "Standard Civil Engineering Plan"
                          },
                          "id": "a3d63db7-e766-468c-9b89-f14503174d86",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontSize": "25px"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "$500"
                          },
                          "id": "557f849f-ff50-44c8-b7d0-60eec5a4292d",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontWeight": "bold",
                            "fontSize": "30px"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Per Project"
                          },
                          "id": "2971a34c-b7a1-4f0f-9782-2d4a2dfc8406",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Comprehensive Plans For Projects"
                          },
                          "id": "b972618c-9f00-4c05-b5cc-cff48653d550",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontWeight": "bold"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Details"
                          },
                          "id": "10ea16be-9863-4a8b-853c-4d786447f63d",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Analysis"
                          },
                          "id": "efd316de-f08e-4eec-8aa8-81484133ff8c",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Blueprints"
                          },
                          "id": "0d8e6366-a263-4706-8f25-e19ced749517",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Supervision"
                          },
                          "id": "e977244d-24e1-41bb-892e-a5b1c8f962bb",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        }
                      ],
                      "id": "06a088ea-0064-4392-8d41-e4a80ad2c6b3",
                      "name": "Container",
                      "styles": {},
                      "type": "container"
                    }
                  ],
                  "id": "fa4ce43d-9d00-4fc0-bb7c-f0bd7e2797bf",
                  "name": "Container",
                  "styles": {
                    "width": "fit-content"
                  },
                  "type": "container"
                }
              ],
              "id": "d9119bf6-d0df-46db-9974-741a307f49ae",
              "name": "Container",
              "styles": {
                "maxWidth": "570px",
                "display": "flex",
                "flexDirection": "column",
                "rowGap": "10px"
              },
              "type": "container"
            }
          ],
          "id": "c572bdde-3a22-4644-a165-aaedb7276a38",
          "name": "Pricing",
          "styles": {
            "width": "fit-content"
          },
          "type": "pricing"
        },
        {
          "content": [
            {
              "content": [
                {
                  "content": [],
                  "id": "b4117e72-9ece-4de7-ba6c-7cac5fb92af8",
                  "name": "Container",
                  "styles": {
                    "height": "400px",
                    "borderRadius": "30px",
                    "backgroundImage": "url(https://images.unsplash.com/photo-1455165814004-1126a7199f9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVuZ2luZWVyaW5nfGVufDB8fDB8fHww)",
                    "borderWidth": "0px"
                  },
                  "type": "container"
                },
                {
                  "content": [
                    {
                      "content": [
                        {
                          "content": {
                            "innerText": "Standard Civil Engineering Plan"
                          },
                          "id": "f7b8afa8-40a4-4c4e-b44c-c9cece12d380",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontSize": "25px"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "$500"
                          },
                          "id": "f8bb0d6c-edc0-4495-bb7c-f71002f82b51",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontWeight": "bold",
                            "fontSize": "30px"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Per Project"
                          },
                          "id": "f882cfbd-437a-4ae9-a7f9-e01236842356",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Comprehensive Plans For Projects"
                          },
                          "id": "0fcb0109-8209-4a1a-9821-004a165e9375",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%",
                            "fontWeight": "bold"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Details"
                          },
                          "id": "531feb31-7973-45b9-aea6-b8d76ffd8c45",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Analysis"
                          },
                          "id": "90475fc5-bded-4ded-bebc-24a2808bab17",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Blueprints"
                          },
                          "id": "fdfaddb9-ef6d-4833-804a-139bc83b3ec4",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "✓ Supervision"
                          },
                          "id": "eeffbd42-c86c-4ecf-9a70-2e90c5d297de",
                          "name": "Text",
                          "styles": {
                            "color": "black",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "left",
                            "opacity": "100%"
                          },
                          "type": "text"
                        }
                      ],
                      "id": "9c0d608f-ebc5-4909-8784-94aa24221081",
                      "name": "Container",
                      "styles": {},
                      "type": "container"
                    }
                  ],
                  "id": "0a584026-bb14-40df-b507-cd2755780d9d",
                  "name": "Container",
                  "styles": {
                    "width": "fit-content"
                  },
                  "type": "container"
                }
              ],
              "id": "1f39b811-e921-444a-a78d-0327cea3918b",
              "name": "Container",
              "styles": {
                "maxWidth": "570px",
                "display": "flex",
                "flexDirection": "column",
                "rowGap": "10px"
              },
              "type": "container"
            }
          ],
          "id": "cc654ef1-d813-410c-822d-5fbe20154858",
          "name": "Pricing",
          "styles": {
            "width": "fit-content"
          },
          "type": "pricing"
        }
      ],
      "id": "8217144e-898c-408b-ae6e-239f92a1b58b",
      "name": "Container",
      "styles": {
        "flexWrap": "wrap",
        "display": "flex",
        "justifyContent": "space-evenly",
        "backgroundSize": "contain",
        "alignItems": "center"
      },
      "type": "container"
    },
    {
      "content": [
        {
          "id": "fdf7182c-b253-4dce-9315-0d0be970d370",
          "styles": {
            "textAlign": "center",
            "display": "flex",
            "backgroundColor": "",
            "flexDirection": "column",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingRight": "0px",
            "paddingLeft": "0px",
            "marginTop": "0px",
            "marginBottom": "0px",
            "marginLeft": "0px",
            "marginRight": "0px"
          },
          "name": "Services",
          "type": "container",
          "content": [
            {
              "content": [
                {
                  "content": [
                    {
                      "content": {
                        "innerText": "Civil Engineering Services"
                      },
                      "id": "a9d786fd-600e-4005-94d0-ef392aa077dc",
                      "name": "Text",
                      "styles": {
                        "color": "black",
                        "backgroundPosition": "center",
                        "objectFit": "cover",
                        "backgroundRepeat": "no-repeat",
                        "textAlign": "center",
                        "opacity": "100%",
                        "fontSize": "48px",
                        "fontWeight": "bold"
                      },
                      "type": "text"
                    }
                  ],
                  "id": "acb313c8-072d-4d68-9ef7-44ad140cf1ac",
                  "name": "Container",
                  "styles": {
                    "backgroundPosition": "center",
                    "objectFit": "cover",
                    "backgroundRepeat": "no-repeat",
                    "textAlign": "left",
                    "opacity": "100%"
                  },
                  "type": "container"
                },
                {
                  "content": [
                    {
                      "content": [
                        {
                          "content": {
                            "innerText": "Structural Analysis and Design"
                          },
                          "id": "ce350122-dbae-4dc6-b4aa-e443df0bd660",
                          "name": "Text",
                          "styles": {
                            "color": "beige",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "center",
                            "opacity": "100%",
                            "fontSize": "28px",
                            "fontWeight": "bold"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Our team provides comprehensive structural analysis and design services, ensuring the safety and efficiency of your construction projects."
                          },
                          "id": "6b65db2a-d616-452f-a8b2-031ef0b021e9",
                          "name": "Text",
                          "styles": {
                            "color": "beige",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "center",
                            "opacity": "100%"
                          },
                          "type": "text"
                        }
                      ],
                      "id": "fc1523ae-2160-46ed-9966-fd882acfb24b",
                      "name": "Container",
                      "styles": {
                        "backgroundPosition": "center",
                        "objectFit": "cover",
                        "backgroundRepeat": "no-repeat",
                        "textAlign": "left",
                        "opacity": "100%",
                        "marginLeft": "32px",
                        "marginRight": "32px",
                        "minWidth": "300px",
                        "maxWidth": "500px",
                        "backgroundImage": "url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                        "height": "400px",
                        "display": "flex",
                        "flexDirection": "column",
                        "backgroundSize": "cover",
                        "alignItems": "center",
                        "justifyContent": "center",
                        "paddingLeft": "30px",
                        "paddingRight": "30px"
                      },
                      "type": "container"
                    },
                    {
                      "content": [
                        {
                          "content": {
                            "innerText": "Structural Analysis and Design"
                          },
                          "id": "ce350122-dbae-4dc6-b4aa-e443df0bd660",
                          "name": "Text",
                          "styles": {
                            "color": "beige",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "center",
                            "opacity": "100%",
                            "fontSize": "28px",
                            "fontWeight": "bold"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Our team provides comprehensive structural analysis and design services, ensuring the safety and efficiency of your construction projects."
                          },
                          "id": "6b65db2a-d616-452f-a8b2-031ef0b021e9",
                          "name": "Text",
                          "styles": {
                            "color": "beige",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "center",
                            "opacity": "100%"
                          },
                          "type": "text"
                        }
                      ],
                      "id": "3b6fc1f9-e7d0-4626-bad4-b9ad1b49a769",
                      "name": "Container",
                      "styles": {
                        "backgroundPosition": "center",
                        "objectFit": "cover",
                        "backgroundRepeat": "no-repeat",
                        "textAlign": "left",
                        "opacity": "100%",
                        "marginLeft": "32px",
                        "marginRight": "32px",
                        "minWidth": "300px",
                        "maxWidth": "500px",
                        "backgroundImage": "url(https://images.unsplash.com/photo-1498631906572-66c58d46ecf7?q=80&w=2566&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                        "height": "400px",
                        "display": "flex",
                        "flexDirection": "column",
                        "backgroundSize": "cover",
                        "justifyContent": "center"
                      },
                      "type": "container"
                    },
                    {
                      "content": [
                        {
                          "content": {
                            "innerText": "Structural Analysis and Design"
                          },
                          "id": "ce350122-dbae-4dc6-b4aa-e443df0bd660",
                          "name": "Text",
                          "styles": {
                            "color": "beige",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "center",
                            "opacity": "100%",
                            "fontSize": "28px",
                            "fontWeight": "bold"
                          },
                          "type": "text"
                        },
                        {
                          "content": {
                            "innerText": "Our team provides comprehensive structural analysis and design services, ensuring the safety and efficiency of your construction projects."
                          },
                          "id": "6b65db2a-d616-452f-a8b2-031ef0b021e9",
                          "name": "Text",
                          "styles": {
                            "color": "beige",
                            "backgroundPosition": "center",
                            "objectFit": "cover",
                            "backgroundRepeat": "no-repeat",
                            "textAlign": "center",
                            "opacity": "100%"
                          },
                          "type": "text"
                        }
                      ],
                      "id": "3c7a914b-0722-4bc8-b796-50749e3e7c24",
                      "name": "Container",
                      "styles": {
                        "backgroundPosition": "center",
                        "objectFit": "cover",
                        "backgroundRepeat": "no-repeat",
                        "textAlign": "left",
                        "opacity": "100%",
                        "marginLeft": "32px",
                        "marginRight": "32px",
                        "minWidth": "300px",
                        "maxWidth": "500px",
                        "backgroundImage": "url(https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                        "height": "400px",
                        "display": "flex",
                        "flexDirection": "column",
                        "backgroundSize": "cover",
                        "justifyContent": "center"
                      },
                      "type": "container"
                    }
                  ],
                  "id": "4a3b9e79-9f3e-48db-b13b-9649fa4d383c",
                  "name": "Container",
                  "styles": {
                    "backgroundPosition": "center",
                    "objectFit": "cover",
                    "backgroundRepeat": "no-repeat",
                    "textAlign": "left",
                    "opacity": "100%",
                    "display": "flex",
                    "flexDirection": "row",
                    "flexWrap": "wrap",
                    "rowGap": "32px",
                    "alignItems": "center",
                    "justifyContent": "center"
                  },
                  "type": "container"
                }
              ],
              "id": "dbfb4129-39f0-4506-970e-160ea700ea37",
              "name": "Container",
              "styles": {
                "backgroundPosition": "center",
                "objectFit": "cover",
                "backgroundRepeat": "no-repeat",
                "textAlign": "left",
                "opacity": "100%",
                "backgroundColor": ""
              },
              "type": "container"
            }
          ]
        }
      ],
      "id": "5843414e-8ff9-4598-850d-87087ecf8c62",
      "name": "Sevices",
      "styles": {},
      "type": "services"
    },
    {
      "content": [
        {
          "content": [
            {
              "id": "17ea7ed1-e244-4b7d-a24e-87871e953b0e",
              "name": "container",
              "type": "container",
              "styles": {
                "display": "flex",
                "flexDirection": "row",
                "alignItems": "flex-start",
                "gap": "10px",
                "paddingLeft": "0px",
                "paddingRight": "0px"
              },
              "content": [
                {
                  "content": [
                    {
                      "id": "0db77b42-6739-4c57-8c1e-4bc62d70c74b",
                      "name": "text",
                      "type": "text",
                      "styles": {
                        "color": "",
                        "textAlign": "center",
                        "display": "block",
                        "backgroundColor": "#483C32",
                        "flexDirection": "column",
                        "paddingLeft": "0px",
                        "paddingRight": "0px",
                        "marginBottom": "",
                        "paddingBottom": "",
                        "width": "fit-content",
                        "height": "fit-content"
                      },
                      "content": {
                        "innerText": "Name"
                      }
                    },
                    {
                      "id": "31d19df5-e747-4abe-b129-731ea80e0f94",
                      "name": "input",
                      "type": "input",
                      "styles": {
                        "color": "",
                        "textAlign": "center",
                        "display": "block",
                        "backgroundColor": "#483C32",
                        "flexDirection": "column",
                        "paddingLeft": "0px",
                        "paddingRight": "0px",
                        "marginBottom": "",
                        "paddingBottom": ""
                      },
                      "content": {
                        "placeholder": "Enter Placeholder from sidebar"
                      }
                    }
                  ],
                  "id": "79334665-0bab-49d6-9190-cb5a1099d352",
                  "name": "Container",
                  "styles": {
                    "backgroundPosition": "center",
                    "objectFit": "cover",
                    "backgroundRepeat": "no-repeat",
                    "textAlign": "left",
                    "opacity": "100%",
                    "display": "flex",
                    "flexDirection": "column",
                    "alignItems": "flex-start",
                    "paddingLeft": "0px",
                    "paddingRight": "0px"
                  },
                  "type": "container"
                },
                {
                  "content": [
                    {
                      "id": "491e295d-bbd4-467b-993f-b9cf53a4c4dd",
                      "name": "text",
                      "type": "text",
                      "styles": {
                        "color": "",
                        "textAlign": "center",
                        "display": "block",
                        "backgroundColor": "#483C32",
                        "flexDirection": "column",
                        "paddingLeft": "0px",
                        "paddingRight": "0px",
                        "marginBottom": "",
                        "paddingBottom": "",
                        "width": "fit-content"
                      },
                      "content": {
                        "innerText": "Email"
                      }
                    },
                    {
                      "id": "6b80c3c8-7927-49d1-b086-00ef219dc2b8",
                      "name": "input",
                      "type": "input",
                      "styles": {
                        "color": "",
                        "textAlign": "center",
                        "display": "block",
                        "backgroundColor": "#483C32",
                        "flexDirection": "column",
                        "paddingLeft": "0px",
                        "paddingRight": "0px",
                        "marginBottom": "",
                        "paddingBottom": ""
                      },
                      "content": {
                        "placeholder": "Enter Placeholder from sidebar"
                      }
                    }
                  ],
                  "id": "7aad4439-d5c4-4191-bc6c-a158e3069024",
                  "name": "Container",
                  "styles": {
                    "backgroundPosition": "center",
                    "objectFit": "cover",
                    "backgroundRepeat": "no-repeat",
                    "textAlign": "left",
                    "opacity": "100%",
                    "display": "flex",
                    "flexDirection": "column",
                    "alignItems": "flex-start",
                    "paddingLeft": "0px",
                    "paddingRight": "0px"
                  },
                  "type": "container"
                }
              ]
            },
            {
              "id": "4e4a57eb-38ea-4dfe-bada-dfd922a7e8df",
              "name": "text area",
              "type": "textarea",
              "styles": {
                "color": "",
                "textAlign": "center",
                "display": "block",
                "backgroundColor": "#483C32",
                "flexDirection": "column",
                "paddingLeft": "0px",
                "paddingRight": "0px",
                "marginBottom": "",
                "paddingBottom": ""
              },
              "content": {
                "placeholder": "Enter your message here"
              }
            }
          ],
          "id": "11b11dac-36c8-4a7f-b246-a2369ee5e2d4",
          "name": "Container",
          "styles": {
            "width": "50%",
            "display": "flex",
            "flexDirection": "column",
            "backgroundColor": "#483C32"
          },
          "type": "container"
        },
        {
          "id": "a78be30c-0b35-49c6-8e8e-c6f00e9becaa",
          "name": "container",
          "type": "container",
          "styles": {
            "textAlign": "center",
            "display": "flex",
            "backgroundColor": "#483C32",
            "flexDirection": "column",
            "color": "",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "marginBottom": "",
            "paddingBottom": "",
            "width": "50%",
            "alignItems": "center",
            "gap": "10px",
            "justifyContent": "center"
          },
          "content": [
            {
              "id": "e0837701-e079-4376-87ad-2592f7b8d6fc",
              "name": "text",
              "type": "text",
              "styles": {
                "color": "",
                "textAlign": "center",
                "display": "block",
                "backgroundColor": "#483C32",
                "flexDirection": "column",
                "paddingLeft": "0px",
                "paddingRight": "0px",
                "marginBottom": "",
                "paddingBottom": "",
                "width": "fit-content",
                "fontSize": "30px",
                "height": "fit-content"
              },
              "content": {
                "innerText": "Contact Us"
              }
            },
            {
              "id": "cfee57a6-1f7b-4315-abe8-168e51aa30bb",
              "name": "text",
              "type": "text",
              "styles": {
                "color": "",
                "textAlign": "center",
                "display": "block",
                "backgroundColor": "#483C32",
                "flexDirection": "column",
                "paddingLeft": "0px",
                "paddingRight": "0px",
                "marginBottom": "",
                "paddingBottom": "",
                "width": "fit-content",
                "fontSize": "20px"
              },
              "content": {
                "innerText": "Send us a message"
              }
            }
          ]
        }
      ],
      "id": "822b1870-d62a-4d00-85dc-805684fbb763",
      "name": "Contact Form New",
      "styles": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "gap": "10px",
        "backgroundColor": "#483C32",
        "color": "beige",
        "height": "600px"
      },
      "type": "contactFormNew"
    },
    {
      "content": [
        {
          "content": {
            "innerText": "TimiCivil Engineering"
          },
          "id": "0afb7e47-4bc1-4e82-ae25-295baff2c1ec",
          "name": "Text",
          "styles": {
            "color": "black",
            "backgroundPosition": "center",
            "objectFit": "cover",
            "backgroundRepeat": "no-repeat",
            "textAlign": "left",
            "opacity": "100%",
            "width": "fit-content",
            "height": "fit-content"
          },
          "type": "text"
        },
        {
          "content": [
            {
              "content": {
                "innerText": "Made With"
              },
              "id": "47033e3f-69aa-498e-87a5-c12883a63c04",
              "name": "Text",
              "styles": {
                "color": "black",
                "backgroundPosition": "center",
                "objectFit": "cover",
                "backgroundRepeat": "no-repeat",
                "textAlign": "left",
                "opacity": "100%",
                "width": "fit-content",
                "marginLeft": "0px",
                "marginRight": "0px",
                "paddingLeft": "0px",
                "paddingRight": "0px"
              },
              "type": "text"
            },
            {
              "content": {
                "innerText": "AIWebHero"
              },
              "id": "87d637e0-39d7-487d-bac2-87b1d16667bc",
              "name": "Link",
              "styles": {
                "color": "black",
                "backgroundPosition": "center",
                "objectFit": "cover",
                "backgroundRepeat": "no-repeat",
                "textAlign": "left",
                "opacity": "100%",
                "width": "fit-content",
                "paddingRight": "0px",
                "paddingLeft": "0px",
                "marginLeft": "3px"
              },
              "type": "link"
            }
          ],
          "id": "51a9a4cf-9feb-475f-98c9-a3ae58abab69",
          "name": "Container",
          "styles": {
            "width": "fit-content",
            "display": "flex",
            "columnGap": "0px",
            "height": "fit-content",
            "marginTop": "0px",
            "paddingTop": "0px"
          },
          "type": "container"
        }
      ],
      "id": "e51d68e6-9498-490d-a3b2-af07fce02c85",
      "name": "Container",
      "styles": {
        "backgroundColor": "#800020",
        "height": "200px",
        "display": "flex",
        "justifyContent": "space-between"
      },
      "type": "container"
    }
  ]
}]

const FunnelEditor = ({ funnelPageId, liveMode }: Props) => {
  const { dispatch, state } = useEditor();
  const { token } = useAuth();
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
    const response = await apiService.get(`/api/Mywebsite/ViewPage/${funnelPageId}`, {Authorization: `Bearer ${token}`})
    // const localData = JSON.parse(localStorage.getItem('site Content') as string);
    // console.log('fullSite: ', localData);
  try {
  dispatch({
    type: 'LOAD_DATA',
    payload: {
      elements: JSON.parse(response.page.content)|| [],
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

  return <div className={clsx(' use-automation-zoom  h-screen overflow-y-scroll mr-[385px] bg-background transition-all rounded-md', {
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
