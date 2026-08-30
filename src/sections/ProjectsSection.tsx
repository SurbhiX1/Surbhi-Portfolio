import React, { useState } from 'react';
import {
  FolderGit2,
  Cpu,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  FileCode,
  Radio,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectData } from '../types';

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
    <section id="projects" className="py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400">
              <span>[ ENGINEERING SHOWCASE ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Things I&apos;ve Built
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Showcasing practical hardware-software integrated prototypes and Python utility engines that I have personally developed.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800 self-start md:self-auto font-mono text-xs">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                id={`project-filter-${opt.toLowerCase()}`}
                onClick={() => setFilter(opt)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filter === opt
                    ? 'bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/30'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-teal-500/40 hover:bg-neutral-900/90 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
            >
              <div className="p-6 sm:p-7 space-y-5">
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-teal-500/10 text-teal-400 border border-teal-500/30 flex items-center gap-1.5">
                      {project.id === 'forest-surveillance' ? (
                        <Radio className="w-3.5 h-3.5 animate-pulse" />
                      ) : (
                        <FileCode className="w-3.5 h-3.5" />
                      )}
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">PROJECT 0{idx + 1}</span>
                </div>

                {/* Title and Tagline */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors font-sans">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Key Technical Highlights Preview */}
                <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-2">
                  <div className="text-[11px] font-mono uppercase text-teal-400 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Implementation Highlights
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Technologies used */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:px-7 border-t border-neutral-800/80 bg-neutral-950/40 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">{project.statusText}</span>
                <button
                  id={`open-modal-btn-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-teal-500/20 hover:text-teal-300 text-white text-xs font-medium border border-neutral-700 hover:border-teal-500/40 transition-all flex items-center gap-1.5 group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
