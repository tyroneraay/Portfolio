import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { technicalSkills, softSkills, tools } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" className="section bg-[rgb(var(--bg-elevated))]/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          description="A mix of programming languages, design tools, and dependable soft skills."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {technicalSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4, rotate: -1 }}
                className="card group flex flex-col items-center gap-2 p-5 text-center transition-colors hover:border-brand-400"
              >
                <Icon size={36} style={{ color: skill.color }} className="transition-transform group-hover:scale-110" />
                <div className="mt-1 text-sm font-semibold">{skill.name}</div>
                {skill.level && <div className="text-[11px] text-muted">{skill.level}</div>}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-500">Productivity</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-500">Soft Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
