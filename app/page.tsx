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
    icon: <Building2 className="w-6 h-6 text-slate-300" />,
    title: "AKTU Nexus (Noteboat)",
    desc: "Academic document exchange platform serving 12,000+ active students across 50+ colleges with 2,000+ live concurrent visitors.",
    href: "/projects",
    tag: "Flagship Project",
    metric: "12,000+ Active Users",
  },
  {
    icon: <Cpu className="w-6 h-6 text-slate-300" />,
    title: "Airtel Telemetry Collector",
    desc: "Network telemetry collector built during Airtel internship using FastAPI, Prometheus, Grafana, and gNMI streaming engines.",
    href: "/experience",
    tag: "Enterprise Internship",
    metric: "15s Alert Rules",
  },
  {
    icon: <Code2 className="w-6 h-6 text-slate-300" />,
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

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-[#2c3038] bg-[#14161a] text-slate-300 text-xs font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Founder @ Noteboat · Ex-Intern @ Airtel Center</span>
        </motion.div>

        {/* Hero Title & Bio */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white max-w-4xl"
        >
          Hi, I&apos;m Tushar Bhardwaj.
          <br />
          <span className="text-slate-300">Software, Network & AI Systems Engineer.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-mono mb-6"
        >
          <MapPin size={14} className="text-slate-400" />
          <span>Computer Science (AI) Student @ KIET Group of Institutions</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-10"
        >
          I&apos;m a Computer Science student building scalable enterprise software and web platforms.
          I founded Noteboat (12,000+ students), interned at Airtel Center building telemetry collectors, and write production code in TypeScript, Python, and Next.js.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap gap-4 items-center mb-16"
        >
          <Link href="/projects" className="btn-solid">
            View Projects <ArrowRight size={15} />
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
            <FileText size={15} className="text-slate-300" />
            Download Resume
          </a>
        </motion.div>

        {/* Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16 p-8 rounded-2xl glass-card border border-[#22252a]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#22252a]">
            {metrics.map((m, idx) => (
              <div key={idx} className={`${idx !== 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}>
                <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
                  {m.number}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">{m.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlights Section */}
        <div className="pt-8 border-t border-[#22252a]">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="category-tag">Featured Work</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Core Projects & Experience
              </h2>
            </div>
            <Link href="/projects" className="text-xs font-mono text-slate-400 hover:text-white hover:underline flex items-center gap-1">
              All Projects <ChevronRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="glass-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {item.icon}
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#1f2228] text-slate-300 border border-[#2c3038]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-slate-200 transition-colors">
                    {item.title}
                  </h3>

                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono mb-4">
                    {item.metric}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white"
                >
                  Read details <ArrowRight size={13} />
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
