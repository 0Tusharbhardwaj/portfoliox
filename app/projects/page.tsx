"use client";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    name: "AKTU Nexus (Noteboat)",
    description:
      "High-performance academic portal engineered for engineering students across 50+ AKTU-affiliated colleges. Supporting 2,000+ concurrent live visitors, the platform solves file sharing bottlenecks and delivers real-time notifications.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    live: "https://noteboat.store",
  },
  {
    name: "AI Network Intelligence & Telemetry Platform",
    description:
      "Enterprise platform architected during Airtel internship for automated network discovery, telemetry collection, and AI-assisted infrastructure troubleshooting.",
    tech: ["Python", "FastAPI", "Prometheus", "Grafana"],
    github: "https://github.com/0Tusharbhardwaj",
  },
  {
    name: "UPTAC Counselling Predictor (v2.0)",
    description:
      "Full-stack SaaS platform deployed to assist engineering aspirants with state-level admission predictions. Processed 16,000+ server requests and reached 30,000+ unique visitors within 30 days of launch.",
    tech: ["Next.js", "Node.js"],
    live: "https://uptac-pro.vercel.app",
  },
  {
    name: "SafeSpace AI",
    description:
      "Mental wellness platform with AI-powered chat, journaling, mood tracking, analytics dashboard, and Supabase auth.",
    tech: ["React", "TypeScript"],
    github: "https://github.com/0Tusharbhardwaj",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#f3f4f6]">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-6 py-12" id="projects">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[#FFD700] font-mono text-sm mb-2">./deployment_history</p>
              <h1 className="text-3xl font-bold text-white">Projects</h1>
            </div>
            <a
              href="https://github.com/0Tusharbhardwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9ca3af] hover:text-white font-mono text-sm flex items-center gap-2 transition-colors hidden sm:flex"
            >
              View All Repositories
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] border border-[#333333] p-8 rounded-sm hover:border-[#FFD700] transition-colors group flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors">
                    {proj.name}
                  </h3>
                  <a
                    href={proj.live || proj.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-white transition-colors"
                    aria-label="Project Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-[#9ca3af] text-sm leading-relaxed mb-6 flex-grow">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {proj.tech.map((t) => (
                    <span key={t} className="bg-[#0a0a0a] border border-[#333333] px-2 py-1 rounded text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
