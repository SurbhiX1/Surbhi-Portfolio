import React, { useState } from 'react';
import {
  ArrowUpRight,
  Sparkles,
  FileCode,
  Radio,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectData } from '../types';
import { ScrollReveal } from '../components/ScrollReveal';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('All');

  const filterOptions = ['All', 'IoT', 'Python', 'Web'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (filter === 'All') return true;
    if (filter === 'IoT') return proj.type === 'IoT' || proj.category.includes('IoT');
    if (filter === 'Python') return proj.type === 'Python' || proj.category.includes('Python');
    if (filter === 'Web') return proj.technologies.includes('HTML5') || proj.category.includes('Web');
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-[#F6F1E8] border-t border-[#DDD5C7] relative overflow-hidden">
      {/* Subtle edge honeycomb geometric accent */}
      <div 
        className="absolute inset-0 honeycomb-pattern honeycomb-mask-section-edges opacity-40 pointer-events-none" 
        aria-hidden="true" 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C49A4A] font-semibold">
                <span>[ ENGINEERING SHOWCASE ]</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#172235] font-sans">
                Things I&apos;ve Built
              </h2>
              <p className="text-[#3D4D65] text-sm sm:text-base leading-relaxed font-sans">
                Showcasing practical hardware-software integrated prototypes and Python utility engines that I have personally developed.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#FFFDF8] border border-[#D6DFE8] self-start md:self-auto font-mono text-xs shadow-xs">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  id={`project-filter-${opt.toLowerCase()}`}
                  onClick={() => setFilter(opt)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                    filter === opt
                      ? 'bg-[#172235] text-[#FFFDF8] font-semibold shadow-xs border border-[#C49A4A]/40'
                      : 'text-[#3D4D65] hover:text-[#172235] hover:bg-[#E8EDF3]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} staggerIndex={idx} staggerMs={100}>
              <div
                id={`project-card-${project.id}`}
                className="group rounded-3xl bg-[#FFFDF8] border border-[#172235] hover:border-[#C49A4A] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm h-full"
              >
                <div className="p-6 sm:p-8 space-y-5">
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#E8EDF3] text-[#172235] border border-[#D6DFE8] flex items-center gap-1.5 font-semibold">
                        {project.id === 'forest-surveillance' ? (
                          <Radio className="w-3.5 h-3.5 text-[#C49A4A]" />
                        ) : (
                          <FileCode className="w-3.5 h-3.5 text-[#C49A4A]" />
                        )}
                        {project.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#3D4D65]">PROJECT 0{idx + 1}</span>
                  </div>

                  {/* Title and Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#172235] group-hover:text-[#26354D] transition-colors font-sans">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3D4D65] leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Technical Highlights Preview (Pale Navy Featured Surface) */}
                  <div className="p-4 rounded-2xl bg-[#E8EDF3] border border-[#D6DFE8] space-y-2">
                    <div className="text-[11px] font-mono uppercase text-[#172235] font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C49A4A]" /> Implementation Highlights
                    </div>
                    <p className="text-xs text-[#26354D] leading-relaxed font-sans">
                      {project.solution}
                    </p>
                  </div>

                  {/* Technologies used */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono uppercase text-[#3D4D65] tracking-wider font-semibold">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-[#F2F4F7] border border-[#D6DFE8] text-[#172235] text-xs font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 sm:px-8 border-t border-[#D6DFE8] bg-[#F2F4F7]/70 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#3D4D65]">{project.statusText}</span>
                  <button
                    id={`open-modal-btn-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2 rounded-xl bg-[#FFFDF8] hover:bg-[#172235] hover:text-[#FFFDF8] text-[#172235] text-xs font-semibold border border-[#D6DFE8] hover:border-[#C49A4A] transition-all flex items-center gap-1.5 group/btn shadow-xs cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-[#C49A4A]" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
