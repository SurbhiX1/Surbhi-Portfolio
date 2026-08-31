import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Code,
  Cpu,
  Globe,
  Database,
  Wrench,
  Terminal,
  Users,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export interface SkillCategoryConfig {
  id: string;
  slug: string;
  title: string;
  badge: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  countText: string;
}

export const SKILL_CATEGORIES: SkillCategoryConfig[] = [
  {
    id: 'programming',
    slug: 'programming-languages',
    title: 'Programming Languages',
    badge: 'Core',
    subtitle: 'Procedural and object-oriented programming proficiencies and fundamentals',
    icon: Code,
    countText: '5 Languages',
  },
  {
    id: 'cs',
    slug: 'computer-science-dsa',
    title: 'Computer Science & DSA',
    badge: 'Algorithmic',
    subtitle: 'Data structures, algorithm design, and core computing principles',
    icon: Cpu,
    countText: 'Core Foundations',
  },
  {
    id: 'web',
    slug: 'web-technologies',
    title: 'Web Technologies',
    badge: 'Frontend',
    subtitle: 'Semantic structure, modern CSS styling, and responsive UI layout',
    icon: Globe,
    countText: '2 Technologies',
  },
  {
    id: 'database',
    slug: 'database-systems',
    title: 'Database Systems',
    badge: 'Storage',
    subtitle: 'Relational data modeling, querying, and schema architecture',
    icon: Database,
    countText: '1 Database Engine',
  },
  {
    id: 'tools',
    slug: 'tools-environment',
    title: 'Tools & Environment',
    badge: 'Tooling',
    subtitle: 'Version control, development workspaces, and prototyping software',
    icon: Wrench,
    countText: '5 Tools',
  },
  {
    id: 'platforms',
    slug: 'coding-platforms',
    title: 'Coding Platforms',
    badge: 'Practice',
    subtitle: 'Problem-solving practice environments and competitive coding profiles',
    icon: Terminal,
    countText: '2 Platforms',
  },
  {
    id: 'softSkills',
    slug: 'soft-skills',
    title: 'Soft Skills & Professional Competencies',
    badge: 'Leadership & Teamwork',
    subtitle: 'Collaborative team dynamics, project leadership, and interpersonal communication',
    icon: Users,
    countText: '7 Competencies',
  },
];

interface SkillDetailPageProps {
  categoryId: string;
  onBack: () => void;
  onSelectCategory: (id: string) => void;
}

export const SkillDetailPage: React.FC<SkillDetailPageProps> = ({
  categoryId,
  onBack,
  onSelectCategory,
}) => {
  const category =
    SKILL_CATEGORIES.find((c) => c.id === categoryId || c.slug === categoryId) ||
    SKILL_CATEGORIES[0];

  const Icon = category.icon;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [categoryId]);

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#1C1B18] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D6BD7A]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            id="skill-detail-back-button"
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#FFFCF5] border border-[#DED6C8] text-sm font-medium text-[#1C1B18] hover:text-[#B08D3C] hover:border-[#B08D3C] transition-all shadow-xs group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#B08D3C] group-hover:-translate-x-1 transition-transform" />
            <span>← Back to Portfolio</span>
          </button>

          <span className="text-xs font-mono text-[#6F6A60]">
            [ TECHNICAL CAPABILITIES ]
          </span>
        </div>

        {/* Header Title Block */}
        <div className="space-y-4 pb-6 border-b border-[#DED6C8]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F1EBDD] border border-[#DED6C8] flex items-center justify-center text-[#B08D3C]">
              <Icon className="w-5 h-5 text-[#B08D3C]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F1EBDD] text-[#8C6D23] border border-[#DED6C8]">
                {category.badge}
              </span>
              <span className="text-xs font-mono text-[#6F6A60]">
                • {category.countText}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C1B18] font-sans">
            {category.title}
          </h1>

          <p className="text-[#6F6A60] text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            {category.subtitle}
          </p>
        </div>

        {/* Detailed Content Section */}
        <div className="space-y-6">
          {category.id === 'programming' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILLS_DATA.programming.map((skill) => (
                <div
                  key={skill.name}
                  className="p-5 rounded-2xl bg-[#FFFCF5] border border-[#DED6C8] space-y-3 hover:border-[#B08D3C]/50 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-[#1C1B18] font-mono">{skill.name}</span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F1EBDD] text-[#8C6D23] border border-[#DED6C8]">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-sm text-[#6F6A60] leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {category.id === 'cs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILLS_DATA.computerScience.map((skill) => (
                <div
                  key={skill.name}
                  className="p-5 rounded-2xl bg-[#FFFCF5] border border-[#DED6C8] space-y-3 hover:border-[#B08D3C]/50 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-[#1C1B18] font-mono">{skill.name}</span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F1EBDD] text-[#8C6D23] border border-[#DED6C8]">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-sm text-[#6F6A60] leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {category.id === 'web' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILLS_DATA.web.map((skill) => (
                <div
                  key={skill.name}
                  className="p-5 rounded-2xl bg-[#FFFCF5] border border-[#DED6C8] space-y-3 hover:border-[#B08D3C]/50 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-[#1C1B18] font-mono">{skill.name}</span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F1EBDD] text-[#8C6D23] border border-[#DED6C8]">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-sm text-[#6F6A60] leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {category.id === 'database' && (
            <div className="grid grid-cols-1 gap-4">
              {SKILLS_DATA.database.map((skill) => (
                <div
                  key={skill.name}
                  className="p-6 rounded-2xl bg-[#FFFCF5] border border-[#DED6C8] space-y-3 hover:border-[#B08D3C]/50 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-[#1C1B18] font-mono">{skill.name}</span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F1EBDD] text-[#8C6D23] border border-[#DED6C8]">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-sm text-[#6F6A60] leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {category.id === 'tools' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILLS_DATA.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-5 rounded-2xl bg-[#FFFCF5] border border-[#DED6C8] space-y-3 hover:border-[#B08D3C]/50 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-[#1C1B18] font-mono">{tool.name}</span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F1EBDD] text-[#6F6A60] border border-[#DED6C8]">
                      {tool.level}
                    </span>
                  </div>
                  <p className="text-sm text-[#6F6A60] leading-relaxed font-sans">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {category.id === 'platforms' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILLS_DATA.platforms.map((plat) => (
                <div
                  key={plat.name}
                  className="p-5 rounded-2xl bg-[#FFFCF5] border border-[#DED6C8] space-y-3 hover:border-[#B08D3C]/50 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-[#1C1B18] font-mono">{plat.name}</span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F1EBDD] text-[#8C6D23] border border-[#DED6C8]">
                      {plat.level}
                    </span>
                  </div>
                  <p className="text-sm text-[#6F6A60] leading-relaxed font-sans">
                    {plat.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {category.id === 'softSkills' && (
            <div className="p-6 rounded-3xl bg-[#FFFCF5] border border-[#DED6C8] space-y-6 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {SKILLS_DATA.softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-[#F7F3EA] border border-[#DED6C8] flex items-center justify-between gap-3 hover:border-[#B08D3C]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B08D3C] shrink-0" />
                      <span className="text-sm font-medium text-[#1C1B18] font-sans">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#F1EBDD] text-[#6F6A60] shrink-0 border border-[#DED6C8]">
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Other Categories Switcher & Bottom Navigation */}
        <div className="pt-8 border-t border-[#DED6C8] space-y-6">
          <div className="text-xs font-mono text-[#6F6A60] uppercase tracking-wider">
            Explore Other Technical Categories
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {SKILL_CATEGORIES.filter((c) => c.id !== category.id).map((other) => {
              const OtherIcon = other.icon;
              return (
                <button
                  key={other.id}
                  onClick={() => onSelectCategory(other.id)}
                  className="p-3.5 rounded-xl bg-[#FFFCF5] border border-[#DED6C8] hover:border-[#B08D3C] hover:bg-[#F1EBDD] text-left transition-all group flex items-center justify-between shadow-xs cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <OtherIcon className="w-4 h-4 text-[#B08D3C] shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-bold text-[#1C1B18] font-sans truncate group-hover:text-[#B08D3C] transition-colors">
                        {other.title}
                      </div>
                      <div className="text-[10px] font-mono text-[#6F6A60]">
                        {other.countText}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#6F6A60] group-hover:text-[#B08D3C] group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFFCF5] border border-[#DED6C8] text-sm font-medium text-[#1C1B18] hover:text-[#B08D3C] hover:border-[#B08D3C] transition-all shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#B08D3C]" />
              <span>Return to Portfolio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
