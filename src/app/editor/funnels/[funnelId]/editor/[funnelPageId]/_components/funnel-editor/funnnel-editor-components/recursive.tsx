import { EditorElement } from '@/providers/editor-provider'
import React from 'react'
import TextComponent from './textComponent'
import Container from './container'
import LinkComponent from './link-component'
import VideoComponent from './video-component'
import ImageComponent from './img-component'
import ContactFormComponent from './contact-form'
import InputComponent from './inputComponent'
import ContactFormComponentNew from './contact-form-new'
import TextAreaComponent from './textAreaComponent'
import ServicesComponent from './servicesContainer'
import ButtonComponent from './ButtonComponent'

type Props = {
    element: EditorElement
}

const recursive = (props: Props) => {
  const {element} = props
  switch (element.type) {
    case 'text':
      return <TextComponent element={element} />
    case 'container':
      return <Container element={element} />
      case 'section':
        return <Container element={element} />
    case 'video':
      return <VideoComponent element={element} />
    case 'contactForm':
      return <ContactFormComponent element={element} />
    case 'contactFormNew':
      return <ContactFormComponentNew element={element} />
    // case 'paymentForm':
    //   return <Checkout element={element} />
    case '2Col':
      return <Container element={element} />
      case 'image':
        return <ImageComponent element={element} />
    case '__body':
      return <Container element={element} />
    case 'input':
      return <InputComponent element={element} />
    case 'textarea':
      return <TextAreaComponent element={element} />
    case 'services':
      return <ServicesComponent element={element} />
    case 'link':
      return <LinkComponent element={element} />
    case 'button':
      return <ButtonComponent element={element} />
    default:
      return null
  }
}

export default recursive