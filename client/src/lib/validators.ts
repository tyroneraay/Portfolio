import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(80, 'Name is too long'),
  email: z.string().trim().email('Enter a valid email').max(120),
  subject: z.string().trim().min(3, 'Subject is too short').max(120, 'Subject is too long'),
  message: z
    .string()
    .trim()
    .min(10, 'Message should be at least 10 characters')
    .max(2000, 'Message is too long'),
  // Honeypot — must stay empty. Real users will never fill this.
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
