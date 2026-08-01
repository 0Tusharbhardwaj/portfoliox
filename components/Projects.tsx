"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

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
}

const flagship: Project = {
  name: "AKTU Nexus (Noteboat)",
  description:
    "High-performance academic portal engineered for 12,000+ active students across 50+ AKTU-affiliated colleges. Handles 2,000+ concurrent live visitors with optimized MongoDB queries (5× speedup), real-time Socket.IO campus chat and announcements, automated CI/CD via GitHub Actions, and an admin dashboard with 50-item paginated batching that cut payload sizes by 80%. Deployed on Vercel with Gzip/Brotli compression and IP rate limiting.",
  tech: ["Next.js 16", "TypeScript", "Node.js", "Express", "MongoDB Atlas", "Socket.IO", "Tailwind CSS", "Vercel"],
  github: "https://github.com/0Tusharbhardwaj",
  live: "https://noteboat.store",
  metric: "12,000+ students · 2,000+ concurrent users",
  flagship: true,
  status: "Live & Active",
};

const projects: Project[] = [
  {
    name: "UPTAC Counselling Predictor v2.0",
    description:
      "Full-stack SaaS platform that processed 16,000+ server requests and reached 30,000+ unique visitors within 30 days of launch. Migrated data from static JSON to MongoDB, increasing search performance by 50%. Features analytics dashboards using Recharts and automated CSV data exports for data-driven admission decisions.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Recharts"],
    github: "https://github.com/0Tusharbhardwaj",
    live: "https://uptac-pro.vercel.app",
    metric: "30,000+ visitors in 30 days",
    tag: "SaaS",
  },
  {
    name: "AI Network Intelligence Platform",
    description:
      "Enterprise-scale platform for automated network discovery, telemetry collection, and AI-powered infrastructure assistance. Features knowledge graph generation via Neo4j, SNMP/gNMI/BMP data collection, and an AI assistant for infrastructure queries built on top of Groq API.",
    tech: ["Python", "FastAPI", "Neo4j", "SQLite", "SNMP", "gNMI", "React", "TypeScript", "Groq API"],
    github: "https://github.com/0Tusharbhardwaj",
    status: "In Development",
    tag: "Enterprise",
  },
  {
    name: "SafeSpace AI",
    description:
      "Mental wellness platform with AI-powered chat, journaling, mood tracking, analytics dashboard, and authentication. Built for students dealing with academic stress and mental health.",
    tech: ["React", "TypeScript", "Supabase", "OpenAI API"],
    github: "https://github.com/0Tusharbhardwaj",
  },
  {
    name: "QuoteSphere",
    description:
      "A Flutter mobile app that delivers curated, inspirational quotes with a clean UI. Built as a first mobile development project demonstrating Flutter proficiency and cross-platform app publishing. Showcases versatility beyond web stack.",
    tech: ["Flutter", "Dart", "Material Design"],
    github: "https://github.com/0Tusharbhardwaj/quotesphere",
    tag: "Mobile",
  },
  {
    name: "AWS Certified Cloud Practitioner Prep",
    description:
      "Comprehensive study notes and resources compiled while preparing for AWS CCP certification. Successfully obtained AWS Certified Cloud Practitioner certification. Resources shared publicly to help other developers.",
    tech: ["AWS EC2", "S3", "IAM", "VPC", "Cloud Concepts"],
    github: "https://github.com/0Tusharbhardwaj",
    tag: "Cloud",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "96px 0", borderTop: "1px solid #1C1C1F" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <p className="section-label">Selected Work</p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#FAFAFA",
              lineHeight: 1.2,
            }}
          >
            Things I&apos;ve built.
          </h2>
        </motion.div>

        {/* Flagship Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "32px" }}
        >
          <div
            className="card"
            style={{
              padding: "36px",
              borderColor: "rgba(59,130,246,0.25)",
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.04) 0%, rgba(16,185,129,0.02) 100%), #111113",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle grid overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                pointerEvents: "none",
              }}
            />

            <div className="relative">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Star size={18} style={{ color: "#EAB308", fill: "#EAB308" }} />
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#3B82F6",
                    }}
                  >
                    Flagship Project
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {flagship.status && (
                    <span
                      style={{
                        padding: "3px 10px",
                        background: "rgba(16, 185, 129, 0.1)",
                        border: "1px solid rgba(16, 185, 129, 0.25)",
                        borderRadius: "9999px",
                        fontSize: "11px",
                        fontFamily: "JetBrains Mono, monospace",
                        color: "#10B981",
                      }}
                    >
                      {flagship.status}
                    </span>
                  )}
                  {flagship.live && (
                    <a
                      href={flagship.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: "7px 14px", fontSize: "13px" }}
                    >
                      Live Site
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {flagship.github && (
                    <a
                      href={flagship.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ padding: "7px 14px", fontSize: "13px" }}
                    >
                      GitHub
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>

              <h3
                style={{
                  fontSize: "clamp(22px, 3vw, 28px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#FAFAFA",
                  marginBottom: "12px",
                }}
              >
                {flagship.name}
              </h3>

              {flagship.metric && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    background: "rgba(59, 130, 246, 0.1)",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    fontFamily: "JetBrains Mono, monospace",
                    color: "#60A5FA",
                    marginBottom: "16px",
                  }}
                >
                  {flagship.metric}
                </div>
              )}

              <p
                style={{
                  color: "#71717A",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  marginBottom: "24px",
                  maxWidth: "760px",
                }}
              >
                {flagship.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {flagship.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card flex flex-col"
              style={{ padding: "24px" }}
            >
              {/* Top: name + links */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    {p.tag && (
                      <span
                        style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "10px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#52525B",
                          padding: "2px 7px",
                          background: "#1C1C1F",
                          borderRadius: "4px",
                        }}
                      >
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#FAFAFA", lineHeight: 1.3 }}>
                    {p.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 ml-2 shrink-0">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#52525B", transition: "color 0.2s" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#3B82F6")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#52525B")
                      }
                      title="Live site"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#52525B", transition: "color 0.2s" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#A1A1AA")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#52525B")
                      }
                      title="GitHub"
                    >
                      <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Metric badge */}
              {p.metric && (
                <div
                  style={{
                    display: "inline-flex",
                    padding: "2px 10px",
                    background: "rgba(59, 130, 246, 0.08)",
                    border: "1px solid rgba(59, 130, 246, 0.15)",
                    borderRadius: "9999px",
                    fontSize: "11px",
                    fontFamily: "JetBrains Mono, monospace",
                    color: "#60A5FA",
                    marginBottom: "10px",
                    width: "fit-content",
                  }}
                >
                  {p.metric}
                </div>
              )}

              {/* Status badge */}
              {p.status && (
                <div
                  style={{
                    display: "inline-flex",
                    padding: "2px 10px",
                    background: "rgba(16, 185, 129, 0.06)",
                    border: "1px solid rgba(16, 185, 129, 0.15)",
                    borderRadius: "9999px",
                    fontSize: "11px",
                    fontFamily: "JetBrains Mono, monospace",
                    color: "#10B981",
                    marginBottom: "10px",
                    width: "fit-content",
                  }}
                >
                  {p.status}
                </div>
              )}

              {/* Description */}
              <p
                style={{
                  color: "#71717A",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                  flexGrow: 1,
                }}
              >
                {p.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="badge" style={{ fontSize: "11px", padding: "2px 8px" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
