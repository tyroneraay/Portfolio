import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-mesh pt-20">
      <div className="container-page grid items-center gap-12 py-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] px-3 py-1.5 text-xs font-medium text-[rgb(var(--fg-muted))]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Open to opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700 bg-clip-text text-transparent">{profile.firstName}</span>.
            <br />
            <span className="text-[rgb(var(--fg-muted))]">{profile.role}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 flex items-center gap-2 text-sm text-muted"
          >
            <MapPin size={16} className="text-brand-500" />
            <span>{profile.location}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              View Projects <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-ghost">
              <Mail size={16} /> Get in Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-4"
          >
            {profile.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] px-3 py-3 text-center"
              >
                <div className="text-lg font-bold text-brand-500">{h.value}</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted">{h.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto flex justify-center"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-brand-300/40 via-brand-500/30 to-brand-700/30 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[rgb(var(--bg-elevated))] shadow-soft sm:h-80 sm:w-80">
              <img
                src="/profile.jpg"
                alt={profile.name}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-400 to-brand-700 text-5xl font-extrabold text-white" style={{ zIndex: -1 }}>
                TR
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
