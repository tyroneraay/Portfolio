export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Part-Time' | 'Full-Time' | 'Freelance';
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Office Staff (On-the-Job Trainee)',
    company: 'Sun Gold Realty Development',
    location: 'Santa Clara, Santa Maria, Bulacan',
    period: 'January – May 2025 · 486 hours',
    type: 'Internship',
    highlights: [
      'Installed and configured office PCs; assisted with LAN cabling to maintain network reliability.',
      'Produced vicinity maps and lot plans using Adobe Photoshop.',
      'Organized and digitized landowner and property records in Excel for better data management.',
      'Supported daily operations: document handling, file organization, and errands.',
    ],
  },
  {
    role: 'Office Staff',
    company: 'Sun Gold Realty Development',
    location: 'Santa Clara, Santa Maria, Bulacan',
    period: 'June – July 2025',
    type: 'Part-Time',
    highlights: [
      'Designed promotional social media banners to attract potential land sellers.',
      'Developed detailed lot plans in Photoshop for company marketing use.',
      'Managed administrative tasks: data encoding, document prep, printing, and file organization.',
    ],
  },
];
