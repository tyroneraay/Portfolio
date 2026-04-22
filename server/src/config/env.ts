import 'dotenv/config';

function required(name: string, fallback?: string): string {
  const val = process.env[name] ?? fallback;
  if (!val) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return val;
}

export const env = {
  PORT: Number(process.env.PORT ?? 5000),
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  CLIENT_ORIGIN: (process.env.CLIENT_ORIGIN ?? 'http://localhost:5173')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
  GMAIL_USER: required('GMAIL_USER'),
  GMAIL_APP_PASSWORD: required('GMAIL_APP_PASSWORD'),
  CONTACT_TO: process.env.CONTACT_TO || required('GMAIL_USER'),
};

export const isProd = env.NODE_ENV === 'production';
