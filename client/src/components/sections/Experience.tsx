import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experience } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Hands-on office, IT, and design work at Sun Gold Realty Development."
        />

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-[rgb(var(--border))] sm:left-1/2" aria-hidden />
          <ul className="space-y-10">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={item.period}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative grid gap-4 pl-12 sm:grid-cols-2 sm:gap-8 sm:pl-0 ${
                    isLeft ? '' : 'sm:[&>div:first-child]:col-start-2'
                  }`}
                >
                  <span className="absolute left-4 top-5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[rgb(var(--bg))] bg-brand-500 sm:left-1/2" aria-hidden />
                  <div className={`card p-6 ${isLeft ? 'sm:mr-6 sm:text-right' : 'sm:ml-6'}`}>
                    <div className="mb-2 inline-flex items-center gap-2">
                      <span className="chip !border-brand-400/40 !text-brand-500">{item.type}</span>
                    </div>
                    <h3 className="text-lg font-semibold leading-snug">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-muted">{item.company}</p>
                    <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted">
                      <MapPin size={12} />
                      {item.location}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-brand-500">{item.period}</p>
                    <ul className={`mt-4 space-y-1.5 text-sm text-muted ${isLeft ? 'sm:text-right' : ''}`}>
                      {item.highlights.map((h, idx) => (
                        <li key={idx} className="leading-relaxed">• {h}</li>
                      ))}
                    </ul>
                  </div>
                  <div aria-hidden />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
