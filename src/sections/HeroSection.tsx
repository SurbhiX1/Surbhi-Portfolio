import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[90vh] pt-28 sm:pt-32 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle background ambient mesh */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-12 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>{PERSONAL_INFO.statusBadge}</span>
          </div>

          {/* Display Name & Typography */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-sans">
              {PERSONAL_INFO.name}
              <span className="text-teal-400">.</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-300 tracking-tight font-sans">
              {PERSONAL_INFO.title}
            </h2>
          </div>

          {/* Supporting Text */}
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            &ldquo;{PERSONAL_INFO.supportingText}&rdquo;
          </p>

          {/* University & Degree context tag */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800">
              Lovely Professional University
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-teal-400">
              Started Aug 2025
            </span>
          </div>

          {/* Action CTA — Focused exclusively on Explore My Work */}
          <div className="pt-2">
            <button
              id="hero-explore-work-btn"
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-neutral-950 font-semibold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore My Work</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-neutral-900">
            <span className="text-xs font-mono text-neutral-400">Connect:</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-link"
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-teal-400 transition-colors font-mono"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-link"
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-teal-400 transition-colors font-mono"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              id="hero-email-link"
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-teal-400 transition-colors font-mono"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
