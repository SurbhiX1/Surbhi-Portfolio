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
    <section id="certifications" className="py-20 bg-[#FFFCF5]/70 border-t border-[#DED6C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B08D3C] font-semibold">
              <span>[ VERIFIED CREDENTIALS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1B18] font-sans">
              Certifications & Real-World Practical Experience
            </h2>
            <p className="text-[#6F6A60] text-sm sm:text-base leading-relaxed">
              Course certifications spanning computer science fundamentals, Python systems, AI foundations, and specialized on-ground CDP experience with Times of India.
            </p>
          </div>
        </ScrollReveal>

        {/* SPECIAL FEATURED CARD: Times of India Summer / CDP Experience */}
        <ScrollReveal delay={100}>
          <div className="mb-12">
            <div
              id="toi-featured-card"
              className="p-6 sm:p-8 rounded-3xl bg-[#FFFCF5] border border-[#B08D3C]/40 shadow-md relative overflow-hidden group"
            >
              {/* Background subtle accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#D6BD7A]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D6BD7A]/25 transition-colors" />

              <div className="relative space-y-6">
                {/* Header Info */}
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#B08D3C]/10 text-[#8C6D23] border border-[#B08D3C]/40 font-semibold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#B08D3C]" /> FEATURED PRACTICAL EXPERIENCE
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#F1EBDD] text-[#6F6A60] border border-[#DED6C8]">
                      Summer / CDP Work
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1B18] font-sans">
                      Times of India
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#8C6D23] font-semibold">
                      Summer / Community Development Program (CDP) Practical Experience
                    </p>
                  </div>

                  <p className="text-sm text-[#1C1B18]/85 leading-relaxed font-sans">
                    {TIMES_OF_INDIA_DATA.description}
                  </p>

                  {/* Key Aspects */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {TIMES_OF_INDIA_DATA.keyAspects.map((asp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#1C1B18]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D3C]" />
                        <span>{asp}</span>
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
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#6F6A60] font-semibold">
                Coursework & Professional Credentials
              </h3>
              <span className="text-xs font-mono text-[#8C6D23] font-semibold">
                {CERTIFICATIONS_DATA.length} Completed
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <ScrollReveal key={cert.id} staggerIndex={idx} staggerMs={70}>
                <div
                  id={`cert-card-${cert.id}`}
                  className="p-5 rounded-2xl bg-[#FFFCF5] border border-[#DED6C8] hover:border-[#B08D3C]/50 transition-all flex flex-col justify-between space-y-4 shadow-xs h-full"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-[#F1EBDD] text-[#8C6D23] border border-[#DED6C8] font-medium">
                        {cert.issuer}
                      </span>
                      <FileCheck className="w-4 h-4 text-[#B08D3C]" />
                    </div>
                    <h4 className="text-base font-bold text-[#1C1B18] font-sans">{cert.title}</h4>
                    <div className="text-xs font-mono text-[#6F6A60]">{cert.category}</div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-[#DED6C8]">
                    <div className="text-[10px] font-mono uppercase text-[#6F6A60] font-semibold">Skills Covered:</div>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((sk) => (
                        <span
                          key={sk}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#F1EBDD] text-[#1C1B18] border border-[#DED6C8]"
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
