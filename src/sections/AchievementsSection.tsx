import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-[#F7F3EA] border-t border-[#DED6C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B08D3C] font-semibold">
              <span>[ PROVEN MILESTONES ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1B18] font-sans">
              Achievements & Recognition
            </h2>
            <p className="text-[#6F6A60] text-sm sm:text-base leading-relaxed">
              Verified competitive milestones spanning technical hackathons, national-level initiative screening, and athletic university championships.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((ach, idx) => (
            <ScrollReveal key={ach.id} staggerIndex={idx} staggerMs={90}>
              <div
                id={`achievement-card-${ach.id}`}
                className="p-6 sm:p-7 rounded-3xl bg-[#FFFCF5] border border-[#DED6C8] hover:border-[#B08D3C] transition-all flex flex-col justify-between space-y-5 shadow-xs group h-full"
              >
                <div className="space-y-4">
                  {/* Badge and Category */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#F1EBDD] border border-[#DED6C8] text-[#1C1B18]">
                      {ach.badge}
                    </span>
                    <span className="text-[10px] font-mono text-[#8C6D23] uppercase font-semibold">
                      Verified Record
                    </span>
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#1C1B18] group-hover:text-[#B08D3C] transition-colors font-sans">
                      {ach.title}
                    </h3>
                    <div className="text-xs font-mono text-[#8C6D23] font-semibold">
                      {ach.placement}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6F6A60] leading-relaxed font-sans">
                    {ach.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[#DED6C8]">
                    <div className="text-[10px] font-mono uppercase text-[#6F6A60] font-semibold">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1.5">
                      {ach.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-[#1C1B18]/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D3C] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#DED6C8] text-[11px] font-mono text-[#6F6A60] flex items-center justify-between">
                  <span>{ach.event}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#B08D3C] opacity-70 group-hover:opacity-100" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
