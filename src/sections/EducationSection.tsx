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
    <section id="education" className="py-20 bg-[#F6F1E8] border-t border-[#DDD5C7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-10 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C49A4A] font-semibold">
              <span>[ ACADEMIC FOUNDATION ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#172235] font-sans">
              Education & Academic Background
            </h2>
            <p className="text-[#3D4D65] text-sm sm:text-base leading-relaxed font-sans">
              Formal undergraduate qualification in Computer Science and Engineering at Lovely Professional University, focused on computing fundamentals, software architecture, and problem solving.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Education Card */}
        <ScrollReveal delay={100}>
          <div className="p-7 sm:p-9 rounded-3xl bg-[#FFFDF8] border border-[#172235] hover:border-[#C49A4A] shadow-sm transition-colors duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#DDD5C7]">
              
              {/* Institution & Degree Info */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#E8EDF3] border border-[#D6DFE8] flex items-center justify-center text-[#172235] shrink-0 shadow-xs">
                  <GraduationCap className="w-7 h-7 text-[#172235]" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#172235] font-sans">
                      {EDUCATION_DATA.institution}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#E8EDF3] text-[#172235] border border-[#D6DFE8] font-medium">
                      {EDUCATION_DATA.status}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-[#26354D]">
                    {EDUCATION_DATA.degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#3D4D65] pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C49A4A]" /> {EDUCATION_DATA.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C49A4A]" /> {EDUCATION_DATA.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Academic Highlight Card (CGPA 9.49) using pale navy background with deep navy text */}
              <div className="shrink-0">
                <div className="p-4 sm:p-5 rounded-3xl bg-[#E8EDF3] border border-[#D6DFE8] flex items-center gap-4 shadow-xs">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFFDF8] border border-[#DDD5C7] flex items-center justify-center text-[#C49A4A] shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#3D4D65] font-semibold">
                      {EDUCATION_DATA.cgpaLabel}
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#172235] tracking-tight">
                      {EDUCATION_DATA.currentCgpa}
                    </div>
                    <div className="text-[11px] text-[#C49A4A] font-medium font-sans">
                      Top Academic Tier
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Academic Highlights List */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#3D4D65] font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C49A4A]" /> Core Academic Highlights & Pillars
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                {EDUCATION_DATA.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#E8EDF3] border border-[#D6DFE8] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C49A4A] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#172235] font-sans leading-relaxed font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Badge */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#3D4D65]">
              <Sparkles className="w-4 h-4 text-[#C49A4A] shrink-0" />
              <span>Enrolled Undergraduate Degree • Lovely Professional University, Punjab</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
