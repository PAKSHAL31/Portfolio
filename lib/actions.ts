'use server'
import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schema'
import ContactFormEmail from '@/email/email-format'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendNotification(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)
  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ranawatpakshal31@gmail.com',
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: await ContactFormEmail({ name, email, message })
    })

    console.log(data,error)

    if (!data || error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}