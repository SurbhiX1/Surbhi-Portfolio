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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#172235]/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-case-study-modal"
        className="w-full max-w-4xl bg-[#FFFDF8] border border-[#DDD5C7] rounded-3xl shadow-2xl text-[#172235] max-h-[90vh] flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-7 border-b border-[#D6DFE8] bg-[#F6F1E8]/70">
          <div className="space-y-1.5 pr-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#E8EDF3] text-[#172235] border border-[#D6DFE8] font-semibold">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#3D4D65]">PROJECT CASE STUDY</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#172235] font-sans">
              {project.title}
            </h2>
            <p className="text-sm text-[#3D4D65] font-sans leading-relaxed">
              {project.tagline}
            </p>
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl text-[#3D4D65] hover:text-[#172235] hover:bg-[#E8EDF3] transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-7 text-sm font-sans leading-relaxed">
          {/* Overview / Context */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-[#E8EDF3] border border-[#D6DFE8] space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#9C3826] flex items-center gap-2 font-semibold">
                <AlertCircle className="w-4 h-4" /> The Problem
              </h3>
              <p className="text-[#26354D] text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#E8EDF3] border border-[#D6DFE8] space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#172235] flex items-center gap-2 font-bold">
                <CheckCircle className="w-4 h-4 text-[#C49A4A]" /> The Solution
              </h3>
              <p className="text-[#26354D] text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#172235] uppercase tracking-wider font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#C49A4A]" /> Key Features & Architecture
            </h3>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[#26354D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A4A] mt-2 shrink-0" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Learned */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#172235] uppercase tracking-wider font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C49A4A]" /> What I Learned & Engineering Takeaways
            </h3>
            <ul className="space-y-2.5">
              {project.whatILearned.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[#26354D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A4A] mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Chips */}
          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#3D4D65] font-semibold">
              Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#E8EDF3] border border-[#D6DFE8] text-[#172235] text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#D6DFE8] bg-[#F6F1E8]/80 flex items-center justify-between text-xs font-mono">
          <span className="text-[#3D4D65]">{project.statusText}</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#172235] hover:bg-[#26354D] text-[#FFFDF8] font-semibold transition-colors cursor-pointer shadow-xs border border-[#C49A4A]/40"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
