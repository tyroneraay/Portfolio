import { Router } from 'express';
import { body } from 'express-validator';
import { contactLimiter } from '../middleware/rateLimiter.js';
import { handleContact } from '../controllers/contact.controller.js';

const router = Router();

const validators = [
  body('name').isString().trim().isLength({ min: 2, max: 80 }).withMessage('Invalid name.'),
  body('email').isString().trim().isEmail().isLength({ max: 120 }).normalizeEmail().withMessage('Invalid email.'),
  body('subject').isString().trim().isLength({ min: 3, max: 120 }).withMessage('Invalid subject.'),
  body('message').isString().trim().isLength({ min: 10, max: 2000 }).withMessage('Invalid message.'),
  body('website').optional().isString().isLength({ max: 0 }),
];

router.post('/', contactLimiter, validators, handleContact);

export default router;
