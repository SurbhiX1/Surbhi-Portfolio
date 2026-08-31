import React from 'react';
import {
  Award,
  FileCheck,
  CheckCircle2,
} from 'lucide-react';
import { CERTIFICATIONS_DATA, TIMES_OF_INDIA_DATA } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-[#F6F1E8] border-t border-[#DDD5C7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C49A4A] font-semibold">
              <span>[ VERIFIED CREDENTIALS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#172235] font-sans">
              Certifications & Real-World Practical Experience
            </h2>
            <p className="text-[#3D4D65] text-sm sm:text-base leading-relaxed font-sans">
              Course certifications spanning computer science fundamentals, Python systems, AI foundations, and specialized on-ground CDP experience with Times of India.
            </p>
          </div>
        </ScrollReveal>

        {/* SPECIAL FEATURED CARD: Times of India Summer / CDP Experience */}
        <ScrollReveal delay={100}>
          <div className="mb-12">
            <div
              id="toi-featured-card"
              className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF8] border border-[#172235] hover:border-[#C49A4A] shadow-sm relative overflow-hidden group transition-colors"
            >
              {/* Background subtle accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#E8EDF3]/60 rounded-full blur-3xl pointer-events-none group-hover:bg-[#E8EDF3]/80 transition-colors" />

              <div className="relative space-y-6">
                {/* Header Info */}
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#E8EDF3] text-[#172235] border border-[#D6DFE8] font-semibold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#C49A4A]" /> FEATURED PRACTICAL EXPERIENCE
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#E8EDF3] text-[#3D4D65] border border-[#D6DFE8]">
                      Summer / CDP Work
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172235] font-sans">
                      Times of India
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#26354D] font-semibold">
                      Summer / Community Development Program (CDP) Practical Experience
                    </p>
                  </div>

                  <p className="text-sm text-[#26354D] leading-relaxed font-sans">
                    {TIMES_OF_INDIA_DATA.description}
                  </p>

                  {/* Key Aspects */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {TIMES_OF_INDIA_DATA.keyAspects.map((asp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#172235] p-2 rounded-xl bg-[#E8EDF3]/50 border border-[#D6DFE8]/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A4A] shrink-0" />
                        <span className="font-sans font-medium">{asp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Online Certifications Grid */}
        <div className="space-y-6">
          <ScrollReveal delay={150}>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#172235] font-bold">
                Coursework & Professional Credentials
              </h3>
              <span className="text-xs font-mono text-[#C49A4A] font-semibold">
                {CERTIFICATIONS_DATA.length} Completed
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <ScrollReveal key={cert.id} staggerIndex={idx} staggerMs={70}>
                <div
                  id={`cert-card-${cert.id}`}
                  className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#172235] hover:border-[#C49A4A] transition-all flex flex-col justify-between space-y-4 shadow-xs h-full"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-[#E8EDF3] text-[#172235] border border-[#D6DFE8] font-semibold">
                        {cert.issuer}
                      </span>
                      <FileCheck className="w-4 h-4 text-[#C49A4A]" />
                    </div>
                    <h4 className="text-base font-bold text-[#172235] font-sans">{cert.title}</h4>
                    <div className="text-xs font-mono text-[#3D4D65]">{cert.category}</div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-[#D6DFE8]">
                    <div className="text-[10px] font-mono uppercase text-[#3D4D65] font-semibold">Skills Covered:</div>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((sk) => (
                        <span
                          key={sk}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#E8EDF3] text-[#172235] border border-[#D6DFE8] font-medium"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
