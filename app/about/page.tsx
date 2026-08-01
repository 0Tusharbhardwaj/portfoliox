"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Cpu, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const focusChips = [
  "Full-Stack Software",
  "AI Applications",
  "Network Automation",
  "Backend Development",
  "Knowledge Graphs",
  "Cloud Systems",
];

const skillCategories = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "C", "Java", "SQL"],
  },
  {
    label: "Frontend Stack",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Radix UI"],
  },
  {
    label: "Backend Stack",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "Socket.IO"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL", "SQLite", "Neo4j", "Supabase", "Redis"],
  },
  {
    label: "Networking & Telemetry",
    skills: ["SNMPv3", "gNMI", "BMP", "BGP", "OSPF", "Prometheus", "Grafana", "Telegraf"],
    highlight: true,
  },
  {
    label: "Tools & DevOps",
    skills: ["AWS", "Vercel", "Docker", "GitHub Actions", "Postman", "Figma", "Linux"],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c0e] text-[#f8fafc] bg-grid-pattern">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 sm:mb-12"
        >
          <span className="category-tag">About Me</span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-1 mb-3">
            Computer Science & AI Student.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Building software applications, network telemetry tools, and cloud infrastructure.
          </p>
        </motion.div>

        {/* 2-Column Full Widescreen Grid: Bio & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start mb-16">
          {/* Bio Column (7 cols) */}
          <motion.div
            className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p>
              I&apos;m currently pursuing my B.Tech in Computer Science and Engineering (Artificial Intelligence) at KIET Group of Institutions (2024–2028).
            </p>
            <p>
              I co-founded{" "}
              <a
                href="https://noteboat.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold underline underline-offset-4 hover:text-slate-300"
              >
                Noteboat
              </a>
              , an academic platform serving over <strong className="text-white font-semibold">12,000 active students</strong> across 50+ AKTU colleges with over 2,000 concurrent live visitors.
            </p>
            <p>
              During my project internship at <strong className="text-white font-semibold">Airtel Center (Xtelify Ltd.)</strong>, I built an enterprise AI network telemetry collector using FastAPI, Prometheus, Grafana, and gNMI streaming engines for multi-VRF BGP routing data.
            </p>
            <p>
              I focus on writing clean, maintainable code, optimizing database performance, and building software that solves genuine user problems.
            </p>

            {/* Education Box */}
            <div className="glass-card p-6 mt-8">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                <BookOpen size={16} /> Education Background
              </div>
              <div className="flex justify-between items-start flex-wrap gap-3">
                <div>
                  <h3 className="text-white font-bold text-base sm:text-xl">KIET Group of Institutions</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">B.Tech in CS & Engineering (Artificial Intelligence)</p>
                </div>
                <span className="text-xs font-mono text-slate-300 bg-[#1f2228] px-3 py-1 rounded-full border border-[#2c3038]">
                  2024 – 2028
                </span>
              </div>
            </div>
          </motion.div>

          {/* Sidebar: Photo Card & Focus Tags (5 cols) */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {/* Photo Card */}
            <div className="glass-card p-4">
              <div className="relative w-full aspect-[4/5] max-h-[500px] rounded-xl overflow-hidden border border-[#22252a] bg-[#0b0c0e]">
                <Image
                  src="/profile.jpg"
                  alt="Tushar Bhardwaj at Nxtra by Airtel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="pt-3 pb-1 text-center">
                <p className="text-xs font-mono text-slate-400">Project Intern @ Airtel Center (Gurugram)</p>
              </div>
            </div>

            {/* Core Focus Tags */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                <Cpu size={15} /> Core Technical Focus
              </div>
              <div className="flex flex-wrap gap-2">
                {focusChips.map((chip) => (
                  <span key={chip} className="tech-pill">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Stack */}
        <div className="pt-10 border-t border-[#22252a]">
          <div className="mb-8">
            <span className="category-tag">Technical Competencies</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Production Skills & Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.label}
                className="glass-card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-200">
                    {cat.label}
                  </h3>
                  {cat.highlight && (
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200 border border-white/10">
                      Telemetry
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tech-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* AWS Cert */}
          <div className="mt-8 glass-card p-6 border-[#22252a] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">AWS Certified Cloud Practitioner</h4>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">Amazon Web Services · Verified Credential</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
