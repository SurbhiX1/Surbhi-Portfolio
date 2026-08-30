import React from 'react';
import { X, CheckCircle, Layers, AlertCircle, Sparkles } from 'lucide-react';
import { ProjectData } from '../types';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-case-study-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-case-study-modal"
        className="w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl text-neutral-100 max-h-[90vh] flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-neutral-800 bg-neutral-950/60">
          <div className="space-y-1.5 pr-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-teal-500/10 text-teal-400 border border-teal-500/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-400">PROJECT CASE STUDY</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-400 font-sans leading-relaxed">
              {project.tagline}
            </p>
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-7 text-sm font-sans leading-relaxed">
          {/* Overview / Context */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-xl bg-neutral-950/50 border border-neutral-800/80 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-2 font-semibold">
                <AlertCircle className="w-4 h-4" /> The Problem
              </h3>
              <p className="text-neutral-300 text-sm">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950/50 border border-neutral-800/80 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-teal-400 flex items-center gap-2 font-semibold">
                <CheckCircle className="w-4 h-4" /> The Solution
              </h3>
              <p className="text-neutral-300 text-sm">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-400" /> Key Features & Architecture
            </h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Learned */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> What I Learned & Engineering Takeaways
            </h3>
            <ul className="space-y-2">
              {project.whatILearned.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Chips */}
          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-neutral-800/80 border border-neutral-700 text-neutral-200 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-neutral-800 bg-neutral-950/80 flex items-center justify-between text-xs font-mono">
          <span className="text-neutral-400">{project.statusText}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
