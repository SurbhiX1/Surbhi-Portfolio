import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  FileDown,
  Command,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onNavigateHome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (onNavigateHome) {
      onNavigateHome();
    }
    const targetId = href.replace('#', '');
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleDownloadCv = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(PERSONAL_INFO.cvPath);
      if (!response.ok) throw new Error('File fetch failed');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Surbhi-CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback
      const link = document.createElement('a');
      link.href = PERSONAL_INFO.cvPath;
      link.download = 'Surbhi-CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF8]/90 backdrop-blur-md border-b border-[#DDD5C7] shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            id="brand-logo-link"
            onClick={() => {
              if (onNavigateHome) {
                onNavigateHome();
              }
            }}
            className="group flex items-center gap-2.5 text-[#172235] focus:outline-none"
            aria-label="Surbhi - Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#FFFDF8] border border-[#DDD5C7] flex items-center justify-center text-[#C49A4A] font-mono font-bold text-sm group-hover:border-[#C49A4A]/60 group-hover:shadow-[0_0_12px_rgba(196,154,74,0.2)] transition-all">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-base sm:text-lg text-[#172235] group-hover:text-[#C49A4A] transition-colors font-sans">
                Surbhi<span className="text-[#C49A4A]">.</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#5C6573]">
                CSE • LPU
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-medium text-[#3D4D65]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 rounded-lg text-[#3D4D65] hover:text-[#172235] hover:bg-[#E8EDF3] transition-all duration-150"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick Command Center Trigger */}
            <button
              id="cmd-palette-nav-btn"
              onClick={onOpenCommandPalette}
              aria-label="Open Command Center (Shortcut: / or Ctrl+K)"
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#FFFDF8] border border-[#DDD5C7] text-[#3D4D65] hover:text-[#172235] hover:bg-[#E8EDF3] hover:border-[#C49A4A]/50 transition-all text-xs font-mono group shadow-xs"
            >
              <Command className="w-3.5 h-3.5 text-[#C49A4A]" />
              <span className="hidden sm:inline text-[#172235]">Quick Command</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] rounded bg-[#E8EDF3] text-[#26354D] border border-[#D6DFE8]">
                /
              </kbd>
            </button>

            {/* Download CV button */}
            <a
              id="nav-download-cv-btn"
              href={PERSONAL_INFO.cvPath}
              download="Surbhi-CV.pdf"
              onClick={handleDownloadCv}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#172235] hover:bg-[#26354D] text-[#FFFDF8] border border-[#C49A4A]/50 hover:border-[#C49A4A] text-xs font-medium transition-all shadow-xs cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-[#E2C98A]" />
              <span>Download CV</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg bg-[#FFFDF8] border border-[#DDD5C7] text-[#172235] hover:bg-[#E8EDF3]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-30 lg:hidden bg-[#172235]/50 backdrop-blur-md pt-20 px-6 pb-8 flex flex-col justify-between animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="space-y-2 py-4 bg-[#FFFDF8] p-5 rounded-2xl border border-[#DDD5C7] shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="px-3 pb-3 border-b border-[#DDD5C7] flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#3D4D65]">Navigation</span>
              <span className="text-[11px] text-[#C49A4A] font-mono">Surbhi • Portfolio</span>
            </div>
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-[#172235] hover:text-[#C49A4A] hover:bg-[#E8EDF3] border border-transparent hover:border-[#D6DFE8] transition-all text-sm font-medium"
              >
                <span>{link.label}</span>
                <span className="text-[#3D4D65] text-xs">→</span>
              </button>
            ))}
          </div>

          <div className="pt-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between text-xs font-mono text-[#3D4D65] px-4 py-2 rounded-xl bg-[#FFFDF8] border border-[#DDD5C7]">
              <span>{PERSONAL_INFO.university}</span>
              <span className="text-[#C49A4A]">{PERSONAL_INFO.targetYear}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
