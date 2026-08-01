"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building2, Code2, Cpu, FileText, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metrics = [
  { number: "30,000+", label: "Unique Visitors", sub: "UPTAC Predictor in 30 days" },
  { number: "12,000+", label: "Active Students", sub: "Noteboat Platform across 50+ colleges" },
  { number: "1,200+", label: "GitHub Contributions", sub: "Maintained active open source history" },
];

const highlights = [
  {
    icon: <Building2 className="w-5 h-5 text-slate-300" />,
    title: "AKTU Nexus (Noteboat)",
    desc: "Academic document exchange platform serving 12,000+ active students across 50+ colleges with 2,000+ live concurrent visitors.",
    href: "/projects",
    tag: "Flagship Project",
    metric: "12,000+ Active Users",
  },
  {
    icon: <Cpu className="w-5 h-5 text-slate-300" />,
    title: "Airtel Telemetry Collector",
    desc: "Network telemetry collector built during Airtel internship using FastAPI, Prometheus, Grafana, and gNMI streaming engines.",
    href: "/experience",
    tag: "Enterprise Internship",
    metric: "15s Alert Rules",
  },
  {
    icon: <Code2 className="w-5 h-5 text-slate-300" />,
    title: "UPTAC Counselling Predictor",
    desc: "College admission predictor platform that processed 16,000+ requests for 30,000+ unique users in its first month.",
    href: "/projects",
    tag: "Production Tool",
    metric: "30,000+ Visitors",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c0e] text-[#f8fafc] bg-grid-pattern">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-[#2c3038] bg-[#14161a] text-slate-300 text-xs font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Founder @ Noteboat · Ex-Intern @ Airtel Center</span>
        </motion.div>

        {/* Hero Title & Bio */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 text-white"
        >
          Hi, I&apos;m Tushar Bhardwaj.
          <br />
          <span className="text-slate-300">Software, Network & AI Systems Engineer.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-5"
        >
          <MapPin size={13} className="text-slate-400" />
          <span>Computer Science (AI) Student @ KIET Group of Institutions</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8"
        >
          I&apos;m a Computer Science student building scalable enterprise software and web platforms.
          I founded Noteboat (12,000+ students), interned at Airtel Center building telemetry collectors, and write production code in TypeScript, Python, and Next.js.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap gap-3 items-center mb-12"
        >
          <Link href="/projects" className="btn-solid">
            View Projects <ArrowRight size={14} />
          </Link>
          <Link href="/about" className="btn-outline">
            About Me
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FileText size={14} className="text-slate-300" />
            Download Resume
          </a>
        </motion.div>

        {/* Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 p-5 sm:p-6 rounded-xl glass-card border border-[#22252a]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#22252a]">
            {metrics.map((m, idx) => (
              <div key={idx} className={`${idx !== 0 ? "pt-4 md:pt-0 md:pl-6" : ""}`}>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                  {m.number}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-200 mt-1">{m.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlights Section */}
        <div className="pt-6 border-t border-[#22252a]">
          <div className="flex justify-between items-end mb-6">
            <div>
              <span className="category-tag">Featured Work</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
                Core Projects & Experience
              </h2>
            </div>
            <Link href="/projects" className="text-xs font-mono text-slate-400 hover:text-white hover:underline flex items-center gap-1">
              All Projects <ChevronRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="glass-card p-5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    {item.icon}
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#1f2228] text-slate-300 border border-[#2c3038]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-slate-200 transition-colors">
                    {item.title}
                  </h3>

                  <div className="inline-block px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono mb-3">
                    {item.metric}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-white"
                >
                  Read details <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
