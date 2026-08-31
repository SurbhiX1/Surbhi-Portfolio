import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  MapPin,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[88vh] pt-28 sm:pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-[#F7F3EA]"
    >
      {/* Subtle cinematic honeycomb mesh layers with gentle radial fades */}
      <div 
        className="absolute inset-0 honeycomb-pattern honeycomb-mask-hero opacity-75 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 honeycomb-pattern honeycomb-mask-corner opacity-50 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle background ambient mesh */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-[#D6BD7A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#B08D3C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-10 lg:gap-14">
          
          {/* LEFT / MAIN AREA: Name, Title, Bio, CTAs, Socials */}
          <div className="max-w-2xl space-y-6 text-left">
            {/* Display Name & Typography */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#1C1B18] font-sans">
                {PERSONAL_INFO.name}
                <span className="text-[#B08D3C]">.</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#6F6A60] tracking-tight font-sans">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-[#6F6A60] text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              &ldquo;{PERSONAL_INFO.supportingText}&rdquo;
            </p>

            {/* Location context badge */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <div
                id="hero-location-badge"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFCF5] border border-[#B08D3C]/35 text-[#1C1B18] shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B08D3C] shrink-0" />
                <span className="text-[#1C1B18] font-medium tracking-tight">Bareilly, Uttar Pradesh</span>
              </div>
            </div>

            {/* Action CTA — Explore My Work */}
            <div className="pt-2">
              <button
                id="hero-explore-work-btn"
                onClick={scrollToProjects}
                className="px-6 py-3.5 rounded-xl bg-[#B08D3C] hover:bg-[#99782F] text-[#FFFCF5] font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#FFFCF5]" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#DED6C8]">
              <span className="text-xs font-mono text-[#6F6A60]">Connect:</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-link"
                className="flex items-center gap-1.5 text-xs text-[#6F6A60] hover:text-[#B08D3C] transition-colors font-mono"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-link"
                className="flex items-center gap-1.5 text-xs text-[#6F6A60] hover:text-[#B08D3C] transition-colors font-mono"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="hero-email-link"
                className="flex items-center gap-1.5 text-xs text-[#6F6A60] hover:text-[#B08D3C] transition-colors font-mono"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* RIGHT / BESIDE NAME: Profile Photograph */}
          <div className="shrink-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Soft decorative background glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D6BD7A]/30 to-[#B08D3C]/20 rounded-[44px] sm:rounded-[52px] blur-md opacity-60 pointer-events-none" />
              
              {/* Main Portrait Frame with Luxury Border & Soft Cream Backing */}
              <div className="relative p-2.5 sm:p-3 bg-[#FFFCF5] border border-[#DED6C8] rounded-[40px] sm:rounded-[48px] shadow-lg">
                <div className="w-52 h-64 sm:w-64 sm:h-80 md:w-72 md:h-92 rounded-[32px] sm:rounded-[40px] overflow-hidden border border-[#B08D3C]/30 bg-[#F1EBDD]">
                  <img
                    src="/assets/profile.jpg"
                    alt="Surbhi"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
