"use client";
import { motion } from "framer-motion";
import { Users, Activity, BookOpen, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#f3f4f6]">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="border-l-4 border-[#FFD700] pl-6">
                <h1 className="text-4xl font-bold mb-2 text-white">About Me</h1>
                <p className="text-[#FFD700] font-mono text-sm">./about_me.sh</p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-[#9ca3af] text-lg leading-relaxed mb-10">
                I&apos;m currently pursuing my B.Tech in Computer Science and Engineering (Artificial Intelligence) at KIET Group of Institutions (2024–2028). I founded Noteboat, an academic platform serving over 1,000+ registered users and 30,000+ total visitors across 50+ AKTU colleges. During my project internship at Airtel Center (Xtelify Ltd.), I architected an enterprise AI network telemetry collector using FastAPI, Prometheus, Grafana, and gNMI streaming engines for multi-VRF BGP routing data. I focus on writing clean, maintainable code, optimizing database performance, and building software that solves genuine user problems.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
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

              {/* Education Box */}
              <div className="bg-[#1a1a1a] border border-[#333333] p-6 rounded-sm mb-12">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-[#FFD700]">
                  <BookOpen size={16} /> Education Background
                </div>
                <div className="flex justify-between items-start flex-wrap gap-3">
                  <div>
                    <h3 className="text-white font-bold text-xl">KIET Group of Institutions</h3>
                    <p className="text-sm text-[#9ca3af] mt-1">
                      B.Tech in CS & Engineering (Artificial Intelligence)
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#FFD700] bg-[#0a0a0a] px-3 py-1 rounded border border-[#333333]">
                    2024 – 2028
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
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

