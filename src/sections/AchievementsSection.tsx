import React from 'react';
import { Trophy, Medal, Award, CheckCircle2, Sparkles, Flag, ArrowUpRight } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400">
            <span>[ PROVEN MILESTONES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Achievements & Recognition
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Verified competitive milestones spanning technical hackathons, national-level initiative screening, and athletic university championships.
          </p>
        </div>

        {/* 3 Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((ach) => (
            <div
              key={ach.id}
              id={`achievement-card-${ach.id}`}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-teal-500/40 hover:bg-neutral-900/90 transition-all flex flex-col justify-between space-y-5 shadow-lg group"
            >
              <div className="space-y-4">
                {/* Badge and Category */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-neutral-950 border border-neutral-800 text-neutral-200">
                    {ach.badge}
                  </span>
                  <span className="text-[10px] font-mono text-teal-400 uppercase">
                    Verified Record
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors font-sans">
                    {ach.title}
                  </h3>
                  <div className="text-xs font-mono text-teal-400 font-medium">
                    {ach.placement}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {ach.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-neutral-800/80">
                  <div className="text-[10px] font-mono uppercase text-neutral-400">
                    Key Highlights:
                  </div>
                  <ul className="space-y-1.5">
                    {ach.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800/60 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                <span>{ach.event}</span>
                <Sparkles className="w-3.5 h-3.5 text-teal-400 opacity-60 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
