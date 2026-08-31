import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  Code,
  GraduationCap,
  Sparkles,
  Briefcase,
  Trophy,
  Award,
  Compass,
  X,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  label: string;
  category: 'Navigation' | 'Actions' | 'Social';
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const commands: CommandItem[] = [
    {
      id: 'nav-home',
      label: 'Home / Hero',
      category: 'Navigation',
      description: 'Back to top overview',
      icon: Sparkles,
      action: () => scrollToSection('hero'),
    },
    {
      id: 'nav-about',
      label: 'About Me',
      category: 'Navigation',
      description: 'Background, values & currently pursuing',
      icon: Compass,
      action: () => scrollToSection('about'),
    },
    {
      id: 'nav-education',
      label: 'Education & Academic Records',
      category: 'Navigation',
      description: 'LPU B.Tech CSE (Current CGPA: 9.49)',
      icon: GraduationCap,
      action: () => scrollToSection('education'),
    },
    {
      id: 'nav-skills',
      label: 'Skills & Technical Core',
      category: 'Navigation',
      description: 'Languages, DSA, Database, Web & Tools',
      icon: Code,
      action: () => scrollToSection('skills'),
    },
    {
      id: 'nav-projects',
      label: 'Projects ("Things I\'ve Built")',
      category: 'Navigation',
      description: 'Forest Surveillance IoT & Movie Recommendation',
      icon: Code,
      action: () => scrollToSection('projects'),
    },
    {
      id: 'nav-experience',
      label: 'Experience & Roles',
      category: 'Navigation',
      description: 'Play 2 Unite Coordinator & Student Advisory Committee',
      icon: Briefcase,
      action: () => scrollToSection('experience'),
    },
    {
      id: 'nav-achievements',
      label: 'Achievements & Milestones',
      category: 'Navigation',
      description: 'HackManthon, Smart India Hackathon & Basketball',
      icon: Trophy,
      action: () => scrollToSection('achievements'),
    },
    {
      id: 'nav-certifications',
      label: 'Certifications & Times of India',
      category: 'Navigation',
      description: 'Infosys Springboard, TutorialsPoint & TOI Experience',
      icon: Award,
      action: () => scrollToSection('certifications'),
    },
    {
      id: 'nav-contact',
      label: 'Contact Section',
      category: 'Navigation',
      description: 'Send a message or connect',
      icon: Mail,
      action: () => scrollToSection('contact'),
    },
    {
      id: 'social-linkedin',
      label: 'Visit LinkedIn Profile',
      category: 'Social',
      description: 'linkedin.com/in/surbhi-g001',
      icon: Linkedin,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'social-github',
      label: 'Visit GitHub Profile',
      category: 'Social',
      description: 'github.com/SurbhiX1',
      icon: Github,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'social-email',
      label: 'Send Email',
      category: 'Social',
      description: PERSONAL_INFO.email,
      icon: Mail,
      action: () => {
        window.location.href = `mailto:${PERSONAL_INFO.email}`;
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const searchStr = `${cmd.label} ${cmd.category} ${cmd.description || ''}`.toLowerCase();
    return searchStr.includes(query.toLowerCase().trim());
  });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isOpen && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredCommands.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredCommands.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="command-palette-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#1C1B18]/50 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="command-palette-modal"
        className="w-full max-w-2xl bg-[#FFFCF5] border border-[#DED6C8] rounded-3xl shadow-2xl overflow-hidden text-[#1C1B18] flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#DED6C8] gap-3">
          <Search className="w-5 h-5 text-[#B08D3C] shrink-0" />
          <input
            ref={inputRef}
            id="command-palette-input"
            type="text"
            placeholder="Type a command, section name, or action... (e.g., 'Projects', 'Education')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base outline-none placeholder:text-[#6F6A60] text-[#1C1B18] font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#6F6A60] hover:text-[#1C1B18] text-xs px-2 py-0.5 rounded bg-[#F1EBDD] cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            id="command-palette-close-btn"
            onClick={onClose}
            aria-label="Close command palette"
            className="p-1 rounded-lg text-[#6F6A60] hover:text-[#1C1B18] hover:bg-[#F1EBDD] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command list */}
        <div ref={listRef} className="overflow-y-auto p-2 divide-y divide-[#DED6C8]/40">
          {filteredCommands.length === 0 ? (
            <div className="py-12 text-center text-[#6F6A60] text-sm font-sans">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div className="space-y-1">
              {filteredCommands.map((cmd, idx) => {
                const IconComponent = cmd.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    id={`command-item-${cmd.id}`}
                    onClick={() => cmd.action()}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-left transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#F1EBDD] text-[#8C6D23] border border-[#B08D3C]/40'
                        : 'text-[#1C1B18] hover:bg-[#F7F3EA] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`p-2 rounded-xl ${
                          isSelected ? 'bg-[#FFFCF5] text-[#B08D3C]' : 'bg-[#F1EBDD] text-[#6F6A60]'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-sm font-medium text-[#1C1B18] flex items-center gap-2 font-sans">
                          <span>{cmd.label}</span>
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#F1EBDD] text-[#6F6A60]">
                            {cmd.category}
                          </span>
                        </div>
                        {cmd.description && (
                          <div className="text-xs text-[#6F6A60] truncate mt-0.5 font-sans">{cmd.description}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 ml-2 text-[#6F6A60]">
                      {cmd.category === 'Social' ? (
                        <ExternalLink className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#F7F3EA] border-t border-[#DED6C8] flex items-center justify-between text-[11px] text-[#6F6A60] font-mono">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#FFFCF5] text-[#1C1B18] border border-[#DED6C8]">↑</kbd>{' '}
              <kbd className="px-1.5 py-0.5 rounded bg-[#FFFCF5] text-[#1C1B18] border border-[#DED6C8]">↓</kbd> navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#FFFCF5] text-[#1C1B18] border border-[#DED6C8]">↵</kbd> select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#FFFCF5] text-[#1C1B18] border border-[#DED6C8]">esc</kbd> close
            </span>
          </div>
          <span className="hidden sm:inline text-[#6F6A60]">Surbhi • Portfolio Command Center</span>
        </div>
      </div>
    </div>
  );
};
