import { z } from "zod"


export type GetMediaFiles = any
export type PricesList = any
export type TicketDetails = any

export const ContactUserFormSchema = z.object({
    name: z.string().min(1, 'Required'),
    email: z.string().email(),
  })