"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Mail, Check, Copy } from "lucide-react";

export default function PreFooter() {
  const [copied, setCopied] = useState(false);
  const email = "tbhardwaj.dev@gmail.com";

  const handleEmailClick = (e: React.MouseEvent) => {
    // Copy email to clipboard
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);

    // Also trigger mailto
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="py-14 sm:py-20 border-t border-[#22252a] bg-[#0b0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="glass-card p-8 sm:p-12 border-[#22252a] text-center max-w-4xl mx-auto relative overflow-hidden group">
          <span className="category-tag mb-3 inline-block">Available For Opportunities</span>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Currently open for new opportunities.
            <br />
            <span className="text-slate-300">Let’s build something scalable together.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you need enterprise software, telemetry automation, full-stack architecture, or project collaboration — let’s talk.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="btn-solid focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none group"
            >
              Get in Touch
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={handleEmailClick}
              type="button"
              className="btn-outline focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none flex items-center gap-2 relative cursor-pointer"
              title="Click to copy email & open mail client"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Mail size={15} className="text-slate-300" />
                  <span>Email Me Directly</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
