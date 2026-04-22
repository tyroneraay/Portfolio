import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env.js';
import contactRoutes from './routes/contact.routes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import { verifyMailer } from './services/mailer.js';

const app = express();

app.set('trust proxy', 1); // respect X-Forwarded-For on Render / Railway / Vercel
app.use(helmet());
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true); // allow same-origin / curl
      if (env.CLIENT_ORIGIN.includes(origin)) return cb(null, true);
      return cb(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: false,
  })
);
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, env: env.NODE_ENV, timestamp: Date.now() });
});

app.use('/api/contact', contactRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`[server] listening on http://localhost:${env.PORT} (${env.NODE_ENV})`);
  console.log(`[server] allowed origins: ${env.CLIENT_ORIGIN.join(', ')}`);
  void verifyMailer();
});
