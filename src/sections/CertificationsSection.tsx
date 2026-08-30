import React from 'react';
import {
  Award,
  FileCheck,
  CheckCircle2,
} from 'lucide-react';
import { CERTIFICATIONS_DATA, TIMES_OF_INDIA_DATA } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-neutral-950/90 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400">
            <span>[ VERIFIED CREDENTIALS ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Certifications & Real-World Practical Experience
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Course certifications spanning computer science fundamentals, Python systems, AI foundations, and specialized on-ground CDP experience with Times of India.
          </p>
        </div>

        {/* SPECIAL FEATURED CARD: Times of India Summer / CDP Experience */}
        <div className="mb-12">
          <div
            id="toi-featured-card"
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-teal-500/40 shadow-2xl relative overflow-hidden group"
          >
            {/* Background subtle accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/15 transition-colors" />

            <div className="relative space-y-6">
              {/* Header Info */}
              <div className="space-y-4 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-teal-500/20 text-teal-300 border border-teal-500/40 font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> FEATURED PRACTICAL EXPERIENCE
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
                    Summer / CDP Work
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                    Times of India
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-teal-400">
                    Summer / Community Development Program (CDP) Practical Experience
                  </p>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {TIMES_OF_INDIA_DATA.description}
                </p>

                {/* Key Aspects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {TIMES_OF_INDIA_DATA.keyAspects.map((asp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{asp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Online Certifications Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Coursework & Professional Credentials
            </h3>
            <span className="text-xs font-mono text-teal-400">
              {CERTIFICATIONS_DATA.length} Completed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-neutral-950 text-teal-300 border border-neutral-800">
                      {cert.issuer}
                    </span>
                    <FileCheck className="w-4 h-4 text-teal-400/80" />
                  </div>
                  <h4 className="text-base font-bold text-white font-sans">{cert.title}</h4>
                  <div className="text-xs font-mono text-neutral-400">{cert.category}</div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-neutral-800/60">
                  <div className="text-[10px] font-mono uppercase text-neutral-500">Skills Covered:</div>
                  <div className="flex wrap gap-1">
                    {cert.skills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-950 text-neutral-300 border border-neutral-800"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
