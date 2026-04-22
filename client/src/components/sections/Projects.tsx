import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects, type Project } from '@/data/projects';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-soft"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-100 to-brand-300 dark:from-brand-900 dark:to-brand-700">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white/80">
            <Sparkles size={42} />
          </div>
        )}
        {project.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand-500 px-2.5 py-1 text-[11px] font-semibold text-white shadow">
            <Sparkles size={12} /> Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between gap-2 text-xs text-muted">
          {project.role && <span>{project.role}</span>}
          {project.year && <span>{project.year}</span>}
        </div>
        <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="chip !py-0.5">{s}</span>
          ))}
        </div>
        {(project.links?.github || project.links?.live || project.links?.demo) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-500 hover:underline"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-500 hover:underline"
              >
                <Github size={14} /> Code
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-500 hover:underline"
              >
                <ExternalLink size={14} /> Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section bg-[rgb(var(--bg-elevated))]/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A growing collection — from my capstone to side work. More coming soon."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
