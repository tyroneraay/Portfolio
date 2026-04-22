import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Eye, FileText, X } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const RESUME_URL = '/resume.pdf';
const RESUME_FILENAME = 'Tyrone-Ray-Mateo-Resume.pdf';

export function Resume() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <section id="resume" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Resume"
          title="Preview or download my resume"
          description="Take a quick look, or grab a PDF copy for your files."
          align="center"
        />

        <Reveal className="mt-12 flex justify-center">
          <div className="card relative w-full max-w-2xl overflow-hidden p-8 text-center">
            <div className="absolute inset-0 bg-mesh opacity-40" aria-hidden />
            <div className="relative">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
                <FileText size={24} />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Tyrone Ray Mateo — Resume</h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                A summary of my education, experience, projects, and skills.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button onClick={() => setOpen(true)} className="btn-primary">
                  <Eye size={16} /> Preview
                </button>
                <a href={RESUME_URL} download={RESUME_FILENAME} className="btn-ghost">
                  <Download size={16} /> Download PDF
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-[rgb(var(--bg-elevated))] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[rgb(var(--border))] px-5 py-3">
                <h4 className="font-semibold">Resume Preview</h4>
                <div className="flex items-center gap-2">
                  <a
                    href={RESUME_URL}
                    download={RESUME_FILENAME}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-600"
                  >
                    <Download size={14} /> Download
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close preview"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[rgb(var(--border))] hover:border-brand-400 hover:text-brand-500"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              <iframe
                src={`${RESUME_URL}#view=FitH`}
                title="Resume PDF"
                className="h-full w-full flex-1 bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
