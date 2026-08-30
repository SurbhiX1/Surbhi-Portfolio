import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-12 bg-neutral-950 border-t border-neutral-900 text-neutral-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-base font-bold text-white tracking-tight font-sans">
                Surbhi<span className="text-teal-400">.</span>
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-teal-400 border border-neutral-800">
                CSE • LPU
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-mono">
              Lovely Professional University • Started August 2025 • {PERSONAL_INFO.targetYear}
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:text-teal-400 hover:border-teal-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:text-teal-400 hover:border-teal-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:text-teal-400 hover:border-teal-500/40 transition-colors"
              aria-label="Email Surbhi"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
              aria-label="Back to top"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-teal-300 hover:border-teal-500/40 transition-all font-mono text-[11px]"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-neutral-400">
          <div>
            © {new Date().getFullYear()} Surbhi. All authentic credentials and coursework verified.
          </div>
          <div>
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
