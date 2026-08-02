"use client";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function PreFooter() {
  return (
    <section className="py-14 sm:py-20 border-t border-[#22252a] bg-[#0b0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="glass-card p-8 sm:p-12 border-[#22252a] text-center max-w-4xl mx-auto relative overflow-hidden group">
          {/* Subtle background highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <span className="category-tag mb-3 inline-block">Available For Opportunities</span>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Currently open for new opportunities.
            <br />
            <span className="text-slate-300">Let’s build something scalable together.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you need enterprise software, telemetry automation, full-stack architecture, or project collaboration — let’s talk.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact"
              className="btn-solid focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none group"
            >
              Get in Touch
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="mailto:tbhardwaj.dev@gmail.com"
              className="btn-outline focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none flex items-center gap-2"
            >
              <Mail size={15} className="text-slate-300" />
              Email Me Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
