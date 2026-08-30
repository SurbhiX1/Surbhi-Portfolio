import React from 'react';
import {
  Code,
  Cpu,
  Globe,
  Database,
  Wrench,
  Terminal,
  Users,
  ArrowUpRight,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../pages/SkillDetailPage';

interface SkillsSectionProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="skills" className="py-20 bg-neutral-950/90 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400">
            <span>[ TECHNICAL CAPABILITIES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Skills & Technical Stack
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Honest and verified technical proficiencies developed through coursework, problem-solving practice, and practical implementation. Select any area to view full details.
          </p>
        </div>

        {/* Clickable Heading Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isWide = cat.id === 'softSkills';

            return (
              <div
                key={cat.id}
                id={`skills-card-${cat.id}`}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCategory && onSelectCategory(cat.id);
                  }
                }}
                className={`p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-teal-500/50 hover:bg-neutral-900/90 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-sm relative overflow-hidden ${
                  isWide ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                {/* Subtle top-right hover glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-all pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-teal-400 group-hover:border-teal-500/40 transition-colors">
                        <Icon className="w-4 h-4 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white font-sans group-hover:text-teal-300 transition-colors">
                          {cat.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-teal-400 px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800/80">
                      {cat.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans line-clamp-2">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-neutral-800/60 flex items-center justify-between relative z-10">
                  <span className="text-xs font-mono text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    {cat.countText}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-teal-400 group-hover:text-teal-300 transition-colors">
                    <span className="text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                      Open
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
