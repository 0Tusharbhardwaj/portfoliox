"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const focusChips = [
  "Full-Stack Engineering",
  "AI Systems",
  "Network Automation",
  "Enterprise Backend",
  "Knowledge Graphs",
  "Cloud Infrastructure",
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "96px 0",
        borderTop: "1px solid #1C1C1F",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left — Text (3/5) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">About</p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "#FAFAFA",
                marginBottom: "32px",
                lineHeight: 1.2,
              }}
            >
              Not just building websites.
            </h2>

            <div className="flex flex-col gap-5" style={{ color: "#71717A", fontSize: "16px", lineHeight: 1.8 }}>
              <p>
                I&apos;m a Computer Science student specializing in Artificial Intelligence with a strong focus on
                software engineering, networking, distributed systems, and practical AI applications. I enjoy
                understanding how large systems work — from enterprise data centers to cloud-native applications.
              </p>
              <p>
                I founded{" "}
                <a
                  href="https://noteboat.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#A1A1AA", textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  Noteboat
                </a>
                , an academic platform that now serves{" "}
                <strong style={{ color: "#FAFAFA" }}>12,000+ active students</strong> across 50+ AKTU-affiliated
                colleges with 2,000+ concurrent live visitors, built on a high-performance Next.js + MongoDB
                architecture with real-time WebSockets.
              </p>
              <p>
                Previously, I completed a software engineering internship at{" "}
                <strong style={{ color: "#FAFAFA" }}>Nxtra by Airtel</strong>, where I architected an AI-driven
                network telemetry platform using FastAPI, Prometheus, Grafana, and gNMI streaming engines — working on
                problems that sit at the intersection of networking and AI.
              </p>
              <p>
                My goal is to become an engineer capable of designing intelligent, scalable systems that operate at
                cloud and enterprise scale — not just building features, but understanding the infrastructure they run
                on.
              </p>
            </div>
          </motion.div>

          {/* Right — Photo + chips (2/5) */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Profile Photo */}
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #1C1C1F",
                aspectRatio: "4/5",
                position: "relative",
                background: "#111113",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Tushar Bhardwaj at Nxtra by Airtel"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: "top center" }}
                priority
              />
            </div>

            {/* Focus areas */}
            <div>
              <p
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#52525B",
                  marginBottom: "12px",
                }}
              >
                Current Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {focusChips.map((chip) => (
                  <span key={chip} className="badge">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div
              style={{
                background: "#111113",
                border: "1px solid #1C1C1F",
                borderRadius: "10px",
                padding: "16px",
              }}
            >
              <p
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#52525B",
                  marginBottom: "10px",
                }}
              >
                Education
              </p>
              <p style={{ color: "#FAFAFA", fontWeight: 600, fontSize: "14px" }}>
                KIET Group of Institutions
              </p>
              <p style={{ color: "#71717A", fontSize: "13px", marginTop: "2px" }}>
                B.Tech CSE (Artificial Intelligence)
              </p>
              <p
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "12px",
                  color: "#52525B",
                  marginTop: "4px",
                }}
              >
                2024 – 2028
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
