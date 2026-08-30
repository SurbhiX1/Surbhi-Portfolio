import React, { useState } from 'react';
import {
  GraduationCap,
  Calendar,
  Sparkles,
  Info,
  CheckCircle2,
} from 'lucide-react';
import { SEMESTER_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  // Default to Semester 1 (index 0)
  const [selectedSemesterIndex, setSelectedSemesterIndex] = useState<number>(0);

  const selectedSemester = SEMESTER_DATA[selectedSemesterIndex];

  const getGradeBadge = (grade: string) => {
    switch (grade) {
      case 'O':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/40';
      case 'A+':
        return 'bg-teal-500/15 text-teal-300 border-teal-500/40';
      case 'A':
        return 'bg-sky-500/15 text-sky-300 border-sky-500/40';
      default:
        return 'bg-neutral-800 text-neutral-300 border-neutral-700';
    }
  };

  return (
    <section id="education" className="py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400">
            <span>[ ACADEMIC FOUNDATION ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Education & Official Semester Records
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Pursuing Bachelor of Technology in Computer Science and Engineering at Lovely Professional University. Click either semester tile to view verified subject-wise grades.
          </p>
        </div>

        {/* University Overview & Interactive TGPA Tiles Card */}
        <div className="mb-8 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* University Details */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-teal-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                Lovely Professional University
              </h3>
              <p className="text-sm text-neutral-300">
                Bachelor of Technology (B.Tech) — Computer Science and Engineering
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400 pt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" /> Commenced: {PERSONAL_INFO.started}
                </span>
                <span>•</span>
                <span>Punjab, India</span>
              </div>
            </div>
          </div>

          {/* Interactive Side-by-Side TGPA Tiles (Clickable Semester Selectors) */}
          <div
            className="flex flex-row items-center gap-3 shrink-0"
            role="tablist"
            aria-label="Select semester to view courses"
          >
            {/* Semester 1 TGPA Tile */}
            <button
              type="button"
              role="tab"
              id="education-sem1-tile"
              aria-selected={selectedSemesterIndex === 0}
              aria-controls="semester-subjects-panel"
              onClick={() => setSelectedSemesterIndex(0)}
              className={`flex-1 sm:w-44 p-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500/50 ${
                selectedSemesterIndex === 0
                  ? 'bg-teal-500/10 border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.15)] ring-1 ring-teal-500/40'
                  : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 opacity-75 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between sm:justify-center gap-1.5">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  Semester 1
                </span>
                {selectedSemesterIndex === 0 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                )}
              </div>
              <div className="text-2xl font-bold font-mono text-teal-400 my-0.5">
                9.61
              </div>
              <div className="text-[10px] text-emerald-400 font-mono">
                {selectedSemesterIndex === 0 ? 'Selected • TGPA' : 'Top Academic Tier'}
              </div>
            </button>

            {/* Semester 2 TGPA Tile */}
            <button
              type="button"
              role="tab"
              id="education-sem2-tile"
              aria-selected={selectedSemesterIndex === 1}
              aria-controls="semester-subjects-panel"
              onClick={() => setSelectedSemesterIndex(1)}
              className={`flex-1 sm:w-44 p-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500/50 ${
                selectedSemesterIndex === 1
                  ? 'bg-teal-500/10 border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.15)] ring-1 ring-teal-500/40'
                  : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 opacity-75 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between sm:justify-center gap-1.5">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  Semester 2
                </span>
                {selectedSemesterIndex === 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                )}
              </div>
              <div className="text-2xl font-bold font-mono text-teal-400 my-0.5">
                9.41
              </div>
              <div className="text-[10px] text-emerald-400 font-mono">
                {selectedSemesterIndex === 1 ? 'Selected • TGPA' : 'Outstanding Honors'}
              </div>
            </button>
          </div>
        </div>

        {/* Selected Semester Subject Breakdown (Appears directly below the TGPA tiles) */}
        <div
          id="semester-subjects-panel"
          role="tabpanel"
          aria-labelledby={selectedSemesterIndex === 0 ? 'education-sem1-tile' : 'education-sem2-tile'}
          key={selectedSemester.semester}
          className="p-6 sm:p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-6 shadow-sm transition-all duration-300"
        >
          {/* Active Semester Header & Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-800/80 gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-teal-400 font-semibold tracking-wider">
                  {selectedSemester.semester} Courses
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-xs font-mono text-neutral-300">
                  TGPA: <strong className="text-teal-400">{selectedSemester.tgpa}</strong>
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white font-sans">
                Subject-Wise Official Grades ({selectedSemester.courses.length} Subjects)
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-400">
                {selectedSemester.period}
              </span>
            </div>
          </div>

          {/* Semester Highlights */}
          <div className="flex flex-wrap gap-2 text-xs font-sans text-neutral-300">
            {selectedSemester.highlights.map((h, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-950/80 border border-neutral-800/80 text-neutral-300"
              >
                <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                {h}
              </span>
            ))}
          </div>

          {/* Clean Subject Table / List */}
          <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/70">
            {/* Desktop Table Header */}
            <div className="hidden sm:grid sm:grid-cols-12 px-5 py-3 bg-neutral-900/80 border-b border-neutral-800 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              <div className="col-span-3 lg:col-span-2">Course Code</div>
              <div className="col-span-5 lg:col-span-6">Subject Name</div>
              <div className="col-span-2 text-center">Grade</div>
              <div className="col-span-2 text-right">Performance</div>
            </div>

            {/* Subject Rows */}
            <div className="divide-y divide-neutral-800/60">
              {selectedSemester.courses.map((course) => (
                <div
                  key={course.code}
                  className="px-4 sm:px-5 py-3.5 hover:bg-neutral-900/40 transition-colors flex flex-col sm:grid sm:grid-cols-12 sm:items-center gap-2 sm:gap-0"
                >
                  {/* Code */}
                  <div className="sm:col-span-3 lg:col-span-2 flex items-center justify-between sm:justify-start">
                    <span className="font-mono text-xs font-bold text-teal-400 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                      {course.code}
                    </span>
                    {/* Mobile-only Grade Badge display on right */}
                    <span
                      className={`sm:hidden px-2 py-0.5 rounded text-[11px] font-mono font-bold border ${getGradeBadge(
                        course.grade
                      )}`}
                    >
                      {course.grade} • {course.gradeDescription}
                    </span>
                  </div>

                  {/* Name */}
                  <div className="sm:col-span-5 lg:col-span-6">
                    <span className="text-sm font-medium text-neutral-200 font-sans">
                      {course.name}
                    </span>
                  </div>

                  {/* Desktop Grade */}
                  <div className="hidden sm:flex sm:col-span-2 items-center justify-center">
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-bold border ${getGradeBadge(
                        course.grade
                      )}`}
                    >
                      {course.grade}
                    </span>
                  </div>

                  {/* Desktop Performance */}
                  <div className="hidden sm:block sm:col-span-2 text-right">
                    <span className="text-xs font-mono text-neutral-300">
                      {course.gradeDescription}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Status Note */}
          <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              Verified Official Academic Records
            </span>
            <span className="text-teal-400 font-medium">
              {selectedSemester.courses.length} / {selectedSemester.courses.length} Completed Coursework
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
