import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name is required...' })
    .min(5, { message: 'Must be at least 5 characters...' }),
  email: z
    .string()
    .min(5, { message: 'Email required.' })
    .email('Invalid email.'),
  message: z.string().min(1, { message: 'Message required.' })
})

export const NewsletterFormSchema = z.object({
  email: z.string().email('Invalid email.')
})