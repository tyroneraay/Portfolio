import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { profile } from '@/data/profile';

const pillars = [
  {
    icon: GraduationCap,
    title: 'Recent IT Graduate',
    body: 'BS Information Technology from STI College Santa Maria (2025) — with a foundation in programming, databases, and systems.',
  },
  {
    icon: Briefcase,
    title: 'Real Office Experience',
    body: '486 hours as an OJT at Sun Gold Realty: maintaining PCs, creating lot plans in Photoshop, and digitizing records.',
  },
  {
    icon: Code2,
    title: 'Project-Driven',
    body: 'Led the SimuDrive capstone — a real-life car driving simulator combining hardware, 3D models, and custom software.',
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="About Me"
          title="A short story about who I am"
          description={profile.bio}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="card h-full p-6"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
