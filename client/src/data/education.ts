export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
}

export const education: EducationItem[] = [
  {
    school: 'STI College Santa Maria',
    degree: 'Bachelor of Science in Information Technology',
    period: '2021 – 2025',
    location: 'Poblacion, Santa Maria, Bulacan',
  },
  {
    school: 'STI College Santa Maria',
    degree: 'Senior High — IT in Mobile App and Web Development',
    period: '2019 – 2021',
    location: 'Poblacion, Santa Maria, Bulacan',
  },
  {
    school: 'Early Christian College of Arts and Technology',
    degree: 'Junior High School',
    period: '2015 – 2019',
    location: 'R. Mercado Street, Santa Maria, Bulacan',
  },
  {
    school: 'Smarties Academy of Santa Maria Bulacan',
    degree: 'Elementary',
    period: '2013 – 2015',
    location: 'Macaiban, San Jose Patag, Santa Maria, Bulacan',
  },
];

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  { name: 'Information Technology Fundamentals', issuer: 'IBM SkillsBuild', year: '2026' },
  { name: 'Java Fundamentals', issuer: 'STI Santa Maria', year: '2023' },
  { name: 'Systems Administration and Maintenance', issuer: 'STI Santa Maria', year: '2023' },
  { name: 'SAP Business One', issuer: 'STI Santa Maria', year: '2023' },
];
