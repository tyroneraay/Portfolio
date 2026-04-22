import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education, certifications } from '@/data/education';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Where I've learned"
          description="Academic background and certifications that support my work."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-500">
              <GraduationCap size={16} /> Education
            </h3>
            <ul className="space-y-4">
              {education.map((e, i) => (
                <motion.li
                  key={e.period}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="card p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-semibold">{e.school}</h4>
                    <span className="text-xs font-medium text-brand-500">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{e.degree}</p>
                  <p className="mt-0.5 text-xs text-muted">{e.location}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-500">
              <Award size={16} /> Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((c, i) => (
                <motion.li
                  key={c.name}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ x: 4 }}
                  className="card flex items-center gap-4 p-4"
                >
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                    <Award size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-xs text-muted">{c.issuer}</div>
                  </div>
                  <span className="chip">{c.year}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
