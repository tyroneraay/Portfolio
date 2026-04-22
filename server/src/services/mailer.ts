import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
import { sanitize } from '../utils/sanitize.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.GMAIL_USER,
    pass: env.GMAIL_APP_PASSWORD,
  },
});

export async function verifyMailer(): Promise<void> {
  try {
    await transporter.verify();
    console.log('[mailer] transporter ready');
  } catch (err) {
    console.error('[mailer] transporter verification failed:', err);
  }
}

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const name = sanitize(payload.name);
  const email = sanitize(payload.email);
  const subject = sanitize(payload.subject);
  const message = sanitize(payload.message).replace(/\n/g, '<br/>');

  // Notification to the site owner
  await transporter.sendMail({
    from: `"Portfolio Contact" <${env.GMAIL_USER}>`,
    to: env.CONTACT_TO,
    replyTo: payload.email,
    subject: `[Portfolio] ${subject}`,
    text: `New message from ${payload.name} <${payload.email}>\n\nSubject: ${payload.subject}\n\n${payload.message}`,
    html: `
      <div style="font-family: -apple-system, Segoe UI, Inter, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; background: #fafaf7; border-radius: 12px;">
        <h2 style="color: #0068d3; margin: 0 0 16px;">New portfolio message</h2>
        <p style="margin: 0 0 8px;"><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p style="margin: 0 0 8px;"><strong>Subject:</strong> ${subject}</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <div style="color: #1f2937; line-height: 1.6;">${message}</div>
      </div>
    `,
  });

  // Auto-reply to sender
  await transporter.sendMail({
    from: `"Tyrone Ray Mateo" <${env.GMAIL_USER}>`,
    to: payload.email,
    subject: `Thanks for reaching out, ${payload.name}!`,
    text: `Hi ${payload.name},\n\nThank you for your message — I've received it and will get back to you as soon as I can.\n\nBest,\nTyrone Ray Mateo`,
    html: `
      <div style="font-family: -apple-system, Segoe UI, Inter, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; background: #fafaf7; border-radius: 12px;">
        <h2 style="color: #0068d3; margin: 0 0 12px;">Thanks for reaching out, ${name}!</h2>
        <p style="color: #1f2937; line-height: 1.6; margin: 0 0 12px;">
          I've received your message and will get back to you as soon as I can.
        </p>
        <p style="color: #1f2937; line-height: 1.6; margin: 0;">Best,<br/>Tyrone Ray Mateo</p>
      </div>
    `,
  });
}
