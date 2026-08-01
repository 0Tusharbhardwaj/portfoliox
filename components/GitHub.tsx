"use client";
import { motion } from "framer-motion";

export default function GitHub() {
  return (
    <section
      id="github"
      style={{ padding: "96px 0", borderTop: "1px solid #1C1C1F" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px" }}
        >
          <p className="section-label">GitHub Activity</p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#FAFAFA",
              lineHeight: 1.2,
            }}
          >
            1,200+ contributions
            <span
              className="gradient-text"
              style={{ display: "block", fontSize: "0.65em", fontWeight: 600 }}
            >
              and counting.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          {/* Streak Stats */}
          <div
            className="card"
            style={{ padding: "20px", overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#52525B",
                marginBottom: "16px",
              }}
            >
              Streak Stats
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=0Tusharbhardwaj&theme=tokyonight&cache_seconds=1800"
              alt="GitHub Streak Stats"
              className="github-widget w-full"
              style={{ borderRadius: "6px", maxHeight: "200px", objectFit: "contain" }}
              loading="lazy"
            />
          </div>

          {/* Activity Graph */}
          <div
            className="card"
            style={{ padding: "20px", overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#52525B",
                marginBottom: "16px",
              }}
            >
              Contribution Graph
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=0Tusharbhardwaj&theme=tokyo-night&area=true"
              alt="GitHub Activity Graph"
              className="github-widget w-full"
              style={{ borderRadius: "6px" }}
              loading="lazy"
            />
          </div>

          {/* GitHub profile link */}
          <div className="flex justify-center">
            <a
              href="https://github.com/0Tusharbhardwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ gap: "10px" }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
