"use client";
import { motion } from "framer-motion";

interface SkillCategory {
  label: string;
  skills: string[];
  highlight?: boolean;
}

const categories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "C", "Java", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap", "Radix UI"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "Socket.IO", "AsyncIO"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL", "SQLite", "Neo4j", "Supabase", "Redis"],
  },
  {
    label: "AI & ML",
    skills: [
      "LLM Integration",
      "OpenAI API",
      "Groq API",
      "Prompt Engineering",
      "Knowledge Graphs",
      "RAG",
      "scikit-learn",
    ],
  },
  {
    label: "Networking",
    skills: [
      "SNMPv3",
      "gNMI",
      "BMP",
      "BGP",
      "OSPF",
      "LLDP",
      "Network Discovery",
      "Network Automation",
      "Prometheus",
      "Grafana",
      "Telegraf",
      "EVE-NG",
    ],
    highlight: true,
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, IAM)",
      "Vercel",
      "Netlify",
      "Render",
      "Git & GitHub",
      "Docker",
      "PM2",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    label: "Tools",
    skills: ["Postman", "Figma", "VS Code", "VMware", "Cloudinary"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          <p className="section-label">Technical Skills</p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#FAFAFA",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            What I work with.
          </h2>
          <p style={{ color: "#52525B", fontSize: "14px", maxWidth: "480px" }}>
            No skill bars. No percentages. Just the tools and technologies I&apos;ve used in production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card"
              style={{
                padding: "20px",
                ...(cat.highlight
                  ? {
                      borderColor: "rgba(59, 130, 246, 0.3)",
                      boxShadow:
                        "0 0 24px rgba(59, 130, 246, 0.06), inset 0 0 24px rgba(59, 130, 246, 0.02)",
                    }
                  : {}),
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: cat.highlight ? "#60A5FA" : "#A1A1AA",
                    fontFamily: "JetBrains Mono, monospace",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.label}
                </h3>
                {cat.highlight && (
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#3B82F6",
                      padding: "1px 6px",
                      background: "rgba(59,130,246,0.1)",
                      borderRadius: "4px",
                    }}
                  >
                    Unique
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge"
                    style={{ fontSize: "11px", padding: "2px 8px" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginTop: "32px" }}
        >
          <div
            className="card"
            style={{
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "rgba(234,179,8,0.1)",
                border: "1px solid rgba(234,179,8,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 15l-8.5 3.5 3-8L12 3l5.5 7.5-8.5 3.5z" stroke="#EAB308" strokeWidth="1.5" strokeLinejoin="round"/>
                <circle cx="12" cy="15" r="3" stroke="#EAB308" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <p style={{ color: "#FAFAFA", fontWeight: 600, fontSize: "14px" }}>
                AWS Certified Cloud Practitioner
              </p>
              <p style={{ color: "#52525B", fontSize: "12px", fontFamily: "JetBrains Mono, monospace" }}>
                Amazon Web Services · Verified Certification
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
