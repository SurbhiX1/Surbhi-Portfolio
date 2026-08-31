import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Generate mailto link
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || `Portfolio Message from ${name}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F6F1E8] border-t border-[#DDD5C7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Connect Info */}
          <ScrollReveal delay={0} className="lg:col-span-5">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C49A4A] font-semibold">
                  <span>[ GET IN TOUCH ]</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#172235] font-sans">
                  Let&apos;s Build Something Meaningful.
                </h2>
              </div>

              <p className="text-[#3D4D65] text-sm sm:text-base leading-relaxed font-sans">
                I am always eager to learn, explore new problem spaces, and collaborate on ambitious technical projects or student initiatives. Whether you are a recruiter, hackathon teammate, professor, or fellow developer, feel free to reach out.
              </p>

              {/* Direct Link Cards */}
              <div className="space-y-3 pt-2">
                {/* Email Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF8] border border-[#172235] hover:border-[#C49A4A] flex items-center justify-between gap-3 group shadow-xs transition all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#E8EDF3] border border-[#D6DFE8] flex items-center justify-center text-[#172235] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 truncate">
                      <div className="text-[10px] font-mono uppercase text-[#3D4D65] font-semibold">Direct Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-mono text-[#172235] hover:text-[#C49A4A] truncate block transition-colors font-medium"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    className="p-2 rounded-lg bg-[#E8EDF3] hover:bg-[#D6DFE8] text-[#172235] transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#C49A4A]" /> : <Copy className="w-4 h-4 text-[#172235]" />}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-btn"
                  className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF8] border border-[#172235] hover:border-[#C49A4A] flex items-center justify-between gap-3 group shadow-xs transition all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#E8EDF3] border border-[#D6DFE8] flex items-center justify-center text-[#172235] shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase text-[#3D4D65] font-semibold">Professional Profile</div>
                      <div className="text-xs sm:text-sm font-medium text-[#172235] group-hover:text-[#26354D] transition-colors">
                        linkedin.com/in/surbhi-g001
                      </div>
                    </div>
                  </div>
                  <span className="text-[#3D4D65] group-hover:text-[#172235] transition-colors text-xs font-mono">
                    Visit ↗
                  </span>
                </a>

                {/* GitHub Card */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-github-btn"
                  className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF8] border border-[#172235] hover:border-[#C49A4A] flex items-center justify-between gap-3 group shadow-xs transition all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#E8EDF3] border border-[#D6DFE8] flex items-center justify-center text-[#172235] shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase text-[#3D4D65] font-semibold">Code Repositories</div>
                      <div className="text-xs sm:text-sm font-medium text-[#172235] group-hover:text-[#26354D] transition-colors">
                        github.com/SurbhiX1
                      </div>
                    </div>
                  </div>
                  <span className="text-[#3D4D65] group-hover:text-[#172235] transition-colors text-xs font-mono">
                    Visit ↗
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Contact Form */}
          <ScrollReveal delay={120} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF8] border border-[#172235] shadow-sm space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#172235] font-sans">Send a Message</h3>
                <p className="text-xs text-[#3D4D65] font-mono">
                  Submitting will launch your default email client with your message pre-filled.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#E8EDF3] border border-[#172235] text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#C49A4A] mx-auto" />
                  <h4 className="text-base font-bold text-[#172235]">Email Client Triggered!</h4>
                  <p className="text-xs text-[#3D4D65] max-w-md mx-auto">
                    Your default email application has been launched with the details addressed to {PERSONAL_INFO.email}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#172235] underline hover:text-[#C49A4A] pt-2 block mx-auto cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-[#3D4D65] font-semibold">
                        Your Name <span className="text-[#C49A4A]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Alex Johnson"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#E8EDF3] border border-[#D6DFE8] text-[#172235] placeholder:text-[#3D4D65]/60 focus:outline-none focus:border-[#26354D]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-[#3D4D65] font-semibold">
                        Your Email <span className="text-[#C49A4A]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#E8EDF3] border border-[#D6DFE8] text-[#172235] placeholder:text-[#3D4D65]/60 focus:outline-none focus:border-[#26354D]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-[#3D4D65] font-semibold">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Opportunity / Collaboration / Project Discussion"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#E8EDF3] border border-[#D6DFE8] text-[#172235] placeholder:text-[#3D4D65]/60 focus:outline-none focus:border-[#26354D]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-[#3D4D65] font-semibold">
                      Message <span className="text-[#C49A4A]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Surbhi, I came across your portfolio and wanted to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#E8EDF3] border border-[#D6DFE8] text-[#172235] placeholder:text-[#3D4D65]/60 focus:outline-none focus:border-[#26354D] resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-3.5 rounded-xl bg-[#172235] hover:bg-[#26354D] text-[#FFFDF8] font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm border border-[#C49A4A]/40 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#E2C98A]" />
                    <span>Send Message to Surbhi</span>
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
