import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { contactSchema, type ContactInput } from '@/lib/validators';
import { sendContactMessage } from '@/lib/api';
import { profile } from '@/data/profile';

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '', website: '' },
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await sendContactMessage(data);
      if (res.ok) {
        toast.success('Message sent! I\'ll get back to you soon.');
        setSent(true);
        reset();
        setTimeout(() => setSent(false), 5000);
      } else {
        toast.error(res.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 429) {
        toast.error('Too many requests. Please try again in a few minutes.');
      } else {
        const message =
          axios.isAxiosError(err) && err.response?.data?.message
            ? err.response.data.message
            : 'Could not send message. Please check your connection.';
        toast.error(message);
      }
    }
  };

  const inputCls =
    'w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2.5 text-sm transition-colors focus:border-brand-400';
  const errorCls = 'mt-1 text-xs text-red-500';

  return (
    <section id="contact" className="section bg-[rgb(var(--bg-elevated))]/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Open to opportunities, collaborations, or just a friendly hello."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="card flex h-full flex-col gap-5 p-7">
              <div>
                <h3 className="text-lg font-semibold">Reach me directly</h3>
                <p className="mt-1 text-sm text-muted">
                  Prefer email or phone? Here's where to find me.
                </p>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-start gap-3 rounded-xl border border-[rgb(var(--border))] p-4 transition-colors hover:border-brand-400"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                  <Mail size={18} />
                </span>
                <span className="flex-1">
                  <span className="block text-xs uppercase tracking-widest text-muted">Email</span>
                  <span className="block break-all text-sm font-medium">{profile.email}</span>
                </span>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="group flex items-start gap-3 rounded-xl border border-[rgb(var(--border))] p-4 transition-colors hover:border-brand-400"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                  <Phone size={18} />
                </span>
                <span className="flex-1">
                  <span className="block text-xs uppercase tracking-widest text-muted">Phone</span>
                  <span className="block text-sm font-medium">{profile.phone}</span>
                </span>
              </a>
              <div className="flex items-start gap-3 rounded-xl border border-[rgb(var(--border))] p-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                  <MapPin size={18} />
                </span>
                <span className="flex-1">
                  <span className="block text-xs uppercase tracking-widest text-muted">Location</span>
                  <span className="block text-sm font-medium">{profile.location}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card space-y-4 p-7"
              noValidate
              aria-label="Contact form"
            >
              {/* Honeypot — hidden from real users */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>
                  Website
                  <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    className={inputCls}
                    placeholder="Jane Dela Cruz"
                    {...register('name')}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className={errorCls}>{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={inputCls}
                    placeholder="jane@example.com"
                    {...register('email')}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className={errorCls}>{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  className={inputCls}
                  placeholder="Project inquiry"
                  {...register('subject')}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <p className={errorCls}>{errors.subject.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className={inputCls + ' resize-y'}
                  placeholder="Tell me a little about what you have in mind..."
                  {...register('message')}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className={errorCls}>{errors.message.message}</p>}
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 size={16} /> Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </motion.button>
              <p className="text-center text-xs text-muted">
                Your message goes straight to my inbox — no third-party services.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
