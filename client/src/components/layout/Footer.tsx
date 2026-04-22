import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]">
      <div className="container-page flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Crafted with care.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] text-[rgb(var(--fg-muted))] transition-colors hover:border-brand-400 hover:text-brand-500"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] text-[rgb(var(--fg-muted))] transition-colors hover:border-brand-400 hover:text-brand-500"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border))] text-[rgb(var(--fg-muted))] transition-colors hover:border-brand-400 hover:text-brand-500"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
