import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Users, Sparkles, Building } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-neutral-950/80 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400">
            <span>[ LEADERSHIP & CAMPUS ROLES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Experience & Responsibilities
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Active roles in student governance, organizational management, event leadership, and academic policy advocacy.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              id={`experience-card-${exp.id}`}
              className="p-6 sm:p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-5">
                {/* Header info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase text-teal-400 font-semibold tracking-wider">
                      {exp.organization}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400 pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" /> {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border shrink-0 ${
                      exp.status === 'active'
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                        : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                    }`}
                  >
                    {exp.status === 'active' ? 'Active Role' : 'Completed'}
                  </span>
                </div>

                {/* Focus Areas Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs font-mono"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {/* Responsibilities list */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Key Responsibilities & Contributions:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skills Gained Footer */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-2 text-[11px] font-mono text-neutral-400">
                <span className="text-neutral-500">Core Competencies:</span>
                {exp.skillsGained.map((sk) => (
                  <span
                    key={sk}
                    className="px-2 py-0.5 rounded bg-neutral-950 text-teal-300 border border-neutral-800"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
