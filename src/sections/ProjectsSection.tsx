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
    <section id="projects" className="py-20 bg-[#F7F3EA] border-t border-[#DED6C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B08D3C] font-semibold">
                <span>[ ENGINEERING SHOWCASE ]</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1B18] font-sans">
                Things I&apos;ve Built
              </h2>
              <p className="text-[#6F6A60] text-sm sm:text-base leading-relaxed">
                Showcasing practical hardware-software integrated prototypes and Python utility engines that I have personally developed.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#FFFCF5] border border-[#DED6C8] self-start md:self-auto font-mono text-xs shadow-xs">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  id={`project-filter-${opt.toLowerCase()}`}
                  onClick={() => setFilter(opt)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                    filter === opt
                      ? 'bg-[#B08D3C] text-[#FFFCF5] font-semibold shadow-xs'
                      : 'text-[#6F6A60] hover:text-[#1C1B18] hover:bg-[#F1EBDD]'
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
                className="group rounded-3xl bg-[#FFFCF5] border border-[#DED6C8] hover:border-[#B08D3C] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm h-full"
              >
                <div className="p-6 sm:p-8 space-y-5">
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#F1EBDD] text-[#8C6D23] border border-[#DED6C8] flex items-center gap-1.5 font-medium">
                        {project.id === 'forest-surveillance' ? (
                          <Radio className="w-3.5 h-3.5 text-[#B08D3C]" />
                        ) : (
                          <FileCode className="w-3.5 h-3.5 text-[#B08D3C]" />
                        )}
                        {project.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#6F6A60]">PROJECT 0{idx + 1}</span>
                  </div>

                  {/* Title and Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1C1B18] group-hover:text-[#B08D3C] transition-colors font-sans">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6F6A60] leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Technical Highlights Preview */}
                  <div className="p-4 rounded-2xl bg-[#F7F3EA] border border-[#DED6C8] space-y-2">
                    <div className="text-[11px] font-mono uppercase text-[#B08D3C] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Implementation Highlights
                    </div>
                    <p className="text-xs text-[#1C1B18]/80 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Technologies used */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono uppercase text-[#6F6A60] tracking-wider font-semibold">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-[#F1EBDD] border border-[#DED6C8] text-[#1C1B18] text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 sm:px-8 border-t border-[#DED6C8] bg-[#F7F3EA]/60 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#6F6A60]">{project.statusText}</span>
                  <button
                    id={`open-modal-btn-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2 rounded-xl bg-[#FFFCF5] hover:bg-[#B08D3C] hover:text-[#FFFCF5] text-[#1C1B18] text-xs font-medium border border-[#DED6C8] hover:border-[#B08D3C] transition-all flex items-center gap-1.5 group/btn shadow-xs cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
