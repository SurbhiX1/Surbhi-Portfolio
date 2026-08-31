import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#FFFCF5]/70 border-t border-[#DED6C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B08D3C] font-semibold">
              <span>[ LEADERSHIP & CAMPUS ROLES ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1B18] font-sans">
              Experience & Responsibilities
            </h2>
            <p className="text-[#6F6A60] text-sm sm:text-base leading-relaxed">
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
                className="p-6 sm:p-8 rounded-3xl bg-[#FFFCF5] border border-[#DED6C8] hover:border-[#B08D3C]/60 transition-all flex flex-col justify-between space-y-6 shadow-sm h-full"
              >
                <div className="space-y-5">
                  {/* Header info */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-mono uppercase text-[#B08D3C] font-bold tracking-wider">
                        {exp.organization}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1C1B18] font-sans">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#6F6A60] pt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#B08D3C]" /> {exp.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#B08D3C]" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border shrink-0 font-medium ${
                        exp.status === 'active'
                          ? 'bg-[#B08D3C]/10 text-[#8C6D23] border-[#B08D3C]/40'
                          : 'bg-[#F1EBDD] text-[#6F6A60] border-[#DED6C8]'
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
                        className="px-2.5 py-0.5 rounded-md bg-[#F1EBDD] border border-[#DED6C8] text-[#1C1B18] text-xs font-mono"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Responsibilities list */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#6F6A60] font-semibold">
                      Key Responsibilities & Contributions:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1C1B18]/85">
                          <CheckCircle2 className="w-4 h-4 text-[#B08D3C] shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-sans">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills Gained Footer */}
                <div className="pt-4 border-t border-[#DED6C8] flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#6F6A60]">
                  <span className="font-semibold text-[#1C1B18]">Core Competencies:</span>
                  {exp.skillsGained.map((sk) => (
                    <span
                      key={sk}
                      className="px-2 py-0.5 rounded-md bg-[#F1EBDD] text-[#8C6D23] border border-[#DED6C8]"
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
