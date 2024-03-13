export type EditorBtns =
  | 'text'
  | 'container'
  | 'section'
  | 'contactForm'
  | 'contactFormNew'
  | 'input'
  | 'paymentForm'
  | 'link'
  | '2Col'
  | 'video'
  | '__body'
  | 'image'
  | 'services'
  | 'pricing'
  | 'button'
  | null
  | '3Col'

export const defaultStyles: React.CSSProperties = {
  backgroundPosition: 'center',
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
  textAlign: 'left',
  opacity: '100%',
  // animationName:'slide-up',
  // animationDuration: '0.5s',
}

export type SectionNames = 'Banner' | 'Text' | 'Image' | 'Text + image' | 'Services' | 'Quote' | 'Grid' | 'Contact form' | 'Pricing' | 'FAQ' | 'About us'

interface sections {
  name: SectionNames
  description: string
  icon: string
}

export const sections: sections[] = [
  {
    name: 'Banner',
    description: 'Add a banner to your website',
    icon: 'https://www.svgrepo.com/show/160298/star-banner.svg'
  },
  {
    name: 'Text',
    description: 'Add a simple text block',
    icon: 'https://www.svgrepo.com/show/529996/text-field.svg'
  },
  {
    name: 'Image',
    description: 'Display a single image',
    icon: 'https://www.svgrepo.com/show/512367/image-picture-973.svg'
  },
  {
    name: 'Text + image',
    description: 'Add an image alongside a block of text',
    icon: 'https://www.svgrepo.com/show/389724/text-image-format.svg'
  },
  {
    name: 'Services',
    description: 'Display a list of your services to customers',
    icon: 'https://www.svgrepo.com/show/357211/services.svg'
  },
  {
    name: 'Quote',
    description: 'Display a quote or testimonial',
    icon: 'https://www.svgrepo.com/show/498309/quote-up-square.svg'
  },
  {
    name: 'Grid',
    description: 'Display Images of your work in a gallery grid',
    icon: 'https://www.svgrepo.com/show/512298/gallery-grid-view-1403.svg'
  },
  {
    name: 'Contact form',
    description: 'Add a contact form',
    icon: 'https://www.svgrepo.com/show/440938/contact-form.svg'
  },
  {
    name: 'Pricing',
    description: 'Display various pricing options',
    icon: 'https://www.svgrepo.com/show/374778/pricing-workspace.svg'
  },
  {
    name: 'FAQ',
    description: 'Add a banner to your website',
    icon: 'https://www.svgrepo.com/show/160298/star-banner.svg'
  },
  {
    name: 'About us',
    description: 'Add an about us',
    icon: 'https://www.svgrepo.com/show/129388/about-us.svg'
  },
]

const man = [{
  "id": "1274b991-142a-4a76-8a9a-d7b87240ea83",
  "styles": {
    "paddingLeft": "0",
    "paddingRight": "0",
    "paddingTop": "5",
    "backgroundSize": "contain",
    "justifyContent": "center"
  },
  "name": "Body",
  "type": "__body",
  "content": [
    {
      "content": [
        {
          "content": {
            "innerText": "Branding and logo design"
          },
          "id": "2a84f549-7684-474c-b18b-54b6837ac478",
          "name": "Text",
          "styles": {
            "color": "black",
            "backgroundPosition": "center",
            "objectFit": "cover",
            "backgroundRepeat": "no-repeat",
            "textAlign": "left",
            "opacity": "100%",
            "fontSize": "30px",
            "font-weight": "bold",
            "display": "flex"
          },
          "type": "text"
        },
        {
          "content": {
            "innerText": "Branding and logo design are pivotal components of any business's identity and marketing strategy. Branding encompasses the overall image and reputation of a company, including its values, personality, and the emotional connection it establishes with its audience. A logo, on the other hand, serves as a visual symbol that represents the essence of the brand, aiming to evoke specific emotions and associations. Effective branding and logo design help differentiate a company from its competitors, build trust and credibility with customers, and foster loyalty. By crafting a cohesive brand identity and memorable logo, businesses can effectively communicate their values, resonate with their target audience, and ultimately drive success in the market."
          },
          "id": "65fba176-47d6-4833-a57e-f985770da45d",
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
      "id": "5fa5a15c-3e4c-4377-847d-8a9b2741866b",
      "name": "Section",
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "backgroundSize": "cover",
        "alignItems": "center"
      },
      "type": "section"
    }
  ]
}]