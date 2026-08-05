"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Users,
  Activity,
  ExternalLink,
  Lock,
  Send,
  Code2,
  Briefcase,
  Terminal as TerminalIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#f3f4f6]">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24" id="hero">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Availability Badge */}
              <div className="flex items-center gap-2 text-[#FFD700] font-mono text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                AVAILABLE FOR HIRE
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                Hi! I&apos;m Tushar <br />
                <span className="text-[#FFD700]">Bhardwaj</span>
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed mb-8 max-w-xl">
                Software &amp; Systems Engineer. Building scalable platforms and network intelligence. I&apos;m a Computer Science student building scalable enterprise software and web platforms. I founded Noteboat (1,000+ registered users), interned at Airtel Center building telemetry collectors, and write production code in TypeScript, Python, and Next.js.
              </p>

              {/* Hero Action Links */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="#projects"
                  className="bg-[#FFD700] text-[#0a0a0a] hover:bg-yellow-400 px-6 py-3 font-semibold flex items-center gap-2 transition-all rounded-sm font-mono shadow-sm"
                >
                  View Projects
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="#contact"
                  className="border border-[#333333] hover:border-[#FFD700] text-white px-6 py-3 font-semibold flex items-center gap-2 transition-all rounded-sm font-mono"
                >
                  Contact Me!
                  <Lock size={18} />
                </Link>
              </div>

              {/* Key Skills Quick List */}
              <div>
                <p className="text-[#9ca3af] font-mono text-sm mb-3">Skills :</p>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["TypeScript", "Python", "Next.js", "FastAPI", "Prometheus", "Grafana", "MongoDB"].map((skill) => (
                    <span key={skill} className="bg-[#1a1a1a] border border-[#333333] px-3 py-1.5 rounded text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Profile Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-[#FFD700] transform translate-x-4 translate-y-4 rounded-sm"></div>
              <img
                alt="Tushar Bhardwaj Portrait"
                loading="eager"
                width={400}
                height={400}
                className="relative z-10 w-full max-w-md mx-auto object-cover rounded-sm border border-[#333333] transition-all duration-500"
                src="https://imgh.in/host/a3anmp"
              />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="border-t border-[#333333] bg-[#0a0a0a] py-24" id="about">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="border-l-4 border-[#FFD700] pl-6">
                  <h2 className="text-3xl font-bold mb-2 text-white">About Me</h2>
                  <p className="text-[#FFD700] font-mono text-sm">./about_me.sh</p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-[#9ca3af] text-lg leading-relaxed mb-10">
                  I&apos;m currently pursuing my B.Tech in Computer Science and Engineering (Artificial Intelligence) at KIET Group of Institutions (2024–2028). I founded Noteboat, an academic platform serving over 1,000+ registered users and 30,000+ total visitors across 50+ AKTU colleges. During my project internship at Airtel Center (Xtelify Ltd.), I architected an enterprise AI network telemetry collector using FastAPI, Prometheus, Grafana, and gNMI streaming engines for multi-VRF BGP routing data. I focus on writing clean, maintainable code, optimizing database performance, and building software that solves genuine user problems.
                </p>

                {/* Metrics / Highlights Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#1a1a1a] border border-[#333333] p-6 rounded-sm">
                    <div className="flex justify-between items-start mb-4">
                      <Users className="text-[#FFD700] w-6 h-6" />
                      <span className="text-xs font-mono text-[#9ca3af] uppercase">Users_Served</span>
                    </div>
                    <div className="text-4xl font-bold mb-1 text-white">30k+</div>
                    <div className="text-[#9ca3af] text-sm">Total Platform Visitors</div>
                  </div>

                  <div className="bg-[#1a1a1a] border border-[#333333] p-6 rounded-sm">
                    <div className="flex justify-between items-start mb-4">
                      <Activity className="text-[#FFD700] w-6 h-6" />
                      <span className="text-xs font-mono text-[#9ca3af] uppercase">Network_Nodes</span>
                    </div>
                    <div className="text-4xl font-bold mb-1 text-white">Enterprise</div>
                    <div className="text-[#9ca3af] text-sm">Telemetry Scale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="border-t border-[#333333] py-24" id="projects">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="text-[#FFD700] font-mono text-sm mb-2">./deployment_history</p>
                <h2 className="text-3xl font-bold text-white">Projects</h2>
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
              {/* Card: AKTU Nexus */}
              <div className="bg-[#1a1a1a] border border-[#333333] p-8 rounded-sm hover:border-[#FFD700] transition-colors group flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors">
                    AKTU Nexus (Noteboat)
                  </h3>
                  <a
                    href="https://noteboat.store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-white transition-colors"
                    aria-label="Project Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-[#9ca3af] text-sm leading-relaxed mb-6 flex-grow">
                  High-performance academic portal engineered for engineering students across 50+ AKTU-affiliated colleges. Supporting 2,000+ concurrent live visitors, the platform solves file sharing bottlenecks and delivers real-time notifications.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["Next.js", "TypeScript", "Node.js", "MongoDB"].map((t) => (
                    <span key={t} className="bg-[#0a0a0a] border border-[#333333] px-2 py-1 rounded text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card: AI Network Intelligence */}
              <div className="bg-[#1a1a1a] border border-[#333333] p-8 rounded-sm hover:border-[#FFD700] transition-colors group flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors">
                    AI Network Intelligence &amp; Telemetry Platform
                  </h3>
                  <a
                    href="https://github.com/0Tusharbhardwaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-white transition-colors"
                    aria-label="Project Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-[#9ca3af] text-sm leading-relaxed mb-6 flex-grow">
                  Enterprise platform architected during Airtel internship for automated network discovery, telemetry collection, and AI-assisted infrastructure troubleshooting.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["Python", "FastAPI", "Prometheus", "Grafana"].map((t) => (
                    <span key={t} className="bg-[#0a0a0a] border border-[#333333] px-2 py-1 rounded text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card: UPTAC Counselling Predictor */}
              <div className="bg-[#1a1a1a] border border-[#333333] p-8 rounded-sm hover:border-[#FFD700] transition-colors group flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors">
                    UPTAC Counselling Predictor (v2.0)
                  </h3>
                  <a
                    href="https://uptac-pro.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-white transition-colors"
                    aria-label="Project Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-[#9ca3af] text-sm leading-relaxed mb-6 flex-grow">
                  Full-stack SaaS platform deployed to assist engineering aspirants with state-level admission predictions. Processed 16,000+ server requests and reached 30,000+ unique visitors within 30 days of launch.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["Next.js", "Node.js"].map((t) => (
                    <span key={t} className="bg-[#0a0a0a] border border-[#333333] px-2 py-1 rounded text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card: SafeSpace AI */}
              <div className="bg-[#1a1a1a] border border-[#333333] p-8 rounded-sm hover:border-[#FFD700] transition-colors group flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors">
                    SafeSpace AI
                  </h3>
                  <a
                    href="https://github.com/0Tusharbhardwaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-white transition-colors"
                    aria-label="Project Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-[#9ca3af] text-sm leading-relaxed mb-6 flex-grow">
                  Mental wellness platform with AI-powered chat, journaling, mood tracking, analytics dashboard, and Supabase auth.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["React", "TypeScript"].map((t) => (
                    <span key={t} className="bg-[#0a0a0a] border border-[#333333] px-2 py-1 rounded text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section className="border-t border-[#333333] bg-[#0a0a0a] py-24" id="experience">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-3">
                <div className="sticky top-24">
                  <p className="text-[#9ca3af] font-mono text-sm mb-2">cat /var/log/career.log</p>
                  <h2 className="text-3xl font-bold text-white">My History</h2>
                </div>
              </div>

              <div className="lg:col-span-9 relative pl-6">
                <div className="timeline-line"></div>
                <div className="space-y-16">
                  {/* Timeline Item 1 */}
                  <div className="relative">
                    <div className="timeline-dot"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h3 className="text-xl font-bold text-white">Founder &amp; Lead Engineer</h3>
                      <span className="text-[#FFD700] font-mono text-sm mt-1 sm:mt-0">Aug 2023 — PRESENT</span>
                    </div>
                    <div className="text-[#9ca3af] font-mono text-xs mb-4 uppercase tracking-wider">Noteboat</div>
                    <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                      Founded and scaled an academic document exchange platform reaching 1,000+ registered users and 30,000+ total visitors across 50+ AKTU-affiliated colleges. Engineered database optimizations boosting query performance 5x and re-architected user management cutting initial JSON payload sizes by 80%.
                    </p>
                    <div className="flex flex-wrap gap-2 font-mono text-xs">
                      {["Next.js", "Node.js", "MongoDB"].map((t) => (
                        <span key={t} className="bg-[#1a1a1a] border border-[#333333] px-2 py-1 rounded text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative">
                    <div className="timeline-dot"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h3 className="text-xl font-bold text-white">Software Engineering Intern</h3>
                      <span className="text-[#9ca3af] font-mono text-sm mt-1 sm:mt-0">Jun 2024 — Jul 2024</span>
                    </div>
                    <div className="text-[#9ca3af] font-mono text-xs mb-4 uppercase tracking-wider">
                      Airtel Center (Xtelify Ltd.)
                    </div>
                    <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                      Architected an enterprise AI network telemetry collector using FastAPI, React.js, Telegraf, Prometheus, and Grafana. Architected multi-VRF BGP collector service and gNMI streaming telemetry engine, streamlining device onboarding via CSV ingestion pipelines.
                    </p>
                    <div className="flex flex-wrap gap-2 font-mono text-xs">
                      {["FastAPI", "Prometheus", "gNMI"].map((t) => (
                        <span key={t} className="bg-[#1a1a1a] border border-[#333333] px-2 py-1 rounded text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative">
                    <div className="timeline-dot"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h3 className="text-xl font-bold text-white">Web Development Intern</h3>
                      <span className="text-[#9ca3af] font-mono text-sm mt-1 sm:mt-0">Nov 2023 — Mar 2024</span>
                    </div>
                    <div className="text-[#9ca3af] font-mono text-xs mb-4 uppercase tracking-wider">SuperManager AGI</div>
                    <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                      Developed 10+ responsive frontend modules using React and Tailwind CSS, improving mobile responsiveness scores by 25% based on Lighthouse audits. Programmed content synchronization by integrating real-time API feeds.
                    </p>
                    <div className="flex flex-wrap gap-2 font-mono text-xs">
                      {["React", "Tailwind CSS", "REST APIs"].map((t) => (
                        <span key={t} className="bg-[#1a1a1a] border border-[#333333] px-2 py-1 rounded text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Breakdown Section */}
        <section className="border-t border-[#333333] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[#FFD700] font-mono text-sm mb-2 uppercase">TECHNICAL_COMPETENCIES</p>
            <h2 className="text-3xl font-bold text-white mb-12">Production Skills &amp; Stack</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Languages */}
              <div className="bg-[#1a1a1a] border border-[#333333] p-6 rounded-sm">
                <h3 className="font-mono text-xs text-[#9ca3af] uppercase mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["JavaScript", "TypeScript", "Python", "C++", "SQL"].map((s) => (
                    <span key={s} className="bg-[#0a0a0a] border border-[#333333] px-3 py-1.5 rounded text-gray-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend Stack */}
              <div className="bg-[#1a1a1a] border border-[#333333] p-6 rounded-sm">
                <h3 className="font-mono text-xs text-[#9ca3af] uppercase mb-4">Frontend Stack</h3>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["React", "Next.js", "Tailwind CSS"].map((s) => (
                    <span key={s} className="bg-[#0a0a0a] border border-[#333333] px-3 py-1.5 rounded text-gray-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Stack */}
              <div className="bg-[#1a1a1a] border border-[#333333] p-6 rounded-sm">
                <h3 className="font-mono text-xs text-[#9ca3af] uppercase mb-4">Backend Stack</h3>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["Node.js", "Express.js", "FastAPI"].map((s) => (
                    <span key={s} className="bg-[#0a0a0a] border border-[#333333] px-3 py-1.5 rounded text-gray-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="bg-[#1a1a1a] border border-[#333333] p-6 rounded-sm">
                <h3 className="font-mono text-xs text-[#9ca3af] uppercase mb-4">Databases</h3>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["MongoDB", "PostgreSQL", "Redis", "Supabase"].map((s) => (
                    <span key={s} className="bg-[#0a0a0a] border border-[#333333] px-3 py-1.5 rounded text-gray-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Networking & Telemetry */}
              <div className="bg-[#1a1a1a] border border-[#333333] p-6 rounded-sm">
                <h3 className="font-mono text-xs text-[#9ca3af] uppercase mb-4">Networking &amp; Telemetry</h3>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["SNMPv3", "gNMI", "Prometheus", "Grafana"].map((s) => (
                    <span key={s} className="bg-[#0a0a0a] border border-[#333333] px-3 py-1.5 rounded text-gray-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps & Tools */}
              <div className="bg-[#1a1a1a] border border-[#333333] p-6 rounded-sm">
                <h3 className="font-mono text-xs text-[#9ca3af] uppercase mb-4">Tools &amp; DevOps</h3>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["AWS", "Vercel", "Docker", "GitHub Actions"].map((s) => (
                    <span key={s} className="bg-[#0a0a0a] border border-[#333333] px-3 py-1.5 rounded text-gray-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal/Contact Section */}
        <section className="border-t border-[#333333] bg-[#0a0a0a] py-24" id="contact">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[#111111] border border-[#333333] rounded-md overflow-hidden shadow-2xl">
              {/* Terminal Header Bar */}
              <div className="bg-[#1a1a1a] border-b border-[#333333] px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFD700]"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-xs font-mono text-[#9ca3af]">terminal - bash</div>
              </div>

              {/* Terminal Content */}
              <div className="p-10 text-center flex flex-col items-center">
                <Lock className="text-[#FFD700] mb-6 w-12 h-12" />

                <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">ESTABLISH CONNECTION</h2>
                <p className="text-[#9ca3af] mb-8 max-w-md mx-auto">
                  Currently open for new engineering challenges. Whether you have a question or just want to say hi, my inbox is open.
                </p>

                <a
                  href="mailto:contact@tusharbhardwaj.com"
                  className="bg-[#FFD700] text-[#0a0a0a] hover:bg-yellow-400 px-8 py-3 font-semibold flex items-center justify-center gap-2 transition-all rounded-sm font-mono inline-flex shadow-sm"
                >
                  Transmit Message
                  <Send size={18} />
                </a>

                <div className="mt-12 flex items-center justify-center gap-6 text-[#9ca3af] font-mono text-sm w-full">
                  <div className="flex items-center gap-4 w-full max-w-xs">
                    <div className="h-px bg-[#333333] flex-1"></div>
                    <span className="text-xs">OR PING ME VIA</span>
                    <div className="h-px bg-[#333333] flex-1"></div>
                  </div>
                </div>

                <div className="mt-6 flex gap-6">
                  <a
                    href="https://github.com/0Tusharbhardwaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-white transition-colors flex items-center gap-2 font-mono text-sm"
                  >
                    <svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tushar0bhrardwaj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-white transition-colors flex items-center gap-2 font-mono text-sm"
                  >
                    <svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

