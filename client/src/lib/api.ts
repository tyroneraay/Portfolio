import axios from 'axios';
import type { ContactInput } from './validators';

const baseURL = import.meta.env.VITE_API_URL || '/api';

export const api = axios.create({
  baseURL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

export interface ContactResponse {
  ok: boolean;
  message?: string;
}

export async function sendContactMessage(data: ContactInput): Promise<ContactResponse> {
  const res = await api.post<ContactResponse>('/contact', data);
  return res.data;
}
