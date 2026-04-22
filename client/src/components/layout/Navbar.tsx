import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from './ThemeToggle';
import { profile } from '@/data/profile';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled
          ? 'backdrop-blur-lg bg-[rgb(var(--bg))]/75 border-b border-[rgb(var(--border))]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
          aria-label="Home"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-extrabold text-white">
            TR
          </span>
          <span className="hidden sm:inline">{profile.firstName}</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-500' : 'text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg))]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]/95 backdrop-blur md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                      active === item.id
                        ? 'bg-brand-500/10 text-brand-500'
                        : 'text-[rgb(var(--fg-muted))] hover:bg-[rgb(var(--bg-elevated))]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
