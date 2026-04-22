import type { ComponentType, SVGProps } from 'react';
import {
  SiJavascript,
  SiMysql,
  SiHtml5,
  SiCss,
  SiBlender,
  SiSharp,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Image as ImageIcon } from 'lucide-react';

export type SkillIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export interface Skill {
  name: string;
  icon: SkillIcon;
  color: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const technicalSkills: Skill[] = [
  { name: 'Java', icon: FaJava as SkillIcon, color: '#E76F00', level: 'Intermediate' },
  { name: 'C#', icon: SiSharp as SkillIcon, color: '#9B4F96', level: 'Intermediate' },
  { name: 'JavaScript', icon: SiJavascript as SkillIcon, color: '#F7DF1E', level: 'Intermediate' },
  { name: 'HTML5', icon: SiHtml5 as SkillIcon, color: '#E34F26', level: 'Advanced' },
  { name: 'CSS3', icon: SiCss as SkillIcon, color: '#1572B6', level: 'Advanced' },
  { name: 'MySQL', icon: SiMysql as SkillIcon, color: '#4479A1', level: 'Intermediate' },
  { name: 'Photoshop', icon: ImageIcon as unknown as SkillIcon, color: '#31A8FF', level: 'Advanced' },
  { name: 'Blender', icon: SiBlender as SkillIcon, color: '#E87D0D', level: 'Beginner' },
];

export const softSkills: string[] = [
  'Adaptability',
  'Time Management',
  'Team Collaboration',
  'Critical Thinking',
  'Troubleshooting',
  'Attention to Detail',
];

export const tools: string[] = ['Word', 'Excel', 'PowerPoint', 'SAP Business One'];
