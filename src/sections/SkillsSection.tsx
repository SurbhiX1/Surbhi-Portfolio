import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../pages/SkillDetailPage';
import { ScrollReveal } from '../components/ScrollReveal';

interface SkillsSectionProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="skills" className="py-20 bg-[#FFFCF5]/70 border-t border-[#DED6C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-10 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B08D3C] font-semibold">
              <span>[ TECHNICAL CAPABILITIES ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1B18] font-sans">
              Skills & Technical Stack
            </h2>
            <p className="text-[#6F6A60] text-sm sm:text-base leading-relaxed">
              Honest and verified technical proficiencies developed through coursework, problem-solving practice, and practical implementation. Select any area to view full details.
            </p>
          </div>
        </ScrollReveal>

        {/* Clickable Heading Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            const isWide = cat.id === 'softSkills';

            return (
              <ScrollReveal
                key={cat.id}
                staggerIndex={idx}
                staggerMs={70}
                className={isWide ? 'md:col-span-2 lg:col-span-3' : ''}
              >
                <div
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
                  className="h-full p-6 rounded-2xl bg-[#FFFCF5] border border-[#DED6C8] hover:border-[#B08D3C] hover:bg-[#F1EBDD]/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-xs relative overflow-hidden"
                >
                  {/* Subtle top-right hover accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6BD7A]/10 rounded-full blur-2xl group-hover:bg-[#D6BD7A]/20 transition-all pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between pb-3 border-b border-[#DED6C8]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#F1EBDD] border border-[#DED6C8] flex items-center justify-center text-[#B08D3C] group-hover:border-[#B08D3C]/50 transition-colors">
                          <Icon className="w-5 h-5 text-[#B08D3C]" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#1C1B18] font-sans group-hover:text-[#B08D3C] transition-colors">
                            {cat.title}
                          </h3>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono text-[#8C6D23] px-2.5 py-1 rounded-md bg-[#F1EBDD] border border-[#DED6C8]">
                        {cat.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#6F6A60] leading-relaxed font-sans line-clamp-2">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-[#DED6C8] flex items-center justify-between relative z-10">
                    <span className="text-xs font-mono text-[#6F6A60] group-hover:text-[#1C1B18] transition-colors">
                      {cat.countText}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#B08D3C] group-hover:text-[#8C6D23] transition-colors">
                      <span className="text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                        Open Details
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
