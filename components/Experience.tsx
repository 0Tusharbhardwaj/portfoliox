"use client";
import { motion } from "framer-motion";

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
      "Founded and scaled an academic platform now serving 12,000+ active students across 50+ AKTU-affiliated colleges, supporting 2,000+ concurrent live visitors.",
      "Architected a high-performance backend with Next.js 16, TypeScript, MongoDB Atlas, and Socket.IO — boosting query performance 5× with Mongoose .lean() and compound indexing.",
      "Spearheaded product roadmap, team management, and code reviews while managing cloud infrastructure on Vercel with automated GitHub Actions CI/CD.",
      "Built real-time campus chat, announcement systems, and a paginated admin dashboard reducing payload sizes and render times by 80%.",
      "Grew the platform organically through word-of-mouth; currently expanding features and college coverage.",
    ],
    tech: ["Next.js 16", "TypeScript", "Node.js", "MongoDB", "Socket.IO", "Vercel", "GitHub Actions"],
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
      "Researched graph databases (Neo4j) for network topology modeling and AI-assisted infrastructure intelligence.",
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

export default function Experience() {
  return (
    <section
      id="experience"
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
          <p className="section-label">Experience</p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#FAFAFA",
              lineHeight: 1.2,
            }}
          >
            Where I&apos;ve worked.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative" style={{ paddingLeft: "32px" }}>
          {/* Timeline vertical line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, #3B82F6, rgba(59,130,246,0.1))",
            }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-36px",
                    top: "24px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: exp.current ? "#10B981" : "#3B82F6",
                    border: "2px solid #09090B",
                    boxShadow: exp.current
                      ? "0 0 10px rgba(16,185,129,0.5)"
                      : "0 0 8px rgba(59,130,246,0.4)",
                  }}
                />

                {/* Card */}
                <div
                  className="card"
                  style={{
                    padding: "28px",
                    borderColor: exp.current ? "rgba(16, 185, 129, 0.2)" : "#1C1C1F",
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            color: "#FAFAFA",
                          }}
                        >
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                              padding: "2px 10px",
                              background: "rgba(16, 185, 129, 0.1)",
                              border: "1px solid rgba(16, 185, 129, 0.25)",
                              borderRadius: "9999px",
                              fontSize: "11px",
                              fontFamily: "JetBrains Mono, monospace",
                              color: "#10B981",
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
                              style={{ background: "#10B981" }}
                            />
                            Current
                          </span>
                        )}
                      </div>
                      <p style={{ color: "#A1A1AA", fontSize: "14px" }}>
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "12px",
                          color: "#52525B",
                        }}
                      >
                        {exp.period}
                      </p>
                      <p style={{ fontSize: "12px", color: "#52525B", marginTop: "2px" }}>
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2.5 mb-6" style={{ paddingLeft: "0" }}>
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-3"
                        style={{ color: "#71717A", fontSize: "14px", lineHeight: 1.7 }}
                      >
                        <span
                          style={{
                            marginTop: "8px",
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: "#3B82F6",
                            flexShrink: 0,
                          }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
