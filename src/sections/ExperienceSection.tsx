import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#F6F1E8] border-t border-[#DDD5C7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C49A4A] font-semibold">
              <span>[ LEADERSHIP & CAMPUS ROLES ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#172235] font-sans">
              Experience & Responsibilities
            </h2>
            <p className="text-[#3D4D65] text-sm sm:text-base leading-relaxed font-sans">
              Active roles in student governance, organizational management, event leadership, and academic policy advocacy.
            </p>
          </div>
        </ScrollReveal>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <ScrollReveal key={exp.id} staggerIndex={idx} staggerMs={100}>
              <div
                id={`experience-card-${exp.id}`}
                className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF8] border border-[#172235] hover:border-[#C49A4A] transition-all flex flex-col justify-between space-y-6 shadow-sm h-full"
              >
                <div className="space-y-5">
                  {/* Header info */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-mono uppercase text-[#C49A4A] font-bold tracking-wider">
                        {exp.organization}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#172235] font-sans">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#3D4D65] pt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#C49A4A]" /> {exp.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#C49A4A]" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border shrink-0 font-semibold ${
                        exp.status === 'active'
                          ? 'bg-[#E8EDF3] text-[#172235] border-[#D6DFE8]'
                          : 'bg-[#F2F4F7] text-[#3D4D65] border-[#D6DFE8]'
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
                        className="px-2.5 py-0.5 rounded-md bg-[#E8EDF3] border border-[#D6DFE8] text-[#172235] text-xs font-mono font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Responsibilities list */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#172235] font-bold">
                      Key Responsibilities & Contributions:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#26354D]">
                          <CheckCircle2 className="w-4 h-4 text-[#C49A4A] shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-sans">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills Gained Footer */}
                <div className="pt-4 border-t border-[#D6DFE8] flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#3D4D65]">
                  <span className="font-semibold text-[#172235]">Core Competencies:</span>
                  {exp.skillsGained.map((sk) => (
                    <span
                      key={sk}
                      className="px-2 py-0.5 rounded-md bg-[#E8EDF3] text-[#172235] border border-[#D6DFE8] font-medium"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
