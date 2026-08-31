export interface EducationData {
  institution: string;
  degree: string;
  location: string;
  period: string;
  currentCgpa: string;
  cgpaLabel: string;
  status: string;
  highlights: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  whatILearned: string[];
  repoUrl?: string;
  demoUrl?: string;
  statusText: string;
  type: 'IoT' | 'Python' | 'Web' | 'Software';
}

export interface ExperienceData {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  status: 'active' | 'completed';
  focusAreas: string[];
  responsibilities: string[];
  skillsGained: string[];
}

export interface AchievementData {
  id: string;
  title: string;
  event: string;
  badge: string;
  icon: string;
  placement: string;
  description: string;
  highlights: string[];
}

export interface CertificationData {
  id: string;
  title: string;
  issuer: string;
  category: string;
  skills: string[];
}

export interface TimesOfIndiaData {
  organization: string;
  category: string;
  period: string;
  roleTitle: string;
  description: string;
  keyAspects: string[];
}

export interface TimelineMilestone {
  date: string;
  title: string;
  category: 'academic' | 'leadership' | 'achievement' | 'experience';
  summary: string;
  details?: string;
  tag: string;
}
