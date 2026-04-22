import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4 }}
          className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-500"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl font-bold sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`mt-4 text-base text-muted ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
