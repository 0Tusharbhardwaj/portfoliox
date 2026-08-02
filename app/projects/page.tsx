"use client";
import { motion } from "framer-motion";
import { ExternalLink, Star, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  metric?: string;
  flagship?: boolean;
  status?: string;
  tag?: string;
  bullets?: string[];
}

const flagshipProject: Project = {
  name: "AKTU Nexus (Noteboat)",
  description:
    "High-performance academic portal engineered for engineering students across 50+ AKTU-affiliated colleges. Supporting 2,000+ concurrent live visitors, the platform solves file sharing bottlenecks and delivers real-time notifications.",
  tech: ["Next.js 16", "TypeScript", "Node.js", "Express", "MongoDB Atlas", "Socket.IO", "Tailwind CSS", "Vercel"],
  github: "https://github.com/0Tusharbhardwaj",
  live: "https://noteboat.store",
  metric: "1,000+ Registered Users · 30,000+ Total Visitors · Growing Daily",
  flagship: true,
  status: "Production Live",
  bullets: [
    "Engineered database optimizations boosting query performance 5x using Mongoose .lean() execution, compound indexing, and Gzip compression.",
    "Re-architected user management with a paginated 50-item batching pipeline, cutting initial JSON payload sizes and UI render times by 80%.",
    "Implemented real-time notification engine via WebSockets, achieving sub-200ms message delivery for academic alerts.",
    "Automated deployment workflows using GitHub Actions CI/CD and Vercel edge infrastructure.",
  ],
};

const otherProjects: Project[] = [
  {
    name: "UPTAC Counselling Predictor (v2.0)",
    description:
      "Full-stack SaaS platform deployed to assist engineering aspirants with state-level admission predictions. Processed 16,000+ server requests and reached 30,000+ unique visitors within 30 days of launch.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Recharts"],
    github: "https://github.com/0Tusharbhardwaj",
    live: "https://uptac-pro.vercel.app",
    metric: "30,000+ Total Visitors in 30 Days",
    tag: "SaaS Platform",
    bullets: [
      "Migrated data from static JSON to MongoDB, increasing search and filtering performance for 2,000+ students by 50%.",
      "Integrated automated CSV data exports and analytics dashboards using Recharts for data-driven decisions.",
    ],
  },
  {
    name: "AI Network Intelligence & Telemetry Platform",
    description:
      "Enterprise platform architected during Airtel internship for automated network discovery, telemetry collection, and AI-assisted infrastructure troubleshooting.",
    tech: ["Python", "FastAPI", "Neo4j", "SQLite", "SNMP", "gNMI", "React", "TypeScript", "Groq API"],
    github: "https://github.com/0Tusharbhardwaj",
    tag: "Enterprise AI & Infra",
    bullets: [
      "Architected multi-VRF BGP collector service and gNMI streaming telemetry engine.",
      "Configured 15-second Prometheus alert rules and real-time Telegram incident alerting.",
      "Utilized Neo4j graph database for topological network mapping and LLM querying via Groq API.",
    ],
  },
  {
    name: "SafeSpace AI",
    description:
      "Mental wellness platform with AI-powered chat, journaling, mood tracking, analytics dashboard, and Supabase auth.",
    tech: ["React", "TypeScript", "Supabase", "OpenAI API"],
    github: "https://github.com/0Tusharbhardwaj",
    tag: "AI Healthcare",
  },
  {
    name: "QuoteSphere",
    description:
      "A clean, cross-platform Flutter mobile application delivering inspirational quote feeds with custom UI animations. Demonstrates mobile app architectural capabilities.",
    tech: ["Flutter", "Dart", "Material Design"],
    github: "https://github.com/0Tusharbhardwaj/quotesphere",
    tag: "Mobile App",
  },
  {
    name: "AWS Certified Cloud Practitioner Prep",
    description:
      "Public repository containing architectural diagrams, study notes, and hands-on laboratory exercises for AWS cloud services certification.",
    tech: ["AWS EC2", "S3", "IAM", "VPC", "Cloud Security"],
    github: "https://github.com/0Tusharbhardwaj",
    tag: "Cloud Architecture",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c0e] text-[#f8fafc] bg-grid-pattern">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <span className="category-tag">Selected Work</span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-1 mb-3">
            Featured Engineering Projects
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
            High-concurrency academic portals, SaaS applications, telemetry systems, and mobile applications.
          </p>
        </motion.div>

        {/* FLAGSHIP PROJECT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="glass-card p-8 sm:p-10 border-[#2c3038] relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Star size={20} className="text-amber-400 fill-amber-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                  Flagship Platform
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                  {flagshipProject.status}
                </span>
                {flagshipProject.live && (
                  <a
                    href={flagshipProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solid py-2 px-4 text-xs font-mono group/btn focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none"
                  >
                    Live Site <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              {flagshipProject.name}
            </h2>

            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs font-mono mb-6">
              {flagshipProject.metric}
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              {flagshipProject.description}
            </p>

            {flagshipProject.bullets && (
              <ul className="space-y-3 mb-8">
                {flagshipProject.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 size={16} className="text-slate-400 mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 pt-6 border-t border-[#22252a]">
              {flagshipProject.tech.map((t) => (
                <span key={t} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* OTHER PROJECTS GRID */}
        <div>
          <div className="mb-6">
            <span className="category-tag">Production Tools</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              More Software Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-6 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      {p.tag && (
                        <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#1f2228] border border-[#2c3038] text-slate-300 mb-2 inline-block">
                          {p.tag}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-white">{p.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none"
                          title="Live site"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {p.metric && (
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono mb-4">
                      {p.metric}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {p.description}
                  </p>

                  {p.bullets && (
                    <ul className="space-y-1.5 mb-6 text-xs text-slate-300">
                      {p.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#22252a]">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-pill text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <PreFooter />
      <Footer />
    </div>
  );
}
