import type { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { sendContactEmail } from '../services/mailer.js';

export async function handleContact(req: Request, res: Response, next: NextFunction) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        ok: false,
        message: 'Please check the form fields.',
        errors: errors.array({ onlyFirstError: true }),
      });
    }

    // Honeypot trap — silently accept and drop
    if (typeof req.body.website === 'string' && req.body.website.length > 0) {
      return res.status(200).json({ ok: true });
    }

    const { name, email, subject, message } = req.body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    await sendContactEmail({ name, email, subject, message });

    return res.status(200).json({ ok: true, message: 'Message sent.' });
  } catch (err) {
    return next(err);
  }
}
