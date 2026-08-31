import React from 'react';
import { Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F6F1E8] border-t border-[#DDD5C7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <ScrollReveal delay={0}>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C49A4A] font-semibold">
                <span>[ BIOGRAPHY & BACKGROUND ]</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#172235] font-sans">
                About Me
              </h2>
            </div>
          </ScrollReveal>

          {/* Narrative Paragraphs */}
          <ScrollReveal delay={100}>
            <div className="space-y-4 text-[#26354D] text-sm sm:text-base leading-relaxed font-sans">
              {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="leading-relaxed text-[#26354D]">
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* "Currently" Focus Panel with Pale Navy surface */}
          <ScrollReveal delay={200}>
            <div className="p-6 sm:p-7 rounded-3xl bg-[#E8EDF3] border border-[#172235] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#172235] font-bold flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#C49A4A]" /> Current Focus & Active Learning
                </h3>
                <span className="text-[10px] font-mono text-[#3D4D65] px-2.5 py-0.5 rounded-full bg-[#FFFDF8] border border-[#D6DFE8]">
                  Updated 2026
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {PERSONAL_INFO.currently.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172235] p-3 rounded-2xl bg-[#FFFDF8] border border-[#D6DFE8]">
                    <CheckCircle2 className="w-4 h-4 text-[#C49A4A] shrink-0 mt-0.5" />
                    <span className="font-sans font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
