import React from 'react';
import {
  GraduationCap,
  Calendar,
  Sparkles,
  MapPin,
  CheckCircle2,
  Award,
  BookOpen,
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#FFFCF5]/70 border-t border-[#DED6C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-10 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B08D3C] font-semibold">
              <span>[ ACADEMIC FOUNDATION ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1B18] font-sans">
              Education & Academic Background
            </h2>
            <p className="text-[#6F6A60] text-sm sm:text-base leading-relaxed">
              Formal undergraduate qualification in Computer Science and Engineering at Lovely Professional University, focused on computing fundamentals, software architecture, and problem solving.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Education Card */}
        <ScrollReveal delay={100}>
          <div className="p-7 sm:p-9 rounded-3xl bg-[#FFFCF5] border border-[#DED6C8] shadow-sm space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#DED6C8]">
              
              {/* Institution & Degree Info */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#F1EBDD] border border-[#DED6C8] flex items-center justify-center text-[#B08D3C] shrink-0 shadow-xs">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1C1B18] font-sans">
                      {EDUCATION_DATA.institution}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#B08D3C]/10 text-[#8C6D23] border border-[#B08D3C]/30 font-medium">
                      {EDUCATION_DATA.status}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-[#6F6A60]">
                    {EDUCATION_DATA.degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#6F6A60] pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B08D3C]" /> {EDUCATION_DATA.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B08D3C]" /> {EDUCATION_DATA.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Academic Highlight Card (CGPA 9.49) */}
              <div className="shrink-0">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F1EBDD] border border-[#B08D3C]/30 flex items-center gap-4 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-[#FFFCF5] border border-[#DED6C8] flex items-center justify-center text-[#B08D3C] shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#6F6A60] font-semibold">
                      {EDUCATION_DATA.cgpaLabel}
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#B08D3C] tracking-tight">
                      {EDUCATION_DATA.currentCgpa}
                    </div>
                    <div className="text-[11px] text-[#8C6D23] font-medium font-sans">
                      Top Academic Tier
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Academic Highlights List */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#6F6A60] font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#B08D3C]" /> Core Academic Highlights & Pillars
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                {EDUCATION_DATA.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F7F3EA] border border-[#DED6C8] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#B08D3C] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#1C1B18] font-sans leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Badge */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#6F6A60]">
              <Sparkles className="w-4 h-4 text-[#B08D3C] shrink-0" />
              <span>Enrolled Undergraduate Degree • Lovely Professional University, Punjab</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
