export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  role?: string;
  year?: string;
  image?: string; // path under /public or full URL
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
  featured?: boolean;
}

/**
 * Add new projects by appending objects to this array.
 * Copy one of the placeholder entries below as a template.
 */
export const projects: Project[] = [
  {
    id: 'simudrive',
    title: 'SimuDrive — Real Life Car Driving Simulator',
    description:
      'Desktop application built as the capstone for Reymalyn Driving School. Calibrated hardware controls to mirror real-world vehicle behavior, integrated 3D models, and validated system functionality through rigorous testing.',
    stack: ['C#', 'Unity', '3D Modeling', 'Hardware Integration'],
    role: 'Team Leader',
    year: '2024',
    image: '/projects/simudrive.svg',
    featured: true,
    links: {},
  },
  {
    id: 'placeholder-1',
    title: 'Your Next Project',
    description:
      'Replace this placeholder with your own project. Describe the problem, your approach, and the outcome. Drop a screenshot into /public/projects/ and point `image` to it.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    year: '2026',
    links: { github: '', live: '' },
  },
  {
    id: 'placeholder-2',
    title: 'Another Showcase',
    description:
      'Another placeholder card. Duplicate this entry in src/data/projects.ts and customize to add more work to your portfolio.',
    stack: ['Java', 'MySQL'],
    year: '2026',
    links: {},
  },
];
