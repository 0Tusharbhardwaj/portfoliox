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

      <main className="flex-1 pt-16 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
        {/* Hero Section */}
        <section className="max-w-7xl w-full mx-auto px-6 py-4 lg:py-6 flex-1 flex items-center" id="hero">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7"
            >
              {/* Availability Badge */}
              <div className="flex items-center gap-2 text-[#FFD700] font-mono text-xs mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                AVAILABLE FOR HIRE
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-white">
                Hi! I&apos;m Tushar <br />
                <span className="text-[#FFD700]">Bhardwaj</span>
              </h1>

              <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                Software &amp; Systems Engineer. Building scalable platforms and network intelligence. Computer Science (AI) student building enterprise web platforms. Founded Noteboat (1,000+ registered users) and interned at Airtel Center building streaming telemetry collectors.
              </p>

              {/* Hero Action Links */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Link
                  href="/projects"
                  className="bg-[#FFD700] text-[#0a0a0a] hover:bg-yellow-400 px-5 py-2.5 text-sm font-semibold flex items-center gap-2 transition-all rounded-sm font-mono shadow-sm"
                >
                  View Projects
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#333333] hover:border-[#FFD700] text-white px-5 py-2.5 text-sm font-semibold flex items-center gap-2 transition-all rounded-sm font-mono"
                >
                  Contact Me!
                  <Lock size={16} />
                </Link>
              </div>

              {/* Key Skills Quick List */}
              <div>
                <p className="text-[#9ca3af] font-mono text-xs mb-2">Skills :</p>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {["TypeScript", "Python", "Next.js", "FastAPI", "Prometheus", "Grafana", "MongoDB"].map((skill) => (
                    <span key={skill} className="bg-[#1a1a1a] border border-[#333333] px-2.5 py-1 rounded text-gray-300">
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
                width={340}
                height={340}
                className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] max-h-[380px] object-cover rounded-sm border border-[#333333] transition-all duration-500 shadow-xl"
                src="https://imgh.in/host/a3anmp"
              />
            </motion.div>
          </div>
        </section>

        {/* About Details Section */}
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
      </main>

      <Footer />
    </div>
  );
}


