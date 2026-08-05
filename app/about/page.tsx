"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Activity, ArrowRight, Lock, ExternalLink, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#f3f4f6]">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero / About Headline Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20" id="hero">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
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

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/projects"
                  className="bg-[#FFD700] text-[#0a0a0a] hover:bg-yellow-400 px-6 py-3 font-semibold flex items-center gap-2 transition-all rounded-sm font-mono shadow-sm"
                >
                  View Projects
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#333333] hover:border-[#FFD700] text-white px-6 py-3 font-semibold flex items-center gap-2 transition-all rounded-sm font-mono"
                >
                  Contact Me!
                  <Lock size={18} />
                </Link>
              </div>

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
              className="lg:col-span-5 flex justify-center lg:justify-end w-full"
            >
              <img
                alt="Tushar Bhardwaj Portrait"
                loading="eager"
                width={400}
                height={500}
                className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] h-auto object-cover object-top rounded-sm border border-[#333333] transition-all duration-500 shadow-2xl"
                src="https://imgh.in/host/a3anmp"
              />
            </motion.div>
          </div>
        </section>

        {/* Detailed Bio & Metrics Section */}
        <section className="border-t border-[#333333] bg-[#0a0a0a] py-24" id="about-details">
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

        {/* Technical Stack Competencies Section */}
        <section className="border-t border-[#333333] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[#FFD700] font-mono text-sm mb-2 uppercase">TECHNICAL_COMPETENCIES</p>
            <h2 className="text-3xl font-bold text-white mb-12">Production Skills &amp; Stack</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Certifications Section */}
        <section className="border-t border-[#333333] bg-[#0a0a0a] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#1a1a1a] border border-[#333333] p-6 rounded-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-[#0a0a0a] border border-[#333333] flex items-center justify-center text-[#FFD700] shrink-0">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">AWS Certified Cloud Practitioner</h4>
                <p className="text-xs text-[#9ca3af] font-mono mt-0.5">
                  Amazon Web Services · Verified Credential
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


