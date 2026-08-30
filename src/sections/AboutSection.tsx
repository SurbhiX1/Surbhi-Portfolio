import React from 'react';
import { Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-950/80 border-t border-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400">
              <span>[ BIOGRAPHY & BACKGROUND ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              About Me
            </h2>
          </div>

          {/* Narrative Paragraphs */}
          <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
            {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
              <p key={idx} className="leading-relaxed text-neutral-300">
                {para}
              </p>
            ))}
          </div>

          {/* "Currently" Focus Panel */}
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-400" /> Current Focus & Active Learning
              </h3>
              <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-neutral-800">
                Updated 2026
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {PERSONAL_INFO.currently.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

