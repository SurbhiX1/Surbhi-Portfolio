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
    <section id="contact" className="py-24 bg-[#F7F3EA] border-t border-[#DED6C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Connect Info */}
          <ScrollReveal delay={0} className="lg:col-span-5">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B08D3C] font-semibold">
                  <span>[ GET IN TOUCH ]</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1B18] font-sans">
                  Let&apos;s Build Something Meaningful.
                </h2>
              </div>

              <p className="text-[#6F6A60] text-sm sm:text-base leading-relaxed font-sans">
                I am always eager to learn, explore new problem spaces, and collaborate on ambitious technical projects or student initiatives. Whether you are a recruiter, hackathon teammate, professor, or fellow developer, feel free to reach out.
              </p>

              {/* Direct Link Cards */}
              <div className="space-y-3 pt-2">
                {/* Email Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFCF5] border border-[#DED6C8] flex items-center justify-between gap-3 group shadow-xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#F1EBDD] border border-[#DED6C8] flex items-center justify-center text-[#B08D3C] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 truncate">
                      <div className="text-[10px] font-mono uppercase text-[#6F6A60] font-semibold">Direct Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-mono text-[#1C1B18] hover:text-[#B08D3C] truncate block transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    className="p-2 rounded-lg bg-[#F1EBDD] hover:bg-[#DED6C8] text-[#1C1B18] transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#8C6D23]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-btn"
                  className="p-4 sm:p-5 rounded-2xl bg-[#FFFCF5] border border-[#DED6C8] hover:border-[#B08D3C] transition-all flex items-center justify-between gap-3 group shadow-xs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#F1EBDD] border border-[#DED6C8] flex items-center justify-center text-[#B08D3C] shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase text-[#6F6A60] font-semibold">Professional Profile</div>
                      <div className="text-xs sm:text-sm font-medium text-[#1C1B18] group-hover:text-[#B08D3C] transition-colors">
                        linkedin.com/in/surbhi-g001
                      </div>
                    </div>
                  </div>
                  <span className="text-[#6F6A60] group-hover:text-[#B08D3C] transition-colors text-xs font-mono">
                    Visit ↗
                  </span>
                </a>

                {/* GitHub Card */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-github-btn"
                  className="p-4 sm:p-5 rounded-2xl bg-[#FFFCF5] border border-[#DED6C8] hover:border-[#B08D3C] transition-all flex items-center justify-between gap-3 group shadow-xs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#F1EBDD] border border-[#DED6C8] flex items-center justify-center text-[#B08D3C] shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase text-[#6F6A60] font-semibold">Code Repositories</div>
                      <div className="text-xs sm:text-sm font-medium text-[#1C1B18] group-hover:text-[#B08D3C] transition-colors">
                        github.com/SurbhiX1
                      </div>
                    </div>
                  </div>
                  <span className="text-[#6F6A60] group-hover:text-[#B08D3C] transition-colors text-xs font-mono">
                    Visit ↗
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Contact Form */}
          <ScrollReveal delay={120} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFCF5] border border-[#DED6C8] shadow-sm space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#1C1B18] font-sans">Send a Message</h3>
                <p className="text-xs text-[#6F6A60] font-mono">
                  Submitting will launch your default email client with your message pre-filled.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#F1EBDD] border border-[#B08D3C]/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#B08D3C] mx-auto" />
                  <h4 className="text-base font-bold text-[#1C1B18]">Email Client Triggered!</h4>
                  <p className="text-xs text-[#6F6A60] max-w-md mx-auto">
                    Your default email application has been launched with the details addressed to {PERSONAL_INFO.email}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#B08D3C] underline hover:text-[#8C6D23] pt-2 block mx-auto cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-[#6F6A60] font-medium">
                        Your Name <span className="text-[#9C3826]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Alex Johnson"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F7F3EA] border border-[#DED6C8] text-[#1C1B18] placeholder:text-[#6F6A60]/60 focus:outline-none focus:border-[#B08D3C]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-[#6F6A60] font-medium">
                        Your Email <span className="text-[#9C3826]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F7F3EA] border border-[#DED6C8] text-[#1C1B18] placeholder:text-[#6F6A60]/60 focus:outline-none focus:border-[#B08D3C]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-[#6F6A60] font-medium">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Opportunity / Collaboration / Project Discussion"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F3EA] border border-[#DED6C8] text-[#1C1B18] placeholder:text-[#6F6A60]/60 focus:outline-none focus:border-[#B08D3C]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-[#6F6A60] font-medium">
                      Message <span className="text-[#9C3826]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Surbhi, I came across your portfolio and wanted to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F3EA] border border-[#DED6C8] text-[#1C1B18] placeholder:text-[#6F6A60]/60 focus:outline-none focus:border-[#B08D3C] resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-3.5 rounded-xl bg-[#B08D3C] hover:bg-[#99782F] text-[#FFFCF5] font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#FFFCF5]" />
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
