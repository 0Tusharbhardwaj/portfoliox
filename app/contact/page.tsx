"use client";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, FileText, Code2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";

const contactLinks = [
  {
    icon: <Mail size={20} className="text-slate-300" />,
    label: "Email",
    value: "tbhardwaj.dev@gmail.com",
    href: "mailto:tbhardwaj.dev@gmail.com",
  },
  {
    icon: <Phone size={20} className="text-slate-300" />,
    label: "Phone",
    value: "+91-6395219997",
    href: "tel:+916395219997",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-slate-300">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    label: "GitHub Profile",
    value: "0Tusharbhardwaj (1,200+ Contribs)",
    href: "https://github.com/0Tusharbhardwaj",
    external: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-slate-300">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn Profile",
    value: "tushar0bhrardwaj",
    href: "https://www.linkedin.com/in/tushar0bhrardwaj/",
    external: true,
  },
];

const learningTopics = [
  "Kubernetes & Container Orchestration",
  "Advanced Docker & Linux Systems",
  "Graph Databases (Neo4j)",
  "LLMs & RAG Architectures",
  "MCP Protocol Development",
  "Distributed Systems Reliability",
];

export default function ContactPage() {
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
          <span className="category-tag">Get In Touch</span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-1 mb-3">
            Contact & Open Source
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
            Open for software engineering roles, technical project discussions, and full-stack opportunities.
          </p>
        </motion.div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-14">
          {contactLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6 flex items-center gap-4 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1f2228] border border-[#2c3038] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm sm:text-base font-semibold text-white truncate group-hover:text-slate-200 transition-colors">
                  {item.value}
                </p>
              </div>
              <ArrowUpRight size={18} className="text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </motion.a>
          ))}
        </div>

        {/* Resume Download CTA Banner */}
        <div className="glass-card p-8 flex flex-wrap items-center justify-between gap-6 mb-16 border-[#22252a]">
          <div>
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <FileText className="text-slate-300" /> Need my official resume?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Download official PDF with detailed engineering metrics on Noteboat, Airtel internship, and projects.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download="Tushar_Bhardwaj_Resume.pdf"
            className="btn-solid py-2.5 px-6 font-mono text-xs focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none"
          >
            Download Resume PDF
          </a>
        </div>

        {/* Live GitHub Widgets */}
        <div className="space-y-8 pt-8 border-t border-[#22252a]">
          <div>
            <span className="category-tag">GitHub Activity</span>
            <h2 className="text-2xl font-bold text-white mt-1 flex items-center gap-2">
              <Code2 className="text-slate-300" /> 1,200+ Contributions & Streak
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Streak Widget Card */}
            <div className="glass-card p-6 overflow-hidden">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                GitHub Streak Statistics
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-streak-stats.herokuapp.com?user=0Tusharbhardwaj&theme=tokyonight&cache_seconds=1800"
                alt="GitHub Streak Stats"
                className="w-full max-h-48 object-contain rounded-lg"
                loading="lazy"
              />
            </div>

            {/* Activity Graph Card */}
            <div className="glass-card p-6 overflow-hidden">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Contribution Activity Graph
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=0Tusharbhardwaj&theme=tokyo-night&area=true"
                alt="GitHub Activity Graph"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Currently Learning Banner */}
        <div className="mt-14 glass-card p-6 border-[#22252a]">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
            <Sparkles size={16} /> Currently Exploring & Learning
          </div>
          <div className="flex flex-wrap gap-2">
            {learningTopics.map((topic, idx) => (
              <span key={idx} className="tech-pill">
                • {topic}
              </span>
            ))}
          </div>
        </div>
      </main>

      <PreFooter />
      <Footer />
    </div>
  );
}
