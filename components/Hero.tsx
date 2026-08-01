"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const metrics = [
  { number: "30,000+", label: "Unique visitors on UPTAC Predictor in 30 days" },
  { number: "12,000+", label: "Active students on Noteboat" },
  { number: "1,200+", label: "GitHub contributions" },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center"
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      {/* Subtle radial gradient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
          style={{
            background: "rgba(16, 185, 129, 0.08)",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            borderRadius: "9999px",
            padding: "6px 14px",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse-dot"
            style={{ background: "#10B981" }}
          />
          <span
            className="text-xs font-medium"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: "#10B981",
            }}
          >
            Open to Opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(40px, 6vw, 68px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            maxWidth: "820px",
            color: "#FAFAFA",
            marginBottom: "24px",
          }}
        >
          Building{" "}
          <span className="gradient-text">AI-Powered</span>
          <br />
          Software & Infrastructure.
        </motion.h1>

        {/* Location + role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-2 mb-6"
          style={{ color: "#52525B", fontSize: "13px" }}
        >
          <MapPin size={13} />
          <span style={{ fontFamily: "JetBrains Mono, monospace" }}>
            Ghaziabad, India · CS (AI) @ KIET · Founder @ Noteboat
          </span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            fontSize: "17px",
            color: "#71717A",
            maxWidth: "560px",
            lineHeight: 1.75,
            marginBottom: "40px",
          }}
        >
          Computer Science (AI) student at KIET. Founded{" "}
          <a
            href="https://noteboat.store"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#A1A1AA", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            Noteboat
          </a>{" "}
          — an academic platform serving 12,000+ students. Former software
          engineering intern at Nxtra by Airtel. Building at the intersection of
          AI, full-stack engineering, and enterprise infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap gap-3 mb-20"
        >
          <button onClick={scrollToProjects} className="btn-primary">
            View My Work
            <ArrowRight size={16} />
          </button>
          <a
            href="https://github.com/0Tusharbhardwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub
          </a>
          <a
            href="/resume.pdf"
            download
            className="btn-ghost"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8"
          style={{ borderTop: "1px solid #1C1C1F" }}
        >
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col">
              <span className="metric-number">{m.number}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
