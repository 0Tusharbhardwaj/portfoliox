"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Noteboat",
    role: "Founder & Lead Engineer",
    period: "Aug 2023 — PRESENT",
    link: "https://noteboat.store",
    bullets: [
      "Founded and scaled an academic document exchange platform reaching 1,000+ registered users and 30,000+ total visitors across 50+ AKTU-affiliated colleges.",
      "Engineered database optimizations boosting query performance 5x and re-architected user management cutting initial JSON payload sizes by 80%.",
      "Implemented a real-time notification engine via WebSockets, achieving sub-200ms message delivery for academic alerts.",
    ],
    tech: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    company: "Airtel Center (Xtelify Ltd.)",
    role: "Software Engineering Intern",
    period: "Jun 2024 — Jul 2024",
    link: "https://www.airtel.in",
    bullets: [
      "Architected an enterprise AI network telemetry collector using FastAPI, React.js, Telegraf, Prometheus, and Grafana.",
      "Architected multi-VRF BGP collector service and gNMI streaming telemetry engine, streamlining device onboarding via CSV ingestion pipelines.",
      "Configured 15-second Prometheus alert rules and real-time Telegram incident alerting for route withdrawals and session drops.",
    ],
    tech: ["FastAPI", "Prometheus", "gNMI"],
  },
  {
    company: "SuperManager AGI",
    role: "Web Development Intern",
    period: "Nov 2023 — Mar 2024",
    link: "https://www.supermanager.co/",
    bullets: [
      "Developed 10+ responsive frontend modules using React and Tailwind CSS, improving mobile responsiveness scores by 25% based on Lighthouse audits.",
      "Programmed content synchronization by integrating real-time API feeds.",
    ],
    tech: ["React", "Tailwind CSS", "REST APIs"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#f3f4f6]">
      <style jsx global>{`
        .timeline-line {
          position: absolute;
          left: 0;
          top: 8px;
          bottom: 0;
          width: 1px;
          background: #333;
        }
        .timeline-dot {
          position: absolute;
          left: -26px;
          top: 6px;
          width: 8px;
          height: 8px;
          background: #FFD700;
          border-radius: 50%;
        }
      `}</style>
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-6 py-12" id="experience">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <p className="text-[#9ca3af] font-mono text-sm mb-2">cat /var/log/career.log</p>
                <h1 className="text-3xl font-bold text-white">My History</h1>
              </div>
            </div>

            <div className="lg:col-span-9 relative pl-6">
              <div className="timeline-line"></div>
              <div className="space-y-16">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative group bg-[#1a1a1a]/40 border border-transparent hover:border-[#333333] p-6 rounded-sm transition-all duration-300">
                    <div className="timeline-dot group-hover:scale-125 transition-transform"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors">{exp.role}</h3>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/30 px-2 py-0.5 rounded hover:bg-[#FFD700] hover:text-[#0a0a0a] transition-all"
                          >
                            <span>Check it out</span>
                            <ExternalLink size={10} />
                          </a>
                        )}
                      </div>
                      <span className="text-[#FFD700] font-mono text-sm mt-1 sm:mt-0">{exp.period}</span>
                    </div>
                    <div className="text-[#9ca3af] font-mono text-xs mb-4 uppercase tracking-wider">
                      {exp.company}
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="text-[#9ca3af] text-sm leading-relaxed">
                          • {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 font-mono text-xs">
                      {exp.tech.map((t) => (
                        <span key={t} className="bg-[#1a1a1a] border border-[#333333] px-2 py-1 rounded text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
