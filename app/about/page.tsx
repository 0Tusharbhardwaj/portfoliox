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
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Radix UI"],
  },
  {
    label: "Backend",
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

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 sm:mb-10"
        >
          <span className="category-tag">About Me</span>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1 mb-2">
            Computer Science & AI Student.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Building software applications, telemetry tools, and infrastructure.
          </p>
        </motion.div>

        {/* 2-Column Grid: Bio & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Bio Column */}
          <motion.div
            className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed"
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
                className="text-white font-medium underline underline-offset-4 hover:text-slate-300"
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
            <div className="glass-card p-5 mt-6">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                <BookOpen size={15} /> Education
              </div>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">KIET Group of Institutions</h3>
                  <p className="text-xs text-slate-300 mt-0.5">B.Tech in CS & Engineering (Artificial Intelligence)</p>
                </div>
                <span className="text-xs font-mono text-slate-300 bg-[#1f2228] px-2.5 py-0.5 rounded-full border border-[#2c3038]">
                  2024 – 2028
                </span>
              </div>
            </div>
          </motion.div>

          {/* Sidebar: Photo Card & Focus Tags */}
          <motion.div
            className="lg:col-span-5 space-y-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {/* Photo Card */}
            <div className="glass-card p-3 max-w-sm mx-auto lg:max-w-none">
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-[#22252a] bg-[#0b0c0e]">
                <Image
                  src="/profile.jpg"
                  alt="Tushar Bhardwaj at Nxtra by Airtel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="pt-2.5 pb-1 text-center">
                <p className="text-xs font-mono text-slate-400">Project Intern @ Airtel Center (Gurugram)</p>
              </div>
            </div>

            {/* Core Focus Tags */}
            <div className="glass-card p-4">
              <div className="flex items-center gap-2 mb-2.5 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                <Cpu size={14} /> Core Areas
              </div>
              <div className="flex flex-wrap gap-1.5">
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
        <div className="pt-8 border-t border-[#22252a]">
          <div className="mb-6">
            <span className="category-tag">Technical Skills</span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
              Tools & Languages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {skillCategories.map((cat) => (
              <div
                key={cat.label}
                className="glass-card p-4 sm:p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-200">
                    {cat.label}
                  </h3>
                  {cat.highlight && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/10 text-slate-200 border border-white/10">
                      Telemetry
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
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
          <div className="mt-6 glass-card p-4 sm:p-5 border-[#22252a] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base">AWS Certified Cloud Practitioner</h4>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Amazon Web Services · Verified Credential</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
