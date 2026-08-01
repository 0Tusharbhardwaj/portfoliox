"use client";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, MapPin, Building2, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  url?: string;
  current?: boolean;
  bullets: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Noteboat",
    role: "Founder & Lead Engineer",
    period: "Aug 2025 – Present",
    location: "Remote / Academic Platform",
    url: "https://noteboat.store",
    current: true,
    bullets: [
      "Founded and scaled an academic document platform serving 12,000+ active students across 50+ AKTU-affiliated colleges with 2,000+ concurrent live visitors.",
      "Spearheaded product roadmap planning and system architecture, leading student development teams and code reviews.",
      "Engineered database optimizations boosting query performance 5x using Mongoose .lean() execution, compound indexing, and Gzip compression.",
      "Re-architected user management with a paginated 50-item batching pipeline, cutting initial JSON payload sizes and UI render times by 80%.",
      "Implemented a real-time notification engine via WebSockets, achieving sub-200ms message delivery for academic alerts.",
      "Configured automated deployment pipelines on Vercel with GitHub Actions CI/CD workflows.",
    ],
    tech: ["Next.js 16", "TypeScript", "Node.js", "Express", "MongoDB Atlas", "Socket.IO", "Tailwind CSS", "Vercel"],
  },
  {
    company: "Airtel Center (Xtelify Ltd.)",
    role: "Software Engineering Intern",
    period: "Jun 2026 – Jul 2026",
    location: "Gurugram, India",
    url: "https://xtelify.com",
    bullets: [
      "Architected an enterprise AI-driven network telemetry platform using FastAPI, React.js, Telegraf, Prometheus, and Grafana.",
      "Developed a multi-VRF BGP collector service and gNMI streaming engine, streamlining device onboarding via CSV ingestion pipelines.",
      "Configured 15-second Prometheus alert rules and real-time Telegram incident alerting for route withdrawals and session drops.",
      "Researched knowledge graph generation via Neo4j for network topology modeling and AI infrastructure assistance.",
    ],
    tech: ["FastAPI", "Python", "React", "Prometheus", "Grafana", "gNMI", "BGP", "Neo4j", "Telegraf"],
  },
  {
    company: "SuperManager AGI",
    role: "Web Development Intern",
    period: "Nov 2025 – Mar 2026",
    location: "Remote",
    url: "https://supermanager.co",
    bullets: [
      "Developed 10+ responsive frontend modules using React and Tailwind CSS, improving mobile responsiveness scores by 25% based on Lighthouse audits.",
      "Optimized website assets and implemented code-splitting, resulting in a 40% faster First Contentful Paint (FCP).",
      "Constructed modular, reusable UI components from Figma designs, ensuring 100% design fidelity across enterprise-facing pages.",
      "Programmed content synchronization by integrating real-time API feeds, reducing manual data management effort by 15 hours monthly.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Figma", "REST APIs"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5] bg-grid-pattern">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <span className="category-tag">Career Journey</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1 mb-3">
            Work Experience
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            Engineering roles, system architecture, performance optimization, and project leadership.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 space-y-12 border-l border-zinc-800">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-2 border-[#09090b] ${
                  exp.current
                    ? "bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.8)]"
                    : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                }`}
              />

              <div className="glass-card p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-5 border-b border-zinc-800">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                        <Building2 size={20} className="text-blue-400" />
                        {exp.company}
                      </h2>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Active Role
                        </span>
                      )}
                      {exp.url && (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-500 hover:text-blue-400 transition-colors"
                          title="Visit site"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="text-blue-400 font-semibold text-sm sm:text-base font-mono">{exp.role}</p>
                  </div>

                  <div className="text-right text-xs font-mono text-zinc-400 space-y-1">
                    <div className="flex items-center gap-1.5 justify-end">
                      <Calendar size={13} className="text-zinc-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <MapPin size={13} className="text-zinc-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
                      <CheckCircle2 size={16} className="text-blue-500 mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
