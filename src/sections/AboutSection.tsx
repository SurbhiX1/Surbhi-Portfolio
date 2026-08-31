import React from 'react';
import { Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F7F3EA] border-t border-[#DED6C8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <ScrollReveal delay={0}>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B08D3C] font-semibold">
                <span>[ BIOGRAPHY & BACKGROUND ]</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1B18] font-sans">
                About Me
              </h2>
            </div>
          </ScrollReveal>

          {/* Narrative Paragraphs */}
          <ScrollReveal delay={100}>
            <div className="space-y-4 text-[#1C1B18]/90 text-sm sm:text-base leading-relaxed font-sans">
              {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="leading-relaxed text-[#1C1B18]/85">
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* "Currently" Focus Panel */}
          <ScrollReveal delay={200}>
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFCF5] border border-[#DED6C8] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#B08D3C] font-semibold flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#B08D3C]" /> Current Focus & Active Learning
                </h3>
                <span className="text-[10px] font-mono text-[#6F6A60] px-2.5 py-0.5 rounded-full bg-[#F1EBDD] border border-[#DED6C8]">
                  Updated 2026
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {PERSONAL_INFO.currently.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1C1B18]">
                    <CheckCircle2 className="w-4 h-4 text-[#B08D3C] shrink-0 mt-0.5" />
                    <span className="font-sans leading-relaxed">{item}</span>
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
