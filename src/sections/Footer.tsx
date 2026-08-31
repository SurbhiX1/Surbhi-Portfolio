import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-12 bg-[#F6F1E8] border-t border-[#DDD5C7] text-[#5C6573] font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ScrollReveal delay={0}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Brand Info */}
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-base font-bold text-[#172235] tracking-tight font-sans">
                  Surbhi<span className="text-[#C49A4A]">.</span>
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#EEF1F4] text-[#172235] border border-[#DDD5C7] font-semibold">
                  CSE • LPU
                </span>
              </div>
              <p className="text-xs text-[#5C6573] font-mono">
                Lovely Professional University • Started August 2025 • {PERSONAL_INFO.targetYear}
              </p>
            </div>

            {/* Socials & Back to Top */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#FFFDF8] border border-[#DDD5C7] text-[#172235] hover:text-[#C49A4A] hover:border-[#C49A4A] transition-colors shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#FFFDF8] border border-[#DDD5C7] text-[#172235] hover:text-[#C49A4A] hover:border-[#C49A4A] transition-colors shadow-xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-[#FFFDF8] border border-[#DDD5C7] text-[#172235] hover:text-[#C49A4A] hover:border-[#C49A4A] transition-colors shadow-xs"
                aria-label="Email Surbhi"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                id="footer-back-to-top-btn"
                aria-label="Back to top"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFFDF8] border border-[#DDD5C7] text-[#172235] hover:text-[#C49A4A] hover:border-[#C49A4A] transition-all font-mono text-[11px] shadow-xs cursor-pointer"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="pt-6 border-t border-[#DDD5C7] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#5C6573]">
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
