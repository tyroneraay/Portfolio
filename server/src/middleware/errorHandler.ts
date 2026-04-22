import type { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { isProd } from '../config/env.js';

export const notFound = (_req: Request, res: Response) => {
  res.status(404).json({ ok: false, message: 'Not found' });
};

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next: NextFunction) => {
  console.error('[error]', err);
  const status = typeof err?.status === 'number' ? err.status : 500;
  res.status(status).json({
    ok: false,
    message: isProd ? 'Something went wrong.' : err?.message || 'Internal error',
  });
};
